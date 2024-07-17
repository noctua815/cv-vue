import {gsap} from "gsap";
import {TextSplitter} from "@/helpers/text-splitter.ts";

const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

export class TextAnimator {
  private textEl: HTMLElement
  private splitter: TextSplitter;
  private originalsChars: string[];
  constructor(textEl) {
    if (!textEl || !(textEl instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    this.textEl = textEl;
    this.splitText();
  }

  splitText() {
    this.splitter = new TextSplitter(this.textEl, {
      splitTypes: 'chars'
    })
    this.originalsChars = this.splitter.chars.map(char => char.innerHTML)
  }

  reset() {
    const chars = this.splitter.chars

    chars.forEach((char, i) => {
      gsap.killTweensOf(char)
      char.innerHTML = this.originalsChars[i]
    })
  }

  animate() {
    this.reset()
    const chars = this.splitter.chars

    chars.forEach((char, i) => {
      const initialHTML = char.innerHTML
      let repeatCount = 0

      gsap.fromTo(char, {
        opacity: 0
      }, {
        duration: 0.03,
        repeat: 3,
        repeatRefresh: true,
        repeatDelay: 0.04,
        delay: (i+1)*0.07,
        innerHTML: () => {
          return lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)]
        },
        opacity: 1,
        onStart: () => {
          // Set --opa to 1 at the start of the animation
          gsap.set(char, { '--opa': 1, width: char.offsetWidth});
        },
        onRepeat: () => {
          repeatCount++;
          if (repeatCount === 1) {
            // Set --opa to 0 after the first repeat
            gsap.set(char, { '--opa': 0 });
          }
        },
        onComplete: () => {
          gsap.set(char, {
            innerHTML: initialHTML,
            width: '',
            delay: 0.03})
        },
      })
    })
  }
}
