"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elevator = void 0;
var Elevator = /** @class */ (function () {
    function Elevator(liftCapacity, totalFloors) {
        this.liftCapacity = liftCapacity;
        this.totalFloors = totalFloors;
        this.floor = 0;
        this.amountPeople = 0;
    }
    Elevator.prototype.enter = function () {
        if (this.amountPeople < this.liftCapacity) {
            this.amountPeople = this.amountPeople + 1;
        }
        else {
            console.log("Elevator is full");
        }
    };
    Elevator.prototype.leave = function () {
        if (this.amountPeople != 0) {
            this.amountPeople--;
        }
        else {
            console.log("Empty Elevator");
        }
    };
    Elevator.prototype.up = function () {
        if (this.floor < this.totalFloors) {
            this.floor++;
        }
        else {
            console.log("You are on the top floor ");
        }
    };
    Elevator.prototype.down = function () {
        if (this.floor != 0) {
            this.floor--;
        }
        else {
            console.log("You are on the ground floor");
        }
    };
    Elevator.prototype.call = function (newFloor) {
        var differenceFloors = newFloor - this.floor;
        if (differenceFloors < 0) {
            var positive = differenceFloors * -1;
            for (var i = 0; i < positive; i++) {
                this.down();
            }
        }
        if (differenceFloors > 0) {
            for (var i = 0; i < differenceFloors; i++) {
                this.up();
            }
        }
    };
    Elevator.prototype.toString = function () {
        return ("Floor: " + this.floor + " | Amount of people in the elevator: " + this.amountPeople);
    };
    return Elevator;
}());
exports.Elevator = Elevator;
//# sourceMappingURL=elevator.js.map