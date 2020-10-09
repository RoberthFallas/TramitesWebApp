import app from 'apprun';
import { get, post, del, put , setToken} from './fetch';

export const auth = {

  /** login user **/
  signIn(user: { cedula: string; password: string }) {
    return post<any>('/autenticacion/login', user );
  },

  
 
};


export const dataTramites = {
  getData() {
    let data =  get<any>('/tramites_registrados');

  	return data;
  }
};


export const modificarEstado= {
  modificar(idTramite: string, idEstado: string){
    let url:string = '/tramiteCambiEstado/actulizarTramiteNuevo/'+idTramite+"/"+idEstado;

    return get<any>(url);
  }
}

export const tramitesEstados = {
  getEstados(){
    let data = get<any>('/tramites_estados');
      return data;

  }  
}


// set user data
app.on('/set-user', user => {
  // for global access
  console.log("SET USER FATHER EVENT")
  app['user'] = user;
 

  // update token in local storage
  setToken(user ? user.jwt : null);
});

app.on('/set-data', data => {
  console.log("SET DATA FATHER EVENT")
  app['tramites'] = data;
 
});


app.on('/set-estados', data => {
  app['estados'] = data;
 
});

