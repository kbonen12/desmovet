/* NAVLE Hub — Differential Clusters
 * Source: NAVLE_Differential_Clusters.docx
 * Look-alike conditions the exam tests against each other: same presenting
 * complaint, different disease, separated by one or two key clues.
 */
(function (N) {
  N.push({
    id: 'clusters-sa',
    group: 'Differential clusters',
    title: 'Canine & Feline Clusters',
    tagline: 'Same presenting complaint, different disease — separated by one or two clues.',
    sections: [
      {
        type: 'table', title: '1. Causes of PU/PD',
        columns: ['Cause', 'Distinguishing clue', 'Confirmatory test'],
        rows: [
          ['Diabetes mellitus', 'Polyphagia + weight loss; rapid bilateral cataracts in dogs', 'Fasting hyperglycemia + glucosuria + fructosamine'],
          ['Diabetes insipidus (central/nephrogenic)', 'Extremely dilute urine regardless of hydration status', 'Water deprivation test ± response to desmopressin'],
          ['Hyperadrenocorticism', 'Pot-bellied appearance, symmetric truncal alopecia', 'LDDS or ACTH stimulation test'],
          ['Chronic kidney disease', 'Isosthenuria with concurrent azotemia', 'Creatinine, SDMA, urine protein:creatinine ratio'],
          ['Hypercalcemia (any cause)', 'Produces a nephrogenic-DI-like picture', 'Ionized calcium'],
          ['Pyometra', 'Intact female, recent estrus, ± vaginal discharge', 'Abdominal ultrasound, neutrophilia on CBC'],
          ['Hyperthyroidism (cat)', 'Weight loss + polyphagia + tachycardia', 'Total T4'],
          ['Psychogenic polydipsia', 'Young dog, otherwise normal labs', 'Water deprivation test — urine concentrates appropriately'],
          ['Hepatic insufficiency / PSS', '± post-prandial neurologic signs', 'Pre- and post-prandial bile acids'],
          ['Hypoadrenocorticism (Addison\'s)', 'Hyperkalemia + hyponatremia', 'ACTH stimulation test']
        ]
      },
      { type: 'callout', variant: 'pearl', body: 'Water deprivation testing differentiates psychogenic polydipsia from true diabetes insipidus, but only after every other cause on this list has been excluded first — it is risky in a dehydrated or azotemic patient.' },

      {
        type: 'table', title: '2. Hypercalcemia — "GOSH DARN IT"',
        columns: ['Cause', 'Key clue'],
        rows: [
          ['G — Granulomatous disease', 'History of fungal or chronic inflammatory disease'],
          ['O — Osteolytic', 'Primary or metastatic bone lesion'],
          ['S — Spurious', 'Lipemia or lab error — recheck ionized calcium'],
          ['H — Hyperparathyroidism (primary)', 'Older dogs; low-normal phosphorus; parathyroid mass on cervical ultrasound'],
          ['D — Vitamin D toxicosis', 'Cholecalciferol rodenticide, psoriasis cream, some houseplants — calcium AND phosphorus both elevated'],
          ['A — Addison\'s disease', 'Concurrent hyperkalemia + hyponatremia'],
          ['R — Renal disease', 'Uncommon cause — more often a consequence of hypercalcemia'],
          ['N — Neoplasia', 'Lymphoma (most common malignant cause in dogs) or anal sac apocrine gland adenocarcinoma — check rectally'],
          ['I — Idiopathic', 'Cats specifically; diagnosis of exclusion'],
          ['T — Toxicosis', 'Same category as vitamin D toxicosis above']
        ]
      },
      { type: 'callout', variant: 'pearl', body: 'Elevated calcium AND elevated phosphorus together points toward vitamin D toxicosis or renal failure; primary hyperparathyroidism classically shows low-normal phosphorus since PTH promotes phosphate excretion. Always palpate the anal sacs and peripheral lymph nodes before running an expensive workup — the two most common causes are found on physical exam.' },

      {
        type: 'table', title: '3. Anemia workup',
        columns: ['Category', 'Subtype', 'Key clue'],
        rows: [
          ['Regenerative — hemolytic', 'IMHA', 'Spherocytes, autoagglutination, positive Coombs test'],
          ['Regenerative — hemolytic', 'Heinz body hemolysis', 'Onion/garlic/zinc/acetaminophen exposure; Heinz bodies on smear'],
          ['Regenerative — hemolytic', 'Hemotropic infection', 'Babesia, Mycoplasma haemofelis — organisms visible on blood smear'],
          ['Regenerative — blood loss', 'External or internal hemorrhage', 'Low total protein (whole blood is lost, not just RBCs)'],
          ['Non-regenerative', 'Anemia of chronic disease / inflammation', 'Mild, normocytic normochromic'],
          ['Non-regenerative', 'Chronic kidney disease', 'Lack of erythropoietin production'],
          ['Non-regenerative', 'Bone marrow disease', 'FeLV, myelophthisis, aplastic anemia']
        ]
      },
      { type: 'callout', variant: 'pearl', body: 'Total protein is the fastest way to separate blood loss anemia (low TP — plasma proteins are lost along with red cells) from hemolytic anemia (normal/high TP — only red cells are being destroyed).' },

      {
        type: 'table', title: '4. Pediatric diarrhea (puppies / kittens)',
        columns: ['Cause', 'Distinguishing clue'],
        rows: [
          ['Parvovirus', 'Unvaccinated puppy; hemorrhagic diarrhea + vomiting + neutropenia'],
          ['Canine coronavirus', 'Milder GI signs, less systemic illness; worsens outcomes when co-infecting with parvo'],
          ['Distemper (enteric phase)', 'Precedes or accompanies respiratory signs; neuro signs follow weeks later'],
          ['Intestinal parasites', 'Roundworms (potbelly), hookworms (anemia), coccidia, Giardia — confirmed on fecal exam'],
          ['Dietary indiscretion / diet change', 'Self-limiting, history-based, systemically well patient']
        ]
      },
      { type: 'callout', variant: 'pearl', body: 'Neutropenia + hemorrhagic diarrhea + vomiting in an unvaccinated puppy is parvovirus until proven otherwise — but the fecal antigen ELISA can be falsely negative very early in disease or falsely positive shortly after a modified-live vaccine.' },

      {
        type: 'table', title: '5. Icterus localization',
        columns: ['Location', 'Key lab pattern'],
        rows: [
          ['Prehepatic (hemolysis)', 'Anemia present; normal-to-mild liver enzyme elevation; unconjugated bilirubinemia'],
          ['Hepatic', 'Elevated ALT/AST; ± low albumin, BUN, cholesterol (synthetic dysfunction)'],
          ['Post-hepatic (obstructive)', 'Disproportionate ALP/GGT elevation; elevated cholesterol; ± pale / acholic feces']
        ]
      },
      { type: 'callout', variant: 'pearl', body: 'Check the PCV first. If the patient is anemic, think prehepatic / hemolytic before chasing a liver workup.' },

      {
        type: 'table', title: '6. Tick-borne disease overlap',
        columns: ['Disease', 'Vector', 'Key distinguishing feature'],
        rows: [
          ['Lyme disease', 'Ixodes tick', 'Shifting-leg polyarthritis; glomerulonephritis (Lyme nephritis) in chronic cases; Northeast / upper Midwest'],
          ['Ehrlichiosis', 'Brown dog tick', 'Often severe thrombocytopenia, pancytopenia in chronic phase; more common South / Southwest'],
          ['Anaplasmosis', 'Ixodes tick', 'Acute polyarthritis + thrombocytopenia; geographically overlaps with Lyme'],
          ['Rocky Mountain Spotted Fever', 'Dermacentor tick', 'Vasculitis: petechiae, edema, CNS signs; can be peracute and fatal']
        ]
      },
      { type: 'callout', variant: 'pearl', body: 'Thrombocytopenia is common to all four — differentiate by geography/vector and specific organ involvement (joints/kidney for Lyme, vasculitis/CNS for RMSF). Combination screening tests check Lyme, Ehrlichia, Anaplasma, and heartworm together.' },

      {
        type: 'table', title: '7. Feline lower urinary tract',
        columns: ['Cause', 'Key feature', 'Management note'],
        rows: [
          ['Feline idiopathic cystitis', 'Most common cause overall; diagnosis of exclusion; stress-associated', 'Environmental enrichment / stress reduction (MEMO)'],
          ['Struvite uroliths', 'Alkaline urine', 'Can potentially dissolve with a therapeutic urinary diet'],
          ['Calcium oxalate uroliths', 'Acidic urine; more common in older cats', 'Cannot be dissolved medically — requires removal'],
          ['Urethral plugs', 'Mix of struvite crystals + mucoprotein', 'Classic cause of male cat obstruction, distinct from true uroliths']
        ]
      },
      { type: 'callout', variant: 'pearl', body: 'Struvite stones can be dissolved with diet; calcium oxalate stones cannot — this distinction is tested directly as a "what\'s your next step" question.' }
    ]
  });

  N.push({
    id: 'clusters-la',
    group: 'Differential clusters',
    title: 'Equine & Bovine Clusters',
    tagline: 'Large animal look-alikes from the differential cluster set.',
    sections: [
      {
        type: 'table', title: '8. Equine neurologic disease cluster',
        columns: ['Disease', 'Key distinguishing feature', 'Diagnostic test'],
        rows: [
          ['EPM', 'Asymmetric signs; opossum fecal exposure', 'CSF:serum antibody ratio'],
          ['EHV-1 myeloencephalopathy', 'Often outbreak setting; may follow respiratory / abortion signs; urinary bladder paralysis common', 'PCR (nasal swab / blood)'],
          ['West Nile virus', 'Mosquito-transmitted; muscle fasciculations, hyperesthesia', 'IgM capture ELISA'],
          ['Rabies', 'Rapidly progressive, behavior change, ascending paralysis; always a differential given human exposure risk', 'No antemortem test — postmortem brain histopath / FA'],
          ['Cervical stenotic myelopathy ("wobblers")', 'Young, growing, large-breed horses; symmetric ataxia, worse in pelvic limbs', 'Cervical radiographs / myelography']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Rabies stays on the list', body: 'Rabies must always stay on the differential for any horse with rapidly progressive, unexplained neurologic disease — use PPE and do not perform an oral exam or necropsy without precautions.' },

      {
        type: 'table', title: '9. Adult horse diarrhea cluster',
        columns: ['Cause', 'Key clue'],
        rows: [
          ['Salmonellosis', 'Fever, severe illness; fecal culture needs multiple samples (intermittent shedding)'],
          ['Potomac horse fever', 'Seasonal (summer/fall), near water / aquatic insect exposure; PCR for Neorickettsia risticii'],
          ['NSAID toxicity / right dorsal colitis', 'History of NSAID (phenylbutazone) use; hypoproteinemia; thickened right dorsal colon on ultrasound'],
          ['Sand enteropathy', 'Sandy soil / pasture exposure; sand settles out on a fecal float-in-water test'],
          ['Antibiotic-associated colitis', 'Recent antibiotic use disrupting normal flora']
        ]
      },
      { type: 'callout', variant: 'pearl', body: 'Always ask about recent NSAID or antibiotic use in an adult horse with colitis — iatrogenic causes are common and easy to overlook.' },

      {
        type: 'table', title: '10. Downer cow differential',
        columns: ['Cause', 'Key clue'],
        rows: [
          ['Hypocalcemia (milk fever)', 'Recently calved; responds to IV calcium'],
          ['Toxic (coliform) mastitis', 'Abnormal udder; systemic toxemia, cold extremities / shock'],
          ['Calving-related nerve damage (obturator / peroneal)', 'History of dystocia or prolonged calving; normal calcium; classic "dog-sitting" posture'],
          ['Hypomagnesemia (grass tetany)', 'Lactating cows on lush pasture; hyperesthesia / tetany precedes recumbency']
        ]
      },
      { type: 'callout', variant: 'pearl', body: 'Response to IV calcium is the fastest way to separate milk fever from the other causes — if the cow doesn\'t respond, look for nerve damage or toxic mastitis instead.' },

      {
        type: 'table', title: '11. Vesicular disease',
        columns: ['Disease', 'Key feature'],
        rows: [
          ['Foot-and-mouth disease', 'Foreign animal disease in the US; affects cattle / swine / sheep / goats; reportable'],
          ['Vesicular stomatitis', 'Endemic in parts of the US; insect-transmitted (Culicoides / black flies); zoonotic']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Report, don\'t treat', body: 'FMD and vesicular stomatitis cannot be told apart on clinical signs alone — any vesicular lesion in cattle requires immediate reporting for laboratory differentiation, not a treatment plan.' }
    ]
  });

  N.push({
    id: 'tox-regulatory',
    group: 'Cross-cutting',
    title: 'Toxicology & Regulatory',
    tagline: 'Rodenticides are three different diseases. Foreign animal disease answers are regulatory, not clinical.',
    sections: [
      {
        type: 'table', title: 'Rodenticide toxicities',
        columns: ['Toxin', 'Mechanism', 'Onset', 'Key signs', 'Treatment'],
        rows: [
          ['Anticoagulant (warfarin-type, brodifacoum)', 'Inhibits vitamin K epoxide reductase', 'Delayed 2–5 days', 'Bleeding; prolonged PT before PTT', 'Vitamin K1 (extended course for long-acting types)'],
          ['Bromethalin', 'Neurotoxin causing cerebral edema', 'Hours to days', 'Tremors, seizures, hindlimb paresis', 'No antidote; mannitol / supportive care, early decontamination'],
          ['Cholecalciferol (vitamin D3)', 'Hypercalcemia / hyperphosphatemia → soft tissue mineralization', 'Delayed 1–2 days', 'Renal failure, soft tissue mineralization', 'Prolonged and difficult (IV fluids/diuresis, calcitonin, bisphosphonates); poor prognosis']
        ]
      },
      { type: 'callout', variant: 'pearl', body: '"Rat poison" is not one toxidrome — it is three completely different mechanisms and treatments. Always ask to see the packaging or active ingredient before starting treatment; decontamination alone, without knowing which type, can miss the correct antidote window.' },

      {
        type: 'callout', variant: 'danger', title: 'Reportable / foreign animal disease reporting',
        body: 'Examples: foot-and-mouth disease, African swine fever, highly pathogenic avian influenza, classical swine fever, screwworm. Reporting chain: notify the State Veterinarian and/or USDA APHIS immediately upon suspicion — do not wait for confirmatory lab testing before reporting.'
      },
      { type: 'callout', variant: 'pearl', body: 'Recognizing that something is a foreign animal disease and knowing who to call is the tested skill — there is often no treatment, and the correct "next step" answer is regulatory, not clinical.' },

      {
        type: 'list', title: 'Toxicology topics flagged as commonly missed',
        items: [
          'Ethylene glycol',
          'Chocolate / xylitol',
          'NSAID toxicity',
          'Rodenticides (see table above)',
          'Lead',
          'Ivermectin toxicity in herding-breed dogs (MDR1 / ABCB1-1Δ)',
          'Plant toxicities in large animals'
        ]
      },
      {
        type: 'table', title: 'Toxins relevant to birds',
        columns: ['Toxin', 'Effect'],
        rows: [
          ['Blue-green algae (cyanobacteria)', 'Birds and cattle are the most commonly affected species. Microcystin → acute hepatotoxicity; anatoxin-a → neurotoxicity and rapid death. Stagnant, warm, nutrient-rich water in late summer.'],
          ['Heavy metals (lead, zinc)', 'Classic caged-bird toxicoses from galvanized wire, curtain weights, costume jewelry, and pennies. Signs: regurgitation, neurologic disease, hemoglobinuria (green droppings). Chelate with CaEDTA.']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
