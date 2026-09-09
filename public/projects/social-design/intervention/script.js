/* ============================================
   Social Design: Die Rush-Hour des Lebens
   Logik
   ============================================ */

/* ---------- Aktions-Daten ---------- */
const actions = [
    // ===== SKALA-KATEGORIEN (beeinflussen das Alter) =====
    { id: 1, kategorie: "bildung", level: 1, icon: "📚", aktion: "im bachelor", effekte: { alter: 0 } },
    { id: 2, kategorie: "bildung", level: 2, icon: "📜", aktion: "bachelor", effekte: { alter: 2.5 } }, // war 3
    { id: 3, kategorie: "bildung", level: 3, icon: "💻", aktion: "im master", effekte: { alter: 0 } },
    { id: 4, kategorie: "bildung", level: 4, icon: "🎓", aktion: "master", effekte: { alter: 1.5 } }, // war 2
    { id: 5, kategorie: "bildung", level: 5, icon: "🧪", aktion: "doktorand:in", effekte: { alter: 0.8 } }, // war 1
    { id: 6, kategorie: "bildung", level: 6, icon: "🔬", aktion: "doktortitel", effekte: { alter: 2.5 } }, // war 3

    { id: 7, kategorie: "wohnen", level: 1, icon: "🏠", aktion: "bei eltern", effekte: { alter: 0 } },
    { id: 8, kategorie: "wohnen", level: 2, icon: "🛏️", aktion: "wg-zimmer", effekte: { alter: 0 } },
    { id: 9, kategorie: "wohnen", level: 3, icon: "🚪", aktion: "2-zimmer", effekte: { alter: 0.8 } }, // war 1
    { id: 10, kategorie: "wohnen", level: 4, icon: "🛋️", aktion: "3-5 zi. mieten", effekte: { alter: 0.8 } }, // war 1
    { id: 11, kategorie: "wohnen", level: 5, icon: "🏢", aktion: "3-5 zi. kaufen", effekte: { alter: 1.5 } }, // war 2
    { id: 12, kategorie: "wohnen", level: 6, icon: "🏡", aktion: "haus", effekte: { alter: 2.5 } }, // war 3

    { id: 13, kategorie: "anbindung", level: 1, icon: "🛒", aktion: "Grundlegende Infrastruktur", effekte: { alter: 0 } },
    { id: 14, kategorie: "anbindung", level: 2, icon: "🚋", aktion: "Gute ÖPNV-Anbindung", effekte: { alter: 0 } },
    { id: 15, kategorie: "anbindung", level: 3, icon: "🌳", aktion: "Nähe zu Parks & Spielplätzen", effekte: { alter: 0.8 } }, // war 1
    { id: 16, kategorie: "anbindung", level: 4, icon: "🏫", aktion: "Familienfreundlich & 'gute' Schulen", effekte: { alter: 0.8 } }, // war 1
    { id: 17, kategorie: "anbindung", level: 5, icon: "🏥", aktion: "Gesundheitsversorgung & sichere Wohnlage", effekte: { alter: 1.5 } }, // war 2
    { id: 18, kategorie: "anbindung", level: 6, icon: "💎", aktion: "Exklusive Wohngegend", effekte: { alter: 2.2 } }, // war 3

    { id: 19, kategorie: "partnerschaft", level: 1, icon: "🧍", aktion: "single", effekte: { alter: 0 } },
    { id: 20, kategorie: "partnerschaft", level: 2, icon: "👀", aktion: "dating-phase", effekte: { alter: 0.5 } }, // war 1
    { id: 21, kategorie: "partnerschaft", level: 3, icon: "🥂", aktion: "beziehung", effekte: { alter: 0.8 } }, // war 1
    { id: 22, kategorie: "partnerschaft", level: 4, icon: "📦", aktion: "zusammenziehen", effekte: { alter: 0.8 } }, // war 1
    { id: 23, kategorie: "partnerschaft", level: 5, icon: "💍", aktion: "verlobt", effekte: { alter: 0.8 } }, // war 1
    { id: 24, kategorie: "partnerschaft", level: 6, icon: "💒", aktion: "verheiratet", effekte: { alter: 1.5 } }, // war 2

    { id: 25, kategorie: "karriere", level: 1, icon: "☕", aktion: "praktikum (~15.000€)", effekte: { alter: 0.5 } }, // war 1
    { id: 26, kategorie: "karriere", level: 2, icon: "👨‍💻", aktion: "einstieg (~40.000€)", effekte: { alter: 0.8 } }, // war 1
    { id: 27, kategorie: "karriere", level: 3, icon: "💼", aktion: "fest (~55.000€)", effekte: { alter: 1.5 } }, // war 2
    { id: 28, kategorie: "karriere", level: 4, icon: "📈", aktion: "senior (~75.000€)", effekte: { alter: 2.2 } }, // war 3
    { id: 29, kategorie: "karriere", level: 5, icon: "👑", aktion: "führung (~100.000€)", effekte: { alter: 2.2 } }, // war 3
    { id: 30, kategorie: "karriere", level: 6, icon: "🚀", aktion: "c-level (>150.000€)", effekte: { alter: 3.0 } },  // war 4

    // ===== REISEN =====
    { id: 37, kategorie: "reisen", level: 1, icon: "🎒", aktion: "Backpacking-Trip", effekte: { alter: 0.5 } },
    { id: 38, kategorie: "reisen", level: 2, icon: "🚐", aktion: "Großer Camper-/Roadtrip", effekte: { alter: 0.3 } },
    { id: 39, kategorie: "reisen", level: 3, icon: "🚶", aktion: "Echte Solo-Reise", effekte: { alter: 0.2 } },
    { id: 40, kategorie: "reisen", level: 4, icon: "🌍", aktion: "Erasmussemester", effekte: { alter: 0.5 } },
    { id: 41, kategorie: "reisen", level: 5, icon: "🧘", aktion: "Sabbatical (Auszeit)", effekte: { alter: 1.0 } },
    { id: 42, kategorie: "reisen", level: 6, icon: "✈️", aktion: "Work & Travel / Auslandsjahr", effekte: { alter: 1.0 } },

    // ===== UMFELD =====
    { id: 43, kategorie: "umfeld", level: 1, icon: "🌾", aktion: "Dorf / Land", effekte: {} },
    { id: 44, kategorie: "umfeld", level: 2, icon: "🏘️", aktion: "Kleinstadt", effekte: {} },
    { id: 45, kategorie: "umfeld", level: 3, icon: "🏡", aktion: "Vorstadt", effekte: {} },
    { id: 46, kategorie: "umfeld", level: 4, icon: "🏙️", aktion: "Großstadt", effekte: {} },
    { id: 47, kategorie: "umfeld", level: 5, icon: "🌆", aktion: "Metropole", effekte: {} },

    // ===== SUPPORT-SYSTEM =====
    { id: 48, kategorie: "support", level: 1, icon: "🐺", aktion: "Sehr unabhängig", effekte: {} },
    { id: 49, kategorie: "support", level: 2, icon: "👵", aktion: "Familie in der Nähe", effekte: {} },
    { id: 50, kategorie: "support", level: 3, icon: "👯‍♂️", aktion: "Enge Wahlfamilie", effekte: {} },
    { id: 51, kategorie: "support", level: 4, icon: "🏘️", aktion: "Nachbarschaftshilfe", effekte: {} },
    { id: 52, kategorie: "support", level: 5, icon: "💸", aktion: "Gekaufter Support", effekte: {} },

    // ===== ARBEITSMODELL =====
    { id: 53, kategorie: "arbeitsmodell", level: 1, icon: "🏢", aktion: "Klassisch (Büro)", effekte: {} },
    { id: 54, kategorie: "arbeitsmodell", level: 2, icon: "🏠", aktion: "Volles Homeoffice", effekte: {} },
    { id: 55, kategorie: "arbeitsmodell", level: 3, icon: "⚖️", aktion: "Teilzeit / 4-Tage", effekte: {} },
    { id: 56, kategorie: "arbeitsmodell", level: 4, icon: "🌍", aktion: "Remote / Workation", effekte: {} },
    { id: 57, kategorie: "arbeitsmodell", level: 5, icon: "🚀", aktion: "Selbstständig", effekte: {} },

];

