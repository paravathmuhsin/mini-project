import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const GeoLocationMap = (coord) => {

    //console.log(coord.lat);
    //console.log(coord.lng);

    if (!coord.lat || !coord.lng) {
        return <p>Error: Invalid coordinates</p> // Handle missing or invalid coordinates
    }

    const position = [coord.lat, coord.lng];

    return (
        <div>
            Author Location
            <MapContainer center={position} zoom={13} style={{ height: '100px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        Latitude: {coord.lat}<br />
                        Longitude: {coord.lng}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default GeoLocationMap;