# Issue: Kontaktformular — E-Mail-Validierung und Fehlermeldung

**Status:** offen
**Labels:** feature

## Ausgangslage

Das Kontaktformular auf der Startseite nimmt aktuell jede Eingabe entgegen — auch eine leere oder offensichtlich ungültige E-Mail-Adresse. Es gibt keine Rückmeldung an die Nutzerin oder den Nutzer, wenn etwas fehlt oder falsch ist.

## Ziel

Beim Absenden wird geprüft, ob Name, E-Mail und Nachricht ausgefüllt sind und ob die E-Mail-Adresse ein plausibles Format hat (Zeichen `@` und ein Punkt danach). Bei einem Fehler erscheint eine verständliche Meldung direkt im Formular, ohne die Seite neu zu laden.

## Akzeptanzkriterien

- [ ] Absenden mit leerem Namen, leerer E-Mail oder leerer Nachricht zeigt eine Fehlermeldung und sendet nicht ab
- [ ] Absenden mit einer E-Mail ohne `@` oder ohne Punkt danach zeigt eine Fehlermeldung
- [ ] Bei gültigen Eingaben erscheint weiterhin die bisherige Erfolgsmeldung
- [ ] Die Fehlermeldung ist sichtbar im Formularbereich verortet, nicht nur in der Konsole

## Kontext

- Betroffene Dateien: `index.html` (Formular-Markup), `kontakt.js` (Absende-Logik), ggf. `style.css` (Fehler-Stil)
- Kein Backend — reine Client-Validierung für diese Demo
