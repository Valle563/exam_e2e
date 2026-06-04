# Läslistan E2E-tester

E2E-tester för Läslistan med Playwright.

## Köra testerna

npm run test-e2e

## Vad som testas

- Navigering mellan vyer
- Katalog
- Lägg till bok
- Mina böcker
- Statistik

## Varför längre tester i E2E?

I enhetstester testar man små isolerade funktioner - varje test ska vara kort och testa en sak.

I E2E-tester däremot vill man ofta ha längre tester som testar ett helt flöde. Till exempel:

- Lägg till en bok
- Navigera till katalogen
- Favoritmarkera boken
- Kontrollera att den syns i Mina böcker

Anledningen är att varje test i Playwright startar en ny webbläsare vilket tar tid.
Har man många korta tester tar det mycket längre tid än att ha färre men längre tester
som testar hela flöden på en gång.
