function Truck(model, modelYear){
	vehicle.call(this, model,modelYear);
	this._vinetka = null;
}

Truck.prototype.setActiveVignette = function(Vinetka){
	Vinetka.use();
	this._vinetka = Vinetka;

	return 10;//seconds
}

Truck.prototype.getActiveVignette = function(){
	return this._vignette;
}

Truck.prototype = Object.create(vehicle.prototype);
Truck.prototype.constructor = Truck;