"use strict";

const currencyFormat = {
    created() {
        console.log("created currencyFormat");
    },
    methods: {
        formatAsCurrency: input => {
            console.log("input", input);
            if (typeof input !== "undefined") {
                return input.toLocaleString("pl-PL", {style: "currency", currency: "PLN"});
            }

            return input;
        }
    }
};

module.exports = currencyFormat;