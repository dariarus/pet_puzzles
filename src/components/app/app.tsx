import React from 'react';
import {Header} from '../header/header';
import {PuzzleContainer} from '../puzzle-container/puzzle-container';

import mainStyles from './app.module.css';
import {Button} from '../button/button';
import {Popup} from '../popup/popup';

export const App = () => {
  return (
    <>
      <Header/>
      <main className={mainStyles.container}>
        <section className={mainStyles.buttonsWrap}>
          <Button buttonName="Как играть"/>
          <Button buttonName="Сбросить"/>
          <Button buttonName="Сменить картинку"/>
        </section>
        <PuzzleContainer/>
      </main>
      <Popup/>
    </>
  )
}