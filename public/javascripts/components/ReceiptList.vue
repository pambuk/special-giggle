<template>
    <div>
        <ul>
            <li v-for="item in receipts">
                <router-link :to="'/receipts/' + item._id">
                    {{ formatAsCurrency(item.amount) }}
                </router-link>
                <a @click="deleteReceipt(item._id)" class="delete"></a>
            </li>
        </ul>

        <hr>

        <p>{{ formatAsCurrency(sum) }}</p>
    </div>
</template>

<script>
    const mapState = require('vuex').mapState;
    const mapActions = require('vuex').mapActions;
    const currencyFormat = require('../mixins/currencyFormat.js');

    module.exports = {
        mixins: [currencyFormat],
        computed: mapState({
            receipts: state => state.receipts,
            sum: state => {
                if (state.receipts.length > 0) {
                    let reducer = (accumulator, item) => {
                        return Number.parseFloat(accumulator) + Number.parseFloat(item.amount);
                    };

                    return state.receipts.reduce(reducer, 0);
                }
            }
        }),
        methods: mapActions([
            'deleteReceipt'
        ])
    }
</script>

<style scoped>
</style>