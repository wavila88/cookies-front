import { Fragment } from 'react';
import './App.css';
import {createCookie, createSecureCookie,deleteSecureCookie} from './services/cookieService'

function App() {
  return (
    <Fragment>
      <button onClick={createCookie}>Create cookie</button>
      <button onClick={createSecureCookie}>Create Secure cookie</button>
      <br></br>
      <button onClick={deleteSecureCookie}>Delete Secure cookie</button>
    </Fragment>
  );
}

export default App;
