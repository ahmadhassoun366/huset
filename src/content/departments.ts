/* =============================================================
   DEPARTMENT DETAIL CONTENT
   -------------------------------------------------------------
   The per-afdeling copy used by /afdelinger and
   /afdelinger/:slug. The shared facts (name, slug, route,
   photo and the legal `approval` text) live in `site.ts` —
   this file only adds the long-form detail on top, keyed by the
   same slug. Never write the company name here: use "hos os",
   "vi"/"vores", or interpolate BRAND.name in the component.
   ============================================================= */

/** The short facts rendered in the <dl> summary panel. */
export type DepartmentFacts = {
  /** Who the afdeling is for. */
  targetGroup: string
  ageRange: string
  /** Number of places, incl. how they are distributed. */
  places: string
  location: string
  /** Size / layout of the building. */
  area: string
}

/** A single "hverdagen hos os" pointer. */
export type DepartmentHighlight = {
  title: string
  text: string
}

/** An extra phone number the original page lists for this afdeling. */
export type DepartmentContact = {
  label: string
  phone: string
  phoneHref: string
}

export type DepartmentDetail = {
  /** One line used as the card summary on the overview page. */
  tagline: string
  /** Lead paragraph under the <h1> on the detail page. */
  intro: string
  facts: DepartmentFacts
  /** Physical setting — bygningen og omgivelserne. */
  setting: string[]
  /** Long-form description of the målgruppe and the approach. */
  description: string[]
  /** Everyday life at the afdeling. */
  everyday: string[]
  highlights: DepartmentHighlight[]
  contact?: DepartmentContact
}

