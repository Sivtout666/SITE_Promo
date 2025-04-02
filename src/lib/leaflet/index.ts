import { map, type Map, tileLayer, Canvas } from "leaflet"
import partenaires from "./partenaires";

const TILES = `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png`

export default (element: HTMLElement): Map => {
    const carte = map(element, {
        renderer: new Canvas(),
        preferCanvas: true,
        minZoom: 2
    }).setView([43.12, 5.94], 3);

    const tuiles = tileLayer(TILES, {
        tileSize: 256,
        zoomOffset: 0,
        attribution: '&copy; OpenStreetMap',
        maxZoom: 18,
    })

    tuiles.addTo(carte)
    partenaires.addTo(carte)

    return carte
}