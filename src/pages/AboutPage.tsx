import { NumberedCards, PageIntro, Seo } from '../components/Elements'
import { team, values } from '../content/site'

export default function AboutPage() {
  const board = [team[2], team[4], team[3]]
  const employees = team.filter(member => member.kind === 'employee')
  const renderTeamCard = (member: typeof team[number]) => <article className={`team-card ${member.kind === 'board' ? 'team-card-board' : ''}`} key={member.image}>
    <img src={`/images/${member.image}`} alt={`Portræt af ${member.name}`} loading="lazy" width="480" height="600" />
    <h3>{member.name}</h3><p>{member.role}</p>{member.education ? <p className="team-education">{member.education}</p> : null}
  </article>
  return <>
    <Seo title="Om os" description="Lær Huset Stjernestøv at kende. Et mindre børne- og ungehjem i Forlev med fem pladser, stabile relationer og tid til det enkelte barn." />
    <PageIntro label="Om os" title="Om Huset Stjernestøv" />
    <div className="container page-body">
      <section className="reading-section"><h2>Et mindre tilbud med tid til det enkelte barn</h2><div className="prose">
        <p>Huset Stjernestøv er et socialpædagogisk børne- og ungehjem i Forlev – i rolige, landlige omgivelser uden for Skanderborg. Vi har plads til fem børn og unge. Det giver os mulighed for at være tæt på det enkelte barn og skabe en hverdag med tid til relationer, nærvær og individuel støtte.</p>
        <p>Hos os skal børnene møde voksne, der er tilgængelige, tydelige og oprigtigt interesserede i dem. Vi lægger vægt på trygge og stabile rammer og på at skabe et sted, der føles som et hjem.</p>
      </div></section>
      <NumberedCards items={values} />
      <section id="huset" className="reading-section"><h2>Huset og omgivelserne — Ro og natur uden for Skanderborg</h2><div className="prose">
        <p>Stjernestøv ligger på landet i Forlev, omgivet af åbne marker, natur og god plads omkring huset. Her er afstand til byens støj og mulighed for en rolig og overskuelig hverdag.</p>
        <p>Huset danner rammen om både fællesskab og privatliv. Der er plads til aktiviteter og samvær, men også mulighed for at trække sig tilbage og finde ro. Samtidig er der kort afstand til Skanderborg og gode forbindelser til resten af Midtjylland.</p>
      </div></section>
      <figure className="house-figure"><img src="/images/p3.png" alt="Huset Stjernestøvs rødstenshus set fra haven med terrasse og indgang" width="1600" height="1074" loading="lazy" /><figcaption>Huset Stjernestøvs rødstenshus og indgangsparti</figcaption></figure>
      <div className="house-gallery" aria-label="Flere billeder af Huset Stjernestøv">
        <figure><img src="/images/p4.png" alt="Huset Stjernestøvs rødstenshus set fra indkørslen med den sorte port" width="1600" height="1195" loading="lazy" /><figcaption>Indgangen til Huset Stjernestøv</figcaption></figure>
        <figure><img src="/images/p5.png" alt="Huset Stjernestøvs rødstenshus set fra gårdspladsen" width="1600" height="1195" loading="lazy" /><figcaption>Huset set fra gårdspladsen</figcaption></figure>
      </div>
      <section className="reading-section"><h2>Barnet skal have en stemme — Ikke bare modtager af en indsats</h2><div className="prose">
        <p>Vi ønsker, at barnet bliver hørt og inddraget i de beslutninger, der vedrører barnets eget liv og hverdag.</p>
        <p>Sammen med barnet arbejder vi med konkrete mål og følger løbende op på, hvad der fungerer, hvad der er svært, og om noget skal gøres anderledes. Det handler også om at få øje på fremskridtene – de små såvel som de store.</p>
      </div></section>
      <section className="reading-section"><h2>Familie og netværk — Sammenhæng omkring barnet</h2><div className="prose">
        <p>Forældre og familie er en vigtig del af mange børns liv – også når barnet er anbragt.</p>
        <p>Vi lægger vægt på et respektfuldt samarbejde med barnets familie og netværk, når det er i overensstemmelse med rammerne omkring anbringelsen. Et godt samarbejde mellem de voksne omkring barnet kan skabe mere ro og sammenhæng.</p>
      </div></section>
      <section className="team-section"><p className="eyebrow">Menneskene i huset</p><h2>Vores medarbejdere</h2>
        <div className="team-group"><div className="team-group-heading"><span>Bestyrelse</span><span>Ledelse og ansvar</span></div><div className="team-grid team-grid-board">{board.map(renderTeamCard)}</div></div>
        <div className="team-group"><div className="team-group-heading"><span>Medarbejdere</span><span>Den daglige indsats</span></div><div className="team-grid team-grid-employees">{employees.map(renderTeamCard)}</div></div>
      </section>
    </div>
  </>
}
