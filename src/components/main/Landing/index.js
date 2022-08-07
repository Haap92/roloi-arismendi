import React from 'react';
import ImageSlider from '../ImageSlider';
import ItemListContainer from '../../../containers/ItemListContainer';

const Landing = () => {

  return (
    <div>
     <div>
        <ImageSlider />
     </div>
     <div>
        <ItemListContainer/>
     </div>        
    </div>
  );
};

export default Landing;