document.addEventListener("DOMContentLoaded", () => {
  /* 1. POP-UP +18 ANS */
  const ageOverlay = document.getElementById("age-overlay");
  const btnEnter = document.getElementById("btn-enter");
  const btnLeave = document.getElementById("btn-leave");

  if (ageOverlay && !localStorage.getItem("leguideabdl_age_verified")) {
    setTimeout(() => {
      ageOverlay.classList.add("is-visible");
    }, 60);
  }

  if (btnEnter) {
    btnEnter.addEventListener("click", () => {
      localStorage.setItem("leguideabdl_age_verified", "true");
      ageOverlay.classList.remove("is-visible");
    });
  }

  if (btnLeave) {
    btnLeave.addEventListener("click", () => {
      window.location.href = "https://www.google.fr";
    });
  }

  /* 2. BOUTON MODE DISCRET */
  const btnDiscreet = document.getElementById("btn-discreet");
  if (btnDiscreet) {
    btnDiscreet.addEventListener("click", () => {
      window.location.replace("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal");
    });
  }

  /* 3. CHARGEMENT ET FILTRAGE DES BOUTIQUES */
  let allBoutiques = [];
  const grid = document.getElementById("boutiques-grid");
  const resultsCount = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const filterCategory = document.getElementById("filter-category");
  const filterCountry = document.getElementById("filter-country");
  const filterDiscreet = document.getElementById("filter-discreet");

  fetch("./data/boutiques.json")
    .then((response) => {
      if (!response.ok) throw new Error("Fichier JSON introuvable");
      return response.json();
    })
    .then((data) => {
      allBoutiques = data;
      renderBoutiques(allBoutiques);
    })
    .catch((err) => {
      console.error(err);
      resultsCount.textContent = "Erreur : vérifie que le fichier s'appelle bien data/boutiques.json sur GitHub.";
    });

  function renderBoutiques(list) {
    grid.innerHTML = "";
    resultsCount.textContent = `${list.length} boutique${list.length > 1 ? "s" : ""} référencée${list.length > 1 ? "s" : ""}`;

    if (list.length === 0) {
      grid.innerHTML = `<p style="color:#64748b;">Aucune boutique ne correspond à vos critères.</p>`;
      return;
    }

    list.forEach((shop) => {
      const card = document.createElement("article");
      card.className = "shop-card";

      const tagsHtml = shop.categories
        .map((cat) => `<span class="tag">${cat}</span>`)
        .join("");

      card.innerHTML = `
        <div>
          <div class="shop-top">
            <h3 class="shop-title">${shop.nom}</h3>
            <span class="shop-country">${shop.pays}</span>
          </div>
          <div class="shop-tags">${tagsHtml}</div>
          <p class="shop-desc">${shop.description}</p>
        </div>
        <div>
          <div class="shop-meta">
            <div>🔒 <strong>Discrétion :</strong> ${shop.discretionNote}/5 (${shop.emballage})</div>
            <div>📦 <strong>Point Relais :</strong> ${shop.pointRelais ? "Oui" : "Non"}</div>
            <div>💳 <strong>Libellé bancaire :</strong> ${shop.libelleBancaire}</div>
          </div>
          <a href="${shop.url}" target="_blank" rel="noopener noreferrer nofollow" class="btn-visit">
            Visiter la boutique ↗
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    const cat = filterCategory.value;
    const country = filterCountry.value;
    const onlyDiscreet = filterDiscreet.checked;

    const filtered = allBoutiques.filter((shop) => {
      const matchesText =
        shop.nom.toLowerCase().includes(query) ||
        shop.description.toLowerCase().includes(query) ||
        shop.categories.some((c) => c.toLowerCase().includes(query));

      const matchesCat = cat === "all" || shop.categories.includes(cat);
      const matchesCountry = country === "all" || shop.zone === country;
      const matchesDiscreet = !onlyDiscreet || shop.colisNeutre === true;

      return matchesText && matchesCat && matchesCountry && matchesDiscreet;
    });

    renderBoutiques(filtered);
  }

  if (searchInput) searchInput.addEventListener("input", applyFilters);
  if (filterCategory) filterCategory.addEventListener("change", applyFilters);
  if (filterCountry) filterCountry.addEventListener("change", applyFilters);
  if (filterDiscreet) filterDiscreet.addEventListener("change", applyFilters);
});
