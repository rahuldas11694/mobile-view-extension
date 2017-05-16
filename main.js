
// window.onload = function(e){
// document.addEventListener('DOMContentLoaded', function () {	
// 	console.log("1111  insideDOMContentLoaded")
// 	document.getElementById("bw-320to480").addEventListener("onclick",change);
// });
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('bw-320to480');
    // onClick's logic below:
    console.log("1111  insideDOMContentLoaded\n",link)
    link.addEventListener('click', function() {
    	change();
    });
});
		
		function change(){
			console.log("22222  inside on change clicke")
			/* 	var url =  window.location.href;
				var host = window.location.host;
				var protocol = window.location.protocol;
				console.log("host",host);
				console.log("url",url,"\n")
				console.log("protocol",protocol,"\n")
			*/

			chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
				console.log(tabs,'tabs');
	    		var url = tabs[0].url;
	    		console.log("333",url);
				window.open(url,"small-window","width=360, height=60");
			});
	}
// }	
