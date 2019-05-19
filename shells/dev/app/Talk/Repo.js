import React, { Suspense } from 'react';
import { Issues, IssuesFallback} from './Issues';
import styles from './App.css';

export const Repo = ({ repo }) => {
  return (
    <div className={styles.Repo}>
      <p className={styles.RepoName}>{repo.name}</p>
      <Suspense fallback={<IssuesFallback />}>
        <Issues repo={repo} />
      </Suspense>
    </div>
  );
};
