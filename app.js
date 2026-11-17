/* =========================================================
   LEGUIDEABDL.FR — MOTEUR JAVASCRIPT PRINCIPAL (V2)
   ========================================================= */
const FALLBACK_BOUTIQUES = [{"id": "diaper-minister", "nom": "Diaper-Minister", "pays": "🇫🇷 France", "zone": "France", "categories": ["Multimarques", "Couches", "Bodys", "Accessoires"], "description": "Distributeur spécialisé basé en France. Catalogue complet (Rearz, Crinklz, ABU, Bambino) avec expédition rapide sans frais de douane.", "discretionNote": 5, "emballage": "Carton 100 % brun neutre sans logo", "colisNeutre": true, "pointRelais": true, "libelleBancaire": "Société générique discrète", "url": "https://www.diaper-minister.com"}, {"id": "abdl-factory", "nom": "ABDL Factory", "pays": "🇳🇱 Pays-Bas", "zone": "Union Européenne", "categories": ["Multimarques", "Couches", "Accessoires"], "description": "Boutique européenne proposant des packs d'essai à l'unité, des couches imprimées et des accessoires livrés partout en Europe.", "discretionNote": 5, "emballage": "Boîte neutre renforcée", "colisNeutre": true, "pointRelais": true, "libelleBancaire": "Nom commercial neutre", "url": "https://www.abdlfactory.com"}, {"id": "onesies-down-under", "nom": "Onesies Down Under", "pays": "🇪🇺 Entrepôt UE", "zone": "Union Européenne", "categories": ["Bodys", "Accessoires"], "description": "Référence des bodys adultes imprimés en coton stretch doux, avec coupes spécialement pensées pour un maintien parfait.", "discretionNote": 4, "emballage": "Pochette opaque neutre", "colisNeutre": true, "pointRelais": false, "libelleBancaire": "ODU Apparel", "url": "https://onesiesdownunder.com"}, {"id": "save-express", "nom": "Save Express", "pays": "🇩🇪 Allemagne", "zone": "Union Européenne", "categories": ["Multimarques", "Couches"], "description": "Grossiste allemand historique offrant des tarifs très compétitifs à la pièce ou au carton sur de nombreuses marques.", "discretionNote": 4, "emballage": "Carton neutre (option discrète)", "colisNeutre": true, "pointRelais": true, "libelleBancaire": "Save Express GmbH", "url": "https://www.saveexpress.de"}];
const FALLBACK_EVENTS = [{"id": "munch-paris", "titre": "Munch Mensuel Parisien", "ville": "📍 Paris / Île-de-France", "date": "Samedi 12 Décembre 2026", "heure": "14h30 - 18h00", "lieu": "Salon de thé calme (Paris centre, communiqué après validation)", "banniere": "assets/images/banniere-event.svg", "resume": "Rencontre mensuelle le samedi après-midi autour d'un goûter convivial. Ouvert aux nouveaux membres majeurs après présentation.", "texte": "Le Munch mensuel parisien est l'occasion idéale pour échanger dans un cadre détendu, bienveillant et 100 % en tenue civile classique (dress code : vanille).\n\nQue vous soyez nouveau dans la communauté ou habitué des rencontres, l'équipe d'accueil veille à ce que chacun puisse discuter à son rythme autour d'une boisson chaude ou d'une pâtisserie.\n\nPour garantir la sécurité et la discrétion de tous les participants, l'adresse exacte du lieu à Paris est transmise uniquement après une courte prise de contact via le formulaire du site.", "images": ["assets/images/illustration-1.svg"]}, {"id": "rencontre-lyon", "titre": "Après-midi Jeux de Société à Lyon", "ville": "📍 Lyon / Rhône-Alpes", "date": "Samedi 19 Décembre 2026", "heure": "15h00 - 19h00", "lieu": "Bar à jeux partenaire (Lyon Presqu'île)", "banniere": "assets/images/banniere-event.svg", "resume": "Rassemblement bimestriel dans un espace calme pour discuter, jouer et faire connaissance dans la région lyonnaise.", "texte": "Retrouvez les membres de la région Auvergne-Rhône-Alpes autour d'une sélection de jeux de société coopératifs et d'ambiance.\n\nLe format jeux de société permet de briser la glace très facilement, même pour les personnes les plus timides lors d'une première rencontre.\n\nInscription obligatoire au préalable pour réserver le bon nombre de tables auprès de l'établissement.", "images": []}, {"id": "gouter-sud-ouest", "titre": "Rencontre & Goûter Sud-Ouest", "ville": "📍 Bordeaux & Côte Basque", "date": "Dimanche 10 Janvier 2027", "heure": "15h00 - 18h30", "lieu": "Centre-ville (Bordeaux / Bayonne en alternance)", "banniere": "assets/images/banniere-event.svg", "resume": "Sortie conviviale trimestrielle réunissant les membres de Nouvelle-Aquitaine et d'Occitanie.", "texte": "Ce rendez-vous trimestriel permet aux membres du Sud-Ouest de se retrouver sans avoir à monter jusqu'à Paris.\n\nLa rencontre se déroule en deux temps : un accueil café/goûter dans un salon calme, suivi pour ceux qui le souhaitent d'une balade en petit groupe.\n\nContactez l'équipe via le formulaire en précisant votre ville pour recevoir les informations de covoiturage et le point de rendez-vous.", "images": []}];
const FALLBACK_BLOG = [{"id": "commander-en-discretion", "titre": "Comment commander en point relais ou Locker en toute sérénité ?", "categorie": "Guide Discrétion", "date": "15 Novembre 2026", "auteur": "L'équipe LeGuideABDL", "tempsLecture": "4 min de lecture", "banniere": "assets/images/banniere-blog.svg", "resume": "Emballages bruns anonymes, nom d'expéditeur neutre et retrait en consigne automatique : toutes les astuces pour éviter les regards indiscrets.", "texte": "Passer sa première commande en ligne génère souvent une appréhension légitime : le livreur peut-il deviner le contenu du colis ? Le nom de la boutique apparaît-il sur l'étiquette ?\n\nLa bonne nouvelle, c'est que les boutiques spécialisées référencées dans notre annuaire avec la mention « Colis 100 % neutre » utilisent exclusivement des cartons bruns épais, sans aucun logo ni ruban adhésif imprimé. L'adresse d'expédition mentionne uniquement une raison sociale logistique générique.\n\nPour une tranquillité maximale, privilégiez la livraison en consigne automatique (Locker 24/7) ou en point relais : vous récupérez votre carton de manière autonome avec un simple code sur votre téléphone, sans jamais craindre qu'un voisin réceptionne le colis à votre place.", "images": ["assets/images/illustration-1.svg"]}, {"id": "plastique-vs-tissu", "titre": "Finition plastique (PE) ou tissu respirant (Cloth-like) : que choisir ?", "categorie": "Comparatif", "date": "10 Novembre 2026", "auteur": "L'équipe LeGuideABDL", "tempsLecture": "5 min de lecture", "banniere": "assets/images/banniere-blog.svg", "resume": "Analyse du confort thermique, du maintien des attaches et de la discrétion sonore selon votre usage de jour ou de nuit.", "texte": "Le choix entre une enveloppe externe en plastique (polyéthylène) et une enveloppe façon tissu respirant dépend avant tout du contexte dans lequel vous portez votre protection.\n\nLes modèles à finition plastique (PE) offrent un maintien supérieur, ne se détendent pas sous le poids et bloquent parfaitement les odeurs. En contrepartie, ils peuvent produire un léger bruissement sous des vêtements fins.\n\nÀ l'inverse, les modèles à voile externe micro-respirant sont plus silencieux et plus frais en été, surtout lorsqu'ils sont associés à un body ajusté qui assure le maintien tout au long de la journée.", "images": []}, {"id": "choisir-taille-body", "titre": "Bien choisir la taille de son body adulte : le guide complet", "categorie": "Guide des Tailles", "date": "2 Novembre 2026", "auteur": "L'équipe LeGuideABDL", "tempsLecture": "3 min de lecture", "banniere": "assets/images/banniere-blog.svg", "resume": "Comment mesurer son buste et pourquoi il est souvent conseillé de vérifier la longueur du tronc avant d'acheter.", "texte": "Contrairement à un t-shirt classique, l'ajustement d'un body adulte repose principalement sur la hauteur du buste (mesurée de l'épaule jusqu'à l'entrejambe en passant par le dos).\n\nLes marques spécialisées comme Onesies Down Under ou Diaper-Minister intègrent déjà une coupe plus longue pour accueillir une protection épaisse sans tirer sur les pressions.\n\nSi vous êtes entre deux tailles dans le tableau du fabricant, prenez la taille inférieure pour un maintien près du corps sous vos vêtements, ou la taille supérieure pour un confort ample façon pyjama d'intérieur.", "images": []}];
const FALLBACK_HISTOIRES = [{"id": "premiere-commande-temoignage", "titre": "Ma première commande : dépasser l'appréhension des débuts", "categorie": "Témoignage", "date": "14 Novembre 2026", "auteur": "Témoignage anonyme", "tempsLecture": "4 min de lecture", "banniere": "assets/images/banniere-histoire.svg", "resume": "Comment j'ai osé passer ma première commande en ligne, le choix du point relais et le sentiment de détente une fois le colis récupéré.", "texte": "Pendant longtemps, j'ai hésité à franchir le pas d'une commande sur une boutique spécialisée. J'avais peur que le carton soit trop reconnaissable ou que le commerçant du point relais se doute de quelque chose.\n\nEn vérifiant les avis sur la discrétion des expéditions, j'ai finalement commandé un pack d'échantillons livré en consigne automatique. Le jour du retrait, tout s'est fait en trente secondes : un carton brun totalement banal, parfaitement scellé.\n\nRétrospectivement, cette étape m'a permis d'accepter cette facette de ma vie avec beaucoup plus de sérénité et de déculpabiliser complètement.", "images": ["assets/images/illustration-1.svg"]}, {"id": "week-end-hors-du-temps", "titre": "Un dimanche pluvieux hors du temps", "categorie": "Récit Cosy", "date": "5 Novembre 2026", "auteur": "Plume Pastel", "tempsLecture": "6 min de lecture", "banniere": "assets/images/banniere-histoire.svg", "resume": "Une parenthèse de douceur loin du rythme professionnel : chocolat chaud, plaid pastel et lâcher-prise complet à la maison.", "texte": "La pluie tambourinait doucement contre les vitres depuis le début de la matinée, offrant le prétexte parfait pour mettre le téléphone en mode avion et oublier les obligations de la semaine.\n\nDans le salon baigné d'une lumière tamisée, tout était prêt pour une journée cocooning : un grand plaid doux sur le canapé, une tasse de chocolat chaud fumant et un dessin animé familier en fond sonore.\n\nS'accorder ces quelques heures de régression choisie, dans le calme et la sécurité de son chez-soi, reste l'un des meilleurs remèdes contre le stress accumulé au quotidien.", "images": []}];

