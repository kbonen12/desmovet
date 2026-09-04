/* NAVLE Hub — Avian
 * Source: NAVLE_Exotics_Avian_Study_Guide.pdf, chapters 1–3
 */
(function (N) {
  N.push({
    id: 'petbirds',
    group: 'Species',
    title: 'Pet Birds & Psittacines',
    tagline: 'Pet bird is 2.3% of the exam. Three questions come up over and over.',
    weight: 2.3,
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'The three questions the NAVLE asks over and over',
        list: [
          'Polyomavirus vs. PBFD (circovirus) — acute nestling death vs. chronic feather loss.',
          'Chlamydia psittaci — zoonotic + reportable, biliverdinuria, doxycycline.',
          'Hypovitaminosis A — all-seed diet, squamous metaplasia, white plaques, sinusitis.'
        ]
      },
      {
        type: 'table', title: 'Viral disease',
        columns: ['Disease', 'Agent', 'Signs / lesions', 'Diagnosis & management'],
        rows: [
          ['Psittacine Beak & Feather Disease (PBFD)', 'Circovirus', 'Progressive, symmetric feather loss and abnormal feather regrowth over months; abnormal beak growth and beak lesions; immunosuppression with recurrent secondary infections. Young psittacines.', 'PCR; quarantine affected and carrier birds. Transmitted by fomites (feather dust is highly environmentally stable). No treatment.'],
          ['Budgerigar Fledgling Disease', 'Polyomavirus', 'Peracute death in nestlings/fledglings. Abdominal distention, SQ hemorrhage, delayed crop emptying / crop stasis, ascites. Necropsy: hepatomegaly + hemorrhage.', 'Classic history = breeding facility or exotic pet show exposure; birds not yet fully feathered. Basophilic intranuclear inclusion bodies are the hallmark.'],
          ['Pacheco\'s disease', 'Herpesvirus', 'Sudden death in young birds with hepatic necrosis. Often no premonitory signs.', 'Think herpes any time you see peracute death + liver necrosis in psittacines.'],
          ['Proventricular Dilatation Disease ("macaw wasting disease")', 'Avian bornavirus', 'Weakness, ataxia (it is a ganglioneuritis — GI and CNS), weight loss despite eating, regurgitation, undigested seed in droppings.', 'Supportive care only. Radiographs show a dilated proventriculus.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Polyomavirus vs. PBFD — the discriminator',
        body: 'Sudden death in nestling budgies/psittacines from a breeding facility, hepatomegaly + hemorrhage on necropsy → polyomavirus. Progressive, symmetric feather loss and abnormal regrowth over months in a young psittacine, eventually with recurrent infections → PBFD (circovirus). Mnemonic: Polyoma = Peracute. Circovirus = Chronic.'
      },
      {
        type: 'callout', variant: 'pearl', title: 'The inclusion bodies, straight',
        body: 'Circovirus (PBFD) produces botryoid basophilic INTRACYTOPLASMIC inclusions in feather follicle epithelium and macrophages; polyomavirus produces large basophilic INTRANUCLEAR inclusions. The practical exam-level discriminator is the clinical picture, not the inclusion — use age and time course.'
      },
      {
        type: 'table', title: 'Bacterial disease',
        columns: ['Disease', 'Agent', 'Signs', 'Diagnosis & treatment'],
        rows: [
          ['Psittacosis / "parrot fever" / ornithosis / avian chlamydiosis ⚑R ⚑Z', 'Chlamydia psittaci — obligate intracellular, gram-negative (stains pink); forms intracytoplasmic inclusions', 'Non-specific URI signs; biliverdinuria (lime-green urates — the buzzword); conjunctivitis; sinusitis; hepatosplenomegaly; green-yellow diarrhea; weight loss; ruffled feathers; death. Affects all birds.', 'Doxycycline (drug of choice, 45-day course) ± tobramycin. Reportable and zoonotic — causes atypical pneumonia in humans, especially bird owners and pet-store workers.'],
          ['Pododermatitis ("bumblefoot")', 'Staphylococcus (S. aureus)', 'Swollen, hot, painful footpad with a caseous core and scab. Predisposed by hard flooring, wet substrate, obesity, and small perch diameter in raptors.', 'Mild: topical antibiotics + bandaging. Moderate/severe: surgical debridement + systemic enrofloxacin. Osteomyelitis = poor prognosis.'],
          ['Avian mycobacteriosis / TB ⚑Z', 'Mycobacterium avium subsp. avium', 'Gradual weight loss, weakness, granulomas; lesions on spleen and liver. Classic cause of TB in cranes.', 'Zoonotic, especially to immunocompromised people. Treatment generally not attempted in flocks.'],
          ['Infectious sinusitis', 'Mycoplasma gallisepticum', 'Chronic sinusitis, swollen infraorbital sinuses, ocular/nasal discharge.', 'PCR/serology; tylosin or tetracyclines.']
        ]
      },
      {
        type: 'table', title: 'Fungal disease',
        columns: ['Disease', 'Agent', 'Signs', 'Treatment'],
        rows: [
          ['Aspergillosis', 'Aspergillus fumigatus', 'Two presentations to remember: (1) pneumonia / air sacculitis and (2) encephalopathy. Voice change, dyspnea, tail bob. Predisposed by stress, poor ventilation, moldy substrate.', 'Itraconazole (avoid in African greys — sensitive). Nebulized terbinafine / F10 adjunctive.'],
          ['Candidiasis', 'Candida albicans', 'Thick white raised pseudomembrane / plaques of the crop and esophagus. Common in hand-fed babies and after antibiotic use.', 'Nystatin (oral, non-absorbed). Correct husbandry / antibiotic overuse.'],
          ['Histoplasmosis', 'Histoplasma capsulatum', 'Lesions on the ceca and liver. Birds (and their droppings) act as environmental sources for dogs, cats, and humans.', 'Environmental / public health significance > clinical avian disease.'],
          ['Cryptococcosis ⚑Z', 'Cryptococcus neoformans', 'Strongly associated with pigeon droppings. Birds serve as environmental hosts/carriers.', 'Key public-health link — CNS cryptococcosis in immunocompromised humans and in cats.']
        ]
      },
      {
        type: 'table', title: 'Parasitic disease',
        columns: ['Parasite', 'Presentation', 'Diagnosis & treatment'],
        rows: [
          ['Trichomonas gallinae ("canker" / "frounce" in raptors)', 'White-to-yellow plaques in the mouth, crop, esophagus, and extending to liver. Classic in pigeons/doves and the raptors that eat them.', 'Wet mount of crop washing → motile flagellates. Metronidazole. Control = hygiene and disinfection.'],
          ['Coccidia — Isospora and Eimeria', 'Malabsorption and mucosal damage → diarrhea. Affects young, stressed, overcrowded birds.', 'Fecal float. Sulfonamides.'],
          ['Knemidocoptes — K. pilae (scaly face/beak, budgies & passerines), K. mutans (scaly leg)', 'Honeycombed, proliferative crusts on the cere, beak, face, and distal extremities/legs. Seen in young or old birds with immunosuppression.', 'Skin scrape. Ivermectin.'],
          ['Capillaria contorta', 'Infects the crop (and oral cavity/esophagus).', 'Fecal; benzimidazoles.'],
          ['Syngamus trachea ("gapeworm")', 'Infects the trachea → gasping/gaping, head shaking.', 'Tracheal Y-shaped red worms; benzimidazoles.'],
          ['Leucocytozoon', 'An RBC parasite of birds causing anemia — infects RBCs and WBCs.', 'Blood smear; sulfonamides + pyrimethamine.']
        ]
      },
      {
        type: 'table', title: 'Nutritional & metabolic disease',
        columns: ['Condition', 'Pathogenesis & signs', 'Key points'],
        rows: [
          ['Hypovitaminosis A', 'Squamous metaplasia of epithelial tissue → sinusitis, chronic "big eye," white plaques around the face and in the oral cavity, blunted choanal papillae.', 'Classic all-seed-diet psittacine. The mimic for candidiasis / trichomoniasis plaques — always ask about diet.'],
          ['Goiter (iodine deficiency / thyroid hyperplasia)', 'Affects older birds; metatarsal and phalangeal joints involved. Classic budgie presentation is regurgitation and a squeaky respiratory click from thyroid compression of the syrinx.', 'All-seed diets (millet/sunflower) are iodine deficient. Supplement iodine.'],
          ['Xanthoma', 'Fatty, yellow mass in the subcutis — a lipid-laden granulomatous reaction, not a true neoplasm.', 'Classic in cockatiels and parakeets, often over the wing/sternum. Surgical excision.']
        ]
      },
      {
        type: 'table', title: 'Husbandry & trauma',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Crop burn', 'Thermal damage from hand-rearing formula fed too hot. Causes feather loss and dark, scabby, wet, oozy skin extending from the neck to the thorax; eventually a crop-to-skin fistula. Delay surgical repair until the burn has fully demarcated.'],
          ['Ingluviotomy', 'Surgical opening of the crop of a bird to remove a foreign body (or place a feeding tube).']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire pet bird recall',
        items: [
          ['Cauliflower plaques in the mouth & crop', 'Candida (nystatin), Trichomonas, or hypovitaminosis A — those are your three'],
          ['Pneumonia and encephalitis in a bird', 'Aspergillus'],
          ['Fatty SQ mass in a cockatiel', 'Xanthoma'],
          ['Sudden death, young bird, liver necrosis', 'Pacheco\'s (herpes)'],
          ['Lime-green urates', 'Chlamydia psittaci'],
          ['Regurgitating macaw wasting away', 'PDD (bornavirus)']
        ]
      }
    ]
  });

  N.push({
    id: 'poultry',
    group: 'Species',
    title: 'Poultry, Turkeys & Gamebirds',
    tagline: 'Poultry is 2% of the exam, but the lame chicken algorithm alone is worth the study time.',
    weight: 2,
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'The single highest-yield poultry discrimination',
        body: 'Marek\'s vs. lymphoid leukosis vs. riboflavin deficiency — all three give you a lame chicken with nerve or tumor findings. Age, symmetry, and bursal involvement separate them. Full table below.'
      },
      {
        type: 'table', title: 'Viral disease',
        columns: ['Disease', 'Agent', 'Signs / lesions', 'Diagnosis & control'],
        rows: [
          ['Marek\'s disease', 'Herpesvirus (alphaherpesvirus)', 'Chicken <16 weeks. Asymmetric leg paralysis — "one leg forward, one leg back" (pathognomonic posture). Gray eye / gray iris (pathognomonic). Enlarged sciatic nerve with lymphocytic infiltration. Lymphoid tumors in multiple organs. Also associated with atherosclerosis.', 'Horizontal transmission via feather dander. Vaccinate at hatch. No treatment.'],
          ['Lymphoid leukosis', 'Retrovirus — Avian Leukosis Virus (ALV)', 'Chicken >16 weeks. Bursal lymphoma; enlarged liver and spleen. No nerve enlargement, no early mortality.', 'Bursa of Fabricius = target organ. Transmitted vertically through the egg. Histopath shows uniform large lymphoblasts. No treatment.'],
          ['Infectious Bursal Disease (Gumboro) ⚑R', 'Birnavirus', 'Enlarged bursa; immunosuppression via destruction of B cells; bursa of Fabricius, thymus, and spleen affected.', 'Shed in feces, spread by fomites — highly contagious and environmentally hardy. Vaccinate; depopulate heavily contaminated houses. The reportable immune-system disease of birds.'],
          ['Avian encephalomyelitis (epidemic tremor)', 'Picornavirus', 'Chicks <3 weeks: progressive ataxia, head and neck tremors, dull sunken eyes, sitting on hocks. Blue opacity of the lens. Adult hens: transient egg drop.', 'Egg-transmitted (vertical) — the classic feature. Histopath: lymphocytic infiltration of the proventriculus + CNS neuronal degeneration. No treatment; vaccinate pullets 4–8 weeks before lay for maternal antibody.'],
          ['Avian viral arthritis / tenosynovitis', 'Reovirus', 'Broiler with swollen hock joints, lameness, sitting on hocks, gastrocnemius tendon swelling; chronic cases → tendon rupture.', 'Virus isolation or PCR from joint/tendon. No treatment; vaccinate breeder hens for maternal antibody. Differentiate from Mycoplasma synoviae by M. synoviae\'s silver/gray exudate + respiratory signs.'],
          ['Fowl pox (avian pox)', 'Avipoxvirus', 'Cutaneous / "dry" form: scabby, proliferative, ulcerative lesions on comb, wattles, and legs — low mortality. Diphtheritic / "wet" form: yellow canker lesions on mucous membranes — tongue, esophagus, trachea — higher mortality (airway obstruction).', 'Mosquito-transmitted and by direct contact through skin abrasions. Vaccination (wing-web stab).'],
          ['Infectious bronchitis', 'Coronavirus', 'Wrinkled, misshapen eggs and decreased egg production/quality; respiratory signs; nephropathogenic strains. High morbidity, low mortality.', 'Antibiotics only for secondary bacterial infection. Vaccination.'],
          ['Infectious laryngotracheitis (ILT) ⚑R', 'Herpesvirus', 'Blood-stained beaks and gasping for air — the buzzword pair. Bloody mucus in the trachea.', 'Reportable. Intranuclear inclusions in tracheal epithelium.'],
          ['Blue comb / coronaviral enteritis of turkeys', 'Coronavirus', 'Affects turkeys. Diarrhea and dehydration; cyanotic ("blue") comb/head from dehydration and shock.', 'Supportive care, warmth, electrolytes.'],
          ['Marble spleen disease / hemorrhagic enteritis', 'Fowl adenovirus group II (siadenovirus)', 'Young pheasant found dead with a massively enlarged, mottled, marble-like spleen → marble spleen disease. The same virus causes hemorrhagic enteritis in turkeys.', 'Gross pathology + intranuclear inclusion bodies on histopath. Live vaccine available.'],
          ['Swollen head syndrome / turkey rhinotracheitis', 'Avian metapneumovirus (enveloped paramyxovirus)', 'Swollen head in chickens; rhinotracheitis in turkeys. Periorbital and facial edema.', 'One virus, two species names — a favorite trick question.'],
          ['Newcastle disease (velogenic / virulent — vND) ⚑R', 'Avian paramyxovirus-1', 'Petechial hemorrhages on the mucosa of the proventriculus and gizzard (the classic lesion) and petechiae on GI serosa. Respiratory, neurologic, and GI signs together.', 'Reportable — federal. Diagnose by virus isolation / RT-PCR.'],
          ['Highly pathogenic avian influenza (HPAI) ⚑R ⚑Z', 'Influenza A', 'Cyanosis, edema (head/wattles), SQ ecchymoses, hemorrhages, torticollis, opisthotonos, green diarrhea, sudden high mortality.', 'RT-PCR of choanal cleft and tracheal swabs. Immediately reportable; depopulation.']
        ]
      },
      {
        type: 'table', title: 'Bacterial disease',
        columns: ['Disease', 'Agent', 'Signs / lesions', 'Treatment & control'],
        rows: [
          ['Fowl typhoid', 'Salmonella gallinarum', 'High mortality in growing/adult birds; bronze-green liver.', 'Both S. gallinarum and S. pullorum cause high mortality in chickens and are the two classic host-adapted, egg-transmitted salmonellae. Test-and-slaughter eradication programs (NPIP).'],
          ['Pullorum disease', 'Salmonella pullorum', 'Five signs to know: high mortality, unabsorbed yolk sac, anorexia, cecal cores, diarrhea. Disease of young chicks.', 'See above — NPIP test-and-slaughter.'],
          ['Colibacillosis', 'E. coli', 'Subacute pericarditis, air sacculitis, salpingitis, and fatal septicemia. (Contrast: enterotoxemia is clostridial.)', 'Often secondary to viral/mycoplasmal respiratory disease or poor air quality.'],
          ['Salpingitis', 'Ascending E. coli', 'Inspissated (cheesy) material within the oviduct. Predisposed by excessive body condition and poor coop hygiene.', 'Prevention through body condition control and litter management.'],
          ['Fowl cholera', 'Pasteurella multocida', 'Fibrinous polyserositis, acute septicemia, swollen wattles, torticollis (chronic localized form).', 'Tetracycline. Rodent and wildlife reservoirs.'],
          ['Infectious coryza', 'Avibacterium paragallinarum (formerly Haemophilus)', 'Swelling under the eye (infraorbital sinus), sneezing, nasal discharge, foul odor.', 'All-in / all-out management is the control answer. Sulfonamides / tetracyclines reduce signs but carriers persist.'],
          ['Bordetellosis / turkey coryza', 'Bordetella avium — gram-negative coccobacillus', 'Turkey poults 1–6 weeks: watery eyes, nasal discharge, sneezing, foamy eye, and tracheal collapse with a clicking breathing sound (the buzzword). Destroys tracheal cilia.', 'Culture from tracheal swab. Tetracycline/sulfonamides for secondary infections. Vaccinate poults at 1–2 weeks with live attenuated vaccine in the drinking water.'],
          ['Ulcerative enteritis ("quail disease")', 'Clostridium colinum', 'Humped back, ruffled feathers, bloody-to-watery white droppings with pseudomembrane, ulcerative enteritis.', 'Compare with C. perfringens necrotic enteritis → "Turkish towel" gut.'],
          ['Necrotic enteritis', 'Clostridium perfringens', '"Shaggy gut" / Turkish-towel mucosa. Predisposed by coccidiosis damaging the mucosa first.', 'Control coccidia to control necrotic enteritis. Bacitracin/penicillins in feed (where permitted).'],
          ['Bacterial synovitis', 'Staphylococcus (most common infectious agent)', 'Swollen joints, lameness.', 'Also consider Mycoplasma synoviae and reovirus.'],
          ['Avian tuberculosis ⚑Z', 'Mycobacterium avium subsp. avium', 'Gradual weight loss and granulomas, especially liver, spleen, and intestine.', 'Zoonotic. Depopulation of infected flocks.'],
          ['Erysipelas ⚑Z', 'Erysipelothrix rhusiopathiae', 'Sudden death, especially in turkeys; septicemia.', 'Penicillin.'],
          ['Avian chlamydiosis ⚑R ⚑Z', 'Chlamydia psittaci', 'In poultry also called parrot fever. Conjunctivitis, sinusitis, green-yellow diarrhea, weight loss, ruffled feathers, hepatosplenomegaly. Intracellular gram-negative (pink) with intracytoplasmic inclusions.', 'Doxycycline ± tobramycin. Zoonotic, reportable, affects all birds.'],
          ['Fowl spirochetosis', 'Borrelia anserina', 'Septicemia, green diarrhea, splenomegaly.', 'Vector = Argas persicus (fowl tick — the soft tick).']
        ]
      },
      {
        type: 'table', title: 'Protozoal parasites',
        columns: ['Parasite', 'Presentation', 'Diagnosis & treatment'],
        rows: [
          ['Coccidiosis — Eimeria spp.', 'Four classic signs: cheesy cecal/cloacal cores, slicked-over litter, severe diarrhea, and necrotic enteritis / "shaggy gut." Necropsy: necrotic, hemorrhagic intestines. High mortality; the most important parasitic disease of chickens.', 'Amprolium (a thiamine analog) is the treatment; reducing hen access to feces is the control answer. Ionophores/anticoccidials in feed.'],
          ['Eimeria tenella', 'The species found in the ceca → cecal cores, blood in the cecum, and hemorrhagic droppings.', 'Memorize: tenella = ceca = blood.'],
          ['Histomoniasis ("blackhead")', 'Histomonas meleagridis. Bull\'s-eye ("target") lesions on the liver, listlessness, cecal changes/cores, sulfur-yellow droppings, unkempt feathers. Turkeys most severely affected.', 'Carried by Heterakis gallinarum (cecal worm) — and Heterakis eggs are in turn carried by earthworms. Control the cecal worm; don\'t co-house chickens (carriers) with turkeys.'],
          ['Leucocytozoonosis', 'Young ducks/turkeys/chickens near fast-moving water in spring with anemia, green diarrhea, splenomegaly, sudden death. Three sign categories: anemia, neurologic, respiratory. Infects both RBCs and WBCs (lymphocytes).', 'Vectors: black flies (Simulium) for ducks/turkeys; Culicoides for chickens. Blood smear (gametocytes in RBCs/WBCs) + megaloschizonts on histopath. Treat with sulfonamides + pyrimethamine.'],
          ['Avian malaria — Plasmodium spp.', 'Penguin or raptor in captivity with anemia, weakness, splenomegaly, sudden death. Most pathogenic in non-adapted species (penguins, raptors); mild/subclinical in chickens.', 'Vector = mosquito. Blood smear: ring forms, schizonts, gametocytes INSIDE RBCs only. Treat with chloroquine + primaquine.'],
          ['Trichomoniasis', 'Trichomonas gallinae → caseous exudate in the mouth / oral and crop lesions.', 'The differential for candidiasis causing caseous oral/esophageal exudate in a chicken. Control by hygiene and disinfection.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Leucocytozoon vs. Plasmodium — the one-line discriminator',
        body: 'Leucocytozoon infects RBCs AND WBCs; vector = black fly / Culicoides; look for megaloschizonts. Plasmodium (avian malaria) infects RBCs ONLY; vector = mosquito; classic in penguins and raptors.'
      },
      {
        type: 'table', title: 'Helminths',
        columns: ['Worm', 'Location / effect', 'Treatment'],
        rows: [
          ['Ascaridia galli', 'Small intestine — the large roundworm; unthriftiness, obstruction in heavy burdens.', 'Fenbendazole treats Ascaridia, Heterakis, and Capillaria.'],
          ['Heterakis gallinarum', 'Ceca — largely non-pathogenic itself, but carries Histomonas (blackhead). That is why it matters.', 'Fenbendazole.'],
          ['Capillaria', 'Depending on species: crop/esophagus (C. contorta) or intestine; also lung, bladder, liver forms in other hosts.', 'Fenbendazole.'],
          ['Syngamus trachea (gapeworm)', 'Trachea → gaping, gasping, head shaking.', 'Benzimidazoles; earthworm paratenic hosts.'],
          ['Davainea proglottina', 'Tapeworm of the duodenum of birds. Slug/snail intermediate hosts.', 'Praziquantel; control molluscs.']
        ]
      },
      {
        type: 'table', title: 'Ectoparasites',
        columns: ['Parasite', 'Key feature', 'Treatment'],
        rows: [
          ['Northern fowl mite (Ornithonyssus sylviarum)', 'Lives on the bird; found during the DAY, near the vent area. Blackened, matted vent feathers.', 'Permethrin dusts/sprays applied to birds.'],
          ['Red mite / roost mite (Dermanyssus gallinae)', 'Lives off the bird in cracks and crevices; feeds at NIGHT; sucks blood → anemia, drop in production.', 'Miticide applied to the environment/housing, not just the birds.'],
          ['Scaly leg mite (Knemidocoptes mutans / K. pilae)', 'Burrows into the skin of the distal extremities → raised, crusted, honeycombed scales. K. pilae = scaly face of budgies/passerines.', 'Ivermectin.'],
          ['Argas persicus (fowl tick)', 'Soft tick; vector for fowl spirochetosis.', 'Environmental acaricide.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Northern fowl mite vs. red mite',
        body: 'Northern fowl mite = oN the bird, seen by day, at the vent → treat the bird. Red mite (Dermanyssus) = in the housing, feeds at night → treat the house.'
      },
      {
        type: 'table', title: 'Fungal disease',
        columns: ['Disease', 'Presentation', 'Diagnosis & treatment'],
        rows: [
          ['Favus ("white comb")', 'Essentially ringworm of poultry, caused by Trichophyton (Lophophyton) gallinae. White, powdery, crusting lesions on the comb and wattles. NOT pruritic.', 'Definitive diagnosis by culture (KOH prep or DTM). Treat with miconazole.'],
          ['Candidiasis', 'Mycotic disease with a thick, white, raised pseudomembrane of the crop and esophagus.', 'Copper sulfate in drinking water is the flock-level answer; nystatin for individuals.'],
          ['Aspergillosis ("brooder pneumonia")', 'Air sacculitis and pneumonia. Infected eggs can explode in the incubator (a classic hatchery question).', 'Hatchery sanitation; discard moldy litter/feed.']
        ]
      },
      {
        type: 'table', title: 'Nutritional, metabolic & production disease',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Riboflavin (vitamin B2) deficiency', '1–2 week old chick with bilateral CURLED TOES, symmetric leg weakness, enlarged demyelinated sciatic (and brachial) nerves, NO eye lesions, NO tumors. Looks like Marek\'s but is symmetric and occurs at 1–2 weeks of age. Fully reversible with immediate riboflavin supplementation if caught early.'],
          ['Ascites syndrome (pulmonary hypertension syndrome)', 'Fast-growing broilers outgrow their cardiopulmonary capacity. Confirmatory lesion = right ventricular hypertrophy. Abdominal fluid, cyanosis. Manage by slowing growth rate, improving ventilation/oxygenation, reducing altitude stress.'],
          ['Dissecting aneurysm of turkeys', 'Rapidly grown turkey with acute internal hemorrhage and sudden death — rupture of the aorta. Associated with rapid growth and copper deficiency/lathyrogens.'],
          ['Round heart disease', 'Affects turkeys; a spontaneous cardiomyopathy with a globoid, dilated heart.'],
          ['Visceral gout', 'Urate deposits on the pericardium, liver, and kidney. Driven by renal failure — high dietary calcium, dehydration, nephropathogenic IBV, or excess protein.'],
          ['White muscle disease', 'Vitamin E and selenium deficiency — affects poultry as well as pigs, small ruminants, and horses. Pale, chalky skeletal and cardiac muscle.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Extralabel drug restrictions in poultry',
        body: 'The federal rule (21 CFR 530.41) prohibits extralabel use of fluoroquinolones (enrofloxacin) and glycopeptides in poultry, and prohibits extralabel use of cephalosporins in major food species. Extralabel drug use in laying hens producing eggs for human consumption is effectively off-limits because no withdrawal data exist. Learn it as: no ELDU in layers; no fluoroquinolones in poultry.'
      },
      {
        type: 'table', title: 'The lame chicken algorithm',
        columns: ['Feature', 'Marek\'s disease', 'Lymphoid leukosis', 'Riboflavin deficiency', 'Avian viral arthritis'],
        rows: [
          ['Agent', 'Herpesvirus', 'Retrovirus (ALV)', 'Nutritional (B2)', 'Reovirus'],
          ['Age', '<16 weeks', '>16 weeks', '1–2 weeks', 'Broilers, growing'],
          ['Symmetry', 'Asymmetric — one leg forward, one back', 'n/a (tumor disease)', 'Symmetric, curled toes', 'Bilateral hocks'],
          ['Nerves', 'Enlarged, lymphocytic infiltration', 'NOT enlarged', 'Enlarged, demyelinated', 'Normal'],
          ['Eye', 'Gray iris (pathognomonic)', 'Normal', 'No eye lesions', 'Normal'],
          ['Tumors', 'Multiple organs', 'Bursa of Fabricius is the target', 'None', 'None'],
          ['Transmission', 'Horizontal — dander', 'Vertical — through the egg', 'Diet', 'Horizontal + vertical'],
          ['Control', 'Vaccinate at hatch; no treatment', 'No treatment; eradication programs', 'Supplement — reversible', 'Vaccinate breeder hens']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire poultry recall',
        items: [
          ['Marble spleen in a pheasant', 'Fowl adenovirus II (= hemorrhagic enteritis of turkeys)'],
          ['Clicking breath + tracheal collapse in a poult', 'Bordetella avium'],
          ['Wrinkled eggs', 'Infectious bronchitis (coronavirus)'],
          ['Bloody beak + gasping', 'ILT'],
          ['Blue comb in turkeys', 'Coronavirus'],
          ['Bull\'s-eye liver lesion + yellow droppings', 'Blackhead (Histomonas, carried by Heterakis)'],
          ['Swollen head in chickens / rhinotracheitis in turkeys', 'Avian metapneumovirus'],
          ['Swelling under the eye + sneezing', 'Infectious coryza (Avibacterium paragallinarum) → all-in/all-out'],
          ['Right ventricular hypertrophy in a broiler', 'Ascites syndrome'],
          ['Shaggy gut', 'Coccidiosis predisposing to C. perfringens']
        ]
      }
    ]
  });

  N.push({
    id: 'avian-crosscutting',
    group: 'Species',
    title: 'Avian Cross-Cutting Concepts',
    tagline: 'Anatomy, physiology, and the "any bird, any species" differential lists.',
    weightNote: 'supports the pet bird and poultry blocks',
    sections: [
      {
        type: 'table', title: 'Anatomy & physiology you will be asked about',
        columns: ['Concept', 'What to know'],
        rows: [
          ['Avian erythrocytes', 'Nucleated, elliptical (oval) RBCs. Same for reptiles, amphibians, and fish. Thrombocytes replace platelets, and heterophils replace neutrophils.'],
          ['Pneumatized bones', 'The humerus and femur are pneumatized — they communicate with the air sac system. Never place an intraosseous catheter in the humerus or femur (you will drown the bird by infusing fluid into the air sacs). Use the ulna or the tibiotarsus instead.'],
          ['Two-part stomach', 'Proventriculus = glandular stomach (the true stomach; dilated in PDD, hemorrhagic in Newcastle). Ventriculus (gizzard) = muscular grinding stomach.'],
          ['Crop (ingluvies)', 'Esophageal storage diverticulum. Ingluviotomy = surgical opening of the crop. Crop stasis is a red flag for polyomavirus, PDD, candidiasis, and foreign bodies.'],
          ['Bursa of Fabricius', 'Site of B-cell maturation. Target of IBD/Gumboro (destruction → immunosuppression) and lymphoid leukosis (neoplastic transformation).']
        ]
      },
      {
        type: 'table', title: 'Any bird, any species — cross-species differentials',
        columns: ['Clinical picture', 'Differential list'],
        rows: [
          ['White/yellow plaques in the mouth, crop, or esophagus', '1. Candidiasis (nystatin / copper sulfate) · 2. Trichomoniasis (T. gallinae, metronidazole) · 3. Hypovitaminosis A (squamous metaplasia) · 4. Wet/diphtheritic fowl pox (yellow canker lesions).'],
          ['Pneumonia and/or encephalitis in a bird', 'Aspergillus — this pair of organ systems in one bird is the giveaway.'],
          ['Sudden death in young birds', 'Pacheco\'s disease (herpes, liver necrosis) · polyomavirus (SQ hemorrhage, crop stasis) · septicemia.'],
          ['Nestling mortality with SQ hemorrhages', 'Polyomavirus — young bird with crop stasis, not fully feathered, exotic pet show or breeder exposure.'],
          ['Chronic sinusitis, "big eye," white plaques around the face', 'Vitamin A deficiency.'],
          ['Anemia from an RBC parasite of birds', 'Leucocytozoon (RBCs + WBCs, black fly / Culicoides) vs. Plasmodium (RBCs only, mosquito, penguins/raptors).'],
          ['Swollen, hot, painful footpad with a caseous core', 'Bumblefoot — Staphylococcus aureus; chicken, turkey, or raptor.'],
          ['Scaly, crusted face or legs', 'Knemidocoptes — K. pilae (face/beak, budgies & passerines), K. mutans (legs, poultry). Ivermectin.'],
          ['Zoonotic + reportable respiratory disease of any bird', 'Chlamydia psittaci — psittacosis / ornithosis / parrot fever. Doxycycline.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Avian reportable / zoonotic list — memorize as a block',
        body: 'Reportable: HPAI · virulent Newcastle disease (vND) · infectious laryngotracheitis · infectious bursal disease · avian chlamydiosis. Zoonotic: Chlamydia psittaci · avian influenza · Mycobacterium avium · Cryptococcus (pigeon droppings) · Salmonella · Campylobacter · Histoplasma (environmental).'
      }
    ]
  });
})(window.NAVLE_MODULES);