/* ---------- Konstanten ---------- */
const SCALE_CATEGORIES = [
    "bildung",
    "wohnen",
    "anbindung",
    "partnerschaft",
    "karriere",
    "reisen"
];
// Alle Zusatzkategorien sind jetzt Multi-Select (frei wählbar)
const EXTRA_MULTI = ["umfeld", "support", "arbeitsmodell"];
const ALL_CATEGORIES = [...SCALE_CATEGORIES, ...EXTRA_MULTI];
const KARRIERE_ALTERS_FAKTOR = [1.5, 1.5, 1.2, 1.0, 0.8, 0.6, 0.4];

const STEP_MAP = {
    "1": { num: 1, dashStep: null },
    "ist": { num: 2, dashStep: 1 },
    "wunsch": { num: 3, dashStep: 2 },
    "verzicht": { num: 4, dashStep: 3 },
    "reflexion": { num: 5, dashStep: null }
};

/* ---------- State ---------- */
let baseAge = 20;
let activeScreen = "1";
let dashboardStep = 1;

const getInitialState = () => {

    let state = {};

    ALL_CATEGORIES.forEach(c => {

        // Kategorien mit Multi-Select
        if (
            EXTRA_MULTI.includes(c) ||
            c === "reisen"
        ) {
            state[c] = [];
        }

        // Normale Scale-Kategorien
        else {
            state[c] = 0;
        }
    });

    return state;
};

