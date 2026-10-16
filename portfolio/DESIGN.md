---
version: alpha
name: Portfolio
description: Portfolio van een freelance frontend developer — drie pagina's (Home, Projects, Contact) waarop opdrachtgevers werkende sites kunnen bekijken en contact opnemen.

colors:
  primary: "#BA1F33"
  primary-strong: "#91171F"
  primary-deep: "#410B13"
  secondary: "#68625C"
  neutral: "#F0ECE6"
  surface: "#FAF7F2"
  on-surface: "#1C1515"
  border: "#D5D0C9"
  error: "#7F4413"

typography:
  display:
    fontFamily: Schibsted Grotesk
    fontSize: 96px
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Schibsted Grotesk
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Schibsted Grotesk
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Schibsted Grotesk
    fontSize: 21px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Schibsted Grotesk
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.45
  body-md:
    fontFamily: Schibsted Grotesk
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Schibsted Grotesk
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-mono:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.06em
    fontFeature: "'case' 1"
  data-md:
    fontFamily: IBM Plex Mono
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "'tnum' 1, 'zero' 1"

rounded:
  none: 0px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 96px
  gutter: 24px
  margin-mobile: 16px
  margin: 48px

components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  hero-name:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.display}"
  intro:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
  section-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-mono}"
  nav-link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-mono}"
  nav-link-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-mono}"
  link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  link-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.surface}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  button-primary-active:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.surface}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  project-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-md}"
    padding: "{spacing.lg}"
  project-row-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.headline-md}"
    padding: "{spacing.lg}"
  project-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.data-md}"
  project-title:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-lg}"
  project-subhead:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.headline-sm}"
  screenshot-frame:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
  clock:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.data-md}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm}"
  input-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-mono}"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
  form-confirmation:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
---

# Portfolio

## Overview

Dit portfolio heeft één lezer die ertoe doet: een opdrachtgever die in 30 tot 90 seconden beslist of deze developer zijn project netjes kan opleveren. Die lezer beoordeelt niet alleen het werk dat getoond wordt. De site zélf is het eerste bewijsstuk. Elke scheve uitlijning, elke haperende hover en elke standaard-template-sectie wordt gelezen als een voorproefje van hoe hun eigen project eruit gaat zien.

Het gevoel in de eerste seconde moet daarom **nauwkeurig** zijn. Niet warm, niet speels, niet "creatief": nauwkeurig.

De richting is **Swiss Editorial**, in de lijn van Josef Müller-Brockmann, het tijdschrift *Neue Grafik* (1958–1965) en Hans Hilfikers stationsklok voor de SBB. Het grid is het ontwerp. Hiërarchie ontstaat uit positie, schaal en witruimte, en er is precies één signaalkleur.

Wat deze richting bewust opgeeft: **warmte, speelsheid en decoratie**. Er zijn geen illustraties, geen gradiënten, geen afgeronde hoeken, geen schaduwen en geen scroll-animaties. Een opdrachtgever die een knuffelig, persoonlijk merk zoekt, haakt hier misschien af. Dat is de prijs. Wat het oplevert: een site waarop elke afwijking van het grid zichtbaar zou zijn, en daarom ook geen enkele afwijking heeft. Strakheid die je niet kunt faken is het sterkste argument dat een frontender kan maken.

Het systeem is alleen licht. Er is geen dark mode. Eén palet dat volledig klopt is overtuigender dan twee paletten die half kloppen.

## Colors

Het palet bestaat uit inkt, papier en één rode wijzer. De rode familie komt uit het eigen palet van de eigenaar (Carmine, Deep Crimson en Night Bordeaux). Hun rol volgt de logica van de secondewijzer op Hans Hilfikers SBB-stationsklok: het enige element op de wijzerplaat dat beweegt, en daardoor het enige waar het oog naartoe gaat.

