export default class WebsiteModel {
    Id?: string;
    Title?: string;
    Email?: string;
    Telp?: string;
    Alamat?: string;
    Logo?: string;
    Favicon?:string;
    Facebook?: string;
    Twitter?: string;
    Instagram?: string;
    Youtube?: string;

    constructor(id: string,title: string, email: string, telp: string,alamat: string,logo: string,favicon: string,facebook: string,twitter: string,instagram: string,youtube: string,) {
        this.Id = id;
        this.Title = title;
        this.Email = email;
        this.Telp = telp;
        this.Alamat = alamat;
        this.Logo = logo;
        this.Favicon = favicon;
        this.Facebook = facebook;
        this.Twitter = twitter;
        this.Instagram = instagram;
        this.Youtube = youtube;
    } 
}