import React from 'react';
import Card from './Card';
import FData from './FData';

const Featured = () => {
    return(
        <>
        <div className='container text-center'><h1 className='welcome'>Welcome!</h1>
        TO THE BIGGEST NETWORK OF FOOD ORDERING & DELIVERY
        <h3 className='featured'>Featured</h3>Products</div>
        <div className="container mb-5">
        <div className="col-12 mx-auto">
          <div className="row">
                {
                  FData.map((val, ind) =>{
                    return <Card key={val.id}
                    id={val.id}
                    price={val.price}
                    imgsrc ={val.imgsrc}
                    title={val.title}
                    />
                  })
                }
          </div>
        </div>
    </div>
        </>
    )
}

export default Featured;