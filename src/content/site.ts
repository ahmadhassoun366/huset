export const site = {
  name: 'Huset Stjernestøv',
  phone: '+45 60 22 33 47',
  phoneHref: 'tel:+4560223347',
  address: 'Låsbyvej 61, Forlev, 8660 Skanderborg',
  cvr: '45975843',
  email: '', // Indsæt den bekræftede arbejdsmail her.
  mapUrl: 'https://www.google.com/maps?q=L%C3%A5sbyvej+61,+Forlev,+8660+Skanderborg',
}

export const navigation = [
  { path: '/om-os', label: 'Om os' },
  { path: '/malgruppe', label: 'Målgruppe' },
  { path: '/faglig-tilgang', label: 'Faglig tilgang' },
  { path: '/hverdagen', label: 'Hverdagen' },
  { path: '/for-kommuner', label: 'For kommuner' },
  { path: '/kontakt', label: 'Kontakt' },
]

export type CardContent = { title: string; text: string }

export const values: CardContent[] = [
  { title: 'Tryghed', text: 'Stabile relationer og genkendelige rammer skaber ro og giver plads til udvikling.' },
  { title: 'Nærvær', text: 'Børnene og de unge mødes af tilgængelige voksne, som er engagerede i deres hverdag.' },
  { title: 'Ordentlighed', text: 'Vi handler med respekt, faglig integritet og blik for det ansvar, vi har i barnets liv.' },
]

export const rhythms: CardContent[] = [
  { title: 'Forudsigelig struktur', text: 'Genkendelige rytmer og tydelige aftaler.' },
  { title: 'Meningsfulde fællesskaber', text: 'Relationer og aktiviteter med afsæt i den enkelte.' },
  { title: 'Individuel udvikling', text: 'Konkrete mål, tæt opfølgning og blik for fremskridt.' },
]

export const methods: CardContent[] = [
  { title: 'Mentalisering', text: 'Vi er nysgerrige på de tanker, følelser og intentioner, der kan ligge bag egne og andres handlinger. Det bruger vi aktivt i hverdagen – særligt når noget bliver svært.' },
  { title: 'Jeg-støttende samtale', text: 'Barnet får støtte til at sætte ord på oplevelser, følelser, ressourcer og udfordringer. Samtalen kan opstå naturligt i hverdagen eller foregå i et mere fast rum.' },
  { title: 'Stabile relationer', text: 'Udvikling sker gennem relationer. Barnet møder tilgængelige og tydelige voksne, der bliver ved med at være nysgerrige – også på svære dage.' },
  { title: 'Individuel støtte', text: 'Vi forventer ikke, at alle børn kan det samme. Indsatsen tilpasses det enkelte barn og tager udgangspunkt i, hvor barnet befinder sig lige nu.' },
]

export const challenges = [
  'Vanskeligheder med relationer og tilknytning',
  'Udfordringer med følelsesregulering',
  'Opmærksomheds- og koncentrationsvanskeligheder',
  'Udfordringer med skole og læring',
  'Indad- eller udadreagerende adfærd',
]

export const perspective = 'Vi ser ikke kun på adfærden. Vi er nysgerrige på, hvad der ligger bag, og hvad barnet har brug for fra de voksne omkring sig.'
export const targetIntro = 'Stjernestøv er godkendt til børn og unge i alderen 7–17 år, som har været udsat for omsorgssvigt og/eller har udviklet en tilknytningsforstyrrelse.'
export const everydayIntro = 'Vi understøtter skolegang, fritidsliv, sociale relationer og udviklingen af personlige og praktiske færdigheder. Der er plads til både fællesskab, ro og individuelle interesser.'
export const approval = 'Stjernestøv er godkendt som børne- og ungehjem med fem pladser efter Barnets lov § 43, stk. 1, nr. 6 og stk. 3.'

