
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Loader from './Loader';
import { memo } from 'react';


const mapContainerStyle = {
  width: '100%',
  height: '600px',
};
const center = {
  lat: 6.5808621, // default latitude
  lng: 3.2773819, // default longitude
};

const CoverageMap = memo(function CoverageMap() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDGaiubUdqf5Bypla2u6eSlVDmvopME5ew',
      });
    
      if (loadError) {
        return <div>Error loading maps</div>;
      }
    
      if (!isLoaded) return <Loader/>

  return (
    <section className='mt-20'>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  </section>
  ) 
})

export default CoverageMap