function VinetkaCarMonth(timeToExpire){

	this.timeToExpire = timeToExpire || 31;
	
	VinetkaCarDaily.call(this, this.timeToExpire); //expire in 31 days NOTE !!
	
	//price multiplyer default -- VinetkaCarDaily
	this.price *= 10;
}