function Driver(name, money){
	this.name = name;
	this.money = money;

	this.vehicles = [];
	this.gasStation = null;
}

Driver.prototype.addVehicle = function(Vehicle){
	if(Vehicle instanceof vehicle){
		this.vehicles.push(Vehicle);
	}
}

Driver.prototype.bindGasStation = function(GasStation){
	if(GasStation instanceof GasStation){
		this.gasStation = GasStation;
	}
}

Driver.prototype.getGasStation = function(){
	return this.gasStation;
}

Driver.prototype.buyVignette = function(indexOfCar){
	var currVehicle = this.vehicles[indexOfCar];
	if(currVehicle instanceof vehicle){
		var newVignette = this.gasStation.requestVignette(this);
	}
	currVehicle.setActiveVignette(newVignette);

}
Driver.prototype.buyAllVignette = function(){
	var expiredVehicles = this.checkActiveVignette(new Date());

	for(i in expiredVehicles){

	}
}


Driver.prototype.checkActiveVignette = function(dateNow){
	var expiredVehicles = [];

	for(i in this.vehicles){
		var currVehicle  = this.vehicles[i];
		
		if(currVehicle.getActiveVignette() === null || currVehicle.getActiveVignette().isExpired() ){
			expiredVehicles.push(currVehicle);	
		}
	}

	return expiredVehicles;
}