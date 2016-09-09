//Daily Vinetka
function VinetkaCarDaily(timeToExpire){
	var colorVinetkaCar = 'yellow';
	
	this.price = 5;

	this.timeToExpire = timeToExpire || 1;

	vinetka.call(this, colorVinetkaCar, this.timeToExpire);
}

VinetkaCarDaily.prototype = Object.create(vinetka.prototype);
VinetkaCarDaily.prototype.constructor = VinetkaCarDaily;
