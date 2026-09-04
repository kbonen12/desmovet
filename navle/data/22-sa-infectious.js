/* NAVLE Hub — Vector-Borne Disease, Systemic Mycoses & Zoonoses (dogs & cats)
 * Source: NAVLE_Dogs_Cats_Study_Guide.pdf ch. 11, 12 and appendix A.
 *
 * The source guide calls tick-borne disease "the single most-tested small animal
 * infectious block" and teaches it as a grid: organism → vector → target cell →
 * geography → diagnostic finding → treatment. The tables keep that shape.
 */
(function (N) {
  N.push({
    id: 'sa-vectorborne',
    group: 'Infectious disease',
    title: 'Vector-Borne Disease & Mycoses',
    tagline: 'Organism → vector → target cell → geography → diagnostic finding → treatment.',
    weightNote: 'the highest-yield small animal infectious block',
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'Learn it as a grid, not as isolated facts',
        body: 'Tick-borne disease is tested as a matched set: organism → vector tick → target cell → geography → diagnostic finding → treatment. Missing any one column is what makes these items feel unanswerable.'
      },
      {
        type: 'table', title: 'The vector-borne master table',
        wide: true,
        columns: ['Disease', 'Organism & vector', 'Clinical signs', 'Diagnosis & treatment'],
        rows: [
          ['Canine monocytic ehrlichiosis', 'Ehrlichia canis. Rhipicephalus sanguineus — the brown dog tick. NOT ornate, SHORT mouthparts.', 'Four signs: fever, anorexia, edema of the limbs, hypoalbuminemia. Also thrombocytopenia, epistaxis, and pancytopenia in the chronic phase — German Shepherds are severely affected.', 'Morulae in MONOCYTES. Serology or PCR. Doxycycline for 28 days.'],
          ['Canine granulocytic ehrlichiosis', 'Ehrlichia ewingii. Amblyomma — ORNATE (white marking on the scutum) with LONG mouthparts.', 'Polyarthritis, fever, lameness.', 'Morulae in GRANULOCYTES (neutrophils). Doxycycline.'],
          ['Rocky Mountain spotted fever ⚑Z', 'Rickettsia rickettsii. Dermacentor — the American dog tick. ORNATE with SHORT mouthparts.', 'Pathogenesis is VASCULITIS — fever, petechiae, edema, neurologic signs, thrombocytopenia. Acute and severe. Endemic in the south central and southern Atlantic states, despite the name.', 'Doxycycline. Key discriminator: RMSF is OVER IN 2 WEEKS — an acute, self-limiting-or-fatal illness with no carrier state.'],
          ['Cytauxzoonosis (cat)', 'Cytauxzoon felis. Amblyomma americanum — the lone star tick; Dermacentor is also implicated. The bobcat is the reservoir.', 'The classic stem: fever, hepatosplenomegaly, lymphadenomegaly and icterus in a cat in JULY in MISSOURI. Four signs: dark urine, icterus, fever, DIC and anemia. Infects MACROPHAGES and ERYTHROCYTES. Geography: Missouri and south central; Texas to Florida.', 'Cytology: "signet ring" piroplasms inside RBCs, and schizonts in spleen, liver, blood, bone marrow or lymph nodes. Giemsa or Diff-Quik. Treat with ATOVAQUONE + AZITHROMYCIN. Often fatal — treat as an emergency.'],
          ['Babesiosis (dog)', 'Babesia canis (large) and B. gibsoni (small). Rhipicephalus (Boophilus); B. gibsoni also by dog bites and transfusion.', 'RBC destruction → hemolytic ANEMIA and THROMBOCYTOPENIA. Breeds predisposed: Greyhounds and Pit Bulls — Pit Bulls specifically for B. gibsoni via fighting and bite transmission. Seen in dogs and horses.', 'B. canis → IMIDOCARB DIPROPIONATE. B. gibsoni → ATOVAQUONE + AZITHROMYCIN; imidocarb is poorly effective against the small Babesia.'],
          ['Lyme disease ⚑Z', 'Borrelia burgdorferi. Ixodes — the deer tick. Reservoir: the white-footed mouse.', 'In DOGS, four signs: arthritis (shifting-leg lameness), lymphadenopathy, fever, anorexia. Also Lyme nephritis in Labradors and Golden Retrievers — a protein-losing nephropathy that is often fatal. In HUMANS: erythema migrans, the "bull\'s-eye" rash.', 'Antibody against the C6 peptide indicates NATURAL EXPOSURE as opposed to vaccination — that is the point of the C6 test. Doxycycline.'],
          ['Anaplasmosis', 'Anaplasma phagocytophilum. Ixodes — the same tick as Lyme, so co-infection is common.', 'Fever, lameness, thrombocytopenia, and NO anemia.', 'Morulae in NEUTROPHILS. Doxycycline.'],
          ['Hemotropic mycoplasmosis (cat)', 'Mycoplasma haemofelis. Fleas; also bites and transfusion.', 'A cat with fever and cocci in chains or rings ON the red cell surface. Regenerative hemolytic anemia. Most common in outdoor male cats.', 'Organisms ON the surface of RBCs, not inside them. Doxycycline ± prednisolone.'],
          ['Bartonellosis ⚑Z', 'Bartonella henselae (cat) and B. vinsonii (dog). FLEAS are the main reservoir for feline infection — transmitted between cats by flea feces, and to humans by scratch.', 'B. henselae = "cat scratch fever" in humans, with regional lymphadenopathy; cats are usually asymptomatic carriers. B. vinsonii in dogs → INFECTIOUS ENDOCARDITIS. The stem: a dog on no flea/tick preventive with a new heart murmur.', 'Doxycycline or azithromycin; flea control is the real answer.'],
          ['Tularemia ⚑Z', 'Francisella tularensis. Ticks; also direct contact and aerosol.', 'Dogs and cats are exposed by hunting RODENTS or RABBITS that have been bitten by ticks. Cats are more susceptible than dogs — fever, lymphadenopathy, oral ulcers.', 'Highly zoonotic with a very low infectious dose — a recognized biological warfare / select agent. Handle suspect cases with extreme caution and warn the lab. Doxycycline or aminoglycosides.'],
          ['Hepatozoonosis (dog)', 'Hepatozoon americanum. Gulf Coast tick — acquired by INGESTING the tick, not by its bite.', 'Severe muscle pain, stiff gait, fever, marked neutrophilia.', 'Radiographs show striking PERIOSTEAL BONE PROLIFERATION along the long bones — the pathognomonic finding.'],
          ['Leishmaniasis ⚑Z', 'Leishmania infantum. SAND FLY (Lutzomyia/Phlebotomus). Also vertical transmission in Foxhounds in the US.', 'Visceral and cutaneous disease — weight loss, exfoliative dermatitis, onychogryphosis, PLN.', 'Zoonotic. Poor cure rate; allopurinol plus antimonials.'],
          ['American trypanosomiasis (Chagas) ⚑Z', "Trypanosoma cruzi. Kissing bug (Triatoma) — infection occurs via the bug's feces, not its bite.", 'Myocarditis and megaesophagus / megacolon. Young dogs in Texas and the Gulf states; sudden death or right-sided heart failure.', 'Zoonotic. No reliably effective treatment.'],
          ['Heterobilharzia americana (dog)', 'A schistosome (blood fluke). Snail intermediate host; water contact in the Gulf states.', 'Migrates across the intestinal wall causing GRANULOMATOUS inflammation, hepatic granulomas and hypercalcemia.', 'Fecal saline sedimentation — not flotation — or PCR. Praziquantel plus fenbendazole.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Tick ID — the two questions that answer everything',
        list: [
          '<b>Amblyomma</b> — ORNATE (white marking on the scutum) + LONG mouthparts → E. ewingii, cytauxzoonosis, heartwater. <i>A. americanum</i> = lone star tick.',
          '<b>Dermacentor</b> — ORNATE + SHORT mouthparts → RMSF, tick paralysis. The American dog tick.',
          '<b>Rhipicephalus</b> — NOT ornate + SHORT mouthparts → E. canis, Babesia. The brown dog tick, and the one that infests houses and kennels.',
          '<b>Ixodes</b> — small, dark, no ornamentation → Lyme and Anaplasma. Deer tick.',
          'Soft ticks (Argasidae): <i>Otobius megnini</i> (spinose ear tick — predilection for the ears of cattle), <i>Ornithodoros coriaceus</i> (epizootic bovine abortion), <i>Argas persicus</i> (fowl spirochetosis).'
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'The four blood-parasite one-liners',
        list: [
          'Anemia + organisms <b>ON</b> the red cells → <i>Mycoplasma haemofelis</i>',
          'Fever/lameness + thrombocytopenia + <b>NO</b> anemia + morulae in NEUTROPHILS → <i>Anaplasma phagocytophilum</i>',
          'Cat crashing fast + signet-ring inclusions <b>INSIDE</b> RBCs + southeastern US + tick exposure → <i>Cytauxzoon felis</i> — the emergency',
          'Morulae in MONOCYTES + limb edema + hypoalbuminemia → <i>Ehrlichia canis</i>'
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'The treatment shortcut',
        body: 'Doxycycline covers essentially every rickettsial and bacterial tick-borne disease: <i>Ehrlichia</i>, <i>Anaplasma</i>, RMSF, Lyme, <i>Mycoplasma haemofelis</i>, <i>Bartonella</i>. The protozoal ones need something else: <i>Babesia canis</i> → imidocarb; <i>B. gibsoni</i> and <i>Cytauxzoon</i> → atovaquone + azithromycin.'
      },

      {
        type: 'callout', variant: 'pearl', title: 'Systemic mycoses — geography plus cytology',
        body: 'Every systemic mycosis question can be answered from two facts: where the dog lives and what the organism looks like on cytology. The treatment is almost always itraconazole.'
      },
      {
        type: 'table', title: 'The systemic mycoses',
        wide: true,
        columns: ['Organism', 'Geography', 'Clinical signs', 'Cytology & treatment'],
        rows: [
          ['Blastomycosis\nBlastomyces dermatitidis', 'Ohio, Mississippi and Missouri river valleys, and the Great Lakes / St. Lawrence. Sandy, acidic soil near water.', '"BELLS" in dogs: Bone · Eyes (uveitis) · Lymph node enlargement · Lungs (cough, diffuse nodular pattern) · Skin lesions.', 'BROAD-BASED BUDDING YEAST, thick double-contoured wall, ~8–20 µm. Itraconazole for at least 60 days — usually 3–6 months and at least 1 month past resolution.'],
          ['Histoplasmosis\nHistoplasma capsulatum', 'Same river valleys as blasto. Soil enriched with BAT or BIRD droppings — cats are at high risk.', 'LARGE BOWEL DIARRHEA — increased frequency, decreased volume, hematochezia (dogs). Disseminated wasting, hepatosplenomegaly and respiratory disease in cats.', 'SMALL INTRACELLULAR yeast, 2–4 µm, with a basophilic center, inside macrophages. Diagnosis: submit URINE for fungal antigen. Itraconazole.'],
          ['Coccidioidomycosis\nCoccidioides immitis ("Valley fever")', 'WEST COAST and the desert southwest: Arizona, California\'s San Joaquin Valley, New Mexico, west Texas.', 'DOGS: cough, lameness (osteomyelitis), draining tracts, pneumonia, lymphadenopathy. CATS: skin lesions predominantly.', 'SPHERULES — large, double-walled structures containing endospores. Highly distinctive. Itraconazole; avoid ketoconazole in cats. Treat for 6–12 months, the longest course of any of these.'],
          ['Cryptococcosis\nCryptococcus neoformans (cat)', 'Worldwide. Associated with PIGEON DROPPINGS.', '"ROMAN NOSE" in a cat — a firm swelling over the bridge of the nose from granulomatous rhinitis, often with a polyp protruding from the nostril. Also CNS disease and chorioretinitis.', 'Small yeast with a LARGE clear capsule and NARROW-BASED budding. India ink or mucicarmine. Diagnosis: LATEX AGGLUTINATION for capsular antigen — a superb test. Fluconazole (best CNS penetration) or itraconazole.'],
          ['Aspergillosis\nAspergillus fumigatus (dog)', 'Ubiquitous environmental mold.', 'Nasal aspergillosis in DOLICHOCEPHALIC dogs — the German Shepherd is the classic breed. Chronic ulcerated nasal discharge, depigmentation of the nasal planum, turbinate destruction and pain.', 'Branching, septate fungal HYPHAE on histopathology. Treat with CLOTRIMAZOLE infused topically into the nasal cavity and frontal sinus under anesthesia. Post-recovery complication: SEVERE LARYNGEAL EDEMA — a real anesthetic-recovery risk after nasal infusion. Have intubation supplies ready.'],
          ['Sporotrichosis\nSporothrix schenckii ⚑Z', 'Worldwide; soil and plant material.', "A huge, ulcerated, non-healing lesion on a CAT's NOSE, or nodules along lymphatics after a puncture wound.", 'Extremely zoonotic from cats — cats carry an enormous organism burden and transmit through intact skin. Wear gloves. Itraconazole.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Blasto vs. histo — the direct comparison',
        list: [
          '<b>HISTO is smaller</b>, and INTRACELLULAR inside macrophages with a basophilic center.',
          '<b>BLASTO is larger</b>, extracellular, with BROAD-BASED budding and a thick refractile wall.',
          'Both live in the same river valleys — geography will not separate them. Size and location relative to the cell will.',
          'Add the third: <b>Crypto</b> = narrow-based budding with a huge capsule.'
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire mycology recall',
        items: [
          ['Broad-based budding yeast; dog with bone/eye/lung/skin/node disease', 'Blastomycosis → BELLS'],
          ['Small intracellular yeast in macrophages + large bowel diarrhea', 'Histoplasmosis → urine antigen'],
          ['Spherules with endospores; lame dog in Arizona', 'Coccidioidomycosis → treat 6–12 months'],
          ['Cat with a swollen nose bridge', 'Cryptococcosis → latex agglutination; pigeon droppings'],
          ['German Shepherd with destructive nasal discharge', 'Aspergillosis → clotrimazole infusion; watch for laryngeal edema on recovery'],
          ["Ulcerated lesion on a cat's nose", 'Sporotrichosis → gloves, highly zoonotic'],
          ['When in doubt on treatment', 'Itraconazole']
        ]
      },

      {
        type: 'table', title: 'Zoonoses & public health',
        wide: true,
        columns: ['Agent', 'Source', 'Human disease & prevention'],
        rows: [
          ['Ancylostoma (hookworm)', 'Dogs, contaminated soil', 'Cutaneous larval migrans — itchy serpiginous skin tracks. Prevent with routine deworming and picking up feces.'],
          ['Toxocara canis', 'Dogs, especially puppies', 'Visceral and ocular larval migrans. A leading infectious cause of childhood blindness. Deworm puppies from 2 weeks.'],
          ['Baylisascaris', 'Raccoons', 'Devastating neural larva migrans in children.'],
          ['Echinococcus granulosus', 'Dog is the definitive host', 'Hydatid cyst disease — cysts in liver and lungs; potentially fatal. Do not feed raw offal to dogs.'],
          ['Toxoplasma gondii', 'Cat is the definitive host', 'Congenital infection → chorioretinitis and mental retardation. Oocysts need 1–5 days to sporulate, so daily litter box cleaning prevents transmission. Pregnant women should avoid the litter box, garden with gloves, and not eat undercooked meat — which is actually the more common route.'],
          ['Cryptosporidium', 'Many species; water', 'Resistant to chlorination and standard disinfectants → waterborne outbreaks. Severe in immunocompromised people.'],
          ['Giardia', 'Many species; water', 'Diarrheal illness.'],
          ['Gnathostoma', 'Undercooked fish', 'Migratory cutaneous swellings; rarely CNS disease.'],
          ['Bartonella henselae', 'Cats, via FLEAS', 'Cat scratch fever — regional lymphadenopathy. Flea control is the prevention. Serious in immunocompromised people (bacillary angiomatosis).'],
          ['Francisella tularensis', 'Cats/dogs hunting rabbits and rodents', 'Tularemia. Very low infectious dose; select agent and potential biological weapon. Warn the laboratory on any suspect submission.'],
          ['Sporothrix schenckii', 'Cats — huge organism burden', 'Sporotrichosis. Transmits through intact skin. Wear gloves handling suspect feline nasal or cutaneous lesions.'],
          ['Microsporum canis / T. mentagrophytes', 'Cats; rodents and hamsters', 'Ringworm. T. mentagrophytes is the one spread from hamsters, and it does not fluoresce.'],
          ['Sarcoptes and Cheyletiella', 'Dogs, cats, rabbits', 'Papular, itchy dermatitis in owners — self-limiting once the animal is treated.'],
          ['Leishmania', 'Dogs; sand fly', 'Visceral leishmaniasis.'],
          ['Trypanosoma cruzi', 'Kissing bug feces', 'Chagas disease — cardiomyopathy.'],
          ['Borrelia burgdorferi / Rickettsia rickettsii', 'Shared tick exposure', 'Lyme (erythema migrans rash) and RMSF. The dog is a sentinel, not a direct source — people acquire both from the same ticks.'],
          ['Chlamydia psittaci, Salmonella, rabies', 'Various', 'Always on the differential list in a public-health question.']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
