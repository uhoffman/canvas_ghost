window.addEventListener('load', onLoad, false);
function onLoad() {
    var canvas  = document.getElementsByTagName('canvas')[0];
    var context = canvas.getContext('2d');
	draw_ghost(context, 400, 130);
}
function draw_ghost(ctx, center_x, center_y) {
    	this.x  = center_x - 40;
    	this.y  = center_y + 30;

		ctx.beginPath();
		ctx.strokeStyle="black";
		ctx.lineWidth="1";
		ctx.fillStyle="rgba(255, 255, 255, 0.4)";//white color
    	ctx.beginPath(); //upper part
		ctx.moveTo(this.x, this.y);
		ctx.quadraticCurveTo(this.x + 19, this.y - 90, this.x + 40, this.y);
		ctx.moveTo(this.x, this.y);// now the bottom part
    	ctx.quadraticCurveTo(this.x + 3, this.y + 4, this.x + 10, this.y);
		ctx.moveTo(this.x + 10, this.y);
    	ctx.quadraticCurveTo(this.x + 12, this.y - 2, this.x + 20, this.y);
    	ctx.moveTo(this.x + 20, this.y);
    	ctx.quadraticCurveTo(this.x + 22, this.y + 4, this.x + 30, this.y);
    	ctx.moveTo(this.x + 30, this.y);
    	ctx.quadraticCurveTo(this.x + 35, this.y - 2, this.x + 40, this.y);
    	ctx.strokeStyle = 'black';
    	ctx.stroke();
    	ctx.fill();
    	ctx.closePath();
    	ctx.fillStyle = "#000000"; // eye circles
    	ctx.beginPath();
    	ctx.arc(this.x + 14, this.y - 29, 2, 0,  Math.PI * 8, true);
		ctx.strokeStyle = 'black';
    	ctx.stroke();
    	ctx.fill();
    	ctx.beginPath();
    	ctx.arc(this.x + 25, this.y - 29, 2, 0,  Math.PI * 8, true);
		ctx.strokeStyle = 'black';
    	ctx.stroke();
    	ctx.fill();
}
