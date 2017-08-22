export class Feature{
    label : string;
    ico : string;
    description : string;
    port : number;
    http : boolean;

    constructor(label:string,description:string,port:number,ico?:string, http?:boolean){
        this.label = label;
        this.description = description;
        this.port = port;
        ico==null ? this.ico = "" : this.ico = ico;
        http==null ? this.http = false : this.http = http; 
    }

}