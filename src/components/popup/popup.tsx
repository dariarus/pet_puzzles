import React from 'react';
import ReactDOM from 'react-dom';

import popupStyles from './popup.module.css';

import {Overlay} from '../overlay/overlay';

export const Popup = () => {
  const popupRoot = document.getElementById('popup');

  if (popupRoot !== null) {
    return ReactDOM.createPortal(
      (
        <>
          <Overlay/>
          <div className={popupStyles.popup}>
            <h2 className={popupStyles.popupHeading}>Игра "Пазлы"</h2>
            <p className={popupStyles.popupText}>Цель игры - собрать картинку из ее перемешанных фрагментов.
              Чтобы это сделать, перетащите фрагменты из левого блока на их места в блоке справа.</p>
            <p className={popupStyles.popupText}>Если вы неправильно установили фрагмент, его можно перетащить снова:<br/>
            а) внутри блока с готовой картинкой;<br/>
            б) обратно в блок с неиспользованными фрагментами.</p>
            <p className={popupStyles.popupText}>С помощью кнопки "Сбросить" можно начать с начала:
              уже перенесенные в блок с картинкой фрагменты снова окажутся в исходном блоке.</p>
            <p className={popupStyles.popupText}>Если не хотите собирать предложенную картинку, ее можно поменять,
              нажав кнопку "Сменить картинку"</p>
          </div>
        </>
      ), popupRoot
    )
  } else return null

}