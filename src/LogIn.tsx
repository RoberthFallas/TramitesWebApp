import { app, Component } from 'apprun';
import Usuario from './Dto/Usuario';

export default class LogInComponent extends Component {
  state = new Usuario();

  view = state => <div>
    <input type="text" placeholder="Usuario" oninput={e => this.run('usuario', e)} />
    <input type="password" placeholder="Contrseña" oninput={e => this.run('contrasenna', e)} />
    <button>Entrar</button>
  </div>;

  update = {
    "contrasenna": (state ,valor) => {
      console.log(state)
      this.state.setContrasenna(valor.target.value)
    },
    "usuario": (state ,valor) => {
      this.state.setCedula(valor.target.value)
      console.log(state)
    }
    
  }
}

