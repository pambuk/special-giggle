const Vuex = require('vuex');
const axios = require('axios');

const SET_RECEIPTS = 'SET_RECEIPTS';
const UPDATE_RECEIPT_ITEMS = 'UPDATE_RECEIPT_ITEMS';

const store = new Vuex.Store({
    state: {
        receipts: []
    },
    mutations: {
        [SET_RECEIPTS](state, receipts) {
            console.log('mutate receipts', receipts);
            state.receipts = receipts;
        },
        [UPDATE_RECEIPT_ITEMS](state, payload) {
            console.log('mutate receipt\'s items');
            state.receipts.find(item => {
                console.log('try to match ids', item, payload);
                if (payload.id === item._id) {
                    console.log('items', item.items);
                    item.items.push(payload.listItem);
                }
            });
        }
    },
    getters: {
        receipts(state) {
            console.log('get receipts');
            return state.receipts;
        },
        receiptById: (state) => (id) => {
            console.log('receipt by id', id);
            return state.receipts.find(receipt => receipt._id === id);
        }
    },
    actions: {
        fetchReceipts({commit}) {
            console.log('fetching receipts');

            axios.get('/receipts/').then(response => {
                commit(SET_RECEIPTS, response.data);
            });
        },
        addReceipt({dispatch}, receipt) {
            console.log('api add new receipt');

            axios.post('/receipts/', receipt)
                .then(() => {
                    dispatch('fetchReceipts');
                })
                .catch(error => console.log(error));
        },
        deleteReceipt({dispatch}, id) {
            console.log('delete receipt ', id);

            axios.delete('/receipts/' + id)
                .then(() => {
                    dispatch('fetchReceipts');
                })
                .catch(error => console.log(error));
        },
        addReceiptItem({commit}, payload) {
            console.log('add list item to receipt', payload);

            return new Promise((resolve, reject) => {
                axios
                    .put('/receipts/' + payload.id, {payload})
                    .then(() => {
                        commit(UPDATE_RECEIPT_ITEMS, payload);
                        resolve();
                    })
                    .catch(() => reject());
            });
        }
    }
});

module.exports = store;
