import React, {FunctionComponent} from 'react';
import {useDrag} from 'react-dnd';

import mixedFragmentsListItemStyles from './mixed-fragments-list-item.module.css';

import {AnimalPicture, TFragment} from '../../types';

export const MixedFragmentsListItem: FunctionComponent<{ puzzleFragment: TFragment, imageName: string }> = (props) => {
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
             src={`./fragments/${props.imageName}/${props.puzzleFragment.fragmentSrc}`}
             alt="Фрагмент картинки-пазла"
             className={`${mixedFragmentsListItemStyles.puzzleImag} ${props.imageName === AnimalPicture.FOX
             ? mixedFragmentsListItemStyles.puzzleImage__fox
             : mixedFragmentsListItemStyles.puzzleImage__bear}`}
        />
      }
    </li>
  )
}