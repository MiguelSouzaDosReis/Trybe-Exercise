"use strict";
exports.__esModule = true;
var notifications_1 = require("./notifications");
var ReadingTracker = /** @class */ (function () {
    function ReadingTracker(readingGoal) {
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }
    ReadingTracker.prototype.trackReadings = function (readsCount) {
        this.booksRead += readsCount;
        if (this.booksRead >= this.readingGoal) {
            (0, notifications_1["default"])('Congratulations! You\'ve reached your reading goal!');
            return;
        }
        (0, notifications_1["default"])('There are still some books to go!');
    };
    return ReadingTracker;
}());
var readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);
