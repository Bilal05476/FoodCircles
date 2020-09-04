import React from 'react';
import Common from './Common';
import Featured from './Featured';
const Home = () => {
    return (
        <>
        <Common
        name='Health & Delicious '
        subtitle='Restaurant of your city'
        btname='Show Menu'
        visit='/menu'
        page='Pakistani'
        />
        <Featured />
        <div className='container'><hr /></div>
        </>
        
      );
}

export default Home;