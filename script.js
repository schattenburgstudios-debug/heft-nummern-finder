// ============================================================
// HEFT-NUMMERN-FINDER
// ============================================================

const hefte = [

  // =========================
  // LINIERT – DIN A5
  // =========================

  {
    art: "liniert",
    format: "A5",
    variante: "klasse1",
    rand: "kein",
    nummer: 1,
    titel: "Lineatur 1",
    beschreibung: "DIN A5 · 1. Klasse · 4 Linien pro Zeile · extra groß"
  },

  {
    art: "liniert",
    format: "A5",
    variante: "klasse2",
    rand: "kein",
    nummer: 2,
    titel: "Lineatur 2",
    beschreibung: "DIN A5 · 2. Klasse · 4 Linien pro Zeile · etwas kleiner"
  },

  {
    art: "liniert",
    format: "A5",
    variante: "klasse3",
    rand: "kein",
    nummer: 3,
    titel: "Lineatur 3",
    beschreibung: "DIN A5 · 3. Klasse · 2 Linien pro Zeile"
  },

  {
    art: "liniert",
    format: "A5",
    variante: "ab4",
    rand: "kein",
    nummer: 4,
    titel: "Lineatur 4",
    beschreibung: "DIN A5 · ab 4. Klasse · 9 mm Zeilenabstand · ohne Rand"
  },

  {
    art: "liniert",
    format: "A5",
    variante: "ab4",
    rand: "rechts",
    nummer: 9,
    titel: "Lineatur 9",
    beschreibung: "DIN A5 · ab 4. Klasse · 9 mm Zeilenabstand · Rand rechts"
  },


  // =========================
  // LINIERT – DIN A4
  // =========================

  {
    art: "liniert",
    format: "A4",
    variante: "ab4",
    rand: "kein",
    nummer: 21,
    titel: "Lineatur 21",
    beschreibung: "DIN A4 · ab 4. Klasse · 9 mm Zeilenabstand · ohne Rand"
  },

  {
    art: "liniert",
    format: "A4",
    variante: "ab4",
    rand: "rechts",
    nummer: 25,
    titel: "Lineatur 25",
    beschreibung: "DIN A4 · ab 4. Klasse · 9 mm Zeilenabstand · Rand rechts / Korrekturrand"
  },

  {
    art: "liniert",
    format: "A4",
    variante: "ab4",
    rand: "doppel",
    nummer: 27,
    titel: "Lineatur 27",
    beschreibung: "DIN A4 · ab 4. Klasse · 9 mm Zeilenabstand · Doppelrand links und rechts"
  },

  {
    art: "liniert",
    format: "A4",
    variante: "oberstufe",
    rand: "rechts",
    nummer: 31,
    titel: "Lineatur 31",
    beschreibung: "DIN A4 · Oberstufe / Studium · Korrekturrand rechts"
  },


  // =========================
  // KARIERT – DIN A5
  // =========================

  {
    art: "kariert",
    format: "A5",
    kaestchen: "5x5",
    rand: "kein",
    nummer: 5,
    titel: "Lineatur 5",
    beschreibung: "DIN A5 · kariert · 5 × 5 mm · ohne Rand"
  },

  {
    art: "kariert",
    format: "A5",
    kaestchen: "7x7",
    rand: "kein",
    nummer: 7,
    titel: "Lineatur 7",
    beschreibung: "DIN A5 · grob kariert · 7 × 7 mm"
  },

  {
    art: "kariert",
    format: "A5",
    kaestchen: "5x5",
    rand: "rechts",
    nummer: 10,
    titel: "Lineatur 10",
    beschreibung: "DIN A5 · kariert · 5 × 5 mm · Rand rechts"
  },


  // =========================
  // KARIERT – DIN A4
  // =========================

  {
    art: "kariert",
    format: "A4",
    kaestchen: "5x5",
    variante: "normal",
    rand: "kein",
    nummer: 22,
    titel: "Lineatur 22",
    beschreibung: "DIN A4 · kariert · 5 × 5 mm · ohne Rand"
  },

  {
    art: "kariert",
    format: "A4",
    kaestchen: "5x5",
    variante: "normal",
    rand: "rechts",
    nummer: 26,
    titel: "Lineatur 26",
    beschreibung: "DIN A4 · kariert · 5 × 5 mm · Rand rechts / weißer Korrekturrand"
  },

  {
    art: "kariert",
    format: "A4",
    kaestchen: "5x5",
    variante: "normal",
    rand: "doppel",
    nummer: 28,
    titel: "Lineatur 28",
    beschreibung: "DIN A4 · kariert · 5 × 5 mm · Doppelrand links und rechts"
  },

  {
    art: "kariert",
    format: "A4",
    kaestchen: "5x5",
    variante: "oberstufe",
    rand: "rechts",
    nummer: 32,
    titel: "Lineatur 32",
    beschreibung: "DIN A4 · Oberstufe / Studium · kariert · 5 × 5 mm · Korrekturrand rechts"
  },


  // =========================
  // BLANKO – SONDERFORM
  // =========================

  {
    art: "blanko",
    format: "A4",
    nummer: 40,
    titel: "Lineatur 40",
    beschreibung: "DIN A4 · Blanko mit integriertem karierten Linienblatt zum Unterlegen"
  }
];


