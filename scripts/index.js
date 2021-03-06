"use strict";
console.log("Script init");


var initMap = (routeCoordinates = null) => {
  const divMap = document.getElementById("map");

  let defaultRoute = new google.maps.MVCArray();
  defaultRoute.push( new google.maps.LatLng( 41.390205, 2.154007 ));

  if(routeCoordinates == null){
    routeCoordinates = defaultRoute;
  }

  const mapOptions = {
    center: new google.maps.LatLng(routeCoordinates.getArray()[0].lat(), routeCoordinates.getArray()[0].lng()),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  const map = new google.maps.Map(divMap, mapOptions);

  const polyLineOptions = {
    path: routeCoordinates,
    strokeColor: "#FF0000",
    strokeWeight: 2
  };

  var polyline = new google.maps.Polyline(polyLineOptions);
  polyline.setMap(map);
}

// //DATA LOGICS
var getUrl = () => {
  let from = document.getElementById("from");
  let till = document.getElementById("till");

  let fromDate = (from.value) ? new Date(from.value) : new Date();
  let tillDate = (till.value) ? new Date(till.value) : new Date();

  from = `${fromDate.toISOString().split('.')[0]}Z`;
  till = `${tillDate.toISOString().split('.')[0]}Z`;

  let url = `https://mapon.com/api/v1/route/list.json?key=2ab183444385fa5024dcedece4ed0f4c0be4cb06&from=${from}&till=${till}`;

  return url;
}

//Fetch del url
var setMap = (url) => {
  fetch(url)
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
      try {
        data = (JSON.parse(data)).data.units[0].routes;
      } catch (error) {
        console.log(error);
        data = [];
      }
      var route = processData(data);
      if(route.getArray().length == 0){
        showAlert(true);
        initMap();
        console.log("No routes found");
      }else{
        initMap(route);
      }
      return route;
    })
    .catch(function(err) {
        console.error(err);
    });
}

//Convertir data a map coordinates
var processData = (data) => {
  let route = new google.maps.MVCArray();
  data.forEach(element => {
    if(element.type == "route"){
      route.push(new google.maps.LatLng( element.start.lat, element.start.lng))
      route.push(new google.maps.LatLng( element.end.lat, element.end.lng))
    }
  });
  return route;
}

var showAlert = (status) => {
  let alertDiv = document.getElementById('alert-div');
  if (status === true) {
    alertDiv.style.display = "block";
  } else {
    alertDiv.style.display = "none";
  }
}

window.onload = () => {
  showAlert(false)

  initMap();

  const dateForm = document.getElementById('dateForm');
  dateForm.onsubmit = (e) => {
    showAlert(false);
    e.preventDefault();
    setMap(getUrl());
  }
}