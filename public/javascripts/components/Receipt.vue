<template>
    <div>
        {{ receipt.amount.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'}) }}
    </div>
</template>

<script>
    // const mapGetters = require('vuex').mapGetters;
    module.exports = {
        computed: {
            receipt() {
                return this.$store.getters.receiptById(this.$route.params.id);
            }
        }
    }
</script>

<style scoped>
</style>