import React from 'react';
import { getMany } from './cache';
import { Repo } from './Repo';

export const Repos = ({ names }) => {
  const repos = getMany(names.map(
    name => `https://api.github.com/repos/cartant/${name}`)
  );
  return (
    <div className="Repos">
      {repos.map(repo => <Repo key={repo.name} repo={repo} />)}
    </div>
  );
};

export const ReposFallback = () => (
  <div className="ReposFallback">
   <p>Loading repos...</p>
  </div>
);
