/* NAVLE Hub — Fish & Aquaculture, Reptiles & Amphibians
 * Source: NAVLE_Exotics_Avian_Study_Guide.pdf, chapters 4–5 (+ fish top 3 from ID guide)
 */
(function (N) {
  N.push({
    id: 'fish',
    group: 'Species',
    title: 'Fish & Aquaculture',
    tagline: 'Aquatics is 1% of the exam — but the reportable list and water quality logic are cheap points.',
    weight: 1,
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'The fish exam mindset',
        body: 'For any sick-fish question, work the list in this order: (1) water quality → (2) parasites → (3) bacteria → (4) virus. The NAVLE overwhelmingly tests water quality and the handful of reportable / foreign animal aquatic diseases.'
      },
      {
        type: 'table', title: 'Water quality — the first differential always',
        columns: ['Parameter / problem', 'Pathophysiology & signs', 'Management'],
        rows: [
          ['Ammonia — ionized vs. un-ionized', 'Ionized ammonia = NH₄⁺ = relatively harmless. Un-ionized ammonia = NH₃ = highly toxic → cellular damage and suffocation. The NH₃ fraction rises as pH and temperature rise.', 'Water changes, reduce feeding/stocking, buffer pH downward carefully, establish biofiltration.'],
          ['pH', 'Ideal range for most freshwater fish = 6.5–8.5. As pH increases (more alkaline), fish become hyperactive and ammonia shifts toward the toxic un-ionized NH₃ form.', 'Buffer with carbonate hardness; avoid rapid swings.'],
          ['"New tank syndrome"', 'NITRITE accumulation because the biofilter is not established. Nitrite oxidizes hemoglobin → methemoglobin → dark brown gills ("brown blood disease"). Separately, nitrate toxicity causes immune suppression.', 'Cycle the tank before stocking; add salt (chloride competes with nitrite uptake at the gill); water changes.'],
          ['Gas supersaturation', 'Water contains more dissolved gas than it can naturally hold at a given temperature and pressure → bubbles form in the blood and tissues = gas bubble disease. Exophthalmos, bubbles in fins and gill lamellae.', 'Find the leak in the plumbing on the suction side; degas with packed columns / aeration.'],
          ['Hyposalinity', 'Associated with swim bladder trauma, metabolic acidosis, and internal hemorrhage.', 'Correct salinity gradually.'],
          ['Chlorine / chloramine', 'Erratic swimming and excessive mucus on the gills. Municipal tap water added without dechlorination.', 'Sodium thiosulfate; always dechlorinate.'],
          ['Copper', 'Copper is more toxic in soft water and acidic water (less binding, more free cupric ion). Narrow therapeutic index when used as a parasiticide.', 'Measure free copper; monitor alkalinity/hardness.'],
          ['Zinc', 'Zinc inhibits calcium uptake at the gill. Sources include galvanized fittings.', 'Avoid galvanized plumbing.'],
          ['"Penny toxicity"', 'Caused by pennies thrown into a pond or tank — a zinc (and copper) toxicosis.', 'Remove the coins; the classic koi-pond history.'],
          ['Water too cold', 'Predisposes to Saprolegnia (a water mold) infection.', 'Identify on direct wet mount; treat with formalin or hydrogen peroxide. Correct the temperature.']
        ]
      },
      {
        type: 'table', title: 'Viral disease',
        columns: ['Disease', 'Agent', 'Signs / species', 'Diagnosis & action'],
        rows: [
          ['Tilapia Lake Virus (TiLV) ⚑R', 'Enveloped orthomyxovirus (emerging)', '10–90% mortality. Pale gills, dark ulcerated skin, fluid in the coelom.', 'WOAH-listed / reportable. Call the authorities and depopulate.'],
          ['Infectious Salmon Anemia (ISA) ⚑R', 'Orthomyxovirus (isavirus)', 'Severe anemia; kidney and liver necrosis with abdominal edema; pale gills; lethargy. Farmed Atlantic salmon.', 'Reportable — no treatment. Eradicate the entire stock.'],
          ['Infectious Hematopoietic Necrosis (IHN) ⚑R', 'Novirhabdovirus (rhabdovirus)', 'Salmonids. Severe anemia, fluid accumulation, hemorrhage, pale gills, exophthalmia, distended abdomen. Most susceptible at ~2 months / fry-fingerling stage.', 'Endemic in the Pacific Northwest and Alaska. Reportable; no treatment.'],
          ['Megalocytivirus — ISKNV / scale drop disease ⚑R', 'Iridoviridae', 'Splenic and renal necrosis; scale loss; high mortality in cultured marine and ornamental fish.', 'Diagnose by PCR of SPLEEN and KIDNEY. Report to authorities.'],
          ['Lymphocystis', 'Iridoviridae', 'Cauliflower-like masses on the fins that "look like balloons" — hypertrophied dermal fibroblasts. Cosmetic; usually self-limiting.', 'Do nothing — the answer is no treatment. Reduce stress; lesions regress.']
        ]
      },
      {
        type: 'table', title: 'Bacterial disease',
        columns: ['Disease', 'Agent', 'Signs / species', 'Management'],
        rows: [
          ['Furunculosis / "goldfish ulcer disease"', 'Aeromonas salmonicida — gram negative', 'Trout and farmed salmon — the most common bacterial disease of farmed salmon. Necrotic hemorrhages on the tail, fins, gills, and internal organs, progressing to kidney and spleen. Boil-like furuncles in the musculature. Also the cause of goldfish ulcer disease.', 'Culture; florfenicol / oxytetracycline in feed; vaccination in aquaculture.'],
          ['Motile aeromonad septicemia', 'Aeromonas hydrophila and relatives', 'Opportunistic pathogen associated with STRESS — the exam\'s favorite framing. Ulcers, hemorrhage, dropsy.', 'Fix the underlying stressor (water quality, crowding, handling).'],
          ['Enteric Septicemia of Catfish (ESC)', 'Edwardsiella ictaluri — gram negative', 'Hemorrhagic enteritis and "hole in the head" lesion (open lesion over the frontal fontanelle). The major disease of channel catfish aquaculture.', 'Medicated feed (florfenicol); vaccination; manage water temperature.'],
          ['Columnaris', 'Flavobacterium columnare — gram negative', 'Warm-water fish. "Saddleback" depigmented dorsal lesion, frayed/eroded fins, yellow-brown gill necrosis, mouth "cotton-wool" plaques. Triggered by high temperature, high organic load, crowding, handling injury.', 'Wet mount of lesion/gill: long, thin gram-negative rods forming "haystacks" or columns with flexing motility. Culture on selective (Ordal\'s / Hsu-Shotts) medium. Oxytetracycline or florfenicol in feed (FDA-approved for food fish — mind withdrawal times); potassium permanganate or salt baths for external lesions. Lower temperature and stocking density.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Warm water vs. cold water',
        body: 'Flavobacterium columnare is classically a WARM-water disease — outbreaks above ~15–20°C, worst in summer. Strain virulence is temperature-dependent, but warm water is the standard answer. The cold-water organism is Saprolegnia, the water mold.'
      },
      {
        type: 'table', title: 'Parasitic disease',
        columns: ['Parasite', 'Presentation', 'Diagnosis & treatment'],
        rows: [
          ['"Ich" / white spot — Ichthyophthirius multifiliis (freshwater ciliated protozoan)', 'Discrete white spots like grains of salt on skin/fins/gills; flashing, rubbing on objects, piping at the surface, lethargy, increased respiration. Often follows a new addition or a temperature drop. Rapid, high mortality in crowded systems.', 'Wet mount / skin scrape or gill biopsy — look for the large, dark, horseshoe-shaped macronucleus and rotating ciliated trophont. Diagnose on the live fish, not after death. Formalin, copper sulfate (freshwater), or sodium chloride baths; repeat treatments to catch the free-swimming theront (only this stage is drug-susceptible). Raise temperature to speed the life cycle.'],
          ['Sea lice — Lepeophtheirus salmonis', 'Copepod ectoparasite of farmed salmon; grazing erosion of skin, secondary infection, and huge economic loss.', 'Emamectin benzoate, hydrogen peroxide baths, cleaner fish, mechanical delousing.'],
          ['Marine white spot = saltwater ich — Cryptocaryon irritans', 'White spots on skin and gills; flashing, respiratory distress.', 'ID trophonts — ciliated, pear-shaped parasites — on a wet mount from a skin scrape. Copper or hyposalinity therapy.'],
          ['Amyloodinium = "velvet" / coral fish disease', 'Parasitic dinoflagellate. Skin, fins, and gills appear velvety (gold dust). Rapid gill mortality in marine systems.', 'Copper sulfate, hydrogen peroxide, or chloroquine.'],
          ['Whirling disease — Myxobolus cerebralis', 'Myxozoan parasite of salmonid cartilage → skeletal deformity, blacktail, and the characteristic whirling swimming behavior. Tubifex worm intermediate host.', 'Identify by PCR. No effective treatment; control by avoiding earthen ponds and disinfecting.'],
          ['Bolbophorus', 'Digenean trematode of catfish in the southern/southwestern US. Causes red and white raised bumps in the muscle and fluid in the abdomen. Mortality up to 95%.', 'Life cycle involves the American white pelican and rams-horn snails — control by bird deterrence and snail control.'],
          ['Microsporidiosis — Glugea', 'Xenoma formation; chronic wasting and visible white nodules.', 'Depopulate and disinfect — there is no practical treatment.']
        ]
      },
      {
        type: 'table', title: 'Fungal & oomycete disease',
        columns: ['Disease', 'Presentation', 'Treatment'],
        rows: [
          ['Saprolegnia (water mold)', 'White-to-gray cotton-wool tufts on skin, fins, gills, or eggs. Almost always secondary to handling trauma, low temperature, poor water quality, or another primary infection. Also destroys eggs in hatcheries. Wet mount: broad, non-septate, branching hyphae.', 'Salt, potassium permanganate, formalin, or hydrogen peroxide baths; fix the primary cause — water quality, netting/handling technique, temperature, stocking density. Remove dead fish and eggs.'],
          ['Epizootic Ulcerative Syndrome (EUS) ⚑R', 'Ulcerative skin disease — ulcers with RED CENTERS and WHITE RIMS. Necropsy: soft tissue granulomas and liquefactive necrosis of muscle. Caused by the oomycete Aphanomyces invadans.', 'Contact the federal authorities — this is a foreign animal / WOAH-listed disease.'],
          ['Fusarium solani', 'Fungal disease of captive marine fish (also elasmobranchs and crustaceans). Skin ulcers and systemic granulomas.', 'Poor prognosis; antifungals of limited value.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Two details worth getting exactly right',
        list: [
          'EUS is caused by the oomycete (water mold) Aphanomyces invadans — oomycetes are not true fungi, though the functional exam answer is unchanged: fungus-like water mold, report it.',
          'Causes of anemia in fish: (1) Infectious Salmon Anemia virus — note ISAV is itself an orthomyxovirus, so those are one cause and not two — and (2) nitrite toxicity / brown blood disease, or blood-feeding ectoparasites such as sea lice and Argulus.'
        ]
      },
      {
        type: 'table', title: 'Nutrition, neoplasia, anesthesia & residues',
        columns: ['Topic', 'Key facts'],
        rows: [
          ['"Broken back disease"', 'Ascorbic acid (vitamin C) deficiency → defective collagen, scoliosis/lordosis, spinal deformity, impaired wound healing. Vitamin C is heat-labile and degrades in stored feed.'],
          ['Fibrosarcoma', 'The most common neoplasia of goldfish. Also consider lymphocystis as the viral non-neoplastic mimic of a "mass" on a fin.'],
          ['MS-222 (tricaine methanesulfonate)', 'The standard fish anesthetic and euthanasia agent. Withdrawal time = 21 days. Must be buffered with sodium bicarbonate (it is acidic in solution). Immersion route.'],
          ['Aquacalm (metomidate hydrochloride)', 'Anesthetic/sedative used in ornamental fish — particularly useful for transport sedation. Not for food fish.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Aquatic reportable diseases — know this list cold',
        body: 'Tilapia Lake Virus · Infectious Salmon Anemia · Infectious Hematopoietic Necrosis · Megalocytivirus (ISKNV / scale drop disease) · Epizootic Ulcerative Syndrome. Also flag the WOAH-listed viral diseases: viral hemorrhagic septicemia (VHS), spring viremia of carp (SVC), koi herpesvirus (KHV), and infectious salmon anemia. For every one of these, the correct exam answer includes notify state/federal authorities, and usually depopulate — there is no treatment.'
      },
      {
        type: 'rapidfire', title: 'Rapid-fire fish recall',
        items: [
          ['Cauliflower / balloon masses on fins', 'Lymphocystis (iridovirus) — do nothing'],
          ['Dark brown gills in a new tank', 'Nitrite'],
          ['Erratic swimming + excess gill mucus', 'Chlorine / chloramine'],
          ['Velvety gold skin', 'Amyloodinium → copper / H₂O₂ / chloroquine'],
          ['Pear-shaped ciliated trophonts on skin scrape in a marine tank', 'Saltwater ich (Cryptocaryon)'],
          ['Red-centered, white-rimmed ulcers', 'EUS — call the feds'],
          ['Hole in the head + hemorrhagic enteritis in catfish', 'Edwardsiella ictaluri'],
          ['Red/white bumps in catfish muscle + ascites', 'Bolbophorus'],
          ['Cotton wool after the heater failed', 'Saprolegnia → formalin or H₂O₂'],
          ['White spots like grains of salt, freshwater', 'Ich (Ichthyophthirius multifiliis) — horseshoe macronucleus']
        ]
      }
    ]
  });

  N.push({
    id: 'herps',
    group: 'Species',
    title: 'Reptiles & Amphibians',
    tagline: 'Reptiles are 1.5% of the exam. Reptile medicine on the NAVLE is husbandry medicine.',
    weight: 1.5,
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'The reptile mindset',
        body: 'Temperature gradient, humidity, UVB, and diet explain most of what you will be shown. Only a handful of specific agents get tested.'
      },
      {
        type: 'table', title: 'Reptile infectious disease',
        columns: ['Condition', 'Agent', 'Presentation', 'Treatment'],
        rows: [
          ['Upper respiratory tract disease (URTD)', 'Mycoplasma (M. agassizii) — also herpesvirus and ranavirus', 'Turtle/tortoise with swollen eyes, nasal discharge, and lethargy. The classic chelonian presentation. Chronic, often lifelong carriage.', 'Supportive care, raise ambient temperature, systemic antibiotics (enrofloxacin); PCR/serology. Do not release affected wild tortoises.'],
          ['Amoebiasis', 'Entamoeba invadens', 'Severe necrotizing colitis and hepatitis in snakes and lizards; often fatal. Turtles are frequently asymptomatic carriers — never house turtles with snakes.', 'Metronidazole.'],
          ['Ulcerative dermatitis ("scale rot")', 'Gram-negative opportunists (Aeromonas, Pseudomonas)', 'Ulcerated, blistered ventral scales in snakes. Caused by excessive humidity, damp/dirty substrate, and poor hygiene.', 'Topical and systemic antibiotics PLUS correction of husbandry — the husbandry half is the exam answer.'],
          ['Mycobacteriosis ⚑Z', 'Mycobacterium spp.', 'Associated with chronic wasting in reptiles. Granulomas in liver, spleen, lung.', 'Poor prognosis; zoonotic risk. Euthanasia often recommended.'],
          ['Pentastomiasis ⚑Z', 'Pentastomes ("tongue worms" — aberrant crustaceans)', 'Infect reptiles and cause pneumonia. Reside in the respiratory tract.', 'Zoonotic — humans are accidental intermediate hosts (visceral pentastomiasis). Ivermectin and manual removal; poor response.'],
          ['Salmonellosis ⚑Z', 'Salmonella spp.', 'Usually a normal, intermittent gut commensal in a clinically healthy reptile. Can cause septicemia, hepatitis, osteomyelitis, coelomitis in stressed or immunosuppressed animals kept at incorrect temperature.', 'Do not attempt to eliminate carriage with antibiotics. Treat clinical illness on culture/sensitivity + correct the POTZ, humidity, and nutrition. Client education is the tested point.']
        ]
      },
      {
        type: 'table', title: 'Reptile ectoparasites',
        columns: ['Parasite', 'Key fact'],
        rows: [
          ['Snake mite — Ophionyssus natricis', 'The common snake mite. Transmits Aeromonas hydrophila — that vector role is the tested point. Mites cluster around the eyes, chin groove, and under scales; snakes soak excessively. Treat the snake and the entire enclosure (ivermectin spray on the environment — never ivermectin systemically in chelonians).']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Ivermectin and chelonians',
        body: 'Ivermectin is fatal in turtles and tortoises (and in some skinks). This is a classic exam trap: an ivermectin question that is safe in a snake or lizard is lethal in a chelonian.'
      },
      {
        type: 'table', title: 'Amphibians',
        columns: ['Condition', 'Agents', 'Notes'],
        rows: [
          ['Red leg syndrome', 'Four bacteria to name: 1. Aeromonas (classically A. hydrophila) · 2. Pseudomonas · 3. Proteus · 4. Citrobacter', 'Red spots/erythema on the ventral legs and abdomen from cutaneous hemorrhage and septicemia. Almost always secondary to poor water quality, overcrowding, or chilling. Treat the water first, then antibiotics.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire herp recall',
        items: [
          ['Tortoise with swollen eyes + nasal discharge', 'Mycoplasma URTD'],
          ['Snake with amoebic colitis', 'Entamoeba invadens → metronidazole'],
          ['Snake with ventral scale ulcers', 'Scale rot — fix the humidity'],
          ['Snake mite', 'Ophionyssus natricis, transmits Aeromonas hydrophila'],
          ['Chronic wasting reptile', 'Mycobacterium'],
          ['Reptile pneumonia from a "tongue worm"', 'Pentastomes (zoonotic)'],
          ['Frog with red legs', 'Aeromonas / Pseudomonas / Proteus / Citrobacter'],
          ['Ivermectin in a turtle', 'Fatal — never in chelonians']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
