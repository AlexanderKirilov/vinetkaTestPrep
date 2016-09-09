function VinetkaCarYear(){
	this.timeToExpire = 365;

	VinetkaCarMonth.call(this, this.timeToExpire); //expire in 31 days NOTE !!
	
	this.price *= 6;

}