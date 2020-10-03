import app from 'apprun';

// user global property
app['user'] = null;


// import components
import './components/profile';
import './components/header';
import './components/login';

// handling global routes
app.on('#', (route, ...p) => {
	// from / # #/ redirect to #/profile
	const newRoute = !['/', '#', '#/'].includes(route || '/') ? route : 'profile';

	// render component
  app.run(`#/${newRoute}`, ...p);
});

