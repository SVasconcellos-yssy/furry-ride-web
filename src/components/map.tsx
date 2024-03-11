'use client'

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ apiKey }) => {
    const [currentPosition, setCurrentPosition] = useState(null);
    const [mapError, setMapError] = useState(null);

    const containerStyle = {
        width: '100%',
        height: 550,
    };

    const center = currentPosition || { lat: -3.745, lng: -38.523 };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCurrentPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                setMapError(error.message);
            }
        );
    }, []);

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
            >
                {currentPosition && (
                    <Marker position={currentPosition} />
                )}

                {mapError && (
                    <div>Erro ao obter localização: {mapError}</div>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
