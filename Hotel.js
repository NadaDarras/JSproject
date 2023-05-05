class Hotel {

    address;
    NumberOfRoom;
    minFloor;
    maxFloor;
    const room = {
        "floorNum": 2,
        "roomNum": 4,
        "price": 353,
        "#isBooked": true,
    }



    printAdver() {
        console.log("The hotel address is :" + this.address +
            "number of room is:" + this.NumberOfRoom + "min floor of hotel is" +
            this.minFloor + "max floor of hotel is :" + this.maxFloor)
    }
    ListedBookRoom() {
        console.log(this.room);
    }
}
const h = new Hotel("west bank", 33, 1, 4);
console.log(h);