// ============================================================
// AKTUELL AUSGEWÄHLTE WERTE
// ============================================================

const state = {
  art: null,
  format: null,
  variante: null,
  rand: null,
  kaestchen: null
};


// ============================================================
// HTML-ELEMENTE
// ============================================================

const dynamicOptions =
  document.getElementById("dynamicOptions");

const result =
  document.getElementById("result");

const error =
  document.getElementById("error");

const number =
  document.getElementById("number");

const resultTitle =
  document.getElementById("resultTitle");

const resultDescription =
  document.getElementById("resultDescription");


// ============================================================
// ERGEBNIS AUSBLENDEN
// ============================================================

function clearResult() {
  result.classList.add("hidden");
  error.classList.add("hidden");
}


// ============================================================
// OPTIONEN ERSTELLEN
// ============================================================

function makeGroup(title, field, options) {

  const group = document.createElement("div");

  group.className = "option-group";


  const heading = document.createElement("h3");

  heading.textContent = title;

  group.appendChild(heading);


  const container = document.createElement("div");

  container.className = "options";


  options.forEach(item => {

    const button =
      document.createElement("button");

    button.className = "option";

    button.textContent = item.label;

    button.dataset.field = field;

    button.dataset.value = item.value;


    button.addEventListener("click", () => {

      state[field] = item.value;


      // Alte Auswahl in dieser Gruppe entfernen
      container
        .querySelectorAll(".option")
        .forEach(btn => {
          btn.classList.remove("selected");
        });


      // Neue Auswahl markieren
      button.classList.add("selected");


      // Wenn Format geändert wurde,
      // abhängige Werte zurücksetzen
      if (field === "format") {

        state.variante = null;
        state.rand = null;
        state.kaestchen = null;

      }


      clearResult();

      renderDynamicOptions();

    });


    container.appendChild(button);

  });


  group.appendChild(container);

  return group;
}


// ============================================================
// DYNAMISCHE AUSWAHLEN
// ============================================================