export const DEPARTMENT_DETAILS: Record<string, DepartmentDetail> = {
  knudsbjergvej: {
    tagline:
      'Hyggelig bolig i naturskønne omgivelser i landsbyen Lyngå ved Hadsten – med ro, tryghed og samvær i hverdagen.',
    intro:
      'Et lille botilbud til voksne i landsbyen Lyngå ved Hadsten, hvor rolige omgivelser og få beboere giver plads til nærvær og en hverdag i eget tempo.',
    facts: {
      targetGroup:
        'Voksne i udsat position og i risiko for kriminalitet, ofte med udadreagerende adfærd. Beboerne kan have diagnoser inden for autismespektret, personlighedsforstyrrelser, forandret virkelighedsopfattelse, opmærksomhedsforstyrrelser, OCD eller lettere kognitiv funktionsnedsættelse (IQ 50-69). Vi modtager også borgere med dom til foranstaltning af type 2, 3, 4 og 5.',
      ageRange: '18 år og opefter',
      places: '1 plads',
      location: 'Lyngå ved Hadsten, Midtjylland',
      area: '156 m² fordelt på to etager',
    },
    setting: [
      'Huset ligger i landsbyen Lyngå tæt på Hadsten i et naturskønt område med gode muligheder for gåture og cykelture i rolige omgivelser. Afstanden til indkøb, fritidsaktiviteter og offentlig transport er kort.',
      'Boligen er på 156 m² fordelt på to etager med en enkel og funktionel indretning. I stueetagen er der bryggers, et lyst køkken, en hyggelig hjørnestue, entré og et stort badeværelse. På første sal ligger to store, lyse værelser samt et fleksibelt depotrum.',
    ],
    description: [
      'Afdelingen er et botilbud for voksne, der har brug for en tryg base og en tydelig ramme om hverdagen, mens de arbejder med at få fodfæste i eget liv. Mange af de borgere, vi møder her, har en lang historik med brudte relationer bag sig, og netop derfor er den lille enhed med kun én plads en styrke: der er ingen at forsvinde i mængden imellem.',
      'Vi arbejder ud fra metoderne LA2 og mentalisering med en gennemgående relationspædagogisk tilgang. Det betyder, at vi først og fremmest investerer i relationen – i at forstå, hvad der ligger bag en adfærd, frem for udelukkende at korrigere den.',
      'Normeringen er høj, og medarbejderne kender borgeren godt. Det gør det muligt at justere støtten løbende, så den passer til dagsformen, og at gribe ind tidligt, når noget er ved at blive svært.',
    ],
    everyday: [
      'Hverdagen er struktureret og forudsigelig uden at være stiv. Dagen har faste holdepunkter omkring måltider, søvn, beskæftigelse og aftaler, og de holdepunkter er med til at gøre døgnet overskueligt.',
      'Vi lægger vægt på det almindelige liv: at handle ind, lave mad sammen, holde orden i sit hjem, komme afsted til skole, praktik eller job og få hverdagens økonomi til at hænge sammen. Det er i de helt konkrete opgaver, at selvstændigheden bliver trænet.',
      'Naturen omkring huset bruges aktivt. En gåtur eller en cykeltur er ofte det bedste rum til den svære samtale – der er tid, og man behøver ikke se hinanden i øjnene, mens man taler.',
    ],
    highlights: [
      {
        title: 'Én plads, fuld opmærksomhed',
        text: 'Enheden er bevidst lille, så støtten kan tilrettelægges helt individuelt.',
      },
      {
        title: 'Rolige omgivelser',
        text: 'Landsbyen og naturen omkring huset sænker tempoet og støjniveauet i hverdagen.',
      },
      {
        title: 'LA2 og mentalisering',
        text: 'Metoderne bruges systematisk og understøttes af supervision til medarbejderne.',
      },
      {
        title: 'Vejen mod eget hjem',
        text: 'Praktiske færdigheder, økonomi og netværk trænes med udgangspunkt i borgerens egne mål.',
      },
    ],
    contact: {
      label: 'Koordinator',
      phone: '(+45) 41 27 27 99',
      phoneHref: '+4541272799',
    },
  },

  overgaardsvej: {
    tagline:
      'Et ældre, lyst og hyggeligt hjem i landsbyen Aidt ved Thorsø med stor grøn have omkring.',
    intro:
      'Et børne- og ungehjem i landsbyen Aidt ved Thorsø, hvor et ældre hus med stor have danner rammen om en struktureret og tryg hverdag.',
    facts: {
      targetGroup:
        'Børn og unge med massive adfærds- og følelsesmæssige problematikker, ofte med erfaringer med omsorgssvigt og udviklingsvanskeligheder. Mange har en diagnose inden for autismespektret, ADHD, tilknytningsforstyrrelse eller indlæringsvanskeligheder, og flere er i risiko for kriminalitet.',
      ageRange: '11 – 22 år',
      places:
        '4 pladser: 2 almene pladser jf. Barnets lov § 43 og 2 fleksible pladser jf. Barnets lov § 42 og servicelovens § 107',
      location: 'Aidt ved Thorsø, Midtjylland',
      area: '132 m² fordelt på to etager samt kælder',
    },
    setting: [
      'Afdelingen ligger i landsbyen Aidt ved Thorsø i Midtjylland. Huset er et ældre, lyst og hyggeligt hjem på 132 m² fordelt på to etager og kælder.',
      'I stueetagen er der køkken, badeværelse, fællesstue og et værelse. På første sal ligger to værelser samt en hyggestue, hvor man kan trække sig lidt tilbage uden at være alene. Omkring huset ligger en stor grøn have med plads til boldspil, bål og fællesskab.',
    ],
    description: [
      'Målgruppen har i høj grad behov for en struktureret hverdag præget af tryghed, forudsigelighed og stabile, nærværende og omsorgsfulde voksne. Mange af de unge har relationsvanskeligheder, en lav frustrationstærskel, impulsiv adfærd og modstand mod krav.',
      'Vi arbejder med LA2 og mentalisering og med et tydeligt relationspædagogisk fokus. Vores udgangspunkt er, at adfærd altid giver mening set indefra – opgaven er at finde den mening sammen med den unge, så der bliver andre handlemuligheder at vælge imellem.',
      'Skole, uddannelse og fritidsliv vægtes højt, og vi samarbejder tæt med forældre, netværk, skole og myndighed. Formålet er, at den unge oplever, at de voksne omkring hende eller ham taler sammen og trækker i samme retning.',
    ],
    everyday: [
      'Dagen har en genkendelig rytme: morgenrutiner, skole eller beskæftigelse, eftermiddag med lektier og aktiviteter og et fælles aftensmåltid, hvor dagen bliver samlet op.',
      'Vi laver mad sammen, holder husmøder og planlægger weekender og ferier i fællesskab. De unge har medbestemmelse på det, der handler om deres eget liv, inden for rammer som de voksne holder.',
      'Haven og landsbyen giver plads til bevægelse og til de spontane fællesskaber, som ofte er dér, hvor relationen bliver bygget.',
    ],
    highlights: [
      {
        title: 'Hjemlige rammer',
        text: 'Et ældre hus med sjæl frem for en institution – det skal føles som et hjem.',
      },
      {
        title: 'Fleksible pladser',
        text: 'To pladser kan følge den unge over 18 år, så et velfungerende forløb ikke behøver at blive afbrudt.',
      },
      {
        title: 'Stor grøn have',
        text: 'Udeliv, bål og boldspil er en fast del af hverdagen året rundt.',
      },
      {
        title: 'Tæt skolesamarbejde',
        text: 'Vi følger den unges skolegang tæt og støtter op om fremmøde og trivsel.',
      },
    ],
  },

  'skanderborgvej-180': {
    tagline:
      'Børne- og ungehjem i Foldby ved Hinnerup med fem ungeværelser og kort afstand til skole og fritidsliv.',
    intro:
      'Et børne- og ungehjem i Foldby ved Hinnerup med plads til fem unge, gode fællesarealer og kort afstand til skole, fritidsaktiviteter og indkøb.',
    facts: {
      targetGroup:
        'Børn og unge i udsat position og i risiko for kriminalitet, ofte med erfaringer med omsorgssvigt og betydelige følelsesmæssige og sociale udviklingsvanskeligheder. Flere har adfærds- og indlæringsvanskeligheder eller diagnoser inden for autismespektret og ADHD. Vi har særlig erfaring med unge, der er anbragt efter afgørelse fra Ungdomskriminalitetsnævnet, herunder unge, der kommer fra en sikret institution.',
      ageRange: '11 – 22 år',
      places: '5 pladser',
      location: 'Foldby ved Hinnerup, Østjylland',
      area: '231 m² fordelt på to etager, opført i 1957',
    },
    setting: [
      'Huset ligger i et roligt område i Foldby nær Hinnerup med kort afstand til skole, fritidsaktiviteter, indkøb og offentlig transport.',
      'Bygningen er opført i 1957 og løbende moderniseret. De 231 m² er fordelt på to etager med fem ungeværelser, to badeværelser, to køkkener og fælles opholdsarealer. To køkkener betyder, at der både er plads til det store fællesskab og til den mindre gruppe, når det er dét, der er brug for.',
    ],
    description: [
      'Afdelingen er indrettet til unge, der har brug for et markant retningsskifte, og som samtidig har brug for voksne, der bliver stående, når det er svært. Mange har mødt mange systemer, før de kommer til os, og de har god grund til at være skeptiske over for endnu et.',
      'Vi arbejder med LA2 og mentalisering og med en relationspædagogisk tilgang, hvor strukturen er tydelig, og tonen er ordentlig. Regler forklares, konsekvenser er kendte på forhånd, og konflikter bliver samlet op bagefter i stedet for at blive stående som en dom over den unge.',
      'Vi har erfaring med at modtage unge direkte fra sikrede institutioner og med at samarbejde med Ungdomskriminalitetsnævnet, kommunen, politiet, skolen og familien om en plan, der hænger sammen på tværs.',
    ],
    everyday: [
      'Hverdagen bygger på struktur og forudsigelighed. Der er faste tider for skole eller beskæftigelse, måltider, aktiviteter og sengetid, og planen for dagen er kendt af alle på forhånd.',
      'De unge er med til at lave mad, gøre rent og planlægge aktiviteter. Det er både en praktisk træning og en måde at opleve, at man bidrager til noget, andre har glæde af.',
      'Fritidsliv, træning og fællesaktiviteter fylder om eftermiddagen og i weekenderne. Vi hjælper med at få den unge ind i et fællesskab uden for huset, fordi det er dér, hverdagen skal fungere på længere sigt.',
    ],
    highlights: [
      {
        title: 'Fem unge, høj normering',
        text: 'Enheden er lille nok til, at alle bliver set hver dag.',
      },
      {
        title: 'Tydelig struktur',
        text: 'Faste rammer og kendte aftaler gør døgnet overskueligt og trygt.',
      },
      {
        title: 'Skole og fritid tæt på',
        text: 'Kort afstand til skole, indkøb og fritidsaktiviteter gør det nemt at holde fast i hverdagen.',
      },
      {
        title: 'Erfaring med UKN-forløb',
        text: 'Vi er vant til at modtage unge efter afgørelse fra Ungdomskriminalitetsnævnet.',
      },
    ],
  },

  'skanderborgvej-182': {
    tagline:
      'Hyggelig bolig i naturskønt område ved Hinnerup – ideel til en hverdag med ro, tryghed og samvær.',
    intro:
      'Et botilbud til voksne i en charmerende landsby nær Hinnerup, hvor overdækket terrasse, lukket havemiljø og rolige omgivelser sætter rammen om hverdagen.',
    facts: {
      targetGroup:
        'Voksne i udsat position og i risiko for kriminalitet, ofte med udadreagerende adfærd. Beboerne kan have diagnoser inden for autismespektret, personlighedsforstyrrelser, opmærksomhedsforstyrrelser, OCD eller lettere kognitiv funktionsnedsættelse (IQ 50-69). Vi modtager også borgere med dom til foranstaltning af type 2, 3, 4 og 5.',
      ageRange: '18 år og opefter',
      places: '1 plads',
      location: 'Landsby nær Hinnerup, Østjylland',
      area: '110 m²',
    },
    setting: [
      'Boligen på 110 m² ligger i en charmerende landsby nær Hinnerup omgivet af natur med adgang til gå- og cykelruter. Indkøb, fritidsaktiviteter og offentlig transport ligger tæt på.',
      'Huset rummer bryggers, badeværelse, et lyst køkken, en hyggelig stue, to værelser samt kontor og mødelokale til medarbejderne. Udenfor er der en overdækket terrasse og et lukket havemiljø, hvor man kan være ude uden at være til skue.',
    ],
    description: [
      'Afdelingen er et botilbud for voksne, der har brug for et roligt sted at lande, og som profiterer af få mennesker omkring sig. Her er der ikke en gruppe, man skal navigere i – der er en hverdag, der kan formes efter den enkelte.',
      'Vi arbejder med LA2 og mentalisering med et relationspædagogisk afsæt. Vi går efter at forstå, hvad der sker indeni, når adfærden bliver voldsom, og at give borgeren et sprog for det, så der bliver noget at handle på næste gang.',
      'Kontor og mødelokale i huset betyder, at samarbejdet med myndighed, behandlere og pårørende kan foregå dér, hvor borgeren bor – og at medarbejderne er til stede i hverdagen frem for på afstand.',
    ],
    everyday: [
      'Dagen bygges op omkring genkendelige rutiner: morgen, måltider, beskæftigelse eller aktivitet, og en aften med ro. Rutinerne aftales med borgeren og justeres, når livet ændrer sig.',
      'Praktiske færdigheder trænes i det virkelige liv: indkøb, madlavning, tøjvask, rengøring, økonomi og aftaler med læge og kommune.',
      'Den overdækkede terrasse og haven bruges hele året. For mange er det udelivet og de rolige omgivelser, der gør den største forskel på trivslen.',
    ],
    highlights: [
      {
        title: 'Ro og tryghed',
        text: 'Naturskønne omgivelser og et lukket havemiljø giver plads til at falde til ro.',
      },
      {
        title: 'Individuelt tilrettelagt',
        text: 'Med én plads formes hverdagen fuldstændigt efter borgerens behov og mål.',
      },
      {
        title: 'Medarbejdere tæt på',
        text: 'Kontor og mødelokale i huset holder samarbejdet tæt på hverdagen.',
      },
      {
        title: 'Mod et selvstændigt liv',
        text: 'Praktiske færdigheder og netværk trænes skridt for skridt i borgerens eget tempo.',
      },
    ],
  },

  'gl-aarhusvej': {
    tagline:
      'Rummelig villa fra 1978 uden for Viborg nær Arnbjerg – et børne- og ungehjem for piger.',
    intro:
      'Et børne- og ungehjem for piger i en rummelig villa uden for Viborg nær Arnbjerg, med store værelser, aktivitetsrum i kælderen og udestue ud til terrassen.',
    facts: {
      targetGroup:
        'Piger i udsat position og i risiko for kriminalitet. Mange har været udsat for omsorgssvigt og har betydelige følelsesmæssige og sociale udviklingsvanskeligheder, og flere har diagnoser inden for autismespektret, ADHD, tilknytningsforstyrrelser eller andre udviklingsforstyrrelser.',
      ageRange: '11 – 22 år',
      places:
        '5 pladser, hvoraf tre er fleksible og kan videreføres jf. servicelovens § 107',
      location: 'Uden for Viborg nær Arnbjerg, Midtjylland',
      area: '195 m² villa fra 1978 med kælder',
    },
    setting: [
      'Villaen er opført i 1978 og ligger uden for Viborg nær Arnbjerg med et boligareal på 195 m².',
      'I stueplan er der et lyst køkken i åben forbindelse med en stor stue, direkte adgang til udestue og terrasse samt ét værelse og badeværelse. På førstesalen ligger fire store værelser, hvor beboerne kan indrette sig personligt. I kælderen er der aktivitetsrum, to badeværelser og bryggers.',
    ],
    description: [
      'Afdelingen er målrettet piger, og det er et bevidst valg. En pigegruppe stiller andre krav til, hvordan fællesskabet bliver bygget, hvordan konflikter håndteres, og hvordan der bliver plads til både nærhed og grænser.',
      'Vi arbejder med LA2 og mentalisering med fokus på den relationspædagogiske tilgang. Vi lægger vægt på at hjælpe pigerne med at sætte ord på følelser, forstå egne reaktioner og opbygge relationer, der holder – også når de bliver sat på prøve.',
      'Tre af pladserne er fleksible, så et forløb kan fortsætte efter det 18. år, hvis det giver mening for den unge. Kontinuitet i relationen er ofte netop dét, der gør, at en positiv udvikling holder.',
    ],
    everyday: [
      'Hverdagen har faste holdepunkter omkring skole, måltider, lektier, aktiviteter og aftenrutiner, og der er altid voksne til stede.',
      'Aktivitetsrummet i kælderen, udestuen og terrassen bruges flittigt – til kreative projekter, træning, film og de lange samtaler, der opstår, når man laver noget sammen.',
      'Vi støtter op om skolegang, fritidsinteresser og venskaber uden for huset og samarbejder tæt med forældre og netværk, så pigerne oplever sammenhæng mellem de forskellige dele af deres liv.',
    ],
    highlights: [
      {
        title: 'Målrettet piger',
        text: 'Et fællesskab bygget op omkring pigegruppens behov og dynamik.',
      },
      {
        title: 'Plads til at være sig selv',
        text: 'Store værelser, som den enkelte kan indrette personligt, og fælles rum til samvær.',
      },
      {
        title: 'Aktivitetsrum i kælderen',
        text: 'Bevægelse og kreative aktiviteter er en fast del af eftermiddagene.',
      },
      {
        title: 'Fleksible pladser',
        text: 'Tre pladser kan videreføres efter det 18. år, så relationen ikke afbrydes.',
      },
    ],
  },
}

/**
 * Total lookup — returns `undefined` for an unknown or missing slug so the
 * route can render a friendly "ikke fundet" state instead of crashing.
 */
export function getDepartmentDetail(
  slug: string | undefined,
): DepartmentDetail | undefined {
  if (!slug) return undefined
  return Object.prototype.hasOwnProperty.call(DEPARTMENT_DETAILS, slug)
    ? DEPARTMENT_DETAILS[slug]
    : undefined
}
