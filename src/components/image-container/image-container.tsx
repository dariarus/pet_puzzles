import React, {useEffect, useState} from 'react';

import imageContainerStyles from './image-container.module.css';

import Foxie from '../../images/fox.jpg';
import {TFragmentsArray} from '../../types';

export const ImageContainer = () => {
  const [imageFragments, setImageFragments] = useState<TFragmentsArray>();

  useEffect(() => {
    const emptyPuzzleData = [...Array(24)].map(() => ({}));
  }, [])

  return (
    <div className={imageContainerStyles.container}>
      <ul className={imageContainerStyles['puzzleImage_fox']}>
        <li className={imageContainerStyles.puzzleItem}>
          {/*<img src={Foxie} className={imageContainerStyle.listImage}/>*/}
        </li>
      </ul>
    </div>
  )
}