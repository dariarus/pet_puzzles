import React, {FunctionComponent, useEffect, useState} from 'react';

import {TFragmentsArray} from '../../types';

import fragmentsContainerStyles from './fragments-container.module.css';

import {MixedFragmentsListItem} from '../mixed-fragments-list-item/mixed-fragments-list-item';

import {isTypeFragment} from '../../utils/functions';

export const FragmentsContainer: FunctionComponent<{ sourceFragments: TFragmentsArray }> = (props) => {
  return (
    <div className={fragmentsContainerStyles.container}>
      <ul className={fragmentsContainerStyles.fragmentsList}>
        {
          props.sourceFragments.map((fragment, index) => (
            isTypeFragment(fragment) &&
            <MixedFragmentsListItem key={index} puzzleFragment={fragment}/>
          ))
        }
      </ul>
    </div>
  )
}