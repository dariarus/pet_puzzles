import React, {useEffect, useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import {FragmentsContainer} from '../fragments-container/fragments-container';
import {ImageContainer} from '../image-container/image-container';

import {TFragment, TFragmentsArray} from '../../types';

import puzzleContainerStyles from './puzzle-container.module.css';

export const PuzzleContainer = () => {
  const [fragments, setFragments] = React.useState<TFragmentsArray>([]);
  const [draggedFragments, setDraggedFragments] = React.useState<Array<TFragment>>([]);
  const [draggedFragment, setDraggedFragment] = React.useState<TFragment>({fragmentSrc: undefined, id: undefined});

  const handleFragmentDrop = (itemId: number) => {
    setFragments([
      ...fragments.filter((fragment) => fragment.id !== itemId)
    ]);
    console.log('fragments: ', fragments);

    setDraggedFragments([
      ...draggedFragments,
      ...fragments.filter(fragment => fragment.id === itemId)
    ]);

    console.log('draggedFr1: ', draggedFragments);

    // const fragmentWasDragged = draggedFragments.find((fragment, fragmentIndex) => {
    //   if (fragment.id === draggedFragment.id) return {fragmentSrc: undefined, id: undefined};
    //   return fragmentIndex === itemId ? draggedFragment : fragment;
    // })
  };

  useEffect(() => {
    const fragments = [...Array(24)]
      .map((fragment, index) => ({
        fragmentSrc: `image_part_${index}.jpg`,
        id: index
      }))
      .sort(() => Math.random() - 0.5);

    // setSourceFragments(fragments);
    setFragments(fragments);
  }, [])

  return (
    <section className={puzzleContainerStyles.container}>
      <DndProvider backend={HTML5Backend}>
        <FragmentsContainer sourceFragments={fragments}/>
        <ImageContainer draggedFragments={draggedFragments} onDropFragment={handleFragmentDrop}/>
      </DndProvider>
    </section>
  )
}