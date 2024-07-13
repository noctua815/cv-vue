import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {getStyle} from "@/helpers/utils";

export const addStickySection = (section: HTMLElement, pin: boolean) => {
    if (!section) return

    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        endTrigger: '#block-experience',
        end: 'bottom bottom',
        pinSpacing: false,
        // markers: true,
        pin,
        onEnter: () => {
            const prevStyle = getStyle(section, 'border-radius')
            section.dataset.borderRadius = prevStyle
            gsap.to(section, {
                borderRadius: 0
            })
        },
        onLeaveBack: () => {
            const prevStyle = section.dataset.borderRadius
            if (prevStyle) {
                gsap.to(section, {
                    borderRadius: prevStyle
                })
            }
        }
    })
}
