import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './Reveal.css'

type Props = {
  children: ReactNode
  /** Stagger in ms, for revealing a list one item after another. */
  delay?: number
  className?: string
}

/**
 * Fades + lifts its children into view once they enter the viewport.
 * Respects prefers-reduced-motion via CSS.
 */
export function Reveal({ children, delay = 0, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  // Without IntersectionObserver support, show the content immediately
  // rather than leaving it invisible forever.
  const [shown, setShown] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'is-shown' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