function renderDynamicOptions() {

  dynamicOptions.innerHTML = "";


  if (!state.art) {
    return;
  }


  // ==========================================================
  // BLANKO
  // ==========================================================

  if (state.art === "blanko") {

    dynamicOptions.appendChild(
      makeGroup(
        "Format",
        "format",
        [
          {
            value: "A4",
            label: "DIN A4"
          }
        ]
      )
    );

    return;
  }


  // ==========================================================
  // FORMAT
  // ==========================================================

  dynamicOptions.appendChild(
    makeGroup(
      "Format",
      "format",
      [
        {
          value: "A5",
          label: "DIN A5"
        },
        {
          value: "A4",
          label: "DIN A4"
        }
      ]
    )
  );


  if (!state.format) {
    return;
  }


  // ==========================================================
  // LINIERT
  // ==========================================================

  if (state.art === "liniert") {


    // ---------------- A5 ----------------

    if (state.format === "A5") {

      dynamicOptions.appendChild(
        makeGroup(
          "Klassenstufe",
          "variante",
          [
            {
              value: "klasse1",
              label: "1. Klasse"
            },
            {
              value: "klasse2",
              label: "2. Klasse"
            },
            {
              value: "klasse3",
              label: "3. Klasse"
            },
            {
              value: "ab4",
              label: "Ab 4. Klasse"
            }
          ]
        )
      );


      if (state.variante === "ab4") {

        dynamicOptions.appendChild(
          makeGroup(
            "Rand",
            "rand",
            [
              {
                value: "kein",
                label: "Ohne Rand"
              },
              {
                value: "rechts",
                label: "Rand rechts"
              }
            ]
          )
        );

      }

    }


    // ---------------- A4 ----------------

    if (state.format === "A4") {

      dynamicOptions.appendChild(
        makeGroup(
          "Klassenstufe",
          "variante",
          [
            {
              value: "ab4",
              label: "Ab 4. Klasse"
            },
            {
              value: "oberstufe",
              label: "Oberstufe / Studium"
            }
          ]
        )
      );


      if (state.variante === "ab4") {

        dynamicOptions.appendChild(
          makeGroup(
            "Rand",
            "rand",
            [
              {
                value: "kein",
                label: "Ohne Rand"
              },
              {
                value: "rechts",
                label: "Rand rechts / Korrekturrand"
              },
              {
                value: "doppel",
                label: "Doppelrand links + rechts"
              }
            ]
          )
        );

      }


      if (state.variante === "oberstufe") {

        dynamicOptions.appendChild(
          makeGroup(
            "Rand",
            "rand",
            [
              {
                value: "rechts",
                label: "Korrekturrand rechts"
              }
            ]
          )
        );

      }

    }

  }


  // ==========================================================
  // KARIERT
  // ==========================================================

  if (state.art === "kariert") {


    // ---------------- A5 ----------------

    if (state.format === "A5") {

      dynamicOptions.appendChild(
        makeGroup(
          "Kästchengröße",
          "kaestchen",
          [
            {
              value: "5x5",
              label: "5 × 5 mm"
            },
            {
              value: "7x7",
              label: "7 × 7 mm"
            }
          ]
        )
      );


      if (state.kaestchen === "5x5") {

        dynamicOptions.appendChild(
          makeGroup(
            "Rand",
            "rand",
            [
              {
                value: "kein",
                label: "Ohne Rand"
              },
              {
                value: "rechts",
                label: "Rand rechts"
              }
            ]
          )
        );

      }

    }


    // ---------------- A4 ----------------

    if (state.format === "A4") {

      dynamicOptions.appendChild(
        makeGroup(
          "Variante",
          "variante",
          [
            {
              value: "normal",
              label: "Normal"
            },
            {
              value: "oberstufe",
              label: "Oberstufe / Studium"
            }
          ]
        )
      );


      if (state.variante === "normal") {

        dynamicOptions.appendChild(
          makeGroup(
            "Rand",
            "rand",
            [
              {
                value: "kein",
                label: "Ohne Rand"
              },
              {
                value: "rechts",
                label: "Rand rechts / Korrekturrand"
              },
              {
                value: "doppel",
                label: "Doppelrand links + rechts"
              }
            ]
          )
        );

      }


      if (state.variante === "oberstufe") {

        dynamicOptions.appendChild(
          makeGroup(
            "Rand",
            "rand",
            [
              {
                value: "rechts",
                label: "Korrekturrand rechts"
              }
            ]
          )
        );

      }

    }

  }

}


// ============================================================
// HEFTART AUSWÄHLEN
// ============================================================

