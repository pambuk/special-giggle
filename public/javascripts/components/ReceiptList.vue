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
    </div>
</template>

<script>
    const mapState = require('vuex').mapState;
    const mapActions = require('vuex').mapActions;

    module.exports = {
        computed: mapState({
            receipts: state => state.receipts
        }),
        methods: mapActions([
            'deleteReceipt'
        ])
    }
</script>

<style scoped>
</style>