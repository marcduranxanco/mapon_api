"use strict";
console.log("Script init");


var initMap = (routeCoordinates = undefined) => {
  const divMap = document.getElementById("map");

  const mapOptions = {
    center: new google.maps.LatLng(routeCoordinates.getArray()[0].lat(), routeCoordinates.getArray()[0].lng()),
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

// //DATA LOGICS
// var obtainData = () => {


//   
//   dateForm.onsubmit = (e) => {
//     e.preventDefault();

//     let route = getData(
//       `${fromDate.toISOString().split('.')[0]}Z`,
//       `${tillDate.toISOString().split('.')[0]}Z`
//       );
//       console.log(route);
//     let  prepareData(route);

  
//   let from = document.getElementById("from");
//   let till = document.getElementById("till");

//   const getData = (from, till) => { 
//     var xhr = new XMLHttpRequest()
//     console.log(from, till);
//     xhr.open("GET",`https://mapon.com/api/v1/route/list.json?key=2ab183444385fa5024dcedece4ed0f4c0be4cb06&from=${from}&till=${till}`,true);
//     xhr.send();
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState == 4 && xhr.status == 200){
//           console.log(JSON.parse(xhr.responseText));
//           return JSON.parse(xhr.responseText);
//         }
//     }
//   };

//   const prepareData = (route) => {
//     console.log(route);
//   };
// }
// }


window.onload = () => {

  //MAP LOGICS
  let defaultRoute = new google.maps.MVCArray();
  defaultRoute.push( new google.maps.LatLng( 41.390205, 2.154007 ));


  initMap(defaultRoute);

  const dateForm = document.getElementById('dateForm');
  dateForm.onsubmit = (e) => {
    e.preventDefault();
    let defaultRoute = new google.maps.MVCArray();
    defaultRoute.push( new google.maps.LatLng( 40.416775, -3.703790 ));
    defaultRoute.push( new google.maps.LatLng( 41.979401, 2.821426 ));
    initMap(defaultRoute);
  }
}