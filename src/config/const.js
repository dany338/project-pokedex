export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const POKE_URL_API = 'https://pokeapi.co/api/v2';
