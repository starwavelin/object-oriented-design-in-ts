import ElectricCar from './ElectricCar';
import FuelCar from './FuelCar';
import { GasolineCar } from './GasolineCar';

console.log('Single inheritance:');
const Fuel = new FuelCar('Honda', 'Accord', 'Petrol');
Fuel.getFuelCar();
console.log('\n');

console.log('Hierarchical inheritance:');
const Electric = new ElectricCar('Tesla', 'ModelX', '200MWH');
Electric.getElectricCar();
console.log('\n');

console.log('Multi-Level inheritance:');
const Gasoline = new GasolineCar('Toyota', 'Corolla', 'Gasoline', '30 liters');
Gasoline.getGasolineCar();

console.log('\n');
console.log(
    'JavaScript/TypeScript does not support Multiple Inheritance through classes',
);
