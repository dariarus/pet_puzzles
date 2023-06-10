import React, {FunctionComponent} from 'react';
import {TFragment} from '../../types';
import {useDrag} from 'react-dnd';

export const MixedFragmentsListItem: FunctionComponent<{ puzzleFragment: TFragment }> = (props) => {
  const [{isDragging}, dragRef] = useDrag({
    type: 'fragment',
    item: props.puzzleFragment,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      const getItem = monitor.getItem();
      const handlerId = monitor.getHandlerId();

      console.log('dropResult: ', dropResult)
      console.log('getItem: ', getItem)
      console.log('handlerId: ', handlerId)
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