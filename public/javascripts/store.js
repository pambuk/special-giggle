const Vuex = require('vuex');
const axios = require('axios');
const mongodb = require('mongodb');

const SET_RECEIPTS = 'SET_RECEIPTS';
const store = new Vuex.Store({
    state: {
        receipts: []
    },
    mutations: {
        [SET_RECEIPTS](state, receipts) {
            console.log('mutate receipts', receipts);
            state.receipts = receipts;
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
        }
    }
});

module.exports = store;
