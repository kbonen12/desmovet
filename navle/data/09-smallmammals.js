/* NAVLE Hub — Small mammals & nonhuman primates
 * Source: NAVLE_Exotics_Avian_Study_Guide.pdf, chapters 6–11
 */
(function (N) {
  N.push({
    id: 'rabbits',
    group: 'Species',
    title: 'Rabbits',
    tagline: 'Other small mammals are 3.3% of the exam. The antibiotic rule is the single most testable fact.',
    weightNote: 'part of the 3.3% "other small mammals" block',
    sections: [
      {
        type: 'table', title: 'Viral disease',
        columns: ['Disease', 'Agent', 'Presentation', 'Diagnosis & control'],
        rows: [
          ['Myxomatosis ⚑R', 'Myxoma virus (poxvirus / leporipoxvirus)', 'In the US, found in California, Oregon, and Baja; carried by cottontail rabbits (the reservoir, which is subclinically infected). In domestic Oryctolagus: fever and acute death, plus periocular/genital edema and skin nodules. Mosquito- and flea-transmitted.', 'PCR. Vector control and insect-proof housing; no treatment. Vaccine available in Europe, not the US.'],
          ['Rabbit Hemorrhagic Disease (RHD / RHDV-2) ⚑R', 'Calicivirus (lagovirus)', 'Two lesions to name: hepatic (liver) necrosis and bleeding — DIC with hemorrhage from the nose. Peracute death in previously healthy rabbits.', 'Foreign animal disease — reportable. Extremely environmentally stable; strict biosecurity. Vaccine available under emergency authorization.']
        ]
      },
      {
        type: 'table', title: 'Bacterial disease',
        columns: ['Disease', 'Agent', 'Presentation', 'Diagnosis & treatment'],
        rows: [
          ['"Snuffles"', 'Pasteurella multocida (pasteurellosis)', 'Serous-to-mucopurulent nasal discharge, sneezing, matted forepaws, conjunctivitis; can progress to abscesses, otitis media/interna, and pneumonia.', 'Diagnose by deep nasal culture. Enrofloxacin, trimethoprim-sulfa; carriers are common.'],
          ['Rabbit syphilis (treponematosis / "vent disease")', 'Treponema paraluis-cuniculi', 'Red, ulcerated, scabby/crusting lesions on the perineum, genitalia, nose, and face. Also causes phacoclastic uveitis and vestibular disease. Venereally and vertically transmitted; NOT zoonotic.', 'PARENTERAL penicillin — NEVER oral. Three weekly injections of penicillin G benzathine/procaine.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Rabbit syphilis and penicillin — the route is the whole answer',
        body: 'Parenteral penicillin G IS the treatment of choice for Treponema paraluis-cuniculi. ORAL penicillins — and the whole narrow-spectrum gram-positive oral group — kill the cecal flora and cause fatal clostridial enterotoxemia. The rule is about the route, not the drug.'
      },
      {
        type: 'table', title: 'Parasitic & protozoal disease',
        columns: ['Parasite', 'Presentation', 'Diagnosis & treatment'],
        rows: [
          ['Encephalitozoon cuniculi ⚑Z', 'Intracellular pathogen (a microsporidian). Head tilt / vestibular disease, posterior paresis, urinary incontinence, and phacoclastic uveitis with a white lenticular mass. Chronic interstitial nephritis.', 'Shed in the URINE. Treat with fenbendazole (28-day course). Zoonotic — beware in immunosuppressed owners. Serology supports but does not confirm.'],
          ['Ear mites / otoacariasis — Psoroptes cuniculi', 'Thick, crusted, tan-brown exudate filling the ear canal; intense pruritus and head shaking. Non-burrowing surface mite.', 'Selamectin (or ivermectin). Do not manually strip the crusts — it is exquisitely painful. Treat all in-contact rabbits and the environment.'],
          ['Cuterebriasis ("warbles")', 'SQ swelling with a breathing pore, from the rodent/rabbit botfly larva. Concern: larval migration to the CNS.', 'Careful whole-larva extraction (rupture → anaphylaxis). Control with antibiotics and NSAIDs. The larva has a fistulous stage.'],
          ['Coccidia — Eimeria', 'E. stiedae = hepatic coccidiosis; intestinal Eimeria spp. → diarrhea in weanlings.', 'Eimeria has 4 sporocysts (vs. Isospora/Cystoisospora = 2). Eimeria infects ruminants, horses, rabbits, and poultry; Isospora infects dogs, cats, and pigs. Dogs and cats can pass Eimeria oocysts spuriously after eating rabbit feces — a classic pseudoparasite trap.'],
          ['Ringworm ⚑Z', 'Trichophyton mentagrophytes dominates in rabbits and small exotics (does not fluoresce under Wood\'s lamp).', 'Terbinafine. Zoonotic.']
        ]
      },
      {
        type: 'table', title: 'Anatomy, reproduction & husbandry',
        columns: ['Concept', 'Key facts'],
        rows: [
          ['Dewlap', 'A heavy fold of skin on the ventral neck, found in intact females (and some large breeds). Predisposes to moist dermatitis ("wet dewlap") and interferes with grooming and drinking.'],
          ['Placentation', 'Rabbits have a hemochorial, discoid placenta — the same type as humans and rodents, and the most invasive type. Contrast with the epitheliochorial, diffuse placenta of the horse and pig, where the maternal and fetal circulations remain completely separate.'],
          ['Induced ovulation', 'The four induced ovulators to memorize: rabbits, cats, ferrets, and camelids (llamas/alpacas).']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Antibiotics that kill rabbits — "PLACE"',
        body: 'The narrow-spectrum, gram-positive oral antibiotics destroy the cecal microflora and cause fatal clostridial (C. spiroforme) enterotoxemia. Penicillins (ampicillin, amoxicillin) · Lincomycin · Ampicillin · Clindamycin/Cephalosporins · Erythromycin. The same list applies to guinea pigs, chinchillas, and hamsters. Safe choices: fluoroquinolones (enrofloxacin), trimethoprim-sulfa, chloramphenicol, and metronidazole; parenteral penicillin is acceptable in rabbits for treponematosis.'
      },
      {
        type: 'rapidfire', title: 'Rapid-fire rabbit recall',
        items: [
          ['Head tilt + posterior paresis + white cataract', 'E. cuniculi → fenbendazole, shed in urine, zoonotic'],
          ['Crusty perineum and face lesions', 'Rabbit syphilis → parenteral penicillin'],
          ['Crusted ear canal', 'Psoroptes cuniculi → selamectin'],
          ['Peracute death + liver necrosis + bleeding', 'RHDV (calicivirus) — reportable'],
          ['Fever / acute death in Oregon or California, cottontail source', 'Myxomatosis → PCR'],
          ['Nasal discharge', 'Snuffles (Pasteurella) → deep nasal culture'],
          ['Ringworm in a rabbit', 'T. mentagrophytes → terbinafine']
        ]
      }
    ]
  });

  N.push({
    id: 'ferrets',
    group: 'Species',
    title: 'Ferrets',
    tagline: 'Adrenal disease, hyperestrogenism, and a 100%-fatal shared virus.',
    weightNote: 'part of the 3.3% "other small mammals" block',
    sections: [
      {
        type: 'table', title: 'Endocrine & neoplastic disease',
        columns: ['Condition', 'Presentation', 'Diagnosis & treatment'],
        rows: [
          ['Adrenal disease ("ferret hyperadrenocorticism")', 'The main endocrinopathy of the ferret; onset around 3.5 years of age. Symmetric truncal alopecia starting at the tail base, pruritus, vulvar swelling in spayed females, prostatic enlargement and stranguria in males, and return of sexual behavior.', 'Abdominal ultrasound to find the enlarged adrenal, plus a sex-steroid (adrenal) panel. Treat by adrenalectomy or deslorelin implant.'],
          ['Hyperestrogenism / estrogen toxicity', 'Caused by persistent estrus — the jill is an induced ovulator, so an unbred, unmated female stays in estrus and estradiol rises unchecked.', 'Leads to bone-marrow suppression → APLASTIC ANEMIA (pancytopenia). Prevent by spaying, hCG/GnRH, or a vasectomized hob.'],
          ['Splenomegaly', 'Extremely common on physical exam.', 'Usually an INCIDENTAL finding (extramedullary hematopoiesis). Do not chase it unless there are other abnormalities.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'This is not true Cushing\'s',
        body: 'Despite the nickname, ferret adrenal disease is not classic hyperadrenocorticism: the tumors secrete sex steroids (estradiol, androstenedione, 17-OH-progesterone), not cortisol. That is why an ACTH stimulation test and a LDDS are unhelpful, and why the diagnostic test is a sex-steroid panel plus ultrasound rather than a cortisol test. Pathogenesis is linked to early neutering and loss of gonadal negative feedback on LH.'
      },
      {
        type: 'table', title: 'Infectious disease',
        columns: ['Disease', 'Agent', 'Presentation', 'Management'],
        rows: [
          ['Canine distemper', 'Morbillivirus (paramyxovirus)', 'Essentially 100% fatal in ferrets — the virus both ferrets and dogs get. Classic signs: pruritic chin/inguinal rash, hyperkeratosis of the footpads, ocular-nasal discharge, then CNS disease.', 'Vaccinate (ferret-approved recombinant vaccine). No treatment; euthanasia.'],
          ['Aleutian disease', 'Parvovirus', 'Weight loss + hind limb weakness + hypergammaglobulinemia + glomerulonephritis.', 'The tested concept is the mechanism: disease is caused by immune-complex deposition, not direct viral cytopathic effect — which is what distinguishes it from every other parvoviral disease you have learned.'],
          ['Epizootic catarrhal enteritis ("green slime disease")', 'Coronavirus', 'Vomiting and diarrhea — profuse bright-green mucoid stool. Older ferrets often become chronic.', 'Supportive care; introduction of a new ferret is the classic history.'],
          ['Influenza ⚑Z', 'Influenza A', 'Ferrets are bidirectionally zoonotic with humans — they catch human flu and give it back. Sneezing, fever, nasal discharge.', 'Supportive care. Owners with flu should avoid handling.']
        ]
      },
      {
        type: 'table', title: 'Urinary & reproductive',
        columns: ['Topic', 'Key facts'],
        rows: [
          ['Urolithiasis', 'Struvite was the historical stone (plant-protein-based diets, alkaline urine), while cystine uroliths have become the predominant ferret stone on modern high-quality diets. Male ferrets obstruct readily — a urethral obstruction is a surgical emergency.'],
          ['Induced ovulator', 'Ferrets join rabbits, cats, and camelids on the induced-ovulation list. This is the root of hyperestrogenism.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire ferret recall',
        items: [
          ['Tail-base alopecia + vulvar swelling in a 3.5-year-old', 'Adrenal disease (sex steroids, not cortisol)'],
          ['Pancytopenia in an intact jill in prolonged estrus', 'Hyperestrogenism → aplastic anemia'],
          ['Weight loss + hind limb weakness + hypergammaglobulinemia', 'Aleutian disease (immune complexes)'],
          ['Bright green diarrhea after a new ferret arrived', 'ECE (coronavirus)'],
          ['Big spleen, otherwise well', 'Incidental — extramedullary hematopoiesis'],
          ['100% mortality virus shared with dogs', 'Canine distemper']
        ]
      }
    ]
  });

  N.push({
    id: 'rodents',
    group: 'Species',
    title: 'Guinea Pigs, Chinchillas & Rodents',
    tagline: 'Vitamin C, dysbiosis, and a handful of very specific lab-animal syndromes.',
    weightNote: 'part of the 3.3% "other small mammals" block',
    sections: [
      {
        type: 'table', title: 'Guinea pigs',
        columns: ['Topic', 'Key facts'],
        rows: [
          ['Hypovitaminosis C (scurvy) — the single most-tested guinea pig fact', 'Guinea pigs (like primates and humans) lack L-gulonolactone oxidase, the enzyme converting L-gulonolactone → L-ascorbic acid, so vitamin C is a dietary essential. Deficiency → defective collagen: lameness and reluctance to move, swollen painful joints, gingival bleeding, poor wound healing, and rough coat. Supplement with fresh vegetables and stabilized vitamin C pellets. Vitamin C degrades rapidly in stored pellets and in water.'],
          ['Vitamin C excess', 'Excess vitamin C predisposes to CALCIUM OXALATE UROLITHIASIS (ascorbate is metabolized to oxalate). Guinea pigs are already prone to urolithiasis; do not oversupplement.'],
          ['Contraindicated antibiotics', 'Penicillins (ampicillin, amoxicillin), cephalosporins, clindamycin, lincomycin, and erythromycin cause fatal clostridial dysbiosis. The same list applies broadly to rabbits, chinchillas, and hamsters.'],
          ['Pneumonia', 'Bordetella bronchiseptica and Streptococcus pneumoniae are the classic pneumonia agents. Streptococcus equi subsp. zooepidemicus causes cervical lymphadenitis ("lumps") that can extend to pneumonia. Rabbits are asymptomatic Bordetella carriers — never house them with guinea pigs.'],
          ['Coccidiosis', 'Predisposed in the YOUNG. Eimeria caviae; diarrhea in weanlings; treat with sulfonamides and improve sanitation.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire guinea pig recall',
        items: [
          ['Won\'t walk, painful joints, bleeding gums', 'Vitamin C deficiency'],
          ['Bladder stone', 'Calcium oxalate, worsened by too much vitamin C'],
          ['Cervical "lumps"', 'Strep equi subsp. zooepidemicus'],
          ['Housed with a rabbit, now has pneumonia', 'Bordetella bronchiseptica'],
          ['Any oral penicillin', 'Dead guinea pig']
        ]
      },
      {
        type: 'table', title: 'Chinchillas',
        columns: ['Topic', 'Key facts'],
        rows: [
          ['Fatal antibiotic dysbiosis', 'Amoxicillin (and the whole penicillin / cephalosporin / clindamycin / lincomycin / erythromycin group) causes fatal dysbiosis. Use FLUOROQUINOLONES instead (enrofloxacin), or trimethoprim-sulfa, chloramphenicol, or metronidazole.'],
          ['Bacterial enteritis', 'Three organisms causing diarrhea/gastroenteritis: Proteus, E. coli, and Pseudomonas — all GRAM NEGATIVE.'],
          ['Pseudomonas infection', 'Causes conjunctivitis with a white discharge (and otitis, metritis, septicemia). Waterborne — contaminated water bottles are the classic source. Treat with aminoglycosides — gentamicin or neomycin.'],
          ['Dermatophytosis ⚑Z', 'Trichophyton mentagrophytes dominates in chinchillas and small exotics — it does NOT fluoresce under a Wood\'s lamp. Add antifungal powder to the dust bath.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Dermatophyte species by host — a table worth memorizing whole',
        list: [
          'Dogs/cats: Microsporum canis (most common; fluoresces apple-green), M. gypseum (geophilic, does not fluoresce), T. mentagrophytes (less common, zoonotic, does not fluoresce).',
          'Chinchillas / rabbits / small exotics: T. mentagrophytes dominates → treat with terbinafine.',
          'Cattle: T. verrucosum — thick gray-white crusts, especially around the eyes/face in calves.',
          'Poultry: Trichophyton (Lophophyton) gallinae = favus / "white comb" → miconazole.',
          'Only M. canis reliably fluoresces, and only about half the time. Culture (DTM) is definitive.'
        ]
      },
      {
        type: 'table', title: 'Hamsters',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Renal amyloidosis', 'Older Syrian (golden) hamster with PU/PD, weight loss, and ascites. Leads to glomerulonephropathy and chronic renal failure with severe proteinuria and hypoalbuminemia (hence the ascites). More common in females. Diagnose with CONGO RED stain (apple-green birefringence under polarized light).'],
          ['"Wet tail" (proliferative ileitis)', 'Lawsonia intracellularis — the same organism as porcine proliferative enteropathy. Watery diarrhea, wet perineum, high mortality in recently weaned/shipped 3–8 week old hamsters. Treat with tetracycline/metronidazole and fluids; stress reduction is key.'],
          ['Lymphocytic choriomeningitis (LCM) ⚑Z', 'Arenavirus. Hamsters, mice, and rats are the reservoir hosts. A type IV hypersensitivity disease — the immune response, not the virus, causes the lesions. Zoonotic; teratogenic in human pregnancy.']
        ]
      },
      {
        type: 'table', title: 'Rats & mice',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Chromodacryorrhea ("red tears")', 'Porphyrin secretion from the Harderian gland behind the eye in rats. It is NOT blood — it is a non-specific stress indicator. Look for the underlying husbandry problem or disease.'],
          ['Tail ring / ringtail', 'Annular constrictions of the tail from low environmental humidity. Prevent by maintaining humidity at 40–70%; treat by adding fatty acids to the diet and lanolin to the tails.'],
          ['Mousepox', 'Ectromelia virus (an orthopoxvirus) — lethal; causes limb necrosis and amputation ("ectromelia" = missing limb). A major laboratory-colony catastrophe.'],
          ['Epizootic diarrhea of infant mice (EDIM)', 'Rotavirus. Yellow, watery diarrhea in suckling mice; low mortality but high morbidity.'],
          ['Mouse hepatitis virus (MHV)', 'Coronavirus. One of the most prevalent and disruptive infections of laboratory mouse colonies.'],
          ['Lice', 'Polyplax spinulosa — the SUCKING louse of rats (narrow, pointed head). Rats do NOT get chewing lice. P. serrata is the mouse equivalent.'],
          ['Tropical rat mite ⚑Z', 'Ornithonyssus bacoti — a mite from rats that will infest a person\'s home and bite humans (papular dermatitis). Treat with pyrethroids or fipronil PLUS environmental decontamination — treating only the rat fails.']
        ]
      },
      {
        type: 'table', title: 'Hedgehogs',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Wobbly hedgehog syndrome', 'A progressive demyelinating disease causing ataxia and ascending paralysis in African pygmy hedgehogs, typically beginning before 2 years of age. Starts with hind-limb ataxia and progresses to tetraparesis over months. Suspected hereditary; no treatment; diagnosis is definitive only on post-mortem histopathology.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire rodent & hedgehog recall',
        items: [
          ['Old Syrian hamster, PU/PD, ascites', 'Renal amyloidosis → Congo red'],
          ['Wet tail', 'Lawsonia intracellularis'],
          ['Red tears in a rat', 'Chromodacryorrhea — porphyrin, not blood, means stress'],
          ['Constricted dry tail', 'Ringtail — raise humidity to 40–70%'],
          ['Mite from rats infesting the owner\'s house', 'Ornithonyssus bacoti'],
          ['Sucking louse on a rat', 'Polyplax spinulosa'],
          ['Lethal mouse poxvirus', 'Ectromelia'],
          ['Hamster/mouse arenavirus, zoonotic, type IV HSR', 'LCMV'],
          ['Ataxic young hedgehog', 'Wobbly hedgehog syndrome — demyelinating, no treatment']
        ]
      }
    ]
  });

  N.push({
    id: 'primates',
    group: 'Species',
    title: 'Nonhuman Primates',
    tagline: 'Primate medicine is zoonosis medicine — know the direction of transmission for each agent.',
    weightNote: 'not separately weighted by the ICVA',
    sections: [
      {
        type: 'table',
        columns: ['Agent', 'Family', 'Disease', 'Direction & significance'],
        rows: [
          ['Rubella (German measles)', 'Togavirus', 'Mild; not a concern in nonhuman primates.', 'Contrast with rubeola below — this is the "not the answer" option.'],
          ['Rubeola (measles)', 'Paramyxoviridae — morbillivirus', 'Serious, fatal disease in nonhuman primates: rash, respiratory signs, and conjunctivitis.', 'Transmitted from HUMANS to PRIMATES — anthroponosis. Vaccinate staff and quarantine.'],
          ['Marburg virus ⚑Z', 'Filoviridae — same family as Ebola; enveloped, negative-sense RNA', 'Viral hemorrhagic fever. Named for Marburg, Germany, where it was identified in 1967 after outbreaks in laboratory workers handling African green (vervet) monkeys imported from Uganda.', 'BSL-4 pathogen. Natural reservoir: fruit bats.'],
          ['Herpes B (Cercopithecine herpesvirus 1 / Macacine alphaherpesvirus 1) ⚑Z', 'Alphaherpesvirus', 'Nearly asymptomatic in the macaque host (oral vesicles). In humans, a MACAQUE BITE or scratch causes fatal ascending encephalomyelitis.', 'The single most important occupational hazard in primate medicine. Immediate scrub and post-exposure acyclovir/valacyclovir.'],
          ['Hepatitis A ⚑Z', 'Picornavirus', 'Affects Old World primates (chimpanzees and macaques) and causes hepatitis.', 'Fecal–oral transmission; zoonotic.'],
          ['Hepatitis B', 'Hepadnavirus', 'Affects chimpanzees, which become chronic carriers.', 'Blood-borne; the chronic carrier state is the tested point.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire primate recall',
        items: [
          ['Macaque bite', 'Herpes B → fatal human encephalitis'],
          ['Rash + respiratory + conjunctivitis, fatal, from a human caretaker', 'Rubeola (morbillivirus), not rubella'],
          ['Filovirus from African green monkeys, 1967, Germany, fruit bat reservoir', 'Marburg (BSL-4)'],
          ['Fecal–oral zoonotic hepatitis of Old World primates', 'Hepatitis A'],
          ['Chronic carrier chimps', 'Hepatitis B'],
          ['Cannot synthesize vitamin C', 'Primates, like guinea pigs']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
