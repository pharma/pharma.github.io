var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 17.395763,
				lng: 78.420887
			  });
			   var marker = map.addMarker({
					lat: 17.395763,
					lng: 78.420887,
		            title: 'Optimus Drugs Pvt Ltd'
		        });
			});
        }

    };
}();




