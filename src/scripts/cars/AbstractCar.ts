import {Car} from "./Car";

enum TransmissionTypes {
    MANUAL = 'manual',
    AUTOMATE = 'automate'
}

abstract class AbstractCar implements Car {
    private _transmissionType:TransmissionTypes = TransmissionTypes.MANUAL;
    private model:string;
    private brand:string;

    set transmissionType(value: TransmissionTypes) {
        this._transmissionType = value;
    }

    public assembleCar(brand:string, model:string, ...additionalParameters:string[]):string {
        this.brand = brand;
        this.model = model;
        return this.getAssembleCar();
    }

    private getAssembleCar(...parameters:string[]):string{
        let car = `${this.brand} model ${this.model} with ${this._transmissionType} transmission`;

        if(parameters) {
            parameters.forEach((parameter) => {car += `, ${parameter}`});
        }

        return car;
    }
}

export { TransmissionTypes, AbstractCar };
