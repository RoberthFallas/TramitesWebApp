import app, { Component, on } from 'apprun';
import { auth , dataTramites, tramitesEstados} from '../api';

interface IState {
	user: null;
	loading: boolean;
	alertar: boolean;
	form: {
		username: string;
		password: string;
	};
}

class LoginComponent extends Component {
	public state: IState = {
		user: null,
		loading: false,
		alertar: false,

		form: {
			username: '',
			password: '',
			
		},
	};

	private view = function (state) {
	
		if (!!app['user']) {
			return;
		}

		return (
			<div class="row mt-3">

				{!!state.alert &&(

					<div>
					<div class="alert alert-danger" role="alert">
                       ¡Credenciales invalidas!
                    </div>
					</div>
					
				)}
				<div class="col-6 offset-3">
					<form onsubmit={e => this.run('submit', e)}>
						<div class="form-group">
							<label for="inputCedula">Username</label>
							<input
								type="text"
								autofocus
								class="form-control"
								id="inputCedula"
								name="username"
								oninput={e => this.run('type', e)}
							/>
						</div>

						<div class="form-group">
							<label for="inputPassword">Password</label>
							<input
								type="password"
								class="form-control"
								id="inputPassword"
								name="password"
								oninput={e => this.run('type', e)}
							/>
						</div>

						<button type="submit" class="btn btn-primary" disabled={state.loading}>
							{!state.loading ? 'Submit' : 'Loading...'}
						</button>
					</form>
				</div>
			</div>
		);
	};

	@on('loading')
	private onLoading(state, loading) {
		return { ...state, loading };
	}

	@on('alertar')
	private onAlert(state, alertar) {
		return { ...state, alertar };
	}
	
	private inputsValid() {
		return !!this.state.form.username && !!this.state.form.password;
	}

	@on('#/login')
	private async root(state) {
		
		if (!!app['user']) {
			return (window.location.hash = '#/');
		}

		return state;
	}

	
	@on('type')
	private onInputType(state, event) {
		const { name } = event.target;

	
		return { ...state, form: { ...state.form, [name]: event.target.value } };
	}

	
	@on('submit')
	private async onSubmit(state, event) {
		
		event.preventDefault();

		
		if (!this.inputsValid()) {
			return;
		}

		const { form } = state;

		try {
			this.run('loading', true);
			
			const user = await auth.signIn({ cedula: form.username , password: form.password });
			app.run('/set-user', user);
			const data = await dataTramites.getData()
			console.log(data)
			app.run('/set-data',data);
			
			const estados = await tramitesEstados.getEstados();
			app.run('/set-estados', estados);


			this.run('loading', false);
			window.location.hash = '#/profile';
		} catch (err) {
			console.log(err)
			
			
			
			
		} 
		
	}
}

export default new LoginComponent().mount('my-app');
