import React, {FunctionComponent, useEffect} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import puzzleContainerStyles from './puzzle-container.module.css';

import {TFragment, TFragmentsArray, TPuzzleContainer} from '../../types';

import {FragmentsContainer} from '../fragments-container/fragments-container';
import {ImageContainer} from '../image-container/image-container';

import {isTypeFragment} from '../../utils/functions';

export const PuzzleContainer: FunctionComponent<TPuzzleContainer> = (props) => {
  return (
    <section className={puzzleContainerStyles.container}>
      <DndProvider backend={HTML5Backend}>
        <FragmentsContainer onDropBackFragmentHandler={props.handleDropFragmentBack}
                            sourceFragments={props.fragments}
                            imageName={props.imageName}
        />
        <ImageContainer onDropFragmentHandler={props.handleDropFragment}
                        imageFragments={props.draggedFragments}
                        imageName={props.imageName}
        />
      </DndProvider>
    </section>
  )
}