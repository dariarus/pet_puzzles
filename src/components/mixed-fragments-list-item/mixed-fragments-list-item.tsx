import React, {FunctionComponent} from 'react';
import {TFragment} from '../../types';
import {useDrag} from 'react-dnd';

export const MixedFragmentsListItem: FunctionComponent<{ puzzleFragment: TFragment }> = (props) => {
  const [{isDragging}, dragRef] = useDrag({
    type: 'fragment',
    item: props.puzzleFragment,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })

  return (
    <li>
      {
        !isDragging &&
        <img ref={dragRef}
             src={`./fragments/fox_6x4/${props.puzzleFragment.fragmentSrc}`}
             alt="Фрагмент картинки-пазла"
        />
      }
    </li>
  )
}