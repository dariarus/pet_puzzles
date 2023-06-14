import React, {FunctionComponent} from 'react';
import {TFragment} from '../../types';
import {useDrag} from 'react-dnd';
// import {dragRef} from '../../utils/constants';

export const MixedFragmentsListItem: FunctionComponent<{ puzzleFragment: TFragment }> = (props) => {
  const [{isDragging}, dragRef] = useDrag({
    type: 'fragment',
    item: props.puzzleFragment,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  })
  // const dragRefResult = dragRef(props.puzzleFragment)

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