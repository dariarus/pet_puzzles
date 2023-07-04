import React, {FunctionComponent} from 'react';
import {useDrag, useDrop} from 'react-dnd';

import finishedImageFragmentsListStyles from './finished-image-fragments-list-item.module.css';

import {AnimalPicture, TFragment} from '../../types';

import {isTypeFragment} from '../../utils/functions';

export const FinishedImageFragmentsListItem: FunctionComponent<{
  puzzleFragment: TFragment | {},
  draggedFragmentIndex: number
  onDropFragmentHandler: (item: TFragment, droppedFragmentIndex: number) => void,
  imageName: string
}> = (props) => {
  const [{isOver, canDrop}, dropRef] = useDrop({
    accept: 'fragment',
    drop: (item: TFragment) => {
      props.onDropFragmentHandler(item, props.draggedFragmentIndex);
    },
    canDrop: () => {
      return !isTypeFragment(props.puzzleFragment);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  })

  const [{isDragging}, dragRef] = useDrag({
    type: 'fragment',
    item: props.puzzleFragment,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  return (
    // Если на месте сброса фрагмента в dropTarget уже есть фрагмент, его нельзя заменить на новые, сл. там, где есть item, не будет ref-а
    <li ref={canDrop ? dropRef : undefined}
        className={finishedImageFragmentsListStyles.puzzleItem}
    >
      {
        isTypeFragment(props.puzzleFragment) &&
        !isDragging &&
        <img ref={dragRef}
             src={`./fragments/${props.imageName}/${props.puzzleFragment.fragmentSrc}`} alt="Фрагмент картинки-пазла"
             className={`${finishedImageFragmentsListStyles.puzzleImage} ${props.imageName === AnimalPicture.FOX
               ? finishedImageFragmentsListStyles.puzzleImage__fox
               : finishedImageFragmentsListStyles.puzzleImage__bear}`}
        />
      }
    </li>
  )
}