import { DefaultTheme } from 'styled-components'

export const LightTheme: DefaultTheme = {
  colors: {
    primaryColor: '#18a2d9',
    compColor: '#f2d43d',
    textColor: '#011c40',
    backgroundColor: '#FFFFFF',

    hoverPrimaryColor: '#157ebf',
    activePrimaryColor: '#136091',
    hoverCompColor: '#d48d4a',
    activeCompColor: '#9c763c',

    errorColor: '#f25252',
    successColor: '#4af57a',

    blackColor: '#000000',
    whiteColor: '#ffffff',
    greyColor: '#bababa',
  },
  sizes: {
    stepSize: 8,
    borderRadius: 4,

    h1FontSize: 56,
    h1LineHeight: 61.6,

    h2FontSize: 40,
    h2LineHeight: 44,

    h3FontSize: 24,
    h3LineHeight: 26.4,

    tnFontSize: 16,
    tnLineHeight: 22.4,

    tsFontSize: 14,
    tsLineHeight: 19.6,

    tsubFontSize: 10,
    tsubLineHeight: 9,

    regularFontWeight: 400,
    boldFontWeight: 700,
  },
  effects: {
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.08)',
  },
}
