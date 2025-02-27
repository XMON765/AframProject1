class Heal{
	constructor(x,y,z,color){
		this.x=x;
		this.y=y;
		this.z=z;
		this.obj = document.createElement("a-box");
		this.obj.setAttribute("color", color);
		this.obj.setAttribute("position", {x:this.x,y:this.y,z:this.z});
		
		
		this.on = true;
		
		scene.append(this.obj);
	}
	
	healing(amount){
		let d = distance(this.obj, camera);
		if (d<2 && this.on){
			this.on = false;
			health+=amount;
			console.log("heal");
		}
		
	}
	
	healShield(amount){
		let d = distance(this.obj, camera);
		if (d<2 && this.on){
			this.on = false;
			shieldHealth+=amount;
			console.log("heal");
		}
	}
	
	
}