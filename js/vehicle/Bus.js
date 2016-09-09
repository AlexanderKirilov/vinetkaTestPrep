function Bus(model, modelYear){
	vehicle.call(this, model,modelYear);
	this._vinetka = null;
}

Bus.prototype = Object.create(vehicle.prototype);
Bus.prototype.constructor = Bus;

Bus.prototype.setActiveVignette = function(Vinetka){
	Vinetka.use();
	this._vinetka = Vinetka;

	return 20;//seconds
}

Bus.prototype.getActiveVignette = function(){
	return this._vignette;
}