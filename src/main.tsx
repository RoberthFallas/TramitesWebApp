import { app, Component } from 'apprun';
import LogIn from "./LogIn"

const principal = document.getElementById("principal")


app.webComponent('prime-a', LogIn);
app.render(principal, <prime-a/>);