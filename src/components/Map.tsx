// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import React,{ memo } from 'react';
import { MapContainer, TileLayer, } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml'; // Assuming you're using React Leaflet
import 'leaflet/dist/leaflet.css';


const CoverageMap = memo(function CoverageMap() {
  const [kml, setKml] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "/kml/coverage.kml"
    )
      .then((res) => res.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, "text/xml");
        setKml(kml);
      });
  }, []);

  console.log(kml)

  return (
    <section className='mt-20 z-1'>
    <MapContainer
        style={{ height: "500px", width: "100%", zIndex:0 }}
        zoom={12}
        center={[6.4488, 3.3890]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {kml && <ReactLeafletKml kml={kml} />}
      </MapContainer>
    </section>
  );


//     const { isLoaded, loadError } = useLoadScript({
//         googleMapsApiKey: 'AIzaSyDGaiubUdqf5Bypla2u6eSlVDmvopME5ew',
//       });
    
//       if (loadError) {
//         return <div>Error loading maps</div>;
//       }
    
//       if (!isLoaded) return <Loader/>

//   return (
//     <section className='mt-20'>
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       zoom={10}
//       center={center}
//     >
//       <Marker position={center} />
//     </GoogleMap>
//   </section>
//   ) 
})

export default CoverageMap