"use strict";
exports.__esModule = true;
var react_leaflet_1 = require("react-leaflet");
var Map = function () {
    <react_leaflet_1.MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
    <react_leaflet_1.TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <react_leaflet_1.Marker position={[51.505, -0.09]}>
        <react_leaflet_1.Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
        </react_leaflet_1.Popup>
    </react_leaflet_1.Marker>
    </react_leaflet_1.MapContainer>;
};
exports["default"] = Map;