let levels = {
    ist: getInitialState(),
    wunsch: getInitialState(),
    verzicht: getInitialState()
};

/* ---------- Navigation ---------- */
function goToScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

    if (name === "1") {
        document.getElementById('screen-1').classList.add('active');
    } else if (name === "reflexion") {
        document.getElementById('q2-kids').value = document.getElementById('q1-kids').value;
        document.getElementById('q2-first').value = document.getElementById('q1-first').value;
        document.getElementById('q2-last').value = document.getElementById('q1-last').value;
        document.getElementById('screen-5').classList.add('active');
    } else {
        if (activeScreen === "1") {
            baseAge = parseInt(document.getElementById('demo-age').value) || 20;
        }
        if (name === "wunsch" && dashboardStep < 2) {
            levels.wunsch = JSON.parse(JSON.stringify(levels.ist));
        }

        dashboardStep = STEP_MAP[name].dashStep;
        document.getElementById(`screen-${name}`).classList.add('active');
        renderButtons(name);
        updateAge(name);
    }

    activeScreen = name;
    updateProgressIndicator();
}

function updateProgressIndicator() {
    const currentStepNum = STEP_MAP[activeScreen].num;
    document.querySelectorAll('.step-dot').forEach(dot => {
        const stepNum = parseInt(dot.dataset.step);
        dot.classList.toggle('active', stepNum === currentStepNum);
        dot.classList.toggle('done', stepNum < currentStepNum);
    });
}

/* ---------- Buttons rendern ---------- */
function renderButtons(screenName) {
    const mainPanel = document.getElementById(`button-panel-${screenName}`);
    if (mainPanel) mainPanel.innerHTML = '';

    const extraPanel = document.getElementById(`extras-single-${screenName}`);
    if (extraPanel) extraPanel.innerHTML = '';

    renderCategoryPanel(`button-panel-${screenName}`, SCALE_CATEGORIES, screenName, 'cumulative');
    renderExtraCategoriesSideBySide(`extras-single-${screenName}`, screenName);
}

function renderCategoryPanel(panelId, categories, screenName, mode) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    categories.forEach(cat => {
        const row = document.createElement('div');
        row.className = 'category-row';

        const label = document.createElement('div');
        label.className = 'category-label';
        label.innerText = cat;
        row.appendChild(label);

        actions.filter(a => a.kategorie === cat).forEach(action => {
            row.appendChild(createActionButton(action, cat, screenName, mode));
        });

        panel.appendChild(row);
    });
}

