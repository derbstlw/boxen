# AC Einigkeit Elmshorn – Website

Statische deutsche Vereinsseite auf Basis von Astro und Bootstrap 5.

## Lokal prüfen

```powershell
cd ac-einigkeit-website
npm install
npm run dev
```

Der lokale Server zeigt die angezeigte URL (standardmäßig `http://localhost:4321`). Für einen Produktions-Build:

```powershell
npm run build
npm run preview
```

## Artikel hinzufügen

Neue Markdown-Dateien werden unter `src/content/articles/` abgelegt. Das dokumentierte Frontmatter-Format liegt in `public/articles.md` und ist auf der Seite über den Link „Dokumentiertes Markdown-Format“ erreichbar.

Jeder Artikel benötigt mindestens `title`, `date`, `summary` und kann `image` sowie `draft` enthalten. Entwürfe mit `draft: true` erscheinen nicht in Listen oder Artikel-Routen.

## GitHub Pages einrichten

1. Das Projekt in ein **öffentliches** GitHub-Repository übernehmen (GitHub Pages ist im kostenlosen GitHub-Tarif für öffentliche Repositories verfügbar).
2. Unter **Settings → Pages** als Quelle **GitHub Actions** auswählen und als Custom Domain `ac-einigkeit-elmshorn.de` eintragen.
3. Den Branch `main` (oder `master`) pushen. Der Workflow `.github/workflows/deploy-pages.yml` baut und veröffentlicht das Projekt.
4. Falls GitHub die Pages-Workflow-Berechtigungen anfordert, diese in den Repository-Einstellungen erlauben.

Wird Pages erst nach dem ersten Push aktiviert, den Workflow unter **Actions → Deploy GitHub Pages → Run workflow** manuell starten oder einen neuen Commit pushen.

Die Domain ist in `public/CNAME` hinterlegt. GitHub Pages stellt Hosting und HTTPS ohne zusätzliche Hostinggebühr bereit. Die Domainregistrierung selbst bleibt davon getrennt und muss beim bisherigen Registrar verlängert werden. Vor dem Umzug muss ein Club-Administrator die DNS-Einträge beim Registrar auf die von GitHub Pages angegebenen Werte umstellen. Astro erhält die Website-URL und den Basispfad im Deployment automatisch aus der Pages-Konfiguration.

## Eigene Domain

Das Projekt ändert keine DNS-Einträge. Die DNS-Konfiguration erfolgt durch einen Club-Administrator beim Domain-Registrar:

- `ac-einigkeit-elmshorn.de` ist eine Apex-Domain. Beim Registrar müssen die aktuell von GitHub Pages dokumentierten A-/AAAA-Einträge gesetzt werden.
- Die Domain wird unter **Settings → Pages → Custom domain** eingetragen; anschließend HTTPS aktivieren.
- Vor der Veröffentlichung müssen die DNS-Einträge verifiziert und die übliche Fortpflanzungszeit abgewartet werden.

## Noch vor dem Launch vom Verein bestätigen

- Aktuelle Trainingszeiten, Altersgruppen und Teilnahmebedingungen
- Kontakt-E-Mail, Telefon, Zuständigkeit und Probetraining
- Vereinsgeschichte und Funktionsinhaber
- Rechtlich geprüfte Texte für Impressum und Datenschutz
- Erlaubnis zur Verwendung eines offiziellen Logos oder anderer Bildrechte
