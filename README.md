# shijieliu.com

A compact academic personal homepage for Shijie Liu, inspired by lightweight research websites such as Deepak Pathak, Jon Barron, and Tairan He.

## Edit Content

Most homepage text is in `site-data.js`:

- Profile text and links: `name`, `role`, `affiliation`, `bio`, `links`
- Updates: `news`
- Research cards: `research`
- Publication-style entries: `publications`
- Experience and skills: `experience`

Replace `assets/profile-placeholder.svg` with a real photo when ready. Keep the filename or update the `<img>` path in `index.html`.

## Preview Locally

This is a dependency-free static site. You can open `index.html` directly or run a tiny local server:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Publish

For GitHub Pages, push this directory to a repository and keep `CNAME` set to:

```text
shijieliu.com
```

Then point the domain DNS records to the chosen host.