function renderExtraCategoriesSideBySide(panelId, screenName) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '20px';
    wrapper.style.marginTop = '20px';
    wrapper.style.paddingTop = '20px';
    wrapper.style.borderTop = '2px dashed #ccc';

    const extraCats = [
        { id: 'umfeld', mode: 'multi' },
        { id: 'support', mode: 'multi' },
        // "reisen" wurde hier entfernt, taucht also nur noch bei den Skalen auf
        { id: 'arbeitsmodell', mode: 'multi' }
    ];

    extraCats.forEach(catObj => {
        const cat = catObj.id;
        const mode = catObj.mode;

        const col = document.createElement('div');
        col.style.flex = '1';
        col.style.display = 'flex';
        col.style.flexDirection = 'column';
        col.style.background = '#fcfcfc';
        col.style.padding = '15px';
        col.style.borderRadius = '10px';
        col.style.border = '1px solid #eaeaea';

        const label = document.createElement('div');
        label.className = 'category-label';
        label.innerText = cat;
        label.style.width = '100%';
        label.style.justifyContent = 'center';
        label.style.marginBottom = '15px';
        label.style.borderBottom = '1px solid #eee';
        label.style.paddingBottom = '10px';
        col.appendChild(label);

        const btnContainer = document.createElement('div');
        btnContainer.style.display = 'flex';
        btnContainer.style.flexWrap = 'wrap';
        btnContainer.style.gap = '8px';
        btnContainer.style.justifyContent = 'center';

        actions.filter(a => a.kategorie === cat).forEach(action => {
            const btn = createActionButton(action, cat, screenName, mode);
            btn.style.flex = '1 1 45%';
            btn.style.width = 'auto';
            btn.style.padding = '8px 15px';
            btnContainer.appendChild(btn);
        });

        col.appendChild(btnContainer);
        wrapper.appendChild(col);
    });

    panel.appendChild(wrapper);
}

function createActionButton(action, cat, screenName, mode) {
    const btn = document.createElement('button');
    btn.className = 'action-btn';
    btn.innerHTML = `<span class="icon">${action.icon}</span><span>${action.aktion}</span>`;

    const lockedByDependency = (
        cat === 'karriere' && action.level > 2 &&
        levels.ist.bildung === 0 && levels.wunsch.bildung === 0
    );

    if (lockedByDependency) {
        btn.classList.add('locked');
        btn.disabled = true;
        return btn;
    }

    if (mode === 'multi' || cat === 'reisen') {
        applyMultiStyle(btn, action, cat, screenName);
    } else if (dashboardStep === 1) {
        applyIstStepStyle(btn, action, cat, screenName);
    } else if (dashboardStep === 2) {
        applyWunschStepStyle(btn, action, cat, screenName);
    } else if (dashboardStep === 3) {
        applyVerzichtStepStyle(btn, action, cat, screenName);
    }

    return btn;
}

/* ---------- Style-Logik: Völlig freie Extra-Kategorien ---------- */
function applyMultiStyle(btn, action, cat, screenName) {
    const id = action.id;
    const inIst = levels.ist[cat].includes(id);
    const inWunsch = levels.wunsch[cat].includes(id);
    const inVerzicht = levels.verzicht[cat].includes(id);

    btn.classList.add('interactive'); // Immer interaktiv!

    if (dashboardStep === 1) {
        if (inIst) btn.classList.add('ist-active');
        btn.onclick = () => handleMultiSelect(cat, id, screenName);
    }
    else if (dashboardStep === 2) {
        if (inWunsch) {
            // Zeigt an: Grün wenn es aus dem Ist-Zustand übernommen wurde, Blau wenn es neu ist
            if (inIst) btn.classList.add('ist-active');
            else btn.classList.add('wunsch-active');
        }
        btn.onclick = () => handleMultiSelect(cat, id, screenName);
    }
    else if (dashboardStep === 3) {
        // Im Verzicht-Screen sind nur die Dinge klickbar, die im Wunsch waren
        if (inWunsch) {
            if (inVerzicht) {
                btn.classList.add('verzicht-active');
            } else {
                if (inIst) btn.classList.add('ist-active');
                else btn.classList.add('wunsch-active');
            }
            btn.onclick = () => handleMultiSelect(cat, id, screenName);
        } else {
            btn.classList.remove('interactive');
            btn.classList.add('locked'); // Nicht-ausgewählte Wünsche bleiben grau/gelockt
        }
    }
}