export const team = [
  { image: 'member1.jpg', name: 'Yakub Yigit Gökce', role: 'Tilbudsleder', education: 'Cand.Pæd.Pæd.Psyk', kind: 'employee' },
  { image: 'member2.jpg', name: 'Kathrine Lautrup Bentsen', role: 'Adm.', education: 'Cand.Pæd.Pæd.Psyk', kind: 'employee' },
  { image: 'member3.png', name: 'Kia Schack', role: 'Bestyrelsesformand', education: '', kind: 'board' },
  { image: 'member4.JPG', name: 'Huso Habul', role: 'Bestyrelsesmedlem', education: '', kind: 'board' },
  { image: 'member5.PNG', name: 'Egzon Halilaj', role: 'Bestyrelsesmedlem', education: '', kind: 'board' },
]

export const contactPeople = [
  { name: 'Yakub Yigit Gökce', role: 'Tilbudsleder', education: 'Cand.Pæd.Pæd.Psyk', phone: '+45 60 22 33 47', phoneHref: 'tel:+4560223347', email: 'yg@husetstjernestøv.dk', image: 'member1.jpg' },
  { name: 'Kathrine Lautrup Bentsen', role: 'Adm.', education: 'Cand.Pæd.Pæd.Psyk', phone: '+45 93 98 27 70', phoneHref: 'tel:+4593982770', email: 'kb@husetstjernestøv.dk', image: 'member2.jpg' },
]

export const supportTopics: CardContent[] = [
  { title: 'Uddannelse og arbejde', text: 'Vi støtter barnet/den unge i at komme godt i gang med og fastholde uddannelse eller arbejde – herunder struktur, planlægning og lektiehjælp.' },
  { title: 'Økonomi og ansvar', text: 'Vi hjælper med at skabe overblik over økonomien, lægge budget, betale regninger og arbejde med opsparing og ansvarligt forbrug.' },
  { title: 'Hverdagsliv og praktiske færdigheder', text: 'Vi støtter barnet/den unge i at skabe struktur og gode rutiner omkring de praktiske opgaver, der hører hverdagen til.' },
  { title: 'Mad, sundhed og egenomsorg', text: 'Vi arbejder med kostbevidsthed, indkøb og madlavning samt med personlig hygiejne, kropsbevidsthed og trivsel.' },
  { title: 'Fritid og interesser', text: 'Vi hjælper barnet/den unge med at finde aktiviteter, fællesskaber og interesser, der giver glæde og mening – eksempelvis sport og andre fritidsaktiviteter.' },
  { title: 'Fællesskab og sociale relationer', text: 'Vi støtter barnet/den unge i at skabe og fastholde gode relationer, opbygge venskaber og være en aktiv del af fællesskabet. Vi har samtidig fokus på at forebygge ensomhed.' },
  { title: 'Selvstændighed og medansvar', text: 'Vi arbejder med, at barnet/den unge bliver mere selvstændig og tager ansvar for eget liv, samtidig med at man bidrager til fællesskabet og de fælles opgaver.' },
  { title: 'Oplevelser og udvikling', text: 'Vi skaber mulighed for ture, udflugter og rejser, hvor barnet/den unge kan få nye oplevelser, udfordre sig selv og udvikle nye færdigheder.' },
  { title: 'Personlig udvikling og grænsesætning', text: 'Vi støtter barnet/den unge i at mærke egne behov, sige til og fra, sætte sunde grænser og have modet til at være den, man er.' },
  { title: 'Livsmestring og samfund', text: 'Vi hjælper barnet/den unge med at forstå og navigere i det samfund, vi er en del af, og med at udvikle de kompetencer, der gør det muligt at leve et så selvstændigt og meningsfuldt liv som muligt.' },
  { title: 'Samtaler og bearbejdning', text: 'Vi tilbyder et trygt rum til at tale om tanker, følelser og oplevelser og støtter beboeren i at finde gode strategier til at håndtere det, der kan være svært.' },
]
