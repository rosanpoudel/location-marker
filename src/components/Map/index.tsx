import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "../LocationMarker";

interface mapProps {
  cordinates: Array<any>;
  fetchCordinateLoading: boolean;
}

const MapWrapper = ({ cordinates, fetchCordinateLoading }: mapProps) => {
  return (
    <MapContainer
      center={[37.5662952, 126.9779451]}
      zoom={16}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {!fetchCordinateLoading && cordinates?.length > 0 ? (
        <>
          {cordinates?.map((c, index) => {
            return (
              <Marker
                key={index}
                position={[c[0], c[1]]}
                icon={LocationMarker}
              />
            );
          })}
        </>
      ) : (
        <Marker position={[37.5662952, 126.9779451]} icon={LocationMarker} />
      )}
    </MapContainer>
  );
};

export default MapWrapper;