/* ---------- Style-Logik: Skala-Kategorien ---------- */
function applyIstStepStyle(btn, action, cat, screenName) {
    if (action.level <= levels.ist[cat]) {
        btn.classList.add('ist-active');
        if (action.level === levels.ist[cat]) {
            btn.classList.add('interactive');
            btn.onclick = () => handleAction(cat, action.level, screenName);
        }
    } else if (action.level === levels.ist[cat] + 1) {
        btn.classList.add('interactive');
        btn.onclick = () => handleAction(cat, action.level, screenName);
    } else {
        btn.classList.add('locked');
    }
}

function applyWunschStepStyle(btn, action, cat, screenName) {
    if (action.level <= levels.ist[cat]) {
        btn.classList.add('ist-locked');
    } else if (action.level <= levels.wunsch[cat]) {
        btn.classList.add('wunsch-active');
        if (action.level === levels.wunsch[cat]) {
            btn.classList.add('interactive');
            btn.onclick = () => handleAction(cat, action.level, screenName);
        }
    } else if (action.level === levels.wunsch[cat] + 1) {
        btn.classList.add('interactive');
        btn.onclick = () => handleAction(cat, action.level, screenName);
    } else {
        btn.classList.add('locked');
    }
}

function applyVerzichtStepStyle(btn, action, cat, screenName) {
    if (action.level <= levels.ist[cat]) {
        btn.classList.add('ist-locked');
        return;
    }

    if (action.level <= levels.wunsch[cat]) {
        const grenze = levels.wunsch[cat] - levels.verzicht[cat];
        if (action.level > grenze) {
            btn.classList.add('verzicht-active', 'interactive');
            btn.onclick = () => handleAction(cat, action.level, screenName, 'remove');
        } else {
            btn.classList.add('wunsch-active');
            if (action.level === grenze) {
                btn.classList.add('interactive');
                btn.onclick = () => handleAction(cat, action.level, screenName, 'add');
            }
        }
    } else {
        btn.classList.add('locked');
    }
}

/* ---------- Aktionen verarbeiten ---------- */
function handleAction(cat, level, screenName, mode = '') {
    if (dashboardStep === 1) {
        levels.ist[cat] = (levels.ist[cat] === level) ? level - 1 : level;
    } else if (dashboardStep === 2) {
        levels.wunsch[cat] = (levels.wunsch[cat] === level) ? level - 1 : level;
    } else if (dashboardStep === 3) {
        if (mode === 'add') levels.verzicht[cat]++;
        if (mode === 'remove') levels.verzicht[cat]--;
    }
    renderButtons(screenName);
    updateAge(screenName);
}

function handleMultiSelect(cat, id, screenName) {

    if (dashboardStep === 1) {

        if (levels.ist[cat].includes(id)) {
            levels.ist[cat] = levels.ist[cat].filter(x => x !== id);
        } else {
            levels.ist[cat].push(id);
        }

    } else if (dashboardStep === 2) {

        if (levels.wunsch[cat].includes(id)) {
            levels.wunsch[cat] = levels.wunsch[cat].filter(x => x !== id);
        } else {
            levels.wunsch[cat].push(id);
        }

    } else if (dashboardStep === 3) {

        if (levels.wunsch[cat].includes(id)) {

            if (levels.verzicht[cat].includes(id)) {
                levels.verzicht[cat] = levels.verzicht[cat].filter(x => x !== id);
            } else {
                levels.verzicht[cat].push(id);
            }
        }
    }

    renderButtons(screenName);
    updateAge(screenName); // <- DAS HAT GEFEHLT
}

