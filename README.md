# Teknisk dokumentation for Tema 7 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Vi ville gerne have en simpel mappe- og filstruktur, så alle i gruppen nemt kan have overblik og finde de filer, der hører til de sider, man har ansvar for.

- Vi oprettede de tre hoved-HTML-sider, index.html, produktliste.html og produkt.html, i projektets rodmappe. Fra rodmappen lavede vi derefter to undermapper. En til CSS-filer og en til JS-filer, hvor vi navngav de enkelte filer efter de tilhørende HTML-filer.

- Da vores tre hoved-HTML-sider var på plads, har vi efterfølgende oprettet nogle flere html-sider, hvor man kan læse mere om De Studerende Råd, som jo er vores afsender, ligesom vi har lavet en kontaktside og en side, hvor man kan indsende opskrifter. Disse undersider er også lavet med samme mappe- og filstruktur.

- Samlet set er vores projekt derfor organiseret sådan, at alle vores HTML-sider er placeret i rodmappen, mens de resterende filer er placeret i undermapper for at holde det simpelt og overskueligt i roden. I undermapperne er de samme filtyper samlet, med undtagelse af mappen Assets, således at der kun ligger css-filer i css-mappen osv.

Hvordan organiserer I billeder, fonte og andre ressourcer?

- Vi har oprettet en mappe med navnet assets, som er en mappe, der indeholder undermapper til billeder og andre relevante ressourcer - fx. favicon-filer. Det er sat op således assets/img/.... etc.
  Derudover har vi oprettet en mappe med navnet fonts for sig selv, hvor vi har lagt de forskellige Google fonte, som vi har downloadet og derefter konverteret til WOFF2-format.

Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)

- Vores boilerplate-filer har vi også placeret i vores assets-mappe. Begge med navnet “base”, for at indikere, at alle de basale styles og funktioner findes her. På den måde har vi kunnet samle alle de “overordnede filer” ét sted og derefter oprette alle de andre relevante filer et nyt sted.

Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?

- Vores CSS- og JavaScript-filer, der ikke er gældende på tværs af projektet, har vi lavet separate mapper til, hvori vi har placeret dem. Vi har lavet én mappe med navnet css og én mappe med navnet js. På den måde har vi kunnet bevare et overblik og sørge for, at de relevante filer er samlet ét sted.
  Vores HTML-filer har vi valgt ikke at placere i en mappe, men i stedet lade dem ligge i roden af vores struktur. Det har vi gjort, da det giver bedre URL’er og sikrer, at vores kodebase er simpel og let at tilgå, når vi arbejder sammen som team.

## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Til navngivningen af vores filer har vi sørget for, at der er ét gennemgående navn for hver fil på tværs af filtype. Så vores index-side hedder index.html, index.css og index.js. Og det samme for resten af siderne; produktliste.html, produktliste.css og produktliste.js og produkt.html, produkt.css og produkt.js. På den måde kan vi på tværs af gruppen se, hvad der hører sammen, og det gør det nemmere at rette i de filer, der passer sammen.

Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)

- Vi har gennemgående navngivet vores filer med små bogstaver, uden mellemrum og brug af underscore. På den måde har vi kunnet sikre konsistens i strukturen. Desuden er det vigtigt med denne kontinuitet for, at der ikke ville opstå problemer i URL’en på sitet og at siderne ikke kan findes korrekt, når man søger på dem.

## Link til scripts:

Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)

- Vores script-referencer i HTML’en har vi placeret i vores <head>-section med defer, hvilket betyder, at de vil blive hentet samtidigt med HTML-indholdet. De vil dog først blive eksekveret, når alt HTML-indholdet er indlæst, hvilket skaber en hurtigere indlæsningstid.

## Git branches:

Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)

- Som udgangspunkt forsøgte vi at navngive vores branches ud fra, hvad for noget indhold der var i gang med at blive arbejdet på deri. Fx. index laves, kontaktformular oprettes etc. Det gjorde vi for at holde det simpelt og nemt at forstå, hvad der blev lavet hvor. Virkeligheden var dog, at vi oplevede nogle problemer med vores git og branches, så der kom flere branches med afarter af det samme navn og også nogle med navnet test for at få det hele til at fungere. Dog havde vi på forhånd aftalt mundtligt, hvem der arbejdede på hvad, og derfor vidste vi godt, hvilke branches der hørte til hvem.

## Arbejdsflow:

Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?

- Vi udviklede en styleguide. Vi blev enige om et styletile, så alle var enige om udseendet på sitet. Vi ville gerne lave tre hovedsider, hvorfor vi uddelegerede de tre sider mellem tre af os, mens den fjerde fik ansvaret for de generelle ting, der skulle implementeres på alle sider såsom header, footer, lave logo mm. Har vi haft nogle ting, der skulle tilføjes til alle html-filer, eller nogle generelle ændringer til vores boilerplate, har vi sørget for at snakke sammen, så vi sikrede os, at der ikke opstod konflikter, når der skulle merges.

Hvordan sikrer I, at commit-beskeder er beskrivende?

- Vi har forsøgt at lave korte og præcise beskrivelser, så de er lette at forstå for alle, hvori vi beskriver, hvad der er blevet lavet, hvor og/eller på hvilken side.

Hvordan kommunikerer i om ændringer i main branchen når feature merges?

