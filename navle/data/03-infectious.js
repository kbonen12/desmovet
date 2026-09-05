/* NAVLE Hub — High-Yield Infectious Disease
 * Source: NAVLE_Infectious_Disease_Guide.pdf
 * Format: signs/signalment -> diagnosis -> treatment/control -> NAVLE flags.
 */
(function (N) {
  N.push({
    id: 'id-smallanimal',
    group: 'Infectious disease',
    title: 'Dogs & Cats — Top 5 Each',
    tagline: 'The last column carries the exam bait: buzzwords, pathognomonic findings, zoonotic and reportable flags.',
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'How the exam frames infectious disease',
        body: 'The NAVLE loves three things: (1) the classic buzzword-to-agent link, (2) drug of choice, and (3) "who do I have to call?" Any vesicular oral or foot lesion in livestock, sudden high-mortality event, or suspected foreign animal disease → contact your State Animal Health Official / USDA APHIS AVIC.'
      },
      {
        type: 'table', title: 'Dogs — Top 5', wide: true,
        columns: ['Disease / Agent', 'Key signs & signalment', 'Diagnosis', 'Treatment / control', 'NAVLE flags & buzzwords'],
        rows: [
          ['Canine parvovirus (CPV-2)\nNon-enveloped DNA virus; fecal–oral',
           'Unvaccinated pup 6 wk–6 mo. Rottweiler/Dobie/Pit predisposed. Foul, hemorrhagic diarrhea, vomiting, lethargy, fever → hypothermia. Targets crypt cells + bone marrow.',
           'Fecal antigen ELISA (SNAP). CBC: panleukopenia (neutropenia + lymphopenia). Vaccine can cause weak false-positive 5–12 d post-vax.',
           'Supportive: IV crystalloids ± colloids, dextrose, K⁺; maropitant/ondansetron; broad-spectrum abx (ampicillin ± enrofloxacin) for sepsis from neutropenia; early enteral nutrition. Monoclonal antibody (CPMA) available. Bleach 1:32.',
           'Buzzword: parvo + intussusception. Myocarditis form in neonates. Vaccinate q3–4 wk to ≥16 wk. Virus survives months in environment; quaternary ammonium does NOT kill it.'],
          ['Canine distemper virus\nEnveloped morbillivirus (paramyxo); aerosol',
           'Biphasic fever, oculonasal discharge, pneumonia, GI signs, then CNS: myoclonus ("chewing gum fits"), seizures, ataxia. Hyperkeratosis of nose/footpads; enamel hypoplasia if infected pre-eruption.',
           'PCR (conjunctival swab, whole blood, CSF, urine). Inclusion bodies in RBCs/lymphocytes. CSF antibody titer. Lymphopenia.',
           'No specific antiviral — supportive care, anticonvulsants. Prevent with MLV core vaccine. Enveloped → labile, easily killed by routine disinfectants.',
           '"Hard pad disease." Old-dog encephalitis. CNS signs may appear weeks after recovery. Also infects ferrets (high mortality) and wildlife.'],
          ['Leptospirosis\nLeptospira interrogans serovars; spirochete',
           'Large-breed outdoor dog, rain/flood exposure, rodent or wildlife urine. Acute kidney injury ± hepatic injury, fever, myalgia (reluctance to move), PU/PD then oliguria. Pulmonary hemorrhage syndrome.',
           'MAT paired titers (4× rise) — vaccine cross-reacts (titers usually ≤1:800). PCR blood (early) + urine (later). Chem: azotemia, ↑ALP, hypoK, hypoNa. Glucosuria without hyperglycemia.',
           'IV ampicillin/penicillin for the acute phase, then doxycycline 2 wk to clear the renal carrier state. Fluids/dialysis for AKI. Bacterin vaccine (4-serovar).',
           'ZOONOTIC — gloves, avoid urine contact, warn the owner. Reportable in some states. Classic combo: AKI + ↑liver enzymes in a young dog.'],
          ['CIRDC / "kennel cough"\nBordetella bronchiseptica, parainfluenza, CAV-2, Mycoplasma, canine influenza',
           'Recent shelter/boarding/daycare. Loud honking cough ± terminal retch, easily induced by tracheal palpation. Bright, afebrile, eating normally in uncomplicated cases.',
           'Usually clinical + history. PCR respiratory panel for outbreaks. Thoracic rads if febrile/anorexic to rule out pneumonia.',
           'Self-limiting in 1–2 wk; cough suppressant (hydrocodone/butorphanol), rest, harness not collar. Doxycycline if febrile or purulent. Intranasal/oral Bordetella + CPiV vaccines give fastest mucosal immunity.',
           'Buzzword: bright dog with a dramatic cough. Intranasal vaccine may cause a mild transient cough. Zoonotic risk in immunocompromised people.'],
          ['Lyme disease\nBorrelia burgdorferi; Ixodes scapularis/pacificus',
           'Northeast / upper Midwest / Pacific coast. Shifting, intermittent lameness, fever, regional lymphadenopathy. Lyme nephritis (protein-losing nephropathy) in Labs/Goldens — grave.',
           'C6 peptide (SNAP 4Dx) — distinguishes infection from vaccination; confirm with quantitative C6. Joint tap: neutrophilic. Screen UPC in seropositive dogs.',
           'Doxycycline 10 mg/kg q12h × 4 wk — dramatic response in 24–48 h. Treat only seropositive dogs that are clinical or proteinuric. Tick prevention (isoxazolines) + Lyme vaccine in endemic areas.',
           'Tick must feed ≈48 h. No erythema migrans rash in dogs. Do NOT expect seroreversion after treatment. Vector-borne differentials: Ehrlichia, Anaplasma, RMSF, Babesia.']
        ]
      },
      {
        type: 'table', title: 'Cats — Top 5', wide: true,
        columns: ['Disease / Agent', 'Key signs & signalment', 'Diagnosis', 'Treatment / control', 'NAVLE flags & buzzwords'],
        rows: [
          ['Feline panleukopenia (FPV)\nFeline parvovirus',
           'Unvaccinated kitten: fever, vomiting, diarrhea, dehydration, thickened intestinal loops. In utero / neonatal infection → cerebellar hypoplasia (ataxia, intention tremor, wide stance; non-progressive).',
           'Fecal canine parvo ELISA cross-reacts. CBC: profound panleukopenia. Recent MLV vaccine → false positive.',
           'Aggressive supportive care, antiemetics, abx for sepsis. Bleach. Core MLV vaccine — use killed in pregnant queens and kittens <4 wk (MLV causes cerebellar hypoplasia).',
           'Buzzword: kitten with ataxia but bright and normal mentation = cerebellar hypoplasia. Very high mortality untreated.'],
          ['Feline leukemia virus (FeLV)\nGammaretrovirus; saliva, "friendly cat" spread',
           'Young cat, outdoor/multi-cat. Lymphoma (mediastinal in young cats), non-regenerative anemia, myelosuppression, secondary infections, reproductive failure.',
           'ELISA / SNAP detects p27 antigen (blood, not tears/saliva). Positive → retest in 30 d and confirm with IFA (bone-marrow stage) or PCR for provirus. No maternal-antibody problem (antigen test).',
           'No cure. Supportive care, keep indoors, treat secondary disease. Vaccinate at-risk cats — test before vaccinating. Non-core in indoor-only adults.',
           'Progressive vs. regressive infection. FeLV⁺ cats can outlive expectations. Buzzword: mediastinal lymphoma in a young cat = FeLV.'],
          ['Feline immunodeficiency virus (FIV)\nLentivirus; bite wounds',
           'Adult intact outdoor male tomcat. Gingivostomatitis, chronic rhinitis, weight loss, opportunistic infection, lymphoma. Long asymptomatic phase — many live normal lifespans.',
           'ELISA detects antibody → kittens <6 mo may have maternal antibody (retest after 6 mo); previously vaccinated cats test positive. Confirm with Western blot or PCR.',
           'No cure. Neuter, keep indoors, semi-annual exams, dental care, no MLV vaccines in symptomatic cats. FIV vaccine no longer marketed in the US.',
           'Not zoonotic. Transmission is inefficient by casual contact — FIV⁺ cats can often live with non-aggressive housemates.'],
          ['FIP\nVirulent biotype of feline coronavirus (FCoV)',
           'Cat <2 yr from multi-cat/shelter, purebred. Wet form: straw-colored, high-protein abdominal/pleural effusion, fever unresponsive to abx. Dry form: granulomas, uveitis, retinal vasculitis, neuro signs.',
           'No single test. Support: hyperglobulinemia, A:G ratio <0.4, non-regenerative anemia, ↑bilirubin without hemolysis. Effusion: Rivalta positive, protein >3.5 g/dL, low cellularity. Definitive = immunostaining of FCoV antigen in macrophages / histopath. FCoV serology does NOT diagnose FIP.',
           'GS-441524 antiviral — legally compounded in the US under FDA enforcement discretion (2024); oral route preferred; ≈84 d courses (shorter protocols emerging). Formerly uniformly fatal.',
           'Buzzword: young cat + fever + effusion + low A:G. Pyogranulomatous vasculitis is the lesion. Not contagious as FIP — the enteric FCoV is what spreads.'],
          ['Feline URI complex\nFHV-1 (alphaherpes) + feline calicivirus',
           'FHV-1: sneezing, serous→mucopurulent discharge, conjunctivitis, dendritic corneal ulcers, symblepharon; latency in trigeminal ganglion → stress recrudescence. FCV: oral/lingual ulcers, limping syndrome; virulent systemic FCV = edema, ulcerative dermatitis, high mortality.',
           'PCR (conjunctival/oropharyngeal) — interpret cautiously (carriers, post-vaccination). Fluorescein: branching dendritic ulcer = FHV-1 pathognomonic.',
           'Supportive: nebulization, appetite stimulants (mirtazapine), clean nares. FHV-1: topical/oral famciclovir, idoxuridine/cidofovir; L-lysine of doubtful benefit. Doxycycline if Chlamydia/Mycoplasma suspected. Core FVRCP vaccine reduces severity, not infection.',
           'Never use topical corticosteroids on a fluorescein-positive eye. Dendritic ulcer = herpes; oral ulcers = calici. FCV is non-enveloped → needs bleach / accelerated H₂O₂.']
        ]
      }
    ]
  });

  N.push({
    id: 'id-exotic-companion',
    group: 'Infectious disease',
    title: 'Exotic Companion — Top 3',
    tagline: 'Psittacosis, snuffles, reptile Salmonella — plus the rabbit antibiotic trap.',
    sections: [
      {
        type: 'table', wide: true,
        columns: ['Disease / Agent', 'Key signs & signalment', 'Diagnosis', 'Treatment / control', 'NAVLE flags & buzzwords'],
        rows: [
          ['Psittacosis / avian chlamydiosis\nChlamydia psittaci (birds)',
           'Recently acquired or stressed psittacine (cockatiels, budgies, Amazons). Lethargy, ruffled feathers, bright lime-green urates, biliverdinuria, conjunctivitis, sinusitis, dyspnea, diarrhea. Hepatosplenomegaly.',
           'PCR of combined choanal/cloacal swab (best antemortem); serology + antigen tests as adjuncts; impression smears (Gimenez/Macchiavello). CBC: leukocytosis; ↑AST / bile acids.',
           'Doxycycline 45 days (oral, medicated feed, or IM long-acting). Treat all exposed birds, disinfect (labile — quats, bleach), quarantine new birds 30–45 d. Wear N95 + gloves when cleaning.',
           'ZOONOTIC and REPORTABLE in most states. Human disease = atypical pneumonia, fever, headache; can be severe. Also flag HPAI and virulent Newcastle disease — FEDERALLY REPORTABLE foreign animal diseases.'],
          ['"Snuffles" / rabbit pasteurellosis\nPasteurella multocida (± Bordetella, Staphylococcus)',
           'Pet rabbit: serous → mucopurulent nasal and ocular discharge, matted forepaws from grooming, sneezing, dacryocystitis, head tilt (otitis media/interna), subcutaneous abscesses, pneumonia. Often triggered by poor ventilation/ammonia, crowding, stress.',
           'Deep nasal culture + sensitivity (nares are often contaminated — culture deep or from an abscess). Skull/thoracic rads or CT for otitis, dental disease, and lung abscesses. Rule out dental disease and dacryocystitis — very common mimics.',
           'Enrofloxacin, trimethoprim-sulfa, or azithromycin; long courses; abscesses need excision (rabbit pus is caseous and does not drain). Fix husbandry: ventilation, low-dust bedding, unlimited hay.',
           'NEVER give oral penicillins, ampicillin, amoxicillin, clindamycin, or lincomycin to rabbits — fatal dysbiosis / enterotoxemia (Clostridium spiroforme). Also know RHDV2 — REPORTABLE, sudden death with hepatic necrosis and epistaxis; and Encephalitozoon cuniculi (head tilt, cataracts, renal).'],
          ['Reptile salmonellosis\nSalmonella spp. (turtles, bearded dragons, snakes)',
           'Usually a normal, intermittent gut commensal in a clinically healthy reptile. Can cause septicemia, hepatitis, osteomyelitis, coelomitis in stressed or immunosuppressed animals kept at incorrect temperature.',
           'Fecal/cloacal culture — but a positive culture in a healthy reptile is expected and does not indicate disease; intermittent shedding means negatives don\'t rule out carriage. Blood culture if septic.',
           'Do not attempt to eliminate carriage with antibiotics — ineffective and promotes resistance. Treat clinical illness based on culture/sensitivity + correct the POTZ (preferred optimal temperature zone), humidity, and nutrition.',
           'ZOONOTIC — the key client-education point. No reptiles/amphibians in households with children <5 yr, elderly, pregnant, or immunocompromised people; handwashing; no kitchen sinks or bathtubs for cleaning enclosures. US ban on sale of turtles with shell <4 inches. Also flag canine distemper and influenza in ferrets; Mycobacterium in many exotics.']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