/* ---------- Alters-Berechnung (nur SCALE_CATEGORIES) ---------- */
function getEffectiveLevels(step) {
    const result = {};
    SCALE_CATEGORIES.forEach(cat => {
        if (step === 1) result[cat] = levels.ist[cat];
        else if (step === 2) result[cat] = levels.wunsch[cat];
        else result[cat] = levels.wunsch[cat] - levels.verzicht[cat];
    });
    return result;
}
function getAgeForStep(step) {
    let alter = baseAge;

    const effective = getEffectiveLevels(step);
    const karriereFaktor = KARRIERE_ALTERS_FAKTOR[effective.bildung] ?? 1.5;

    // ===== SCALE-KATEGORIEN =====
    actions.forEach(a => {
        // WICHTIG: "reisen" hier ausschließen, da es eine eigene Logik hat!
        if (SCALE_CATEGORIES.includes(a.kategorie) && a.kategorie !== "reisen") {
            const isActive = a.level <= effective[a.kategorie];
            const isAboveIst = a.level > levels.ist[a.kategorie];

            if (isActive && isAboveIst && a.effekte.alter) {
                alter += (a.kategorie === 'karriere')
                    ? a.effekte.alter * karriereFaktor
                    : a.effekte.alter;
            }
        }
    });

    // ===== REISEN (unabhängige Einzelkarten) =====
    let aktiveReisen = [];

    if (step === 1) {
        aktiveReisen = levels.ist.reisen;
    } else if (step === 2) {
        aktiveReisen = levels.wunsch.reisen;
    } else if (step === 3) {
        aktiveReisen = levels.wunsch.reisen.filter(
            id => !levels.verzicht.reisen.includes(id)
        );
    }

    aktiveReisen.forEach(id => {
        const action = actions.find(a => a.id === id);
        if (!action?.effekte?.alter) return;

        const alreadyInIst = levels.ist.reisen.includes(id);

        // NEU: Im Ist-Zustand (step === 1) ändert sich das Alter durch Reisen nicht.
        // Das Alter steigt NUR in Schritt 2 oder 3 und auch nur für neue Wunsch-Reisen.
        if (step > 1 && !alreadyInIst) {
            alter += action.effekte.alter;
        }
    });

    return Math.round(alter);
}

