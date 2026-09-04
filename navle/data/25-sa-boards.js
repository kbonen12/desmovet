/* NAVLE Hub — Breed Predispositions, Numbers & Known Gaps
 * Source: NAVLE_Dogs_Cats_Study_Guide.pdf appendix B.
 *
 * Signalment shortcuts and the numeric values worth knowing cold. The numbers
 * are a `cloze` section, so they double as the typed-answer drill.
 */
(function (N) {
  N.push({
    id: 'sa-boards',
    group: 'Start here',
    title: 'Breeds & Numbers',
    tagline: 'The signalment shortcuts and the values worth memorizing cold.',
    weightNote: 'cross-cutting reference',
    covKey: 'dogcat', covTitle: 'Dogs & Cats', covWeight: 49.9,
    sections: [
      {
        type: 'table', title: 'Breed and signalment associations',
        columns: ['Breed', 'Association'],
        rows: [
          ['Doberman Pinscher', 'Type III hypersensitivity to SULFA drugs. Also von Willebrand disease, DCM, PLN.'],
          ['Basset Hound', 'Canine thrombopathia — platelets fail to aggregate or degranulate.'],
          ['Australian Shepherd', 'Pelger-Huët anomaly — benign hyposegmented neutrophils mimicking a severe left shift.'],
          ['Color-dilute (smoke blue) Persian cat', 'Chédiak-Higashi syndrome — giant leukocyte granules, bleeding tendency.'],
          ['Himalayan and Persian cats', 'Basal cell tumors.'],
          ['Abyssinian, British Shorthair, Devon Rex, Cornish Rex', 'Type B blood — high transfusion reaction risk.'],
          ['Soft-Coated Wheaten Terrier', 'Protein-losing nephropathy, and enteropathy — distal limb edema and weight loss.'],
          ['Greyhound and Pit Bull', 'Babesiosis. Pit Bulls specifically for B. gibsoni via bite transmission.'],
          ['German Shepherd (dolichocephalic)', 'Nasal aspergillosis. Also severe chronic ehrlichiosis.'],
          ['Beagle, Keeshond, Dachshund, Labrador, Golden Retriever, Vizsla', 'Idiopathic epilepsy, onset 1–5 years.'],
          ['Cavalier King Charles Spaniel', 'Syringomyelia, and myxomatous mitral valve disease.'],
          ['Labrador and Golden Retriever', 'Lyme nephritis — the protein-losing form of Lyme disease.']
        ]
      },
      {
        type: 'cloze', title: 'Numbers worth memorizing cold',
        note: 'These double as the typed-answer drill in Practice.',
        items: [
          { q:'Transfusion dose: ___ mL/kg of packed RBCs raises the PCV by 1%.', a:'1', why:'The whole feline and canine transfusion calculation runs off this one figure.' },
          { q:'Transfuse for acute blood loss when the PCV falls below ___%.', a:'20', why:'Chronic anemia is tolerated to much lower PCVs — the rate of change matters more than the number.' },
          { q:'An SpO₂ of 90% corresponds to a PaO₂ of ___ mmHg.', a:'60', why:'The 90/60 rule, and the threshold for supplementing oxygen.' },
          { q:'Normal PaCO₂ is ___ mmHg.', a:'35-45', accept:['35–45','35 to 45','35-45 mmHg'], why:'Above 45 is hypoventilation; below 30 is hyperventilation. Ventilation is about CO₂, not oxygen.' },
          { q:'Cyanosis becomes visible below a PaO₂ of ___ mmHg.', a:'50', why:'It also needs ≥5 g/dL of desaturated hemoglobin, which is why a severely anemic patient can be profoundly hypoxemic and never look cyanotic.' },
          { q:'Normal bicarbonate is ___ mEq/L.', a:'22-24', accept:['22–24','22 to 24'], why:'A negative base excess (base deficit) means metabolic acidosis.' },
          { q:'Normal lactate is under ___ mmol/L.', a:'2.5', accept:['2.5 mmol/L'], why:'Serial lactate clearance is a better prognostic tool than any single value.' },
          { q:'Bicarbonate deficit (mEq) = ___ × body weight (kg) × base deficit.', a:'0.3-0.4', accept:['0.3–0.4','0.3 to 0.4','0.3-0.4 x','0.4'], why:'The 0.3 factor approximates ECF volume; 0.4 is used when a fuller correction is intended.' },
          { q:'Total body water is ___% of body weight.', a:'60', why:'ICF is 40% of body weight, ECF 20%. Use 70% for pediatric patients.' },
          { q:'Of the extracellular fluid, ___% is interstitial.', a:'75', why:'The other 25% is intravascular — which is why only about a quarter of a crystalloid bolus stays in the vasculature.' },
          { q:'Uroabdomen: abdominal fluid to serum creatinine ratio of at least ___ : 1.', a:'2', accept:['2:1','2 to 1'], why:'Creatinine is more reliable than potassium because it is a larger molecule and equilibrates across the peritoneum more slowly.' },
          { q:'Septic peritonitis: blood glucose exceeds abdominal fluid glucose by more than ___ mg/dL.', a:'20', why:'Bacteria consume glucose in the effusion. Intracellular bacteria in effusion neutrophils is also definitive.' },
          { q:'The target insulin curve nadir in dogs and cats is ___ mg/dL.', a:'80-150', accept:['80–150','80 to 150'], why:'Never adjust insulin on a single glucose value, and always weigh the clinical signs above the curve.' },
          { q:'A feline mammary mass over 3 cm carries a median survival of ___ months after surgery.', a:'4-6', accept:['4–6','4 to 6'], why:'Under 2 cm the median survival is about 3 years. Roughly 85–90% of feline mammary tumors are malignant.' },
          { q:'Roughly ___% of canine mammary tumors are benign.', a:'50', why:'The 50/50 rule. Risk drops dramatically with a spay before the first heat.' },
          { q:'Feline injection-site sarcoma: biopsy at ___ months present, 2 cm, or growing at 1 month.', a:'3', why:'The 3-2-1 rule. Any one of the three criteria triggers action.' },
          { q:'Toxoplasma oocysts take ___ days to sporulate after shedding.', a:'1-5', accept:['1–5','1 to 5'], why:'Exactly why daily litter box cleaning prevents transmission.' },
          { q:'The foramen ovale closes within ___ hours of birth.', a:'48', why:'Failure to close gives left-to-right atrial shunting.' },
          { q:'A dog has ___ permanent teeth.', a:'42', why:'Cat 30, pig 44, ruminant 32, horse 36–44.' },
          { q:'A cat has ___ permanent teeth.', a:'30', why:'Dog 42, pig 44, ruminant 32, horse 36–44.' },
          { q:'Canine gestation is ___ days.', a:'62-65', accept:['62–65','62 to 65','63'], why:'Cat 65 days. Estrus: dog 9 days, cat 7 days.' },
          { q:"Marek's disease presents under ___ weeks of age; lymphoid leukosis over that.", a:'16', why:'Carried over from the avian guide — same exam, same day.' }
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
