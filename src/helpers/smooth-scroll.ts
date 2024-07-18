import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const initSmoothScrolling = () => {
  // Instantiate the Lenis object with specified properties
  const lenis = new Lenis({
    lerp: 0.15, // Lower values create a smoother scroll effect
    smoothWheel: true // Enables smooth scrolling for mouse wheel events
  })

  // Update ScrollTrigger each time the user scrolls
  lenis.on('scroll', () => ScrollTrigger.update())

  // Define a function to run at each animation frame
  const scrollFn = (time: number) => {
    lenis.raf(time) // Run Lenis' requestAnimationFrame method
    requestAnimationFrame(scrollFn) // Recursively call scrollFn on each frame
  }

  // Start the animation frame loop
  requestAnimationFrame(scrollFn)
}
