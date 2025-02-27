class Rifle{
	constructor(){
		
		this.a=20;
		
		this.ant=document.createElement("a-entity");
		
		this.gun = document.createElement("a-gltf-model");
		
		this.box=document.createElement("a-box");
		this.box.setAttribute("wireframe","true");
		this.box.setAttribute("width","1");
		this.box.setAttribute("height","1");
		this.box.setAttribute("depth","5 ");
		
		this.ant.setAttribute("position","0 0 -4");
		this.ant.append(this.box);
		
		this.gun.setAttribute("src", "#rm277");
		this.gun.setAttribute("rotation", "0 91 0");
		this.gun.setAttribute("position", ".5 -.7 -1");
		this.gun.setAttribute("scale", ".8 .8 .8");
		
		camera.append(this.gun)
		console.log("its working");
		
		camera.append(this.ant);
	}
	
shoot(){
	this.gun.setAttribute("rotation", {x:0, y:91, z:this.a})
	setTimeout(() => {this.gun.setAttribute("rotation", {x:0, y:91, z:0})}, "250");
}

}