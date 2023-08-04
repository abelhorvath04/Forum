import React from 'react';
import Login from "./Login";
import MainLeft from "./MainLeft";

export default function Main() {
    return (
        <div className='container-fluid mt-20'>
            <div className="row text-center justify-content-around main-row">
                <div className="col-4 align-self-center">
                    <MainLeft />
                </div>
                <div className="col-4">
                    <Login />
                </div>
            </div>
        </div>
    )
}

