var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character() {
    }
    Character.characterPresentation = function (character) {
        character.talk();
        character.specialMove();
    };
    return Character;
}());
var MeeleeCharacter = /** @class */ (function (_super) {
    __extends(MeeleeCharacter, _super);
    function MeeleeCharacter(name, specialMoveName) {
        var _this = _super.call(this) || this;
        _this.nome = name;
        _this.SpecialMove = specialMoveName;
        return _this;
    }
    MeeleeCharacter.prototype.talk = function () {
        console.log("Hi, I'm " + this.nome + ". I attack at close range.");
    };
    MeeleeCharacter.prototype.specialMove = function () {
        console.log(this.SpecialMove);
    };
    return MeeleeCharacter;
}(Character));
var LongRangeCharacter = /** @class */ (function (_super) {
    __extends(LongRangeCharacter, _super);
    function LongRangeCharacter(name, specialMoveName) {
        var _this = _super.call(this) || this;
        _this.nome = name;
        _this.SpecialMove = specialMoveName;
        return _this;
    }
    LongRangeCharacter.prototype.talk = function () {
        console.log("Hi, I'm " + this.nome + ". I can attack from a long range.");
    };
    LongRangeCharacter.prototype.specialMove = function () {
        console.log(this.SpecialMove);
    };
    return LongRangeCharacter;
}(Character));
function smash(character) {
    character.talk();
    character.specialMove();
}
var yoshi = new MeeleeCharacter('yoshi', 'Super dragon');
var samus = new LongRangeCharacter('samus', 'Zero Laser');
Character.characterPresentation(yoshi);
Character.characterPresentation(samus);
