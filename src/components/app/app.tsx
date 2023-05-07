import React from 'react';
import {Header} from '../header/header';
import {PuzzleContainer} from '../puzzle-container/puzzle-container';

import mainStyles from './app.module.css';

export const App = () => {
  return (
    <>
      <Header/>
      <main className={mainStyles.container}>
        <PuzzleContainer/>
      </main>
    </>
  )
}