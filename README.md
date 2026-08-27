# shijieliu.com

This is a GitHub Pages-style academic homepage for Shijie Liu, adapted from Jon Barron's public website source code:

https://github.com/jonbarron/jonbarron.github.io

## Files to Edit

- `index.html`: profile text, links, news, papers, projects, teaching, service
- `stylesheet.css`: visual style inherited from the Jon Barron template
- `cv/`: Awesome-CV source for your CV
- `data/ShijieLiu-CV.pdf`: the PDF linked from the homepage
- `images/ShijieLiu.svg`: replace with your real profile photo, for example `images/ShijieLiu.jpg`
- `images/particle_wake.png`: replace or add paper thumbnails
- `data/`: put your CV PDF, bio text, BibTeX files, and other downloadable files here, then update the links in `index.html`
- `CNAME`: custom domain, currently `shijieliu.com`

## GitHub Pages Setup

1. Create a GitHub repository. The easiest personal-site option is `YOUR_USERNAME.github.io`.
2. Push these files to the repository's `main` branch.
3. In GitHub, open Settings -> Pages and publish from the `main` branch root.
4. In Settings -> Pages -> Custom domain, enter `shijieliu.com`.
5. Set your domain DNS records as GitHub Pages instructs.

For the apex domain `shijieliu.com`, GitHub currently lists these `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www.shijieliu.com`, add a `CNAME` record pointing to:

```text
YOUR_USERNAME.github.io
```

GitHub's docs for custom domains:

https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site
