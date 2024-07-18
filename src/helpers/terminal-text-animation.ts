import {gsap} from "gsap";
import {TextSplitter} from "@/helpers/text-splitter.ts";
import {getStyle} from "@/helpers/utils";

const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
const colors = ['#020887', '#a61c3c', '#c84c09', '#f8d537', '#892fd0']

const getRandom = (len: number): number => {
    return Math.floor(Math.random() * len)
}

export class TextAnimator {
    private textEl: HTMLElement
    private splitter: TextSplitter;
    private originalsChars: string[];
    private animationInProgress: boolean

    constructor(textEl) {
        if (!textEl || !(textEl instanceof HTMLElement)) {
            throw new Error('Invalid text element provided.');
        }

        this.animationInProgress = false
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
        if (this.animationInProgress) return

        this.animationInProgress = true
        this.reset()
        gsap.set(this.textEl, {width: this.textEl.offsetWidth})
        const chars = this.splitter.chars
        const len = chars.length - 1

        chars.forEach((char, i) => {
            const initialHTML = char.innerHTML
            const initialColor = getStyle(char, 'color')
            let repeatCount = 0

            gsap.fromTo(char, {
                opacity: 0
            }, {
                duration: 0.03,
                repeat: 3,
                repeatRefresh: true,
                repeatDelay: 0.04,
                delay: (i + 1) * 0.07,
                innerHTML: () => {
                    const randomChar = lettersAndSymbols[getRandom(lettersAndSymbols.length)]
                    const randomColor = colors[getRandom(colors.length)]
                    gsap.set(char, {color: randomColor})
                    return randomChar
                },
                opacity: 1,
                onStart: () => {
                    // Set --opa to 1 at the start of the animation
                    gsap.set(char, {'--opa': 1});
                },
                onRepeat: () => {
                    repeatCount++;
                    if (repeatCount === 1) {
                        // Set --opa to 0 after the first repeat
                        gsap.set(char, {'--opa': 0});
                    }
                },
                onComplete: () => {
                    gsap.set(char, {
                        innerHTML: initialHTML,
                        color: initialColor,
                        delay: 0.03
                    })
                    if (i === len) {
                        // animation is completed
                        gsap.set(this.textEl, {width: '', delay: 1})
                        this.animationInProgress = false
                    }
                },
            })
        })
    }
}
