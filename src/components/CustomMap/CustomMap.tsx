import styles from './sass/Map.module.scss';
import IMap from './interface/IMap';
import Map, { NavigationControl, ScaleControl, FullscreenControl } from 'react-map-gl';

import '../../i18n/i18n'



const CustomMap = ({data}: IMap) => {

  return (
    <div className={styles.map}>
      <Map
        initialViewState={{
          longitude: data.coord.lon,
          latitude: data.coord.lat,
          zoom: 10
        }}
        minZoom={3}
        maxZoom={19}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
        mapStyle={process.env.NEXT_PUBLIC_MAPSTYLE}
        fadeDuration={300}
      >
        <NavigationControl />
        <ScaleControl />
        <FullscreenControl />
      </Map>
    </div>
  );
}

export default CustomMap;