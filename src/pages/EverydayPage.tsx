import { NumberedCards, PageIntro, Seo, Star } from '../components/Elements'
import { everydayIntro, rhythms, supportTopics } from '../content/site'

export default function EverydayPage() {
  return <>
    <Seo title="Hverdagen" description="En hverdag med skolegang, fritid, fællesskab og ro. Læs om struktur og individuel støtte til børn og unge hos Huset Stjernestøv." />
    <PageIntro label="Hverdagen" title="Hverdagen hos os" />
    <div className="container page-body">
      <section><div className="section-heading"><h2>En hverdag,<br />der hænger sammen</h2><p className="section-heading-copy">{everydayIntro}</p></div><NumberedCards items={rhythms} /></section>
      <section className="support-section"><h2>Vores støtte har blandt andet fokus på</h2><div className="support-grid">{supportTopics.map(item => <article key={item.title}><Star /><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    </div>
  </>
}
