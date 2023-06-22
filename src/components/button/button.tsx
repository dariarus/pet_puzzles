import React, {FunctionComponent} from 'react';

import buttonStyles from './button.module.css';

export const Button: FunctionComponent<{ buttonName: string }> = (props) => {
  return (
    <button className={buttonStyles.button}>
      {props.buttonName}
    </button>
  )
}