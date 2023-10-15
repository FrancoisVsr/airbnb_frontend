/* Definition d'un logement, on lui donne un id, image et cd postal, un nom, un prix
* une note d'évaluation et laisse la possibilité de l'ajouter au favoris 
*/
export interface Logement {
    id: number;
    image: Text;
    city_zipCode: number;
    city_name: string;
    price: number;
    rating: number;
    favourite: boolean;
}