import { useCallback, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { TESTIMONIALS } from '../../content/site'
import { brand } from '../../lib/brand'
import { Reveal } from '../ui/Reveal'
import './HomeTestimonials.css'

const Chevron = ({ dir }: { dir: 'prev' | 'next' }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d={dir === 'next' ? 'M6 3.5 10.5 8 6 12.5' : 'M10 3.5 5.5 8 10 12.5'}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function HomeTestimonials() {
  const total = TESTIMONIALS.length
  const [index, setIndex] = useState(0)

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total],
  )

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(-1)
    }
  }

  const current = TESTIMONIALS[index]

  return (
    <section className="section home-voices" aria-labelledby="home-voices-title">
      <div className="container home-voices__inner">
        <Reveal className="home-voices__aside">
          <p className="eyebrow">Udtalelser</p>
          <h2 id="home-voices-title">
            Dette siger vores beboere og samarbejdspartnere om os
          </h2>

          <div className="home-voices__controls">
            <p className="home-voices__count" aria-hidden="true">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <i>/</i>
              {String(total).padStart(2, '0')}
            </p>

            <div className="home-voices__buttons">
              <button
                type="button"
                className="home-voices__arrow"
                onClick={() => go(-1)}
                aria-label="Forrige udtalelse"
              >
                <Chevron dir="prev" />
              </button>
              <button
                type="button"
                className="home-voices__arrow"
                onClick={() => go(1)}
                aria-label="Næste udtalelse"
              >
                <Chevron dir="next" />
              </button>
            </div>
          </div>

          <div
            className="home-voices__dots"
            role="group"
            aria-label="Vælg udtalelse"
          >
            {TESTIMONIALS.map((item, i) => (
              <button
                key={item.author + i}
                type="button"
                className={`home-voices__dot${
                  i === index ? ' is-active' : ''
                }`}
                onClick={() => setIndex(i)}
                aria-label={`Vis udtalelse ${i + 1} af ${total}`}
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
        </Reveal>

        <Reveal className="home-voices__stage" delay={120}>
          <span className="home-voices__mark" aria-hidden="true">
            &rdquo;
          </span>

          <div
            className="home-voices__viewport"
            role="group"
            aria-roledescription="karrusel"
            aria-label="Udtalelser fra beboere og samarbejdspartnere"
            aria-live="polite"
            tabIndex={0}
            onKeyDown={onKeyDown}
          >
            <figure className="home-voices__card" key={index}>
              <blockquote className="home-voices__quote">
                <p>{brand(current.quote)}</p>
              </blockquote>
              <figcaption className="home-voices__cite">
                <cite className="home-voices__author">{current.author}</cite>
                <span className="home-voices__role">
                  {brand(current.role)}
                </span>
              </figcaption>
            </figure>
          </div>

          <p className="home-voices__hint">
            Brug piletasterne, når karrusellen er i fokus
          </p>
        </Reveal>
      </div>
    </section>
  )
}
