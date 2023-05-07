import React from 'react';

import finishedImageFragmentsListStyles from './finishedImageFragmentsList.module.css';

export const FinishedImageFragmentsList = () => {
  return (
    <li className={finishedImageFragmentsListStyles.puzzleItem}>
      <img src={``} alt="Фрагмент картинки-пазла" draggable/>
    </li>
  )
}