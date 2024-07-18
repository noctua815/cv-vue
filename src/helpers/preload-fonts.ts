export const preloadFonts = () => {
  return new Promise((resolve) => {
    // @ts-ignore
    WebFont.load({
      google: {
        families: [
          'Nunito:ital,wght@0,200..1000;1,200..1000',
          'Space+Mono:ital,wght@0,400;0,700;1,400;1,700'
        ]
      },
      active: resolve
    })
  })
}
