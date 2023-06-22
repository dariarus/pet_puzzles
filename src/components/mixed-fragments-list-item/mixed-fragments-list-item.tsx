import React, {FunctionComponent} from 'react';
import {useDrag} from 'react-dnd';

import mixedFragmentsListItemStyles from './mixed-fragments-list-item.module.css';

import {TFragment} from '../../types';

export const MixedFragmentsListItem: FunctionComponent<{ puzzleFragment: TFragment }> = (props) => {
  const [{isDragging}, dragRef] = useDrag({
    type: 'fragment',
    item: props.puzzleFragment,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })

  return (
    <li className={mixedFragmentsListItemStyles.puzzleItem}>
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