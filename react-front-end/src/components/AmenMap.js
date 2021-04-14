import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "./App.css";
import { Icon, L } from "leaflet";
import axios from "axios";

// export const cafeIcon = new Icon({
//   iconUrl: "/cafe.png",
//   iconSize: [30, 30],
// });

export const parkIcon = new Icon({
  iconUrl: "/park.png",
  iconSize: [30, 30],
});

export const icon = new Icon({
  iconUrl: "/building.png",
  iconSize: [30, 30],
});

const iconStyle = (amenity) => {
  return new Icon ({
    iconUrl: getIcon(amenity.type), 
    iconSize: [30, 30]
  })
}

const getIcon = (type) => {
  return type === "Cafe" ? "/cafe.png" : "/building.png"
}


function AmenMap() {

  const amenities = [
    {
      id: 1,
      area_id: 1,
      name: "Terminal 1",
      type: "Park",
      image_url: "url",
      latitude: 37.62043,
      longitude: -122.399165
      },
      {
      id: 2,
      area_id: 1,
      name: "Terminal 1",
      type: "Groceries",
      image_url: "url",
      latitude: 37.62043,
      longitude: -122.399165
      },
      {
      id: 3,
      area_id: 1,
      name: "Terminal 1",
      type: "Restaurant",
      image_url: "url",
      latitude: 37.62043,
      longitude: -122.399165
      },
      {
      id: 4,
      area_id: 1,
      name: "Guy Place Mini Park",
      type: "Groceries",
      image_url: "url",
      latitude: 37.78668402,
      longitude: -122.394391
      },
      {
      id: 5,
      area_id: 1,
      name: "Terminal 1",
      type: "Restaurant",
      image_url: "url",
      latitude: 37.62043,
      longitude: -122.399165
      },
      {
      id: 6,
      area_id: 1,
      name: "Terminal 1",
      type: "Restaurant",
      image_url: "url",
      latitude: 37.62043,
      longitude: -122.399165
      },
      {
      id: 7,
      area_id: 1,
      name: "Terminal 1",
      type: "Restaurant",
      image_url: "url",
      latitude: 37.62043,
      longitude: -122.399165
      },
      {
      id: 8,
      area_id: 1,
      name: "Terminal 1",
      type: "Park",
      image_url: "url",
      latitude: 37.62043,
      longitude: -122.399165
      },
      {
      id: 9,
      area_id: 1,
      name: "Terminl 1",
      type: "Park",
      image_url: "url",
      latitude: 37.62043,
      longitude: -122.399165
      },
      {
      id: 10,
      area_id: 1,
      name: "Central Subway",
      type: "Restaurant",
      image_url: "url",
      latitude: 37.77833003,
      longitude: -122.39654
      },
      {
      id: 11,
      area_id: 1,
      name: "Embarcadero Ferry Plaza",
      type: "test ",
      image_url: "url",
      latitude: 37.79315824,
      longitude: -122.3915536
      },
      {
      id: 12,
      area_id: 1,
      name: "San Francisco General Hospital",
      type: "Cafe ",
      image_url: "url",
      latitude: 37.75632799,
      longitude: -122.405817
      },
      {
      id: 13,
      area_id: 1,
      name: null,
      type: "Cafe ",
      image_url: "url",
      latitude: 37.71468521,
      longitude: -122.4789528
      },
      {
      id: 14,
      area_id: 1,
      name: "Sailor's Union of the Pacific",
      type: "Restaurant",
      image_url: "url",
      latitude: 37.78656298,
      longitude: -122.393014
      },
      {
      id: 15,
      area_id: 1,
      name: "Terminal 3",
      type: "Cafe ",
      image_url: "url",
      latitude: 37.62043,
      longitude: -122.399165
      },
      {
      id: 16,
      area_id: 1,
      name: "Randall Museum",
      type: "School",
      image_url: "url",
      latitude: 37.76442298,
      longitude: -122.438148
      },
      {
      id: 17,
      area_id: 1,
      name: "Headquarters",
      type: "Restaurant",
      image_url: "url",
      latitude: 37.78111102,
      longitude: -122.418926
      },
      {
      id: 18,
      area_id: 1,
      name: "San Francisco Botanical Garden",
      type: "School",
      image_url: "url",
      latitude: 37.76890202,
      longitude: -122.470886
      },
      {
      id: 19,
      area_id: 1,
      name: "Hotel",
      type: "Cafe ",
      image_url: "url",
      latitude: 37.61242626,
      longitude: -122.3937406
      },
      {
      id: 20,
      area_id: 1,
      name: "SFPD Northern Station",
      type: "Groceries",
      image_url: "url",
      latitude: 37.78035199,
      longitude: -122.432282
      },
      
  ]
  // ***** REMEMBER TO CHANGE BUILDING LAT LONG IN DB ***** //
  const building = [
    {
      id: 1,
      area_id: 1,
      name: "Grace Court",
      address: "1601 Comox St",
      image_url: "https://unsplash.com/photos/RFDP7_80v5A",
      latitude: 37.7793,
      longitude: -122.4192
    }
  ]

  return (

    <MapContainer center={[building[0].latitude, building[0].longitude]} zoom={15}>
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker
          key={building[0].id}
          position={[building[0].latitude, building[0].longitude]}
          icon={icon}
        >
          <Popup>
            <div>
              <h2>{building[0].address}</h2>
            </div>
          </Popup>
        </Marker>
      
      {amenities.map((amenity) => (
        <Marker
          key={amenity.id}
          position={[amenity.latitude, amenity.longitude]}
          icon={parkIcon}
        >
          <Popup>
            <div>
              <h2>{amenity.name}</h2>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>

  );
}

export default AmenMap;