- **Primary (#BA1F33) — *Carmine*.** Het rood van karmijn, het lakpigment uit cochenille dat eeuwenlang de rode drukinkt leverde. Het is een koel, licht blauwig rood (oklch 0.512 0.188 21). Het markeert **alleen wat je nu aanwijst of de ene actie die ertoe doet**. In rust zijn links inkt. Pas bij hover en focus worden ze carmine, en per pagina is er hooguit één carmine knop. De kleur blijft onder ~3% van het oppervlak. Als tekst haalt hij 5,9:1 op papier en 5,4:1 op neutral, en als vulling met papieren tekst ook 5,9:1.
- **Primary-strong (#91171F) — *Deep Crimson*.** De hover-state van de primaire knop. De tint draait iets warmer (h 24) en de lichtheid zakt naar 0.43, zoals pigment dat dikker is aangebracht.
- **Primary-deep (#410B13) — *Night Bordeaux*.** Alleen de ingedrukte (`:active`) state van de primaire knop. Zo heeft de knop drie lichtheden van één familie: rust, hover en ingedrukt. Er is geen vierde gebruik. Bordeaux als koptekst of achtergrondvlak zou het rood van "wijzer" tot "merkkleur" degraderen. Het palet bevatte twee bijna identieke bordeaux-tinten (`#410B13` en `#421820`, contrast 1,1:1 onderling). Die zijn samengevoegd tot één.
- **On-surface (#1C1515) — *drukinkt*.** Bijna-zwart met een spoor van de bordeaux-tint erin (oklch 0.205 0.012 20). Zo hoort de inkt bij dezelfde familie als het accent zonder zelf rood te worden. Geen `#000000`: zuiver zwart op warm papier oogt als een fout, niet als een keuze.
- **Surface (#FAF7F2) — *ongestreken offsetpapier*.** De achtergrond van de hele site. Het is de lichte, licht vergeelde tint van ongecoat drukpapier, niet het blauwige wit van een scherm.
- **Neutral (#F0ECE6) — *een halve stap donkerder papier*.** Wordt gebruikt voor het kader rond screenshots, de hover-achtergrond van projectrijen en het bevestigingsvlak van het formulier. Geen kaarten: dit is een andere papiersoort, geen zwevend object.
- **Secondary (#68625C) — *potloodgrijs*.** Voor alle metadata: jaartallen, stack, indexnummers en labels. Het haalt 5,6:1 op papier en blijft dus leesbaar, maar duikt duidelijk onder de inkt.
- **Border (#D5D0C9) — *haarlijn*.** Uitsluitend voor scheidingslijnen van 1px tussen rijen en secties. Deze kleur is te licht (1,4:1) voor betekenisdragende randen. Invoervelden krijgen daarom een inktlijn, geen borderlijn.
- **Error (#7F4413) — *roest*.** Bewust níét uit de rode familie. Als fouten dezelfde kleur hadden als "klikbaar", zou het rood twee betekenissen krijgen en er geen meer goed dragen. Roest ligt ruim 30° van carmine af (h 55 tegenover 21), is bruiner en haalt 7,2:1 op papier. Een fout heeft altijd ook een tekstprefix ("Fout:"), dus nooit alleen kleur.

**Lobster Pink (#CD5D67) uit het oorspronkelijke palet is bewust niet opgenomen.** Op papier haalt hij maar 3,7:1, dus hij kan geen tekst dragen. Elke andere rol (tags, achtergrondvlakken, tekstselectie) zou een tweede accent naast carmine maken. In een systeem met één wijzer is dat precies wat niet mag.

Er is **geen succeskleur**. Een geslaagde verzending wordt in woorden bevestigd op een neutral-vlak. Groen zou een tweede accent introduceren voor één moment dat een zin net zo goed draagt.

Alle neutralen zijn warm getint (oklch-tint 65–85, chroma 0,007–0,012). Geen enkele waarde heeft R = G = B.

## Typography

Twee families, gescheiden naar taak.

**Schibsted Grotesk** doet al het spreken: namen, koppen, lopende tekst en knoppen. Het is een neo-grotesk die getekend is voor de Noorse krantengroep Schibsted, met een redactionele afkomst en net genoeg eigenaardigheid in de `a`, `g` en `R` om niet als Helvetica-kloon te lezen. Het is bewust níét Inter of Geist: die zouden ook werken, maar zijn zo alomtegenwoordig in developer-portfolio's dat ze lezen als "nog niets gekozen". Fallback: `"Schibsted Grotesk", "Helvetica Neue", Arial, sans-serif`. SIL Open Font License.

**IBM Plex Mono** doet het apparaat: indexnummers (01, 02, 03), jaartallen, de stack-regel per project, navigatie, formulierlabels, knoplabels en de klok. Monospace is hier geen developer-kostuum. Het is de typografische vorm van "dit is een feit en geen proza", en het lijnt kolommen uit. Tabular figures en slashed zero staan aan (`'tnum' 1, 'zero' 1`), zodat jaartallen en tijden niet verspringen. Fallback: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`. SIL Open Font License.

**Schaal.** De schaal is opgebouwd op een kwart (1,333) vanaf 16px (16 → 21 → 28 → 37 → 50) en daarna met de hand gebroken: `headline-lg` is afgerond naar 48px en `display` springt naar **96px**. Die sprong is de enige luide geste van de site. De naam op de homepage moet groter zijn dan comfortabel is. Onder 768px schaalt `display` vloeiend met `clamp(48px, 12vw, 96px)` en `headline-lg` met `clamp(32px, 7vw, 48px)`. De overige stappen blijven vast.

**Optische correctie.** De tracking loopt mee met het formaat: −0,04em op display, −0,03em op headline-lg, aflopend naar 0 op body en +0,06em op de mono-labels. Labels in hoofdletters krijgen `'case' 1`. Ook de regelhoogte loopt omgekeerd mee: 0,95 op display (de naam staat als een blok), 1,6 op body.

**Twee gewichten: 400 en 700.** Een derde gewicht is niet toegestaan. Plex Mono wordt alleen in 400 gebruikt. Als een kop niet als kop leest, heeft hij meer ruimte erboven nodig, niet meer gewicht.

Beide fonts worden zelf gehost, gesubset naar Latin, met `font-display: swap` en een fallback met gematchte metriek (`size-adjust`) om layout shift te voorkomen. CLS van 0 is hier geen bonus: het ís het portfolio.

## Layout

Een **12-koloms grid** met 24px gutters en 48px buitenmarge op desktop (max. contentbreedte 1440px). Op tablet wordt dat 6 kolommen, op mobiel (< 768px) 4 kolommen met 16px marge. Alles lijnt uit op het grid, zonder uitzondering. Dat geldt ook voor screenshots, de klok en de knop. Spacing loopt op een strikte **8px-basis** met een halve stap van 4px.

**Asymmetrie binnen een symmetrisch grid** is de kernbeweging. Er staat niets gecentreerd op deze site: geen kop, geen knop en geen lege staat. Alles staat flush-left met een rafelige rechterkant.

**Header (alle pagina's).** Eén regel. Links de naam in `label-mono`, rechts de navigatie (`Home`, `Projects`, `Contact`) in `label-mono` en uiterst rechts de lokale tijd (`clock`, bv. `AMS 14:32:07`). De klok tikt per seconde en is het enige bewegende element op de site. Hij is functioneel, want een opdrachtgever ziet in welke tijdzone je werkt, en hij is de knipoog naar de stationsklok. De klok staat in inkt, niet in rood. Onder de header loopt een haarlijn over de volle breedte.

**Home.**
1. **Naam + rol** in `display`, kolom 1–11. Bijvoorbeeld twee regels: naam, dan "Frontend developer". Daarboven niets, ook geen "Hoi, ik ben…".
2. **Intro** in `body-lg`, ingesprongen naar kolom 5–11, maximaal 52 tekens per regel. Twee of drie zinnen over wat je bouwt en voor wie. Deze inspringing ten opzichte van de naam is de handtekening van het ontwerp.
3. **Geselecteerd werk**: `section-label` "Geselecteerd werk", daaronder de drie beste projecten als `project-row` (zie Components). Het eerste project krijgt een groot screenshot over kolom 1–12. Er is geen raster van drie kaarten.
4. **Afsluiting**: één regel in `headline-md` ("Beschikbaar vanaf [maand]") met één `button-primary` naar Contact. Dit is de enige rode knop op de pagina.

Er komt geen skills-raster met iconen, geen "trusted by"-logostrip, geen testimonial-carrousel en geen voortgangsbalken voor talen. De stack staat bij elk project, waar hij bewijs is in plaats van een claim.

**Projects.** Een index, geen galerij. Een `section-label` met het aantal ("Projecten — 07") en daaronder een tabel-achtige lijst. Elke rij heeft deze kolommen: indexnummer (`data-md`, kol. 1) · titel (`headline-md`, kol. 2–6) · type/opdrachtgever (`body-sm`, kol. 7–9) · jaar (`data-md`, kol. 10) · `Live ↗` (kol. 11–12, rechts uitgelijnd). Rijen worden gescheiden door haarlijnen. Een klik op de rij opent het project in een detailblok op dezelfde pagina (anker, geen aparte route). Het detailblok bevat:
- `project-title`, een korte probleem/oplossing-tekst in `body-md` met maximaal 65 tekens per regel, en de stack als één regel in `project-meta` gescheiden door " / ".
- Een of twee screenshots in `screenshot-frame` (verhouding 16:10, geen device-mockup, geen browserchrome).
- Een duidelijke `button-secondary` "Bekijk live ↗" naar de werkende site. Dit is het belangrijkste element van de pagina: de opdrachtgever wil iets dat werkt, niet een plaatje ervan.

**Contact.** Twee kolommen. Links (kol. 1–5): het e-mailadres in `headline-lg` als `link` (klik kopieert of opent de mail), daaronder in `project-meta` je reactietijd ("Antwoord binnen 1 werkdag") en eventuele links naar GitHub en LinkedIn als gewone tekstlinks. Rechts (kol. 7–12): een formulier met naam, e-mail, en bericht (plus een optioneel budget/periode-veld), en een `button-primary` "Verstuur". Validatie gebeurt inline bij blur en niet pas bij submit. Na verzending vervangt `form-confirmation` het formulier.

**Ritme.** Sectieafstanden variëren met opzet. Tussen naam en intro staat 48px, tussen intro en werk 96px, en binnen een projectrij 24px. Dingen die bij elkaar horen staan dichter op elkaar. Er is geen uniforme `py-24` op elke sectie.

**Beweging.** Kleurwissels bij hover en focus gaan in 80ms lineair. Dat is snel genoeg om instant te voelen, maar het voorkomt flikkering. Verder beweegt er **niets**: geen fade-in bij scrollen, geen paginatransities, geen parallax, geen hover-lift en geen scale. De enige uitzondering is de klok. Wat niet animeert is hier net zo goed een beslissing als wat wel animeert.

**Iconen.** Er zijn geen iconensets. De enige pijl is `↗` uit het font zelf, en die staat bij elke externe link.

## Elevation & Depth

Deze site is volledig plat. Er zijn **nergens schaduwen**, ook niet op knoppen, screenshots of het mobiele menu.

Diepte en groepering komen uit drie middelen, in deze volgorde van voorkeur:

1. **Ruimte.** Het eerste antwoord op elk groeperingsprobleem.
2. **Haarlijnen.** 1px in `border`, horizontaal, over de volle breedte van het grid of van de kolomspanne. Ze scheiden en omsluiten niet: er zijn geen kaders rondom content.
3. **Tonale stap.** De halve stap van `surface` naar `neutral`. Een screenshot ligt op een iets donkerder vel papier, het zweeft niet.

Het mobiele menu opent als een vlak in `surface` over de volle schermhoogte, met een haarlijn onder de header. Er is geen overlay-scrim, geen blur en geen schuifanimatie.

## Shapes

**Radius is overal 0.** Dat geldt ook voor knoppen, invoervelden, screenshots, de focus-ring en een eventuele portretfoto. Haaks is de structurele positie van de Swiss-richting: elk element is een rechthoek in het grid. Één afgeronde hoek zou meteen lezen als een vergissing. Het `rounded`-blok bevat daarom alleen `none`, zodat componenten er expliciet naar verwijzen en niemand een radius "vergeten" kan toevoegen.

Randen worden in proza gespecificeerd omdat het componentschema geen `borderColor` kent. Ze zijn wel normatief:

- **Invoervelden** hebben geen kader, alleen een **onderlijn van 1px in `on-surface`**. Die inktlijn haalt 16:1 en voldoet ruim aan de 3:1 voor UI-componenten. Bij focus wordt de onderlijn 2px in `primary`. Bij een fout wordt hij 2px in `error`.
- **`button-secondary`** heeft een rand van 1px in `on-surface`. Bij hover wordt de tekst `primary` en de rand `primary`.
- **Focus-ring** voor alle interactieve elementen: 2px outline in `primary`, offset 2px. Die haalt 5,9:1 op `surface` en 5,4:1 op `neutral`.
- **Links** in lopende tekst zijn onderstreept (1px, offset 0.2em, kleur `on-surface`). Bij hover worden tekst en onderstreping `primary`.

## Components

**Navigatie (`nav-link`, `nav-link-hover`).** In `label-mono`, hoofdletters en inktkleur. Hover kleurt rood. De actieve pagina krijgt een onderstreping van 1px in inkt en wordt níét rood: "hier ben je" is geen actie.

**Links (`link`, `link-hover`).** In rust inkt met onderstreping, bij hover en focus rood. Dit is de kern van de accentregel: rood verschijnt waar de cursor is, niet overal waar geklikt kan worden.

**Primaire knop (`button-primary`, `button-primary-hover`, `button-primary-active`).** Een carmine vulling met papieren tekst in `label-mono`, hoofdletters, 16px padding en radius 0. Bij hover wordt de vulling `primary-strong` (Deep Crimson) en bij indrukken `primary-deep` (Night Bordeaux). Dat zijn drie lichtheden van één pigment, zonder lift, schaal of schaduw. **Hooguit één per pagina**: "Neem contact op" op Home en "Verstuur" op Contact. Projects heeft er geen.

**Secundaire knop (`button-secondary`).** Inkttekst op papier met een inktrand van 1px. Wordt gebruikt voor "Bekijk live ↗". Er is geen derde knopniveau. Wat minder belangrijk is, wordt een tekstlink.

**Projectrij (`project-row`, `project-row-hover`).** De belangrijkste component van de site. Een rij over de volle gridbreedte met daarin indexnummer, titel, type, jaar en live-link (zie Layout). Haarlijn erboven en eronder. Bij hover wordt de achtergrond `neutral` en de titel `primary`, beide direct, met als enige tussenstap de 80ms-kleurovergang. Op mobiel klapt de rij om naar twee regels: nummer + titel, en daaronder jaar + type in `project-meta`.

**Projectdetail (`project-title`, `project-subhead`, `project-meta`).** De titel staat in `headline-lg`. Tussenkoppen ("Probleem", "Aanpak", "Resultaat") staan in `headline-sm` en hebben meer ruimte erboven (48px) dan eronder (8px). Metadata zoals stack, rol en jaar staat in `data-md` in potloodgrijs.

**Screenshot (`screenshot-frame`).** Een `neutral`-vlak met de afbeelding erin, verhouding 16:10, radius 0. Daaronder een bijschrift in `body-sm`, secondary. Gebruik geen device-frames, geen schuine 3D-perspectieven en geen schaduw. Afbeeldingen zijn `loading="lazy"` en hebben vaste afmetingen tegen layout shift.

**Klok (`clock`).** Mono, tabular figures, formaat `AMS HH:MM:SS` en een update per seconde. Bij `prefers-reduced-motion` blijft hij gewoon tikken, want het is een tekstwissel en geen animatie.

**Formulier (`input`, `input-label`, `input-error`).** Het label staat boven het veld in `label-mono`, secondary en hoofdletters. Het veld zelf heeft `body-md` op papier met alleen een onderlijn (zie Shapes). Een foutmelding verschijnt direct onder het veld in `body-sm`, roest, en begint altijd met "Fout:" gevolgd door wat er moet gebeuren ("Fout: vul een geldig e-mailadres in"). Placeholders worden niet gebruikt als labels.

**Bevestiging (`form-confirmation`).** Een `neutral`-vlak met 24px padding, dat het formulier vervangt na verzending. Eén zin in inkt ("Bericht ontvangen. Je hoort binnen één werkdag van me."). Geen groen, geen vinkje-animatie, geen confetti.

**Sectielabel (`section-label`).** In `label-mono`, secondary, hoofdletters, met optioneel een telling ("Projecten — 07"). Het staat boven elke inhoudssectie, op de lijn van kolom 1.

**Scheidingslijn (`divider`).** Een haarlijn van 1px in `border`. De primaire structuurdrager van de site.

## Do's and Don'ts

- **Do** houd `primary` (#BA1F33, Carmine) beperkt tot hover- en focus-states en tot maximaal één `button-primary` per pagina. Zodra iets in rust rood is zonder de ene actie van de pagina te zijn, verliest het rood zijn betekenis.
- **Don't** maak de actieve navigatielink rood. "Je bent hier" geef je aan met een inkt-onderstreping.
- **Don't** gebruik `primary-deep` (Night Bordeaux) ergens anders dan op de ingedrukte primaire knop, en voeg Lobster Pink of een andere roze/rode tint niet alsnog toe. Er is één wijzer.
- **Don't** gebruik een radius groter dan 0, op welk element dan ook, ook niet op een avatar of een tag.
- **Don't** voeg een schaduw, gradiënt, blur of glaseffect toe. Als iets moet loskomen, gebruik dan ruimte, een haarlijn of de stap van `surface` naar `neutral`.
- **Do** lijn alles uit op het 12-koloms grid, ook screenshots en de knop. Controleer dat met een grid-overlay (bijv. een toggle op `Shift+G` in development). Een Swiss-layout die een paar pixels scheef staat, is slechter dan geen systeem.
- **Don't** centreer tekst, op geen enkele pagina en bij geen enkel formaat. Alles is flush-left.
- **Do** zet elk getal, jaartal, indexnummer, tijdstip en elke stack-opsomming in IBM Plex Mono met tabular figures.
- **Don't** introduceer een derde gewicht (geen 500 of 600) of een derde font.
- **Do** geef elk project een werkende `Bekijk live ↗`-link. Een project zonder live versie hoort onderaan of niet op de site.
- **Don't** gebruik device-mockups, iconen-in-gekleurde-vierkantjes, skill-voortgangsbalken of een "Over mij"-sectie met emoji.
- **Don't** animeer op scroll. Niets fadet in, niets schuift binnen. De klok is het enige dat beweegt.
- **Do** begin elke foutmelding met "Fout:" en zeg wat er moet gebeuren. Kleur alleen is nooit genoeg, en roest is bewust geen rood.
- **Don't** gebruik `#FFFFFF` of `#000000`, ook niet als achtergrond van screenshots of in de OG-image. Gebruik `surface` en `on-surface`.
- **Do** schrijf concrete tekst: "Webshop voor een Utrechtse fietsenmaker, Next.js, live sinds 2025" en niet "Ik bouw moderne, schaalbare webervaringen". Specifieke tekst is korter, en kortere tekst past in dit grid.
