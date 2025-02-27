class Shield{
	constructor(){
		
		this.ant=document.createElement("a-entity");
		this.camera=document.getElementById("cam1");
		
		this.sdtop = document.createElement("a-box");
		this.sdtop.setAttribute("position","0 -1 -1");
		this.sdtop.setAttribute("color","green");
		this.sdtop.setAttribute("width","2");
		this.sdtop.setAttribute("height","1");
		this.sdtop.setAttribute("depth",".1");
		this.ant.append(this.sdtop);
		
		//this.sdmid = document.createElement("a-box");
		//this.sdmid.setAttribute("position","0 0 -1");
		//this.sdmid.setAttribute("opacity","0");
		//this.sdmid.setAttribute("width","2");
		//this.sdmid.setAttribute("height","1");
		//this.sdmid.setAttribute("depth",".1");
		//this.ant.append(this.sdmid);
		
		this.sdbot = document.createElement("a-box");
		this.sdbot.setAttribute("position","0 .5 -1");
		this.sdbot.setAttribute("color","green");
		this.sdbot.setAttribute("width","2");
		this.sdbot.setAttribute("height",".5");
		this.sdbot.setAttribute("depth",".1");
		this.ant.append(this.sdbot);
		
		this.ant.setAttribute("rotation", "0 90 0");
		
		this.camera.append(this.ant);

	}
	
	rotate(){
	this.ant.setAttribute("rotation","0 0 0");
	}
	
	unrotate(){
	this.ant.setAttribute("rotation","0 90 0");
	}


}


