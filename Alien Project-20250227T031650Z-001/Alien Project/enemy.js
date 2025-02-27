class Enemy{
	constructor(x,y,z){
		this.x=x;
		this.y=y;
		this.z=z;
		this.enemyHealth=100;
		this.enemy = document.createElement("a-entity");
		this.dead = false;
		//this.enemy.setAttribute("[interact]");
		
		//enenmy takes damage
		this.body = document.createElement("a-sphere");
		this.body.setAttribute("color", "red");
		this.body.addEventListener("click", ()=>{
		this.enemyHealth-=20;
		this.health.setAttribute("value", this.enemyHealth);
		})
		this.enemy.append(this.body);
		
		this.health = document.createElement("a-text");
		this.health.setAttribute("value", this.enemyHealth);
		this.health.setAttribute("scale", "4 4 4");
		this.health.setAttribute("position", {x:-1,y:2,z:0});
		//this.health.setAttribute("rotation", "0 0 0");
		this.enemy.append(this.health);
		
		
		this.enemy.setAttribute("position", {x:this.x,y:this.y,z:this.z});
		
		
		scene.append(this.enemy);
	}
	 
	attackPlayer(){
		health -= 0.07;
	}
	//attackShield(){
		//shieldHealth -= 0.1;
	//}
	
	angleTo(that){
      let dx = that.object3D.position.x - this.enemy.object3D.position.x;
      let dz = that.object3D.position.z - this.enemy.object3D.position.z;

      this.angle = Math.atan(dx/dz)
      if(dz < 0){
          this.angle += Math.PI
      }
  }
	
	rotateTowards(that){
		this.angleTo(that);
		this.enemy.object3D.rotation.y = this.angle;
	}
	
	forward(){
      let dx = 0.05 * Math.sin(this.angle);
      let dz = 0.05 * Math.cos(this.angle);
      this.enemy.object3D.position.x += dx;
      this.enemy.object3D.position.z += dz; 
  }
  
	die(){
		this.body.setAttribute("color", "blue");
	}
  }
	