- Vi har været gode til at huske hinanden på at pull i main for at hente nyeste ændringer, inden man selv foretager sig noget. Derudover har vi generelt prøvet at huske hinanden på de forskellige trin, der er med alt fra at lave en ny branch, stage ændringer, commit, pull, push og merge, ligesom vi har siddet meget sammen, hvorfor det har været nemt at snakke højt om det.
  Vi benyttede os af dette hjælpeskema i begyndelsen, indtil de forskellige steps sad nogenlunde fast, og man fik sig en “rutine”:

## Kode:

Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)

- De funktioner, vi har skrevet i vores kode, bruger både function keyword og arrow functions.
  På vores index.js og produktliste.js er vores funktioner “function showRecipe (data)” (index.js, linje 7-8) samt “function showList (recipes)” (produktliste.js, linje 24-25) skrevet med function keyword.
  Vores fetch på både index.js, produktliste.js og produkt.js er skrevet som en arrow-function, hvor vi på en kortere og mere kompakt måde skriver funktionerne. Her bruges “ => ” (pil) til at definere funktionen, og den har en anden måde at håndtere “this” på i forhold til, hvis vi skriver funktionen med function keyword.

Beslut hvilken CSS selector i benyttes til referener i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)

- I henhold til CSS-selektorer har vi benyttet os af klasser til både CSS og JavaScript. I vores scripts er det f.eks. CSS-klasserne “.product_list_continaer”, “.index_cirkel” og .recipe_container, der anvendes i querySelectoren.
- Anvendelse af CSS Selector i JavaScript:
  I JavaScript bruges disse selektorer til at finde de HTML-elementer, der skal manipuleres eller opdateres, baseret på data (som hentes via fetch). CSS-selektorer som “querySelector ( )” giver et effektivt og fleksibelt middel til at vælge de ønskede elementer i DOM'en og ændre deres indhold eller udseende.

Skal filer have korte forklaringer som kommentarer?

- Der er gode grunde til at have kommentarer i JavaScript-filer. Hvis flere personer arbejder på den samme kode, hjælper kommentarer med at forklare, hvad forskellige dele af koden gør. Det gør det lettere for dem at forstå logikken, især hvis man ikke har skrevet koden selv. Derudover kan det være svært at huske præcist, hvorfor man valgte at implementere noget på en bestemt måde, når man f.eks. vender tilbage til gammel kode. Kommentarer kan også hjælpe, hvis man skal rette eller udvide koden på et senere tidspunkt, da man så hurtigere kan navigere rundt i filen.
  Det er generelt en god idé at holde kommentarerne korte og præcise. Kommentarer skal være en hjælp og ikke en erstatning for dårlig kode. Hvis du har skrevet en god, selvforklarende kode, er det ikke nødvendigt at overkomplicere det med unødvendige kommentarer. Kommentarer bør være en hjælp til at forstå, hvad koden gør, og hvorfor den gør det.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover

Filtrering af produkter:

- Filtrering af produkter baseret på brugerens valg sker gennem URL-parametre, hvor en bruger kan vælge en kategori (som f.eks. “italian”) og se kun de opskrifter, der matcher til den kategori.

Dynamisk visning af produkter i HTML:

- Produkterne vises dynamisk i HTML ved at hente data fra API’et og generere HTML-kode baseret på denne data. Dette gøres gennem funktioner som showRecipe og showList, hvor HTML markup bygges op og indsættes i DOM'en, så brugeren kan se produkterne i en liste eller som en enkelt opskrift.

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

- I vores scripts benyttes følgende API-endpoints:
  Hentning af opskrifter: https://dummyjson.com/recipes

Hentning af opskrifter baseret på kategori: https://dummyjson.com/recipes/tag/${mymeal}?limit=30, hvor {meal} her er en dynamisk værdi som fx "italian"
afhængig af, hvad der vælges.

Hentning af specifik opskrift: https://dummyjson.com/recipes/${productId},hvor {id}er opskriftens unikke id.

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?

- Funktionen showList (brugt i produktliste.js) genererer en liste af opskrifter baseret på en kategori (f.eks. "italian") og viser disse produkter dynamisk i HTML.

Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?

- recipes: En liste af opskrifter, som hentes fra API’et via URL med en kategori.

Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.

- I dette eksempel manipulerer funktionen kun DOM’en ved at generere HTML markup og indsætte den i et container-element, som i dette eksempel er product_list_container

- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

Eksempel på brug:
I Javascript fra produktliste.js:

// Funktionens kode:
function showList(recipes) {
console.log(recipes);
const markup = recipes
.map(
(recipe) =>
` <a href="produkt.html?id=${recipe.id}">
            <div class="product">
             <img src="https://cdn.dummyjson.com/recipe-images/${recipe.id}.webp" class="opskrift" alt="margherita" />
            <div class="border">
             <h3>${recipe.name}</h3>
             <p class="tid">Cooking time: ${recipe.cookTimeMinutes} minutes</p>
             <div class="boks">
               <p class="boks_indhold">Difficulty: ${recipe.difficulty}</p>
               <p class="boks_indhold">Cuisine: ${recipe.cuisine}</p>
             </div>
             <p class="rating">${recipe.rating}/ 5 ⭐</p>
               </div>
               </div>
           </a>
       `
)
.join("");
console.log(markup);
product_list_container.innerHTML = markup;
}
// Hvordan funktionen kaldes:
const url = `https://dummyjson.com/recipes/tag/${mymeal}?limit=30`;
console.log(url);
fetch(url)
.then((response) => response.json())
.then((data) => {
showList(data.recipes); // Brug den relevante nøgle, f.eks. data.recipes
});
