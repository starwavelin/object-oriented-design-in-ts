// Multi-level inheritance
// GasolineCar class is derived from the FuelCar class, which is further derived from the Vehicle class

import FuelCar from './FuelCar';

// Derived class (Grandchild)
export class GasolineCar extends FuelCar {
    private gasCapacity: string;

    constructor(name, model, combustType, gasCapacity) {
        super(name, model, combustType);
        this.gasCapacity = gasCapacity;
    }

    public getGasolineCar() {
        this.getName();
        console.log(', gas capacity is ' + this.gasCapacity);
    }
}
