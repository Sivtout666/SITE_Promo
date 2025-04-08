import { map, type Map, tileLayer, Canvas, Marker } from "leaflet"
import partenaires from "./partenaires";
import { Ecole } from "./icones";

const TILES = `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png`

export default (element: HTMLElement): Map => {
    const carte = map(element, {
        renderer: new Canvas(),
        preferCanvas: true,
        scrollWheelZoom: false,
        minZoom: 2,
    }).setView([43.1205, 5.9388], 3);

    const tuiles = tileLayer(TILES, {
        tileSize: 256,
        zoomOffset: 0,
        attribution: '&copy; OpenStreetMap',
        maxZoom: 18,
    })

    const ecole = new Marker([43.12058139294857, 5.93882632066672], {
        icon: Ecole
    })

    tuiles.addTo(carte)
    partenaires.addTo(carte)
    ecole.addTo(carte)
    
    return carte
}