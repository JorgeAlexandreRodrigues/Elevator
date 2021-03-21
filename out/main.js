"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elevator_1 = require("./elevator");
var elevator1 = new elevator_1.Elevator(5, 10);
elevator1.enter();
elevator1.call(5);
elevator1.enter();
elevator1.call(2);
elevator1.call(1);
console.log(elevator1.toString());
elevator1.enter();
elevator1.enter();
elevator1.leave();
elevator1.leave();
elevator1.leave();
elevator1.leave();
elevator1.leave();
console.log(elevator1.toString());
//# sourceMappingURL=main.js.map