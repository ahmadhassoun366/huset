import { Link } from 'react-router-dom'
import { DEPARTMENTS } from '../../content/site'
import { img } from '../../lib/images'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import './HomeDepartments.css'

export function HomeDepartments() {
  return (
    <section
      className="section section--tint home-depts"
      aria-labelledby="home-depts-title"
    >
      <div className="container">
        <Reveal className="home-depts__head">
          <div>
            <p className="eyebrow">Afdelinger</p>
            <h2 id="home-depts-title">
              Fem hjem – hver med sit eget udtryk
            </h2>
          </div>
          <p className="lead home-depts__intro">
            Vi består af børne- &amp; ungehjem samt botilbud med flere
            afdelinger i Jylland.
          </p>
        </Reveal>

        <ul className="home-depts__list">
          {DEPARTMENTS.map((dept, i) => {
            const photo = img(dept.image)
            return (
              <li className="home-depts__row" key={dept.slug}>
                <Reveal delay={i * 70}>
                  <Link className="home-depts__link" to={dept.to}>
                    <span className="home-depts__num" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="home-depts__thumb">
                      <img
                        src={photo.src}
                        alt=""
                        width={400}
                        height={300}
                        loading="lazy"
                        decoding="async"
                        aria-hidden="true"
                      />
                    </span>

                    <span className="home-depts__info">
                      <span className="home-depts__name">{dept.name}</span>
                      <span className="home-depts__approval">
                        {dept.approval}
                      </span>
                    </span>

                    <span className="home-depts__more">
                      Læs mere
                      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <Reveal className="home-depts__foot">
          <Button to="/afdelinger" variant="secondary" size="lg">
            Se alle afdelinger
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
