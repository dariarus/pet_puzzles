import React, {FunctionComponent, useEffect, useState} from 'react';

import imageContainerStyles from './image-container.module.css';

import {TFragment, TFragmentsArray} from '../../types';
import {useDrop} from 'react-dnd';
import {FinishedImageFragmentsList} from '../finished-image-fragments-list/finished-image-fragments-list';

export const ImageContainer: FunctionComponent<{ draggedFragments: TFragmentsArray, onDropFragment(itemId: number | undefined): void }> = (props) => {

  return (
    <div className={imageContainerStyles.container}>
      <ul className={imageContainerStyles['puzzleImage_fox']}>
        {
          props.draggedFragments.map((fragment, index) => (
            <FinishedImageFragmentsList puzzleFragment={fragment}
                                        onDropFragmentHandler={props.onDropFragment}
            />
          ))
        }
      </ul>
    </div>
  )
}
