/* NAVLE Hub — Orientation module
 * Source: NAVLE_Study_Guide.docx (ICVA published blueprint + high-yield lists)
 */
(function (N) {
  N.push({
    id: 'blueprint',
    group: 'Start here',
    title: 'Exam Blueprint & Strategy',
    tagline: 'Where the 360 questions actually come from — and where to spend your hours.',
    sections: [
      {
        type: 'callout', variant: 'warn', title: 'Honesty note',
        body: 'The NAVLE is a secure, copyrighted exam. The ICVA does not release real questions, so no legitimate list of "actual past questions" exists. What follows is the published ICVA blueprint plus the content areas that students and major review programs consistently flag as high-yield. Use it to prioritize, not as leaked content.'
      },
      {
        type: 'chart', title: 'Species distribution (ICVA target %)',
        note: 'The exam is 360 multiple-choice questions. Study time should roughly track these weights.',
        data: [
          ['Canine', 25.6], ['Feline', 24.3], ['Equine', 14.7], ['Bovine', 13.3],
          ['Porcine', 5], ['Other small mammals', 3.3], ['Ovine/Caprine', 3.3],
          ['Pet bird', 2.3], ['Poultry', 2], ['Camelid/Cervidae', 1.7],
          ['Reptiles', 1.5], ['Aquatics', 1], ['Non species-specific', 2]
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Takeaway',
        body: 'Dogs + cats ≈ 50% of the exam. Equine + bovine + small ruminant + porcine together ≈ 36%. Exotics and aquatics are individually small but add up — know the 2–3 biggest diagnoses per group rather than skipping them entirely.'
      },
      {
        type: 'chart', title: 'Competency domain distribution (ICVA target %)',
        note: 'Clinical practice — history, exam findings, diagnostics, case management — is ~70% of the exam. This is why case-based vignette practice matters more than bare recall alone.',
        data: [
          ['Data Gathering & Interpretation', 35], ['Health Maintenance & Problem Mgmt', 35],
          ['Animal Welfare / Preventive Med', 15], ['Client Communication', 5],
          ['Environmental Health & Safety', 5], ['Practice Management', 4],
          ['Veterinary Public Health', 4], ['Communication w/ Vet Professionals', 3],
          ['Professional Development', 3]
        ],
        footnote: 'Animal Welfare / Preventive Medicine is published as a 6–15% range; the upper bound is shown.'
      },
      {
        type: 'table', title: 'Commonly missed / underperformed areas',
        columns: ['Area', 'Why points are lost'],
        rows: [
          ['Calculations', 'Fluid rates, CRIs, drug dose conversions, anion gap / acid–base math. Practice under time pressure, not just conceptually — for most students this is a speed gap, not a knowledge gap.'],
          ['Toxicology', 'Ethylene glycol, chocolate/xylitol, NSAID and rodenticide, lead, ivermectin toxicity in herding breeds, large animal plant toxicities.'],
          ['Public health & regulatory', 'Reportable and foreign animal diseases — who to notify, federal vs. state authority. Zoonotic transmission and prevention. Rabies post-exposure protocols.'],
          ['Food safety', 'Withdrawal times for food animals, meat and milk residue avoidance, AMDUCA and extralabel drug rules.'],
          ['Practice management & legal', 'Controlled substance handling, medical records, informed consent, professional ethics.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Calculations — don\'t skip practice',
        body: 'Fluid rates, CRIs, and drug dose conversions aren\'t a knowledge gap for most students — they\'re a speed gap. Practice a handful under timed conditions so the arithmetic doesn\'t eat into time you need for reasoning through the case itself.'
      }
    ]
  });

  N.push({
    id: 'bread-and-butter',
    group: 'Start here',
    title: 'Bread & Butter by Species',
    tagline: 'The common presentations that show up far more often than the zebras. Master these cold first.',
    sections: [
      { type: 'list', title: 'Canine', items: [
        'Diabetes mellitus & DKA, hypothyroidism, hyperadrenocorticism (Cushing\'s) vs. Addison\'s',
        'Parvovirus, distemper, kennel cough complex, leptospirosis',
        'IMHA, ITP, von Willebrand disease',
        'GDV, IBD, pancreatitis, hepatic disease / portosystemic shunt',
        'Degenerative joint disease, IVDD, cranial cruciate rupture, hip dysplasia',
        'Dilated cardiomyopathy, mitral valve disease, heartworm disease',
        'Dermatology: atopic dermatitis, otitis externa, demodicosis vs. sarcoptic mange'
      ]},
      { type: 'list', title: 'Feline', items: [
        'Hyperthyroidism, diabetes mellitus, CKD (very high yield — know IRIS staging)',
        'FLUTD / urethral obstruction (emergency recognition), FIP, FeLV/FIV',
        'Hypertrophic cardiomyopathy, asthma / bronchitis',
        'Hepatic lipidosis, triaditis, IBD'
      ]},
      { type: 'list', title: 'Equine', items: [
        'Colic classification (large vs. small intestine, strangulating vs. non-strangulating) — heavily tested clinical reasoning',
        'Laminitis, colitis (Salmonella, Potomac horse fever), equine metabolic syndrome / PPID',
        'Respiratory: strangles, equine influenza, recurrent airway obstruction',
        'Lameness / orthopedic exam localization, EPM, botulism, tetanus',
        'Reproductive: dystocia, neonatal (failure of passive transfer, sepsis)'
      ]},
      { type: 'list', title: 'Bovine', items: [
        'LDA/RDA, ketosis, hypocalcemia (milk fever), retained placenta, metritis',
        'BVDV, IBR, bovine respiratory disease complex (shipping fever)',
        'Johne\'s disease, coccidiosis, calf scours (rotavirus / coronavirus / E. coli / crypto)',
        'Mastitis (types & SCC interpretation), herd health / reproductive programs, pregnancy diagnosis timing'
      ]},
      { type: 'list', title: 'Small ruminants & camelids', items: [
        'Caseous lymphadenitis, CAE/OPP, parasitism (Haemonchus, FAMACHA), enterotoxemia (Clostridium perfringens)',
        'Pregnancy toxemia, polioencephalomalacia, urolithiasis in males'
      ]},
      { type: 'list', title: 'Porcine', items: [
        'PRRS, swine influenza, African swine fever (foreign animal disease awareness), erysipelas',
        'Herd biosecurity, production medicine, neonatal piglet diarrhea'
      ]},
      { type: 'list', title: 'Poultry & pet birds', items: [
        'Marek\'s disease, avian influenza (reportable disease protocols), infectious bronchitis',
        'Psittacine: PBFD, chlamydiosis (zoonotic — know the reporting duty)'
      ]},
      { type: 'list', title: 'Exotics, reptiles & small mammals', items: [
        'Metabolic bone disease (reptiles), GI stasis (rabbits / guinea pigs), dental disease (rodents / rabbits)',
        'Hindgut fermenter nutrition principles'
      ]}
    ]
  });
})(window.NAVLE_MODULES);
