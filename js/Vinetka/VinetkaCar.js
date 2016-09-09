//Daily Vinetka
function VinetkaCar(timeToExpire){
	var colorVinetkaCar = 'yellow';
	
	this.price = 5;
	
	this.creationDate = new Date();
	this.timeToExpire = timeToExpire;
	
	this.expireDate = new Date();
	this.expireDate.setDate(this.creationDate.getDate()+this.timeToExpire);

	vinetka.call(this, this.creationDate, colorVinetkaCar, this.expireDate);
}

VinetkaCar.prototype = Object.create(vinetka.prototype);
VinetkaCar.prototype.constructor = VinetkaCarDaily;

VinetkaCar.prototype.getPrice = function(){
	throw new Error('overwrite base method getPrice -- VinetkaCar');
}