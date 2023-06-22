import React from 'react';

import headerStyles from './header.module.css';

export const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.heading}>Puzzles Game</h1>
    </header>
  )
}