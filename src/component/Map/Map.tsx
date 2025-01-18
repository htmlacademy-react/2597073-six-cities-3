import {useEffect, useRef} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../consts.ts';
import useMap from '../../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';
import {City} from '../Types/types.ts';
import {CardProps} from '../../mocks/offer.ts';

type MapProps = {
  city: City;
  points: CardProps[];
  selectedPoint: CardProps | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = (props: MapProps) => {
  const {city, points, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
};

export default Map;
