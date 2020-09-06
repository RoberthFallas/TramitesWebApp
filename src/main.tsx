import { app, Component } from 'apprun';
import LogIn from "./LogIn"
import LogInComponent from './LogIn';

const principal = document.getElementById("principal")
// // Child Components

// // Routing (component event)
// class Home extends Component {
//   view = () => <div>Home</div>;
//   update = {'#, #home': state => state };
// } 

// class Contact extends Component {
//   view = () => <div>Contact</div>;
//   update = {'#contact': state => state };
// } 

// class About extends Component {
//   view = () => <div>About</div>;
//   update = {'#about': state => state };
// }

// const App = () => <>
//   <div id="menus">
//     <a href="#home">Home</a>{' | '}
//     <a href="#contact">Contact</a>{' | '}
//     <a href="#about">About</a></div>
//   <div id="pages"></div>
// </>
// app.render(document.body, <App />);
// [About, Contact, Home].map(C => new C().start('pages'));  

app.webComponent('prime-a', LogIn);
app.render(principal, <prime-a/>);