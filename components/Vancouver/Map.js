import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function Map() {
  const [mapIcon, setMapIcon] = useState(null);

  const shopifyLocation = {
    name: "Vancouver Independent School for Science and Technology (VISST)",
    address: "200-1490 Broadway W, VANCOUVER BRITISH COLUMBIA V6H 1H5",
    latitude: 49.263280,
    longitude:  -123.138159
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      setMapIcon(new L.Icon.Default());
    }
  }, []);

  if (!mapIcon) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="h-[500px] w-full rounded-lg overflow-hidden">
        <MapContainer
          center={[shopifyLocation.latitude, shopifyLocation.longitude]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[shopifyLocation.latitude, shopifyLocation.longitude]}
            icon={mapIcon}
          >
          <Popup>
            <div className="text-dark">
              <strong>{shopifyLocation.name}</strong>
              <br />
              <a 
                href="https://maps.app.goo.gl/6kNJ5wM6J2jk3NhS8"
                target="_blank"
                rel="noopener noreferrer"
              >
                {shopifyLocation.address}
              </a>
            </div>
          </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}