import 'styled-components'

interface IThemeColors {
  primaryColor: string
  compColor: string
  textColor: string
  backgroundColor: string

  hoverPrimaryColor: string
  activePrimaryColor: string
  hoverCompColor: string
  activeCompColor: string

  errorColor: string
  successColor: string

  blackColor: string
  whiteColor: string
  greyColor: string
}
interface IThemeSizes {
  stepSize: number
  borderRadius: number

  h1FontSize: number
  h1LineHeight: number

  h2FontSize: number
  h2LineHeight: number

  h3FontSize: number
  h3LineHeight: number

  tnFontSize: number
  tnLineHeight: number

  tsFontSize: number
  tsLineHeight: number

  tsubFontSize: number
  tsubLineHeight: number

  regularFontWeight: number
  boldFontWeight: number
}
interface IThemeEffects {
  boxShadow: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'light' | 'dark'
    colors: IThemeColors
    sizes: IThemeSizes
    effects: IThemeEffects
  }
}
