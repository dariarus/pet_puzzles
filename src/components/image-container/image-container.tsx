import React, {FunctionComponent, useEffect, useState} from 'react';

import imageContainerStyles from './image-container.module.css';

import {TFragment, TFragmentsArray} from '../../types';
import {useDrop} from 'react-dnd';
import {FinishedImageFragmentsList} from '../finished-image-fragments-list/finished-image-fragments-list';

export const ImageContainer: FunctionComponent<{
  onDropFragmentHandler: (itemId: number, droppedFragmentKey: number) => void,
  imageFragments: TFragmentsArray
}> = (props) => {
  // const [imageFragments, setImageFragments] = useState<TFragmentsArray>([]);

  // const [{isOver}, dropRef] = useDrop({
  //   accept: 'fragment',
  //   drop: (item: {index: number}) => {
  //     props.onDropFragmentHandler(item.index);
  //     console.log('itemInd: ', item.index)
  //   },
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver()
  //   })
  // })

  // useEffect(() => {
  //   const emptyPuzzleData = [...Array(24)];
  //   setImageFragments([...emptyPuzzleData]);
  // }, [])

  return (
    // <div ref={dropRef}
    <div
         className={imageContainerStyles.container}>
      <div className={imageContainerStyles['puzzleImage_fox']}>
        {
          props.imageFragments.map((fragment, index) => (
            // <FinishedImageFragmentsList key={index} droppedFragmentKey={index} puzzleFragment={fragment}/>
            <img src={`./fragments/fox_6x4/${fragment.fragmentSrc}`} alt="Фрагмент картинки-пазла"/>
          ))}
      </div>
    </div>
  )
}