const site = window.SHIJIE_SITE;

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

const makeLink = ({ label, url }) => {
  const link = document.createElement("a");
  link.textContent = label;
  link.href = url;
  if (url.startsWith("http")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  return link;
};

const renderLinks = (id, links) => {
  const container = document.getElementById(id);
  container.replaceChildren(...links.map(makeLink));
};

const renderList = (id, items, renderer) => {
  const container = document.getElementById(id);
  container.replaceChildren(...items.map(renderer));
};

const renderNews = () => {
  renderList("news-list", site.news, (item) => {
    const row = document.createElement("li");
    const date = document.createElement("span");
    const text = document.createElement("span");
    date.className = "news-date";
    date.textContent = item.date;
    text.textContent = item.text;
    row.append(date, text);
    return row;
  });
};

const renderInterests = () => {
  renderList("interests", site.interests, (interest) => {
    const item = document.createElement("li");
    item.textContent = interest;
    return item;
  });
};

const renderResearch = (topic = "All") => {
  const filtered =
    topic === "All" ? site.research : site.research.filter((item) => item.topic === topic);

  renderList("research-grid", filtered, (item) => {
    const article = document.createElement("article");
    const tag = document.createElement("span");
    const title = document.createElement("h3");
    const summary = document.createElement("p");

    article.className = "research-card";
    tag.className = "tag";
    tag.textContent = item.topic;
    title.textContent = item.title;
    summary.textContent = item.summary;

    article.append(tag, title, summary);
    return article;
  });
};

const renderTopicFilters = () => {
  const container = document.getElementById("topic-filters");
  const buttons = site.topics.map((topic, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = topic;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.addEventListener("click", () => {
      container
        .querySelectorAll("button")
        .forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      renderResearch(topic);
    });
    return button;
  });
  container.replaceChildren(...buttons);
};

const renderPublications = () => {
  renderList("publication-list", site.publications, (item) => {
    const article = document.createElement("article");
    const venue = document.createElement("div");
    const title = document.createElement("h3");
    const authors = document.createElement("p");
    const links = document.createElement("div");

    article.className = "publication";
    venue.className = "publication-meta";
    authors.className = "authors";
    links.className = "publication-links";

    venue.textContent = item.venue;
    title.textContent = item.title;
    authors.textContent = item.authors;
    links.replaceChildren(...item.links.map(makeLink));

    article.append(venue, title, authors, links);
    return article;
  });
};

const renderExperience = () => {
  renderList("experience-list", site.experience, (item) => {
    const article = document.createElement("article");
    const date = document.createElement("div");
    const body = document.createElement("div");
    const title = document.createElement("h3");
    const text = document.createElement("p");

    article.className = "timeline-item";
    date.className = "timeline-date";
    date.textContent = item.date;
    title.textContent = item.title;
    text.textContent = item.text;

    body.append(title, text);
    article.append(date, body);
    return article;
  });
};

setText("name", site.name);
setText("role", site.role);
setText("affiliation", site.affiliation);
setText("bio", site.bio);
setText("research-question", site.researchQuestion);
setText("contact-note", site.contactNote);
setText("footer-name", site.name);
setText("last-updated", `Last updated ${site.lastUpdated}`);

renderLinks("profile-links", site.links);
renderLinks("contact-links", site.links.filter((link) => ["Email", "GitHub", "Google Scholar"].includes(link.label)));
renderInterests();
renderNews();
renderTopicFilters();
renderResearch();
renderPublications();
renderExperience();
