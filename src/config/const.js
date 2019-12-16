export const wait = ms =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const POKE_URL_API = 'https://pokeapi.co/api/v2';

export const BASE_FONT_SIZE = 16;

export const colors = {
  white: "#fff",
  black: "#000",
  fuchsia: "#F42F63",
  ceruleanblue: "#3366CC",
};

export const themes = {
  headerTextColor: colors.black,
  headerBackgrond: colors.white,
  primaryColor: colors.fuchsia,
  secondaryColor: colors.ceruleanblue,
};

export const pxToRem = target => {
  return (target / BASE_FONT_SIZE) * 1 + "rem";
};
