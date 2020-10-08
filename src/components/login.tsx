import app, { Component, on } from 'apprun';
import { auth , dataTramites} from '../api';

interface IState {
	user: null;
	form: {
		username: string;
		password: string;
	};
}

class LoginComponent extends Component {
	public state: IState = {
		user: null,
		form: {
			username: '',
			password: '',
		},
	};

	/** render view **/
	private view = function (state) {
		// user logged (or loading user data), no render page
		if (!!app['user']) {
			return;
		}

		return (
			<div class="row mt-3">
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

						<button type="submit" class="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		);
	};

	/** verify if the inputs are valid **/
	private inputsValid() {
		return !!this.state.form.username && !!this.state.form.password;
	}

	@on('#/login')
	private async root(state) {
		// user logged, redirect to home page
		if (!!app['user']) {
			return (window.location.hash = '#/');
		}
		return state;
	}

	// inputs typing
	@on('type')
	private onInputType(state, event) {
		const { name } = event.target;

		// update state
		return { ...state, form: { ...state.form, [name]: event.target.value } };
	}

	// submit form
	@on('submit')
	private async onSubmit(state, event) {
		// not reloading page
		event.preventDefault();

		// not execute request, inputs are invalid
		if (!this.inputsValid()) {
			return;
		}

		const { form } = state;

		try {
			// execute request
			const user = await auth.signIn({ cedula: form.username , password: form.password });
			app.run('/set-user', user);
			const data = await dataTramites.getData()

			console.log(data)
			// update user data	
			app.run('/set-data',data);


			// redirect to home page
			window.location.hash = '#/profile';
		} catch (err) {
			console.log(err);
		}
	}
}

export default new LoginComponent().mount('my-app');
