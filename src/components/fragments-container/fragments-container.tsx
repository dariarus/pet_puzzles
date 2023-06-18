import React, {FunctionComponent} from 'react';

import {TFragment, TFragmentsArray} from '../../types';

import fragmentsContainerStyles from './fragments-container.module.css';

import {MixedFragmentsListItem} from '../mixed-fragments-list-item/mixed-fragments-list-item';

import {isTypeFragment} from '../../utils/functions';

export const FragmentsContainer: FunctionComponent<{
  sourceFragments: TFragmentsArray,
  onDropFragmentBackHandler: (item: TFragment, draggingFragmentIndex: number) => void
}> = (props) => {

  return (
    <div className={fragmentsContainerStyles.container}>
      {/*<ul ref={dropBackRef}*/}
      <ul
        className={fragmentsContainerStyles.fragmentsList}>
        {
          props.sourceFragments.map((fragment, index) => (
            isTypeFragment(fragment) &&
            <MixedFragmentsListItem key={index}
                                    puzzleFragment={fragment}
                                    draggedFragmentIndex={index}
                                    onDropBackFragmentHandler={props.onDropFragmentBackHandler}
            />
          ))
        }
      </ul>
    </div>
  )
}