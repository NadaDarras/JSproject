class Room {
    floorNum;
    roomNum;
    price;
    isBooked;

    constructor(floorNum, roomNum, price, isBooked) {
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this.#isBooked = isBooked;
    }

    printRoom() {
        console.log("floor number :  " + this.floorNum + "room number :" + this.roomNum +
            "room price :" + this.price);
    }
    book() {
        if (this.#isBooked == false) {
            this.#isBooked = true;
        }

        console.log("the room  is booked ?  " + this.#isBooked);
    }

    isBooked(isBooked) {
        if (this.#isBooked == isBooked)
            return true;
        else {
            return false;
        }
    }

}

const r = new Room(2, 4, 342, false);
console.log(r);
console.log(r.isBooked(false));