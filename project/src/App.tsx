import React from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
// Styles
import { Wrapper, LoadingView } from './App.styles';
import { containerStyle, center, options } from './settings';


const App: React.FC = () => {
  const {isLoaded} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY!
  })
  const mapRef = React.useRef<google.maps.Map<Element> | null>(null);

  const onLoad = (map: google.maps.Map<Element>): void => {
    mapRef.current = map;
  }

  const onUnMount = (): void => {
    mapRef.current = null;
  }

  if(!isLoaded) return <div>Map loading...</div>
  return (
    <Wrapper>
      <GoogleMap
      mapContainerStyle={containerStyle} options={options as google.maps.MapOptions} center={center}
      zoom={12} onLoad={onLoad} onUnmount={onUnMount}/>
    </Wrapper>
  );
};

export default App;
