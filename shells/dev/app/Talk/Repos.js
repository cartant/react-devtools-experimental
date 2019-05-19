import React from 'react';
import { getMany } from './cache';
import { Repo } from './Repo';
import styles from './App.css';

export const Repos = ({ names }) => {
  const repos = getMany(names.map(
    name => `https://api.github.com/repos/cartant/${name}`)
  );
  return (
    <div className={styles.Repos}>
      {repos.map(repo => <Repo key={repo.name} repo={repo} />)}
    </div>
  );
};

export const ReposFallback = () => (
  <div className={styles.ReposFallback}>
   <p>Loading repos...</p>
  </div>
);
