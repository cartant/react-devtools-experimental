import React, { Suspense } from 'react';
import { Issues, IssuesFallback} from './Issues';

export const Repo = ({ repo }) => {
  return (
    <div className="Repo">
      <p className="Repo-name">{repo.name}</p>
      <Suspense fallback={<IssuesFallback />}>
        <Issues repo={repo} />
      </Suspense>
    </div>
  );
};
