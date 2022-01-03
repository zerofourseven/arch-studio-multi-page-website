import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from 'leaflet';
import markerIconPng from '../assets/leaflet-images/marker-icon.png';
import { locationData } from '../data/data';

const Map = () => {
    const zoomAmount = 6;

    return (
        <MapContainer className='container block map-container' center={[33.33, -90]} zoom={zoomAmount} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                locationData.map((location, index) => {
                const {name, coordinates} = location;
                return (
                    <Marker icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} position={coordinates} key={index}>
                        <Popup>
                            {name}
                        </Popup>
                    </Marker>
                );
                }
                )
            }
        </MapContainer>
    )
}

export default Map
