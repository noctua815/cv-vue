import { gsap } from 'gsap'

const charsAnimation = (title) => {
  const lettersAndSymbols = [
    'a',
    'b',
    'c',
    'd',
    'e',
    // 'f',
    // 'g',
    // 'h',
    // 'i',
    // 'j',
    // 'k',
    // 'l',
    // 'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    '?',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '-',
    '_',
    '+',
    '=',
    ';',
    ':',
    '<',
    '>',
    ','
  ]
  const chars = title.querySelectorAll('.char')

  chars.forEach((char, position) => {
    const innerHTML = char.innerHTML

    gsap.to(char, {
      duration: 0.02,
      innerHTML: lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
      repeat: 1,
      repeatRefresh: true,
      opacity: 1,
      repeatDelay: 0.02,
      delay: (position + 1) * 0.1,
      onComplete: (self) => {
        gsap.set(char, {
          innerHTML,
          delay: 0.01
        })
      }
    })
  })
}

const getStyle = (el: HTMLElement, parameter: string) => {
  if (!el || !parameter) return

  const compStyles = window.getComputedStyle(el)

  return compStyles[parameter] || ''
}

const wrapElement = (elements: HTMLElement[] | null, wrapType: string, wrapClass: string) => {
  if (!elements || !elements.length) return []

  elements.forEach((el) => {
    const wrapEl = document.createElement(wrapType)
    wrapEl.classList.add(wrapClass)

    const parent = el.parentNode
    parent.insertBefore(wrapEl, el)

    wrapEl.appendChild(el)
  })
}
export { charsAnimation, getStyle, wrapElement }
