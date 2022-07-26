
export  class EventModel {
    

    Id?: string;
    Category?: string;
    Image?: string;
    Title?:string;
    Description?:string;
    Date?:string;
    Slug?:string;
    Visit?:number;
    Location?:string;

    constructor(id: string, category: string,image: string,title: string,description: string,date: string, slug: string,visit: number,location:string) {
        this.Id = id;
        this.Category = category;
        this.Image = image;
        this.Title = title;
        this.Description = description;
        this.Date = date;
        this.Slug = slug;
        this.Visit = visit;
        this.Location = location;
    } 
}


