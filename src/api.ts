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
    let data = get<any>('/tramites_registrados');
 
  	return data;
  }
};


// set user data
app.on('/set-user', user => {
  // for global access
  app['user'] = user;
 

  // update token in local storage
  setToken(user ? user.jwt : null);
});

