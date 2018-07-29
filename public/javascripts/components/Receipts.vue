<template>
    <div class="columns">
        <div class="column is-three-fifths">
            <add-receipt></add-receipt>
            <receipt-list></receipt-list>
        </div>
        <div class="column"></div>
    </div>
</template>

<script>
    const AddReceipt = require('./AddReceipt.vue');
    const ReceiptList = require('./ReceiptList.vue');

    module.exports = {
        components: {
            'add-receipt': AddReceipt,
            'receiptList': ReceiptList
        },
    }
</script>

<style scoped>
</style>