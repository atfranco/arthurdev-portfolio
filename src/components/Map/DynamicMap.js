import { useEffect } from 'react';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

const { MapContainer } = ReactLeaflet;
const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName = styles.map;

  if ( className ) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}

export default Map;