import React from 'react';
import { hot } from 'react-hot-loader/root';

import styles from './App.css';

const App = () => 
  <h1 className={styles.base}>
  Hello World! - はじめての React アプリ
  </h1>;

export default hot(App);
