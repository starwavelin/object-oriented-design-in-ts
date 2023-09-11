import Animal from './Animal';

class Lion extends Animal {
    // method overriding
    printAnimal(): void {
        console.log('I am from the Lion class\n');
    }
}

export default Lion;
