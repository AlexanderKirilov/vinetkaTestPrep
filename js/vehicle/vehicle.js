function vehicle(model, modelYear){
	this.model = model;
	this.modelYear = modelYear;
}

vehicle.prototype.setActiveVignette = function(Vinetka){
	throw new Error('overwrite base method in child class -- vehicle');
}