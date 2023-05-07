import React, {useEffect, useState} from 'react';

import {FragmentsContainer} from '../fragments-container/fragments-container';
import {ImageContainer} from '../image-container/image-container';

import puzzleContainerStyles from './puzzle-container.module.css';

export const PuzzleContainer = () => {
  return (
    <div className={puzzleContainerStyles.container}>
      <FragmentsContainer/>
      <ImageContainer/>
    </div>
  )
}