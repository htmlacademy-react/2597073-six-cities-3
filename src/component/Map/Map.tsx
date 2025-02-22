import {memo, useEffect, useRef} from 'react';
import {Marker, layerGroup} from 'leaflet';
import {currentCustomIcon, defaultCustomIcon} from '../../consts.ts';
import useMap from '../../hooks/use-map.tsx';
import 'leaflet/dist/leaflet.css';
import {Nullable} from 'vitest';
import {City, TOffer} from '../Types/types.ts';

type MapProps = {
  city: City;
  points: TOffer[];
  zoom: number;
  selectedPointId: Nullable<TOffer['id']>;
};

const Map = (props: MapProps) => {
  const {city, points, selectedPointId, zoom} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city, zoom);

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
            selectedPointId && point.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPointId]);

  return <div style={{height: '100%'}} ref={mapRef}></div>;
};

export default memo(Map);
