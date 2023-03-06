"use strict";
exports.__esModule = true;
var BooksWishlist = /** @class */ (function () {
    function BooksWishlist(book) {
        this.wishlist = [];
        this.wishlist.push(book);
    }
    BooksWishlist.prototype.addToWishlist = function (newBook) {
        this.wishlist.push(newBook);
    };
    BooksWishlist.prototype.showWishlist = function () {
        return console.log(this.wishlist);
    };
    return BooksWishlist;
}());
var wishlist = new BooksWishlist({
    book: 'The Road',
    author: 'Cormac McCarthy',
    genre: 'Dystopia'
});
wishlist.addToWishlist({
    book: 'Misery',
    author: 'Stephen King',
    genre: 'Thriller'
});
wishlist.showWishlist();
exports["default"] = BooksWishlist;
wishlist.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishlist.showWishlist();
