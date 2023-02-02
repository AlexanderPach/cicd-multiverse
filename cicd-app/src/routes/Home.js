import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return <>

      <div className="p-lg-5">
        <h1 className="display-4">My Own Page</h1>
        <p className="lead font-weight-normal"><em>- Alexander Pacheco</em></p>
        <Link className="btn" to="/bio">Find out More About Me</Link>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    
  </>;
}

export { Home };
