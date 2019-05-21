import {Track} from "./cars/Track";
import {SmallCar} from "./cars/SmallCar";
import {TransmissionTypes} from "./cars/AbstractCar";


function init() {
    let track = new Track();
    let smallCar = new SmallCar();

    track.addTrailer('Maersk');
    smallCar.addNewLight();
    smallCar.transmissionType = TransmissionTypes.AUTOMATE;

    alert(track.assembleCar('reno', 'Tekno Scania 142H'));
    alert('car with lite count = ' + smallCar.liteCounter);
    alert(smallCar.assembleCar('volga', 'gaz-23','top trunk'));
}

init();
