import React, {FunctionComponent} from 'react';
import {useDrop} from 'react-dnd';

import finishedImageFragmentsListStyles from './finished-image-fragments-list-item.module.css';

import {TFragment} from '../../types';

import {isTypeFragment} from '../../utils/functions';

export const FinishedImageFragmentsListItem: FunctionComponent<{
  puzzleFragment: TFragment | {},
  draggedFragmentIndex: number
  onDropFragmentHandler: (item: TFragment, droppedFragmentIndex: number) => void,
}> = (props) => {
  const [{isOver, canDrop}, dropRef] = useDrop({
    accept: 'fragment',
    drop: (item: TFragment, monitor) => {
        props.onDropFragmentHandler(item, props.draggedFragmentIndex);
        console.log(monitor.canDrop())
    },
    canDrop: (item: TFragment) => {
      return item.id !== props.draggedFragmentIndex;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  return (
    <li ref={dropRef}
        className={finishedImageFragmentsListStyles.puzzleItem}
    >
      {
        isTypeFragment(props.puzzleFragment) &&
        props.puzzleFragment &&
        <img src={`./fragments/fox_6x4/${props.puzzleFragment.fragmentSrc}`} alt="Фрагмент картинки-пазла"/>
      }
    </li>
  )
}