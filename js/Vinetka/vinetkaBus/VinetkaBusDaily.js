//Daily Vinetka
function VinetkaBusDaily(){
	var colorVinetkaCar = 'blue';

	this.price = 9;

	this.creationDate = new Date();
	this.timeToExpire = 1;
	
	this.expireDate = new Date();
	this.expireDate.setDate(this.creationDate.getDate()+this.timeToExpire);

	vinetka.call(this, this.creationDate, colorVinetkaCar, this.expireDate);
}

VinetkaBusDaily.prototype = Object.create(vinetka.prototype);
VinetkaBusDaily.prototype.constructor = VinetkaBusDaily;