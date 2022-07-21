export default class KategoriModel {
    Id?: string;
    Title?: string;
    Slug?:string;

    constructor(id: string,title: string, slug: string) {
        this.Id = id;
        this.Title = title;
        this.Slug = slug;
    } 
}