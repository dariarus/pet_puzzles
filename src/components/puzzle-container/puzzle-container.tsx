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

  const handleFragmentDrop = (item: TFragment, draggingFragmentIndex: number) => {
    setFragments([
      ...fragments.filter((fragment) => {
        if (isTypeFragment(fragment)) {
          return fragment.id !== item.id
        }
      })
    ]);


    const finalDraggedFragmentsArray = draggedFragments.map((dropTargetFragment, dropTargetFragmentIndex) => {
      // Если на месте сброса фрагмента в dropTarget уже есть фрагмент, его нельзя заменить на новые
      if (isTypeFragment(dropTargetFragment)) return dropTargetFragment;
      // if (isTypeFragment(dropTargetFragment) && dropTargetFragment.id === item.id) return dropTargetFragment;
      // if ()
      // Сравниваем правую часть (final image) при отрисовке с самой собой при перетягивании.
      // Если индекс при переборе при отрисовке (т.е. тот фрагмент, на который кидается item) совпадает
      // с индексом при переборе во время handleDrop, вместо бывшего на этом месте пустого места отрисовывается item
      if (dropTargetFragmentIndex === draggingFragmentIndex) {
        return item
      } else return dropTargetFragment
    });

   let  uniqueFragments = [...new Set(finalDraggedFragmentsArray)];
    setDraggedFragments(uniqueFragments)
    // setDraggedFragments(
    //   draggedFragments.map((dropTargetFragment, dropTargetFragmentIndex) => {
    //     // Если на месте сброса фрагмента в dropTarget уже есть фрагмент, его нельзя заменить на новые
    //     // if (isTypeFragment(dropTargetFragment)) return dropTargetFragment;
    //     if (isTypeFragment(dropTargetFragment) && dropTargetFragment.id === item.id) return dropTargetFragment;
    //     // if ()
    //     // Сравниваем правую часть (final image) при отрисовке с самой собой при перетягивании.
    //     // Если индекс при переборе при отрисовке (т.е. тот фрагмент, на который кидается item) совпадает
    //     // с индексом при переборе во время handleDrop, вместо бывшего на этом месте пустого места отрисовывается item
    //     if (dropTargetFragmentIndex === draggingFragmentIndex) {
    //       return item
    //     } else return dropTargetFragment
    //   })
    // )
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

    // Делаем ранее пустой <ul>, НЕпустым (т.е. содержащим просто много <li></li>) - чтобы сделать каждый из li dropTarget-ом
    setDraggedFragments([...emptyPuzzleData]);
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