/* NAVLE Hub — Swine
 * Source: NAVLE_Swine_Study_Guide.pdf
 * Porcine is ~5% of the exam.
 */
(function (N) {
  N.push({
    id: 'swine',
    group: 'Species',
    title: 'Swine',
    tagline: '~5% of the exam. Swine medicine is age medicine — the age alone narrows the differential to two or three diseases.',
    weight: 5,
    sections: [
      { type: 'callout', variant: 'pearl', title: 'The single most useful swine exam strategy', body: 'Nearly every porcine question gives you an age — neonate, nursery, grower-finisher, or sow — and the age alone narrows the differential to two or three diseases. The age tables below are the highest-yield material in this module.' },

      /* ---------------- Enteric ---------------- */
      {
        type: 'table', title: 'The piglet diarrhea algorithm',
        columns: ['Agent', 'Age', 'Features'],
        rows: [
          ['E. coli (ETEC)', '1–5 days', 'ALKALINE pH diarrhea — enteric colibacillosis. Secretory, watery, no blood. Fimbrial adhesins: F4 (K88) affects NEONATES; F5 (K99) causes ETEC in 1–5 day old pigs; F18 with SHIGA TOXIN causes EDEMA DISEASE.'],
          ['Rotavirus', 'Nursing / weaned', 'ACIDIC pH diarrhea in young pigs — malabsorptive from villous atrophy. Prevent by vaccination.'],
          ['C. perfringens type C', '1–5 days', 'Produces alpha PLUS BETA toxin → HEMORRHAGIC, necrotizing enteritis of the small intestine. Peracute; often found dead. Prevent with PRE-FARROW VACCINATION of the sow. Treat with ANTITOXIN.'],
          ['C. perfringens type A', 'Neonatal', 'Alpha toxin only → MILD necrotic enteritis. One of the top three causes of milk-scours in a 3-day-old piglet.'],
          ['C. difficile', 'Neonatal', 'MESOCOLON EDEMA in neonates — the distinguishing lesion.'],
          ['Cystoisospora suis', '7–11 days', 'The coccidian of pigs. High morbidity, LOW mortality — NON-hemorrhagic, pasty yellow diarrhea in piglets over 1 week old. Fibrinonecrotic enteritis of the jejunum and ileum. Treat with a coccidiostat such as PONAZURIL or toltrazuril.'],
          ['Porcine astrovirus', '< 2 weeks', 'STAR-SHAPED appearance on electron microscopy — hence the name.'],
          ['Sapovirus / norovirus', 'Older piglets', 'CUP-SHAPED DEPRESSIONS on EM (calicivirus morphology — "calici" means cup). Can be ZOONOTIC.'],
          ['Sapelovirus', 'Neonatal', 'A PICORNAVIRUS — ICOSAHEDRAL. Causes enteritis plus cardiac or neurologic signs.'],
          ['PEDV (porcine epidemic diarrhea virus)', 'All ages; worst in neonates', 'A CORONAVIRUS. High MORBIDITY with severe diarrhea in NAIVE herds and very high mortality in neonates, approaching 100% under 7 days. Management: FEEDBACK — deliberately exposing sows to infected material to generate lactogenic immunity that protects the piglets.'],
          ['TGE (transmissible gastroenteritis)', 'All ages', 'A coronavirus causing vomiting and diarrhea. It is an endemic porcine coronavirus closely related to PEDV — neither zoonotic nor federally reportable.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'The 3-day-old piglet with a flaccid, thin-walled jejunum', body: 'The top three causes of milk-scours in a 3-day-old piglet with a flaccid, thin-walled jejunum containing watery contents: 1. ROTAVIRUS · 2. E. COLI · 3. C. PERFRINGENS TYPE A. The thin, flaccid wall tells you the process is secretory or malabsorptive, not necrotizing — which is what separates these from type C, where the intestine is thickened, dark, and hemorrhagic.' },
      {
        type: 'table', title: 'Enteric disease of older pigs',
        columns: ['Disease', 'Agent', 'Features & treatment'],
        rows: [
          ['Porcine proliferative enteropathy (ileitis)', 'Lawsonia intracellularis', 'Affects the SMALL INTESTINE (ileum) of OLDER pigs — grower-finishers. "GARDEN HOSE GUT" — a thickened, rigid, corrugated ileum. The hemorrhagic form causes acute death with a blood-filled intestine in finishing pigs and gilts. The same organism causes "wet tail" in hamsters and proliferative enteropathy in horses. Treat with tylosin, tiamulin, or tetracyclines.'],
          ['Swine dysentery', 'Brachyspira hyodysenteriae', 'MUCOHEMORRHAGIC DIARRHEA — mucus and blood, in the LARGE INTESTINE. Affects FEEDER-GROWER pigs at 7–16 weeks. Treat with LINCOMYCIN or tiamulin.'],
          ['Salmonellosis ⚑Z', 'Salmonella Typhimurium and Choleraesuis', 'Two lesions to name: "BUTTON ULCERS" — round, raised, concentric ulcers in the colon and cecum — and RECTAL STRICTURES from healed ulceration and ischemia, specifically with S. Typhimurium. Two structures affected: the intestine and the lung; S. Choleraesuis is the septicemic and pneumonic form. Prevention: vaccinate in the water or intranasally. Human GI disease comes from S. Typhimurium and S. Enteritidis.'],
          ['Edema disease', 'E. coli F18 with SHIGA TOXIN', 'Post-weaning. Shiga toxin causes an angiopathy → edema of the eyelids, forehead, stomach wall (gastric submucosa), and mesocolon, plus neurologic signs — ataxia, paddling — and a characteristic squeaky, hoarse squeal from laryngeal edema. Sudden death in the BEST pigs. Management: reduce weaning stress and abrupt feed changes.']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Button ulcers are not only Salmonella', body: 'Button ulcers are also the classic lesion of CLASSICAL SWINE FEVER (hog cholera), a foreign animal disease. Button ulcers plus high mortality and skin hemorrhage should raise CSF, not just salmonellosis.' },

      /* ---------------- Respiratory ---------------- */
      {
        type: 'table', title: 'Respiratory disease',
        columns: ['Disease', 'Agent', 'Features & management'],
        rows: [
          ['Enzootic pneumonia', 'Mycoplasma hyopneumoniae', 'A dry, non-productive "BARK" COUGH — predominantly a disease of GROWING PIGS, though naive introduced breeding stock cough hardest. Reduces weight gain and feed efficiency; the economic cost is mostly subclinical. Lesion: CRANIOVENTRAL CONSOLIDATION — purple-gray, well-demarcated. Treat with LINCOMYCIN (or tylosin, tiamulin, tetracyclines) and IMPROVE VENTILATION. Destroys tracheal cilia, so it is the great enabler of secondary bacterial pneumonia.'],
          ['PRRS', 'ARTERIVIRUS — an enveloped RNA virus', 'Causes SEVERE NECROTIZING INTERSTITIAL PNEUMONIA and respiratory failure, and PREDISPOSES pigs to secondary infections by destroying alveolar macrophages. Reproductive form: MUMMIFIED fetuses and STILLBIRTHS, late-term abortion, transient ear cyanosis. GILTS spread it — introducing naive or infected replacement gilts is the classic breakdown. Histopathology: interstitial pneumonia with type II pneumocyte hyperplasia and septal infiltration. A positive ELISA antibody test means EXPOSURE, not active infection or protection — it cannot distinguish vaccination from field infection. Sequence ORF5 for strain matching.'],
          ['Actinobacillus pleuropneumonia (APP)', 'Actinobacillus pleuropneumoniae', 'Affects GROWING pigs. OPEN-MOUTH BREATHING, bloody froth at the nose, and a sharp increase in mortality — pigs die acutely with a fibrinohemorrhagic necrotizing pleuropneumonia and dorsocaudal lung lesions.'],
          ['Atrophic rhinitis', 'Bordetella bronchiseptica + toxigenic Pasteurella multocida', 'Both are GRAM-NEGATIVE COCCOBACILLI. Bordetella ALONE causes rhinitis. Bordetella COMBINED with toxigenic Pasteurella causes ATROPHIC RHINITIS with TURBINATE ATROPHY — snout deviation, epistaxis, tear staining. That two-organism requirement is the exam point.'],
          ['Swine influenza ⚑Z', 'Influenza A', 'Seen in FALL and WINTER. ACUTE ONSET and RAPID RECOVERY — high morbidity, low mortality, herd recovers in about a week. Zoonotic and reverse-zoonotic.'],
          ['Ascarid larval migration', 'Ascaris suum', 'VERMINOUS pneumonia from larvae migrating through the lungs.']
        ]
      },
      { type: 'callout', variant: 'pearl', title: 'The porcine respiratory disease complex', body: 'Like BRDC in cattle, swine respiratory disease is usually multifactorial: a primary agent (M. hyopneumoniae, PRRS, influenza, PCV2) damages defenses, and secondary bacteria (Pasteurella, Glaesserella, Strep suis, APP) do the killing. Ventilation and stocking density are as much the treatment as any antibiotic.' },

      /* ---------------- Systemic ---------------- */
      {
        type: 'table', title: 'Systemic, septicemic & cardiac disease',
        columns: ['Disease', 'Agent', 'Features & treatment'],
        rows: [
          ['Streptococcus suis ⚑Z', 'Gram-positive coccus', 'Found in the TONSILS and lungs; affects the JOINTS. Seen in WEANLING and GROWER pigs. Causes MENINGITIS (paddling, opisthotonos), arthritis, and VALVULAR ENDOCARDITIS. Three signs of valvular endocarditis: SEIZURES, PADDLING, FIBRIN IN THE CHEST. Zoonotic — causes meningitis and deafness in abattoir workers.'],
          ['Glaesserella (Haemophilus) parasuis — Glässer\'s disease', 'Gram-negative', 'Septicemia and SUDDEN DEATH in 6–8 WEEK OLD pigs. Sign: FIBRINOUS SEROSITIS — fibrin on the pericardium, pleura, peritoneum, and joints. Treat with PENICILLIN.'],
          ['Mycoplasma hyorhinis', 'Mycoplasma', 'SEPTICEMIA in pigs UNDER 10 WEEKS — arthritis with polyserositis and systemic disease → failure to thrive. Associated with COLOSTRUM DEPRIVATION.'],
          ['Erysipelas ⚑Z', 'Erysipelothrix rhusiopathiae — a GRAM-POSITIVE ROD', 'Three forms: acute septicemia with DIAMOND-SHAPED skin lesions; chronic ARTHRITIS causing lameness; and VEGETATIVE VALVULAR ENDOCARDITIS. Treat with PENICILLIN — highly susceptible, and the dramatic response is itself near-diagnostic. Zoonotic: causes "erysipeloid" in fish handlers, butchers, and veterinarians. Also affects turkeys and sheep.'],
          ['Mulberry heart disease', 'Vitamin E and SELENIUM deficiency', 'TRANSMURAL HEMORRHAGES ON THE HEART — a mottled, mulberry-like appearance. Sudden death in rapidly growing nursery pigs, typically the best in the pen. Treat and prevent with VITAMIN E INJECTION and dietary selenium. Related: hepatosis dietetica (liver) and white muscle disease (skeletal muscle) are the same deficiency in different tissues.'],
          ['Mycoplasma suis (eperythrozoonosis)', 'Hemotropic mycoplasma', 'An infectious HEMOLYTIC ANEMIA — attaches to the red cell surface. Classic transmission route: CONTAMINATED NEEDLES, and biting insects. Icterus, pallor, poor doing. Treat with tetracyclines.'],
          ['PCV2 / PMWS', 'PORCINE CIRCOVIRUS 2', 'Three findings: PALE KIDNEYS with white foci, ENLARGED LYMPH NODES, and EDEMA or pleural effusion. Progressive wasting in nursery and grower pigs, plus dermatitis-nephropathy syndrome. Diagnosis requires detecting VIRAL ANTIGEN IN LYMPHOID TISSUE by IHC or in situ hybridization — because the virus is ubiquitous, you must show it in the lesion to call it disease. There is no specific treatment: management is vaccination (highly effective), reducing co-infections, and improving husbandry.'],
          ['Leptospirosis ⚑Z', 'Leptospira', 'ABORTION and SMALL LITTER SIZE. Zoonotic.']
        ]
      },

      /* ---------------- Neurologic ---------------- */
      {
        type: 'table', title: 'Neurologic disease',
        columns: ['Disease', 'Agent', 'Features'],
        rows: [
          ['Pseudorabies (Aujeszky\'s disease) ⚑R', 'HERPESVIRUS (suid herpesvirus-1)', 'Affects piglets under 7 days most severely — near 100% mortality with CNS signs. Lesion: NECROTIZING TONSILLITIS. FATAL TO CATS AND DOGS that eat infected pork — the "mad itch," with frantic self-mutilation and rapid death. Pigs are the only natural host; every other species dies. Eradicated from commercial US herds — reportable; feral swine remain a reservoir.'],
          ['Porcine polio (Teschovirus; Teschen/Talfan disease)', 'TESCHOVIRUS', 'Affects ALL AGES. Four signs: fever, lethargy, ataxia, and a PARALYZED pig. Progressive posterior paresis to tetraplegia.'],
          ['Edema disease', 'E. coli F18 Shiga toxin', 'Neurologic signs from cerebrovascular angiopathy — ataxia, paddling, and the squeaky squeal.'],
          ['Salt poisoning / water deprivation', 'Sodium ion toxicosis', 'PIGS ARE THE MOST AFFECTED SPECIES. PATHOGNOMONIC LESION: PERIVASCULAR INFILTRATION OF EOSINOPHILS ("eosinophilic cuffing") in the brain. Mechanism: high blood sodium → brain dehydration → the brain generates idiogenic osmoles → when water is suddenly restored, water rushes back in and the brain swells → head pressing, star-gazing, blindness, seizures, "dog-sitting" posture. The disease is really WATER DEPRIVATION and the damage occurs on rehydration. The critical management point: REINTRODUCE WATER SLOWLY AND IN SMALL AMOUNTS. Giving free access to water is what kills them.'],
          ['Strep suis meningitis', 'S. suis', 'Weanlings; paddling and opisthotonos.'],
          ['Sapelovirus', 'Picornavirus', 'Neonatal enteritis plus cardiac or neurologic signs.']
        ]
      },

      /* ---------------- MSK ---------------- */
      {
        type: 'table', title: 'Musculoskeletal & lameness',
        columns: ['Condition', 'Agent', 'Features & treatment'],
        rows: [
          ['Mycoplasma hyorhinis arthritis', 'Mycoplasma', 'Pigs UNDER 10 WEEKS. Arthritis WITH polyserositis and SYSTEMIC disease → failure to thrive. Associated with colostrum deprivation.'],
          ['Mycoplasma hyosynoviae arthritis', 'Mycoplasma', 'Pigs 4–6 MONTHS old. MILD lameness LOCALIZED TO JOINTS, with no systemic illness — chronic lameness in a grower-finisher. Associated with poor ventilation, high ammonia, and stress. RESISTANT TO PENICILLIN — treat with TYLOSIN or LINCOMYCIN.'],
          ['Septic arthritis', 'Streptococcus (S. suis) or Trueperella', 'In growing pigs, usually associated with trauma or hematogenous seeding — tail biting, navel infection, castration wounds.'],
          ['Erysipelas arthritis', 'E. rhusiopathiae', 'Chronic proliferative arthritis and lameness; penicillin.'],
          ['Porcine stress syndrome / malignant hyperthermia', 'RYR1 mutation (halothane gene)', 'Triggered by stress or halothane anesthesia. Uncontrolled calcium release from the sarcoplasmic reticulum → hyperthermia, muscle rigidity, acidosis, death. Produces PSE (pale, soft, exudative) pork. Treat and prevent with DANTROLENE — a RYANODINE RECEPTOR ANTAGONIST that reduces muscle contraction by blocking calcium release.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'M. hyorhinis vs. M. hyosynoviae', body: 'hyoRHINIS = YOUNGER (<10 weeks) = SYSTEMIC (septicemia + polyserositis + arthritis) = colostrum-deprived. hyoSYNOVIAE = OLDER (4–6 months) = JOINTS ONLY = mild chronic lameness = ventilation and stress. Mnemonic: synoviae stays in the synovium.' },

      /* ---------------- Dermatology ---------------- */
      {
        type: 'table', title: 'Dermatology',
        columns: ['Condition', 'Agent', 'Features & treatment'],
        rows: [
          ['Greasy pig disease (exudative epidermitis)', 'Staphylococcus hyicus', 'BROWN, greasy exudate covering pigs UNDER 6 WEEKS of age. Generalized, non-pruritic, and often fatal from dehydration and protein loss in severe cases. Follows skin abrasion — fighting, rough floors, mange.'],
          ['Sarcoptic mange ⚑Z', 'Sarcoptes scabiei var. suis', 'The most important ectoparasite of pigs — intense pruritus, ear crusts, poor growth. Treat with PERMETHRIN and INJECTABLE IVERMECTIN.'],
          ['"Dippity pig" (erythema multiforme)', 'Immune-mediated', 'A TYPE III HYPERSENSITIVITY causing VASCULITIS. Lesion: CONCENTRIC, IRIS-LIKE RINGS of erythema — target lesions, classically over the back, with acute pain and dipping of the back. Self-limiting.'],
          ['Pityriasis rosea', 'Idiopathic / hereditary', 'RINGWORM-LIKE annular lesions in pigs OVER 2 MONTHS of age. Self-limiting and non-pruritic — the important point is that it is not ringworm and needs no treatment.'],
          ['Zinc-responsive dermatitis', 'Zinc deficiency', 'PARAKERATOSIS — thick, crusted, scaly plaques. Excess dietary calcium binds zinc and precipitates it. Supplement zinc.'],
          ['Epitheliogenesis imperfecta', 'Congenital', 'Congenital absence or defect of the epidermis, typically on the legs or over the hooves — well-demarcated areas of missing skin present at birth.'],
          ['Seneca Valley virus', 'Senecavirus A', 'Causes vesicles INDISTINGUISHABLE from FMD but is not itself reportable. Because it cannot be told apart clinically, every vesicular case must still be reported and investigated as a suspect foreign animal disease — the correct clinical action is identical whether or not the final answer turns out to be SVV.']
        ]
      },

      /* ---------------- Reproduction ---------------- */
      {
        type: 'table', title: 'Reproduction',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Estrous cycle', 'Year-round polyestrus; 21-day cycle. Estrus lasts 40–60 hours overall — 36–48 hours in GILTS and 48–72 hours in SOWS.'],
          ['Gestation', '114 days — "3 months, 3 weeks, 3 days."'],
          ['Weaning to estrus', 'Multiparous sows return to estrus 3–7 days after weaning.'],
          ['Pregnancy diagnosis', 'Reliable after 30 days by ultrasound.'],
          ['Fetal calcification', 'Visible radiographically at about 35 days — useful for aging mummified fetuses.'],
          ['Porcine parvovirus', 'Two effects: IRREGULAR RETURN TO ESTRUS and DECREASED LITTER SIZE. The animal most affected is the healthy FIRST-PARITY GILT, which is naive — she produces dead and mummified fetuses. Part of the SMEDI complex (Stillbirth, Mummification, Embryonic Death, Infertility). Vaccinate gilts before breeding — this is why gilt acclimation exists.'],
          ['PRRS', 'Mummified fetuses and stillbirths, late-term abortion. Gilts spread it.'],
          ['Leptospirosis', 'Abortion and small litter size.'],
          ['Endometritis', 'Two causes: Staphylococcus hyicus and E. coli.'],
          ['Rectal prolapse', 'Two causes: COUGHING and MYCOTOXINS — specifically ZEARALENONE, whose estrogenic effect causes tenesmus and perineal edema.']
        ]
      },

      /* ---------------- Parasitology ---------------- */
      {
        type: 'table', title: 'Parasitology',
        columns: ['Parasite', 'Location', 'Disease & treatment'],
        rows: [
          ['Ascaris suum', 'Adults in the SMALL INTESTINE; larvae migrate through the LIVER and LUNGS', '"MILK SPOTS" ON THE LIVER — white fibrotic tracts from larval migration; the classic slaughterhouse condemnation lesion. Larvae travel to the LUNGS → VERMINOUS PNEUMONIA with coughing and mild diarrhea. Treat with FENBENDAZOLE — safer than piperazine, which is a paralytic and risks obstruction if a heavy worm mass is paralyzed at once.'],
          ['Trichuris suis (porcine whipworm)', 'CECUM and proximal COLON', 'Commonly found in pigs UNDER 6 MONTHS old, causing diarrhea — mucohemorrhagic in heavy burdens, and a mimic of swine dysentery. Treat with FENBENDAZOLE.'],
          ['Stephanurus dentatus (swine kidney worm)', 'LIVER and KIDNEY — perirenal fat and ureters', 'Long prepatent period; liver condemnation. Control is entirely by MANAGEMENT: (1) replace older boars with young boars from a clean herd; (2) breed only gilts to those young boars; (3) sell the gilts and young boars to slaughter after weaning their first litter. The long life cycle means removing all animals before they become patent breaks transmission — a "gilt-only" facility eliminates it.'],
          ['Cystoisospora suis', 'Small intestine', 'Coccidiosis at 7–11 days; non-hemorrhagic diarrhea; ponazuril.'],
          ['Trichinella spiralis ⚑Z', 'Muscle — encysted larvae', 'A ROUNDWORM. In the pig: fever, MYOSITIS, and edema. Treatment is very difficult — the answer is to remove the pig from the food chain, or an azole. The public health answer: COOK PORK TO 160°F. Freezing also kills most species. Zoonotic from undercooked pork or wild game.'],
          ['Sarcoptic mange', 'Skin', 'Permethrin and injectable ivermectin.']
        ]
      },

      /* ---------------- Toxicology ---------------- */
      {
        type: 'table', title: 'Toxicology & nutritional disease',
        columns: ['Toxin / deficiency', 'Source & mechanism', 'Signs & management'],
        rows: [
          ['Zearalenone', 'A Fusarium mycotoxin in moldy corn. PIGS are sensitive because the metabolite is ESTROGENIC — zearalenol binds estrogen receptors.', 'Two effects: HYPERESTROGENISM and PSEUDOPREGNANCY. Vulvar swelling and reddening in prepubertal gilts, vaginal and rectal prolapse, anestrus, and reduced litter size.'],
          ['Fumonisin', 'Fusarium in moldy corn. In horses the same toxin causes leukoencephalomalacia.', 'Three effects in pigs: HYDROTHORAX, PORCINE PULMONARY EDEMA, respiratory signs. Also hepatotoxicity.'],
          ['Aflatoxin', 'Aspergillus flavus-contaminated CORN.', 'Hepatotoxic — three signs: ASCITES, ICTERUS, ANOREXIA. Also immunosuppression and reduced growth.'],
          ['Salt poisoning / water deprivation', 'PIGS ARE THE MOST AFFECTED SPECIES.', 'Pathognomonic: PERIVASCULAR EOSINOPHILIC CUFFING in the brain. Head pressing, blindness, seizures. Reintroduce water SLOWLY.'],
          ['Iron toxicity', 'Iron dextran injection in a selenium or vitamin E-deficient piglet.', 'Three effects: ACUTE MUSCLE DAMAGE, HYPERKALEMIA, DEATH. Sudden death within hours of injection — a genuine and avoidable clinical disaster. Ensure sow selenium and vitamin E status before routine iron dosing.'],
          ['Vitamin E / selenium deficiency', 'Dietary.', 'Three syndromes: MULBERRY HEART DISEASE, hepatosis dietetica, and white muscle disease. Treat with vitamin E injection.'],
          ['Cocklebur', 'PIGS are the most affected species; the toxic stage is the two-leaf seedling.', 'Acute hepatic necrosis with hypoglycemia, depression, and death.'],
          ['Copper', 'PIGS are RESISTANT to copper toxicity relative to sheep — copper is fed as a growth promoter.', 'The exam point is the contrast: sheep are exquisitely sensitive; pigs are not. Toxicity still occurs at very high dietary levels.'],
          ['Gossypol', 'Cotton seed.', 'Cardiotoxic. Inactivated by IRON.']
        ]
      },

      /* ---------------- Reportable ---------------- */
      { type: 'callout', variant: 'danger', title: 'Vesicles in a pig are a foreign animal disease until proven otherwise', body: 'FMD, vesicular stomatitis, swine vesicular disease, and vesicular exanthema of swine are clinically indistinguishable — and so is Seneca Valley virus, which is not reportable but looks identical. Any vesicular lesion in a pig must be reported and investigated. Notify the State Animal Health Official or USDA Area Veterinarian in Charge.' },
      {
        type: 'table', title: 'Reportable & foreign animal diseases',
        columns: ['Disease', 'Agent', 'Recognition', 'Action'],
        rows: [
          ['Classical swine fever (hog cholera) ⚑R', 'Pestivirus', 'High fever, skin hemorrhage and cyanosis of the extremities, button ulcers, "huddling," neurologic signs, high mortality. Eradicated from the US in 1978.', 'DEPOPULATE THE HERD. Report immediately.'],
          ['African swine fever ⚑R', 'Asfivirus', 'Clinically similar to CSF with near-100% mortality; high fever, cyanotic skin, splenomegaly. No vaccine.', 'Report; depopulate.'],
          ['Foot and mouth disease ⚑R', 'Aphthovirus', 'Vesicles on the snout, coronary bands, and teats. Pigs are efficient amplifiers.', 'Report immediately.'],
          ['Vesicular stomatitis ⚑R ⚑Z', 'Vesiculovirus', 'Affects PIGS, HORSES, and SHEEP. Indistinguishable from FMD in the pig.', 'Report.'],
          ['Pseudorabies ⚑R', 'Herpesvirus', 'Necrotizing tonsillitis; CNS disease in piglets; fatal "mad itch" in dogs and cats.', 'Report; eradicated from commercial herds, feral swine reservoir.'],
          ['Brucellosis ⚑R ⚑Z', 'Brucella suis', 'Abortion, orchitis; feral swine reservoir.', 'Report; test and slaughter.'],
          ['Swine influenza ⚑Z', 'Influenza A', 'Acute onset, rapid recovery, fall and winter.', 'Zoonotic and reverse-zoonotic; monitor for novel reassortants.'],
          ['Trichinella ⚑Z', 'Nematode', 'Muscle cysts; human disease from undercooked pork.', 'Cook pork to 160°F.'],
          ['Streptococcus suis ⚑Z', 'Gram-positive coccus', 'Meningitis and deafness in abattoir and farm workers.', 'Occupational hygiene.'],
          ['Erysipelas ⚑Z', 'E. rhusiopathiae', '"Erysipeloid" — painful hand lesions in handlers, butchers, and fish workers.', 'Gloves; penicillin.'],
          ['Salmonella ⚑Z', 'S. Typhimurium, S. Enteritidis', 'Human GI disease.', 'Food safety controls.']
        ]
      },

      /* ---------------- Age master table ---------------- */
      {
        type: 'table', title: 'Disease by age — the master table',
        columns: ['Age', 'Think of'],
        rows: [
          ['< 7 days', 'Pseudorabies (near 100% mortality) · E. coli F4/F5 · C. perfringens type C (1–5 d) · C. difficile (mesocolon edema) · porcine astrovirus · PEDV · sapelovirus'],
          ['7–11 days', 'Cystoisospora suis coccidiosis'],
          ['< 6 weeks', 'Greasy pig disease (Staph hyicus)'],
          ['6–8 weeks', 'Glaesserella parasuis — septicemia, sudden death, fibrinous serositis'],
          ['< 10 weeks', 'Mycoplasma hyorhinis — systemic arthritis with polyserositis'],
          ['Post-weaning', 'Edema disease (F18 Shiga toxin) · PCV2 / PMWS'],
          ['7–16 weeks', 'Swine dysentery (Brachyspira) — mucohemorrhagic diarrhea'],
          ['< 6 months', 'Trichuris suis — whipworm diarrhea'],
          ['4–6 months', 'Mycoplasma hyosynoviae — mild chronic joint lameness'],
          ['Grower-finisher', 'Lawsonia (garden hose gut) · APP · Strep suis · erysipelas'],
          ['First-parity gilt', 'Porcine parvovirus — mummies and small litters · PRRS'],
          ['Over 2 months', 'Pityriasis rosea (ringworm-like, self-limiting)']
        ]
      },
      {
        type: 'cloze', title: 'Numbers to memorize',
        items: [
          { q:'Sow gestation is ___ days.', a:'114', why:'"3 months, 3 weeks, 3 days."' },
          { q:'The porcine estrous cycle is ___ days.', a:'21', why:'Year-round polyestrus. Estrus itself is 40–60 hours overall.' },
          { q:'Gilt estrus lasts ___ hours.', a:'36-48', accept:['36–48','36 to 48'], why:'Sows stand longer — 48–72 hours.' },
          { q:'Weaning to estrus in a multiparous sow is ___ days.', a:'3-7', accept:['3–7','3 to 7'], why:'A longer interval points to a body condition or lactation problem.' },
          { q:'Pregnancy can be diagnosed by ultrasound after ___ days.', a:'30', accept:['> 30','>30'], why:'Fetal calcification becomes visible on radiographs at about 35 days.' },
          { q:'A pig has ___ permanent teeth.', a:'44', why:'The most of any domestic species.' },
          { q:'Pork must be cooked to ___°F to control Trichinella.', a:'160', why:'Trichinella spiralis — the classic pork-borne zoonosis.' }
        ]
      },

      /* ---------------- Piglet enteric detail retained from clusters ---------------- */
      {
        type: 'table', title: 'E. coli fimbrial antigens',
        columns: ['Fimbria', 'Age affected', 'Disease'],
        rows: [
          ['F4 (K88)', 'Neonatal through post-weaning — the only type whose receptor persists with age', 'Neonatal and post-weaning diarrhea'],
          ['F5 (K99), F6 (987P), F41', 'Neonatal only — receptor disappears with age', 'Neonatal diarrhea'],
          ['F18', 'Post-weaning only — receptor develops later', 'Post-weaning diarrhea, or edema disease if Shiga toxin (Stx2e)-producing']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
