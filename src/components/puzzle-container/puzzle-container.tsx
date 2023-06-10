import React, {useEffect, useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import {FragmentsContainer} from '../fragments-container/fragments-container';
import {ImageContainer} from '../image-container/image-container';

import {TFragment, TFragmentsArray} from '../../types';

import puzzleContainerStyles from './puzzle-container.module.css';
import {isTypeFragment} from '../../utils/functions';

export const PuzzleContainer = () => {
  const [fragments, setFragments] = React.useState<TFragmentsArray>([]);
  const [draggedFragments, setDraggedFragments] = React.useState<TFragmentsArray>([]);

  const handleFragmentDrop = (item: TFragment, draggedFragmentIndex: number) => {
    setFragments([
      ...fragments.filter((fragment) => {
        if (isTypeFragment(fragment)) {
          return fragment.id !== item.id
        }
      })
    ]);

    // console.log('frAfterDrag: ', fragments)
    //
    //   setDraggedFragments([
    //     ...draggedFragments,
    //     ...fragments.filter(fragment => {
    //       if (isTypeFragment(fragment)) {
    //         return fragment.id === item.id
    //       }
    //     })
    //   ]);
    setDraggedFragments(
      draggedFragments.map((fragment, fragmentIndex) => {
        if (isTypeFragment(fragment) && fragment.id === draggedFragmentIndex) return {};
        return fragmentIndex === item.id ? item : fragment;
      })
    )
  };

  useEffect(() => {
    const fragments = [...Array(24)]
      .map((fragment, index) => ({
        fragmentSrc: `image_part_${index}.jpg`,
        id: index
      }))
      .sort(() => Math.random() - 0.5);

    const emptyPuzzleData = [...Array(24)].map(() => ({}))

    setFragments(fragments);
    setDraggedFragments([...emptyPuzzleData]);

    console.log(draggedFragments)
  }, [])

  return (
    <section className={puzzleContainerStyles.container}>
      <DndProvider backend={HTML5Backend}>
        <FragmentsContainer sourceFragments={fragments}/>
        <ImageContainer onDropFragmentHandler={handleFragmentDrop} imageFragments={draggedFragments}/>
      </DndProvider>
    </section>
  )
}