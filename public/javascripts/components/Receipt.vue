<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <p class="title is-5">
                    {{ receipt.amount.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'}) }}
                </p>
            </div>

            <div class="column">
                <input v-model="listItem.amount" class="input" placeholder="Add receipt item" />
                <input v-model="listItem.name" class="input" placeholder="Item's name" />
                <button @click="addListItem()" class="button">Add list item</button>
            </div>

            <div class="column">
                <p class="title is-6">Items:</p>
                <ul>
                    <li v-for="item in receipt.items">
                        {{ item.name}}, {{ item.amount.toLocaleString("pl-PL", {style: "currency", currency: "PLN"}) }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    const currencyFormat = require('../mixins/currencyFormat');

    module.exports = {
        mixins: [currencyFormat],
        data() {
            return {
                listItem: {}
            };
        },
        computed: {
            receipt() {
                console.log('receipt', this.$store.getters.receiptById(this.$route.params.id));
                return this.$store.getters.receiptById(this.$route.params.id);
            }
        },
        methods: {
            addListItem() {
                let listLength = (this.receipt.items ? this.receipt.items.length : 0);
                this.listItem.amount = Number.parseFloat(this.listItem.amount);

                this.$store
                    .dispatch('addReceiptItem', {
                        id: this.$route.params.id,
                        listItem: {id: listLength + 1, ...this.listItem}
                    })
                    .then(() => {
                        this.listItem = {};
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>
</style>