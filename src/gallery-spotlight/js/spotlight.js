function Spotlight(conf) {
	Spotlight.superclass.constructor.apply(this, arguments);
}
Spotlight.NAME = "Spotlight";
Spotlight.ATTRS = {
	data : {},
	liTplId: {},
	contentTplId: {},
	containerId: {},
	height: 200,
	width: 300
};
Y.extend(Spotlight, Y.Base, {
	register : function () {
		var self = this, contId, carcontId, spotNode, carousel, data, conTplId;
		contId = self.get('containerId');
		carcontId = contId + "-carousel";
		spotNode = Y.one("#" + contId + "-content");
		data = self.get('data');
		conTplId = self.get('contentTplId');
		
		carousel = new Y.Carousel({ 
			boundingBox: "#" + carcontId,
			contentBox: "#" + carcontId + " > ol",
			animation: {speed: 0.5},
			numVisible: [3,1],
			isVertical: false,
			height: self.get('height'),
			width: self.get('width')
		});
		carousel.on("itemSelected", function (index) {
			var itemdata,content;
			itemdata = data[index.pos];
			if(itemdata && conTplId){
				self.templatize(conTplId, contId + "-content", itemdata);
			}
		});
		carousel.render();
		carousel.scrollTo(1);
		carousel.scrollTo(0);
	},
	templatize : function (tplId, conId, data) {
		var self = this, content = '', htmlSnip = "", tplNode, conNode;
		tplNode = Y.one("#" + tplId);
		conNode =  Y.one("#" + conId);
	
		if(tplNode){
			htmlSnip = tplNode.get('innerHTML');
			//htmlSnip = unescape(htmlSnip);
		}	
		if(data instanceof Array){
			Y.each(data, function (i) {
				content += Y.substitute(htmlSnip, i);
			}, this);
		}
		else{
			content += Y.substitute(htmlSnip, data);
		}
		conNode.set('innerHTML', content);
		self.lazyLoad(conId);
	},
	lazyLoad : function (conId){
		Y.all("#" + conId + " img[xrc]").each(function (el, i) {
			var url = el.getAttribute('xrc');
			if(url){
				el.setAttribute('src', url);
				el.removeAttribute('xrc');
			}
		});
	},
	doSkeleton : function(){
		var self = this, data = {}, skeleton, contId, conNode;
		contId = self.get('containerId');
		conNode = Y.one("#"+contId);
		data.containerId = contId;
		skeleton = Y.substitute(self.tpl,data);
		if(conNode){
			conNode.set("innerHTML",skeleton);
		}	
	},
	process : function () {
		var self = this, contId, data, conTplId, liTplId;
		contId = self.get('containerId');
		data = self.get('data');
		conTplId = self.get('contentTplId');
		liTplId = self.get('liTplId');
		
		if(!contId || !data || !conTplId){ 
			return;
		}
		self.doSkeleton();
		self.templatize(liTplId, contId+"-ol",self.get('data'));
		self.register();
	},
	tpl : "<div class=\"spotlight\"><div id=\"{containerId}-carousel\" class=\"yui3-carousel yui3-carousel-horizontal\">" + 
		"<ol id=\"{containerId}-ol\"></ol></div>" + "<div id=\"{containerId}-content\"></div>" + 
		"<div id=\"{containerId}-hiddencontent\" style=\"dislay:none\"></div></div>"
});

Y.Spotlight = Spotlight;
