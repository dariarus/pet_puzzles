import React, {useState} from 'react';
import {Header} from '../header/header';
import {PuzzleContainer} from '../puzzle-container/puzzle-container';

import mainStyles from './app.module.css';
import {Button} from '../button/button';
import {Popup} from '../popup/popup';

export const App = () => {
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);

  const onOpenPopupHandler = () => {
    setPopupIsOpen(true);
    // запрещаем прокрутку страницы во время открытия попапа
    document.body.classList.add(mainStyles.bodyOverlay);
  }

 const onClosePopupHandler = () => {
   setPopupIsOpen(false);
    // разрешаем прокрутку страницы при закрытии попапа
   document.body.classList.remove(mainStyles.bodyOverlay);
  }

  return (
    <>
      <Header/>
      <main className={mainStyles.container}>
        <section className={mainStyles.buttonsWrap}>
          <Button buttonName="Как играть" onClickHandler={onOpenPopupHandler}/>
          <Button buttonName="Сбросить" onClickHandler={()=>console.log('hi')}/>
          <Button buttonName="Сменить картинку" onClickHandler={()=>console.log('hi')}/>
        </section>
        <PuzzleContainer/>
      </main>
      {
        popupIsOpen &&
        <Popup onClosePopup={onClosePopupHandler}/>
      }
    </>
  )
}