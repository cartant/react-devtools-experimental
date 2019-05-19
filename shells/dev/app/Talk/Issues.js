import React, { useState } from 'react';
import { get } from './cache';
import { Issue } from './Issue';
import styles from './App.css';

export const Issues = ({ repo }) => {
  const [expanded, setExpanded] = useState(false);
  const issues = get(
    `https://api.github.com/repos/cartant/${repo.name}/issues?state=open`
  );
  return (
    <div className={styles.Issues}>
      <p>
        <span className={styles.IssuesButton} onClick={() => setExpanded(!expanded)}>
          {
            issues.length
              ? expanded ? '\u{2796}' : '\u{2795}'
              : '\u{1F389}'
          }
        </span>
        <span className={styles.IssuesCount}>
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
  <p className={styles.IssuesFallback}>Loading issues...</p>
);
