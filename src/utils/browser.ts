export const isIE = () => {
  console.log('dawdwawda')
  return (
    window.navigator.userAgent.indexOf('MSIE ') > -1 ||
    window.navigator.userAgent.indexOf('Trident/') > -1
  )
}
