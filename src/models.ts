


export interface IData {
    id: number;
    tramiteTipo: ITramiteTipo;
    cliente: ICliente;
    tramiteCambioEstados: ITramiteCambioEstado[];
}
export interface ICliente {
    id: number;
    nombreCompleto: string;
    cedula: string;
    telefono: string;
    direccion: string;
    estado: boolean;
    fechaRegistro: string;
    fechaModificacion:string;
  
}
export interface ITramiteCambioEstado{
    id: number;
    tramiteEstado: ITramiteEstado;
    fechaRegistro: string;
}
  
export interface ITramiteEstado{
    id: number;
    nombre: string;
    descripcion: string;
    estadosSucesores: string;
}
export interface ITramiteTipo{
    id: string;
    descripcion: string;
    fechaRegistro: string;
    fechaModificacion: string;
    estado: boolean;
    departamento: string;
  
}