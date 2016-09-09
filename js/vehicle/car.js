function Car(model, modelYear){
	vehicle.call(this, model,modelYear);
	this._vinetka = null;
}

Car.prototype = Object.create(vehicle.prototype);
Car.prototype.constructor = Car;


Car.prototype.setActiveVignette = function(Vinetka){
	Vinetka.use();
	this._vinetka = Vinetka;

	return 5;//seconds
}

Car.prototype.getActiveVignette = function(){
	return this._vignette;
}