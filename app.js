document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     1. GESTION POP-UP +18 ANS (FADE IN / OUT)
     ========================================= */
  const ageOverlay = document.getElementById("age-overlay");
  const btnEnter = document.getElementById("btn-enter");
  const btnLeave = document.getElementById("btn-leave");

  // Vérifie si l'utilisateur a déjà validé sa majorité
  const isVerified = localStorage.getItem("leguideabdl_age_verified");

  if (!isVerified) {
    // Léger délai pour déclencher l'animation progressive du flou et du fondu
    requestAnimationFrame(() => {
      setTimeout(() => {
        ageOverlay.classList.add("is-visible");
      }, 60);
    });
  }

  btnEnter.addEventListener("click", () => {
    localStorage.setItem("leguideabdl_age_verified", "true");
    // Retire la classe : le flou et la pop-up disparaissent progressivement en fade
    ageOverlay.classList.remove("is-visible");
  });

  btnLeave.addEventListener("click", () => {
    window.location.href = "https://www.google.fr";
  });

  /* =========================================
     2. BOUTON MODE DISCRET (SORTIE RAPIDE)
     ========================================= */
  const btnDiscreet = document.getElementById("btn-discreet");
  btnDiscreet.addEventListener("click", () => {
    window.location.replace("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal");
  });

  /* =========================================
     3. CHARGEMENT ET FILTRAGE DES BOUTIQUES
     ========================================= */
  let allBoutiques = [];
  const grid = document.getElementById("boutiques-grid");
  const resultsCount = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const filterCategory = document.getElementById("filter-category");
  const filterCountry = document.getElementById("filter-country");
  const filterDiscreet = document.getElementById("filter-discreet");

  fetch("data/boutiques.json")
    .then((response) => response.json())
    .then((data) => {
      allBoutiques = data;
      renderBoutiques(allBoutiques);
    })
    .catch((err) => {
      console.error("Erreur de chargement des boutiques :", err);
      resultsCount.textContent = "Impossible de charger la liste des boutiques.";
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

  searchInput.addEventListener("input", applyFilters);
  filterCategory.addEventListener("change", applyFilters);
  filterCountry.addEventListener("change", applyFilters);
  filterDiscreet.addEventListener("change", applyFilters);
});
