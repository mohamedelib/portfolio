Rules
Progressive enhancement: De site moet altijd werken, Ook zonder javascript. Zorg dat je code gebruikt die widely available is en maak een progressive enhancement laag erop (als dit nodig is).
Wanneer je CSS styling gebruikt die niet widely available is (schrijf je een comment met Progressive enhancement) Gebruik hier voor fallbacks of @supports.

Semantische HTML: zorg dat de HTML semantisch is. Kies de juiste HTML elementen en maak code die geen errors krijgt in een HTML validator van W3. Vermijd zoveel mogelijk

<div> elements. Vermijd Aria labels. Maak zo min mogelijk classes aan. Als je een class aan de section heb gegeven, roep hem in css aan dan met .classnaam p, .classnaam a.

CSS: Probeer zo min mogelijke CSS te gebruiken. Zet comments bij dingen die newly available zijn. Vermijd Overflow: hidden. Gebruik altijd custom properties waar nodig.
Elementen die selectable zijn moeten altijd
een hover en focus state hebben.
Follow HTML order in CSS
Nest je CSS Zie hier onder een voorbeeld:

.hero {
padding: 1.5rem 1rem 3rem;
color: var(--color-light);

h1 {
font-family: var(--font-display);
font-weight: 800;
line-height: 0.9;
letter-spacing: -0.02em;
}

footer {
text-transform: uppercase;
}
}

DRY principes: Probeer zo min mogelijk jezelf te herhalen in code. Als het al ergens is vastgesteld niet nog een keer typen.

Responsiveness: Begin in de code altijd met mobile, breid dan uit naar Middle scherm en dan naar Desktop.

Middle layout: min-width: 48em;
Dekstop: min-width: 64em;

Toegankelijkheid: Zorg dat een Image altijd een alt heeft, Zorg dat je niet kan vastlopen in tab navigatie.
Alle aanraakpunten moeten 24px groot zijn of voldoende ruimte overlaten. Buttons hebben een toegankelijke naam. Achtergrond en voorgrond hebben goede color contrast.
Links moeten toegankelijke namen hebben. Hele pagina moet een main landmark hebben en een title.

Naming:

Use meaningful names for classes, IDs, variables, and function names.
Use kebab-case for classes, css variables and id's in HTML/CSS
Use camelCase in Javascript for JS variables and functions.
English is the standard for naming.
Be consistent in your naming

Skills:
Performant images. Als je een image heb, zorg ervoor dat er een picture element omheen staat. Die dan avif gebruikt. Anders de normale png of jpg etc.

Voor code probeer je zoveel mogelijk aan de FDND code conventies te houden
https://docs.fdnd.nl/conventies.html
