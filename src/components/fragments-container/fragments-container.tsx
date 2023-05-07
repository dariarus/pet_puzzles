import React, {useEffect, useState} from 'react';

import {TFragmentsArray} from '../../types';

import {MixedFragmentsListItem} from '../mixed-fragments-list-item/mixed-fragments-list-item';

import fragmentContainerStyles from './fragments-container.module.css';

export const FragmentsContainer = () => {
  const [sourceFragments, setSourceFragments] = useState<TFragmentsArray>([]);

  useEffect(() => {
    const fragments = [...Array(24)]
      .map((fragment, index) => ({
        fragmentSrc: `image_part_${index}.jpg`,
        id: index
      }))
      .sort(() => Math.random() - 0.5);

    setSourceFragments(fragments);
  }, [])

  return (
    <ul className={fragmentContainerStyles.fragmentsContainer}>
      {
        sourceFragments.map((fragment, index) => (
          <MixedFragmentsListItem key={fragment.id} puzzleFragment={fragment}/>
        ))
      }
    </ul>
  )
}