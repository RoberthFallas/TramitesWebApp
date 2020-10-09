import app, { Component, on } from 'apprun';
import { auth, dataTramites, modificarEstado, tramitesEstados } from '../api';
import {  IData, ITramiteEstado  } from '../models';
type IKeys = {propiedad: string; key: string} | string | {propiedad: IKeys; key: string} ;

interface IState {
  user: null | object;
  data: null | IData[];
  showData: null | IData[];
  tramiteEstados: null | ITramiteEstado[];
  itemSelected: any;
  idOpcionSelected: string
}



class ProfileComponent extends Component {
  public state: IState = {
    user: null,
    data: [],
    showData: [],
    itemSelected: null,
    tramiteEstados: [],
    idOpcionSelected: ''
  };
  private keysDeBusqueda: IKeys[] = ['id', {propiedad: 'cliente', key: 'cedula'},{propiedad: 'tramiteTipo', key: 'descripcion'}, 'fechaRegistro', 'estadoActual' ]

  private view = function (state) {
    
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
                <th scope="col">Fecha  de Registro</th>
                <th scope="col">Acción</th>

              </tr>
            </thead>

            <tbody>
            {this.printTable()}
            </tbody>
          </table>
          {!!state.itemSelected && (
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                   ID TRAMITE:  {state.itemSelected.id}
                  </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  {/** select **/}
                  <select
                    class="custom-select"
                    onchange={e => this.run('onselect', e.target.value)}>
                      {this.printOptions()}
                  </select>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-primary"  onclick={() => this.run('saveChanges')}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        </div>
      </>
    );
  };
  private printOptions(){
    this.state.idOpcionSelected = '1'
    if (!this.state.tramiteEstados && this.state.tramiteEstados.length==0) {
      return (
        <option selected>No hay estados</option>
      );
    }

    return this.state.tramiteEstados.map(item => {
      <option selected>No hay estados</option>
      return (
      <option value= {item.id}>{item.descripcion}</option>
      );
    });
  }
  private printTable() {
   
    if (!this.state.showData || this.state.showData.length==0) {
      return (
        <tr>
          <td colSpan={4}>No hay tramites por el momento :( </td>
        </tr>
      );
    }

    return this.state.showData.map(item => {
      return (
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.tramiteTipo.descripcion}</td>
          <td>{item.cliente.cedula}</td>
          <td>{item.estadoActual}</td>
          <td>{item.fechaRegistro}</td>
          <td>
          <button
              class="btn btn-sm btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              onclick={() => this.run('action', item)}>
              Cambiar Estado
            </button>
          </td>
        </tr>
      );
    });
  }

  

 
  @on('/set-user')
  private onSetUser(state, user) {
    console.log("in set-user")
    return { ...state, user };
  }

  @on('/set-estados')
  private onSetEstados(state, tramiteEstados) {
    state.tramitesEstados =tramiteEstados

    console.log(state.tramitesEstados)

    return { ...state, tramiteEstados };
  }
  
  @on('/set-data')
  private onSetData(state, data) {
    console.log("in set-data")


    state.data = data
  
    const date = new Intl.DateTimeFormat('en-GB');

    data = data.map(v => ({
      ...v,
      fechaRegistro: date.format(new Date(v.fechaRegistro)),
      
    }));
    state.showData = data;
    state.data = data;

    this.estadoActual();
    
    return { ...state, data };
  }

  private estadoActual(){

   console.log("en actualizar estado")
    for(let item of this.state.data){


      
        let estadoRecinte = item.tramiteCambioEstados[0];

       for(let stat of item.tramiteCambioEstados)
        {
         if(stat.fechaRegistro>estadoRecinte.fechaRegistro){
           estadoRecinte = stat;
          }
        }

         item.estadoActual = estadoRecinte.tramiteEstado.descripcion;
      
      
    }
    this.state.showData = this.state.data;

  }
  private async  modificarEstadoInterface(state, nuevoEstado){
    let data =  this.state.data;

    data.forEach(element => {
      if(element.id == this.state.itemSelected.id){
        console.log("encontrado" + nuevoEstado )
        element.estadoActual = nuevoEstado
      }
    });


    this.state.showData = data;
    this.state.data = data;

   
    return { ...state, data };

  }
  private evaluarKey(propiedad: string ){
    let resultado = {isObject: false, propiedad: ''}

    const isIncluida = this.keysDeBusqueda.some(
      value=>{
        if(typeof value == 'string'){
          resultado = {isObject: false, propiedad: value};
          return propiedad == value;
        }
        resultado = {isObject: true, propiedad: value.key}
        return value.propiedad == propiedad;
      }
    );
    return {isIncluida, resultado}
  }
  @on('onselect')
  private onMenu(state, value) {
    
    state.idOpcionSelected = value
    console.log(state.idOpcionSelected);

    
  }


   @on('action')
  private onAction(state, item) {
    return { ...state, itemSelected: item };
  }

  @on('saveChanges')
  private async onSaveChanges(state) {

    const data = await modificarEstado.modificar(this.state.itemSelected.id, this.state.idOpcionSelected);

  
    const estado =data.tramiteEstado.descripcion
    
  
    await this.modificarEstadoInterface(state, estado)

    


   
  }
  @on('search')
  private onSearch(state, value) {
   
    const keys = ['id', 'tramiteTipo'];

    const showData = state.data.filter(item => {
    
      let found = false;
    
      for (const key in item) {
        
      
          const {isIncluida, resultado} = this.evaluarKey(key);

          const itemValue = !resultado.isObject ? item[key] : item[key][resultado.propiedad]

          found = isIncluida && itemValue.toString().includes(value.toUpperCase());


       
        if(found){
          break;
        }
        
      }

      return found;
    });

    return { ...state, showData };
  }

  @on('#/profile')
  private async root(state) {
 
    
    if (!state.user) {
      return (window.location.hash = '#/login');
    }

   


   
    

    return {
      ...state
    };


    return state;
  }
}

export default new ProfileComponent().mount('my-app');
