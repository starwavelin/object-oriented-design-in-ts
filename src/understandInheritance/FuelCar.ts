// Single inheritance
// FuelCar class extending from Vehicle class

import { Vehicle } from './Vehicle';

// Derived class (Child)
class FuelCar extends Vehicle {
    private combustType: string;

    constructor(name: string, model: string, combustType: string) {
        super(name, model);
        this.combustType = combustType;
    }

    public getFuelCar() {
        this.getName();
        console.log(', combust type is ' + this.combustType);
    }
}

export default FuelCar;
