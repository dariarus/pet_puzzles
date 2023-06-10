import React, {FunctionComponent, useEffect, useState} from 'react';

import imageContainerStyles from './image-container.module.css';

import {TFragment, TFragmentsArray} from '../../types';
import {useDrop} from 'react-dnd';
import {FinishedImageFragmentsList} from '../finished-image-fragments-list/finished-image-fragments-list';
import {isFragment} from '../../utils/functions';

export const ImageContainer: FunctionComponent<{
  onDropFragmentHandler: (item: TFragment, draggedFragmentIndex: number) => void,
  imageFragments: TFragmentsArray
}> = (props) => {

  const [{isOver}, dropRef] = useDrop({
    accept: 'fragment',
    drop: (item: TFragment, monitor) => {
      const draggedItem = monitor.getItem()
      console.log('draggedItem: ', draggedItem)
      props.onDropFragmentHandler(item, 0);


      // console.log('itemInd: ', item.id)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      item: monitor.getItem(),
      handlerId: monitor.getHandlerId(),
    })
  })

  return (
    // <div ref={dropRef}
    <div
      className={imageContainerStyles.container}>
      <ul
          className={imageContainerStyles['puzzleImage_fox']}>
        {
          props.imageFragments.map((fragment, draggedFragmentIndex) => (
            // isFragment(fragment) &&
            <FinishedImageFragmentsList key={draggedFragmentIndex}
                                        puzzleFragment={fragment}
                                        draggedFragmentIndex={draggedFragmentIndex}
                                        onDropFragmentHandler={props.onDropFragmentHandler}/>
            // <img src={`./fragments/fox_6x4/${fragment.fragmentSrc}`} alt="Фрагмент картинки-пазла"/>
          ))
        }
      </ul>
    </div>
  )
}