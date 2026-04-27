// store.js

const state = {
  city: "Buenos Aires",
  data: null,
  loading: false,
  error: null,
};

const listeners = [];

export function getState() {
  return { ...state };
}

export function setState(partialState) {
  Object.assign(state, partialState);
  listeners.forEach((listener) => listener(getState()));
}

export function subscribe(listener) {
  listeners.push(listener);
}