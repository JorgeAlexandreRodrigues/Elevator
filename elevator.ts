export class Elevator {
    floor: number;
    totalFloors: number;
    elevatorCapacity: number;
    amountOfPeople: number;

    constructor(elevatorCapacity: number, totalFloors: number) {
        this.elevatorCapacity = elevatorCapacity;
        this.totalFloors = totalFloors;
        this.floor = 0;
        this.amountOfPeople = 0;
    }

    enter(): void {
        if (this.amountOfPeople < this.elevatorCapacity) {
            this.amountOfPeople = this.amountOfPeople + 1;

        }
        else {
            console.log("Elevator is full");
        }
    }

    leave(): void {
        if (this.amountOfPeople != 0) {
            this.amountOfPeople--;
        }
        else {
            console.log("Empty Elevator");
        }
    }

    private up(): void {
        if (this.floor < this.totalFloors) {
            this.floor++;
        }
        else {
            console.log("You are on the top floor");
        }
    }
    private down(): void {
        if (this.floor != 0) {
            this.floor--;

        }
        else {
            console.log("You are on the ground floor");
        }
    }

    call(newFloor: number) {
        let differenceFloors: number = newFloor - this.floor;
        if (differenceFloors < 0) {
            let positive = differenceFloors * -1;
            for (let i = 0; i < positive; i++) {
                this.down();
            }
        }

        if (differenceFloors > 0) {
            for (let i = 0; i < differenceFloors; i++) {
                this.up();
            }
        }
    }

    toString() {
        return (`Floor: ${this.floor} | Amount of people in the elevator: ${this.amountOfPeople}`)
    }

}