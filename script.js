window.onload = function() {
		clockHand();
	};

	function clockHand() {
		var canvas = document.getElementById("canvas1");
		ctx = canvas.getContext("2d");
		canvas.style = "position:absolute; top: 50%; left: 50%; width: 400px; margin-left: -200px; margin-top: -200px;";
		var d = new Date();
		var s = d.getSeconds();
		var img=new Image();
		if(s<15 && s>=0){
			img.src="img/CF1.png";
		}
		else if (s>=15 && s<30){
			img.src='img/CF2.png';	
		}
		else if (s>=30 && s<40){
			img.src='img/CF3.png';
		}
		else if(s>=40 && s<=59) {
			img.src='img/CF4.png';
		}
		

		img.onload = function() { 
		    ctx.drawImage(img,45,45,400,400);
		    ctx.lineWidth = 5;
		    ctx.save();
		    ctx.restore();
			
			// get time
			ctx.save();
			ctx.translate(245, 245);
			ctx.save();
			
			// dynamic show time
			var now=new Date();
			var hrs=now.getHours();
			var min=now.getMinutes();
			var sec=now.getSeconds();

			//first set of hands
			if (sec>=0 && sec<30){
			
			//Draw hour hand
			ctx.rotate(Math.PI/6*(hrs+(min/60)+(sec/3600)));
			ctx.beginPath();
			ctx.moveTo(0,10);
			ctx.lineTo(0,-80);
			ctx.stroke();
			ctx.fillStyle = "red";
			ctx.fill();
			ctx.restore();
			ctx.save();
			
			//Draw minute hand
			ctx.rotate(Math.PI/30*(min+(sec/60)));
			ctx.beginPath();
			ctx.moveTo(0,20);
			ctx.lineTo(0,-105);
			ctx.stroke();
			ctx.restore();
			ctx.save();
			
			//Draw second hand
			ctx.rotate(Math.PI/30*sec);
			ctx.strokeStyle="#E33";
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.moveTo(0,20);
			ctx.lineTo(0,-105);
			ctx.stroke();
			ctx.restore();
			}
			//second hand sets
			else if(sec>=30) {
			
			//Draw hour hand
			ctx.rotate(Math.PI/6*(hrs+(min/60)+(sec/3600)));
			ctx.beginPath();
			ctx.lineWidth = 7;
			ctx.moveTo(0,10);
			ctx.lineTo(0,-60);
			ctx.stroke();
			ctx.restore();
			ctx.save();

            //Draw min hand
			ctx.rotate(Math.PI/30*sec);	
			ctx.fillStyle = 'rgb(0, 255, 0)';
			ctx.beginPath();
			ctx.arc(1,-100,10,0,Math.PI*2);
			ctx.fill();
			ctx.stroke();
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.strokeStyle="black";
			ctx.moveTo(0,20);
			ctx.lineTo(0,-90);
			ctx.stroke();
			ctx.restore();
			ctx.save();
            
            //Draw sec hand
			ctx.rotate(Math.PI/30*(min+(sec/60)));
			ctx.fillStyle = 'rgb(150,50,0)';
			ctx.beginPath();
            ctx.fillRect(-10,-130,20,100);
            ctx.fill();
            ctx.stroke();
			ctx.lineWidth = 7;
			ctx.beginPath();
			ctx.strokeStyle="black";
			ctx.moveTo(0,15);
			ctx.lineTo(0,-45);
			ctx.stroke();
			ctx.fill();
			ctx.restore();
			

			}
			// finally store to originall point
			ctx.restore();
			setTimeout(clockHand,1000);
		};
		}
