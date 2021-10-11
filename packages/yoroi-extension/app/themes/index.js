// @flow

export const THEMES = Object.freeze({
  YOROI_CLASSIC: 'YoroiClassic',
  YOROI_MODERN: 'YoroiModern',
  YOROI_REVAMP: 'YoroiRevamp',
});

export type Theme = $Values<typeof THEMES>;


// Refer: https://github.com/Emurgo/yoroi-frontend/pull/497
export function changeToplevelTheme(currentTheme: Theme) {
  if (document && document.body instanceof HTMLBodyElement) {
    // Flow give error when directly assesing document.body.classList.[remove()]|[add()]
    const bodyClassList = document.body.classList;
    // we can't simply set the className because there can be other classes present
    // therefore we only remove & add those related to the theme
    const allThemes: Array<string> = Object.keys(THEMES).map(key => THEMES[key]);
    bodyClassList.remove(...allThemes);
    bodyClassList.remove('YoroiShelley');
    bodyClassList.add(currentTheme);

    // we used this theme for the Shelley version of the Yoroi extension
    // however, going forward, Yoroi will be a mono-project containing all sub-networks
    if (false) { // eslint-disable-line no-constant-condition
      bodyClassList.add('YoroiShelley');
    }
  }
}
