//Daily Vinetka
function VinetkaBus(timeToExpire){
	var colorVinetkaCar = 'blue';

	this.price = 9;

	this.creationDate = new Date();
	this.timeToExpire = timeToExpire;
	
	this.expireDate = new Date();
	this.expireDate.setDate(this.creationDate.getDate()+this.timeToExpire);

	vinetka.call(this, this.creationDate, colorVinetkaCar, this.expireDate);
}

VinetkaBus.prototype = Object.create(vinetka.prototype);
VinetkaBus.prototype.constructor = VinetkaBus;

VinetkaBus.prototype.getPrice = function(){
	throw new Error('overwrite base method getPrice -- VinetkaCar');
}