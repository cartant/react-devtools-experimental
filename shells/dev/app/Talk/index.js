import { App } from './App';

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

export default App;
