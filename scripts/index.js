"use strict";
console.log("Script init");

window.onload = () => {

  const dateForm = document.getElementById('dateForm');
  let from = document.getElementById("from");
  let till = document.getElementById("till");

  const getData = (from, till) => { 
    var xhr = new XMLHttpRequest();
    xhr.open("GET",`https://mapon.com/api/v1/route/list.json?key=2ab183444385fa5024dcedece4ed0f4c0be4cb06&from=${from}&till=${till}`,true);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
          console.log(JSON.parse(xhr.responseText));
          return JSON.parse(xhr.responseText);
        }
    }
  };

  dateForm.onsubmit = (e) => {
    e.preventDefault();
    let fromDate = (from.value) ? new Date(from.value) : new Date();
    let tillDate = (till.value) ? new Date(till.value) : new Date();
    let route = getData(
      `${fromDate.toISOString().split('.')[0]}Z`,
      `${tillDate.toISOString().split('.')[0]}Z`
      );
    prepareMap(route);
  }

  const prepareMap = (route) => { 
    console.log(route)
   };

}

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 0, lng: -180 },
    mapTypeId: "terrain",
  });
  const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  flightPath.setMap(map);
}