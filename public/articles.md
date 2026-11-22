# Artikel-Format für AC Einigkeit Elmshorn

Neue Meldungen werden als Markdown-Dateien in `src/content/articles/` abgelegt. Die Datei wird über den Dateinamen als URL-Slug verwendet, zum Beispiel `jahresrückblick-2027.md` unter `/aktuelles/jahresrueckblick-2027/`.

## Frontmatter

```yaml
---
title: "Titel der Meldung"
date: 2026-12-31
summary: "Kurze Zusammenfassung für die Übersichtsseite."
image: "/images/beispiel.jpg"
draft: false
---
```

| Feld | Pflicht | Bedeutung |
|---|---|---|
| `title` | Ja | Überschrift der Meldung |
| `date` | Ja | Datum im ISO-Format `JJJJ-MM-TT` |
| `summary` | Ja | Kurze Vorschau für Karten und Suchmaschinen |
| `image` | Nein | Optionaler Pfad zu einer Bilddatei unter `public/` |
| `draft` | Nein | Standardmäßig `false`; `true` bleibt nicht veröffentlicht |

Danach folgt der normale Markdown-Inhalt mit deutschen Überschriften.

## Artikel hinzufügen

1. Neue Datei in `src/content/articles/` anlegen.
2. Vor dem ersten Commit Frontmatter ausfüllen.
3. Bild optional in `public/images/` ablegen.
4. Artikel mit `draft: false` veröffentlichen.
5. Lokal mit `npm run build` prüfen.
