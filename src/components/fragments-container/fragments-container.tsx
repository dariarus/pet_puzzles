import React, {FunctionComponent, useEffect, useState} from 'react';

import {TFragmentsArray} from '../../types';

import {MixedFragmentsListItem} from '../mixed-fragments-list-item/mixed-fragments-list-item';

import fragmentsContainerStyles from './fragments-container.module.css';

export const FragmentsContainer: FunctionComponent<{sourceFragments: TFragmentsArray}> = (props) => {
  return (
    <ul className={fragmentsContainerStyles.fragmentsContainer}>
      {
        props.sourceFragments.map((fragment, index) => (
          <MixedFragmentsListItem key={index} puzzleFragment={fragment}/>
        ))
      }
    </ul>
  )
}