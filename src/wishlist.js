import Car from "./car";

console.log(Car);

class WishList {
    constructor () {
        this.nextId = 0;
        this.list = [];
    }
    add(make, model, year) {
        let car = new Car(this.nextId++, make, model, year);
        this.list.push(car);
      }
    
    remove(carId) {
        this.list = this.list.filter((car) => car.id != carId);
      }
    }
    
    export default WishList;