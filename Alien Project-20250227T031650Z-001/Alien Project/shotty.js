let pos_x;

class Shotty{
	constructor(){
		
		this.a=20;
		this.camera=document.getElementById("cam1");

		this.ant=document.createElement("a-entity");
		
		this.gun = document.createElement("a-gltf-model");
		
		this.box=document.createElement("a-box");
		this.box.setAttribute("wireframe","true");
		this.box.setAttribute("width","3");
		this.box.setAttribute("height","3");
		this.box.setAttribute("depth","2");
		
		this.ant.setAttribute("position","0 0 -2");
		this.ant.append(this.box);
		
		this.gun.setAttribute("src", "#520a");
		this.gun.setAttribute("rotation", "0 91 0");
		this.gun.setAttribute("position", ".5 -1 0");
		
		this.camera.append(this.gun);
		
		this.camera.append(this.ant);
		
		//this.box.object3D.position.x
		//let  = this.box.object3D.position.y
		//console.log(pos_y);
		//console.log(pos_x);

	}

shoot(){
	this.gun.setAttribute("rotation", {x:0, y:91, z:this.a});
	setTimeout(() => {this.gun.setAttribute("rotation", {x:0, y:91, z:0})}, "250");
	
	
}

update(){
	
	pos_x = this.box.object3D.position.x;
	console.log(pos_x);
}
}