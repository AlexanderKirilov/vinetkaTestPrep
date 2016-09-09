//Daily Vinetka
function VinetkaTruckDaily(){
	var colorVinetkaCar = 'red';

	this.price = 7;

	this.creationDate = new Date();
	this.timeToExpire = 1;
	
	this.expireDate = new Date();
	this.expireDate.setDate(this.creationDate.getDate()+this.timeToExpire);

	vinetka.call(this, this.creationDate, colorVinetkaCar, this.expireDate);
}

VinetkaTruckDaily.prototype = Object.create(vinetka.prototype);
VinetkaTruckDaily.prototype.constructor = VinetkaTruckDaily;