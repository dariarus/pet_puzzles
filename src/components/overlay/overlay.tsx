import React, {FunctionComponent} from 'react';

import overlayStyles from './overlay.module.css';

export const Overlay: FunctionComponent<{ onClose: () => void }> = (props) => {
  return (
    <div className={overlayStyles.overlay} onClick={() => {
      props.onClose();
    }}>
    </div>
  )
}