import React, { useRef, useState, useEffect } from "react";
import * as ol from "ol";
import * as proj from "ol/proj";
import * as geom from "ol/geom";
import { Tile, Vector } from "ol/layer";
import * as source from "ol/source";
import { Style, Stroke, Circle } from "ol/style";
import styled from "styled-components";

const MapWrapper = styled.div`
  height: 100vh;
`;
const MapElement = styled.div`
  width: 100%;
  height: 100%;
`;

interface IMapProps {
  cordinates: Array<any>;
}

const Map: React.FC<IMapProps> = ({ cordinates }) => {
  const mapRef = useRef<any>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    let options = {
      target: mapRef.current,
      view: new ol.View({
        zoom: 16,
        center: proj.fromLonLat([126.9779451, 37.5662952]),
      }),
      layers: [
        new Tile({
          source: new source.OSM(),
        }),
      ],
      controls: [],
      overlays: [],
    };
    let mapObject = new ol.Map(options);
    setMap(mapObject);
    return () => mapObject.setTarget(undefined);
  }, []);

  useEffect(() => {
    if (!map || !cordinates) return;
    if (map && cordinates?.length) {
      cordinates?.forEach((item) => {
        const layer: any = new Vector({
          source: new source.Vector({
            features: [
              new ol.Feature({
                geometry: new geom.Point(proj.fromLonLat([item[1], item[0]])),
              }),
            ],
          }),
          style: new Style({
            image: new Circle({
              radius: 10,
              stroke: new Stroke({
                color: "#5080c7",
                width: 3,
              }),
            }),
          }),
        });
        map.addLayer(layer);
      });
    }
  }, [cordinates, map]);

  return (
    <MapWrapper>
      <MapElement ref={mapRef}></MapElement>
    </MapWrapper>
  );
};

export default Map;
