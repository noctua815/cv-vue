import { gsap } from 'gsap'

const charsAnimation = (textEl: HTMLElement | null) => {
  if (!textEl) return

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
  const chars = textEl.querySelectorAll('.char')

  chars.forEach((char: Element, position: number) => {
    const innerHTML = char.innerHTML

    gsap.to(char, {
      duration: 0.02,
      innerHTML: lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
      repeat: 1,
      repeatRefresh: true,
      opacity: 1,
      repeatDelay: 0.02,
      delay: (position + 1) * 0.1,
      onComplete: () => {
        gsap.set(char, {
          innerHTML,
          delay: 0.01
        })
      }
    })
  })
}

const getStyle = (el: HTMLElement, parameter: string): string => {
  if (!el || !parameter) return ''

  const compStyles: CSSStyleDeclaration = window.getComputedStyle(el)

  return compStyles.getPropertyValue(parameter) || ''
}

const wrapElement = (elements: HTMLElement[] | null, wrapType: string, wrapClass: string) => {
  if (!elements || !elements.length) return []

  elements.forEach((el) => {
    const wrapEl = document.createElement(wrapType)
    wrapEl.classList.add(wrapClass)

    const parent = el.parentNode
    if (parent) {
      parent.insertBefore(wrapEl, el)
      wrapEl.appendChild(el)
    }
  })
}
export { charsAnimation, getStyle, wrapElement }
