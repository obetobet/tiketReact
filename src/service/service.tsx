import Response from "../models/response";
import axios from "axios";


export default class BaseService {
    private static baseURL: string = "https://obet.pythonanywhere.com/v1";
    private static token: string = "token 836a53db3ee059632f06a84ce3cebbee78a030f2";


    public static async getAll<T>(url: string,): Promise<Response> {
        let res = await axios.get<Array<T>>(this.baseURL + url,{ headers: { Authorization: this.token } })
            .then((response: any) => {
                const result = response.data;
                if(result && result){
                    return new Response(true, result  as Array<T>, "Success", "");
                }else{
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text: "Error";
                    return new Response(false, null, "Error", msg);
                }
              
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static get<T>(url: string, param: any): Promise<Response> {
        let res = axios.get<T>(this.baseURL + url + param ,{ headers: { Authorization: this.token } })
            .then((response: any) => {
                console.log('asdad'+response)
                const result = response.data;                
                if(result && result.success){
                    return new Response(true, result.data , "Success", "");
                }else{
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text: "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static async getdetail<T>(url: string,param: any,): Promise<Response> {
        let res = await axios.get<Array<T>>(this.baseURL + url + param,{ headers: { Authorization: this.token } })
            .then((response: any) => {
                const result = response.data;
                if(result && result){
                    return new Response(true, result  as Array<T>, "Success", "");
                }else{
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text: "Error";
                    return new Response(false, null, "Error", msg);
                }
              
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }

    public static delete(url: string, param: any): Promise<Response> {
   
        let res = axios.delete(this.baseURL + url , { data: param } )
            .then(response => { 
                const result = response.data;
                if(result && result.success){
                    return new Response(true, result.data , "Success", "");
                }else{
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text: "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }
    public static create<T>(url: string, obj: T): Promise<Response> {

        let res = axios.post(this.baseURL + url ,obj ,{ headers: { Authorization: this.token } })
            .then(response => {
                const result = response.data;
                if(result && result.success){
                    return new Response(true, result.data , "Success", "");
                }else{
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text: "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);
            });
        return res;
    }
    public static update<T>(url: string, param: any, obj: T): Promise<Response> {

        let res = axios.post(this.baseURL + url + param, obj ,{ headers: { Authorization: this.token } })
            .then(response => {
                const result = response.data;
                if(result && result.success){
                    return new Response(true, result.data , "Success", "");
                }else{
                    const msg = (result.messageList && result.messageList.length > 0) ? result.messageList[0].text: "Error";
                    return new Response(false, null, "Error", msg);
                }
            })
            .catch(function (error) {
                return new Response(false, null, "Error", error);;
            });
        return res;
    }
}