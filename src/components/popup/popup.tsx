import React, {FunctionComponent, useCallback, useEffect} from 'react';
import ReactDOM from 'react-dom';

import popupStyles from './popup.module.css';

import {Overlay} from '../overlay/overlay';
import {PopupCross} from '../popup-cross/popup-cross';

export const Popup: FunctionComponent<{ onClosePopup: () => void }> = (props) => {
  const popupRoot = document.getElementById('popup');

  const handleEscClose = useCallback((evt: KeyboardEvent): void => {
    if (evt.key === 'Escape') {
      props.onClosePopup();
    }
  }, [props])

  useEffect(() => {
    // Устанавливаем слушатель события при монтировании
    document.addEventListener("keydown", handleEscClose)
    // Сбрасываем слушатель события при удалении компонента из DOM
    return () => {
      document.removeEventListener("keydown", handleEscClose)
    }
  }, [handleEscClose]) // обязательно прописать зависимости, чтобы избежать повторного рендеринга

  if (popupRoot !== null) {
    return ReactDOM.createPortal(
      (
        <>
          <Overlay onClose={props.onClosePopup}/>
          <div className={popupStyles.popup}>
            <PopupCross onClose={props.onClosePopup}/>
            <h2 className={popupStyles.popupHeading}>Игра "Пазлы"</h2>
            <div className={popupStyles.popupTextWrap}>
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
          </div>
        </>
      ), popupRoot
    )
  } else return null

}