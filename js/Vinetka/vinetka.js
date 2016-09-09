function vinetka(color, timeToExpire){
	this.color = color;
	this.timeToExpire = timeToExpire;

	this.creationDate = null;
	this.expireDate;
}

vinetka.prototype.use = function(){
	if(this.creationDate === null){
		var dateNow = new Date();
		this.creationDate = dateNow;
		
		this.expireDate = new Date(dateNow.getTime());
		expireDate.setDate()
	}
}

vinetka.prototype.isExpired = function(){
	if(this.creationDate instanceof Date){
		this.creationDate > this.
	}else{
		throw new Error('unused Vinetka');
	}
}