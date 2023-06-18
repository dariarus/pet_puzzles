import React, {FunctionComponent} from 'react';
import {useDrag, useDrop} from 'react-dnd';

import mixedFragmentsListItemStyles from './mixed-fragments-list-item.module.css';

import {TFragment} from '../../types';
import {isTypeFragment} from '../../utils/functions';

export const MixedFragmentsListItem: FunctionComponent<{
  puzzleFragment: TFragment,
  draggedFragmentIndex: number
  onDropBackFragmentHandler: (item: TFragment, droppedFragmentIndex: number) => void
}> = (props) => {
  const [, dropBackRef] = useDrop({
    accept: 'fragment',
    drop: (item: TFragment) => {
      props.onDropBackFragmentHandler(item, props.draggedFragmentIndex);
    }
  })

  const [{isDragging}, dragRef] = useDrag({
    type: 'fragment',
    item: props.puzzleFragment,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })

  return (
    <li ref={dropBackRef}
      className={mixedFragmentsListItemStyles.puzzleItem}>
      {
        !isDragging &&
        <img ref={dragRef}
             src={`./fragments/fox_6x4/${props.puzzleFragment.fragmentSrc}`}
             alt="Фрагмент картинки-пазла"
             className={mixedFragmentsListItemStyles.puzzleImage}
        />
      }
    </li>
  )
}