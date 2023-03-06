"use strict";
exports.__esModule = true;
var Client_1 = require("../../Atividade-3/ts/Client");
var OrderItem_1 = require("../../Atividade-3/ts/OrderItem");
var Order = /** @class */ (function () {
    function Order(client, items, paymentMethod, discount) {
        this._items = [];
        this._discount = 0;
        this._client = client;
        this.items = items;
        this._paymentMethod = paymentMethod;
        this.discount = discount;
    }
    Object.defineProperty(Order.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (value) {
            this._client = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            if (value.length === 0) {
                throw new Error('O pedido deve ter pelo meno um item.');
            }
            this._items = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "paymentMethod", {
        get: function () {
            return this._paymentMethod;
        },
        set: function (value) {
            this._paymentMethod = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "discount", {
        get: function () {
            return this._discount;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('O desconto não pode ser um valor negativo.');
            }
            this._discount = value;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.calculateTotal = function () {
        return this.items
            .reduce(function (previousValue, item) {
            var total = previousValue + item.price;
            return total;
        }, 0);
    };
    Order.prototype.calculateTotalWithDiscount = function () {
        return this.calculateTotal() * (1 - this.discount);
    };
    return Order;
}());
exports["default"] = Order;
var client = new Client_1["default"]('João');
var sandwich = new OrderItem_1["default"]('Sanduíche Natural', 5.00);
var juice = new OrderItem_1["default"]('Suco de Abacaxi', 5.00);
var dessert = new OrderItem_1["default"]('Gelatina de Uva', 2.50);
var order = new Order(client, [sandwich, juice, dessert], 'dinheiro', 0.10);
console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());
