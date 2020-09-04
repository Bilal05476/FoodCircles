import React from 'react';
import {NavLink} from 'react-router-dom';
const Common = (props) => {
  return (
    <> 
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="offset-md-3 text-light col-md-6">
                            <h1>
                                {props.name} <br />
                            <strong className="brand-name">{props.page}</strong></h1>
                            <h3 className="my-3">{props.subtitle}</h3>
                            <div className="mt-3"> <NavLink className="btn-get-started" to={props.visit}> {props.btname}</NavLink></div> 
                        </div>
                        {/* <div className='col-lg-6 order-1 order-lg-2 header-img '>
                            <img src={props.imgsrc} className='img-fluid animated ' alt='....' />
                        </div>  */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <br />
    </>
  );
}

export default Common;