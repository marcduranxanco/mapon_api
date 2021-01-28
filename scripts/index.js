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
    prepareData(route);
  }

  const prepareData = (route) => { 
    console.log("prepareData")
    console.log(JSON.stringify(route.data.units));
    let routeCoordinates = [
      { lat: 42.18223, lng: 24.30051 },
      { lat: 42.14168, lng: 42.18225 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ];
    initMap(routeCoordinates);
   };

    let barcelona = [
      { lat: 41.390205, lng: 2.154007 }
    ];
    const initMap = (routeCoordinates = barcelona) => {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: routeCoordinates[0].lat, lng: routeCoordinates[0].lng },
      mapTypeId: "terrain",
    });
  
    const flightPath = new google.maps.Polyline({
      path: routeCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    flightPath.setMap(map);
  };

  initMap();
}