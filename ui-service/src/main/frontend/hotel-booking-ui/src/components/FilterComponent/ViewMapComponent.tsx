import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import {useNavigate} from "react-router-dom";
import {MapPin} from "lucide-react";

interface ViewMapComponentProps {
    center: [number, number];
    zoom?: number;
    height?: string;
    targetUrl?: string;
}

const ViewMapComponent: React.FC<ViewMapComponentProps> = ({
                                                               center,
                                                               zoom = 13,
                                                               height = '400px',
                                                               targetUrl = 'full-map'

                                                           }) => {
        const navigate = useNavigate();
        return (
            <div className="view-map p-4">
            <MapContainer
                center={center}
                zoom={zoom}
                style={{height, width: '100%'}}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000
                }}>
                    <button
                        onClick={() => navigate(targetUrl)}
                        className="flex items-center gap-2 px-4 py-2 text-blue-600 bg-white rounded-full shadow-md hover:bg-blue-50 transition-colors duration-200"
                    >
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">View Map</span>
                    </button>
                </div>
            </MapContainer>
            </div>
        );
    }
;

export default ViewMapComponent;