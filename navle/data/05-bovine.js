/* NAVLE Hub — Bovine
 * Source: NAVLE_Ruminant_Study_Guide.pdf (bovine chapters)
 * Bovine is 13.3% of the exam.
 */
(function (N) {
  N.push({
    id: 'bovine',
    group: 'Species',
    title: 'Bovine',
    tagline: '13.3% of the exam. Herd-level thinking and regulatory answers matter as much as individual medicine.',
    weight: 13.3,
    sections: [

      /* ---------------- Anatomy & forestomach ---------------- */
      {
        type: 'table', title: 'Functional anatomy & regional anesthesia',
        columns: ['Structure', 'Detail'],
        rows: [
          ['Passage of food', 'RETICULUM (honeycomb) → RUMEN (left side) → OMASUM → ABOMASUM, the true glandular stomach.'],
          ['Normal rumen pH', '6, roughly 6.0–6.8. It drops toward 5 in grain overload.'],
          ['Rumenotomy', 'Best location: the LEFT PARALUMBAR FOSSA. Two indications: hardware disease (traumatic reticuloperitonitis) and grain overload or toxic plant removal.'],
          ['Paravertebral block', 'Anesthetizes T13, L1, and L2. Needle placement is over the transverse processes of L1, L2, and L4 for the proximal technique.'],
          ['Dehorning', 'Block the CORNUAL NERVE — a branch of the zygomaticotemporal branch of the trigeminal (CN V). Sinusitis follows if you open the frontal sinus diverticulum when dehorning an adult.'],
          ['Teeth', 'Ruminants have 32 teeth and NO upper incisors — a dental pad instead.']
        ]
      },
      {
        type: 'table', title: 'Forestomach & abomasal disease',
        columns: ['Condition', 'Features', 'Management'],
        rows: [
          ['Rumen acidosis / grain overload', 'High-energy grain diet → Streptococcus bovis and Lactobacillus proliferate → lactic acid accumulates → rumen pH falls from 6 to 5, killing the normal microbial population.', 'Alkalinizing agents, fluids, rumen transfaunation, rumenotomy if severe. Sequelae: rumenitis → liver abscesses, and laminitis.'],
          ['Rumenitis and liver abscesses', 'Fusobacterium necrophorum enters the portal circulation through damaged rumen wall. The classic feedlot sequela of grain overload. F. necrophorum is also the agent of foot rot and calf diphtheria — one bug, three diseases.', 'Tylosin is used in feed for prevention rather than to treat an established abscess.'],
          ['Caudal vena cava thrombosis', 'The full chain: high-producing cow → grain overload and rumenitis → F. necrophorum into portal circulation → liver abscess → erodes into the caudal vena cava → septic thrombus showers the lungs → pulmonary abscess RUPTURES INTO AN AIRWAY.', 'Three signs: right-sided heart failure, EPISTAXIS, HEMOPTYSIS. Grave prognosis; often found dead from exsanguination.'],
          ['Vagal indigestion', 'Outflow failure at the pylorus or reticulo-omasal orifice from vagal nerve damage — often post-hardware disease or an abscess.', 'Two results: indigestion with a papple-shaped abdomen, and BRADYCARDIA. The bradycardia is the tell.'],
          ['Abomasal impaction', 'Two findings: HIGH CHLORIDE in the rumen (abomasal chloride refluxes forward) and "internal vomiting." Produces a hypochloremic, hypokalemic metabolic ALKALOSIS with paradoxical aciduria.', 'Fluids with chloride and potassium; surgery for true impaction.'],
          ['Abomasal ulcer', 'Bleeding ulcers produce melena and profound anemia. Perforating ulcers cause peritonitis.', 'Best treatment for the bleeding ulcer: BLOOD TRANSFUSION — the cow bleeds out into her own GI tract.'],
          ['Left displaced abomasum (LDA)', 'Left-sided ping between ribs 9 and 13. Classic in the fresh, high-producing dairy cow in negative energy balance; commonly concurrent with ketosis, hypocalcemia, or metritis.', 'Surgical correction — right flank omentopexy/pyloropexy, left flank abomasopexy, or toggle. Correct the concurrent disease.'],
          ['Right displaced abomasum (RDA)', 'An RDA lacks the two features an LDA has — the left-sided ping and the left-side location. RDA pings on the right and progresses to volvulus.', 'Surgical correction; RDA with volvulus is an emergency.'],
          ['Cecal dilation / volvulus', 'Predisposed during the FRESH period (early lactation), on a high-concentrate diet with negative energy balance.', 'Right flank typhlotomy or medical management.'],
          ['Hemorrhagic bowel syndrome', 'Located in the JEJUNUM. Associated with Clostridium perfringens type A and Aspergillus. An intraluminal blood clot causes obstruction.', 'Surgery; grave prognosis.'],
          ['Atresia coli', 'The HOLSTEIN is at increased risk. Calf fails to pass meconium; abdominal distension.', 'Poor prognosis; associated with rectal palpation of the amniotic vesicle early in gestation.'],
          ['Rectal prolapse — four grades', '1. Mucosa alone prolapsed. 2. All layers of the rectum prolapsed. 3. Intussusception of the descending colon into the rectum. 4. Intussusception of the small colon into the rectum.', 'Grades 1–2 are reducible; 3–4 require surgery. In cattle the two most common are grades 1 and 2.']
        ]
      },

      /* ---------------- Metabolic ---------------- */
      {
        type: 'table', title: 'Metabolic & nutritional disease',
        columns: ['Condition', 'Pathophysiology & signs', 'Treatment'],
        rows: [
          ['Hypocalcemia (milk fever)', 'Recently calved, high-producing cow. Progressive flaccid recumbency, cool extremities, decreased gut motility.', 'IV calcium borogluconate — response is rapid and is itself diagnostic. If she does not respond, look for nerve damage or toxic mastitis instead.'],
          ['Grass tetany / grass staggers', 'HYPOMAGNESEMIA in a lactating cow on lush pasture. Lush spring pasture is high in nitrogen and potassium, which inhibit magnesium absorption. Five signs: restlessness, staggers, over-alertness, excitability, then falls down and dies. Muscle twitching, nervousness.', 'IV magnesium with calcium; then oral supplementation and pasture management. The other cause of "staggers" is Phalaris / canary grass — stiff gait, hyperexcitability, nystagmus, head tremors, falling and flailing.'],
          ['Ketosis / fat cow syndrome', 'Over-conditioned cow in negative energy balance mobilizes fat into the liver.', 'Oral propylene glycol or IV dextrose — provide glucose precursors.'],
          ['Post-parturient hemoglobinuria', 'A sign of PHOSPHORUS deficiency. Intravascular hemolysis with red urine in a fresh cow.', 'Phosphorus supplementation; transfusion if severe.'],
          ['Hypovitaminosis A', 'Seen in WINTER or DROUGHT — no green forage. Three consequences: reproductive failure with low conception rates, vision loss and night blindness, and immune dysfunction with persistent diarrhea.', 'Vitamin A supplementation.'],
          ['Copper deficiency', 'Caused by MOLYBDENUM excess — molybdenum binds copper. "Copper coat" — faded, rusty hair — with SPECTACLES around the eyes, plus diarrhea. In young animals, broken bones despite adequate vitamin D.', 'Copper supplementation; correct dietary molybdenum and sulfur.'],
          ['White muscle disease', 'Selenium and/or vitamin E deficiency. Affects skeletal AND cardiac muscle.', 'Elevated CK and AST. Selenium is a cofactor for GLUTATHIONE PEROXIDASE — measuring GSH-Px in whole blood checks selenium status. Treat with injectable selenium and vitamin E.'],
          ['Zinc deficiency', 'Contributes to rain rot / dermatophilosis. In goats causes parakeratosis and poor coat.', 'Zinc supplementation.'],
          ['High mountain (brisket) disease', 'Pulmonary hypertension at altitude → right heart failure and brisket edema.', 'Screen with a PAP score: under 41 mmHg is good; above 46 mmHg the animal is susceptible. Move to lower altitude. Locoweed worsens it.']
        ]
      },
      {
        type: 'table', title: 'Cardiac',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Most common arrhythmia', 'ATRIAL FIBRILLATION. Sign: pulsus alternans — two quick normal pulses followed by a dropped pulse. Usually resolves when the underlying GI disease is corrected.'],
          ['Five causes of cardiomyopathy', 'Gossypol · lymphosarcoma · monensin · selenium (deficiency or toxicity) · vitamin E deficiency.'],
          ['Vegetative endocarditis', 'Organism: Trueperella pyogenes. The valve most commonly affected in cattle is the TRICUSPID (right side) — opposite the aortic/mitral pattern of small animals. Recommended action: EUTHANASIA — the prognosis is hopeless once vegetations form.'],
          ['Blood types', 'The two clinically relevant systems in cattle are B and J. Treat a transfusion reaction with dexamethasone, epinephrine, an antihistamine, and oxygen.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire forestomach & metabolic recall',
        items: [
          ['Bradycardia + indigestion', 'Vagal indigestion'],
          ['Epistaxis + hemoptysis + right heart failure', 'Caudal vena cava thrombosis'],
          ['High rumen chloride + "internal vomiting"', 'Abomasal impaction → hypochloremic alkalosis'],
          ['Bleeding abomasal ulcer', 'Transfuse'],
          ['Lactating cow on lush spring pasture, staggers', 'Hypomagnesemia'],
          ['Faded coat with spectacles + diarrhea', 'Copper deficiency from molybdenum excess'],
          ['Post-parturient hemoglobinuria', 'Phosphorus deficiency'],
          ['PAP score above 46', 'Susceptible to brisket disease'],
          ['Tricuspid vegetative endocarditis', 'Trueperella pyogenes → euthanize'],
          ['Recently calved, down, responds to IV calcium', 'Milk fever']
        ]
      },

      /* ---------------- Enteric ---------------- */
      { type: 'callout', variant: 'pearl', title: 'The single most testable table in bovine medicine', body: 'Calf diarrhea is answered by AGE. Memorize the age windows and you can answer almost any calf scours question without knowing anything else about the case.' },
      {
        type: 'table', title: 'Calf diarrhea by age',
        columns: ['Agent', 'Age', 'Features'],
        rows: [
          ['E. coli (ETEC)', '< 4 days', 'The earliest scours. Secretory, watery diarrhea; profound dehydration and acidosis. K99/F5 fimbrial adhesin.'],
          ['Rotavirus', '5 days – 4 weeks', 'Villous atrophy → malabsorptive diarrhea.'],
          ['Coronavirus', '4 – 30 days', 'Damages both small intestine and colon — generally more severe than rotavirus.'],
          ['Enterotoxemia (C. perfringens type C)', '~2 weeks', 'Affects the HEALTHIEST, fastest-growing calf. Hemorrhagic, peracute, often found dead. That "best calf in the pen" detail is the exam hook.'],
          ['Cryptosporidium ⚑Z', '1 – 3 weeks', 'Chronic emaciation with TENESMUS. Zoonotic and resistant to standard disinfectants.'],
          ['Salmonella and coccidiosis', '> 21 days', 'The "older calf" causes. Salmonella brings fever and blood or mucus; coccidiosis brings tenesmus and hematochezia.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'The non-contagious one', body: 'Clostridium perfringens causes calf diarrhea but is NOT transmitted between calves — it comes from soil and the normal gut flora, proliferating when management changes. The same point holds in adult cattle.' },
      {
        type: 'table', title: 'Adult enteric disease',
        columns: ['Disease', 'Agent', 'Features', 'Diagnosis & control'],
        rows: [
          ['Johne\'s disease (paratuberculosis)', 'Mycobacterium avium subsp. paratuberculosis', 'Two signs: chronic PROFUSE DIARRHEA in a bright, still-eating adult cow, and progressive WEIGHT LOSS. Bottle jaw from hypoproteinemia. Granulomatous enteritis with corrugated "brain-like" intestinal mucosa and enlarged mesenteric nodes. Infection occurs in calfhood; disease appears at 2–5 years.', 'Fecal PCR or culture; serum ELISA for herd screening. Control by preventing calfhood exposure — calve in a clean area, remove the calf immediately, feed pasteurized colostrum. Test and cull; no treatment.'],
          ['Winter dysentery', 'CORONAVIRUS', 'Explosive, dark, bloody diarrhea in adult DAIRY cows with a sharp milk drop. Occurs in JANUARY — the seasonality is the hook. Two presentations: diarrhea in neonates and this adult winter form.', 'Self-limiting over days; supportive care.'],
          ['Salmonellosis ⚑Z', 'Salmonella enterica — most commonly S. Dublin and S. Typhimurium', 'Sudden, foul-smelling diarrhea often with mucus and blood, high fever, dehydration, rapid weight loss. S. Dublin also causes septicemia and pneumonia in calves.', 'Culture. Zoonotic — a real risk to handlers. Supportive care; antibiotic use is controversial.'],
          ['BVDV / mucosal disease', 'Pestivirus', 'Three presentations: acute BVD with immunosuppression and diarrhea; persistent infection (PI); and mucosal disease — a PI animal superinfected with the cytopathic biotype, always fatal, with erosive oral and coronary band lesions. An in-utero calf becomes PI when infected at 80–150 days of gestation, before immune competence. Also causes hydranencephaly and cerebellar hypoplasia.', 'PCR; ear-notch antigen for PI screening. Identify and cull PI animals — they are the reservoir.'],
          ['Coccidiosis', 'Eimeria — the most common identified cause of coccidial diarrhea in calves', 'Tenesmus and hematochezia in calves over 3 weeks. Nervous coccidiosis causes central blindness and seizures.', 'Amprolium plus sulfonamides. Amprolium is a thiamine analog — high doses can precipitate polioencephalomalacia.']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Erosive oral lesions are a reporting event', body: 'Foot-and-mouth disease and vesicular stomatitis cannot be told apart from each other, or reliably from mucosal disease, on clinical signs alone. Any vesicular or erosive oral lesion in cattle requires immediate reporting for laboratory differentiation, not a treatment plan. Report on suspicion — do not wait for confirmation.' },

      /* ---------------- Respiratory ---------------- */
      {
        type: 'table', title: 'The bovine respiratory disease complex',
        columns: ['Agent', 'Role'],
        rows: [
          ['The five primary VIRAL pathogens', '1. IBR (BHV-1) · 2. BVDV · 3. BRSV · 4. PI-3 · 5. Bovine coronavirus. These damage the airway and suppress immunity, opening the door for the bacteria below.'],
          ['Mannheimia haemolytica', 'The principal bacterial killer in shipping fever. CRANIOVENTRAL distribution with a HEPATIZED (consolidated, liver-like) lung — the classic necropsy description. Fibrinous pleuropneumonia.'],
          ['Histophilus somni', 'Causes heart failure — myocarditis with papillary muscle necrosis — as part of BRDC, plus TEME.'],
          ['Mycoplasma bovis', 'Three classic signs together: respiratory signs, SWOLLEN JOINTS, and HEAD TILT with suppurative EAR involvement. That triad is essentially diagnostic. Also a contagious mastitis pathogen. Notoriously refractory to treatment.'],
          ['Pasteurella multocida and Trueperella pyogenes', 'Secondary invaders; Trueperella forms abscesses in chronic cases.']
        ]
      },
      { type: 'callout', variant: 'pearl', title: 'Lesion distribution tells you the class of agent', body: 'Cranioventral consolidation = bacterial. Caudodorsal = viral, interstitial, or atypical. Treatment for shipping fever: florfenicol, tulathromycin, ceftiofur, or enrofloxacin plus an NSAID such as flunixin. Preconditioning — vaccinate and wean 45 days before shipping, with low-stress handling — is the prevention answer.' },
      {
        type: 'table', title: 'IBR and other respiratory disease',
        columns: ['Disease', 'Key facts'],
        rows: [
          ['IBR (infectious bovine rhinotracheitis)', 'Bovine herpesvirus-1. Affects young cattle. Four manifestations, all the same virus: (1) respiratory disease with profuse purulent nasal discharge, a RED NOSE/MUZZLE, and high fever; (2) abortion in the last trimester; (3) multifocal necrotic foci in the liver and lung of the aborted fetus; (4) infectious pustular vulvovaginitis. BHV-5 is the encephalitic strain — that is how herpes 1 and herpes 5 differ in cattle.'],
          ['Verminous pneumonia (lungworm)', 'Dictyocaulus viviparus — "husk." Young, naive cattle and yearlings, typically late summer and autumn on pasture. Life cycle: ingested larvae migrate through the gut wall → lymphatics → bloodstream → lungs → break into alveoli → crawl up the airways → coughed up and swallowed → mature in the intestine → eggs passed in feces. Two signs: a loud husky COUGH and EOSINOPHILIA.'],
          ['Fog fever (acute bovine pulmonary emphysema and edema)', 'A FAT COW moved to LUSH AUTUMN PASTURE, sudden respiratory distress, AFEBRILE, SQ emphysema, lungs fail to collapse on necropsy. Sick within 2–4 weeks of the pasture move. Lush pasture is high in L-tryptophan → indole acetic acid in the rumen → 3-METHYLINDOLE by Lactobacillus → absorbed → activated by lung cytochrome P450 → toxic to type I pneumocytes and Clara (club) cells. Three signs: SQ emphysema, loud cough, open-mouth breathing. Brassicas do the same thing by the same mechanism.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'IBR vs. fog fever', body: 'IBR is FEBRILE and PURULENT. Fog fever is AFEBRILE with no discharge. If the question asks which is "more purulent," the answer is IBR.' },

      /* ---------------- Neurology ---------------- */
      { type: 'callout', variant: 'pearl', title: 'The down or blind ruminant — work this list', body: 'PEM · lead · listeriosis · TEME · rabies · nervous coccidiosis · hypomagnesemia · hypovitaminosis A. The top two differentials for CNS signs with blindness in a cow are PEM and LEAD.' },
      {
        type: 'table', title: 'Neurologic disease',
        columns: ['Disease', 'Features', 'Diagnosis & treatment'],
        rows: [
          ['Polioencephalomalacia (PEM)', 'Cortical blindness — central, so the menace is absent but the PLR is intact — head pressing, star-gazing, seizures. Bilaterally symmetric. Three causes: (1) THIAMINE deficiency from thiaminase-producing rumen flora; (2) SULFUR toxicity from high-sulfate water or distillers grains — thiamine deficiency and excess sulfur are the two most common causes in cows; (3) high-dose AMPROLIUM, a thiamine analog. In horses the plant cause is bracken fern.', 'Thiamine IV — the response is rapid and is itself diagnostic. Necropsy: fluorescence of cortex under UV light, laminar cortical necrosis.'],
          ['Lead poisoning', 'Four signs: acute BLINDNESS, dullness, down and unable to rise, unaware of surroundings. Batteries, old paint, crankcase oil. Calves are curious and most affected.', 'Calcium EDTA or succimer. Do NOT use sodium EDTA — it binds calcium. A public-health issue: milk and meat residues.'],
          ['Listeriosis ("circling disease")', 'Listeria monocytogenes from spoiled silage (pH >5.5). Ascends the trigeminal nerve to the brainstem. UNILATERAL cranial nerve deficits — dropped ear, dropped lip, drooling, dysphagia, decreased facial sensation. Circling toward the lesion.', 'CSF: MONONUCLEAR pleocytosis with elevated total protein. Treat with PROCAINE PENICILLIN, high dose and prolonged. Also causes late-term abortion. Zoonotic.'],
          ['TEME (thromboembolic meningoencephalitis)', 'Histophilus somni causing septicemia and vasculitis. FEVER and RESPIRATORY signs come FIRST, before the CNS signs — that sequence is the discriminator from listeriosis. Brainstem and cerebellar signs. Feedlot cattle.', 'CSF: NEUTROPHILIC pleocytosis with XANTHOCHROMIC fluid, indicating prior hemorrhage. Oxytetracycline or florfenicol.'],
          ['Rabies ⚑R ⚑Z', 'Abnormal BELLOWING is the classic bovine sign, plus tenesmus, drooling, ataxia, and aggression or paralysis.', 'Always on the differential. Report; extreme caution with oral exams.'],
          ['Meningitis in calves', 'E. coli — almost always secondary to failure of passive transfer and septicemia.', 'Antibiotics that cross the blood-brain barrier; plasma.'],
          ['Nervous coccidiosis', 'Central blindness lasting months, with seizures. A neurotoxin-mediated syndrome accompanying Eimeria infection.', 'Treat the coccidiosis; supportive care.'],
          ['Hydranencephaly — three viruses', 'BVD · Bluetongue · Border disease. Add Akabane and Cache Valley. In-utero infection destroys the developing cerebrum.', 'Prevention by vaccination and vector control.'],
          ['Arthrogryposis', 'The two VIRAL causes: BLUETONGUE and AKABANE. The plant cause is LUPINE (crooked calf disease) at 40–70 days of gestation.', 'Prevention.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'Listeriosis vs. TEME — the CSF answers it', body: 'LISTERIA: unilateral cranial nerve deficits, MONONUCLEAR CSF, silage history → procaine penicillin. TEME: fever and respiratory disease first, then brainstem and cerebellar signs, NEUTROPHILIC and XANTHOCHROMIC CSF, feedlot → oxytetracycline.' },
      {
        type: 'rapidfire', title: 'Rapid-fire ruminant neurology recall',
        items: [
          ['Blind cow, head pressing', 'PEM → thiamine (causes: thiaminase, sulfur, amprolium)'],
          ['Blind, dull, down, unaware of surroundings', 'Lead → calcium EDTA'],
          ['Dropped lip, circling, silage history', 'Listeria → mononuclear CSF → procaine penicillin'],
          ['Fever and pneumonia first, then brainstem signs', 'TEME → neutrophilic xanthochromic CSF'],
          ['Abnormal bellowing', 'Rabies'],
          ['Calf with meningitis', 'E. coli after failure of passive transfer'],
          ['Hydranencephaly', 'BVD, bluetongue, Border disease']
        ]
      },

      /* ---------------- Reproduction ---------------- */
      {
        type: 'table', title: 'Pregnancy diagnosis timeline',
        columns: ['Method', 'When', 'Notes'],
        rows: [
          ['Palpation of the amniotic vesicle / "membrane slip"', '30–35 days', 'The earliest reliable rectal finding. Rough handling of the vesicle at this stage is associated with ATRESIA COLI in the calf.'],
          ['Placentomes palpable', '70 days', 'Cotyledon-caruncle units.'],
          ['Fremitus', '120–150 days', 'Vibration ("thrill") of the middle uterine artery as blood flow increases.'],
          ['Gestation', '280 days / 9 months', 'Estrus 18 hours; cycle 21 days; year-round polyestrus.']
        ]
      },
      { type: 'callout', variant: 'pearl', title: '"Big cows abort late"', body: 'Brucella · Lepto · Listeria — the classic last-trimester abortifacients. Add IBR and ponderosa pine needles. If time is short, the "three Bs" of bovine abortion: Brucella, BVD, and bacterial causes including Campylobacter.' },
      {
        type: 'table', title: 'Abortion — organized by timing',
        columns: ['Cause', 'Timing', 'Distinguishing features'],
        rows: [
          ['Brucella abortus ⚑R ⚑Z', 'Last trimester', 'The classic late abortion with a RETAINED PLACENTA. ZOONOTIC (undulant fever). Screening: the MILK RING TEST on bulk tank milk. Vaccinate heifers at 4–12 months with RB51. Orange metal tags are placed in the RIGHT ear of vaccinated heifers.'],
          ['Leptospira (hardjo) ⚑Z', 'Late', 'Late abortion + WEAK CALVES + AGALACTIA. Also causes "flabby bag" mastitis — a sudden drop in milk with a soft, flaccid udder and no inflammation. Zoonotic.'],
          ['Listeria monocytogenes ⚑Z', 'Late', 'Late abortion; also the neurologic disease. Silage-associated.'],
          ['Neospora caninum', 'Any time; peak 4–7 months', 'The leading cause of bovine abortion worldwide. A protozoal parasite. The DOG is the definitive host — transmission by feed or water contaminated with dog feces, plus efficient vertical transmission in the herd.'],
          ['IBR (BHV-1)', 'Last trimester', 'Aborted fetus has multifocal white NECROTIC FOCI in the LIVER and LUNG.'],
          ['Tritrichomonas foetus', '1–8 months', 'REPEAT BREEDER / early empty cow. Bulls are ASYMPTOMATIC, LIFELONG carriers — the organism lives in preputial crypts of older bulls. STRICT CULLING IS REQUIRED; there is no effective vaccine.'],
          ['Campylobacter fetus (vibriosis)', 'Mid-gestation, 4–7 months', 'Also a repeat breeder. Highly effective vaccines are available and given annually — the key contrast with Tritrichomonas. Diagnose by PCR. Common in the western US.'],
          ['Mycotic abortion', 'Late', 'Two signs: a THICK, LEATHERY PLACENTA and round RAISED RING-LIKE PLAQUES AROUND THE EYES of the fetus. Aspergillus and zygomycetes. Brucella can also thicken the placenta but does NOT give the facial plaques — the plaques separate them.'],
          ['Ureaplasma diversum', 'Any', 'Causes granular vulvitis and abortion. A common normal inhabitant of the vagina, so interpretation requires care.'],
          ['Epizootic bovine abortion ("foothill abortion")', 'Late', 'Vector: Ornithodoros coriaceus, a SOFT tick. The fetus is aborted with LARGE lymph nodes and spleen, and a DESTROYED THYMUS. California foothills.'],
          ['Ponderosa pine needles', 'Last trimester', 'Isocupressic acid; abortion with retained placenta.']
        ]
      },
      {
        type: 'table', title: 'Postpartum & periparturient disease',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Retained fetal membranes', 'Caused by dystocia, twins, abortion, hypocalcemia, selenium/vitamin E deficiency, and induced parturition. The placenta is normally expelled within 8–12 hours in the cow; beyond 24 hours it is retained.'],
          ['Metritis', 'Three predisposing factors: DYSTOCIA, KETOSIS, HYPOCALCEMIA. Treat with systemic antibiotics and prostaglandin F2-alpha.'],
          ['Pyelonephritis', 'Corynebacterium renale. Occurs in the MULTIPAROUS cow around 2.5 months post-partum. Ascending infection; hematuria, pyuria, colic. Treat with PENICILLIN, long course.'],
          ['Vaginal vs. uterine prolapse', 'VAGINAL prolapse occurs BEFORE calving — late gestation, heritable, recurs. UTERINE prolapse occurs IMMEDIATELY AFTER calving — an emergency associated with hypocalcemia.'],
          ['Calving-related nerve damage', 'Obturator or peroneal injury after dystocia or prolonged calving. Normal calcium; classic "dog-sitting" posture. One of the four downer cow differentials along with milk fever, toxic mastitis, and hypomagnesemia.'],
          ['Persistent hymen', 'Segmental aplasia of the paramesonephric (Müllerian) ducts — same as in horses.'],
          ['Estrus after standing heat', 'An open heifer will show estrus again starting around day 18–24 from an observed standing heat, on a 21-day cycle.']
        ]
      },
      {
        type: 'table', title: 'Breeding soundness exam & production targets',
        columns: ['Element', 'Detail'],
        rows: [
          ['The two cultures / PCRs on a bull BSE', 'Tritrichomonas foetus and Campylobacter fetus — preputial scrapings. Both are venereal, both cause repeat breeding, and both live silently in the bull.'],
          ['Scrotal circumference', 'Correlates with daily sperm output — the single best predictor of a bull\'s fertility, and the reason it is measured on every BSE.'],
          ['Calving interval', '12–13 months (365–395 days).'],
          ['First service conception rate', '~50–60% in dairy cattle.'],
          ['Average days open', '85–115 days.'],
          ['Services per conception', '1.5–2.0.'],
          ['Interpretation', 'A LOW first-service conception rate together with a HIGH services-per-conception points to a problem with heat detection, insemination technique, or semen handling — not with the cows\' fertility. Poor breeding technique specifically decreases the first-service conception rate.']
        ]
      },

      /* ---------------- Mastitis ---------------- */
      {
        type: 'table', title: 'Mastitis & the udder',
        columns: ['Category', 'Detail'],
        rows: [
          ['CONTAGIOUS mastitis pathogens', 'Mycoplasma bovis and Streptococcus agalactiae — spread cow-to-cow at milking. Add Staphylococcus aureus. Control: milking hygiene, post-dipping, dry cow therapy, and culling. Mycoplasma does not respond to antibiotics — cull.'],
          ['ENVIRONMENTAL mastitis pathogens', 'Coliforms and environmental streptococci — from bedding and manure. Control by environment and bedding management.'],
          ['Severe clinical coliform mastitis', 'The three MacConkey-positive organisms: E. coli, Klebsiella, and Enterobacter. Produce endotoxic shock, a watery secretion, and a cold quarter.'],
          ['"Flabby bag" mastitis', 'LEPTOSPIROSIS — sudden agalactia with a soft, flaccid udder and no heat or pain, often with blood-tinged milk and fever.'],
          ['Teat-end hyperkeratosis', 'Most common cause: over-milking, excessive machine vacuum, and liner issues. A milking-machine management problem.'],
          ['Milker\'s nodules ⚑Z', 'Pseudocowpox, a parapoxvirus — nodules on the teats that are infectious to people, producing "milker\'s nodules" on the hands.'],
          ['Udder impetigo / ulcerative dermatitis', 'Foul-smelling ulcers on the udder of post-partum dairy cattle — necrotic dermatitis, often Fusobacterium or Trueperella. Hygiene and topical or systemic therapy.'],
          ['Contagious agalactia (small ruminants)', 'Mycoplasma agalactiae. Three signs: keratoconjunctivitis, arthritis, and mastitis. Management: CULL.']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Milk residues — the regulatory questions', body: 'SULFONAMIDES are prohibited in lactating dairy cattle, with the narrow exception of sulfadimethoxine, which is labeled. Chloramphenicol is completely banned in all food animals. Extralabel use of fluoroquinolones is prohibited in food animals and cephalosporins are restricted. Why we pasteurize milk: to kill Mycobacterium bovis, Brucella, Listeria, Salmonella, Campylobacter, E. coli O157, and Coxiella burnetii.' },

      /* ---------------- Musculoskeletal ---------------- */
      {
        type: 'table', title: 'Musculoskeletal, foot & lameness',
        columns: ['Condition', 'Agent', 'Features & treatment'],
        rows: [
          ['Foot rot (interdigital phlegmon)', 'Fusobacterium necrophorum', 'Symmetric interdigital swelling with a foul-smelling necrotic fissure; sudden severe lameness and fever. Responds well to systemic antibiotics. Same organism as calf diphtheria and liver abscesses.'],
          ['Interdigital dermatitis', 'Fusobacterium necrophorum', 'Superficial inflammation of the interdigital skin; a precursor to heel horn erosion.'],
          ['Digital dermatitis ("hairy heel warts", Mortellaro)', 'Treponema — a spirochete', 'A painful, red, strawberry-like erosion at the SKIN-HORN JUNCTION of the HEEL, usually on the plantar aspect of the hind foot, often with hair-like keratin projections. Interdigital dermatitis is between the claws — that is the discriminator. Control: footbaths (copper sulfate or formalin) and topical tetracycline.'],
          ['Calf diphtheria', 'Fusobacterium necrophorum', 'Calves under 3 months. GRAY-TO-YELLOW DIPHTHERITIC MEMBRANES in the mouth and pharynx, foul breath, fever, dysphagia. Treat with PENICILLIN. Can extend to the larynx and obstruct.'],
          ['Lumpy jaw', 'Actinomyces bovis — gram POSITIVE', 'BONE. A hard, immovable swelling of the MANDIBLE or maxilla with draining tracts containing "sulfur granules." Osteomyelitis — poor response to treatment. Iodides ± antibiotics.'],
          ['Wooden tongue', 'Actinobacillus lignieresii', 'SOFT TISSUE. A hard, painful, protruding TONGUE with difficulty prehending. Responds well to sodium iodide IV.'],
          ['Gastrocnemius rupture', '—', '"HOCK DOWN but HIPS OK" — the hock drops to the ground while the animal can still bear weight cranially. Usually associated with calving or slipping.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'Lumpy jaw vs. wooden tongue', body: 'Lumpy jaw = ActinoMYCES = bone ("MY jaw BONE") → poor prognosis. Wooden tongue = ActinoBACILLUS = soft tissue → responds to sodium iodide. Both are gram-positive-appearing filamentous organisms with sulfur granules; the tissue involved is the discriminator.' },

      /* ---------------- Dermatology ---------------- */
      {
        type: 'table', title: 'Dermatology',
        columns: ['Condition', 'Agent', 'Features & treatment'],
        rows: [
          ['Ringworm ⚑Z', 'Trichophyton verrucosum', 'The most common dermatophyte of cattle. Thick gray-white crusts, classically around the EYES and FACE in CALVES. Seen in WINTER when cattle are housed. NOT itchy. Self-limiting over 1–4 months, so treatment is often unnecessary. Highly zoonotic to handlers.'],
          ['Rain rot / dermatophilosis ⚑Z', 'Dermatophilus congolensis — a gram-positive facultative anaerobe', 'Crusted "paintbrush" lesions after prolonged wetting. Cytology: "RAILROAD TRACKS" — parallel rows of cocci. ZINC DEFICIENCY is a contributing factor. Keep dry.'],
          ['Lumpy skin disease ⚑R', 'Capripoxvirus', 'Firm skin nodules; a foreign animal disease.'],
          ['Pediculosis (lice)', 'Sucking: Haematopinus. Biting/chewing: Bovicola bovis', 'Pruritus with hair loss and dirty debris in the coat. A winter problem. Pour-on macrocyclic lactones or pyrethroids.'],
          ['Hypoderma (cattle grubs / warbles)', 'Hypoderma bovis, H. lineatum', 'Treat with POUR-ON MOXIDECTIN. Critical timing rule: do NOT treat while larvae are migrating through the esophagus or spinal canal — killing them there causes bloat or paralysis. Treat after the fall heel-fly season and before migration.'],
          ['Sarcoptic mange ⚑Z', 'Sarcoptes scabiei', 'Treat with POUR-ON DORAMECTIN; dairy cows with moxidectin pour-on. A burrowing mite — needs systemic therapy.'],
          ['Psoroptes and Chorioptes', 'Surface mites', 'Both live ON the skin, so topical sprays and dusts work. Psoroptes is common in cattle, sheep, and rabbits and is reportable in sheep. Chorioptes causes leg mange in cattle and horses — long legs, short pedicles.'],
          ['Stephanofilariasis', 'Stephanofilaria', 'Plaque-like dermatitis along the VENTRAL MIDLINE. Transmitted by the HORN FLY (Haematobia irritans).'],
          ['Photosensitization', '—', 'Primary: the plant itself is photodynamic — St. John\'s wort, Hypericum, Erodium, brassicas, and tetracyclines. Secondary (hepatogenous): liver damage prevents clearance of PHYLLOERYTHRIN, the chlorophyll breakdown product, which accumulates in skin and reacts with UV light. Affects white and unpigmented areas.']
        ]
      },

      /* ---------------- Vector-borne & reportable ---------------- */
      {
        type: 'table', title: 'Vector-borne disease', wide: true,
        columns: ['Disease', 'Agent', 'Vector', 'Features & treatment'],
        rows: [
          ['Anaplasmosis', 'Anaplasma marginale', 'Dermacentor', 'Found INSIDE the RBC, at the margin. Causes EXTRAVASCULAR hemolysis — which is why you see ICTERUS and PALE mucous membranes but NO hemoglobinuria and NO red urine. Also Howell-Jolly bodies from the regenerative response. Treat with OXYTETRACYCLINE.'],
          ['Babesiosis ("tick fever", "Texas fever", "redwater")', 'Babesia bovis and B. bigemina', 'Rhipicephalus (Boophilus)', 'PEAR-SHAPED organisms inside RBCs. Causes INTRAvascular hemolysis → severe anemia, HEMOGLOBINURIA, fever, and jaundice. The stem: "redwater hemoglobinuria in Texas cows near Mexico." Eradicated from the US by tick control; imidocarb where permitted.'],
          ['Theileriosis', 'Theileria orientalis', 'Asian longhorned tick — Haemaphysalis longicornis', 'Severe hemolytic anemia, fever, jaundice, and reduced milk yield. An emerging US problem with the spread of the longhorned tick.'],
          ['Heartwater ⚑R', 'Ehrlichia ruminantium', 'Amblyomma (ornate, long mouthparts)', 'FATAL ENCEPHALITIS in sheep, goats, and cattle. Necropsy: PERICARDIAL EFFUSION — the "hydropericardium" that gives the disease its name. A foreign animal disease.'],
          ['Epizootic bovine abortion ("foothill abortion")', 'A deltaproteobacterium', 'Ornithodoros coriaceus — a SOFT tick', 'Late-term abortion; fetus has enlarged lymph nodes and spleen with a DESTROYED THYMUS.'],
          ['Otobius megnini (spinose ear tick)', '—', 'A SOFT tick', 'Predilection site: the EARS. Causes otitis and irritation.'],
          ['Trypanosomiasis ("Nagana")', 'Trypanosoma congolense', 'TSETSE FLY (Glossina) — cyclical biological transmission', 'Three signs: intermittent FEVER, severe ANEMIA, WEIGHT LOSS.'],
          ['Bluetongue ⚑R', 'Orbivirus', 'CULICOIDES — the biting midge', 'In SHEEP, most severe: oral lesions and erosions, vasculitis, edema of the muzzle, tongue, and CORONARY BANDS, and arthrogryposis with hydranencephaly in utero. Cattle are usually subclinical reservoirs.'],
          ['Bovine leukosis', 'BLV — a retrovirus', 'Biting flies, needles, rectal sleeves, colostrum', 'Persistent lymphocytosis; lymphosarcoma in a minority. Also a cause of cardiomyopathy.'],
          ['Louping ill', 'FLAVIVIRUS', 'Ixodes', 'Ovine encephalomyelitis. Two signs: fine muscle tremors and "nervous nibbling." UK and Ireland.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'The red-urine differentials', body: 'ANAPLASMA — EXTRAvascular hemolysis → icterus and pallor, but NO red urine. BABESIA — INTRAvascular → RED URINE. Bacillary hemoglobinuria (C. haemolyticum) — red urine plus a liver infarct, following Fasciola migration. LEPTOSPIROSIS — hemoglobinuria plus abortion and agalactia. ANTHRAX — sudden death with unclotted blood and no rigor mortis.' },
      {
        type: 'table', title: 'Systemic & reportable disease',
        columns: ['Disease', 'Agent', 'Features, diagnosis & action'],
        rows: [
          ['Anthrax ⚑R ⚑Z', 'Bacillus anthracis', 'Sudden death. Necropsy findings: LACK OF RIGOR MORTIS and UNCLOTTED blood oozing from orifices. DIAGNOSIS: obtain VITREOUS HUMOR or a BLOOD SMEAR FROM AN EAR SCRAPE — do NOT open the carcass, because exposing the vegetative organism to oxygen creates environmentally persistent spores. Three forms in humans: intestinal, pulmonary, cutaneous.'],
          ['Bovine tuberculosis ⚑R ⚑Z', 'Mycobacterium bovis', 'Chronic weight loss, cough, enlarged lymph nodes, CASEOUS CALCIFIED GRANULOMAS, and "PEARL DISEASE" on the pleura. Screening: the CAUDAL FOLD TEST — intradermal bovine tuberculin in the caudal tail fold, read at 72 hours. To differentiate M. bovis from M. avium: the COMPARATIVE CERVICAL TEST. Definitive: culture, which takes weeks. Test-and-slaughter, no treatment.'],
          ['Brucellosis ⚑R ⚑Z', 'Brucella abortus', 'Late-term abortion with retained placenta. Milk ring test for herd screening; RB51 vaccination at 4–12 months; orange metal tag in the RIGHT ear. Zoonotic (undulant fever) — a classic occupational infection of veterinarians via vaccine needle-stick.'],
          ['Malignant catarrhal fever ⚑R', 'Ovine herpesvirus-2 (sheep-associated) or alcelaphine herpesvirus-1 (wildebeest)', 'Six signs: high fever, bilateral corneal opacity and uveitis, profuse oculonasal discharge, erosive stomatitis, generalized lymphadenopathy, and diarrhea. The classic history is cattle housed near SHEEP. Essentially always fatal.'],
          ['Foot and mouth disease ⚑R', 'Aphthovirus', 'Vesicles on the tongue, muzzle, teats, and coronary bands in cloven-hoofed animals. Horses are NOT affected — that is the key discriminator from vesicular stomatitis.'],
          ['Vesicular stomatitis ⚑R ⚑Z', 'Vesiculovirus', 'Affects PIGS, HORSES, and SHEEP as well as cattle. The vesicular disease that DOES affect horses — which is how you distinguish it from FMD in the field. Zoonotic.'],
          ['Rinderpest ⚑R', 'Morbillivirus', 'The "four Ds": DEPRESSION, DISCHARGES, DIARRHEA, DEATH. Severe fever, erosive mouth lesions, profuse diarrhea, extreme dehydration. Globally eradicated in 2011 but still examinable. Differentiate from Rift Valley fever, a mosquito-borne bunyavirus causing abortion storms and hepatic necrosis that is zoonotic.'],
          ['BSE ⚑R ⚑Z', 'Prion', '"Mad cow disease." Progressive neurologic disease in adult cattle. Feed bans; ruminant-to-ruminant protein prohibition.'],
          ['Peste des petits ruminants ⚑R', 'MORBILLIVIRUS — related to rinderpest and canine distemper', 'Four signs: fever, oral and nasal lesions, oculonasal discharge, and stomatitis with conjunctivitis. Report it; diagnose by PCR.']
        ]
      },

      /* ---------------- Parasitology ---------------- */
      {
        type: 'table', title: 'Gastrointestinal nematodes',
        columns: ['Parasite', 'Location', 'Disease'],
        rows: [
          ['Haemonchus contortus ("barber pole worm")', 'ABOMASUM', 'A blood-sucking strongyle. Localized bleeding → severe ANEMIA and SUBMANDIBULAR EDEMA ("bottle jaw") from hypoproteinemia — with NORMAL fecal consistency. That last detail is the classic trap: haemonchosis does NOT cause diarrhea. Primarily sheep and goats. Monitor with FAMACHA scoring of conjunctival color.'],
          ['Ostertagia ostertagi ("brown stomach worm")', 'ABOMASUM', 'Causes abomasal pH to RISE above 6 by destroying parietal glands, giving diarrhea, weight loss, and hypoproteinemia. Necropsy: "COBBLESTONE" or "MOROCCAN LEATHER" abomasal mucosa. Type I is disease from a current adult infection during the grazing season; type II is disease from the synchronous emergence of ARRESTED (hypobiotic) larvae in late winter and spring, in older animals, and is much harder to treat.'],
          ['Trichostrongylus', 'Abomasum / small intestine', 'The third of the "three stomach worms of cattle" with Haemonchus and Ostertagia.'],
          ['Oesophagostomum', 'Large intestine / colon', '"Nodular worm" — forms nodules in the intestinal wall.'],
          ['Nematodirus', 'Small intestine', 'Diarrhea, weight loss, failure to thrive — especially in young lambs and crias. Diagnose by direct smear and fecal flotation.'],
          ['Dictyocaulus viviparus', 'Lungs (bronchi)', 'Verminous pneumonia / "husk" in yearlings. Identify with the BAERMANN technique — you are looking for larvae, not eggs. Treat with ivermectin.'],
          ['Muellerius capillaris', 'Small bronchioles (sheep and goats)', 'Verminous pneumonia with small firm gray-green NODULES on the lung surface. Dictyocaulus filaria is the MOST PATHOGENIC lungworm of small ruminants; Muellerius is the most common but less pathogenic.'],
          ['Setaria cervi', 'Peritoneal cavity', 'Usually an incidental finding at slaughter; aberrant migration can cause neurologic disease.'],
          ['Thelazia gulosa', 'EYE', 'Eyeworm — conjunctivitis and keratitis; face fly transmitted.']
        ]
      },
      {
        type: 'table', title: 'Trematodes, cestodes & protozoa',
        columns: ['Parasite', 'Detail'],
        rows: [
          ['Fasciola hepatica (liver fluke)', 'A TREMATODE. Intermediate host: LYMNAEID SNAILS. Acute: migratory tract hemorrhage and hepatitis. Chronic, with adults in the bile ducts: weight loss, ANEMIA, hypoproteinemia, SUBMANDIBULAR EDEMA, and poor production. Two classic sequelae: "BLACK DISEASE" — infectious necrotic hepatitis from Clostridium novyi type B — and BACILLARY HEMOGLOBINURIA from C. haemolyticum. Fluke migration creates the anaerobic niche in which clostridial spores germinate.'],
          ['Eurytrema (pancreatic fluke)', 'Parasitizes the pancreatic and biliary ducts. Light infections are asymptomatic; heavy burdens cause bovine eurytrematosis.'],
          ['Paramphistomum (rumen fluke)', 'Adults in the rumen are largely harmless; immature flukes migrating through the duodenum cause severe enteritis in heavy infections.'],
          ['Moniezia', 'The tapeworm of ruminants. Largely non-pathogenic but alarming to owners when proglottids appear. Treat with fenbendazole. Oribatid mite intermediate host.'],
          ['Echinococcus granulosus ⚑Z', 'A cestode whose definitive host is the DOG. Sheep and other ruminants are intermediate hosts and develop HYDATID CYSTS in the LIVER and LUNGS. Fatal hydatid disease in humans. Do not feed raw offal to farm dogs.'],
          ['Eimeria', '4 sporocysts. Infects ruminants, horses, rabbits, and poultry — NOT dogs and cats. Treat with amprolium plus sulfonamides. In sheep and goats: monensin as a coccidiostat in feed, amprolium in water for the sick.'],
          ['Cryptosporidium ⚑Z', 'Acid-fast or IFA staining required; resistant to disinfectants and chlorination. Calves 1–3 weeks; chronic emaciation with tenesmus. Zoonotic — a genuine risk to students and farm children.'],
          ['Toxoplasma gondii', 'Major abortifacient in sheep and goats; does NOT cause abortion in COWS. Cat is the definitive host. Placental lesions: bright dark red cotyledons with white foci of necrosis.'],
          ['Parelaphostrongylus tenuis ("meningeal worm")', 'Definitive host: the WHITE-TAILED DEER. Aberrant migration in sheep, goats, and camelids causes ataxia, paraparesis, torticollis, and head tilt. CSF: EOSINOPHILIC pleocytosis with elevated protein — the diagnostic hallmark.'],
          ['Oestrus ovis', 'Nasal bot of sheep — larvae in the nasal passages and sinuses cause sneezing and nasal discharge ("false gid").']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire ruminant parasitology recall',
        items: [
          ['Bottle jaw + anemia + normal manure', 'Haemonchus (abomasum) → FAMACHA'],
          ['Cobblestone abomasum + diarrhea + pH above 6', 'Ostertagia; type II = arrested larvae emerging'],
          ['Bottle jaw + snail + liver', 'Fasciola → sequelae black disease and bacillary hemoglobinuria'],
          ['Husky cough in a yearling', 'Dictyocaulus → Baermann → ivermectin'],
          ['Gray-green lung nodules in a sheep', 'Muellerius'],
          ['Ataxic goat or alpaca with eosinophilic CSF', 'Meningeal worm — white-tailed deer host'],
          ['Abortion in sheep but not cows', 'Toxoplasma'],
          ['Repeat breeder with a carrier bull', 'Tritrichomonas → cull']
        ]
      },

      /* ---------------- Production & misc ---------------- */
      {
        type: 'table', title: 'Production medicine & miscellany',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Most common urolith on an all-grain diet', 'STRUVITE (magnesium ammonium phosphate) — from high phosphorus and alkaline urine. The classic feedlot steer or wether.'],
          ['Most common urolith in the western US', 'SILICATE — from silica-rich range grasses.'],
          ['Limiting amino acids in high milk production', 'LYSINE and METHIONINE — the standard rumen-protected supplements.'],
          ['Measure of nitrogen metabolism', 'MUN — milk urea nitrogen — reflects the protein-to-energy balance of the ration.'],
          ['Poikilocytosis', 'NORMAL in GOATS and young cattle — do not over-interpret it.'],
          ['Gram stain colors', 'Gram POSITIVE = PURPLE. Gram NEGATIVE = PINK.']
        ]
      },
      {
        type: 'cloze', title: 'Numbers to memorize',
        items: [
          { q:'Cow gestation is ___ days.', a:'280', accept:['280 days','9 months'], why:'Estrus 18 hours; cycle 21 days; year-round polyestrus.' },
          { q:'The bovine estrous cycle is ___ days.', a:'21', why:'Estrus itself lasts only 18 hours — the shortest of the domestic species.' },
          { q:'Rectal palpation slip is detectable from ___ days of pregnancy.', a:'30-35', accept:['30–35','30 to 35'], why:'Placentomes at 70 days; fremitus at 120–150 days.' },
          { q:'BVDV infection between ___ days of gestation creates a persistently infected calf.', a:'80-150', accept:['80–150','80 to 150'], why:'Before the fetal immune system matures, so the virus is recognized as self.' },
          { q:'Lupine eaten on days ___ of gestation causes crooked calf disease.', a:'40-70', accept:['40–70','40 to 70'], why:'Anagyrine — arthrogryposis and cleft palate.' },
          { q:'Target calving interval is ___ months.', a:'12-13', accept:['12–13','12 to 13','365-395 days'], why:'Days open 85–115; services per conception 1.5–2.0.' },
          { q:'Target first-service conception rate in dairy cattle is about ___%.', a:'50-60', accept:['50–60','50 to 60'], why:'A low rate with high services-per-conception points to heat detection, insemination technique, or semen handling — not cow fertility.' },
          { q:'Normal rumen pH is about ___.', a:'6', why:'It falls to 5 in grain overload.' },
          { q:'The caudal fold tuberculin test is read at ___ hours.', a:'72', why:'The comparative cervical test then differentiates M. bovis from M. avium.' },
          { q:'Brucella RB51 is given at ___ months of age.', a:'4-12', accept:['4–12','4 to 12'], why:'Orange tag in the right ear.' },
          { q:'A PAP score above ___ mmHg marks a bull as susceptible to brisket disease.', a:'46', why:'Under 41 mmHg is good. High-altitude disease screening.' },
          { q:'Calf scours under 4 days old is most likely ___.', a:'E. coli', accept:['e coli','escherichia coli','enterotoxigenic e. coli','etec'], why:'Rota 5 d–4 wk · corona 4–30 d · C. perfringens ~2 wk · crypto 1–3 wk · salmonella and coccidia >21 d.' },
          { q:'A ruminant has ___ permanent teeth.', a:'32', why:'No upper incisors — a dental pad instead.' }
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
