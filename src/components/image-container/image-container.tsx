import React, {FunctionComponent} from 'react';

import imageContainerStyles from './image-container.module.css';

import {AnimalPicture, TFragment, TFragmentsArray} from '../../types';

import {FinishedImageFragmentsListItem} from '../finished-image-fragments-list/finished-image-fragments-list-item';

export const ImageContainer: FunctionComponent<{
  onDropFragmentHandler: (item: TFragment, draggedFragmentIndex: number) => void,
  imageFragments: TFragmentsArray,
  imageName: string
}> = (props) => {

  return (
    <div className={imageContainerStyles.container}>
      <ul className={`${imageContainerStyles.puzzleImage} ${props.imageName === AnimalPicture.FOX 
      ? imageContainerStyles['puzzleImage__fox']
      : imageContainerStyles['puzzleImage__bear']}`}>
        {
          props.imageFragments.map((fragment, draggedFragmentIndex) => (
            <FinishedImageFragmentsListItem key={draggedFragmentIndex}
                                            puzzleFragment={fragment}
                                            draggedFragmentIndex={draggedFragmentIndex}
                                            onDropFragmentHandler={props.onDropFragmentHandler}
                                            imageName={props.imageName}
            />
          ))
        }
      </ul>
    </div>
  )
}