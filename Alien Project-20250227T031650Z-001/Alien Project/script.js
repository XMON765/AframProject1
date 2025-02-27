let scene, shield, shottyf, rnd = (l,u) => Math.random()*(u-l) + l, heal2, camera, enemy,  num, dnum, ui2, ui, health = 100, shieldHealth = 250, shieldDead = false, on = true, block = false, x = Math.round(health), y = Math.round(shieldHealth), enemies = [];

window.onload = function(){
	
	scene = document.querySelector("a-scene");
	camera = document.getElementById("cam1");
	heal = document.getElementById("heal");
	ui = document.getElementById("ui");
	ui2 = document.getElementById("ui2");
	
	ui.setAttribute("value", x);
	ui2.setAttribute("value", shieldHealth);
	ui2.setAttribute("position", "3.5 1 -2");
	
	for(let i = 0; i < 1; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
	enemies.push(new Enemy(x,0,z));
	}
	//enemy = new Enemy(0, 0, -2)
	heal2 = new Heal(3, 0, 5, "green");
	heal3 = new Heal(5, 0, 5, "blue");
	shield = new Shield;
	
	num = 0;
	dnum = 1;
	
	window.addEventListener("keypress", function(e){
		if(e.key == "e" && !_open){
			_open = true;
			dt = -dt;
		}
		
	})
	

	
	
	
	//shield = new Shield;
	shotty = new Shotty;
	//rifle = new Rifle;
	
	window.addEventListener("keypress", function(e){
		if(e.key == "e" && !_open){
			_open = true;
			dt = -dt;
		}
	})
	
	window.addEventListener("keypress", function(e){
		if(e.key == "1"){
			shottyf = true;
			console.log(shottyf);
		}
	})
	
	window.addEventListener("keypress", function(e){
		if(e.key == "2"){
			shottyf = false;
			console.log(shottyf);
		}
	})
	
	
	window.addEventListener("click", ()=>{
		shotty.shoot();
		//rifle.shoot();
	})
	

	setTimeout(loop, 1000);

}

let tmp=0, dt = -1; _open = false;

function loop(){
	
	console.log(pos_x);
	heal2.healing(10);
	heal3.healShield(200);
	
	
	shotty.update();
	
	
	if(shieldHealth == 0){
		shieldDead = true;
	}
	
	
	//Enemies functions
	for(let enemy of enemies){
		if(distance(enemy.enemy,camera)<2.5 && block && !enemy.dead && shieldHealth>0){
			shieldHealth -= 0.1
		}
		if(distance(enemy.enemy,camera)<2.5 && !block && !enemy.dead){
			enemy.attackPlayer();
		}
		if(distance(enemy.enemy,camera)<2.5 && shieldHealth<0){
			enemy.attackPlayer();
			shield.unrotate();
			_open = false;
			block = false;
			
		}
		
		let d = distance(enemy.enemy, camera);
		if(2.5 < d && d < 60 && !enemy.dead){
		enemy.rotateTowards(camera); 
		enemy.forward()
		}
		
		if(enemy.enemyHealth == 0){
			enemy.die();
			enemy.dead = true;
		}
	}
	
	//Shield open and closing
	if(_open){
		tmp+=dt;
		if(tmp >= 1){
			_open = false;
			block = true;
			shield.rotate();
		}
		if(tmp <= 0){
			_open = false;
			block = false;
			shield.unrotate();
		}
	}
	
	
	ui.setAttribute("value", health);
	ui2.setAttribute("value", shieldHealth);
	
	window.requestAnimationFrame( loop );
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;
 
  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}