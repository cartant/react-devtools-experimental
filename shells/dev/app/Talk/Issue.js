import React from 'react';
import styles from './App.css';

export const Issue = ({ issue }) => (
  <p className={styles.Issue}>{issue.title}</p>
);
