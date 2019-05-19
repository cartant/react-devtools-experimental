import React, { Suspense } from 'react';
import { Repos, ReposFallback } from './Repos';

const { Polly, Timing } = require('@pollyjs/core');
const Adapter = require('@pollyjs/adapter-fetch');
const Persister = require('@pollyjs/persister-rest');
Polly.register(Adapter);
Polly.register(Persister);

const polly = new Polly('talk');
polly.configure({
  adapters: ['fetch'],
  logging: false,
  matchRequestsBy: {
    order: false
  },
  persister: 'rest',
  persisterOptions: {
    rest: {
      host: 'http://localhost:3001'
    }
  },
  recordIfMissing: false,
  timing: (...args) => Timing.fixed(
    1e3 + 1e3 * Math.random()
  )(...args)
});

const App = () => (
  <div className="App">
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
export default App;
