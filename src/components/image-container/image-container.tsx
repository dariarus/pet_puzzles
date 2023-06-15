import React, {FunctionComponent, useEffect, useState} from 'react';

import imageContainerStyles from './image-container.module.css';

import {TFragment, TFragmentsArray} from '../../types';

import {FinishedImageFragmentsListItem} from '../finished-image-fragments-list/finished-image-fragments-list-item';

export const ImageContainer: FunctionComponent<{
  onDropFragmentHandler: (item: TFragment, draggedFragmentIndex: number) => void,
  imageFragments: TFragmentsArray
}> = (props) => {

  return (
    <div className={imageContainerStyles.container}>
      <ul className={imageContainerStyles['puzzleImage_fox']}>
        {
          props.imageFragments.map((fragment, draggedFragmentIndex) => (
            <FinishedImageFragmentsListItem key={draggedFragmentIndex}
                                        puzzleFragment={fragment}
                                        draggedFragmentIndex={draggedFragmentIndex}
                                        onDropFragmentHandler={props.onDropFragmentHandler}
            />
          ))
        }
      </ul>
    </div>
  )
}