import React from 'react';
import { LeftGrid } from './LeftMainStyles';
import Title from './Title/Title';
import MiddleRow from './MiddleRow/MiddleRow';
import ItemsContainer from './ItemsContainer/ItemsContainer';

const LeftMain = () => {
    return (
        <LeftGrid>
          <Title />
         <MiddleRow />
          <ItemsContainer />
        </LeftGrid>
    )
}

export default LeftMain