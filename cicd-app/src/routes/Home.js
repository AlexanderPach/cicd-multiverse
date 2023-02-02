import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return <>

      <h1 className="display-4">My Own Page</h1>
      <p className="lead font-weight-normal"><em>- Alexander Pacheco</em></p>
      <Link className="btn" to="/bio">Find out More About Me</Link>
     
    
  </>;
}

export { Home };
