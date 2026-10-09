(function () {
  const posts = Array.isArray(window.BLOG_POSTS) ? window.BLOG_POSTS.slice() : [];
  const listEl = document.getElementById("post-list");
  const emptyEl = document.getElementById("empty");
  const personBar = document.getElementById("person-bar");
  const viewLabel = document.getElementById("view-label");
  const countEl = document.getElementById("post-count");
  const tabs = Array.from(document.querySelectorAll("[data-view]"));

  let view = "latest";
  let person = "all";

  function people() {
    return [...new Set(posts.map((p) => p.person))].sort((a, b) => a.localeCompare(b, "zh"));
  }

  function sorted(items) {
    return items.slice().sort((a, b) => {
      if (a.date === b.date) return b.id.localeCompare(a.id);
      return a.date < b.date ? 1 : -1;
    });
  }

  function filtered() {
    if (view === "person" && person !== "all") {
      return sorted(posts.filter((p) => p.person === person));
    }
    return sorted(posts);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function card(post) {
    const tags = (post.keywords || [])
      .map((k) => `<li>${escapeHtml(k)}</li>`)
      .join("");
    return `<article class="card">
      <div class="meta">
        <time datetime="${escapeHtml(post.date)}">${escapeHtml(post.date)}</time>
        <span class="person">${escapeHtml(post.person)}</span>
      </div>
      <p class="summary">${escapeHtml(post.summary)}</p>
      <ul class="keywords" aria-label="关键字">${tags}</ul>
      <p class="link-row">
        <a href="${escapeHtml(post.url)}" rel="noopener noreferrer" target="_blank">原文链接</a>
      </p>
    </article>`;
  }

  function renderPeople() {
    if (!personBar) return;
    if (view !== "person") {
      personBar.hidden = true;
      personBar.innerHTML = "";
      return;
    }
    personBar.hidden = false;
    const opts = ["all", ...people()];
    personBar.innerHTML = opts
      .map((name) => {
        const label = name === "all" ? "全部" : name;
        const pressed = person === name ? "true" : "false";
        return `<button type="button" class="chip" data-person="${escapeHtml(name)}" aria-pressed="${pressed}">${escapeHtml(label)}</button>`;
      })
      .join("");
  }

  function render() {
    tabs.forEach((tab) => {
      const on = tab.dataset.view === view;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.classList.toggle("is-active", on);
    });
    if (viewLabel) {
      viewLabel.textContent =
        view === "latest"
          ? "每日最新"
          : person === "all"
            ? "按人物 · 全部"
            : `按人物 · ${person}`;
    }
    renderPeople();
    const items = filtered();
    if (!items.length) {
      listEl.innerHTML = "";
      emptyEl.hidden = false;
      if (countEl) countEl.textContent = "";
      return;
    }
    emptyEl.hidden = true;
    listEl.innerHTML = items.map(card).join("");
    if (countEl) countEl.textContent = items.length ? `${items.length} SIGNAL` : "";
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      view = tab.dataset.view;
      if (view === "latest") person = "all";
      render();
    });
  });

  if (personBar) {
    personBar.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-person]");
      if (!btn) return;
      person = btn.dataset.person;
      render();
    });
  }

  render();
})();
