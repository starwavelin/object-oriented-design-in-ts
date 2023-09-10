import { Vehicle } from './Vehicle';

// Hierarchical inheritance
// Alongside the FuelCar class, the ElectricCar class is also extending from Vehicle class
// Another Derived class (Child)
class ElectricCar extends Vehicle {
    private batteryPower: string;

    constructor(name, model, batteryPower) {
        super(name, model);
        this.batteryPower = batteryPower;
    }

    public getElectricCar() {
        this.getName();
        console.log(', battery power is ' + this.batteryPower);
    }
}

export default ElectricCar;