function updateAge(screenName) {
    const age = getAgeForStep(dashboardStep);
    const ageStart = baseAge - 5;
    const ageSpan = 40;
    const percent = Math.max(0, Math.min(100, ((age - ageStart) / ageSpan) * 100));

    const fillElement = document.getElementById(`age-fill-${screenName}`);
    if (fillElement) fillElement.style.width = `${percent}%`;

    const numberElement = document.getElementById(`age-number-${screenName}`);
    if (numberElement) numberElement.innerText = age;

    const markersElement = document.getElementById(`age-markers-${screenName}`);
    if (markersElement) {
        markersElement.innerHTML = `
            <span>${ageStart} J</span>
            <span>${ageStart + ageSpan / 2} J</span>
            <span>${ageStart + ageSpan} J</span>
        `;
    }

    const delta = age - baseAge;
    const deltaEl = document.getElementById(`age-delta-${screenName}`);
    if (deltaEl) {
        if (delta === 0) {
            deltaEl.innerHTML = `Startalter: ${baseAge} Jahre`;
        } else {
            deltaEl.innerHTML = `<strong>+${delta} Jahre</strong> seit Start (${baseAge} → ${age})`;
        }
    }
}
/* ---------- Datenexport ---------- */
function submitData() {
    const count = parseInt(localStorage.getItem('participantCount') || '1');
    const fileId = count.toString().padStart(2, '0');
    localStorage.setItem('participantCount', count + 1);

    const q1 = {
        kids: parseInt(document.getElementById('q1-kids').value) || 0,
        first: parseInt(document.getElementById('q1-first').value) || 0,
        last: parseInt(document.getElementById('q1-last').value) || 0
    };

    const q2 = {
        kids: parseInt(document.getElementById('q2-kids').value) || 0,
        first: parseInt(document.getElementById('q2-first').value) || 0,
        last: parseInt(document.getElementById('q2-last').value) || 0
    };

    let greenCount = 0, blueCount = 0, redCount = 0;
    const cardsPerCategory = {};

    // =========================
    // SCALE CATEGORIES
    // =========================
    SCALE_CATEGORIES.forEach(cat => {

        if (cat === "reisen") {

            const ist = levels.ist.reisen;
            const wunsch = levels.wunsch.reisen;
            const verzicht = levels.verzicht.reisen;

            const green = ist.length;
            const blue = Math.max(0, wunsch.filter(id => !ist.includes(id)).length);
            const red = verzicht.length;

            greenCount += green;
            blueCount += blue;
            redCount += red;

            cardsPerCategory[cat] = {
                // =========================
                // 🟢 DEINE ORIGINAL LOGIK (BLEIBT)
                // =========================
                green,
                blue_selected: blue,
                red_sacrificed: red,

                raw_data: {
                    ist: ist.length,
                    wunsch: wunsch.length,
                    verzicht: verzicht.length
                },

                // =========================
                // ✨ NEU: ausgeschriebene Karten
                // =========================
                green_cards: ist.map(id =>
                    actions.find(a => a.id === id)?.aktion
                ),

                blue_cards: wunsch
                    .filter(id => !ist.includes(id))
                    .map(id => actions.find(a => a.id === id)?.aktion),

                red_cards: verzicht.map(id =>
                    actions.find(a => a.id === id)?.aktion
                )
            };

            return;
        }

        const g = levels.ist[cat];
        const b = Math.max(0, levels.wunsch[cat] - levels.ist[cat]);
        const r = levels.verzicht[cat];

        greenCount += g;
        blueCount += b;
        redCount += r;

        cardsPerCategory[cat] = {
            green: g,
            blue_selected: b,
            red_sacrificed: r,
            raw_data: {
                ist: g,
                wunsch: levels.wunsch[cat],
                verzicht: r
            }
        };
    });

    // =========================
    // EXTRA CATEGORIES (fix ohne doppelte Deklaration)
    // =========================
    const getLabels = (ids) =>
        ids.map(id => actions.find(a => a.id === id)?.aktion).join(", ") || "—";

    const extraAuswahlObjekte = {};
    EXTRA_MULTI.forEach(cat => {
        extraAuswahlObjekte[`${cat}_auswahl`] = {
            ist: getLabels(levels.ist[cat]),
            wunsch: getLabels(levels.wunsch[cat]),
            verzicht: getLabels(levels.verzicht[cat])
        };
    });

    // =========================
    // FINAL JSON
    // =========================
    const logData = {
        participant_id: `participant_${fileId}`,
        timestamp: new Date().toISOString(),
        demographics: {
            age: document.getElementById('demo-age').value,
            gender: document.getElementById('demo-gender').value
        },
        tracked_ages: {
            ist_alter: getAgeForStep(1),
            wunsch_alter: getAgeForStep(2),
            verzicht_alter: getAgeForStep(3)
        },
        questions_initial: q1,
        questions_final: q2,
        deltas: {
            kids_diff: q2.kids - q1.kids,
            first_age_diff: q2.first - q1.first,
            last_age_diff: q2.last - q1.last
        },
        cards_summary: {
            total_green_ist: greenCount,
            total_blue_wunsch: blueCount,
            total_red_verzicht: redCount,
            sacrifice_factor: redCount,
            netto_blue_remaining: blueCount - redCount
        },
        cards_detail: cardsPerCategory,
        ...extraAuswahlObjekte
    };

    const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(logData, null, 2));

    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `participant_${fileId}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();

    alert(`Experiment abgeschlossen! Datei participant_${fileId}.json wurde erstellt.`);
    location.reload();
}

/* ---------- Init ---------- */
// updateProgressIndicator(); (Falls du diesen in deinem HTML hast, einkommentieren)