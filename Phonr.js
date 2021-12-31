var x,y=0,scale=.5
body.onload=function(){
parse(data,7,2)	
	
ctx=canvas.getContext('2d')
canvas.width=time.length/scale , canvas.height=time.length/scale
w=canvas.width,h=canvas.height,c=h/2

ctx.lineWidth = 25


//The Function...
ctx.translate((w/2),(h/2))
		ctx.moveTo(0,0)
        ctx.beginPath();
		//ctx.moveTo(0,0)
		  

//The Part That Does The Drawing
		xx=1
		for(x=0 ;x<time.length ;x++){
		
		y=eval(reac[xx])
		
		xx++
		ctx.lineTo(time[xx]-c,-y+69.21)
		//console.log(x)
		}
//_________________________________

		ctx.stroke()
		
        ctx.closePath();
		
}