// Détecte automatiquement si la page est dans un sous-dossier (/events/, /blog/, /histoires/)
const IS_SUBFOLDER =
  window.location.pathname.includes("/events/") ||
  window.location.pathname.includes("/blog/") ||
  window.location.pathname.includes("/histoires/");
const ROOT_PREFIX = IS_SUBFOLDER ? "../" : "./";

function resolveAssetPath(path) {
  if (!path) return ROOT_PREFIX + "assets/images/banniere-blog.svg";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) return path;
  const clean = path.replace(/^\.\//, "").replace(/^\.\.\//, "");
  return ROOT_PREFIX + clean;
}

document.addEventListener("DOMContentLoaded", () => {
  /* 1. POP-UP -18 ANS (FADE IN / FADE OUT + FLOU) */
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

  /* 2. MINI POP-UP SPONSO AVEC CROIX (×) */
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

  /* 3. VOLET DU HAUT RÉTRACTABLE (RÉDUIRE ▲ / MENU ▼) */
  const siteHeader = document.getElementById("site-header");
  const btnCollapseHeader = document.getElementById("btn-collapse-header");
  const btnExpandHeader = document.getElementById("btn-expand-header");

  if (siteHeader && sessionStorage.getItem("leguideabdl_header_collapsed") === "true") {
    siteHeader.classList.add("is-collapsed");
  }

  if (btnCollapseHeader && siteHeader) {
    btnCollapseHeader.addEventListener("click", () => {
      siteHeader.classList.add("is-collapsed");
      sessionStorage.setItem("leguideabdl_header_collapsed", "true");
    });
  }

  if (btnExpandHeader && siteHeader) {
    btnExpandHeader.addEventListener("click", () => {
      siteHeader.classList.remove("is-collapsed");
      sessionStorage.setItem("leguideabdl_header_collapsed", "false");
    });
  }

  /* 4. BOUTONS SORTIE RAPIDE (MODE DISCRET) */
  document.querySelectorAll(".js-discreet-exit").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.replace("https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal");
    });
  });

  /* 5. BANDEAU RGPD / CGU */
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

  /* 6. AFFICHAGE & FILTRES DES BOUTIQUES (boutiques.html) */
  const boutiquesGrid = document.getElementById("boutiques-grid");
  if (boutiquesGrid) {
    let allBoutiques = [];
    const resultsCount = document.getElementById("results-count");
    const searchInput = document.getElementById("search-input");
    const filterCategory = document.getElementById("filter-category");
    const filterCountry = document.getElementById("filter-country");
    const filterDiscreet = document.getElementById("filter-discreet");

    fetch(ROOT_PREFIX + "data/boutiques.json")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        allBoutiques = data;
        renderBoutiques(allBoutiques);
      })
      .catch(() => {
        allBoutiques = FALLBACK_BOUTIQUES;
        renderBoutiques(allBoutiques);
      });

    function renderBoutiques(list) {
      boutiquesGrid.innerHTML = "";
      if (resultsCount) {
        resultsCount.textContent = `${list.length} boutique${list.length > 1 ? "s" : ""} disponible${list.length > 1 ? "s" : ""}`;
      }
      if (list.length === 0) {
        boutiquesGrid.innerHTML = `<p style="text-align:center;color:#527196;">Aucune boutique ne correspond à ta recherche.</p>`;
        return;
      }
      list.forEach((shop) => {
        const card = document.createElement("article");
        card.className = "item-card";
        const tagsHtml = (shop.categories || []).map((c) => `<span class="tag">${c}</span>`).join("");
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
        boutiquesGrid.appendChild(card);
      });
    }

    function applyBoutiqueFilters() {
      const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
      const cat = filterCategory ? filterCategory.value : "all";
      const country = filterCountry ? filterCountry.value : "all";
      const onlyDiscreet = filterDiscreet ? filterDiscreet.checked : false;

      const filtered = allBoutiques.filter((shop) => {
        const matchesText =
          shop.nom.toLowerCase().includes(query) ||
          shop.description.toLowerCase().includes(query) ||
          (shop.categories || []).some((c) => c.toLowerCase().includes(query));
        const matchesCat = cat === "all" || (shop.categories || []).includes(cat);
        const matchesCountry = country === "all" || shop.zone === country;
        const matchesDiscreet = !onlyDiscreet || shop.colisNeutre === true;
        return matchesText && matchesCat && matchesCountry && matchesDiscreet;
      });
      renderBoutiques(filtered);
    }

    if (searchInput) searchInput.addEventListener("input", applyBoutiqueFilters);
    if (filterCategory) filterCategory.addEventListener("change", applyBoutiqueFilters);
    if (filterCountry) filterCountry.addEventListener("change", applyBoutiqueFilters);
    if (filterDiscreet) filterDiscreet.addEventListener("change", applyBoutiqueFilters);
  }

  /* 7. LISTE DES EVENTS CLIQUABLES (events.html) */
  const eventsGrid = document.getElementById("events-grid");
  if (eventsGrid) {
    fetch(ROOT_PREFIX + "data/events.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((list) => renderEventsList(list))
      .catch(() => renderEventsList(FALLBACK_EVENTS));

    function renderEventsList(list) {
      eventsGrid.innerHTML = "";
      list.forEach((ev) => {
        const card = document.createElement("a");
        card.className = "item-card";
        card.href = `events/evenement.html?id=${encodeURIComponent(ev.id)}`;
        card.innerHTML = `
          <div>
            <img src="${resolveAssetPath(ev.banniere)}" alt="${ev.titre}" class="card-banner-thumb">
            <div class="card-top">
              <h3 class="card-title">${ev.titre}</h3>
              <span class="badge-country">${ev.ville}</span>
            </div>
            <div class="tags-row">
              <span class="tag">🗓️ ${ev.date}</span>
              <span class="tag">🕒 ${ev.heure}</span>
            </div>
            <p class="card-desc">${ev.resume}</p>
          </div>
          <span class="btn-primary" style="width:100%;">Voir la page de l'événement →</span>
        `;
        eventsGrid.appendChild(card);
      });
    }
  }

  /* 8. LISTE DU BLOG CLIQUABLE (blog.html) */
  const blogGrid = document.getElementById("blog-grid");
  if (blogGrid) {
    fetch(ROOT_PREFIX + "data/blog.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((list) => renderBlogList(list))
      .catch(() => renderBlogList(FALLBACK_BLOG));

    function renderBlogList(list) {
      blogGrid.innerHTML = "";
      list.forEach((art) => {
        const card = document.createElement("a");
        card.className = "item-card";
        card.href = `blog/article.html?id=${encodeURIComponent(art.id)}`;
        card.innerHTML = `
          <div>
            <img src="${resolveAssetPath(art.banniere)}" alt="${art.titre}" class="card-banner-thumb">
            <div class="tags-row">
              <span class="tag">${art.categorie}</span>
              <span class="tag">⏱️ ${art.tempsLecture || "4 min"}</span>
            </div>
            <h3 class="card-title" style="margin-bottom:10px;">${art.titre}</h3>
            <p class="card-desc">${art.resume}</p>
          </div>
          <span class="btn-secondary" style="width:100%;">Lire l'article complet →</span>
        `;
        blogGrid.appendChild(card);
      });
    }
  }

  /* 9. LISTE DES HISTOIRES CLIQUABLES (histoires.html) */
  const histoiresGrid = document.getElementById("histoires-grid");
  if (histoiresGrid) {
    fetch(ROOT_PREFIX + "data/histoires.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((list) => renderHistoiresList(list))
      .catch(() => renderHistoiresList(FALLBACK_HISTOIRES));

    function renderHistoiresList(list) {
      histoiresGrid.innerHTML = "";
      list.forEach((st) => {
        const card = document.createElement("a");
        card.className = "item-card";
        card.href = `histoires/histoire.html?id=${encodeURIComponent(st.id)}`;
        card.innerHTML = `
          <div>
            <img src="${resolveAssetPath(st.banniere)}" alt="${st.titre}" class="card-banner-thumb">
            <div class="tags-row">
              <span class="tag">${st.categorie}</span>
              <span class="tag">✍️ ${st.auteur || "Anonyme"}</span>
            </div>
            <h3 class="card-title" style="margin-bottom:10px;">${st.titre}</h3>
            <p class="card-desc">${st.resume}</p>
          </div>
          <span class="btn-secondary" style="width:100%;">Lire l'histoire complète →</span>
        `;
        histoiresGrid.appendChild(card);
      });
    }
  }

  /* 10. CHARGEMENT D'UNE PAGE DÉDIÉE (events/evenement.html, blog/article.html, histoires/histoire.html) */
  const detailContainer = document.getElementById("detail-page-container");
  if (detailContainer) {
    const type = detailContainer.dataset.type; // "event", "blog", "histoire"
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get("id");

    const fileMap = {
      event: "data/events.json",
      blog: "data/blog.json",
      histoire: "data/histoires.json"
    };
    const fallbackMap = {
      event: FALLBACK_EVENTS,
      blog: FALLBACK_BLOG,
      histoire: FALLBACK_HISTOIRES
    };

    fetch(ROOT_PREFIX + fileMap[type])
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((list) => renderDetailPage(list, itemId, type))
      .catch(() => renderDetailPage(fallbackMap[type], itemId, type));

    function renderDetailPage(list, id, contentType) {
      const item = list.find((x) => x.id === id) || list[0];
      if (!item) return;

      document.title = `${item.titre} — LeGuideABDL.fr`;
      const bannerImg = document.getElementById("detail-banner-img");
      const titleEl = document.getElementById("detail-title");
      const textEl = document.getElementById("detail-text");
      const galleryEl = document.getElementById("detail-gallery");
      const sidebarList = document.getElementById("sidebar-info-list");

      if (bannerImg) {
        bannerImg.src = resolveAssetPath(item.banniere);
        bannerImg.alt = item.titre;
      }
      if (titleEl) titleEl.textContent = item.titre;

      if (textEl) {
        const paragraphs = (item.texte || item.resume || "")
          .split(/\n\s*\n|\n/)
          .filter((p) => p.trim().length > 0);
        textEl.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");
      }

      if (galleryEl) {
        galleryEl.innerHTML = "";
        (item.images || []).forEach((imgUrl) => {
          if (!imgUrl) return;
          const img = document.createElement("img");
          img.src = resolveAssetPath(imgUrl);
          img.alt = item.titre;
          galleryEl.appendChild(img);
        });
      }

      if (sidebarList) {
        if (contentType === "event") {
          sidebarList.innerHTML = `
            <div class="sidebar-info-item"><strong>📅 Date</strong>${item.date || "À venir"}</div>
            <div class="sidebar-info-item"><strong>🕒 Heure</strong>${item.heure || "Après-midi"}</div>
            <div class="sidebar-info-item"><strong>📍 Lieu & Ville</strong>${item.ville}<br>${item.lieu || ""}</div>
          `;
        } else {
          sidebarList.innerHTML = `
            <div class="sidebar-info-item"><strong>🏷️ Rubrique</strong>${item.categorie || "Guide"}</div>
            <div class="sidebar-info-item"><strong>📅 Publication</strong>${item.date || "2026"}</div>
            <div class="sidebar-info-item"><strong>✍️ Auteur</strong>${item.auteur || "L'équipe"}</div>
            <div class="sidebar-info-item"><strong>⏱️ Lecture</strong>${item.tempsLecture || "4 min"}</div>
          `;
        }
      }
    }
  }
});
