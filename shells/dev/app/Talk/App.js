import React, { Suspense } from 'react';
import { Repos, ReposFallback } from './Repos';
import styles from './App.css';

export const App = () => (
  <div className={styles.App}>
    <Suspense fallback={<ReposFallback />}>
      <Repos names={[
        'rxjs-etc',
        'rxjs-marbles',
        'rxjs-observe',
        'rxjs-spy',
        'rxjs-tslint-rules',
        'ts-action',
        'tslint-etc'
      ]} />
    </Suspense>
</div>
);
