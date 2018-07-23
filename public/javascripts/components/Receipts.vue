<template>
    <div>
        <add-receipt></add-receipt>
        <receipt-list></receipt-list>
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