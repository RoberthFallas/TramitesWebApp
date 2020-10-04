import app, { Component, on } from 'apprun';
import { auth, dataTramites } from '../api';
import {  IData  } from '../models';

interface IState {
  user: null | object;
  data: null | IData[];
  showData: null | IData[];
}


class ProfileComponent extends Component {
  public state: IState = {
    user: null,
    data: [],
    showData: [],
  };

  /** render view **/
  private view = function (state) {
    // not authenticated
    if (!state.user) {
      return;
    }

    return (
      <>
        
        <div class="input-group my-2" style="width: 300px">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                class="svg-inline--fa fa-search fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="1rem">
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </div>
          </div>
          <input
            class="form-control"
            type="text"
            placeholder="Search"
            autocomplete="off"
            oninput={e => this.run('search', e.target.value)}
          />
        </div>
        <div class="table-responsive table-wraper">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Tipo</th>
                <th scope="col">Cliente</th>
                <th scope="col">Estado</th>

              </tr>
            </thead>

            <tbody>
            {this.printTable()}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  private printTable() {
    // not found results
    if (!this.state.showData || this.state.showData.length==0) {
      return (
        <tr>
          <td colSpan={4}>Nothing here :( </td>
        </tr>
      );
    }

    return this.state.showData.map(item => {
      return (
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.tramiteTipo.descripcion}</td>
          <td>{item.cliente.nombreCompleto}</td>
          <td>{item.tramiteCambioEstados[0].tramiteEstado.descripcion}</td>
        </tr>
      );
    });
  }

  // update user data (listen global event)
  @on('/set-user')
  private onSetUser(state, user) {
    console.log("in set-user")
    return { ...state, user };
  }

  @on('/set-data')
  private onSetData(state, data) {
    console.log("in set-data")
    state.data = data
    state.showData = data
    return { ...state, data };
  }


  

  @on('#/profile')
  private async root(state) {
    // redirect to login page, isn't authenticated
    
    if (!state.user) {
      return (window.location.hash = '#/login');
    }

    const date = new Intl.DateTimeFormat('en-GB');



    //format date fields
   /* data = data.map(v => ({
      ...v,
      fechaRegistro: date.format(new Date(v.fechaRegistro)),
      fechaModificacion: date.format(new Date(v.fechaModificacion)),
    }));*/

    return {
      ...state
    };


    return state;
  }
}

export default new ProfileComponent().mount('my-app');
