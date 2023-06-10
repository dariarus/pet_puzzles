import React, {FunctionComponent} from 'react';

import finishedImageFragmentsListStyles from './finished-image-fragments-list.module.css';
import imageContainerStyles from '../image-container/image-container.module.css';
import {TFragment} from '../../types';
import {useDrop} from 'react-dnd';
import {isFragment} from '../../utils/functions';

export const FinishedImageFragmentsList: FunctionComponent<{
  puzzleFragment: TFragment | {},
  draggedFragmentIndex: number
  onDropFragmentHandler: (itemId: TFragment, droppedFragmentKey: number) => void,
}> = (props) => {
  const [{isOver}, dropRef] = useDrop({
    accept: 'fragment',
    drop: (item: TFragment) => {
      props.onDropFragmentHandler(item, props.draggedFragmentIndex);

      // console.log('itemInd: ', item.id)
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  })

  return (
    <li ref={dropRef}
        className={finishedImageFragmentsListStyles.puzzleItem}>
      {
        isFragment(props.puzzleFragment) &&
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