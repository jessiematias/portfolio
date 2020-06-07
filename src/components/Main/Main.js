import React from 'react';
import { MainGrid } from './MainStyles';
import LeftMain from '../LeftMain/LeftMain';
import RightMain from '../RightMain/RightMain';

const Main = () => {
    return (
    <MainGrid>
        <LeftMain />
        <RightMain />
    </MainGrid>
    )
}

export default Main