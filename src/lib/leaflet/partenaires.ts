import { LayerGroup, Marker } from "leaflet";
import ecoles from "./ecoles.json"
import { ActivePartenaire, Partenaire as IconPartenaire } from "./icones";

export interface Partenaire {
    nom: string,
    pays: string,
    anglais?: string,
    lien?: string,
    position: [number, number]
}

const partenaires = new LayerGroup<Marker>();
for(const ecole of ecoles) {
    const partenaire = ecole as Partenaire;
    const marker = new Marker(partenaire.position, {
        icon: IconPartenaire
    })

    // On envoie les informations relatifs au partenaire via un evenement DOM
    marker.addEventListener('click', (e) => {
        const event = new CustomEvent('open-partenaire', {
            detail: partenaire
        })
        document.dispatchEvent(event);
        e.originalEvent.stopImmediatePropagation()
        marker.setIcon(ActivePartenaire)

        partenaires.eachLayer(layer => {
            const sub_marker = layer as Marker
            if(marker == sub_marker) return;
            
            sub_marker.setIcon(IconPartenaire)
        })
    })
    marker.addTo(partenaires)
}

export default partenaires