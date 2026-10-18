(function () {
  const posts = Array.isArray(window.BLOG_POSTS) ? window.BLOG_POSTS.slice() : [];
  const listEl = document.getElementById("post-list");
  const emptyEl = document.getElementById("empty");
  const personBar = document.getElementById("person-bar");
  const trackBar = document.getElementById("track-bar");
  const viewLabel = document.getElementById("view-label");
  const countEl = document.getElementById("post-count");
  const tabs = Array.from(document.querySelectorAll("[data-view]"));

  const TRACKS = [
    { id: "all", label: "全部" },
    { id: "openai", label: "OpenAI · Codex" },
    { id: "cursor", label: "Grok Bot · Cursor" },
  ];

  let view = "latest";
  let selectedHandle = "all";
  let selectedTrack = "all";

  function normalizeHandle(post) {
    if (post.handle) return String(post.handle).replace(/^@/, "");
    if (post.url) {
      const m = String(post.url).match(/x\.com\/([^\/\?#]+)/i);
      if (m && m[1] && m[1].toLowerCase() !== "i") return m[1];
    }
    return "";
  }

  function normalizeTrack(post) {
    const t = String(post.track || "").toLowerCase();
    if (t === "cursor" || t === "grok" || t === "grokbot" || t === "bot") return "cursor";
    return "openai";
  }

  function trackLabel(id) {
    const found = TRACKS.find((t) => t.id === id);
    return found ? found.label : id;
  }

  function people(inTrack) {
    const map = new Map();
    posts.forEach((p) => {
      if (inTrack && inTrack !== "all" && normalizeTrack(p) !== inTrack) return;
      const handle = normalizeHandle(p);
      if (!handle) return;
      if (!map.has(handle)) {
        map.set(handle, {
          handle,
          person: p.person || handle,
          track: normalizeTrack(p),
        });
      }
    });
    return [...map.values()].sort((a, b) =>
      a.handle.localeCompare(b.handle, "en", { sensitivity: "base" })
    );
  }

  function sorted(items) {
    return items.slice().sort((a, b) => {
      if (a.date === b.date) return b.id.localeCompare(a.id);
      return a.date < b.date ? 1 : -1;
    });
  }

  function filtered() {
    let items = posts;
    if (selectedTrack !== "all") {
      items = items.filter((p) => normalizeTrack(p) === selectedTrack);
    }
    if (view === "person" && selectedHandle !== "all") {
      items = items.filter((p) => normalizeHandle(p) === selectedHandle);
    }
    return sorted(items);
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function personLabel(post) {
    const handle = normalizeHandle(post);
    const name = post.person || handle;
    return handle ? `${name} · @${handle}` : name;
  }

  function card(post) {
    const tags = (post.keywords || [])
      .map((k) => `<li>${escapeHtml(k)}</li>`)
      .join("");
    const handle = normalizeHandle(post);
    const profile = handle ? `https://x.com/${encodeURIComponent(handle)}` : "";
    const personHtml = profile
      ? `<a class="person" href="${escapeHtml(profile)}" rel="noopener noreferrer" target="_blank">${escapeHtml(personLabel(post))}</a>`
      : `<span class="person">${escapeHtml(personLabel(post))}</span>`;
    const track = normalizeTrack(post);
    const trackHtml = `<span class="track-tag track-${escapeHtml(track)}">${escapeHtml(trackLabel(track))}</span>`;
    return `<article class="card">
      <div class="meta">
        <time datetime="${escapeHtml(post.date)}">${escapeHtml(post.date)}</time>
        ${personHtml}
        ${trackHtml}
      </div>
      <p class="summary">${escapeHtml(post.summary)}</p>
      <ul class="keywords" aria-label="关键字">${tags}</ul>
      <p class="link-row">
        <a href="${escapeHtml(post.url)}" rel="noopener noreferrer" target="_blank">原文链接</a>
      </p>
    </article>`;
  }

  function renderTracks() {
    if (!trackBar) return;
    trackBar.hidden = false;
    trackBar.innerHTML = TRACKS.map((item) => {
      const pressed = selectedTrack === item.id ? "true" : "false";
      return `<button type="button" class="chip track-chip" data-track="${escapeHtml(item.id)}" aria-pressed="${pressed}">${escapeHtml(item.label)}</button>`;
    }).join("");
  }

  function renderPeople() {
    if (!personBar) return;
    if (view !== "person") {
      personBar.hidden = true;
      personBar.innerHTML = "";
      return;
    }
    personBar.hidden = false;
    const opts = [{ handle: "all", person: "全部" }, ...people(selectedTrack)];
    if (selectedHandle !== "all" && !opts.some((o) => o.handle === selectedHandle)) {
      selectedHandle = "all";
    }
    personBar.innerHTML = opts
      .map((item) => {
        const value = item.handle;
        const label = value === "all" ? "全部人物" : `@${item.handle}`;
        const pressed = selectedHandle === value ? "true" : "false";
        const title =
          value === "all" ? "全部人物" : `${item.person} (@${item.handle})`;
        return `<button type="button" class="chip" data-handle="${escapeHtml(value)}" title="${escapeHtml(title)}" aria-pressed="${pressed}">${escapeHtml(label)}</button>`;
      })
      .join("");
  }

  function selectedLabel() {
    if (selectedHandle === "all") return "全部人物";
    const found = people("all").find((p) => p.handle === selectedHandle);
    return found ? `@${found.handle}` : `@${selectedHandle}`;
  }

  function render() {
    tabs.forEach((tab) => {
      const on = tab.dataset.view === view;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.classList.toggle("is-active", on);
    });
    if (viewLabel) {
      const trackPart =
        selectedTrack === "all" ? "" : ` · ${trackLabel(selectedTrack)}`;
      viewLabel.textContent =
        view === "latest"
          ? `每日最新${trackPart}`
          : selectedHandle === "all"
            ? `按人物 · 全部${trackPart}`
            : `按人物 · ${selectedLabel()}${trackPart}`;
    }
    renderTracks();
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
      if (view === "latest") selectedHandle = "all";
      render();
    });
  });

  if (trackBar) {
    trackBar.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-track]");
      if (!btn) return;
      selectedTrack = btn.dataset.track;
      selectedHandle = "all";
      render();
    });
  }

  if (personBar) {
    personBar.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-handle]");
      if (!btn) return;
      selectedHandle = btn.dataset.handle;
      render();
    });
  }

  render();
})();
