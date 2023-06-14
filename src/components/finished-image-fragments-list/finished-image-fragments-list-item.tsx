import React, {FunctionComponent} from 'react';
import {useDrag, useDrop} from 'react-dnd';

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

  const [{isDragging, canDrag}, dragRef] = useDrag({
    type: 'fragment',
    item: props.puzzleFragment,
    // end: (item, monitor) => {
    //   const dropResult = monitor.getDropResult();
    //   const getItem = monitor.getItem();
    //   console.log(dropResult)
    //   console.log(getItem)
    // },
    canDrag: (monitor) => {
      // const dropResult = monitor.getDropResult();
      const item = monitor.getItem();
      // if (Object.keys(item).includes('id') && Object.keys(props.puzzleFragment).includes('id')) {
        return (item as any).id !== (props.puzzleFragment as any).id
      // } else return true


      // else return true
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      canDrag: monitor.canDrag()
    })
  })

  return (
    <li ref={canDrop ? dropRef : undefined}
        className={finishedImageFragmentsListStyles.puzzleItem}
    >
      {
        isTypeFragment(props.puzzleFragment) &&
        // props.puzzleFragment &&
        !isDragging &&
        canDrag &&
        <img ref={dragRef}
             src={`./fragments/fox_6x4/${props.puzzleFragment.fragmentSrc}`} alt="Фрагмент картинки-пазла"/>
      }
    </li>
  )
}