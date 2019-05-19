import React, { useState } from 'react';
import { get } from './cache';
import { Issue } from './Issue';

export const Issues = ({ repo }) => {
  const [expanded, setExpanded] = useState(false);
  const issues = get(
    `https://api.github.com/repos/cartant/${repo.name}/issues?state=open`
  );
  return (
    <div className="Issues">
      <p>
        <span className="Issues-button" onClick={() => setExpanded(!expanded)}>
          {
            issues.length
              ? expanded ? '\u2796' : '\u2795'
              : '\u2705'
          }
        </span>
        <span className="Issues-count">
          {
            issues.length === 1
              ? `1 open issue`
              : `${issues.length} open issues`
          }
        </span>
      </p>
      {
        expanded
          ? issues.map(issue => <Issue key={issue.id} issue={issue} />)
          : null
      }
    </div>
  );
};

export const IssuesFallback = () => (
  <p className="IssuesFallback">Loading issues...</p>
);
