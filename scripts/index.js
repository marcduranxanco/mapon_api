"use strict";
console.log("Script init");

window.onload = () => {
  //FORM LOGICS
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
    console.log(route);
  };

  //MAP LOGICS
  let routeCoordinates = new google.maps.MVCArray();
  routeCoordinates.push( new google.maps.LatLng( 41.390205, 2.154007 ));
  routeCoordinates.push( new google.maps.LatLng( 41.979401, 2.821426 ));

  var initMap = (routeCoordinates) => {
    const divMap = document.getElementById("map");
  
    const mapOptions = {
      center: new google.maps.LatLng(41.390205, 2.154007),
      zoom: 5,
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

  initMap(routeCoordinates);
}