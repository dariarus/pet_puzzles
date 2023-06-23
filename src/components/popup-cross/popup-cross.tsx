import React, {FunctionComponent} from 'react';

import popupCrossStyles from './popup-cross.module.css';

export const PopupCross: FunctionComponent<{ onClose: () => void }> = (props) => {
  return (
    <button className={popupCrossStyles.icon} onClick={() => {
      props.onClose()
    }}>
    </button>

  )
}