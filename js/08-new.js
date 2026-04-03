function tataCar(classicNumber, modelNumber) {
    this.classicNumber = classicNumber;
    this.modelNumber = modelNumber;
    this.fuelLevel = 100;
}
``
const car1 = new tataCar("123","Nexon");
console.log(car1);