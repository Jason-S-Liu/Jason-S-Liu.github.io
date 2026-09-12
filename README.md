# shijieliu.com

This is a GitHub Pages academic homepage for Shijie Liu. The current layout is inspired by https://tairanhe.com/, with design lineage from Jon Barron:

https://github.com/jonbarron/jonbarron.github.io

## Files to Edit

- `index.html`: profile text, links, news, papers, projects, teaching, service
- `stylesheet.css`: responsive typography, profile layout, and publication list
- `cv/`: Awesome-CV source for your CV
- `data/ShijieLiu-CV.pdf`: the PDF linked from the homepage
- `images/ShijieLiu.jpg`: current profile portrait
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

## Google Indexing

The homepage includes basic search metadata, structured data, `robots.txt`, and `sitemap.xml`.

After publishing, use Google Search Console:

1. Open https://search.google.com/search-console
2. Add the property `https://shijieliu.com/`
3. Verify ownership with either a DNS TXT record in Alibaba Cloud DNS or an HTML verification file in this repository root.
4. Submit this sitemap: `https://shijieliu.com/sitemap.xml`
5. Use URL Inspection for `https://shijieliu.com/` and click "Request indexing".

Google can take days to weeks to show a new site in search results.

## Publications

Each publication in `index.html` has a stable anchor, publisher link, and (when supplied) a local PDF link. PDF filenames containing Chinese characters or spaces are URL-encoded. `images/publications/` contains selected core framework and result figures rendered directly from regions of the supplied PDFs; `data/bibtex/` contains downloadable citations. Keep each inline citation and its `.bib` file in sync. The expandable abstract panels reproduce the English abstracts from the supplied PDFs, with line wrapping and PDF extraction artifacts normalized. J2 was transcribed from the PDF because its text layer fragments English words. All nine listed publications now have local PDF links and core figure previews.

The unnumbered coal-shed PDF is a separate 2024 journal publication, distinct from the C1 conference manuscript. J1 is listed with its formal 2024 publication year according to the PDF.

To regenerate publication figure previews, run `python3 scripts/render_publication_figures.py` with Poppler (`pdftoppm`) installed. The script records each source page, figure description, and crop coordinates; it does not redraw or alter scientific results.
