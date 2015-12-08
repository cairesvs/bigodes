(function(){Math.clamp=function(a,b,c){return Math.max(b,Math.min(c,a));}})();
var colors = [ '#1F380C', '#F5FFD7', '#131F08' ];
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var numbers = [0,20,40,60];

window.onload = function() {
	var game = document.getElementById("game");
	var ctx = game.getContext("2d");
	var x = 0;
	var y = 0;

	var toSolve = [];
	
	for( var i = 0; i < 6; i++) {
		var pos = createPattern();
		toSolve.push(pos);
		createBox(ctx, pos, x, 0);
		x+=90;
	}

	createBox(ctx, toSolve[0], 0, 90);
	createBox(ctx, toSolve[1], 90, 90);

}

function createPattern () {
	var xs = 0, ys = 0;
	var pos = [];
	for( var i = 0; i < 16; i++ ) {
		pos.push({x: numbers[Math.floor(Math.random() * numbers.length)], y: numbers[Math.floor(Math.random() * numbers.length)], color: Math.floor(Math.random() * 3)});
	}
	return pos;
}

function createBox ( ctx, pos , xOffs, yOffs) {
	ctx.fillStyle = "#97E381";
	ctx.fillRect( xOffs, yOffs, 80, 80 );
	for( var i = 0; i < pos.length; i++ ) {
		ctx.fillStyle = colors[pos[i].color];
		ctx.fillRect(pos[i].x + xOffs, pos[i].y + yOffs, 20, 20);
	}
}
