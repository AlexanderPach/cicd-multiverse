import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return <>

    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">My Own Page</h1>
        <p className="lead font-weight-normal"><em>- Alexander Pacheco</em></p>
        <Link className="btn btn-outline-secondary" to="/bio">Find out More About Me</Link>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
  </>;
}

export { Home };