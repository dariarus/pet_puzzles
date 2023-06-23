import React, {FunctionComponent} from 'react';

import buttonStyles from './button.module.css';

export const Button: FunctionComponent<{
  buttonName: string,
  onClickHandler: () => void
}> = (props) => {
  return (
    <button className={buttonStyles.button}
            onClick={() => {
              props.onClickHandler();
            }}
    >
      {props.buttonName}
    </button>
  )
}