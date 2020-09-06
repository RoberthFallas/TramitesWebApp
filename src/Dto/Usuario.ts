
export default class Usuario{
    private cedula:String;
    private contrsenna:String;

    constructor(){
        this.cedula = "";
        this.contrsenna = "";
    }

    public getCedula(){
        return this.cedula;
    }

    public getContrasenna():String{
        return this.cedula;
    }

    public setCedula(valor:String):void{
        this.cedula = valor;
    }

    public setContrasenna(valor:String):void{
        this.contrsenna = valor;
    } 
}