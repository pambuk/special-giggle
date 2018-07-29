<template>
    <div class="content">
        <ul>
            <li v-for="item in receipts">
                <router-link :to="'/receipts/' + item._id">
                    {{ item.amount.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'}) }}
                </router-link>
                <a @click="deleteReceipt(item._id)" class="delete"></a>
            </li>
        </ul>

        <hr>

        <p>{{ sum }}</p>
    </div>
</template>

<script>
    const mapState = require('vuex').mapState;
    const mapActions = require('vuex').mapActions;

    module.exports = {
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