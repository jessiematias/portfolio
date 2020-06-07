import React from 'react';
import { MiddleParagraph, ItemsCount } from './MiddleRowStyles';
import constants from '../../../constants';

const MiddleRow = () => {
  return (
      <MiddleParagraph>
         <ItemsCount>{constants.length}</ItemsCount> Items in the library
      </MiddleParagraph>
  )
}

export default MiddleRow