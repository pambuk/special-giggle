
const currencyFormat = {
    created() {
        console.log('created currencyFormat');
    },
    methods: {
        formatAsCurrency: (input) => {
            if (typeof input !== 'undefined') {
                return input.toLocaleString('pl-PL', {style: 'currency', currency: 'PLN'});
            }
        }
    }
};

module.exports = currencyFormat;