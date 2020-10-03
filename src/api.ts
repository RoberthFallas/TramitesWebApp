import app from 'apprun';
import { get, post, del, put } from './fetch';

export const auth = {

  /** login user **/
  signIn(user: { cedula: string; password: string }) {
    return post<any>('/autenticacion/login', user );
  }
};



// set user data
app.on('/set-user', user => {
  // for global access
  app['user'] = user;
  console.log("from user global")
  console.log(user.jwt)
  console.log(user.usuario)

  // update token in local storage
  //setToken(user ? user.jwt : null);
});
