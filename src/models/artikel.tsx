
export  class ArtikelModel {
    

    Id?: string;
    Category?: string;
    Gambar?: string;
    Title?:string;
    Description?:string;
    Date?:string;
    Author?:string;
    Slug?:string;
    Visit?:number;
    Translations?:any;

    constructor(id: string, category: string,gambar: string,title: string,description: string,date: string,author: string, slug: string,visit: number,translations:any) {
        this.Id = id;
        this.Category = category;
        this.Gambar = gambar;
        this.Title = title;
        this.Description = description;
        this.Date = date;
        this.Author = author;
        this.Slug = slug;
        this.Visit = visit;
        this.Translations = translations;
    } 
}


