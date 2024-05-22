import {gsap} from "gsap";

export const charsAnimation = (title) => {
  const lettersAndSymbols = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    // 'k',
    // 'l',
    // 'm',
    // 'n',
    // 'o',
    // 'p',
    // 'q',
    // 'r',
    // 's',
    // 't',
    // 'u',
    // 'v',
    // 'w',
    // 'x',
    // 'y',
    // 'z',
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
      duration: 0.015,
      innerHTML: lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
      repeat: 1,
      repeatRefresh: true,
      opacity: 1,
      repeatDelay: 0.02,
      delay: (position + 1) * 0.09,
      onComplete: (self) => {
        gsap.set(char, {
          innerHTML,
          delay: 0.01
        })
      }
    })
  })
}