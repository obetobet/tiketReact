export default class AboutModel {
    Id?: string;
    Gambar?: string;
    Visit?:string;
    Translations?:any;

    constructor(id: string,gambar: string, visit: string, translations:any) {
        this.Id = id;
        this.Gambar = gambar;
        this.Visit = visit;
        this.Translations = translations;
    } 
}