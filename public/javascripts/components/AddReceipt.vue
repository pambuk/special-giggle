<template>
    <div>
        <div class="field">
            <div class="control">
                <input @keyup.enter="add()" v-model="amount" class="input" type="text" placeholder="Total amount">
            </div>
        </div>

        <div>
            <a @click="add()" class="button is-success">Add</a>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                amount: 0
            };
        },
        methods: {
            add: function () {
                if (this.amount > 0) {
                    this.$store.dispatch('addReceipt', {amount: this.amount});
                }
            }
        }
    }
</script>

<style scoped>
</style>