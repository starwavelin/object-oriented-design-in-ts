// Base class (Parent)
export class Vehicle {
    private name: string;
    private model: string;

    constructor(name: string, model: string) {
        this.name = name;
        this.model = model;
    }

    public getName(): void {
        console.log('The car is a ' + this.name + ' ' + this.model);
    }
}
