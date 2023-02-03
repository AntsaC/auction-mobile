
export interface Auction {
    id_enchere: string,
    date_debut: string,
    date_fin: string,
    description: string,
    prix_minimum: number,
    categorie: string,
    prix_courant: number,
    categorie_id: number,
    owner_id: number,
    membre_id: number,
    owner: string,
    statut: string,
    photos: Array<string>
}