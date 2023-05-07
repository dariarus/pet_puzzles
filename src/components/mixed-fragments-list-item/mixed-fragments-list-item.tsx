import React, {FunctionComponent} from 'react';
import {TFragment} from '../../types';

export const MixedFragmentsListItem: FunctionComponent<{puzzleFragment: TFragment}> = (props) => {
  return (
    <li>
      {
        props.puzzleFragment &&
        <img src={`./fragments/fox_6x4/${props.puzzleFragment.fragmentSrc}`}
             alt="Фрагмент картинки-пазла"
             draggable/>
      }
    </li>
  )
}