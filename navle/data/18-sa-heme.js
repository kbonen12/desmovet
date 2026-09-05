/* NAVLE Hub — Hematology, Hemostasis & Transfusion Medicine (dogs & cats)
 * Source: NAVLE_Dogs_Cats_Study_Guide.pdf ch. 2.
 *
 * Part of the dog + cat block. `covKey` merges the small animal chapters into
 * one bar on the coverage map, since the ICVA weights the species, not the system.
 */
(function (N) {
  N.push({
    id: 'sa-heme',
    group: 'Species',
    title: 'Hematology & Hemostasis',
    tagline: 'Which test, which pathway — and what the smear is telling you.',
    weightNote: 'part of the 49.9% dog + cat block',
    covKey: 'dogcat', covTitle: 'Dogs & Cats', covWeight: 49.9,
    sections: [
      {
        type: 'table', title: 'Coagulation testing — which test, which pathway',
        columns: ['Test', 'What it measures', 'Clinical use'],
        rows: [
          ['PT (prothrombin time)', 'Extrinsic and common pathways', 'Prolongs FIRST in anticoagulant rodenticide toxicosis, because factor VII (extrinsic) has the shortest half-life.'],
          ['PTT / aPTT', 'Intrinsic and common pathways', 'The test for hemophilia in a dog — hemophilia A is a factor VIII (intrinsic) deficiency, so you test the intrinsic pathway with aPTT.'],
          ['Thrombin time', 'The final step of coagulation — fibrinogen → fibrin', 'Detects fibrinogen deficiency or dysfibrinogenemia.'],
          ['Buccal mucosal bleeding time (BMBT)', 'PLATELET FUNCTION', 'Normal platelet count with a prolonged BMBT → a qualitative platelet defect: von Willebrand disease, thrombopathia, NSAIDs.'],
          ['Template bleeding time', 'Functional ability of platelets to plug a minute wound', 'Same principle, standardized incision.'],
          ['Antithrombin (AT III) activity', 'Anticoagulant reserve', 'Measured when DIC is a concern; also lost in protein-losing nephropathy.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Factor VII memory hook',
        body: '<b>PET</b> — <b>P</b>T tests the <b>E</b>xtrinsic pathway, which contains factor Se<b>VE</b>n. Vitamin K antagonism hits factor VII first because it dies first.'
      },

      {
        type: 'table', title: 'Inherited bleeding disorders',
        wide: true,
        columns: ['Disorder', 'Defect', 'Abnormal tests', 'Treatment / breed'],
        rows: [
          ['von Willebrand disease', 'Deficiency of von Willebrand factor → platelets cannot adhere to subendothelial collagen. The most common inherited bleeding disorder of dogs.', 'Prolonged BMBT with a NORMAL platelet count.', 'Cryoprecipitate or fresh frozen plasma; DDAVP. Doberman is the classic breed.'],
          ['Hemophilia A', 'Inherited deficiency of factor VIII. X-linked recessive — affected males, carrier females.', 'Prolonged ACT and aPTT. PT is normal.', 'Give plasma or cryoprecipitate.'],
          ['Canine thrombopathia', 'Platelets fail to aggregate and to secrete their granules.', 'Prolonged BMBT, normal count.', 'Basset Hounds are the breed to know.']
        ]
      },

      {
        type: 'table', title: 'Immune-mediated cytopenias',
        columns: ['Disease', 'Diagnostic findings', 'Treatment'],
        rows: [
          ['IMHA\nimmune-mediated hemolytic anemia', 'Four findings: 1. Regenerative anemia · 2. Spherocytes on blood smear, plus polychromasia · 3. Autoagglutination · 4. Positive Coombs test.', 'Immunosuppression — glucocorticoids first line, azathioprine as an adjunct in dogs. Antithrombotics, because IMHA is highly thrombogenic.'],
          ['ITP / IMTP\nimmune-mediated thrombocytopenia', 'Severe thrombocytopenia; petechiae and mucosal bleeding. A diagnosis of exclusion.', 'Glucocorticoids ± azathioprine; vincristine to accelerate platelet release.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Azathioprine is contraindicated in cats',
        body: 'Cats lack thiopurine methyltransferase (TPMT) and develop severe, sometimes fatal bone marrow suppression on azathioprine. Use chlorambucil or cyclosporine in cats instead.'
      },
      {
        type: 'callout', variant: 'discrim', title: 'Spherocytes belong to IMHA, not ITP',
        body: 'Spherocytes — small, dense, hyperchromic RBCs lacking central pallor — indicate partial phagocytic removal of antibody-coated red cell membrane. That is an IMHA phenomenon. ITP is diagnosed by a markedly low <b>platelet count</b>, not by spherocytes.'
      },

      {
        type: 'table', title: 'Anemia classification & regeneration',
        columns: ['Finding', 'Interpretation'],
        rows: [
          ['Polychromasia', 'A sign of REGENERATIVE anemia — less mature RBCs (reticulocytes) released into circulation.'],
          ['Microcytic, hypochromic, non-regenerative', 'IRON DEFICIENCY. In an adult dog this means chronic blood loss until proven otherwise — GI bleeding, or a heavy flea/hookworm burden in a young animal.'],
          ['Mild, non-regenerative, normocytic, normochromic (cat)', 'Anemia of chronic (inflammatory) disease, driven by inflammatory cytokines sequestering iron. The most common anemia in a sick cat.'],
          ['Anisocytosis vs. poikilocytosis', 'Aniso = variation in SIZE. Poikilo = variation in SHAPE. Poikilocytosis is NORMAL in goats and in young cattle — do not over-read it there.'],
          ['Stress leukogram', 'The corticosteroid pattern: neutrophilia, lymphopenia, monocytosis, eosinopenia. Distinguish from an inflammatory leukogram, which has a left shift.']
        ]
      },

      {
        type: 'table', title: 'Congenital leukocyte anomalies',
        columns: ['Anomaly', 'Description', 'Species / breed'],
        rows: [
          ['Chédiak-Higashi syndrome', 'Large eosinophilic cytoplasmic inclusions in leukocytes from abnormal granule formation. Causes partial oculocutaneous albinism and a bleeding tendency from defective platelet dense granules.', 'Color-dilute (smoke blue) Persian cats. Also Hereford cattle, Aleutian mink.'],
          ['Pelger-Huët anomaly', 'An apparent severe left shift — hyposegmented, band-shaped neutrophil nuclei — but with mature, coarsely clumped chromatin and no clinical illness. A benign inherited defect of nuclear segmentation.', 'Australian Shepherds. The trap: it looks like overwhelming sepsis on a smear from a healthy dog.']
        ]
      },

      {
        type: 'table', title: 'DIC and SIRS',
        columns: ['Syndrome', 'Criteria'],
        rows: [
          ['DIC\nneed 2 of 4 to diagnose', '1. Elevated PT and PTT · 2. Thrombocytopenia · 3. Positive D-dimer (fibrin degradation product) · 4. Decreased antithrombin III. Also expect schistocytes on the smear.'],
          ['SIRS', 'Three signs: fever, tachycardia, leukopenia (or leukocytosis). Also tachypnea. The cytokines most associated with initiating SIRS are IL-1 and TNF-α.']
        ]
      },

      {
        type: 'table', title: 'Transfusion medicine',
        columns: ['Concept', 'Detail'],
        rows: [
          ['Transfusion trigger', 'Acute blood loss with PCV < 20%. Chronic anemia is tolerated to much lower PCVs — the rate of change matters more than the number.'],
          ['Dosing rule', '1 mL/kg of packed RBCs raises the PCV by 1%.'],
          ['Worked example', 'A 4 kg cat with a PCV of 12%, target 25%. Rise needed = 13%. Volume = 4 kg × 1 mL/kg × 13 = 52 mL of pRBCs.'],
          ['Crossmatch — major vs. minor', 'MAJOR: donor RBCs + recipient plasma — the important one, because it detects recipient antibodies that would destroy the transfused cells. MINOR: donor plasma + recipient RBCs.'],
          ['Feline blood types', 'Type B cats are predisposed to severe transfusion reactions because they have strong, naturally occurring anti-A alloantibodies. Cats must always be typed before a first transfusion — unlike dogs, they have preformed antibodies with no prior sensitization. Type B breeds: Abyssinian, British Shorthair, Devon Rex, Cornish Rex, Himalayan, Persian, Somali, Scottish Fold.'],
          ['Bovine blood types', 'The two clinically relevant systems are B and J.'],
          ['Treating a transfusion reaction', 'Stop the transfusion, then: dexamethasone/steroid, epinephrine, antihistamine and oxygen.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Never give type A blood to a type B cat',
        body: 'Type B cats have very strong, naturally occurring anti-A antibodies — type A blood causes an acute, often fatal hemolytic reaction, sometimes within milliliters. Type A cats have only weak anti-B antibodies, so a mismatch in that direction is less immediately catastrophic, though still wrong. Always blood-type cats before any transfusion.'
      },

      {
        type: 'table', title: 'Calcium disorders',
        columns: ['Topic', 'Detail'],
        rows: [
          ['First step in evaluating hypocalcemia', 'Check for concurrent hypoproteinemia / hypoalbuminemia first, then measure ionized calcium. Roughly half of total calcium is protein-bound, so a low albumin gives a falsely low total calcium with a normal ionized fraction and no clinical signs.'],
          ['Causes of hypocalcemia', 'Renal disease · eclampsia (periparturient tetany in a nursing bitch) · phosphate enema toxicity · ethylene glycol toxicosis · hypoparathyroidism. The three to name first in a dog or cat: eclampsia, hypoparathyroidism, ethylene glycol.'],
          ['Causes of hypercalcemia — "HARD IONS"', '<b>H</b>yperparathyroidism · <b>A</b>ddison\'s · <b>R</b>enal disease/CKD · vitamin <b>D</b> toxicosis · <b>I</b>diopathic (classically the cat) · <b>O</b>steolytic · <b>N</b>eoplastic · <b>S</b>purious. The two to think of first in a dog: lymphoma and anal sac apocrine gland adenocarcinoma — both hypercalcemia of malignancy.']
        ]
      },

      {
        type: 'table', title: 'Joint fluid analysis',
        columns: ['Classification', 'Cytology'],
        rows: [
          ['Normal', 'Small mononuclear cells without neutrophils.'],
          ['Suppurative', 'Neutrophils. Think septic arthritis or immune-mediated polyarthritis.'],
          ['Granulomatous', 'Mononuclear cells — lymphocytes, macrophages, plasma cells.'],
          ['Pyogranulomatous', 'Mixed neutrophils and mononuclear cells.']
        ]
      },

      {
        type: 'table', title: 'Hypersensitivity reactions',
        columns: ['Type', 'Mechanism', 'Examples'],
        rows: [
          ['Type I', 'IgE-mediated, immediate', 'Allergy, atopy, anaphylaxis, vaccine reactions.'],
          ['Type II', 'Antibody-dependent — IgG or IgM made against a normal self antigen', 'IMHA, ITP, myasthenia gravis, neonatal isoerythrolysis.'],
          ['Type III', 'Antigen–antibody (immune) complex formation overwhelms clearance and deposits in tissue', 'Arthritis, nephritis (glomerulonephritis) and uveitis — the classic triad of deposition sites. Sulfa drugs cause a type III reaction in Doberman Pinschers. Also purpura hemorrhagica and Aleutian disease of ferrets/mink.'],
          ['Type IV', 'Delayed, cell-mediated — T lymphocytes become sensitized and differentiate into cytotoxic T cells', 'Contact dermatitis; granulomatous reactions (mycobacteria, Coccidioides, Blastomyces, Histoplasma); lymphocytic choriomeningitis in hamsters and rats; canine distemper; autoimmune thyroiditis; KCS. Also transplant rejection and tumor immunity.']
        ]
      },

      {
        type: 'rapidfire', title: 'Rapid-fire hematology recall',
        items: [
          ['Spherocytes + autoagglutination + positive Coombs', 'IMHA'],
          ['Normal platelet count but prolonged BMBT', 'von Willebrand disease'],
          ['Prolonged aPTT in a young male dog', 'Hemophilia A → give plasma'],
          ['Basset Hound that bleeds with normal counts', 'Canine thrombopathia'],
          ['Blue Persian with giant leukocyte granules', 'Chédiak-Higashi syndrome'],
          ['Australian Shepherd with a "severe left shift" but perfectly healthy', 'Pelger-Huët anomaly'],
          ['Microcytic, hypochromic', 'Iron deficiency = chronic blood loss'],
          ['1 mL/kg pRBCs', 'Raises PCV by 1%'],
          ['Type A blood into a type B cat', 'Acute fatal hemolytic reaction — never']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
