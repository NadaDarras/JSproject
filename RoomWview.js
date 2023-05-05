class RoomWithView extends Room {
    view;
    NumberOFbeds;

    constructor(view, NumberOFbeds) {
        super(this.floorNum, this.roomNum, this.price);
        this.view = view;
        this.NumberOFbeds = NumberOFbeds;


    }
}