<template>
    <div>
        <div class="field">
            <div class="control">
                <input class="input" type="text" placeholder="Total amount">
            </div>
        </div>

        <div>
            <a @click="addReceipt()" class="button is-success">Add</a>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {};
        },
        methods: {
            addReceipt: function () {
                console.log('test');
            }
        }
    }
</script>

<style scoped>
</style>