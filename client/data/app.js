var app = module.exports = require('appjs');

app.serveFilesFrom(__dirname + '/content');

var window = app.createWindow({
	width  : 800,
	height : 640,
	icons  : __dirname + '/content/icons'
});

window.on('create', function(){
	console.log("Window Created");
	window.frame.show();
	window.frame.center();
});

window.on('ready', function(){
	console.log("Window Ready");
	window.require = require;
	window.process = process;
	window.module = module;
	window.__dirname = __dirname;

	function F12(e){ return e.keyIdentifier === 'F12'; }

	window.addEventListener('keydown',function(e){
		if(F12(e)){
			window.frame.openDevTools();
		}
	});
});

window.on('close', function(){
	console.log("Window Closed");
});
