import React, {FunctionComponent} from 'react';

import finishedImageFragmentsListStyles from './finished-image-fragments-list.module.css';
import imageContainerStyles from '../image-container/image-container.module.css';
import {TFragment} from '../../types';
import {useDrop} from 'react-dnd';

export const FinishedImageFragmentsList: FunctionComponent<{
  puzzleFragment: TFragment,
  // onDropFragmentHandler: (itemId: number, droppedFragmentKey: number) => void,
}> = (props) => {
  // const [{isOver}, dropRef] = useDrop({
  //   accept: 'fragment',
  //   drop: () => {
  //     props.onDropFragmentHandler(props.itemId, props.droppedFragmentKey);
  //   },
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver()
  //   })
  // })

  return (
    // <li ref={dropRef}
    <li
        className={finishedImageFragmentsListStyles.puzzleItem}>
      {
        props.puzzleFragment &&
        <img src={`./fragments/fox_6x4/${props.puzzleFragment.fragmentSrc}`} alt="Фрагмент картинки-пазла"/>
      }
    </li>
  )
}

// <li className={imageContainerStyles.puzzleItem}>
//   <img src={`./fragments/fox_6x4/${props.puzzleFragment.fragmentSrc}`}
//        alt="Фрагмент картинки-пазла"
//        className={imageContainerStyles.listImage}/>
// </li>