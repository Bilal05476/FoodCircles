import React from 'react';
import Common from './Common';

const About = () => {
  return (
    <>
    <Common 
    name='Welcome to About page of'
    subtitle='All you need to know About us! '
    btname='Contact Now'
    visit='/contact'
    page='FoodCircles'
    />
    <div className='container'><hr /></div>
    </>
  );
}

export default About;
