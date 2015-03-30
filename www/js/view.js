
var app = function(app) {
	
	app.makeHorizontalPages = function(layoutManager, gridManager) {
		
		var p = {};
		
		// make main page
		p.main = new createjs.Container();
		p.main.name = "main";
		p.main.setBounds(0,0,stageW,stageH);
		
		// prepare logo
		p.main.logo = new zim.Rectangle(200,200,"yellow");
		p.main.addChild(p.main.logo);
		
		// prepare content
		var mainContent = p.main.content = new createjs.Container();
		mainContent.setBounds(0,0,600,600);
		p.main.addChild(mainContent);
		
		p.main.box = new zim.Rectangle(200,200,"green");
		mainContent.addChild(p.main.box);
		p.main.box.x = 100;
		p.main.box.y = 100;
		
		gridManager.add(new zim.Grid(mainContent));
		
	
		
		// add parts to layout
		layoutManager.add(
			new zim.Layout(p.main, 
				[{object:p.main.logo, 	marginLeft:10, maxHeight:80, width:20, valign:"top"},
				{object:p.main.content, marginLeft:5, maxHeight:90, align:"middle", backgroundColor:"lightgreen"}],
				10, "black", false, new createjs.Shape(), stage)		
		);		
		
		p.info = new createjs.Container();
		p.info.name = "info";
		p.info.setBounds(0,0,stageW,stageH);
		
		var infoBacking = new zim.Rectangle(stageW,stageH,"white");
		p.info.addChild(infoBacking);

		var stage = new createjs.Stage("canvas");

		var html = document.createElement('div');
		html.id = 'googleMap';
		html.style.height = '500px';
		html.style.width = '500px';
		html.style.position = "absolute";
		html.style.top = 0;
		html.style.left = 0;
		html.style.border = '1px solid red';

		document.body.appendChild(html);

		var gg = new createjs.DOMElement(html);
		gg.x = 20;
		gg.y = 20;
		p.info.addChild(gg);
		stage.update();

		createjs.Tween.get(gg).to({x:400}, 1000);
		createjs.Ticker.addEventListener("tick", stage);
		
		return p;
		
	}
	
	app.makeVerticalPages = function(layoutManager, gridManager) {
		
		var p = {};
		
		// make main page
		p.main = new createjs.Container();
		p.main.name = "main";
		p.main.setBounds(0,0,stageW,stageH);
		
		// prepare logo
		p.main.logo = new zim.Rectangle(200,200,"yellow");
		p.main.addChild(p.main.logo);
		
		// prepare content
		var mainContent = p.main.content = new createjs.Container();
		mainContent.setBounds(0,0,600,600);
		p.main.addChild(mainContent);
		
		p.main.box = new zim.Rectangle(200,200,"green");
		mainContent.addChild(p.main.box);
		p.main.box.x = 100;
		p.main.box.y = 100;
		
		gridManager.add(new zim.Grid(mainContent));
		
		// prepare right side
		p.main.related = new zim.Rectangle(600,300,"red");
		p.main.addChild(p.main.related);
		
		// add parts to layout
		layoutManager.add(
			new zim.Layout(p.main, 
				[{object:p.main.logo, marginTop:10, maxWidth:80, minHeight:20, align:"center", valign:"top"},
				{object:p.main.content, marginTop:5, maxWidth:90, backgroundColor:"lightgreen"},
				{object:p.main.related, marginTop:5, maxWidth:80, height:20}],
				10, "black", true, new createjs.Shape(), stage)		
		);		
		
		p.info = new createjs.Container();
		p.info.name = "info";
		p.info.setBounds(0,0,stageW,stageH);
		
		var infoBacking = new zim.Rectangle(stageW,stageH,"orange");
		p.info.addChild(infoBacking);
		
		return p;
		
	}
	
	
	
	return app;
}(app || {});