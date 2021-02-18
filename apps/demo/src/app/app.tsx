import React from 'react';

import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import { UseAuth } from '@firebase-ui/useAuth'

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to demo!</h1>
      </header>
      <main>
      <UseAuth />
      </main>
    </div>
  );
}

export default App;
