import React, {FunctionComponent} from 'react';
import {TFragment} from '../../types';
import {useDrag} from 'react-dnd';

export const MixedFragmentsListItem: FunctionComponent<{ puzzleFragment: TFragment }> = (props) => {
  const [{isDragging}, dragRef] = useDrag({
    type: 'fragment',
    item: () => {
      return {index: props.puzzleFragment.id}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })

  return (
    <li>
      {
        // props.puzzleFragment &&
        !isDragging &&
        <img ref={dragRef}
             src={`./fragments/fox_6x4/${props.puzzleFragment.fragmentSrc}`}
             alt="Фрагмент картинки-пазла"
        />
      }
    </li>
  )
}