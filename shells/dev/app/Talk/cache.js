const cache = {};

export const get = (uri) => {
  if (cache[uri] instanceof Promise) {
    throw cache[uri];
  }
  if (cache[uri]) {
    return cache[uri];
  }
  const promise = fetch(uri)
    .then(response => response.json())
    .then(text => cache[uri] = text);
  cache[uri] = promise;
  throw promise;
};

export const getMany = (uris) => {
  const key = uris.join(';');
  if (cache[key] instanceof Promise) {
    throw cache[key];
  }
  if (cache[key]) {
    return cache[key];
  }
  const promise = Promise.all(uris.map(
    uri => fetch(uri).then(
      response => response.json()
    )
  )).then(values => cache[key] = values);
  cache[key] = promise;
  throw promise;
};
