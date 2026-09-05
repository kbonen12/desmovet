/* NAVLE Hub — Small Animal Parasitology
 * Source: NAVLE_Dogs_Cats_Study_Guide.pdf ch. 13.
 *
 * Companion to the Fecal Egg ID chapter, which covers the large animal side.
 */
(function (N) {
  N.push({
    id: 'sa-parasites',
    group: 'Cross-cutting',
    title: 'Small Animal Parasitology',
    tagline: 'Worms, protozoa, flukes, and getting the larval migrans direction right.',
    weightNote: 'part of the 49.9% dog + cat block',
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'The four classes of worms',
        body: 'Hookworms (nematode) · roundworms (nematode) · whipworms (nematode) · tapeworms (cestode). Three of the four are nematodes — which is why fenbendazole handles most of them and praziquantel is reserved for the cestodes and trematodes.'
      },
      {
        type: 'table', title: 'Nematodes',
        wide: true,
        columns: ['Parasite', 'Host & location', 'Disease', 'Diagnosis & treatment'],
        rows: [
          ['Ancylostoma caninum (hookworm) ⚑Z', 'Small intestine of dogs.', 'In DOGS: ANEMIA — a blood-feeding worm; severe iron-deficiency anemia in puppies. In HUMANS: CUTANEOUS LARVAL MIGRANS — serpiginous, intensely itchy tracks in the skin where larvae penetrate but cannot mature.', 'Egg: thin-walled with 2–8 cells. Pyrantel or fenbendazole.'],
          ['Toxocara canis (roundworm) ⚑Z', 'Dogs. Toxocara cati is the feline equivalent.', 'In DOGS: COUGH IN A YOUNG PUPPY, from the tracheal migration phase — plus pot belly, poor doing, vomiting worms. In HUMANS: VISCERAL and OCULAR LARVAL MIGRANS, a leading infectious cause of childhood blindness.', 'Transmission: TRANSPLACENTAL in puppies; TRANSMAMMARY in kittens. Pyrantel or fenbendazole. Deworm puppies starting at 2 weeks.'],
          ['Toxascaris leonina', 'Dogs and cats.', 'The roundworm that is NOT zoonotic — the one exception in the group.', 'Memory hook: <i>Toxocara canis</i> is the one that "leaves" the gut and migrates (zoonotic, ocular larval migrans); <i>Toxascaris leonina</i> stays put.'],
          ['Trichuris vulpis (whipworm, dog)', 'Cecum and colon of dogs. Trichuris suis is the porcine whipworm, also in the cecum.', "Large bowel diarrhea with hematochezia. Two classic complications: 1. CECOCOLIC INTUSSUSCEPTION · 2. PSEUDO-ADDISON'S DISEASE — hyponatremia and hyperkalemia mimicking hypoadrenocorticism, but with a normal ACTH stimulation test.", 'FENBENDAZOLE. Eggs are shed intermittently — a negative fecal does not rule it out. Long environmental survival.'],
          ['Strongyloides stercoralis ("threadworm") ⚑Z', 'Small intestine.', 'ANEMIA and MUCOID DIARRHEA in kittens and puppies. Skin penetration causes dermatitis.', 'BAERMANN fecal technique — because you are looking for larvae, not eggs. Ivermectin or fenbendazole.'],
          ['Spirocerca lupi (dog)', 'Esophagus of dogs.', 'Reactive esophageal granulomas that may transform into sarcoma. Also aortic aneurysm and spondylitis.', 'Dung beetle intermediate host. Prolonged doramectin or milbemycin.'],
          ['Ollulanus tricuspis (cat)', 'Stomach of CATS only.', 'Chronic VOMITING and gastritis.', 'Examine vomitus, not feces.'],
          ['Gnathostoma ("stomach worm") ⚑Z', 'Stomach wall.', 'Usually vomited up; causes gastritis.', 'Humans acquire it by ingesting UNDERCOOKED FISH → migratory cutaneous swellings and, rarely, CNS disease. Albendazole.'],
          ['Capillaria aerophila', 'Lungs / airways.', 'Chronic cough.', 'Egg: ASYMMETRIC with TERMINAL (bipolar) PLUGS — a whipworm-like egg but found on a lung sample. Fenbendazole for 10 days, the same protocol as Trichuris in a dog.'],
          ['Aelurostrongylus abstrusus (cat)', 'Lungworm diagnosed ONLY in cats.', 'Cough, wheezing — a mimic of feline asthma.', 'Baermann for L1 larvae. Fenbendazole.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'The zoonotic larval migrans questions — get the direction right',
        list: [
          '<b>CUTANEOUS</b> larval migrans → <i>Ancylostoma</i> (hookworm) — skin.',
          '<b>VISCERAL and OCULAR</b> larval migrans → <i>Toxocara canis</i> (roundworm) and <i>Baylisascaris</i>, the raccoon roundworm, which causes devastating neural larva migrans.',
          'Mnemonic: hookworm hooks into the skin; roundworm goes round the body to the organs and eye.'
        ]
      },
      {
        type: 'table', title: 'Cestodes (tapeworms)',
        columns: ['Tapeworm', 'Key features', 'Treatment'],
        rows: [
          ['Dipylidium caninum', 'Proglottids in the feces look like WHITE RICE, or cucumber seeds, and move. Intermediate host: the FLEA, and chewing lice — the animal must swallow a flea to become infected.', 'Praziquantel — plus flea control, or it will simply recur.'],
          ['Taenia taeniaeformis / T. pisiformis', 'Acquired by eating rodents or rabbits, the intermediate host.', 'Praziquantel.'],
          ['Echinococcus granulosus ⚑Z', 'The DOG is the definitive host and passes eggs in feces. In HUMANS it causes HYDATID CYST DISEASE — potentially fatal, with cysts in liver and lungs; the same in intermediate hosts such as sheep. The tiny adult tapeworm causes no disease in the dog — the danger is entirely to the people around it.', 'Praziquantel. A genuine public health priority in sheep-raising regions; do not feed raw offal to dogs.']
        ]
      },
      {
        type: 'table', title: 'Trematodes (flukes)',
        columns: ['Fluke', 'Location & disease', 'Diagnosis & treatment'],
        rows: [
          ['Paragonimus kellicotti', 'The LUNG fluke of dogs and cats. Cystic lung lesions, cough, pneumothorax.', 'Two intermediate hosts: the SNAIL and the CRAYFISH. Egg has a SINGLE OPERCULUM — a distinct "lid." Fenbendazole or praziquantel.'],
          ['Platynosomum fastosum (cat)', 'The PANCREATIC and HEPATOBILIARY fluke of cats. Florida, Caribbean, Hawaii. From eating lizards.', 'Praziquantel.'],
          ['Heterobilharzia americana', 'Blood fluke; granulomatous intestinal and hepatic disease, hypercalcemia.', 'Saline sedimentation or PCR; praziquantel plus fenbendazole.'],
          ['General rule', 'Flukes are treated with PRAZIQUANTEL.', '—']
        ]
      },
      {
        type: 'table', title: 'Protozoa',
        columns: ['Protozoan', 'Identification', 'Disease & treatment'],
        rows: [
          ['Giardia ⚑Z', 'TWO nuclei outlined by adhesive discs; pear-shaped, binucleate; swims in a "falling leaf" motion.', 'Diagnose by trophozoites on a direct fecal smear, plus fecal ELISA or zinc sulfate flotation. Small bowel diarrhea. Treat with fenbendazole or metronidazole.'],
          ['Tritrichomonas foetus (cat)', 'Looks like Giardia BUT has only ONE nucleus and an UNDULATING MEMBRANE.', 'Seen in KITTENS with chronic, unresponsive large bowel diarrhea — often young cats from catteries or shelters. Treat with RONIDAZOLE, not metronidazole. That is the trap.'],
          ['Cystoisospora (Isospora)', '2 sporocysts.', 'Infects dogs, cats and pigs — a major cause of severe diarrhea in suckling pigs. The two most common coccidia of CATS: Cystoisospora felis and C. rivolta — think foul-smelling diarrhea. Treat with sulfadimethoxine (Albon).'],
          ['Eimeria', '4 sporocysts.', 'Infects ruminants, horses, rabbits and poultry — NOT dogs and cats. A dog or cat that has eaten rabbit feces will pass Eimeria oocysts spuriously — a pseudoparasite, not an infection.'],
          ['Cryptosporidium ⚑Z', 'Requires ACID-FAST staining or IFA to find — the oocysts are tiny, 4–6 µm, and easily missed.', 'RESISTANT TO STANDARD DISINFECTANTS and to chlorination, which is why it causes waterborne human outbreaks. Zoonotic. Azithromycin, tylosin or clindamycin; no reliably effective drug, and supportive care in immunocompetent hosts.'],
          ['Toxoplasma gondii ⚑Z', 'Tissue cysts; tachyzoites.', 'The CAT is the definitive host — only cats shed oocysts, and only for a brief period after a first infection. Oocysts require 1–5 DAYS after shedding to SPORULATE and become infective, which is exactly why daily litter box cleaning prevents transmission. In infants infected in utero: CHORIORETINITIS and mental retardation. Toxoplasmosis does NOT cause abortion in cows, though it is a major abortifacient in sheep and goats. Treat with CLINDAMYCIN, also used for Neospora caninum; TMS is an alternative.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Coccidia vs. Giardia — and Isospora vs. Eimeria',
        list: [
          'Coccidia are <b>intracellular</b> protozoa that destroy the intestinal epithelium — <i>Eimeria</i>, <i>Cystoisospora</i>.',
          '<i>Giardia</i> is an <b>extracellular</b> flagellate that coats and blunts the villi without invading.',
          '<i>Eimeria</i> = 4 sporocysts = livestock, rabbits, poultry.',
          '<i>Isospora</i>/<i>Cystoisospora</i> = 2 sporocysts = dogs, cats, pigs.'
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Trophozoites are best found on a direct smear',
        body: 'A direct fecal smear — fresh, warm, saline — is the technique for motile organisms that flotation destroys: <i>Giardia</i>, <i>Tritrichomonas</i>, <i>Entamoeba</i> and <i>Balantidium</i>. If a question asks how to find a wiggling protozoan, the answer is a direct smear, not a float.'
      },
      {
        type: 'table', title: 'Antiparasitic drug map',
        columns: ['Drug', 'Spectrum'],
        rows: [
          ['Pyrantel', 'Hookworms and roundworms. Safe in very young puppies and kittens.'],
          ['Fenbendazole', 'Trichuris, Giardia, Capillaria, Paragonimus, Strongyloides, roundworms and hookworms. 10 days for Capillaria aerophila and Trichuris in a dog.'],
          ['Praziquantel', 'ALL tapeworms (cestodes) and flukes (trematodes) — Dipylidium, Taenia, Echinococcus, Paragonimus, Platynosomum. In horses and small animals alike.'],
          ['Ivermectin / macrocyclic lactones', 'Nematodes and arthropods. NOT effective against tapeworms. Good for strongyles and heartworm prevention.'],
          ['Metronidazole', 'Giardia, Entamoeba, anaerobes.'],
          ['Ronidazole', 'Tritrichomonas foetus — the specific drug.'],
          ['Sulfadimethoxine (Albon)', 'Cystoisospora coccidiosis.'],
          ['Clindamycin', 'Toxoplasma and Neospora; also Cryptosporidium, anaerobes.'],
          ['Albendazole', 'Gnathostoma; nematodes and flukes in cattle and camelids.'],
          ['Isoxazolines (afoxolaner, fluralaner)', 'Cheyletiella, Sarcoptes, Demodex, fleas, ticks.'],
          ['Imidacloprid', 'Mange and ear mites in cats, typically as imidacloprid/moxidectin.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Two protozoal drug classes worth naming',
        body: 'The two antibiotic classes with heavy activity against both protozoa and bacteria are the <b>nitroimidazoles</b> (metronidazole, ronidazole, tinidazole) and the <b>sulfonamides</b>, including potentiated sulfas. Add the lincosamides (clindamycin) as a third with real antiprotozoal activity.'
      },
      {
        type: 'rapidfire', title: 'Rapid-fire parasitology recall',
        items: [
          ['White rice in the feces', 'Dipylidium → praziquantel + flea control'],
          ['Coughing puppy', 'Toxocara canis migration'],
          ['Cutaneous larval migrans · visceral/ocular', 'Hookworm · Toxocara'],
          ["Cecocolic intussusception or pseudo-Addison's", 'Trichuris vulpis → fenbendazole'],
          ['Kitten with unresponsive diarrhea', 'Tritrichomonas foetus → ronidazole'],
          ['One nucleus + undulating membrane · two nuclei + falling leaf', 'Tritrichomonas · Giardia'],
          ['Baermann → larvae', 'Strongyloides, Aelurostrongylus'],
          ['Single-operculate egg + crayfish', 'Paragonimus'],
          ['Acid-fast tiny oocyst, chlorine-resistant', 'Cryptosporidium'],
          ['Dog definitive host, hydatid cysts in people', 'Echinococcus granulosus'],
          ['Oocysts sporulate in 1–5 days', 'Clean the litter box daily']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
