const DEFAULT_BOUTIQUES = [
  {
    nom: "Diaper-Minister",
    pays: "🇫🇷 France",
    zone: "France",
    categories: ["Multimarques", "Couches", "Bodys", "Accessoires"],
    description: "Distributeur spécialisé basé en France. Catalogue complet (Rearz, Crinklz, ABU, Bambino) avec expédition rapide sans frais de douane.",
    discretionNote: 5,
    emballage: "Carton 100 % brun neutre sans logo",
    colisNeutre: true,
    pointRelais: true,
    libelleBancaire: "Société générique discrète",
    url: "https://www.diaper-minister.com"
  },
  {
    nom: "ABDL Factory",
    pays: "🇳🇱 Pays-Bas",
    zone: "Union Européenne",
    categories: ["Multimarques", "Couches", "Accessoires"],
    description: "Boutique européenne proposant des packs d'essai à l'unité, des couches imprimées et des accessoires livrés partout en Europe.",
    discretionNote: 5,
    emballage: "Boîte neutre renforcée",
    colisNeutre: true,
    pointRelais: true,
    libelleBancaire: "Nom commercial neutre",
    url: "https://www.abdlfactory.com"
  },
  {
    nom: "Onesies Down Under",
    pays: "🇪🇺 Entrepôt UE",
    zone: "Union Européenne",
    categories: ["Bodys", "Accessoires"],
    description: "Référence des bodys adultes imprimés en coton stretch doux, avec coupes spécialement pensées pour un maintien parfait.",
    discretionNote: 4,
    emballage: "Pochette opaque neutre",
    colisNeutre: true,
    pointRelais: false,
    libelleBancaire: "ODU Apparel",
    url: "https://onesiesdownunder.com"
  },
  {
    nom: "Save Express",
    pays: "🇩🇪 Allemagne",
    zone: "Union Européenne",
    categories: ["Multimarques", "Couches"],
    description: "Grossiste allemand historique offrant des tarifs très compétitifs à la pièce ou au carton sur de nombreuses marques.",
    discretionNote: 4,
    emballage: "Carton neutre (option discrète)",
    colisNeutre: true,
    pointRelais: true,
    libelleBancaire: "Save Express GmbH",
    url: "https://www.saveexpress.de"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     1. POP-UP -18 ANS (FADE IN / FADE OUT + FLOU)
     ========================================= */
  const ageOverlay = document.getElementById("age-overlay");
  const btnEnter = document.getElementById("btn-enter");
  const btnLeave = document.getElementById("btn-leave");

  if (ageOverlay && localStorage.getItem("leguideabdl_age_ok") !== "true") {
    setTimeout(() => {
      ageOverlay.classList.add("is-visible");
    }, 50);
  }

  if (btnEnter && ageOverlay) {
    btnEnter.addEventListener("click", () => {
      localStorage.setItem("leguideabdl_age_ok", "true");
      ageOverlay.classList.remove("is-visible");
    });
  }

  if (btnLeave) {
    btnLeave.addEventListener("click", () => {
      window.location.href = "https://www.google.fr";
    });
  }

  /* =========================================
     2. MINI POP-UP SPONSO AVEC CROIX (×)
     ========================================= */
  const sponsoPopup = document.getElementById("sponso-popup");
  const closeSponso = document.getElementById("close-sponso");

  if (sponsoPopup && sessionStorage.getItem("leguideabdl_sponso_closed") === "true") {
    sponsoPopup.style.display = "none";
  }

  if (closeSponso && sponsoPopup) {
    closeSponso.addEventListener("click", () => {
      sponsoPopup.style.opacity = "0";
      setTimeout(() => {
        sponsoPopup.style.display = "none";
      }, 250);
      sessionStorage.setItem("leguideabdl_sponso_closed", "true");
    });
  }

  /* =========================================
     3. BANDEAU RGPD & CGU
     ========================================= */
  const cookieBanner = document.getElementById("cookie-banner");
  const btnAcceptCookies = document.getElementById("btn-accept-cookies");

  if (cookieBanner && localStorage.getItem("leguideabdl_rgpd_ok") !== "true") {
    cookieBanner.classList.add("is-active");
  }

  if (btnAcceptCookies && cookieBanner) {
    btnAcceptCookies.addEventListener("click", () => {
      localStorage.setItem("leguideabdl_rgpd_ok", "true");
      cookieBanner.classList.remove("is-active");
    });
  }

  /* =========================================
     4. BOUTON MODE DISCRET
     ========================================= */
  const btnDiscreet = document.getElementById("btn-discreet");
  if (btnDiscreet) {
    btnDiscreet.addEventListener("click", () => {
      window.location.replace("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal");
    });
  }

  /* =========================================
     5. AFFICHAGE & FILTRES DES BOUTIQUES
     ========================================= */
  const grid = document.getElementById("boutiques-grid");
  if (!grid) return;

  let allBoutiques = [];
  const resultsCount = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const filterCategory = document.getElementById("filter-category");
  const filterCountry = document.getElementById("filter-country");
  const filterDiscreet = document.getElementById("filter-discreet");

  fetch("./data/boutiques.json")
    .then((res) => {
      if (!res.ok) throw new Error("Fallback vers liste intégrée");
      return res.json();
    })
    .then((data) => {
      allBoutiques = data;
      renderBoutiques(allBoutiques);
    })
    .catch(() => {
      allBoutiques = DEFAULT_BOUTIQUES;
      renderBoutiques(allBoutiques);
    });

  function renderBoutiques(list) {
    grid.innerHTML = "";
    if (resultsCount) {
      resultsCount.textContent = `${list.length} boutique${list.length > 1 ? "s" : ""} disponible${list.length > 1 ? "s" : ""}`;
    }

    if (list.length === 0) {
      grid.innerHTML = `<p style="color:#527196;">Aucune boutique ne correspond à ta recherche.</p>`;
      return;
    }

    list.forEach((shop) => {
      const card = document.createElement("article");
      card.className = "item-card";

      const tagsHtml = shop.categories
        .map((cat) => `<span class="tag">${cat}</span>`)
        .join("");

      card.innerHTML = `
        <div>
          <div class="card-top">
            <h3 class="card-title">${shop.nom}</h3>
            <span class="badge-country">${shop.pays}</span>
          </div>
          <div class="tags-row">${tagsHtml}</div>
          <p class="card-desc">${shop.description}</p>
        </div>
        <div>
          <div class="shop-meta">
            <div>🔒 <strong>Discrétion :</strong> ${shop.discretionNote}/5 (${shop.emballage})</div>
            <div>📦 <strong>Point Relais :</strong> ${shop.pointRelais ? "Oui" : "Non"}</div>
            <div>💳 <strong>Relevé bancaire :</strong> ${shop.libelleBancaire}</div>
          </div>
          <a href="${shop.url}" target="_blank" rel="noopener noreferrer nofollow" class="btn-primary" style="width:100%;">
            Visiter la boutique ↗
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const cat = filterCategory ? filterCategory.value : "all";
    const country = filterCountry ? filterCountry.value : "all";
    const onlyDiscreet = filterDiscreet ? filterDiscreet.checked : false;

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
