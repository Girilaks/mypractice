class Car {
	constructor(name, color, mile) {
  	this.name = name,
    this.color = color,
    this.mile = mile
  }
}
class Cars {
    arr = [
        new Car("Audi", "White", "100"),
        new Car("Benz", "White", "200")
    ];

    showCars(){
        for(let car of this.arr){
            console.log({
                name: car.name,
                color: car.color,
                mile: car.mile
            })
        }
    }
}

let re = new Cars();
re.showCars();