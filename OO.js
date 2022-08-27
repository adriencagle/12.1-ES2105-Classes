class Vehicleclass {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "beep beep";
    }
    toString(){
        return "${this.year} ${this.make} ${this.model}";
    }
}
class Car extends Vehicle{
    constructor (make, model, year){    
        super (make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Car {
    constructor(make, model, year){
        super (make, model, year)
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOOM";
    }
}

class Garage{
    constructor (num){
        this.vehicles = [];
        this.limit = num;
    }
    add(vehicle){
        if (vehicle instanceof Vehicleclass){
            if (vehicles.length < lim){
            this.vehicles.push(vehicle);
            return "Vehicle Added";
            }
            else{
            return "No Room";
            }
         }
        else{
            return "Not a vehicle";
        }
    }
}