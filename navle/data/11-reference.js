/* NAVLE Hub — Reference appendices
 * Sources: Exotics guide appendices A–C, plus reportable content from the ID guide.
 */
(function (N) {
  N.push({
    id: 'reportable',
    group: 'Cross-cutting',
    title: 'Reportable & Zoonotic',
    tagline: 'The NAVLE rarely asks you to treat a reportable disease. It asks what you do next.',
    sections: [
      {
        type: 'callout', variant: 'danger', title: 'How reportables are tested',
        body: 'The answer is almost always: notify the State Animal Health Official / USDA Area Veterinarian in Charge, do not move animals, and depopulate as directed. If a question offers "treat with X" alongside "contact the authorities" for one of the diseases below, pick the authorities. Report on suspicion — do not wait for confirmatory lab testing.'
      },
      {
        type: 'table', title: 'Reportable / foreign animal diseases',
        columns: ['Species group', 'Disease', 'Agent', 'The correct action'],
        rows: [
          ['Multi-species', 'Foot-and-mouth disease', 'Aphthovirus (picornavirus)', 'Foreign animal disease in the US; cattle, swine, sheep, goats. Any vesicular lesion → call the state vet immediately.'],
          ['Cattle', 'Vesicular stomatitis', 'Vesiculovirus', 'Endemic in parts of the US; insect-transmitted; zoonotic. Cannot be distinguished from FMD clinically — report for lab differentiation.'],
          ['Cattle', 'BVDV mucosal disease (as an FMD differential)', 'Pestivirus', 'Erosive oral lesions require reporting to rule out vesicular foreign animal disease.'],
          ['Swine', 'African swine fever', 'Asfarvirus', 'High fever, cyanotic skin, splenomegaly, high mortality. REPORTABLE.'],
          ['Swine', 'Classical swine fever', 'Pestivirus', 'REPORTABLE foreign animal disease.'],
          ['Swine', 'Pseudorabies', 'Herpesvirus', 'REPORTABLE.'],
          ['Equine', 'Equine infectious anemia', 'Lentivirus', 'FEDERALLY REPORTABLE. Negative Coggins required for interstate travel, sales, shows.'],
          ['Equine', 'EHV-1 myeloencephalopathy (EHM)', 'Alphaherpesvirus', 'Reportable in most states. Strangles is reportable in many states.'],
          ['Small ruminant', 'Scrapie', 'Prion', 'REPORTABLE — pruritus, wool loss, ataxia. Official ID / flock certification program.'],
          ['Avian', 'Highly pathogenic avian influenza ⚑Z', 'Influenza A', 'RT-PCR of choanal cleft & tracheal swabs; immediate report; depopulate.'],
          ['Avian', 'Virulent Newcastle disease', 'Avian paramyxovirus-1', 'Report; proventricular / gizzard petechiae.'],
          ['Avian', 'Infectious laryngotracheitis', 'Herpesvirus', 'Report; bloody beaks and gasping.'],
          ['Avian', 'Infectious bursal disease', 'Birnavirus', 'Report; the reportable immune-system disease of birds.'],
          ['Avian', 'Avian chlamydiosis / psittacosis ⚑Z', 'Chlamydia psittaci', 'Report to public health; doxycycline 45 days.'],
          ['Avian', 'Salmonella pullorum / gallinarum', 'Salmonella', 'NPIP test-and-slaughter.'],
          ['Rabbit', 'Rabbit hemorrhagic disease (RHDV-2)', 'Calicivirus', 'Foreign animal disease — report; liver necrosis + bleeding.'],
          ['Rabbit', 'Myxomatosis', 'Myxoma poxvirus', 'PCR; cottontail reservoir; CA/OR/Baja.'],
          ['Fish', 'Tilapia Lake Virus', 'Orthomyxovirus', 'Notify authorities; depopulate. 10–90% mortality.'],
          ['Fish', 'Infectious salmon anemia', 'Orthomyxovirus (isavirus)', 'No treatment; eradicate the entire stock.'],
          ['Fish', 'Infectious hematopoietic necrosis', 'Novirhabdovirus', 'Notify; endemic PNW / Alaska.'],
          ['Fish', 'Megalocytivirus (ISKNV / scale drop)', 'Iridovirus', 'PCR of spleen & kidney, then report.'],
          ['Fish', 'Epizootic ulcerative syndrome', 'Aphanomyces invadans', 'Contact the federal authorities.'],
          ['Other', 'Screwworm', 'Cochliomyia hominivorax', 'REPORTABLE foreign animal disease.']
        ]
      },
      {
        type: 'table', title: 'Zoonoses',
        columns: ['Agent', 'Animal source', 'Human disease & transmission'],
        rows: [
          ['Leptospira interrogans', 'Dogs, rodents, wildlife', 'Acute kidney and liver injury; contact with infected urine. Gloves, warn the owner.'],
          ['Chlamydia psittaci', 'All birds', 'Psittacosis — atypical pneumonia. Inhalation of aerosolized dried droppings.'],
          ['Avian influenza', 'Poultry, waterfowl', 'Conjunctivitis to fatal pneumonia. Occupational.'],
          ['Mycobacterium avium', 'Birds, reptiles', 'Disseminated disease in immunocompromised people.'],
          ['Cryptococcus neoformans', 'Pigeon droppings', 'Meningitis in immunocompromised people; birds are environmental hosts, not clinically ill.'],
          ['Encephalitozoon cuniculi', 'Rabbits — shed in URINE', 'Microsporidiosis; beware the immunosuppressed owner.'],
          ['Herpes B virus', 'Macaques — bites/scratches', 'Fatal ascending encephalomyelitis. The great occupational hazard of primate work.'],
          ['Marburg virus', 'African green monkeys; fruit bat reservoir', 'Viral hemorrhagic fever. BSL-4.'],
          ['Hepatitis A', 'Old World primates', 'Fecal–oral hepatitis.'],
          ['LCMV (arenavirus)', 'Hamsters, mice, rats', 'Aseptic meningitis; teratogenic in pregnancy. Type IV hypersensitivity pathology in the host.'],
          ['Ornithonyssus bacoti', 'Rats', 'Tropical rat mite — infests homes, causes papular dermatitis in people.'],
          ['Dermatophytes (T. mentagrophytes)', 'Rabbits, chinchillas, small exotics', 'Ringworm. Does not fluoresce.'],
          ['Pentastomes', 'Reptiles', 'Visceral pentastomiasis; humans are accidental intermediate hosts.'],
          ['Salmonella', 'Reptiles, amphibians, poultry, backyard flocks', 'The classic pet-reptile and backyard-chicken zoonosis. Hand hygiene; no reptiles in homes with children <5.'],
          ['Influenza A', 'Ferrets — bidirectional', 'Ferrets catch human flu and transmit it back.'],
          ['Gnathostoma', 'Fish', 'Acquired by ingesting undercooked fish → migratory cutaneous swellings and, rarely, CNS disease.'],
          ['Tularemia', 'Rabbits and rodents (via ticks)', 'Dogs and cats become exposed by hunting tick-bitten rabbits and rodents; then infect people.'],
          ['Erysipelothrix rhusiopathiae', 'Swine, turkeys, fish', '"Erysipeloid" / fish-handler\'s disease — cellulitis from skin puncture in handlers, butchers, fishermen.'],
          ['Corynebacterium pseudotuberculosis', 'Sheep, goats', 'Caseous lymphadenitis — rare zoonosis.'],
          ['Orf (parapoxvirus)', 'Sheep, goats', 'Painful nodule on the human hand or finger. Wear gloves.'],
          ['Chlamydia abortus, Coxiella burnetii (Q fever)', 'Sheep, goats', 'Abortion agents dangerous to pregnant women.'],
          ['Bordetella bronchiseptica', 'Dogs (CIRDC)', 'Risk in immunocompromised people.']
        ]
      }
    ]
  });

  N.push({
    id: 'therapeutics',
    group: 'Cross-cutting',
    title: 'Therapeutics & Drug Safety',
    tagline: 'The species-specific traps: what kills a rabbit, a cat, a chelonian, a food animal residue.',
    sections: [
      {
        type: 'callout', variant: 'danger', title: 'The hindgut-fermenter antibiotic rule',
        body: 'APPLIES TO RABBITS, GUINEA PIGS, CHINCHILLAS, AND HAMSTERS. NEVER give orally: penicillins (ampicillin, amoxicillin) · cephalosporins · clindamycin · lincomycin · erythromycin. These narrow-spectrum, gram-positive-targeting drugs wipe out the normal cecal flora, allowing Clostridium (C. spiroforme, C. difficile) overgrowth → fatal enterotoxemia. SAFE: fluoroquinolones (enrofloxacin) · trimethoprim-sulfa · chloramphenicol · metronidazole · aminoglycosides (gentamicin, neomycin) · tetracyclines. The exception: parenteral penicillin G is the treatment of choice for rabbit syphilis. The route, not the drug, is what kills.'
      },
      {
        type: 'callout', variant: 'danger', title: 'Absolute species contraindications to memorize',
        list: [
          'Cats: cisplatin (fatal pulmonary edema) and 5-fluorouracil (fatal neurotoxicity, including from licking an owner\'s topical cream).',
          'Chelonians (turtles and tortoises) and some skinks: ivermectin is fatal — safe in snakes and lizards.',
          'Rabbits, guinea pigs, chinchillas, hamsters: oral penicillins and the narrow-spectrum gram-positive group.',
          'African grey parrots: sensitive to itraconazole.',
          'MDR1 (ABCB1-1Δ) herding breeds: ivermectin at high doses, plus reduced clearance of vincristine, vinblastine, doxorubicin, actinomycin D.',
          'West Highland White Terriers: avoid rabacfosadine (pulmonary fibrosis).',
          'Poultry: no extralabel fluoroquinolones; effectively no extralabel drug use in laying hens.',
          'Cattle: fluoroquinolone use is prohibited extralabel.'
        ]
      },
      {
        type: 'table', title: 'Drug-to-disease quick table (exotic & avian)',
        columns: ['Drug', 'Species', 'Indication'],
        rows: [
          ['MS-222 (tricaine)', 'Fish', 'Anesthesia and euthanasia. 21-day withdrawal. Buffer with bicarbonate.'],
          ['Aquacalm (metomidate)', 'Ornamental fish', 'Sedation/anesthesia — ornamental (non-food) fish only.'],
          ['Formalin / hydrogen peroxide', 'Fish', 'Saprolegnia and other water molds.'],
          ['Copper sulfate / H₂O₂ / chloroquine', 'Marine fish', 'Amyloodinium (velvet disease).'],
          ['Doxycycline ± tobramycin', 'All birds', 'Chlamydia psittaci — 45-day course.'],
          ['Itraconazole', 'Pet birds', 'Aspergillosis. (Avoid in African greys.)'],
          ['Nystatin', 'Pet birds', 'Candidiasis (individual bird).'],
          ['Copper sulfate', 'Poultry', 'Candidiasis (flock, in water).'],
          ['Miconazole', 'Poultry', 'Favus / white comb.'],
          ['Ivermectin', 'Birds, snakes, lizards', 'Knemidocoptes, snake mites. FATAL IN CHELONIANS.'],
          ['Amprolium', 'Poultry', 'Coccidiosis (thiamine analog).'],
          ['Fenbendazole', 'Poultry', 'Ascaridia, Heterakis, Capillaria.'],
          ['Fenbendazole', 'Rabbits', 'Encephalitozoon cuniculi — 28 days.'],
          ['Sulfonamides', 'Birds', 'Coccidiosis.'],
          ['Sulfonamides + pyrimethamine', 'Birds', 'Leucocytozoonosis.'],
          ['Chloroquine + primaquine', 'Penguins, raptors', 'Avian malaria (Plasmodium).'],
          ['Tetracycline', 'Poultry', 'Fowl cholera; Bordetella avium secondaries.'],
          ['Enrofloxacin', 'Birds (individual)', 'Severe bumblefoot (systemic). Prohibited extralabel in poultry.'],
          ['Selamectin', 'Rabbits', 'Psoroptes cuniculi ear mites.'],
          ['Terbinafine', 'Rabbits, chinchillas', 'Ringworm (T. mentagrophytes).'],
          ['Penicillin G — PARENTERAL only', 'Rabbits', 'Rabbit syphilis (Treponema paraluis-cuniculi).'],
          ['Gentamicin / neomycin', 'Chinchillas', 'Pseudomonas.'],
          ['Fluoroquinolones', 'Chinchillas, rabbits, guinea pigs', 'The default safe antibiotic class.'],
          ['Metronidazole', 'Snakes', 'Entamoeba invadens.'],
          ['Pyrethroids / fipronil', 'Rats', 'Ornithonyssus bacoti — plus environmental decontamination.'],
          ['Vitamin C', 'Guinea pigs', 'Scurvy. Do not oversupplement → calcium oxalate stones.'],
          ['Riboflavin', 'Chicks', 'Curled toe paralysis — fully reversible if caught early.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Two naming details that show up as distractors',
        list: [
          'The agent of psittacosis is currently <b>Chlamydia psittaci</b>. The genus was split into Chlamydophila in 1999 and reunified in 2015, so either name may appear on older material.',
          'The agent of infectious coryza is <b>Avibacterium paragallinarum</b> — reclassified out of Haemophilus, so older sources name it as a Haemophilus species.'
        ]
      }
    ]
  });

})(window.NAVLE_MODULES);
