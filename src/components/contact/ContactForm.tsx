import { useId, useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import './ContactForm.css'

/* -------------------------------------------------------------
   TYPES
   ------------------------------------------------------------- */

type FieldName =
  | 'navn'
  | 'email'
  | 'telefon'
  | 'emne'
  | 'besked'
  | 'samtykke'

type FormValues = {
  navn: string
  email: string
  telefon: string
  emne: string
  besked: string
  samtykke: boolean
}

type FormErrors = Partial<Record<FieldName, string>>

type Status = 'idle' | 'error' | 'success'

/** Focusable elements we keep a handle on, so we can move focus to the first error. */
type FocusableField =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement

const EMPTY: FormValues = {
  navn: '',
  email: '',
  telefon: '',
  emne: '',
  besked: '',
  samtykke: false,
}

/** Order matters: it decides which field gets focus when several fail. */
const FIELD_ORDER: FieldName[] = [
  'navn',
  'email',
  'telefon',
  'emne',
  'besked',
  'samtykke',
]

const SUBJECTS = [
  'Visitation og pladsanvisning',
  'Samarbejde med kommune',
  'Spørgsmål som pårørende',
  'Job og ansøgning',
  'Presse og henvendelser',
  'Andet',
] as const

/* -------------------------------------------------------------
   VALIDATION — plain functions, no dependencies
   ------------------------------------------------------------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^\+?[\d\s()/.-]{6,20}$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.navn.trim().length < 2) {
    errors.navn = 'Skriv venligst dit navn (mindst 2 tegn).'
  }

  if (values.email.trim() === '') {
    errors.email = 'Skriv venligst din e-mailadresse.'
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'E-mailadressen ser ikke rigtig ud. Fx navn@eksempel.dk'
  }

  // Telefon er valgfri — men hvis den er udfyldt, skal den give mening.
  if (values.telefon.trim() !== '' && !PHONE_RE.test(values.telefon.trim())) {
    errors.telefon = 'Telefonnummeret ser ikke rigtig ud. Fx +45 12 34 56 78'
  }

  if (values.emne === '') {
    errors.emne = 'Vælg venligst et emne, så din henvendelse når rette person.'
  }

  if (values.besked.trim().length < 10) {
    errors.besked = 'Skriv venligst en besked på mindst 10 tegn.'
  }

  if (!values.samtykke) {
    errors.samtykke =
      'Du skal give samtykke, før vi må behandle din henvendelse.'
  }

  return errors
}

/* -------------------------------------------------------------
   COMPONENT
   ------------------------------------------------------------- */

export function ContactForm() {
  const uid = useId()
  const [values, setValues] = useState<FormValues>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>(
    {},
  )
  const [status, setStatus] = useState<Status>('idle')

  const fieldRefs = useRef<Partial<Record<FieldName, FocusableField | null>>>(
    {},
  )
  const successRef = useRef<HTMLDivElement>(null)

  const fieldId = (name: FieldName) => `${uid}-${name}`
  const errorId = (name: FieldName) => `${uid}-${name}-error`
  const hintId = (name: FieldName) => `${uid}-${name}-hint`

  /** Builds the aria-describedby value from whichever helpers exist. */
  const describedBy = (name: FieldName, hasHint: boolean) =>
    [hasHint ? hintId(name) : null, errors[name] ? errorId(name) : null]
      .filter(Boolean)
      .join(' ') || undefined

  const setValue = (name: FieldName, value: string | boolean) => {
    const next = { ...values, [name]: value }
    setValues(next)
    // Re-validate live only once the user has left the field (or failed submit),
    // so we never shout at someone mid-typing.
    if (touched[name] || status === 'error') {
      setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }))
    }
  }

  const handleText = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setValue(e.target.name as FieldName, e.target.value)

  const handleBlur = (name: FieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const found = validate(values)
    setErrors(found)
    setTouched({
      navn: true,
      email: true,
      telefon: true,
      emne: true,
      besked: true,
      samtykke: true,
    })

    const firstInvalid = FIELD_ORDER.find((name) => found[name])
    if (firstInvalid) {
      setStatus('error')
      fieldRefs.current[firstInvalid]?.focus()
      return
    }

    // TODO: wire to backend endpoint — POST `values` to the form handler
    // (fx /api/kontakt eller en formulartjeneste) og håndter fejlsvar her.
    setStatus('success')
    setValues(EMPTY)
    setTouched({})
    window.setTimeout(() => successRef.current?.focus(), 0)
  }

  const errorCount = FIELD_ORDER.filter((name) => errors[name]).length

  /* ---------- success state ---------- */

  if (status === 'success') {
    return (
      <div
        className="kontakt-form__success"
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
      >
        <span className="kontakt-form__success-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12.5 10 17.5 19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3>Tak for din henvendelse</h3>
        <p>
          Vi har modtaget din besked og vender tilbage hurtigst muligt inden
          for åbningstiden. Haster det, er du velkommen til at ringe til os.
        </p>
        <button
          type="button"
          className="kontakt-form__again"
          onClick={() => setStatus('idle')}
        >
          Skriv en ny besked
        </button>
      </div>
    )
  }

  /* ---------- form ---------- */

  return (
    <form className="kontakt-form" onSubmit={handleSubmit} noValidate>
      <p className="kontakt-form__required-note" id={`${uid}-required`}>
        Felter markeret med <span aria-hidden="true">*</span>
        <span className="visually-hidden">en stjerne</span> skal udfyldes.
      </p>

      <div className="kontakt-form__grid">
        {/* --- navn --- */}
        <div className="kontakt-form__field">
          <label className="kontakt-form__label" htmlFor={fieldId('navn')}>
            Navn{' '}
            <span className="kontakt-form__req" aria-hidden="true">
              *
            </span>
          </label>
          <input
            className="kontakt-form__input"
            id={fieldId('navn')}
            name="navn"
            type="text"
            autoComplete="name"
            required
            value={values.navn}
            onChange={handleText}
            onBlur={() => handleBlur('navn')}
            aria-invalid={errors.navn ? true : undefined}
            aria-describedby={describedBy('navn', false)}
            ref={(el) => {
              fieldRefs.current.navn = el
            }}
          />
          {errors.navn && (
            <p className="kontakt-form__error" id={errorId('navn')}>
              {errors.navn}
            </p>
          )}
        </div>

        {/* --- e-mail --- */}
        <div className="kontakt-form__field">
          <label className="kontakt-form__label" htmlFor={fieldId('email')}>
            E-mail{' '}
            <span className="kontakt-form__req" aria-hidden="true">
              *
            </span>
          </label>
          <input
            className="kontakt-form__input"
            id={fieldId('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleText}
            onBlur={() => handleBlur('email')}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy('email', false)}
            ref={(el) => {
              fieldRefs.current.email = el
            }}
          />
          {errors.email && (
            <p className="kontakt-form__error" id={errorId('email')}>
              {errors.email}
            </p>
          )}
        </div>

        {/* --- telefon --- */}
        <div className="kontakt-form__field">
          <label className="kontakt-form__label" htmlFor={fieldId('telefon')}>
            Telefon{' '}
            <span className="kontakt-form__optional">(valgfri)</span>
          </label>
          <input
            className="kontakt-form__input"
            id={fieldId('telefon')}
            name="telefon"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.telefon}
            onChange={handleText}
            onBlur={() => handleBlur('telefon')}
            aria-invalid={errors.telefon ? true : undefined}
            aria-describedby={describedBy('telefon', true)}
            ref={(el) => {
              fieldRefs.current.telefon = el
            }}
          />
          <p className="kontakt-form__hint" id={hintId('telefon')}>
            Udfyld, hvis du hellere vil ringes op.
          </p>
          {errors.telefon && (
            <p className="kontakt-form__error" id={errorId('telefon')}>
              {errors.telefon}
            </p>
          )}
        </div>

        {/* --- emne --- */}
        <div className="kontakt-form__field">
          <label className="kontakt-form__label" htmlFor={fieldId('emne')}>
            Emne{' '}
            <span className="kontakt-form__req" aria-hidden="true">
              *
            </span>
          </label>
          <div className="kontakt-form__select-wrap">
            <select
              className="kontakt-form__input kontakt-form__select"
              id={fieldId('emne')}
              name="emne"
              required
              value={values.emne}
              onChange={handleText}
              onBlur={() => handleBlur('emne')}
              aria-invalid={errors.emne ? true : undefined}
              aria-describedby={describedBy('emne', false)}
              ref={(el) => {
                fieldRefs.current.emne = el
              }}
            >
              <option value="">Vælg et emne …</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <svg
              className="kontakt-form__chevron"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m4 6 4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {errors.emne && (
            <p className="kontakt-form__error" id={errorId('emne')}>
              {errors.emne}
            </p>
          )}
        </div>

        {/* --- besked --- */}
        <div className="kontakt-form__field kontakt-form__field--full">
          <label className="kontakt-form__label" htmlFor={fieldId('besked')}>
            Besked{' '}
            <span className="kontakt-form__req" aria-hidden="true">
              *
            </span>
          </label>
          <textarea
            className="kontakt-form__input kontakt-form__textarea"
            id={fieldId('besked')}
            name="besked"
            rows={6}
            required
            value={values.besked}
            onChange={handleText}
            onBlur={() => handleBlur('besked')}
            aria-invalid={errors.besked ? true : undefined}
            aria-describedby={describedBy('besked', true)}
            ref={(el) => {
              fieldRefs.current.besked = el
            }}
          />
          <p className="kontakt-form__hint" id={hintId('besked')}>
            Undlad venligst personfølsomme oplysninger som CPR-numre og
            helbredsoplysninger — brug i stedet telefon eller sikker post.
          </p>
          {errors.besked && (
            <p className="kontakt-form__error" id={errorId('besked')}>
              {errors.besked}
            </p>
          )}
        </div>

        {/* --- samtykke --- */}
        <div className="kontakt-form__field kontakt-form__field--full">
          <div className="kontakt-form__consent">
            <input
              className="kontakt-form__checkbox"
              id={fieldId('samtykke')}
              name="samtykke"
              type="checkbox"
              required
              checked={values.samtykke}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue('samtykke', e.target.checked)
              }
              onBlur={() => handleBlur('samtykke')}
              aria-invalid={errors.samtykke ? true : undefined}
              aria-describedby={describedBy('samtykke', false)}
              ref={(el) => {
                fieldRefs.current.samtykke = el
              }}
            />
            <label
              className="kontakt-form__consent-label"
              htmlFor={fieldId('samtykke')}
            >
              Jeg giver samtykke til, at mine oplysninger må behandles med
              henblik på at besvare min henvendelse.{' '}
              <span className="kontakt-form__req" aria-hidden="true">
                *
              </span>
            </label>
          </div>
          {errors.samtykke && (
            <p className="kontakt-form__error" id={errorId('samtykke')}>
              {errors.samtykke}
            </p>
          )}
        </div>
      </div>

      {/* --- live status for assistive technology --- */}
      <p className="kontakt-form__status" role="status" aria-live="polite">
        {status === 'error' && errorCount > 0
          ? errorCount === 1
            ? 'Der er 1 felt, der skal rettes, før beskeden kan sendes.'
            : `Der er ${errorCount} felter, der skal rettes, før beskeden kan sendes.`
          : ''}
      </p>

      <button type="submit" className="kontakt-form__submit">
        <span>Send besked</span>
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  )
}
