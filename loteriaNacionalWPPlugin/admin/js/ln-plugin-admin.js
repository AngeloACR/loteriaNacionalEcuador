if (document.readyState !== 'loading') {
	geoTargetAdminInit();
} else {
	document.addEventListener('DOMContentLoaded', function () {
		geoTargetAdminInit();
	});
}

function geoTargetAdminInit() {
	let mapId = "geoMap";
	let mapContainer = document.getElementById(mapId);
	let latlngInput = document.getElementById("restaurantLatlng");
	let mapCenter;
	console.log("starting here");

	console.log("then here");
	let protocol = window.location.protocol;
	if (latlngInput.value != "") {
		let mapLatlng = JSON.parse(decodeURIComponent(latlngInput.value));
		mapCenter = {
			lat: mapLatlng.lat,
			lng: mapLatlng.lng
		}
		console.log("option 1");
		setMap(mapContainer, mapCenter);

	} else if ("geolocation" in navigator && protocol == "https:") {
		navigator.geolocation.getCurrentPosition(function (position) {
			mapCenter = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			console.log("option 2");
			setMap(mapContainer, mapCenter);
		});
	} else {
		mapCenter = {
			lat: -12.045,
			lng: -77.031
		};
		console.log("option 3");
		setMap(mapContainer, mapCenter);

	}
	let geocoder = new google.maps.Geocoder();
	geocoder.geocode({ latLng: mapCenter }, (results, status) => {
		if (status === "OK") {
			let data = results[0];
			if (data) {
				let address = data.formatted_address;
				locationInput.value = address;
				locationInput.innerText = address;
				locationInput.setAttribute("value", address);
				locationInput.dispatchEvent(new Event("change"));
				locationInput.dispatchEvent(new Event("input", { bubbles: true }));
			}

		};
	});
	// add destination to map
};

function setMap(mapContainer, mapCenter) {
	console.log("Setting map");

	let map = new google.maps.Map(mapContainer, {
		zoom: 10,
		center: mapCenter,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false,
		fullscreenControl: false
	});

	//let markerImg = "assets/img/origen.png";
	let marker = new google.maps.Marker({
		animation: google.maps.Animation.DROP,
		position: mapCenter
/* 		icon: {
		  url: markerImg,
		  size: new google.maps.Size(50, 50),
		  origin: new google.maps.Point(0, 0),
		  anchor: new google.maps.Point(25, 50),
		  scaledSize: new google.maps.Size(50, 50)
		}
	*/	  });
	marker.setMap(map);
	let radius = getRadius();
	let geoCircle = drawCircle(map, mapCenter, radius);
	map.addListener("center_changed", event => {
		let newCenter = map.getCenter();
		marker.setMap(null);
		marker = new google.maps.Marker({
			animation: google.maps.Animation.DROP,
			position: newCenter
		})
		marker.setMap(map);
		let radius = getRadius();
		geoCircle.setMap(null);
		geoCircle = drawCircle(map, newCenter, radius);

	});
	let maxDistanceInput = document.getElementById("restaurantMaxDistance");
	maxDistanceInput.addEventListener("change", function (event) {
		let newCenter = map.getCenter();
		let radius = event.target.value;
		geoCircle.setMap(null);
		geoCircle = drawCircle(map, newCenter, radius);
	})
	maxDistanceInput.addEventListener("input", function (event) {
		let newCenter = map.getCenter();
		let radius = event.target.value;
		geoCircle.setMap(null);
		geoCircle = drawCircle(map, newCenter, radius);
	})
	let mapButtonId = "mapButton";
	let mapInput = document.getElementById("restaurantAddress");
	let geocoder = new google.maps.Geocoder();
	let latlngInput = document.getElementById("restaurantLatlng");

	let mapButton = document.getElementById(mapButtonId);
	mapButton.addEventListener('click', function () {
		let point = map.getCenter();
		let aux = {
			lat: point.lat(),
			lng: point.lng()
		}
		latlngInput.value = encodeURIComponent(JSON.stringify(aux));

		latlngInput.dispatchEvent(new Event("change"));
		latlngInput.dispatchEvent(new Event("input", { bubbles: true }));
		geocoder.geocode({ latLng: point }, (results, status) => {
			if (status === "OK") {
				let data = results[0];
				if (data) {
					let address = data.formatted_address;
					mapInput.value = address;
					mapInput.innerText = address;
					mapInput.setAttribute("value", address);
					mapInput.dispatchEvent(new Event("change"));
					mapInput.dispatchEvent(new Event("input", { bubbles: true }));
				}

			};
		});
	});

}

function getRadius() {
	let maxDistanceInput = document.getElementById("restaurantMaxDistance");
	return maxDistanceInput.value;
}
function drawCircle(map, position, radius) {

	let circleRadius = radius * 1000;
	var circleOptions = {
		strokeColor: 'blue',
		strokeOpacity: 0.5,
		strokeWeight: 2,
		fillColor: 'blue',
		fillOpacity: 0.35,
		map: map, //pass the map object to show on the map.
		center: position, //or you can pass a google.maps.LatLng object
		radius: parseInt(circleRadius) //radius of the circle in metres
	};
	let geoCircle = new google.maps.Circle(circleOptions);
	return geoCircle;
}