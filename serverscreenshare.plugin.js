//META{"name":"ServerScreenshare"}*//
var ServerScreenshare = function(t){
	return class _ {
		getName(){ return "Server Screensharing" }
        getVersion(){ return "1.0" }
		getAuthor(){ return "Nipeno" }
        getDescription(){ return "Enables In-Server Screensharing" }
		load(){}
		start(){t = BDV2.WebpackModules.findByUniqueProperties(["isDeveloper"]);Object.defineProperty(t,"isDeveloper",{get:_=>1,set:_=>_,configurable:true});}
		stop(){t && Object.defineProperty(t,"isDeveloper",{get:_=>0,set:_=>{},configurable: true});}
	};
}();