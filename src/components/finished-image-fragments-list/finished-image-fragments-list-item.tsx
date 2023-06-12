import React, {FunctionComponent} from 'react';
import {useDrop} from 'react-dnd';

import finishedImageFragmentsListStyles from './finished-image-fragments-list-item.module.css';

import {TFragment} from '../../types';

import {isTypeFragment} from '../../utils/functions';

export const FinishedImageFragmentsListItem: FunctionComponent<{
  puzzleFragment: TFragment | {},
  draggedFragmentIndex: number
  onDropFragmentHandler: (itemId: TFragment, droppedFragmentKey: number) => void,
}> = (props) => {
  const [{isOver}, dropRef] = useDrop({
    accept: 'fragment',
    drop: (item: TFragment, monitor) => {
      props.onDropFragmentHandler(item, props.draggedFragmentIndex);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
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