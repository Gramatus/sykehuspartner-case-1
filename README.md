# Forberedelser
1. Last ned eller klon dette repository.
2. Last ned og installer node.js. Jeg har brukt siste versjon av node 10, men antageligvis vil nyeere versjoner også virke. Siste versjon av node 10 kan lastes ned her: [Node.js latest-v10.x]([dd](https://nodejs.org/dist/latest-v10.x/)), f.eks. node-v10.24.0-x64.msi.
3. Jeg anbefaler å laste ned [Visual Studio Code](https://code.visualstudio.com/), men her står du fritt.
4. Kjør følgende kommandolinje fra mappen hvor du har lastet ned repo, dette vil installere alle andre avhengigheter du trenger:
```
npm install
```

# Prosjektstruktur
* Koden du skal skrive ligger i mappen `src`. Lag nye mapper og filer etter ønske og behov.
* Når du bygger koden legger filene seg i mappen `dist`.
* HTML-siden og CSS ligger i mappen `webpage`.

# Bygg
Når du gjør endringer i koden så må prosjektet ditt bygges. Det kan du gjøre med denne kommandoen:
```
npx webpack
```

## Watch mode
Hvis du starter watch mode så vil koden automatisk bygges pånytt hver gang du lagrer en fil (så fremt alt virker etter planen). Bruk denne kommandoen:
```
npx webpack -w
```

# Ressurser
* [React: Tutorial](https://reactjs.org/tutorial/tutorial.html)
> ***NB:** Det er en viktig feil i tutorial, den sier at du må ha "class components" for å ha "state". Men det er ikke lenger tilfelle, som beskrevet i dokumentasjonen for hooks du finner kobling til under.*
* [React: State Hooks](https://reactjs.org/docs/hooks-state.html)
* [Typescript dokumentasjon](https://www.typescriptlang.org/docs/)

# Sammenheng mellom komponentene
Løsningen skal oppfylle følgende krav:
* Den skal lages med React og skrives i Typescript
* Den skal lages med funksjonelle komponenter, ikke klasser
* Når du trykker «OK» så skal teksten fra tekstboksen i komponent B vises i tekstboksen i komponent A
* Når du trykker «Avbryt» så skal teksten i tekstboksen i komponent A fjernes
* Når du trykker på DIV’en i komponent B så skal den skifte farge. Her skal følgende også være oppfylt:
  * Hvilken farge som vises er «internal state» for komponent B
  * Fargen endres ved at klassen som settes på div’en endres avhengig av state