document
  .querySelectorAll("#artOptions .option")
  .forEach(button => {

    button.addEventListener("click", () => {

      state.art =
        button.dataset.value;

      state.format = null;
      state.variante = null;
      state.rand = null;
      state.kaestchen = null;


      document
        .querySelectorAll("#artOptions .option")
        .forEach(btn => {
          btn.classList.remove("selected");
        });


      button.classList.add("selected");


      clearResult();

      renderDynamicOptions();

    });

  });


// ============================================================
// HEFTNUMMER FINDEN
// ============================================================

document
  .getElementById("findBtn")
  .addEventListener("click", () => {

    clearResult();


    // ========================================================
    // BLANKO
    // ========================================================

    if (state.art === "blanko") {

      if (state.format === "A4") {

        const blanko =
          hefte.find(
            heft => heft.nummer === 40
          );

        showResult(blanko);

        return;

      }

    }


    // ========================================================
    // GRUNDPRÜFUNG
    // ========================================================

    if (!state.art || !state.format) {

      showError(
        "Bitte wähle zuerst Heftart und Format aus."
      );

      return;

    }


    // ========================================================
    // KARIERT A5 7 × 7
    // ========================================================

    if (
      state.art === "kariert" &&
      state.format === "A5" &&
      state.kaestchen === "7x7"
    ) {

      const heft7 =
        hefte.find(
          heft => heft.nummer === 7
        );

      showResult(heft7);

      return;

    }


    // ========================================================
    // PASSENDEN EINTRAG SUCHEN
    // ========================================================

    const matches =
      hefte.filter(heft => {

        if (heft.art !== state.art) {
          return false;
        }

        if (heft.format !== state.format) {
          return false;
        }

        if (
          heft.variante !== undefined &&
          heft.variante !== state.variante
        ) {
          return false;
        }

        if (
          heft.rand !== undefined &&
          heft.rand !== state.rand
        ) {
          return false;
        }

        if (
          heft.kaestchen !== undefined &&
          heft.kaestchen !== state.kaestchen
        ) {
          return false;
        }

        return true;

      });


    // ========================================================
    // GENAU EIN TREFFER
    // ========================================================

    if (matches.length === 1) {

      showResult(matches[0]);

      return;

    }


    // ========================================================
    // MEHRERE TREFFER
    // ========================================================

    if (matches.length > 1) {

      showError(
        "Bitte wähle noch die fehlende Eigenschaft aus."
      );

      return;

    }


    // ========================================================
    // KEIN TREFFER
    // ========================================================

    showError(
      "Für diese Kombination wurde keine passende Lineatur gefunden."
    );

  });


// ============================================================
// ERGEBNIS ANZEIGEN
// ============================================================

function showResult(heft) {

  if (!heft) {

    showError(
      "Keine passende Lineatur gefunden."
    );

    return;

  }


  number.textContent =
    heft.nummer;

  resultTitle.textContent =
    heft.titel;

  resultDescription.textContent =
    heft.beschreibung;


  result.classList.remove("hidden");


  result.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

}


// ============================================================
// FEHLER ANZEIGEN
// ============================================================

function showError(message) {

  error.textContent =
    message;

  error.classList.remove("hidden");

}


// ============================================================
// ZURÜCKSETZEN
// ============================================================

document
  .getElementById("resetBtn")
  .addEventListener("click", () => {

    state.art = null;
    state.format = null;
    state.variante = null;
    state.rand = null;
    state.kaestchen = null;


    document
      .querySelectorAll(".option")
      .forEach(button => {
        button.classList.remove("selected");
      });


    dynamicOptions.innerHTML = "";

    clearResult();

  });


// ============================================================
// NUMMER KOPIEREN
// ============================================================

document
  .getElementById("copyBtn")
  .addEventListener("click", async () => {

    try {

      await navigator.clipboard.writeText(
        number.textContent
      );


      const button =
        document.getElementById("copyBtn");


      button.textContent =
        "✓ Kopiert";


      setTimeout(() => {

        button.textContent =
          "Nummer kopieren";

      }, 1500);

    }

    catch {

      showError(
        "Die Nummer konnte nicht automatisch kopiert werden."
      );

    }

  });