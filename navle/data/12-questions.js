/* NAVLE Hub — Vignette question bank
 *
 * Hand-written case vignettes for the practice bank. The ICVA blueprint puts
 * ~70% of the exam in Data Gathering & Interpretation and Health Maintenance &
 * Problem Management — i.e. case vignettes, not bare recall. These stems
 * reassemble the signalment, history, and findings already present in the
 * chapter tables into that format.
 *
 *   m      module id — used for the source label and to link back to the chapter
 *   stem   the clinical vignette
 *   lead   the question being asked
 *   a      the correct answer
 *   wrong  three hand-picked plausible distractors (the real look-alikes)
 *   why    why the answer is right, and how to rule out the nearest mimic
 */
(function (Q) {

  /* ============================ DOGS & CATS ============================ */

  Q.push({
    m:'id-smallanimal',
    stem:'A 10-week-old unvaccinated Rottweiler puppy is presented for 2 days of vomiting and foul-smelling hemorrhagic diarrhea. He is lethargic and febrile on presentation, but by the time bloodwork returns he is hypothermic. CBC shows neutropenia and lymphopenia.',
    lead:'What is the most likely diagnosis?',
    a:'Canine parvovirus (CPV-2)',
    wrong:['Canine coronavirus enteritis','Enteric-phase canine distemper','Hemorrhagic gastroenteritis from dietary indiscretion'],
    why:'Neutropenia plus hemorrhagic diarrhea and vomiting in an unvaccinated puppy is parvo until proven otherwise — the virus targets crypt cells and bone marrow simultaneously. Coronavirus causes milder disease without panleukopenia; distemper would bring oculonasal discharge and respiratory signs. Progression from fever to hypothermia signals sepsis through the neutropenic gut.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'The same puppy tests negative on a fecal antigen ELISA. He was given a modified-live vaccine 6 days ago at the shelter, and clinical signs began yesterday.',
    lead:'How should you interpret the negative test?',
    a:'A negative result does not rule out parvovirus — the ELISA can be falsely negative very early in disease',
    wrong:['The negative result rules out parvovirus; pursue another cause','The recent vaccine caused a false negative by consuming test antigen','The test is invalid within 14 days of any vaccine and should not be run'],
    why:'The fecal antigen ELISA can be falsely negative very early in disease, before appreciable viral shedding, and falsely POSITIVE for roughly 5–12 days after a modified-live vaccine. Treat on the clinical picture and CBC; recheck if needed.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'A 3-year-old Labrador that swims in a flooded pasture is presented for fever, reluctance to move, and PU/PD that has progressed to producing very little urine. Chemistry shows azotemia, elevated ALP, hypokalemia, and hyponatremia. Urinalysis shows glucosuria with a normal blood glucose.',
    lead:'What is the most likely diagnosis?',
    a:'Leptospirosis',
    wrong:['Acute kidney injury from ethylene glycol toxicosis','Lyme nephritis','Primary hypoadrenocorticism'],
    why:'Acute kidney injury plus elevated liver enzymes in a young outdoor dog with water or rodent-urine exposure is the classic leptospirosis combination, and glucosuria without hyperglycemia reflects proximal tubular injury. Handle with gloves — it is zoonotic. Lyme nephritis is protein-losing rather than a hepatorenal picture.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'You have diagnosed leptospirosis in a hospitalized dog with acute kidney injury. He is vomiting and cannot reliably keep oral medication down.',
    lead:'What is the correct antimicrobial plan?',
    a:'IV ampicillin or penicillin now, then doxycycline for 2 weeks to clear the renal carrier state',
    wrong:['Doxycycline alone for 2 weeks, given IV','Enrofloxacin for 4 weeks','IV ampicillin alone until azotemia resolves'],
    why:'Penicillins clear the acute leptospiremia and are tolerated in a vomiting azotemic patient, but they do not eliminate renal carriage. Doxycycline is required to stop urinary shedding — without it the dog remains a zoonotic risk to the household.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'A bright, afebrile 1-year-old dog returned from boarding 4 days ago and has a loud honking cough that ends in a retch. Gentle tracheal palpation reproduces it immediately. He is eating normally and thoracic auscultation is unremarkable.',
    lead:'What is the most appropriate management?',
    a:'Supportive care and a cough suppressant; expect resolution in 1–2 weeks',
    wrong:['Doxycycline for 10 days plus a cough suppressant','Thoracic radiographs and IV fluids','Nebulized gentamicin and enforced cage rest'],
    why:'A bright dog with a dramatic cough is the buzzword for uncomplicated CIRDC, which is self-limiting. Reserve doxycycline for dogs that are febrile, anorexic, or producing purulent discharge; image only if those appear. Use a harness rather than a collar while the trachea is irritable.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'A 6-year-old Golden Retriever in Connecticut has a 2-week history of shifting leg lameness, fever, and regional lymphadenopathy. A SNAP 4Dx is C6-positive. The owner reports the dog receives a Lyme vaccine annually.',
    lead:'What does the positive C6 result tell you?',
    a:'True infection — the C6 peptide distinguishes natural infection from vaccination',
    wrong:['Vaccine cross-reaction; the result cannot be interpreted','Prior exposure only, since C6 stays positive for life regardless of infection','Active infection only if paired titers rise fourfold'],
    why:'C6 antibody is directed at a peptide expressed during natural infection but not by the vaccine, so vaccination does not cause a positive. Confirm with quantitative C6 and screen a urine protein:creatinine ratio — Labs and Goldens are the breeds at risk for Lyme nephritis, which is grave.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'A 5-month-old unvaccinated kitten is presented for fever, vomiting, and diarrhea. On palpation the intestinal loops feel thickened. CBC shows a profound panleukopenia. Her littermate, born to the same queen, is bright and alert but has a wide-based stance and intention tremors that have not worsened since he began walking.',
    lead:'What explains the littermate\'s neurologic signs?',
    a:'Cerebellar hypoplasia from in utero panleukopenia virus infection',
    wrong:['Early feline infectious peritonitis with cerebellar involvement','Thiamine deficiency','Feline spongiform encephalopathy'],
    why:'A kitten with ataxia but a bright, normal mentation and non-progressive signs is cerebellar hypoplasia — the parvovirus destroys the developing cerebellum in utero or in the neonate. It is why killed vaccine is used in pregnant queens and kittens under 4 weeks; modified-live can cause the same lesion.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'A 2-year-old outdoor cat from a multi-cat household has a mediastinal mass and a non-regenerative anemia. A SNAP test is positive for p27 antigen.',
    lead:'What is the appropriate next step?',
    a:'Retest in 30 days and confirm with IFA or provirus PCR',
    wrong:['Repeat the SNAP on saliva to confirm','Begin the FeLV vaccine series immediately','Report the result as definitive and euthanize'],
    why:'A single antigen-positive result may reflect transient or regressive infection, so retest at 30 days and confirm with IFA — which detects the bone-marrow stage — or provirus PCR. Test blood, not tears or saliva. Mediastinal lymphoma in a young cat is the classic FeLV presentation.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'An 18-month-old purebred cat from a shelter has a 3-week fever unresponsive to antibiotics and a distended abdomen. Abdominocentesis yields straw-colored, viscous fluid: protein 5.2 g/dL, low cellularity, Rivalta positive. Serum shows hyperglobulinemia with an A:G ratio of 0.3 and hyperbilirubinemia without anemia.',
    lead:'What is the most likely diagnosis?',
    a:'Feline infectious peritonitis, effusive (wet) form',
    wrong:['Lymphocytic cholangitis','Cardiogenic pleural and abdominal effusion','Septic peritonitis'],
    why:'Young cat plus fever plus high-protein low-cellularity effusion plus a low A:G ratio is the FIP pattern; the lesion is pyogranulomatous vasculitis. Bilirubin elevated without hemolysis fits. FCoV serology does not diagnose FIP — definitive confirmation is immunostaining of FCoV antigen within macrophages.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'A cat with sneezing and conjunctivitis has a fluorescein-positive branching, dendritic corneal ulcer. The referring clinic dispensed a topical corticosteroid-antibiotic combination.',
    lead:'What is the most important immediate action?',
    a:'Stop the topical corticosteroid and treat with an antiviral such as topical or oral famciclovir',
    wrong:['Continue the combination product and add oral L-lysine','Continue the steroid but add topical atropine for comfort','Debride the ulcer and place a grid keratotomy'],
    why:'A dendritic ulcer is pathognomonic for feline herpesvirus-1, and topical corticosteroids on a fluorescein-positive eye can drive corneal melting and perforation. Oral or lingual ulcers instead of corneal ones point to calicivirus. L-lysine is of doubtful benefit.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'A shelter is disinfecting a ward after an outbreak of feline calicivirus that caused ulcerative dermatitis and several deaths. Staff have been using a quaternary ammonium product.',
    lead:'Why is the disinfection protocol inadequate?',
    a:'Calicivirus is non-enveloped and resists quaternary ammonium; bleach or accelerated hydrogen peroxide is required',
    wrong:['Quaternary ammonium requires a 30-minute contact time that was not met','The product is inactivated by the ward\'s hard water','Calicivirus is only killed by steam and ultraviolet light'],
    why:'Envelope status drives disinfectant choice. Non-enveloped viruses — calicivirus, parvovirus, panleukopenia — survive quats and need bleach or accelerated hydrogen peroxide. Enveloped viruses such as distemper, herpes, and EHV-1 are labile and fall to routine disinfectants.'
  });

  Q.push({
    m:'id-smallanimal',
    stem:'A 4-year-old intact male cat that roams outdoors is presented for chronic gingivostomatitis, chronic rhinitis, and gradual weight loss. An in-house ELISA is positive.',
    lead:'What does that ELISA detect, and what should you tell the owner about housing?',
    a:'It detects antibody to FIV; the cat can often live with non-aggressive housemates because transmission requires bite wounds',
    wrong:['It detects FIV antigen; the cat must be permanently isolated','It detects antibody; all in-contact cats will inevitably seroconvert','It detects provirus; the cat should be euthanized to protect the household'],
    why:'FIV tests are antibody-based, which is why previously vaccinated cats and kittens under 6 months with maternal antibody can test positive — confirm with Western blot or PCR. Transmission is inefficient by casual contact since it requires deep bite wounds, and FIV is not zoonotic. Neuter and keep indoors.'
  });

  /* ==================== CANINE & FELINE CLUSTERS ==================== */

  Q.push({
    m:'clusters-sa',
    stem:'A 7-year-old spayed female dog has a 3-week history of PU/PD. Serum calcium is elevated. On physical examination you find generalized peripheral lymphadenopathy.',
    lead:'What is the most likely cause of the hypercalcemia?',
    a:'Lymphoma',
    wrong:['Primary hyperparathyroidism','Cholecalciferol rodenticide toxicosis','Chronic kidney disease'],
    why:'Lymphoma is the most common malignant cause of hypercalcemia in dogs, and both of the two most common causes overall are found on physical exam — palpate the peripheral nodes and the anal sacs before spending money on imaging. Anal sac apocrine gland adenocarcinoma is the other.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A hypercalcemic dog also has an elevated serum phosphorus. The owner recently treated a rodent problem in the garage and uses a prescription psoriasis cream.',
    lead:'What is the most likely cause?',
    a:'Vitamin D (cholecalciferol) toxicosis',
    wrong:['Primary hyperparathyroidism','Anal sac apocrine gland adenocarcinoma','Granulomatous fungal disease'],
    why:'Calcium AND phosphorus both elevated points to vitamin D toxicosis or renal failure. Primary hyperparathyroidism classically shows a low-normal phosphorus, because PTH promotes phosphate excretion. Cholecalciferol sources include rodenticide, psoriasis creams, and some houseplants; prognosis is poor and treatment prolonged.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A 9-year-old dog is anemic and icteric. Total protein is low. There is no autoagglutination and no spherocytes on the smear.',
    lead:'What does the low total protein suggest?',
    a:'Blood loss anemia — whole blood, including plasma protein, is being lost',
    wrong:['Immune-mediated hemolytic anemia','Heinz body hemolysis from onion ingestion','Anemia of chronic inflammatory disease'],
    why:'Total protein is the fastest way to split the two. Blood loss removes red cells and plasma proteins together, dropping TP; hemolysis destroys only red cells, so TP stays normal or high. Check the PCV first in any icteric patient — anemia points you prehepatic before you chase a liver workup.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A 6-year-old dog is icteric. Liver enzymes show a disproportionate elevation in ALP and GGT relative to ALT. Cholesterol is elevated and the owner reports pale, putty-colored feces.',
    lead:'Where does the icterus localize?',
    a:'Post-hepatic — biliary obstruction',
    wrong:['Prehepatic — hemolysis','Hepatic — primary hepatocellular disease','Prehepatic with secondary hepatic injury'],
    why:'Cholestatic enzymes (ALP, GGT) rising out of proportion to hepatocellular ones, plus hypercholesterolemia and acholic feces, is the obstructive pattern. Hepatic disease elevates ALT/AST and may drop albumin, BUN, and cholesterol through synthetic failure — the opposite cholesterol direction.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A 5-year-old dog in Oklahoma has a fever, severe thrombocytopenia, and on recheck weeks later a pancytopenia. There is no joint effusion and no history of travel to the Northeast.',
    lead:'Which tick-borne disease is most likely?',
    a:'Ehrlichiosis',
    wrong:['Lyme disease','Anaplasmosis','Rocky Mountain spotted fever'],
    why:'Thrombocytopenia is common to all four, so differentiate by geography, vector, and organ involvement. Ehrlichia canis is brown dog tick-transmitted, more common in the South and Southwest, and chronic disease produces pancytopenia. Lyme gives shifting-leg polyarthritis and nephritis; RMSF gives vasculitis with petechiae and CNS signs.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A dog in North Carolina develops acute fever, petechiae, marked limb edema, and neurologic signs within 3 days of onset. It is peracute and deteriorating rapidly.',
    lead:'What is the most likely diagnosis?',
    a:'Rocky Mountain spotted fever',
    wrong:['Ehrlichiosis','Immune-mediated thrombocytopenia','Lyme disease'],
    why:'RMSF is a vasculitis — petechiae, edema, and CNS signs — transmitted by Dermacentor, and it can be peracute and fatal, which distinguishes it from the more indolent Ehrlichia and Anaplasma infections. Doxycycline should not wait for confirmatory serology.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A 4-year-old neutered male cat is straining in the litter box. He is not obstructed. Urinalysis shows alkaline urine with crystalluria, and radiographs show two small cystoliths.',
    lead:'Which stone type is this most likely to be, and what does that mean for management?',
    a:'Struvite — potentially dissolvable with a therapeutic urinary diet',
    wrong:['Calcium oxalate — dissolvable with urinary acidification','Calcium oxalate — requires surgical or voiding removal','Urate — dissolvable with allopurinol and a purine-restricted diet'],
    why:'Alkaline urine favors struvite, and struvite is the stone you can dissolve medically. Calcium oxalate forms in acidic urine, is more common in older cats, and cannot be dissolved — it must be removed. This distinction is tested directly as a "what is your next step" question.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A 3-year-old indoor cat has had three episodes of stranguria and periuria over 8 months. Each resolved in a few days. Full workup — urinalysis, culture, imaging — has been unremarkable each time. A new baby arrived in the household before the first episode.',
    lead:'What is the most likely diagnosis and the cornerstone of management?',
    a:'Feline idiopathic cystitis — environmental enrichment and stress reduction',
    wrong:['Recurrent bacterial cystitis — long-course antibiotics','Struvite urolithiasis — therapeutic dissolution diet','Urethral plug formation — prophylactic perineal urethrostomy'],
    why:'FIC is the most common cause of feline lower urinary tract signs and a diagnosis of exclusion; it is stress-associated and self-limiting in episodes. Multimodal environmental modification is the evidence-based intervention. Bacterial cystitis is uncommon in young cats with negative cultures.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'An 8-year-old dog has PU/PD. Urine specific gravity is 1.010 and BUN and creatinine are elevated.',
    lead:'What does isosthenuria in the face of azotemia indicate?',
    a:'Chronic kidney disease — the kidneys have lost concentrating ability',
    wrong:['Central diabetes insipidus','Psychogenic polydipsia','Diabetes mellitus'],
    why:'Isosthenuria with concurrent azotemia is the CKD signature — a dehydrated animal with functional kidneys should be concentrating. Stage with creatinine, SDMA, and a urine protein:creatinine ratio. Diabetes insipidus produces extremely dilute urine but without azotemia; psychogenic polydipsia concentrates normally on water deprivation.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A 6-year-old dog has PU/PD and an unremarkable database except for hyperkalemia and hyponatremia. He has had intermittent vomiting and a waxing-waning course over months.',
    lead:'What test confirms the diagnosis?',
    a:'ACTH stimulation test',
    wrong:['Low-dose dexamethasone suppression test','Water deprivation test','Pre- and post-prandial bile acids'],
    why:'Hyperkalemia with hyponatremia in a waxing-waning patient is hypoadrenocorticism, and the ACTH stimulation test is diagnostic. LDDS is for the opposite problem, hyperadrenocorticism. Addison\'s also belongs on the hypercalcemia differential list.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A 6-year-old intact female dog is presented for PU/PD and lethargy 5 weeks after her last estrus. She has a mild vaginal discharge. CBC shows a marked neutrophilia.',
    lead:'What is the most likely diagnosis?',
    a:'Pyometra',
    wrong:['Hyperadrenocorticism','Diabetes mellitus','Chronic kidney disease'],
    why:'Intact female, recent estrus, PU/PD, and a neutrophilia is pyometra; confirm on abdominal ultrasound. The PU/PD comes from an acquired nephrogenic diabetes insipidus caused by bacterial endotoxin. This is a surgical emergency, not a medical workup.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A young dog is presented for anemia. The smear shows Heinz bodies. The owner has been feeding table scraps including onion and garlic-heavy leftovers.',
    lead:'How would you classify this anemia?',
    a:'Regenerative, hemolytic — oxidative injury causing Heinz body hemolysis',
    wrong:['Regenerative, blood loss','Non-regenerative, bone marrow disease','Non-regenerative, anemia of chronic disease'],
    why:'Heinz bodies mark oxidative damage to hemoglobin — onion, garlic, zinc, and acetaminophen are the classic causes. Total protein should be normal or high because only red cells are being destroyed. Contrast with spherocytes and autoagglutination, which point to IMHA.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A young dog has drunk excessively for months. All bloodwork is normal, including calcium, glucose, and renal values. Urine is dilute but the dog is bright and thriving.',
    lead:'How do you distinguish psychogenic polydipsia from diabetes insipidus, and what must come first?',
    a:'A water deprivation test — but only after every other cause has been excluded',
    wrong:['A water deprivation test performed immediately, as it is the cheapest first test','A desmopressin trial without prior workup','Measurement of endogenous ADH as the initial screening test'],
    why:'In psychogenic polydipsia the urine concentrates appropriately on water deprivation; in true diabetes insipidus it does not. The test is risky in a dehydrated or azotemic patient, so it is the last step, not the first — rule out hypercalcemia, renal disease, Cushing\'s, pyometra, and hepatic disease first.'
  });

  Q.push({
    m:'clusters-sa',
    stem:'A litter of 8-week-old puppies from a rescue has watery diarrhea. One has a distended, potbellied abdomen; another has pale mucous membranes. All are eating and none are febrile or vomiting.',
    lead:'What is the most appropriate next diagnostic step?',
    a:'Fecal examination for parasites',
    wrong:['Parvovirus fecal antigen ELISA and hospitalization','Empirical metronidazole without diagnostics','Distemper PCR on a conjunctival swab'],
    why:'A potbelly suggests roundworms and pallor suggests hookworm blood loss — both confirmed on a fecal. The absence of fever, vomiting, and systemic illness argues strongly against parvo, and these puppies are systemically well. Coccidia and Giardia round out the fecal differentials.'
  });

  /* ============================== EQUINE ============================== */

  Q.push({
    m:'equine',
    stem:'A 2-year-old Thoroughbred that arrived at a training barn 10 days ago has a fever of 104°F, thick mucopurulent nasal discharge, and swollen submandibular lymph nodes that are now soft and draining. He stands with his head and neck extended and is reluctant to swallow.',
    lead:'What is the most likely diagnosis?',
    a:'Strangles (Streptococcus equi subsp. equi)',
    wrong:['Equine influenza','Equine herpesvirus-4 respiratory disease','Guttural pouch mycosis'],
    why:'Young horse, new arrival, high fever, abscessing lymphadenopathy, and an extended head and neck from dysphagia is the strangles picture. Viral respiratory disease produces serous discharge without abscessation. Isolate for 3 weeks and screen the herd by daily temperatures — fever is the earliest outbreak sign.'
  });

  Q.push({
    m:'equine',
    stem:'Three weeks after recovering from strangles, a horse develops well-demarcated limb edema, petechiae on the mucous membranes, and fever.',
    lead:'What is the diagnosis and treatment?',
    a:'Purpura hemorrhagica — an immune-complex vasculitis treated with corticosteroids',
    wrong:['Bastard strangles — treated with prolonged penicillin','Equine infectious anemia — treated with quarantine','Guttural pouch empyema — treated with lavage'],
    why:'Purpura hemorrhagica is an immune-complex vasculitis following S. equi antigen exposure, and it responds to corticosteroids rather than more antibiotics. "Bastard strangles" refers instead to metastatic abscessation in distant organs. Chondroids in the guttural pouch are the carrier problem and must be cleared.'
  });

  Q.push({
    m:'equine',
    stem:'A boarding stable reports that three horses have become ataxic over 5 days, worse in the hindlimbs. One is dribbling urine and has a flaccid bladder and reduced tail tone. Several horses had fevers the week before.',
    lead:'What is the most likely diagnosis and your first action?',
    a:'EHV-1 myeloencephalopathy — institute strict isolation and report it',
    wrong:['Equine protozoal myeloencephalitis — begin antiprotozoal therapy','Cervical stenotic myelopathy — radiograph the necks','West Nile virus — begin supportive care and vaccinate the herd'],
    why:'An outbreak setting, preceding fever, and ataxia with bladder atony and perineal hypalgesia is EHM. EPM is characteristically asymmetric and sporadic, not an outbreak. EHM is reportable in most states — isolate, take temperatures twice daily, and confirm by PCR on nasal swab and buffy coat.'
  });

  Q.push({
    m:'equine',
    stem:'A 12-year-old Quarter Horse has recurrent fevers, progressive weight loss, ventral edema, and a mild icterus. CBC shows thrombocytopenia. He was purchased privately 8 months ago without paperwork.',
    lead:'What is the most likely diagnosis, and what is the required response?',
    a:'Equine infectious anemia — federally reportable; the horse faces lifelong quarantine or euthanasia',
    wrong:['Piroplasmosis — treat with imidocarb and retest','Chronic Salmonella carriage — culture and isolate','Anaplasma phagocytophilum — treat with oxytetracycline'],
    why:'Ventral edema plus recurrent fever plus thrombocytopenia is the EIA buzzword combination, and "swamp fever" has no treatment and no vaccine. Coggins (AGID) is the gold standard; cELISA is faster and more sensitive but positives must be confirmed by AGID. Positive horses need lifelong quarantine at least 200 yards from other equids.'
  });

  Q.push({
    m:'equine',
    stem:'A broodmare farm in Kentucky has had four late-gestation abortions in 3 weeks. The mares showed no premonitory signs. Necropsy of one fetus shows hepatic necrosis with intranuclear inclusion bodies.',
    lead:'What is the most likely cause, and how should the farm prevent recurrence?',
    a:'EHV-1 — vaccinate broodmares at 5, 7, and 9 months of gestation',
    wrong:['Nocardioform placentitis — treat mares with trimethoprim-sulfa','Leptospirosis — vaccinate against L. pomona','Equine viral arteritis — test and isolate carrier stallions'],
    why:'Abortion storms with no warning signs, plus fetal hepatic necrosis and inclusion bodies, is EHV-1. The virus stays latent in trigeminal ganglia and lymphoid tissue and recrudesces with stress. Vaccinate at 5, 7, and 9 months gestation and isolate aborting mares — the placenta and fetus are heavily infectious.'
  });

  Q.push({
    m:'equine',
    stem:'A 15-year-old gelding has had watery diarrhea for 5 days. He has been on phenylbutazone for 3 weeks for chronic lameness. Total protein is low and abdominal ultrasound shows a thickened right dorsal colon.',
    lead:'What is the most likely cause?',
    a:'NSAID toxicity — right dorsal colitis',
    wrong:['Salmonellosis','Potomac horse fever','Sand enteropathy'],
    why:'Always ask about recent NSAID or antibiotic use in an adult horse with colitis — iatrogenic causes are common and easy to overlook. Hypoproteinemia with a thickened right dorsal colon on ultrasound in a horse on phenylbutazone is right dorsal colitis. Stop the NSAID.'
  });

  Q.push({
    m:'equine',
    stem:'A horse in Maryland develops fever, diarrhea, and laminitis in late August. The farm is adjacent to a creek and there have been mayfly and caddisfly hatches.',
    lead:'What is the most likely cause?',
    a:'Potomac horse fever (Neorickettsia risticii)',
    wrong:['Salmonellosis','Antibiotic-associated colitis','Sand enteropathy'],
    why:'Seasonal summer-to-fall occurrence near water with aquatic insect exposure is the Potomac horse fever setting; confirm by PCR for Neorickettsia risticii. Laminitis is a common and serious sequela. Salmonella is possible but usually presents with severe systemic illness and needs multiple fecal cultures because shedding is intermittent.'
  });

  Q.push({
    m:'equine',
    stem:'An 18-month-old Warmblood colt has developed symmetric ataxia over several months, worse in the pelvic limbs than the thoracic limbs. He is otherwise bright and afebrile, and there is no outbreak on the farm.',
    lead:'What is the most likely diagnosis?',
    a:'Cervical stenotic myelopathy ("wobblers")',
    wrong:['EPM','EHV-1 myeloencephalopathy','Rabies'],
    why:'Young, growing, large-breed horse with symmetric ataxia worse behind is cervical stenotic myelopathy — diagnose with cervical radiographs and myelography. EPM is typically asymmetric. Rabies stays on any rapidly progressive equine neurologic differential, but this is a months-long course.'
  });

  /* ============================== BOVINE ============================== */

  Q.push({
    m:'bovine',
    stem:'A group of calves arrived at a feedlot 10 days ago after weaning and a long haul. Several are depressed with drooped ears and rectal temperatures over 104°F. Auscultation reveals cranioventral crackles. One that died shows fibrinous bronchopneumonia with cranioventral consolidation.',
    lead:'What is the most likely primary bacterial agent?',
    a:'Mannheimia haemolytica',
    wrong:['Bovine respiratory syncytial virus','Mycoplasma bovis','Histophilus somni'],
    why:'Cranioventral consolidation with fibrinous bronchopneumonia in a recently shipped calf is the classic Mannheimia picture, typically following a viral or stress insult. Cranioventral distribution means bacterial; caudodorsal means viral, interstitial, or atypical. Preconditioning — vaccinate and wean 45 days before shipping — is the prevention answer.'
  });

  Q.push({
    m:'bovine',
    stem:'You are selecting an antimicrobial for a feedlot calf with bovine respiratory disease. A colleague suggests using enrofloxacin at a higher dose and longer duration than the label directs, since the calf is severely affected.',
    lead:'Why is that plan not acceptable?',
    a:'Extralabel fluoroquinolone use in cattle is prohibited by federal regulation',
    wrong:['Fluoroquinolones have no activity against Mannheimia haemolytica','Extralabel use is permitted only if a withdrawal time is doubled','Fluoroquinolones are permitted extralabel only in dairy cattle'],
    why:'Extralabel use of fluoroquinolones in cattle is prohibited outright — this is not a withdrawal-time question, it is a legality question, and AMDUCA does not create an exception. Label use of approved products only. Florfenicol, tulathromycin, and ceftiofur are alternatives; add an NSAID such as flunixin.'
  });

  Q.push({
    m:'bovine',
    stem:'A 14-month-old heifer that has always been small and poor-doing develops profuse diarrhea, erosions along the oral mucosa, and erosions at the coronary bands. She does not respond to treatment and dies within 2 weeks.',
    lead:'What is the most likely diagnosis?',
    a:'Mucosal disease — a persistently infected animal superinfected with a cytopathic BVDV strain',
    wrong:['Malignant catarrhal fever','Bluetongue','Bovine papular stomatitis'],
    why:'A chronically poor-doing young animal that develops erosive oral and coronary band lesions with 100% fatality is mucosal disease. It occurs only in PI calves — infected between 40 and 125 days of gestation — that become superinfected with a cytopathic strain. Identifying and culling PI animals by ear-notch antigen ELISA is the control cornerstone.'
  });

  Q.push({
    m:'bovine',
    stem:'You are called to examine that heifer\'s erosive oral lesions on the farm.',
    lead:'What must you do before treating?',
    a:'Report the vesicular oral lesions to the State Veterinarian for laboratory differentiation',
    wrong:['Begin supportive therapy and recheck in 48 hours','Collect serum for BVDV serology and wait for results before reporting','Cull the animal immediately and disinfect the pen'],
    why:'Foot-and-mouth disease and vesicular stomatitis cannot be distinguished from other erosive diseases on clinical signs alone, so any vesicular or erosive oral lesion in livestock requires immediate reporting for laboratory differentiation. Report on suspicion — do not wait for confirmatory testing. The correct "next step" answer is regulatory, not clinical.'
  });

  Q.push({
    m:'bovine',
    stem:'A 5-year-old dairy cow has had progressive watery diarrhea for 2 months. She continues to eat well and has never been febrile. She has lost substantial body condition and has soft swelling under the jaw.',
    lead:'What is the most likely diagnosis?',
    a:'Johne\'s disease (Mycobacterium avium subsp. paratuberculosis)',
    wrong:['Salmonellosis','Ostertagiasis','Winter dysentery'],
    why:'Chronic "pipe-stream" diarrhea with a NORMAL appetite and NO fever, plus bottle jaw from protein loss, is Johne\'s. Fecal PCR is most sensitive; serum ELISA is for herd screening and is poor early. It is an iceberg disease — one clinical case means many subclinical ones. There is no effective treatment; cull positives and their offspring.'
  });

  Q.push({
    m:'bovine',
    stem:'A high-producing dairy cow calved 18 hours ago and is now recumbent, cool to the touch, with a flaccid demeanor and no obvious mastitis. She responds to intravenous calcium borogluconate within 20 minutes and stands.',
    lead:'What was the diagnosis?',
    a:'Hypocalcemia (milk fever)',
    wrong:['Obturator nerve paralysis from dystocia','Toxic coliform mastitis','Hypomagnesemia (grass tetany)'],
    why:'Response to IV calcium is the fastest way to separate milk fever from the other downer cow causes. If a recently calved cow does not respond, look instead for calving-related nerve damage — which classically produces a dog-sitting posture with normal calcium — or toxic mastitis with an abnormal udder and shock.'
  });

  Q.push({
    m:'bovine',
    stem:'Several lactating cows turned out onto lush spring pasture become hyperesthetic and develop muscle fasciculations and tetany before going down.',
    lead:'What is the most likely diagnosis?',
    a:'Hypomagnesemia (grass tetany)',
    wrong:['Hypocalcemia (milk fever)','Polioencephalomalacia','Nitrate toxicity'],
    why:'Lush rapidly growing pasture is low in available magnesium, and hyperesthesia and tetany PRECEDING recumbency distinguishes grass tetany from milk fever, where cows go quietly flaccid and recumbent. Both are transition and lactation metabolic emergencies but the neurologic excitation phase is the discriminator.'
  });

  /* =============================== SWINE =============================== */

  Q.push({
    m:'swine',
    stem:'A 1,200-sow farrow-to-finish herd has a sudden rise in late-term abortions, stillborns, mummies, and weak-born pigs. Sows are off feed and several have transient blue discoloration of the ears. In the nursery, pigs are growing poorly with interstitial pneumonia.',
    lead:'What is the most likely diagnosis?',
    a:'PRRS (porcine reproductive and respiratory syndrome)',
    wrong:['Porcine parvovirus (SMEDI)','Classical swine fever','Leptospirosis'],
    why:'Reproductive failure in sows plus respiratory disease and poor growth downstream, with transient ear cyanosis, is PRRS — the most economically costly US swine disease. Diagnose by PCR on serum, oral fluids, or processing fluids. Sequence ORF5, because vaccine protection is strain-dependent.'
  });

  Q.push({
    m:'swine',
    stem:'A grow-finish pig is found dead. Two pen-mates are febrile and depressed with raised, firm, diamond-shaped skin lesions over the flanks. The herd manager mentions that a worker has developed a painful, spreading red lesion on his hand.',
    lead:'What is the most likely diagnosis?',
    a:'Swine erysipelas (Erysipelothrix rhusiopathiae)',
    wrong:['Classical swine fever','Actinobacillus pleuropneumoniae septicemia','Salmonella choleraesuis septicemia'],
    why:'Rhomboid "diamond-skin" lesions are near-pathognomonic, and a dramatic response to penicillin supports the diagnosis. It is zoonotic — "erysipeloid" or fish-handler\'s disease — via skin puncture in handlers, butchers, and fishermen. Chronic disease gives proliferative arthritis and vegetative mitral valve endocarditis.'
  });

  Q.push({
    m:'swine',
    stem:'A 2-day-old litter has profuse, watery, yellow-white non-bloody diarrhea. Several piglets are dehydrated. Necropsy shows fluid-distended intestine with minimal gross mucosal damage.',
    lead:'What is the most likely agent?',
    a:'Enterotoxigenic E. coli',
    wrong:['Clostridium perfringens type C','Rotavirus','Cystoisospora suis'],
    why:'Birth to 4 days with profuse watery non-bloody diarrhea and a secretory picture — fluid-filled gut, minimal structural damage — is ETEC. C. perfringens type C in the same age window is bloody and necrotizing. Rotavirus appears at 1–3 weeks with villous atrophy; coccidia at 7–21 days.'
  });

  Q.push({
    m:'swine',
    stem:'Piglets aged 10 days in a well-managed, meticulously sanitized farrowing house develop yellow, pasty diarrhea. Sanitation has been reviewed repeatedly and disinfection protocols are correct.',
    lead:'What is the most likely agent?',
    a:'Cystoisospora suis',
    wrong:['Enterotoxigenic E. coli','Rotavirus','Porcine epidemic diarrhea virus'],
    why:'Coccidiosis occurs despite good sanitation because oocysts resist ordinary disinfectants — that resistance is the tested point, and the 7–21 day window fits. ETEC is a first-week disease; PEDV would bring prominent vomiting and much higher mortality.'
  });

  Q.push({
    m:'swine',
    stem:'Profuse watery diarrhea with prominent vomiting sweeps through every age group on a naive farm within days. Mortality in piglets under 1 week approaches 100%; adults recover in about a week. Necropsy shows severe villous atrophy.',
    lead:'What is the most likely agent, and what distinguishes it from the bacterial causes?',
    a:'A coronavirus (PEDV, TGE, or PDCoV) — the vomiting plus watery diarrhea combination',
    wrong:['Enterotoxigenic E. coli — the profuse watery character','Salmonella typhimurium — the all-age spread','Rotavirus — the villous atrophy'],
    why:'Vomiting PLUS profuse watery diarrhea distinguishes the coronaviruses from bacterial causes and rotavirus. In a naive herd it sweeps all ages at once; in an endemic herd colostral immunity confines it to litters from non-immune sows. Differentiate PEDV, TGE, and PDCoV by PCR.'
  });

  Q.push({
    m:'swine',
    stem:'Two weeks after weaning, the largest and fastest-growing pigs in a pen develop swollen eyelids, an odd squeal, ataxia, and several die suddenly. The poorer-doing pigs are unaffected. There is no diarrhea.',
    lead:'What is the most likely diagnosis?',
    a:'Edema disease — Shiga toxin (Stx2e)-producing F18 E. coli',
    wrong:['Streptococcus suis meningitis','Salt poisoning / water deprivation','Pseudorabies'],
    why:'F18 fimbriae attach only post-weaning, and Stx2e causes vascular damage rather than secretory diarrhea — hence subcutaneous edema, ataxia, and sudden death without diarrhea. It hits the best-doing pigs hardest because they eat the most toxin-producing bacteria.'
  });

  Q.push({
    m:'swine',
    stem:'A finishing barn has sudden high mortality. Affected pigs have very high fevers, cyanotic blotching of the skin, and are recumbent. Necropsy shows a markedly enlarged, friable, dark spleen. The farm received a feed ingredient shipment of foreign origin last month.',
    lead:'What is your immediate action?',
    a:'Contact the State Animal Health Official / USDA APHIS immediately — suspect African swine fever',
    wrong:['Start injectable ceftiofur and submit tissues to the state lab routinely','Vaccinate the remaining pigs and depopulate the affected pen','Submit samples for PRRS sequencing before reporting'],
    why:'High fever, cyanotic skin, splenomegaly, and high mortality in swine must raise African swine fever, and the correct answer is regulatory rather than clinical — report on suspicion, do not wait for laboratory confirmation. Keep ASF, classical swine fever, FMD, and pseudorabies on the list for any sudden high-mortality swine event.'
  });

  Q.push({
    m:'swine',
    stem:'A herd has a history of post-weaning diarrhea and, separately, neonatal diarrhea in first-litter gilts. Laboratory typing identifies F4 (K88) fimbriae in both age groups.',
    lead:'Why can the same fimbrial type cause disease in both age groups?',
    a:'F4 is the only fimbrial type whose intestinal receptor persists as the pig ages',
    wrong:['F4 is the only type that produces Shiga toxin','F4 strains are the only ones transmitted in colostrum','F4 receptors are induced by weaning stress in all pigs'],
    why:'F5 (K99), F6 (987P), and F41 receptors disappear with age, so those strains cause neonatal disease only. F18 receptors develop later, so F18 causes post-weaning disease only. F4 spans both windows because its receptor persists — that receptor biology is the tested concept.'
  });

  /* ========================= SHEEP & GOATS ========================= */

  Q.push({
    m:'smallrum',
    stem:'A 4-year-old dairy goat has firm, non-painful swellings at the prescapular and submandibular lymph nodes. One has ruptured, draining thick, pasty, greenish-white odorless material.',
    lead:'What is the most likely diagnosis and the best herd-level management?',
    a:'Caseous lymphadenitis — cull or isolate, since drainage into the environment perpetuates the herd problem',
    wrong:['Caseous lymphadenitis — a 4-week course of penicillin resolves the herd problem','Foot abscess complex — trim and treat topically','Actinobacillosis — treat with sodium iodide'],
    why:'"Toothpaste" pus at superficial nodes is Corynebacterium pseudotuberculosis. Antibiotics penetrate the capsule poorly, and the organism persists in soil and bedding for months, so culling wins. Handle and shear young clean animals first. It is rarely zoonotic but wear gloves.'
  });

  Q.push({
    m:'smallrum',
    stem:'An adult dairy goat has grossly enlarged, firm carpi and has been progressively losing condition. Her udder is hard and she produces almost no milk. Two kids on the farm developed ascending paresis at 3 months of age.',
    lead:'What is the most likely diagnosis?',
    a:'Caprine arthritis-encephalitis (CAE)',
    wrong:['Mycoplasma mycoides polyarthritis','Caseous lymphadenitis, internal form','Chlamydial polyarthritis'],
    why:'Adult goat with big knees plus a hard, agalactic udder is the CAE buzzword, and the encephalomyelitis form in 2–6 month kids completes the picture. Transmission is mainly through colostrum and milk. Control is test-and-cull plus removing kids at birth and feeding heat-treated colostrum (56°C for 60 minutes) or pasteurized milk.'
  });

  Q.push({
    m:'smallrum',
    stem:'Lambs in a flock develop proliferative, crusty scabs at the commissures of the lips and on the muzzle and are reluctant to nurse. Several ewes have developed teat lesions and are rejecting their lambs. A farmhand has a painful nodule on his finger.',
    lead:'What is the most likely diagnosis?',
    a:'Contagious ecthyma (orf / soremouth)',
    wrong:['Bluetongue','Foot-and-mouth disease','Sheep pox'],
    why:'Proliferative scabbing at the lip commissures with teat lesions in the dam, plus a painful nodule on a human handler, is orf — a zoonotic parapoxvirus. It is self-limiting in 1–4 weeks; support nursing and treat secondary infection. The live scab vaccine is used only in already-infected flocks, because it introduces the virus.'
  });

  Q.push({
    m:'smallrum',
    stem:'A sheep flock has an abortion storm in late gestation. The owner\'s pregnant daughter helps with lambing.',
    lead:'What is the most important immediate advice?',
    a:'Keep the pregnant woman away from lambing — Chlamydia abortus and Coxiella burnetii are dangerous in human pregnancy',
    wrong:['No precautions are needed if she wears gloves','Only Toxoplasma poses a risk, and only from cat feces','Risk exists only if the flock is confirmed positive first'],
    why:'The small ruminant abortion trio — Chlamydia abortus (EAE), Campylobacter, and Toxoplasma — all carry zoonotic risk, and C. abortus and Q fever are specifically dangerous to pregnant women. Give the advice before the diagnosis is confirmed; the exposure happens at lambing.'
  });

  /* ============================ PET BIRDS ============================ */

  Q.push({
    m:'petbirds',
    stem:'A 3-year-old cockatiel purchased 2 weeks ago from a pet store is lethargic with ruffled feathers, a mild conjunctivitis, and bright lime-green urates in the droppings. The bird\'s owner has been unwell with fever, headache, and an atypical pneumonia.',
    lead:'What is the most likely diagnosis and your obligation?',
    a:'Avian chlamydiosis (Chlamydia psittaci) — zoonotic and reportable in most states',
    wrong:['Proventricular dilatation disease — supportive care only','Avian polyomavirus — no reporting required','Hepatic lipidosis from an all-seed diet'],
    why:'Lime-green urates and biliverdinuria in a recently acquired psittacine, with atypical pneumonia in the owner, is psittacosis. Diagnose by PCR of a combined choanal and cloacal swab. Doxycycline for 45 days, treat all exposed birds, and wear an N95 and gloves when cleaning.'
  });

  Q.push({
    m:'petbirds',
    stem:'Several unfeathered budgerigar nestlings at a breeding facility die suddenly. Survivors have abdominal distention and delayed crop emptying, and subcutaneous hemorrhages are visible. On necropsy the liver is enlarged and hemorrhagic.',
    lead:'What is the most likely diagnosis?',
    a:'Avian polyomavirus (budgerigar fledgling disease)',
    wrong:['Psittacine beak and feather disease','Pacheco\'s disease','Candidiasis of the crop'],
    why:'Polyoma = Peracute, Circovirus = Chronic. Peracute nestling death from a breeding facility, with subcutaneous hemorrhage, crop stasis, and a hemorrhagic hepatomegaly, is polyomavirus; the hallmark is a large basophilic INTRANUCLEAR inclusion. PBFD instead causes months of progressive symmetric feather loss.'
  });

  Q.push({
    m:'petbirds',
    stem:'A 2-year-old African grey has had progressive, symmetric loss of feathers over 6 months with abnormal regrowth, and its beak has become misshapen. It has had repeated bacterial and fungal infections.',
    lead:'What is the most likely diagnosis?',
    a:'Psittacine beak and feather disease (circovirus)',
    wrong:['Avian polyomavirus','Feather-destructive behavior','Hypovitaminosis A'],
    why:'Chronic symmetric feather loss with abnormal regrowth plus beak lesions and immunosuppression in a young psittacine is PBFD; diagnose by PCR. Feather dust is highly environmentally stable, so fomite spread and quarantine matter. There is no treatment. Feather-destructive behavior spares the head, which the bird cannot reach.'
  });

  Q.push({
    m:'petbirds',
    stem:'A blue and gold macaw regurgitates frequently, is losing weight despite a good appetite, and passes whole undigested seeds. Over weeks it becomes ataxic. Radiographs show a markedly dilated proventriculus.',
    lead:'What is the most likely diagnosis?',
    a:'Proventricular dilatation disease (avian bornavirus)',
    wrong:['Heavy metal toxicosis','Candidiasis of the crop and proventriculus','Lead-induced peripheral neuropathy'],
    why:'PDD is a ganglioneuritis affecting both the GI tract and the CNS, which is why weight loss despite eating, undigested seed, and neurologic signs occur together. Radiographic proventricular dilatation supports it. Treatment is supportive only.'
  });

  Q.push({
    m:'petbirds',
    stem:'An 8-year-old Amazon parrot fed an all-sunflower-seed diet has chronic sinusitis, a persistently swollen periorbital area, and white plaques around the face and in the oral cavity. The choanal papillae are blunted.',
    lead:'What is the most likely diagnosis?',
    a:'Hypovitaminosis A',
    wrong:['Candidiasis','Trichomoniasis','Wet-form fowl pox'],
    why:'Vitamin A deficiency causes squamous metaplasia of epithelium, producing sinusitis, "big eye," and white oral plaques, and the blunted choanal papillae plus an all-seed diet history seal it. It is the great mimic of candidiasis and trichomoniasis plaques — always ask about diet before treating for an infectious cause.'
  });

  Q.push({
    m:'petbirds',
    stem:'A 6-year-old African grey has a voice change, open-mouthed breathing, and a pronounced tail bob. It has been housed in a poorly ventilated basement on damp, mouldy substrate. A second bird from the same room presented last month with seizures.',
    lead:'What agent explains both birds?',
    a:'Aspergillus fumigatus',
    wrong:['Chlamydia psittaci','Mycoplasma gallisepticum','Candida albicans'],
    why:'Pneumonia and encephalitis in one bird — or across birds in the same environment — is the Aspergillus giveaway; it produces both air sacculitis and encephalopathy. Itraconazole is the treatment, but avoid it in African greys, which are unusually sensitive; nebulized terbinafine or F10 is adjunctive.'
  });

  Q.push({
    m:'petbirds',
    stem:'A hand-reared 5-week-old cockatoo chick that finished a course of antibiotics has thick, white, raised pseudomembranous plaques lining the crop and esophagus.',
    lead:'What is the most likely agent and the treatment?',
    a:'Candida albicans — oral nystatin',
    wrong:['Trichomonas gallinae — metronidazole','Chlamydia psittaci — doxycycline','Hypovitaminosis A — vitamin A supplementation'],
    why:'Candidiasis is common in hand-fed babies and after antibiotic use, and nystatin works because it is not absorbed and acts topically along the alimentary tract. In flocks, copper sulfate in the drinking water is the answer instead. Correct the underlying husbandry or antibiotic overuse.'
  });

  Q.push({
    m:'petbirds',
    stem:'A budgerigar has honeycombed, proliferative crusting on the cere, beak, and face.',
    lead:'What is the most likely agent and treatment?',
    a:'Knemidocoptes pilae — ivermectin',
    wrong:['Knemidocoptes mutans — ivermectin','Dermatophytosis — miconazole','Hypovitaminosis A — dietary correction'],
    why:'K. pilae causes scaly face and beak in budgies and passerines; K. mutans causes scaly leg in poultry. Confirm on a skin scrape and treat with ivermectin — but remember ivermectin is fatal in chelonians, so the safe-species list matters.'
  });

  /* ============================= POULTRY ============================= */

  Q.push({
    m:'poultry',
    stem:'A 12-week-old pullet in a backyard flock is paralyzed with one leg stretched forward and the other back. One iris is gray and irregular. On necropsy the sciatic nerve is asymmetrically enlarged and there are lymphoid tumors in the liver and gonads.',
    lead:'What is the most likely diagnosis?',
    a:'Marek\'s disease',
    wrong:['Lymphoid leukosis','Riboflavin deficiency','Avian viral arthritis'],
    why:'Under 16 weeks, asymmetric paralysis with the pathognomonic one-leg-forward posture, a gray iris, and enlarged nerves is Marek\'s. Lymphoid leukosis occurs after 16 weeks, targets the bursa of Fabricius, and does NOT enlarge nerves. Marek\'s spreads horizontally in feather dander; vaccinate at hatch.'
  });

  Q.push({
    m:'poultry',
    stem:'A 10-day-old broiler chick cannot walk. Both feet are curled inward symmetrically and it walks on its hocks. There are no ocular lesions and no tumors. On necropsy the sciatic and brachial nerves are enlarged and demyelinated.',
    lead:'What is the most likely diagnosis?',
    a:'Riboflavin (vitamin B2) deficiency',
    wrong:['Marek\'s disease','Avian encephalomyelitis','Avian viral arthritis'],
    why:'This is the Marek\'s look-alike: enlarged nerves but SYMMETRIC curled toes, at 1–2 weeks of age, with no eye lesions and no tumors. It is fully reversible with immediate riboflavin supplementation if caught early — which makes recognizing it worth real points.'
  });

  Q.push({
    m:'poultry',
    stem:'A 20-week-old hen in a commercial layer flock is found dead. Necropsy shows a massively enlarged bursa of Fabricius replaced by tumor, plus hepatosplenomegaly. The nerves are not enlarged. Histopath shows uniform large lymphoblasts.',
    lead:'What is the most likely diagnosis and how is it transmitted?',
    a:'Lymphoid leukosis — transmitted vertically through the egg',
    wrong:['Marek\'s disease — transmitted horizontally in feather dander','Infectious bursal disease — transmitted by fomites','Reticuloendotheliosis — transmitted by contaminated vaccine'],
    why:'Over 16 weeks, bursal lymphoma with no nerve enlargement is lymphoid leukosis, an avian leukosis virus retrovirus transmitted vertically through the egg — which is why eradication programs rather than vaccination are the control. Marek\'s is the opposite on every axis: younger, nerves, dander, vaccinate at hatch.'
  });

  Q.push({
    m:'poultry',
    stem:'A commercial layer flock has a sudden drop in egg production. The eggs that are laid are misshapen with wrinkled, thin shells. There are mild respiratory signs. Morbidity is high but almost no birds die.',
    lead:'What is the most likely diagnosis?',
    a:'Infectious bronchitis (coronavirus)',
    wrong:['Newcastle disease','Avian metapneumovirus','Egg drop syndrome from Salmonella enteritidis'],
    why:'Wrinkled, misshapen eggs with high morbidity and low mortality is the infectious bronchitis signature. Some strains are nephropathogenic and can lead to visceral gout. Antibiotics are only for secondary bacterial infection; control is by vaccination.'
  });

  Q.push({
    m:'poultry',
    stem:'Birds in a backyard flock are gasping for air and there is blood-stained mucus around several beaks and in the trachea on necropsy. Histopath of the tracheal epithelium shows intranuclear inclusion bodies.',
    lead:'What is the most likely diagnosis and your obligation?',
    a:'Infectious laryngotracheitis — a reportable disease',
    wrong:['Highly pathogenic avian influenza — a reportable disease','Newcastle disease — a reportable disease','Infectious bronchitis — not reportable'],
    why:'Bloody beaks plus gasping is the ILT buzzword pair, and intranuclear inclusions in tracheal epithelium confirm it. It is reportable. HPAI would show cyanosis, head and wattle edema, ecchymoses, neurologic signs, and sudden very high mortality instead.'
  });

  Q.push({
    m:'poultry',
    stem:'A commercial turkey flock has sudden very high mortality. Affected birds have cyanotic, edematous heads and wattles, subcutaneous ecchymoses, torticollis and opisthotonos, and green diarrhea.',
    lead:'What is your immediate action?',
    a:'Report immediately to state and federal authorities — suspect highly pathogenic avian influenza',
    wrong:['Start tetracycline in the water and submit samples routinely','Vaccinate the remaining flock and quarantine for 21 days','Submit for Newcastle disease testing before notifying anyone'],
    why:'Sudden high mortality with cyanosis, head and wattle edema, hemorrhages, and neurologic signs demands immediate reporting; diagnose by RT-PCR of choanal cleft and tracheal swabs, and expect depopulation. HPAI is also zoonotic — protect the workers.'
  });

  Q.push({
    m:'poultry',
    stem:'A backyard flock of turkeys and chickens is housed together. Several turkeys are listless with sulfur-yellow droppings. Necropsy shows cecal cores and circular, target-like lesions on the liver.',
    lead:'What is the diagnosis, and what is the key control measure?',
    a:'Histomoniasis (blackhead) — control the cecal worm Heterakis and stop co-housing turkeys with chickens',
    wrong:['Coccidiosis — add amprolium to the water','Fowl typhoid — test and slaughter under NPIP','Necrotic enteritis — add bacitracin to the feed'],
    why:'Bull\'s-eye liver lesions with sulfur-yellow droppings is blackhead. Histomonas is carried inside Heterakis gallinarum eggs, which are in turn carried by earthworms — so controlling the cecal worm controls the disease. Chickens are relatively resistant carriers; turkeys are severely affected.'
  });

  Q.push({
    m:'poultry',
    stem:'Three-week-old turkey poults have watery eyes, foamy ocular discharge, sneezing, and a distinctive clicking sound with each breath. On necropsy the trachea collapses easily and the cilia are destroyed.',
    lead:'What is the most likely agent?',
    a:'Bordetella avium',
    wrong:['Mycoplasma gallisepticum','Avian metapneumovirus','Newcastle disease virus'],
    why:'Clicking breathing with tracheal collapse in a 1–6 week old poult is the Bordetella avium buzzword; the organism destroys tracheal cilia. Culture from a tracheal swab. Vaccinate poults at 1–2 weeks with live attenuated vaccine in the drinking water; antibiotics address secondary infections only.'
  });

  Q.push({
    m:'poultry',
    stem:'Chickens in a flock develop marked swelling below the eye, sneezing, nasal discharge, and a notably foul odor. Sulfonamides improve the signs, but the problem recurs when new birds are introduced.',
    lead:'What is the diagnosis and the correct long-term control?',
    a:'Infectious coryza (Avibacterium paragallinarum) — all-in / all-out management',
    wrong:['Infectious coryza — extend the sulfonamide course to 6 weeks','Mycoplasma gallisepticum — tylosin in the water indefinitely','Fowl cholera — depopulate and control rodents'],
    why:'Infraorbital sinus swelling with a foul odor is infectious coryza. Antibiotics reduce clinical signs but carriers persist, which is why continuous introduction of new birds perpetuates the problem — all-in / all-out is the control answer.'
  });

  Q.push({
    m:'poultry',
    stem:'A young pheasant in a game bird operation is found dead in good body condition. The spleen is massively enlarged and mottled with a marbled appearance.',
    lead:'What is the most likely agent, and what related disease does it cause in turkeys?',
    a:'Fowl adenovirus group II — hemorrhagic enteritis in turkeys',
    wrong:['Avian reovirus — viral arthritis in turkeys','Fowl adenovirus group I — inclusion body hepatitis in chickens','Avian polyomavirus — hepatitis in waterfowl'],
    why:'Marble spleen disease in pheasants and hemorrhagic enteritis in turkeys are the same siadenovirus presenting in two hosts. Diagnose on gross pathology plus intranuclear inclusion bodies. A live vaccine is available.'
  });

  Q.push({
    m:'poultry',
    stem:'A 6-week-old broiler in a fast-growing flock at high altitude is found with a distended abdomen and cyanosis. On necropsy the abdomen contains clear yellow fluid and the right ventricle is markedly hypertrophied.',
    lead:'What is the most likely diagnosis?',
    a:'Ascites syndrome (pulmonary hypertension syndrome)',
    wrong:['Round heart disease','Visceral gout','Dissecting aneurysm'],
    why:'Right ventricular hypertrophy is the confirmatory lesion — fast-growing broilers outgrow their cardiopulmonary capacity, especially at altitude. Manage by slowing growth rate, improving ventilation and oxygenation, and reducing altitude stress. Round heart disease is a turkey cardiomyopathy with a globoid dilated heart.'
  });

  Q.push({
    m:'poultry',
    stem:'A flock has severe bloody diarrhea and high mortality. Necropsy shows blood-filled ceca with cheesy cores. Two weeks later, survivors develop a roughened, shaggy small intestinal mucosa resembling a Turkish towel.',
    lead:'What sequence of events explains this, and what is the control point?',
    a:'Eimeria tenella coccidiosis damaging the mucosa, allowing Clostridium perfringens necrotic enteritis — control the coccidia',
    wrong:['Primary Clostridium perfringens infection with secondary coccidial invasion','Ulcerative enteritis from Clostridium colinum followed by coccidiosis','Salmonella enteritis followed by clostridial overgrowth'],
    why:'E. tenella lives in the ceca — tenella = ceca = blood. Coccidial damage to the mucosa is what predisposes to necrotic enteritis, so controlling coccidia controls necrotic enteritis. Amprolium, a thiamine analog, treats the coccidiosis.'
  });

  /* =========================== FISH & AQUATIC =========================== */

  Q.push({
    m:'fish',
    stem:'A hobbyist set up a new freshwater aquarium 8 days ago and stocked it immediately. Fish are lethargic at the surface with rapid opercular movement. The gills appear dark brown rather than red.',
    lead:'What is the most likely cause?',
    a:'Nitrite toxicity — "brown blood disease" from an unestablished biofilter',
    wrong:['Un-ionized ammonia toxicity','Chlorine or chloramine exposure','Gas supersaturation'],
    why:'New tank syndrome is nitrite accumulation because the biofilter has not cycled. Nitrite oxidizes hemoglobin to methemoglobin, giving dark brown gills. Add salt so chloride competes with nitrite uptake at the gill, change water, and cycle the tank before stocking next time.'
  });

  Q.push({
    m:'fish',
    stem:'A pond keeper reports fish behaving erratically with heavy mucus on the gills shortly after a large water change performed directly from the municipal tap.',
    lead:'What is the most likely cause and the treatment?',
    a:'Chlorine or chloramine toxicity — treat with sodium thiosulfate',
    wrong:['Ammonia toxicity — perform another water change','Copper toxicity — increase water hardness','Nitrite toxicity — add sodium chloride'],
    why:'Erratic swimming with excess gill mucus immediately after adding untreated municipal water is chlorine or chloramine. Sodium thiosulfate neutralizes it; always dechlorinate before water changes. Note that another water change with the same tap water would make it worse.'
  });

  Q.push({
    m:'fish',
    stem:'A freshwater aquarium of tetras develops discrete white spots the size of grains of salt on the skin and fins. Fish are flashing against objects and piping at the surface. A new fish was added 5 days ago, and the heater failed briefly last week.',
    lead:'What will you see on a wet mount, and why does treatment need repeating?',
    a:'A large dark horseshoe-shaped macronucleus in a rotating ciliated trophont; only the free-swimming theront stage is drug-susceptible',
    wrong:['Pear-shaped ciliated trophonts; the encysted stage is drug-resistant','A dinoflagellate with gold-dust appearance; cysts survive treatment','Long thin gram-negative rods in haystacks; biofilm protects them'],
    why:'Ich (Ichthyophthirius multifiliis) is the freshwater white spot disease. The trophont is protected beneath the epithelium, so only the free-swimming theront can be killed — hence repeat dosing, and raising temperature to speed the life cycle. Cryptocaryon irritans is the marine analog, with pear-shaped trophonts.'
  });

  Q.push({
    m:'fish',
    stem:'Marine ornamental fish in a reef display develop a fine velvety gold-dust sheen over the skin and fins, and several die rapidly with severe gill involvement.',
    lead:'What is the most likely agent?',
    a:'Amyloodinium — a parasitic dinoflagellate',
    wrong:['Cryptocaryon irritans','Ichthyophthirius multifiliis','Brooklynella hostilis'],
    why:'Velvety gold dust with rapid gill mortality in a marine system is Amyloodinium ("velvet" or coral fish disease). Treat with copper sulfate, hydrogen peroxide, or chloroquine. Cryptocaryon gives discrete white spots rather than a velvety sheen.'
  });

  Q.push({
    m:'fish',
    stem:'A pond koi has cotton-wool tufts of gray-white growth on the skin at a site where it was netted and handled roughly last week. The pond heater failed and water temperature dropped.',
    lead:'What is the most likely agent and the key management point?',
    a:'Saprolegnia — an opportunist; correcting the primary cause is essential or it relapses',
    wrong:['Flavobacterium columnare — lower the temperature further','Fusarium solani — poor prognosis, antifungals of limited value','Epizootic ulcerative syndrome — report to federal authorities'],
    why:'Saprolegnia is a water mold that follows trauma, cold water, poor water quality, or another primary infection; wet mount shows broad non-septate branching hyphae. Salt, potassium permanganate, formalin, or hydrogen peroxide treats it, but treating the mold without correcting husbandry guarantees relapse.'
  });

  Q.push({
    m:'fish',
    stem:'A channel catfish operation reports fish with hemorrhagic enteritis and an open, ulcerated lesion over the frontal fontanelle of the skull.',
    lead:'What is the most likely agent?',
    a:'Edwardsiella ictaluri',
    wrong:['Aeromonas hydrophila','Flavobacterium columnare','Bolbophorus'],
    why:'The "hole in the head" lesion over the frontal fontanelle with hemorrhagic enteritis is enteric septicemia of catfish — the major disease of channel catfish aquaculture. Treat with medicated feed (florfenicol), vaccinate, and manage water temperature.'
  });

  Q.push({
    m:'fish',
    stem:'A pond fish farmer in the southeastern US reports fish with red and white raised bumps in the muscle and fluid in the abdomen. Mortality has reached 90%. A colony of American white pelicans has settled on the property.',
    lead:'What is the most likely agent and the control strategy?',
    a:'Bolbophorus — control the pelicans and the rams-horn snails',
    wrong:['Myxobolus cerebralis — avoid earthen ponds and disinfect','Glugea microsporidiosis — depopulate and disinfect','Aeromonas salmonicida — vaccinate and treat with medicated feed'],
    why:'Bolbophorus is a digenean trematode whose life cycle runs through the American white pelican and rams-horn snails, so control is bird deterrence and snail control rather than a drug. Red and white raised muscle bumps with ascites in southern US catfish is the presentation.'
  });

  Q.push({
    m:'fish',
    stem:'Wild-caught fish in a quarantine system develop skin ulcers with distinctly red centers and white rims. Necropsy shows soft tissue granulomas and liquefactive necrosis of muscle.',
    lead:'What is your immediate action?',
    a:'Contact federal authorities — this is epizootic ulcerative syndrome, a WOAH-listed foreign animal disease',
    wrong:['Begin oxytetracycline in feed and monitor','Treat with formalin baths and improve water quality','Submit for Aeromonas culture before notifying anyone'],
    why:'Red-centered, white-rimmed ulcers is the EUS buzzword. It is caused by Aphanomyces invadans — an oomycete, or water mold, not a true fungus — and the correct answer is regulatory. For every aquatic reportable, the answer includes notify authorities, and usually depopulate.'
  });

  Q.push({
    m:'fish',
    stem:'A goldfish in a home aquarium has developed several cauliflower-like masses on the fins that the owner describes as looking like small balloons. The fish is otherwise eating and behaving normally.',
    lead:'What is the most appropriate management?',
    a:'No treatment — reduce stress; the lesions regress on their own',
    wrong:['Surgical excision, since fibrosarcoma is the most common goldfish neoplasm','Formalin baths to kill the encysted parasite','Oxytetracycline in feed for a bacterial granuloma'],
    why:'Lymphocystis is an iridovirus causing hypertrophied dermal fibroblasts — cosmetic and usually self-limiting, so "do nothing" is the answer. It is the classic non-neoplastic mimic of a fin mass; fibrosarcoma, the most common goldfish neoplasm, is the true tumor to distinguish it from.'
  });

  /* ======================= REPTILES & AMPHIBIANS ======================= */

  Q.push({
    m:'herps',
    stem:'A wild-caught desert tortoise has swollen, half-closed eyes, serous nasal discharge, and lethargy. Signs have waxed and waned for months.',
    lead:'What is the most likely agent, and what must you advise about release?',
    a:'Mycoplasma agassizii — do not release affected wild tortoises',
    wrong:['Herpesvirus — release is safe once signs resolve','Hypovitaminosis A — release after dietary correction','Salmonella — release after antibiotic clearance'],
    why:'Upper respiratory tract disease in a chelonian is classically Mycoplasma agassizii, with chronic often lifelong carriage — which is exactly why affected wild tortoises must not be released back into a naive population. Support with raised ambient temperature and systemic antibiotics; confirm by PCR or serology.'
  });

  Q.push({
    m:'herps',
    stem:'A collection houses turtles and snakes in the same room, sharing equipment. Several snakes have died with severe necrotizing colitis and hepatitis. The turtles are clinically normal.',
    lead:'What is the most likely agent and the key husbandry point?',
    a:'Entamoeba invadens — never house turtles with snakes, since turtles are frequently asymptomatic carriers',
    wrong:['Cryptosporidium serpentis — cull affected snakes','Salmonella — eliminate carriage with antibiotics','Adenovirus — depopulate and disinfect'],
    why:'Amoebiasis is often fatal in snakes and lizards while turtles carry it asymptomatically, so mixed housing is the tested husbandry error. Treat with metronidazole and separate the species.'
  });

  Q.push({
    m:'herps',
    stem:'A ball python kept on damp, soiled bedding at high humidity has ulcerated and blistered ventral scales. Culture grows Aeromonas and Pseudomonas.',
    lead:'What is the most important component of treatment?',
    a:'Correcting the husbandry — humidity, substrate, and hygiene — alongside antibiotics',
    wrong:['Systemic enrofloxacin alone at a high dose','Topical antibiotics alone with no systemic therapy','Surgical debridement of all affected scales'],
    why:'Scale rot is caused by gram-negative opportunists that thrive in excessive humidity and dirty substrate. Antibiotics without fixing the environment fail — the husbandry half is the exam answer. Reptile medicine on the NAVLE is largely husbandry medicine.'
  });

  Q.push({
    m:'herps',
    stem:'A snake with a heavy mite infestation is soaking constantly. Mites cluster around the eyes and in the chin groove. The owner asks about a treatment she read about, and mentions she also keeps a box turtle in the same room.',
    lead:'What is the critical caution?',
    a:'Ivermectin is fatal in chelonians — treat the snake and enclosure, but never give it systemically to the turtle',
    wrong:['Ivermectin is fatal in snakes; use it only on the environment','Ivermectin is safe in all reptiles at reduced dose','Ivermectin must be avoided in the enclosure because it kills the snake on contact'],
    why:'Ophionyssus natricis is the common snake mite and transmits Aeromonas hydrophila, which is the tested vector role. Ivermectin is safe in snakes and lizards but fatal in turtles and tortoises and some skinks — a classic exam trap. Treat the snake and the entire enclosure.'
  });

  Q.push({
    m:'herps',
    stem:'Frogs in a crowded, poorly maintained aquarium develop erythema and red spots on the ventral abdomen and hindlimbs. Several have died.',
    lead:'What is the diagnosis, and what should be corrected first?',
    a:'Red leg syndrome — correct the water quality and crowding before or alongside antibiotics',
    wrong:['Chytridiomycosis — treat with itraconazole baths','Ranavirus — depopulate and disinfect','Septicemic cutaneous ulcerative disease — treat with chloramphenicol alone'],
    why:'Red leg is cutaneous hemorrhage and septicemia caused by Aeromonas (classically A. hydrophila), Pseudomonas, Proteus, or Citrobacter — almost always secondary to poor water quality, overcrowding, or chilling. Treat the water first, then the animals.'
  });

  /* ============================== RABBITS ============================== */

  Q.push({
    m:'rabbits',
    stem:'A 4-year-old house rabbit has a head tilt that has progressed over 2 weeks, now with hind limb weakness and urine scald. Ophthalmic examination shows a white mass within the lens with surrounding uveitis.',
    lead:'What is the most likely diagnosis and the treatment?',
    a:'Encephalitozoon cuniculi — fenbendazole for 28 days',
    wrong:['Pasteurella multocida otitis media / interna — enrofloxacin','Psoroptes cuniculi otitis externa — selamectin','Cerebral larval migrans from Baylisascaris — supportive care'],
    why:'Head tilt plus posterior paresis plus a white lenticular mass (phacoclastic uveitis) is the E. cuniculi triad. It is shed in the URINE and is zoonotic, so counsel immunosuppressed owners. Serology supports but does not confirm. Pasteurella otitis gives head tilt but not the ocular lesion or paresis.'
  });

  Q.push({
    m:'rabbits',
    stem:'A rabbit presented for a dental abscess is discharged from another clinic on oral amoxicillin. Two days later it is anorexic, hypothermic, and has profuse diarrhea.',
    lead:'What has happened, and what should have been used?',
    a:'Fatal clostridial enterotoxemia from oral penicillin; a fluoroquinolone or trimethoprim-sulfa should have been used',
    wrong:['An allergic drug reaction; an antihistamine and a cephalosporin should have been used','Amoxicillin underdosing allowed Pasteurella sepsis; a higher dose was needed','Coccidiosis unmasked by immunosuppression; a sulfonamide should have been used'],
    why:'Remember PLACE: Penicillins, Lincomycin, Ampicillin, Clindamycin/Cephalosporins, Erythromycin — the narrow-spectrum gram-positive oral drugs wipe out cecal flora and allow Clostridium spiroforme overgrowth. Safe choices are fluoroquinolones, trimethoprim-sulfa, chloramphenicol, and metronidazole. The same list applies to guinea pigs, chinchillas, and hamsters.'
  });

  Q.push({
    m:'rabbits',
    stem:'A rabbit has red, ulcerated, crusting lesions on the perineum, genitalia, and around the nose and face. It was recently acquired from a breeder.',
    lead:'What is the treatment?',
    a:'Parenteral penicillin G — three weekly injections',
    wrong:['Oral amoxicillin for 3 weeks','Topical mupirocin only, as systemic penicillins are always fatal in rabbits','Ivermectin for burrowing mites'],
    why:'Rabbit syphilis (Treponema paraluis-cuniculi) is one of the few indications for penicillin in a rabbit — because the route, not the drug, is what kills. Parenteral penicillin G is the treatment of choice; oral penicillins cause fatal clostridial enterotoxemia. It is venereally and vertically transmitted and is NOT zoonotic.'
  });

  Q.push({
    m:'rabbits',
    stem:'A rabbit has thick, crusted, tan-brown exudate filling both ear canals, with intense pruritus and constant head shaking. A technician asks whether she should clean the crusts out first.',
    lead:'What is the correct approach?',
    a:'Treat with selamectin and do not manually strip the crusts — it is exquisitely painful',
    wrong:['Strip the crusts under sedation, then apply a topical acaricide','Flush the canals with dilute chlorhexidine and treat with oral amoxicillin','Treat with topical ivermectin only after debriding the canal'],
    why:'Psoroptes cuniculi is a non-burrowing surface mite; the crusts lift on their own as the mites die. Manual removal is exquisitely painful and unnecessary. Treat all in-contact rabbits and the environment.'
  });

  Q.push({
    m:'rabbits',
    stem:'A previously healthy adult rabbit in a rescue dies suddenly. Two more die within 24 hours, one with blood at the nares. Necropsy shows hepatic necrosis and widespread hemorrhage consistent with DIC.',
    lead:'What is your immediate action?',
    a:'Report it — suspect rabbit hemorrhagic disease virus, a foreign animal disease',
    wrong:['Treat in-contacts with enrofloxacin and monitor','Vaccinate the remaining rabbits and take no further action','Submit for Pasteurella culture before notifying anyone'],
    why:'Peracute death with hepatic necrosis and hemorrhage — the two lesions to name — is RHDV. It is reportable and extremely environmentally stable, so strict biosecurity is essential. Vaccine is available under emergency authorization. Myxomatosis is the other reportable rabbit disease, seen in California, Oregon, and Baja with a cottontail reservoir.'
  });

  Q.push({
    m:'rabbits',
    stem:'A dog is presented after eating rabbit droppings in the yard. A fecal float shows coccidian oocysts with four sporocysts each. The dog is clinically normal.',
    lead:'How should this be interpreted?',
    a:'Spurious passage of rabbit Eimeria — not a canine infection',
    wrong:['Cystoisospora canis infection requiring sulfonamide treatment','Toxoplasma gondii shedding requiring household precautions','Cryptosporidium infection requiring zoonotic counselling'],
    why:'Eimeria has 4 sporocysts; Isospora/Cystoisospora have 2. Eimeria infects ruminants, horses, rabbits, and poultry — not dogs — so a normal dog passing Eimeria after eating rabbit feces is a classic pseudoparasite trap. No treatment is indicated.'
  });

  /* ============================== FERRETS ============================== */

  Q.push({
    m:'ferrets',
    stem:'A 3.5-year-old spayed female ferret has symmetric hair loss beginning at the tail base and progressing over the trunk, is pruritic, and has a swollen vulva. The owner says she is behaving as if in season.',
    lead:'What is the diagnosis, and which test confirms it?',
    a:'Ferret adrenal disease — abdominal ultrasound plus a sex-steroid panel',
    wrong:['Hyperadrenocorticism — ACTH stimulation test','Hyperadrenocorticism — low-dose dexamethasone suppression test','Retained ovarian remnant — anti-Müllerian hormone assay'],
    why:'Despite the nickname, this is not true Cushing\'s: the tumors secrete sex steroids — estradiol, androstenedione, 17-OH-progesterone — not cortisol, which is why ACTH stimulation and LDDS are unhelpful. Vulvar swelling in a spayed female is the giveaway. Treat by adrenalectomy or deslorelin implant.'
  });

  Q.push({
    m:'ferrets',
    stem:'An intact 2-year-old jill has been in estrus for 6 weeks. She is weak with pale mucous membranes. CBC shows a pancytopenia.',
    lead:'What is the mechanism, and how is it prevented?',
    a:'Estrogen-induced bone marrow suppression causing aplastic anemia — prevent by spaying, hCG/GnRH, or a vasectomized hob',
    wrong:['Aleutian disease immune-complex marrow suppression — prevent by serologic culling','Lymphoma infiltrating the marrow — prevent by early screening','Helicobacter-associated blood loss anemia — prevent by treating gastritis'],
    why:'Ferrets are induced ovulators, so an unbred jill stays in estrus and estradiol rises unchecked until it suppresses the marrow. The other induced ovulators to memorize are rabbits, cats, and camelids.'
  });

  Q.push({
    m:'ferrets',
    stem:'A 4-year-old ferret has progressive weight loss and hind limb weakness. Serum protein electrophoresis shows a marked hypergammaglobulinemia, and urinalysis shows proteinuria with glomerular disease on histopath.',
    lead:'What is the diagnosis, and what makes its pathogenesis unusual?',
    a:'Aleutian disease — the lesions come from immune-complex deposition, not direct viral cytopathic effect',
    wrong:['Aleutian disease — direct parvoviral destruction of crypt cells','Lymphoma — neoplastic infiltration of kidney and spinal cord','Multiple myeloma — monoclonal gammopathy with renal deposition'],
    why:'Aleutian disease is a parvovirus, but unlike every other parvovirus you have learned, it causes disease through immune-complex deposition rather than cytopathic destruction of dividing cells — that mechanism is the tested concept. Weight loss, hind limb weakness, hypergammaglobulinemia, and glomerulonephritis is the tetrad.'
  });

  Q.push({
    m:'ferrets',
    stem:'A ferret develops profuse bright-green mucoid diarrhea and vomiting 5 days after a new ferret was introduced to the household. The older resident ferret is most severely affected.',
    lead:'What is the most likely diagnosis?',
    a:'Epizootic catarrhal enteritis (coronavirus)',
    wrong:['Canine distemper','Helicobacter mustelae gastritis','Lawsonia intracellularis proliferative enteropathy'],
    why:'"Green slime disease" — profuse bright-green mucoid stool after a new ferret arrives — is ECE, and older ferrets often become chronic. Distemper in ferrets is essentially 100% fatal and presents with a pruritic chin and inguinal rash, footpad hyperkeratosis, and CNS disease.'
  });

  Q.push({
    m:'ferrets',
    stem:'A routine wellness examination on a bright, active 5-year-old ferret reveals a markedly enlarged spleen. The rest of the examination and the CBC are unremarkable.',
    lead:'What is the most appropriate action?',
    a:'No further workup — splenomegaly is usually an incidental finding from extramedullary hematopoiesis',
    wrong:['Splenectomy, since splenic hemangiosarcoma is common in ferrets','Fine-needle aspirate and staging for lymphoma','Begin treatment for Aleutian disease'],
    why:'Splenomegaly is extremely common in ferrets and usually reflects extramedullary hematopoiesis. Do not chase it unless there are other abnormalities — the tested point is restraint, not workup.'
  });

  /* ================== GUINEA PIGS, CHINCHILLAS, RODENTS ================== */

  Q.push({
    m:'rodents',
    stem:'A 1-year-old guinea pig is reluctant to move, has swollen painful joints, bleeds from the gums when eating, and has a rough coat. It has been fed a pelleted diet from an open bag opened 8 months ago, with no fresh vegetables.',
    lead:'What is the diagnosis and the underlying biochemistry?',
    a:'Hypovitaminosis C — guinea pigs lack L-gulonolactone oxidase, so vitamin C is a dietary essential',
    wrong:['Osteodystrophy from calcium:phosphorus imbalance','Pododermatitis with secondary septic polyarthritis','Vitamin E and selenium deficiency'],
    why:'Guinea pigs, like primates and humans, cannot convert L-gulonolactone to L-ascorbic acid, so scurvy produces defective collagen — lameness, painful joints, gingival bleeding, poor wound healing. Vitamin C degrades rapidly in stored pellets and in water, which is why the 8-month-old bag matters.'
  });

  Q.push({
    m:'rodents',
    stem:'An owner who learned about scurvy has been giving her guinea pig high-dose vitamin C supplements daily for a year. The animal now presents straining to urinate, and radiographs show a cystolith.',
    lead:'What stone type is most likely, and why?',
    a:'Calcium oxalate — ascorbate is metabolized to oxalate',
    wrong:['Struvite — vitamin C alkalinizes the urine','Urate — vitamin C increases purine turnover','Cystine — vitamin C impairs renal tubular reabsorption'],
    why:'Excess vitamin C predisposes to calcium oxalate urolithiasis because ascorbate is metabolized to oxalate, and guinea pigs are already prone to urolithiasis. Supplement adequately but do not oversupplement — this is the trap the question is built on.'
  });

  Q.push({
    m:'rodents',
    stem:'A guinea pig housed in the same enclosure as a clinically normal pet rabbit develops sneezing, nasal discharge, and pneumonia.',
    lead:'What is the most likely agent and the husbandry advice?',
    a:'Bordetella bronchiseptica — never house rabbits with guinea pigs, since rabbits are asymptomatic carriers',
    wrong:['Streptococcus pneumoniae — isolate the guinea pig only','Pasteurella multocida — treat the rabbit as the index case','Mycoplasma pulmonis — treat both animals with tetracycline'],
    why:'Rabbits carry Bordetella asymptomatically and transmit it to guinea pigs, in which it causes pneumonia — the mixed-housing error is the tested point. Streptococcus pneumoniae is the other classic guinea pig pneumonia agent; S. equi subsp. zooepidemicus instead causes cervical lymphadenitis, the "lumps."'
  });

  Q.push({
    m:'rodents',
    stem:'A chinchilla develops conjunctivitis with a white ocular discharge. The owner refills the water bottle weekly without cleaning it.',
    lead:'What is the most likely agent and treatment?',
    a:'Pseudomonas — treat with an aminoglycoside such as gentamicin or neomycin',
    wrong:['Proteus — treat with oral amoxicillin','Staphylococcus — treat with cephalexin','Chlamydia — treat with doxycycline'],
    why:'Pseudomonas is waterborne and contaminated water bottles are the classic source; it causes conjunctivitis with white discharge, and also otitis, metritis, and septicemia. Aminoglycosides are effective and safe here — unlike the penicillin group, which causes fatal dysbiosis in chinchillas.'
  });

  Q.push({
    m:'rodents',
    stem:'A 2-year-old female Syrian hamster has polyuria, polydipsia, weight loss, and a fluid-distended abdomen. Urinalysis shows marked proteinuria and serum albumin is low.',
    lead:'What is the diagnosis and the confirmatory stain?',
    a:'Renal amyloidosis — Congo red, showing apple-green birefringence under polarized light',
    wrong:['Polycystic kidney disease — ultrasound','Glomerulonephritis from LCMV — immunofluorescence','Hepatic lipidosis — Oil red O'],
    why:'Older Syrian hamsters, more often females, develop renal amyloidosis causing glomerulonephropathy with severe proteinuria and hypoalbuminemia — hence the ascites. Congo red with apple-green birefringence is the diagnostic stain.'
  });

  Q.push({
    m:'rodents',
    stem:'A batch of 4-week-old hamsters shipped to a pet store 3 days ago develops watery diarrhea with soiled, wet perineums. Mortality is high.',
    lead:'What is the agent, and what other species does it affect?',
    a:'Lawsonia intracellularis — the same organism as porcine proliferative enteropathy',
    wrong:['Clostridium difficile — also causes antibiotic-associated colitis in horses','Salmonella typhimurium — also a foodborne zoonosis','Rotavirus — also causes epizootic diarrhea of infant mice'],
    why:'"Wet tail," or proliferative ileitis, is Lawsonia intracellularis in recently weaned and shipped 3–8 week old hamsters. Treat with tetracycline or metronidazole plus fluids; stress reduction is key. Recognizing it as the same organism as the porcine disease is the cross-species link the exam likes.'
  });

  Q.push({
    m:'rodents',
    stem:'A laboratory technician reports that several rats have developed red-tinged discharge around the eyes and nose. She is concerned about hemorrhage.',
    lead:'What is this, and what should it prompt you to do?',
    a:'Chromodacryorrhea — porphyrin, not blood; a non-specific stress indicator, so look for a husbandry problem',
    wrong:['Conjunctival hemorrhage from vitamin K deficiency; check coagulation','Sialodacryoadenitis virus infection; quarantine the colony','Mycoplasma pulmonis rhinitis; begin tetracycline'],
    why:'Chromodacryorrhea is porphyrin secreted by the Harderian gland behind the eye — it is not blood. It signals stress or underlying disease, so the correct response is to investigate husbandry and health rather than to treat the discharge.'
  });

  /* ============================= PRIMATES ============================= */

  Q.push({
    m:'primates',
    stem:'A research technician is bitten on the forearm by a rhesus macaque. The macaque appears healthy apart from a few small oral vesicles noted last week.',
    lead:'What is the greatest risk, and what is the immediate response?',
    a:'Herpes B virus — immediate thorough scrub and post-exposure acyclovir or valacyclovir',
    wrong:['Rabies — immediate wound care and rabies post-exposure prophylaxis','Marburg virus — immediate isolation of the technician','Simian immunodeficiency virus — baseline serology and 6-month follow-up'],
    why:'Herpes B is nearly asymptomatic in the macaque host, producing only oral vesicles, but a macaque bite or scratch causes fatal ascending encephalomyelitis in humans. It is the single most important occupational hazard in primate medicine, and the response is immediate — scrub first, then antiviral prophylaxis.'
  });

  Q.push({
    m:'primates',
    stem:'Several nonhuman primates in a facility develop a rash, respiratory signs, and conjunctivitis, and two die. A new animal caretaker was recently ill with a febrile rash illness.',
    lead:'What is the most likely agent, and what direction did it travel?',
    a:'Rubeola (measles) — transmitted from humans to primates, an anthroponosis',
    wrong:['Rubella — transmitted from humans to primates','Rubeola — transmitted from primates to humans','Simian varicella virus — transmitted between primates only'],
    why:'Rubeola is a morbillivirus that causes serious, often fatal disease in nonhuman primates and travels from people to animals — vaccinate staff and quarantine. Rubella (German measles, a togavirus) is mild and is the distractor the exam offers.'
  });

  Q.push({
    m:'primates',
    stem:'A filovirus outbreak is traced to laboratory workers handling African green (vervet) monkeys imported from Uganda. The original recognized outbreak occurred in Germany in 1967.',
    lead:'What is the agent, its biosafety level, and its natural reservoir?',
    a:'Marburg virus — BSL-4 — fruit bats',
    wrong:['Ebola virus — BSL-4 — nonhuman primates','Lassa virus — BSL-4 — multimammate rats','Simian hemorrhagic fever virus — BSL-3 — macaques'],
    why:'Marburg is named for Marburg, Germany, where it was identified in 1967 among laboratory workers handling imported African green monkeys. It is in the same family as Ebola, requires BSL-4 containment, and its natural reservoir is fruit bats — the primates were amplifying hosts, not the reservoir.'
  });

  /* ============================= ONCOLOGY ============================= */

  Q.push({
    m:'oncology',
    stem:'A 7-year-old Golden Retriever on a CHOP protocol for multicentric lymphoma is presented for stranguria and hematuria 3 weeks into treatment. Urine culture is negative and no crystals or stones are found.',
    lead:'Which drug is responsible, and how is it managed?',
    a:'Cyclophosphamide — sterile hemorrhagic cystitis from acrolein; discontinue permanently, give mesna, furosemide, and fluids',
    wrong:['Doxorubicin — hemorrhagic cystitis; reduce the dose by 25% and continue','Vincristine — urinary retention from autonomic neuropathy; give bethanechol','Prednisone — steroid-induced cystitis; taper the dose'],
    why:'Sterile hemorrhagic cystitis with a negative culture in a dog on CHOP is cyclophosphamide, caused by the acrolein metabolite. Prevent by dosing in the morning with free water access and furosemide; treat with mesna. Do not re-challenge after cystitis has occurred.'
  });

  Q.push({
    m:'oncology',
    stem:'A 9-year-old Doberman with lymphoma has received several doses of doxorubicin. He now presents with exercise intolerance, a gallop rhythm, and echocardiographic evidence of dilated cardiomyopathy.',
    lead:'What should have been done differently, and what is the drug\'s toxicity in cats?',
    a:'Screen with echocardiography before starting and cap the cumulative dose; in cats doxorubicin causes nephrotoxicity, not cardiotoxicity',
    wrong:['Screen with echocardiography and cap the dose; in cats it also causes cardiotoxicity','Pre-treat with dexrazoxane only for extravasation; in cats it causes hepatotoxicity','No screening is needed since toxicity is idiosyncratic; in cats it causes myelosuppression'],
    why:'Doxorubicin cardiotoxicity in dogs is cumulative and dose-dependent, capped around 180–240 mg/m², and Dobermans, Boxers, and Great Danes carry pre-existing DCM risk. Cats get nephrotoxicity instead — check renal values, not an echo. Dexrazoxane is both a cardioprotectant and the extravasation antidote.'
  });

  Q.push({
    m:'oncology',
    stem:'A 10-year-old cat with an injection-site sarcoma has had incomplete surgical excision. A colleague suggests adjuvant cisplatin, since it is effective against sarcomas in dogs.',
    lead:'What is your response?',
    a:'Cisplatin is contraindicated in cats — it causes fatal pulmonary edema; use carboplatin instead',
    wrong:['Cisplatin is acceptable in cats with aggressive saline diuresis','Cisplatin is contraindicated because of nephrotoxicity in cats; use doxorubicin','Cisplatin is acceptable at 50% of the canine dose'],
    why:'Cisplatin causes fatal pulmonary edema in cats — one of the most heavily tested facts on the exam, and it is absolute rather than dose-dependent. Carboplatin is safe in cats, needs no diuresis, and is less emetic; watch for thrombocytopenia with a delayed nadir.'
  });

  Q.push({
    m:'oncology',
    stem:'A cat is presented seizuring. The owner uses a topical cream on her forearms for actinic keratosis, and the cat grooms her arms affectionately every evening.',
    lead:'What is the most likely toxicosis?',
    a:'5-fluorouracil',
    wrong:['Imiquimod','Calcipotriene (vitamin D analog)','Tacrolimus'],
    why:'5-FU is absolutely contraindicated in cats, causing fatal neurotoxicity with seizures and cerebellar signs, and a cat licking an owner\'s topical 5-FU cream is the classic exam vignette. Ask about human topical medications in any cat with unexplained seizures.'
  });

  Q.push({
    m:'oncology',
    stem:'A dog receiving a vinca alkaloid for lymphoma develops constipation and ileus, and on neurologic exam has decreased spinal reflexes. The CBC shows only mild myelosuppression.',
    lead:'Which drug is this, and how does its counterpart differ?',
    a:'Vincristine — neurotoxic more than myelosuppressive; vinblastine is the reverse',
    wrong:['Vinblastine — neurotoxic more than myelosuppressive; vincristine is the reverse','Vincristine — both drugs are equally neurotoxic; the difference is in emesis','Paclitaxel — the vinca alkaloids do not cause neuropathy'],
    why:'Vincristine causes peripheral neuropathy and ileus with relatively mild myelosuppression; vinblastine flips that — myelosuppression is dose-limiting and it is less neurotoxic. Vincristine\'s two signature non-lymphoma uses are transmissible venereal tumor, where it is the drug of choice, and ITP.'
  });

  Q.push({
    m:'oncology',
    stem:'A vincristine infusion extravasates. A technician reaches for a cold pack, as she was taught for a previous doxorubicin extravasation.',
    lead:'What is the correct management?',
    a:'Warm compress plus hyaluronidase — do NOT cool a vinca extravasation',
    wrong:['Cold compress plus hyaluronidase','Cold compress plus dexrazoxane','Warm compress plus dexrazoxane'],
    why:'The two vesicant extravasation protocols are deliberately opposite: doxorubicin gets stop, aspirate, COLD compress, and dexrazoxane; vinca alkaloids get WARM compress and hyaluronidase to disperse the drug. Applying the wrong one worsens tissue necrosis.'
  });

  Q.push({
    m:'oncology',
    stem:'A 5-year-old Australian Shepherd is to begin a CHOP protocol. The owner mentions that a littermate had a severe adverse reaction to a heartworm preventive at high dose.',
    lead:'What should you do before treating?',
    a:'Test for the MDR1 (ABCB1-1Δ) mutation and dose-reduce if positive',
    wrong:['Test for pyruvate kinase deficiency and avoid alkylating agents','Screen with an echocardiogram and avoid vincristine','No change is needed, as MDR1 affects only macrocyclic lactones'],
    why:'MDR1-mutant herding breeds — Collies, Australian Shepherds, Shelties — have reduced clearance of vincristine, vinblastine, doxorubicin, and actinomycin D, producing severe myelosuppression. It is not just an ivermectin problem. Test and dose-reduce.'
  });

  Q.push({
    m:'oncology',
    stem:'A dog with a suspected cutaneous mass is referred to you. The referring clinic started prednisone a week ago while awaiting the appointment, and the mass has shrunk considerably.',
    lead:'What is the problem with that decision?',
    a:'Steroids destroy cytology and histopath, mask the disease, and induce multidrug resistance, shortening remission',
    wrong:['Steroids are contraindicated only in mast cell tumors because of degranulation','The only issue is that the mass is now too small to aspirate accurately','There is no problem; pre-treatment steroids improve response to CHOP'],
    why:'Never start steroids before you have a diagnosis. Beyond obscuring the cytologic and histologic picture, prior steroid exposure induces multidrug resistance and is associated with shorter remission when definitive chemotherapy begins.'
  });

  Q.push({
    m:'oncology',
    stem:'An 8-year-old Scottish Terrier has hematuria and stranguria. Ultrasound shows a mass at the bladder trigone, and a free-catch urine sample shows atypical transitional epithelial cells.',
    lead:'What is the first-line medical therapy, and what must you avoid combining with it?',
    a:'Piroxicam — never combine it with corticosteroids',
    wrong:['Piroxicam — never combine it with mitoxantrone','Carboplatin — never combine it with a gastroprotectant','Toceranib — never combine it with an antihistamine'],
    why:'Transitional cell carcinoma equals piroxicam, a non-selective NSAID with antiangiogenic activity, often combined with mitoxantrone. Give with misoprostol or another gastroprotectant, and never with corticosteroids — the combination markedly increases GI ulceration and perforation risk. Piroxicam also causes renal papillary necrosis.'
  });

  Q.push({
    m:'oncology',
    stem:'A dog receiving L-asparaginase for lymphoma induction is scheduled for vincristine on the same day, at the same appointment, to save the owner a trip.',
    lead:'What is the concern?',
    a:'Giving them the same day increases neutropenia and pancreatitis risk — separate by at least 6 hours or dose the day before',
    wrong:['They are physically incompatible in the same line and will precipitate','L-asparaginase inactivates vincristine, eliminating its efficacy','There is no concern; same-day administration is the standard protocol'],
    why:'L-asparaginase and vincristine on the same day increases neutropenia and pancreatitis risk. Also give asparaginase SC or IM rather than IV to reduce anaphylaxis — its other notable toxicities are pancreatitis and coagulopathy, with little myelosuppression.'
  });

  Q.push({
    m:'oncology',
    stem:'A dog is scheduled for its next chemotherapy dose. The CBC drawn that morning shows a neutrophil count of 1,100/µL. The dog had grade 4 neutropenia after the last dose but is currently afebrile and clinically well.',
    lead:'What should you do?',
    a:'Delay treatment and reduce the next dose by 20–25%',
    wrong:['Proceed at full dose since the dog is clinically well','Proceed at full dose and add prophylactic antibiotics','Discontinue the protocol permanently'],
    why:'Check a CBC before every dose. Delay if neutrophils are below roughly 1,500–2,000/µL, and after a grade 3–4 neutropenia reduce the next dose by 20–25%. The typical nadir is 7 days, ranging 5–10. Febrile neutropenia is the emergency: hospitalize with broad-spectrum antibiotics and fluids.'
  });

  Q.push({
    m:'oncology',
    stem:'A 12-year-old cat has chronic small-bowel diarrhea and weight loss. Endoscopic biopsies confirm low-grade (small-cell) gastrointestinal lymphoma.',
    lead:'What is the standard first-line protocol?',
    a:'Chlorambucil plus prednisolone',
    wrong:['CHOP protocol','Lomustine plus prednisolone','Doxorubicin as a single agent'],
    why:'Feline small-cell GI lymphoma is treated with chlorambucil, the gentlest oral alkylating agent, plus prednisolone — note prednisoLONE rather than prednisone in cats. Monitor a CBC every 2–4 weeks for cumulative thrombocytopenia. High-grade disease is what warrants CHOP.'
  });

  /* ======================== TOXICOLOGY & REGULATORY ======================== */

  Q.push({
    m:'tox-regulatory',
    stem:'A dog ate an unknown rodenticide 4 days ago. He now has spontaneous bruising and hemorrhage. Coagulation testing shows a prolonged PT with a PTT that is only mildly affected.',
    lead:'Which rodenticide class is this, and what is the treatment?',
    a:'Anticoagulant (warfarin-type or brodifacoum) — vitamin K1, extended course for long-acting products',
    wrong:['Bromethalin — mannitol and supportive care','Cholecalciferol — fluids, calcitonin, and bisphosphonates','Zinc phosphide — gastric acid neutralization and supportive care'],
    why:'Anticoagulant rodenticides inhibit vitamin K epoxide reductase, and PT prolongs before PTT because factor VII has the shortest half-life. Onset is delayed 2–5 days. Long-acting second-generation products require weeks of vitamin K1, not days.'
  });

  Q.push({
    m:'tox-regulatory',
    stem:'A dog ate a rodenticide and within hours developed tremors, then hindlimb paresis and seizures. There is no bleeding and coagulation times are normal. Serum calcium is normal.',
    lead:'Which rodenticide class is this, and what is the antidote?',
    a:'Bromethalin — there is no antidote; give mannitol and supportive care',
    wrong:['Anticoagulant — vitamin K1','Cholecalciferol — calcitonin and bisphosphonates','Strychnine — methocarbamol and activated charcoal'],
    why:'"Rat poison" is three completely different toxidromes. Bromethalin is a neurotoxin causing cerebral edema with onset in hours to days, normal coagulation, and normal calcium. There is no antidote — early decontamination and mannitol are all you have. Always ask to see the packaging.'
  });

  Q.push({
    m:'tox-regulatory',
    stem:'A dog is presented 36 hours after ingesting a rodenticide. He is anorexic and vomiting. Chemistry shows azotemia with elevated calcium AND elevated phosphorus.',
    lead:'Which rodenticide class is this, and what is the prognosis?',
    a:'Cholecalciferol (vitamin D3) — prognosis is poor and treatment prolonged and difficult',
    wrong:['Anticoagulant — good prognosis with vitamin K1','Bromethalin — fair prognosis with mannitol','Zinc phosphide — good prognosis with decontamination alone'],
    why:'Calcium and phosphorus both elevated with renal failure 1–2 days after ingestion is cholecalciferol, which causes soft tissue mineralization. Treatment requires IV fluids and diuresis, calcitonin, and bisphosphonates over a prolonged course, and the prognosis remains poor — which is why identifying the product early matters.'
  });

  Q.push({
    m:'tox-regulatory',
    stem:'Cattle with access to a stagnant, nutrient-rich farm pond in late August are found dead near the water\'s edge. Others are showing acute neurologic signs and rapid death. The pond has a thick blue-green surface scum.',
    lead:'What is the most likely toxicosis?',
    a:'Blue-green algae (cyanobacteria) — anatoxin-a neurotoxicity and microcystin hepatotoxicity',
    wrong:['Nitrate toxicity from pond runoff','Lead toxicity from discarded batteries','Blue-green algae — but only hepatotoxicity occurs in cattle'],
    why:'Cyanobacterial blooms occur in stagnant, warm, nutrient-rich water in late summer. Microcystin causes acute hepatotoxicity and anatoxin-a causes neurotoxicity with rapid death — both mechanisms occur. Birds and cattle are the most commonly affected species.'
  });

  Q.push({
    m:'tox-regulatory',
    stem:'A caged Amazon parrot housed in a homemade galvanized wire enclosure is regurgitating, weak, and neurologically abnormal, with green droppings.',
    lead:'What is the most likely toxicosis and the treatment?',
    a:'Heavy metal (zinc or lead) toxicosis — chelate with CaEDTA',
    wrong:['Chlamydia psittaci infection — doxycycline','Hypovitaminosis A — vitamin A supplementation','Aspergillosis — itraconazole'],
    why:'Galvanized wire, curtain weights, costume jewelry, and pennies are the classic caged-bird sources of zinc and lead. Signs are regurgitation, neurologic disease, and hemoglobinuria producing green droppings. Chelate with CaEDTA and remove the source — note that green droppings here are hemoglobinuria, not the biliverdinuria of psittacosis.'
  });

  /* ===================== REPORTABLE & THERAPEUTICS ===================== */

  Q.push({
    m:'reportable',
    stem:'You are examining a beef cow with drooling and erosions on the tongue and dental pad. Two other cows in the group are lame with lesions at the coronary bands. The producer asks you to treat them and recheck in a week.',
    lead:'What is the correct next step?',
    a:'Stop, do not move animals, and notify the State Animal Health Official / USDA APHIS immediately',
    wrong:['Treat symptomatically and report only if the lesions fail to resolve','Collect samples and report only after laboratory confirmation','Cull the affected animals and disinfect the premises'],
    why:'Foot-and-mouth disease and vesicular stomatitis are clinically indistinguishable, so any vesicular oral or foot lesion in livestock triggers immediate reporting for laboratory differentiation. Report on suspicion, never after confirmation — and where a question offers "treat with X" alongside "contact the authorities," pick the authorities.'
  });

  Q.push({
    m:'reportable',
    stem:'A client wants to transport her horse across state lines to a show next month.',
    lead:'What documentation is required, and what test underlies it?',
    a:'A negative Coggins test — AGID for equine infectious anemia',
    wrong:['A negative Coggins test — cELISA is the required confirmatory method','A negative equine viral arteritis titer','A certificate of veterinary inspection only; no testing is required'],
    why:'EIA is federally reportable and a negative Coggins is required for interstate travel, sales, and shows. AGID is the gold standard; cELISA is more sensitive and faster but positives must be confirmed by AGID. Foals may carry maternal antibody until 6–12 months.'
  });

  Q.push({
    m:'therapeutics',
    stem:'A backyard poultry keeper asks you to treat her laying hens for a respiratory infection with a drug not labeled for poultry, promising she will discard the eggs for a week.',
    lead:'What is the correct response?',
    a:'Extralabel drug use in laying hens producing eggs for consumption is effectively prohibited, because no withdrawal data exist',
    wrong:['It is permissible if the withdrawal time is doubled as a safety margin','It is permissible if the eggs are used only within her own household','It is permissible for any drug except fluoroquinolones'],
    why:'Learn it as: no extralabel drug use in layers, and no fluoroquinolones in poultry. Federal rule (21 CFR 530.41) prohibits extralabel fluoroquinolones and glycopeptides in poultry and extralabel cephalosporins in major food species — and in layers, the absence of withdrawal data makes ELDU untenable regardless of the drug.'
  });

  Q.push({
    m:'therapeutics',
    stem:'A dog with generalized demodicosis is a Rough Collie. The owner asks about a high-dose macrocyclic lactone protocol she read about online.',
    lead:'What should you check first?',
    a:'MDR1 (ABCB1-1Δ) genotype — herding breeds may have reduced clearance and neurologic toxicity',
    wrong:['Serum bile acids, since ivermectin is hepatically cleared','A baseline ophthalmic exam, since ivermectin causes retinal toxicity','Nothing — collies tolerate high-dose ivermectin if titrated slowly'],
    why:'The MDR1 mutation in Collies, Australian Shepherds, Shelties, and other herding breeds impairs P-glycoprotein at the blood-brain barrier, causing ivermectin neurotoxicity. The same mutation also reduces clearance of vincristine, vinblastine, doxorubicin, and actinomycin D.'
  });

  Q.push({
    m:'therapeutics',
    stem:'A fish farm asks you to euthanize a group of food-fish that failed to thrive, using MS-222. The owner intends to send the remainder of the harvest to market.',
    lead:'What must you tell the producer?',
    a:'MS-222 carries a 21-day withdrawal time, and it must be buffered with sodium bicarbonate',
    wrong:['MS-222 has no withdrawal time in food fish and needs no buffering','MS-222 has a 7-day withdrawal time and is given by injection','Metomidate (Aquacalm) should be used instead, as it is approved for food fish'],
    why:'MS-222 (tricaine methanesulfonate) is the standard fish anesthetic and euthanasia agent, given by immersion, with a 21-day withdrawal. It is acidic in solution and must be buffered with sodium bicarbonate. Aquacalm is for ornamental, non-food fish only — the reverse of the distractor.'
  });

  /* =========================== PARASITOLOGY =========================== */

  Q.push({
    m:'parasitology',
    stem:'A 1-year-old dog has chronic large-bowel diarrhea with fresh blood and mucus. Centrifugal fecal flotation shows brown, barrel-shaped eggs with smooth bipolar plugs at each end. The owner has been giving an over-the-counter pyrantel dewormer monthly with no improvement.',
    lead:'What is the parasite, and why has treatment failed?',
    a:'Trichuris vulpis — pyrantel does not cover whipworms',
    wrong:['Trichuris vulpis — pyrantel resistance has developed','Capillaria — pyrantel does not cover it, and the sample should have been urine','Ancylostoma caninum — benzimidazole resistance is widespread'],
    why:'Pyrantel covers roundworms and hookworms only — not whipworms and not tapeworms. This is a coverage gap, not resistance. Use fenbendazole for 3–5 days and repeat in 3 weeks, or milbemycin/moxidectin. Whipworm shedding is intermittent, so a negative float does not rule it out.'
  });

  Q.push({
    m:'parasitology',
    stem:'A 6-month-old dog from a rescue kennel had a positive fecal for hookworms and was treated with fenbendazole. A recheck fecal 2 weeks later still shows thin-shelled oval eggs containing an 8–16 cell morula. The dog has been housed indoors since treatment.',
    lead:'What is the most likely explanation?',
    a:'Anthelmintic-resistant Ancylostoma caninum',
    wrong:['Reinfection from the environment','Prepatent-period eggs from a second, later infection','Misidentification — these are Uncinaria stenocephala eggs, which fenbendazole does not cover'],
    why:'Benzimidazole and macrocyclic lactone resistance in A. caninum is documented and spreading in US dogs, with pyrantel resistance also reported. Indoor housing since treatment argues against reinfection. Recheck a fecal 2 weeks post-treatment on any apparent failure, and consider a combination product such as emodepside plus praziquantel, or resistance PCR.'
  });

  Q.push({
    m:'parasitology',
    stem:'An owner brings in a photo of small, white, rice-grain-like segments moving on her dog\'s perianal fur and in its bedding. A routine fecal flotation performed at the last visit was negative. The dog has a moderate flea burden.',
    lead:'What is the diagnosis, and what does treatment require?',
    a:'Dipylidium caninum — praziquantel plus flea control',
    wrong:['Dipylidium caninum — praziquantel alone is curative','Taenia spp. — praziquantel plus rodent control','Physaloptera — fenbendazole with repeat dosing'],
    why:'Standard flotation often misses tapeworm eggs, so diagnosis is usually visual from proglottids — a negative float means nothing here. Dipylidium uses the flea as its intermediate host, so praziquantel without flea control guarantees reinfection.'
  });

  Q.push({
    m:'parasitology',
    stem:'A 7-week-old puppy has diarrhea. Fecal flotation shows small, oval, smooth-walled, unsporulated oocysts. The puppy was dewormed with pyrantel at 2, 4, and 6 weeks.',
    lead:'What is the parasite, and what treatment does it need?',
    a:'Cystoisospora — a coccidiostat such as sulfadimethoxine, ponazuril, or trimethoprim-sulfa',
    wrong:['Cystoisospora — fenbendazole for 5 days','Giardia — fenbendazole ± metronidazole','Toxoplasma gondii — clindamycin'],
    why:'Coccidia are protozoa, not helminths, and anthelmintics do not kill them — which is exactly why routine pyrantel deworming did not prevent this. It needs a coccidiostat. Toxoplasma oocysts are smaller and are a cat parasite.'
  });

  Q.push({
    m:'parasitology',
    stem:'A puppy with soft, greasy diarrhea has fecal flotation showing oval cysts with smooth walls and 2–4 visible nuclei and axonemes.',
    lead:'What is the treatment, and what additional step reduces relapse?',
    a:'Fenbendazole for 5 days ± metronidazole — and bathe the pet at the end of treatment',
    wrong:['Sulfadimethoxine — and bathe the pet at the end of treatment','Praziquantel — and treat all in-contact animals','Pyrantel — and repeat in 3 weeks'],
    why:'Giardia responds to fenbendazole, often combined with metronidazole for better clearance. Bathing at the end of treatment removes cysts clinging to the haircoat, which are a common source of immediate reinfection. Zoonotic potential is debated but hygiene is still warranted.'
  });

  Q.push({
    m:'parasitology',
    stem:'A 4-year-old dog has had intermittent vomiting for 5 months. Three separate gravity fecal flotations have been negative. On the fourth attempt, using centrifugal flotation, you find a large, thick, smooth-shelled oval egg that is already embryonated.',
    lead:'What is the parasite, and what does this case illustrate?',
    a:'Physaloptera — centrifugal flotation recovers what gravity flotation misses, and shedding is intermittent',
    wrong:['Toxascaris leonina — the embryonated state confirms a mature infection','Capillaria — respiratory forms are shed only intermittently','Spirocerca lupi — eggs are shed only when the nodule ulcerates'],
    why:'Physaloptera is associated with chronic vomiting, is notoriously hard to clear, and its adults shed intermittently — so flotation often misses it. Always use centrifugal rather than gravity flotation; it recovers far more eggs, especially Trichuris and Physaloptera. Pyrantel or fenbendazole often needs repeat or higher dosing.'
  });

  Q.push({
    m:'parasitology',
    stem:'A litter of 5-week-old puppies has potbellied abdomens and poor growth. Fecal flotation shows thick-walled, brown, round-oval eggs with a pitted surface. The owner has small children who play with the puppies.',
    lead:'What is the parasite, and what is the key client-education point?',
    a:'Toxocara canis — zoonotic, causing visceral and ocular larva migrans in children',
    wrong:['Toxascaris leonina — zoonotic, causing cutaneous larva migrans','Ancylostoma caninum — zoonotic, causing visceral larva migrans','Toxocara canis — not zoonotic; reassure the owner'],
    why:'The pitted surface distinguishes Toxocara from the smooth-shelled Toxascaris. Toxocara causes visceral and ocular larva migrans in people, which is why deworming puppies and kittens at 2, 4, 6, and 8 weeks is a public health measure, not just a patient one. Hookworms cause cutaneous larva migrans instead.'
  });

  Q.push({
    m:'parasitology',
    stem:'A dog in a sheep-raising region of the western US is found to have tapeworm eggs with a thick striated shell containing a hexacanth embryo. The owner\'s family raises sheep and processes their own meat.',
    lead:'Why does this finding warrant more concern than a typical Taenia infection?',
    a:'Echinococcus eggs are morphologically identical to Taenia, and Echinococcus poses a zoonotic hydatid disease risk',
    wrong:['Taenia in sheep-raising areas causes cysticercosis in humans through egg ingestion','The eggs indicate Dipylidium, which is zoonotic in children who ingest fleas','Striated eggs indicate Spirometra, which causes human sparganosis'],
    why:'You cannot distinguish Echinococcus from Taenia on egg morphology, so geography and the sheep-dog cycle drive the concern. Praziquantel is effective, but higher-frequency dosing is often recommended in endemic areas given the zoonotic hydatid risk. Counsel on hygiene and on not feeding raw offal to dogs.'
  });

  Q.push({
    m:'parasitology',
    stem:'A dog is diagnosed with both roundworms and tapeworms. The technician asks whether the fenbendazole already dispensed will handle both.',
    lead:'What is your answer?',
    a:'No — fenbendazole covers the roundworms but not the tapeworms; praziquantel or epsiprantel is needed',
    wrong:['Yes — fenbendazole is broad-spectrum and covers cestodes as well','No — a macrocyclic lactone must be added for the tapeworms','Yes, provided the fenbendazole course is extended to 5 days'],
    why:'Tapeworms are covered by praziquantel and epsiprantel only. Benzimidazoles are broad — roundworms, hookworms, whipworms, Giardia, some lungworms — but they do not cover cestodes. Combination products such as Drontal Plus and Interceptor Plus exist precisely to bridge this gap.'
  });

  Q.push({
    m:'parasitology',
    stem:'A cat is diagnosed with Toxoplasma gondii oocyst shedding on fecal flotation. The owner is 12 weeks pregnant and asks whether she should rehome the cat.',
    lead:'What is the most appropriate counseling?',
    a:'Rehoming is not required — advise litter box precautions and hygiene; treat with clindamycin only if the cat is clinically ill',
    wrong:['Rehome the cat until after delivery, as no precaution is reliable','Treat the cat with fenbendazole to eliminate oocyst shedding','Treat the cat with a coccidiostat, since Toxoplasma is a coccidian'],
    why:'Dewormers do not treat Toxoplasma, and clindamycin is reserved for clinical illness rather than shedding. The practical risk is managed by hygiene — have someone else scoop the litter box, do it daily since oocysts need 1–5 days to sporulate, wear gloves for gardening, and avoid undercooked meat, which is a larger exposure route than the cat.'
  });

  /* ==================== EQUINE — EXPANDED ==================== */

  Q.push({
    m:'equine',
    stem:'A 9-year-old Thoroughbred gelding that has cribbed on his stall door for years is presented for acute, severe, unrelenting colic. He is sweating and repeatedly throwing himself down. Rectal examination reveals multiple loops of distended small intestine, and nasogastric intubation yields 12 L of reflux.',
    lead:'What is the most likely lesion?',
    a:'Epiploic foramen entrapment',
    wrong:['Pelvic flexure impaction','Duodenitis–proximal jejunitis','Large colon volvulus'],
    why:'Cribber plus acute severe colic plus small intestinal distension is one of the tightest signalment-to-lesion links in equine medicine — the distal jejunum and ileum incarcerate through the epiploic foramen, bounded by the caudate liver lobe, portal vein, and caudal vena cava. This is a strangulating lesion needing emergency surgery. A pelvic flexure impaction gives slow-onset mild pain with decreased manure, not this.'
  });

  Q.push({
    m:'equine',
    stem:'A 14-year-old gelding has moderate colic with reduced manure output for 2 days. Pain is mild and responds to a single dose of flunixin. Rectal examination reveals a firm, doughy mass in the large colon at the point where it narrows sharply.',
    lead:'What is the initial treatment?',
    a:'6–8 L of water by nasogastric tube every 4–6 hours, plus analgesia and IV fluids, withholding feed',
    wrong:['Immediate midline celiotomy','Mineral oil once by nasogastric tube and return to feed','Abdominal radiographs, then surgical removal'],
    why:'This is a pelvic flexure impaction — the most common impaction site, where the colon diameter narrows sharply. Rehydrate the ingesta enterally and systemically and withhold feed; most resolve medically. Radiographs and surgery belong to enteroliths, which are magnesium ammonium phosphate and are removed by celiotomy.'
  });

  Q.push({
    m:'equine',
    stem:'A 10-year-old horse in California on an alfalfa-heavy diet has had three episodes of moderate colic in 6 months, each resolving with medical management. Abdominal radiographs show a large laminated mineral-opaque mass in the colon.',
    lead:'What is the composition of the mass, and what is the treatment?',
    a:'Magnesium ammonium phosphate (struvite) — remove by midline celiotomy',
    wrong:['Calcium oxalate — dissolve with a therapeutic diet','Sand — treat with psyllium and mineral oil','Fibrous phytobezoar — treat with mineral oil and diet change'],
    why:'Enteroliths are struvite laid down in layers around a nidus, and alfalfa-heavy diets and California are the classic associations. Radiographs are about 80% sensitive. They cannot be dissolved — the treatment is surgical removal.'
  });

  Q.push({
    m:'equine',
    stem:'A 5-year-old Warmblood mare has an intermittent, low-grade unilateral nasal bleed over several months. The bleeding is not associated with exercise. Endoscopy reveals a smooth, greenish mass arising from the ethmoid region.',
    lead:'Before treating this with intralesional formaldehyde, what must you do?',
    a:'Perform CT or MRI to assess the cribriform plate',
    wrong:['Perform a coagulation panel and platelet count','Perform a guttural pouch endoscopy to rule out mycosis','Perform a bone marrow aspirate to rule out neoplasia'],
    why:'Ethmoid hematoma causes intermittent unilateral epistaxis unrelated to exercise. Intralesional formaldehyde is effective, but if the mass has eroded the cribriform plate the formaldehyde reaches the brain and causes fatal neurologic injury — so advanced imaging comes first. EIPH, by contrast, is exercise-associated and diagnosed by siderophages on BAL.'
  });

  Q.push({
    m:'equine',
    stem:'A 7-year-old Quarter Horse mare descended from Impressive collapses after being trailered. She is weak with muscle fasciculations. Serum potassium is 7.2 mEq/L.',
    lead:'What are the three components of emergency treatment?',
    a:'Sodium bicarbonate IV, dextrose IV ± insulin, and calcium borogluconate IV',
    wrong:['Calcium borogluconate IV, potassium chloride IV, and furosemide','Dexamethasone IV, dextrose IV, and acetazolamide','Sodium bicarbonate IV, potassium chloride IV, and dantrolene'],
    why:'HYPP is an autosomal dominant sodium channel mutation in Quarter Horses tracing to Impressive; the muscle stays depolarized and potassium leaks out. Bicarbonate drives K⁺ into cells in exchange for H⁺, dextrose ± insulin does the same, and calcium stabilizes the myocardium against the hyperkalemia. Long term: a low-potassium diet and acetazolamide.'
  });

  Q.push({
    m:'equine',
    stem:'A 6-month-old foal in a boarding barn has a chronic cough and mild nasal discharge and has been slow to grow. Ultrasound of the thorax shows multiple peripheral abscesses. A transtracheal wash shows gram-positive pleomorphic rods within macrophages.',
    lead:'What is the treatment, and what warning must the owner receive?',
    a:'A macrolide plus rifampin — and the mare must not ingest the foal\'s medication, which causes fatal colitis in adult horses',
    wrong:['A macrolide plus rifampin — and the foal must be isolated because the organism is contagious to other foals','Trimethoprim-sulfa plus rifampin — and the mare should be treated prophylactically','Ceftiofur alone — and no special precautions are needed'],
    why:'Rhodococcus equi causes pyogranulomatous pneumonia with abscesses in foals 1–4 months, with insidious onset until they crash. Macrolides plus rifampin is the treatment, but macrolides cause fatal colitis in adult horses — the mare can be poisoned by grooming the foal or licking its mouth after dosing. Gloves and separation after dosing.'
  });

  Q.push({
    m:'equine',
    stem:'A 3-year-old Thoroughbred in race training makes a loud whistling noise on inspiration and tires early. Resting endoscopy shows failure of the left arytenoid cartilage to abduct fully.',
    lead:'What is the surgical treatment?',
    a:'Prosthetic laryngoplasty ("tie-back")',
    wrong:['Tie-forward procedure','Transection of the aryepiglottic fold','Fenestration of the median septum of the guttural pouch'],
    why:'Left recurrent laryngeal neuropathy — "roaring" — causes an inspiratory noise and exercise intolerance in large breeds, and the laryngoplasty holds the arytenoid abducted. The tie-forward treats dorsal displacement of the soft palate, which makes an expiratory gurgle; fold transection treats epiglottic entrapment; septal fenestration treats guttural pouch tympany.'
  });

  Q.push({
    m:'equine',
    stem:'An 18-year-old mare has a long curly coat that fails to shed in summer, regional fat deposits, muscle wasting, PU/PD, and two episodes of laminitis.',
    lead:'What is the underlying pathophysiology and the treatment?',
    a:'Loss of dopaminergic inhibition of the pars intermedia — treat with pergolide, a dopamine agonist',
    wrong:['Excess dopaminergic inhibition of the pars intermedia — treat with domperidone, a dopamine antagonist','Insulin dysregulation alone — treat with levothyroxine and diet','A pituitary pars distalis adenoma secreting ACTH — treat with trilostane'],
    why:'PPID is a loss of dopamine production by hypothalamic neurons that normally inhibit the pars intermedia, so POMC-derived hormone output goes unrestrained. Pergolide replaces the missing inhibition. This is the mirror image of fescue toxicosis, where excess dopamine agonism from ergopeptine alkaloids is treated with the antagonist domperidone.'
  });

  Q.push({
    m:'equine',
    stem:'A mare in her 11th month of gestation grazing endophyte-infected tall fescue has still not foaled. When she finally does, the placenta is thickened and separates prematurely, and she produces no milk.',
    lead:'What is the treatment for the agalactia?',
    a:'Domperidone — a dopamine antagonist that restores prolactin secretion',
    wrong:['Pergolide — a dopamine agonist that restores prolactin secretion','Oxytocin — to stimulate milk letdown','Dexamethasone — to reduce placental inflammation'],
    why:'Fescue endophyte produces ergopeptine alkaloids that are dopamine AGONISTS; dopamine suppresses prolactin, so the mare cannot lactate and gestation is prolonged. The treatment is therefore a dopamine ANTAGONIST. Prevention is removing pregnant mares from fescue 60–90 days before foaling.'
  });

  Q.push({
    m:'equine',
    stem:'A horse in Texas is found dead in a pasture. Two others are colicky with hematuria and are repeatedly dunking their muzzles in the water trough. The hay is second-cutting alfalfa purchased recently. Serum calcium and magnesium are markedly low.',
    lead:'What is the toxin?',
    a:'Cantharidin — blister beetles baled into the alfalfa',
    wrong:['Ionophore contamination of the feed','Red maple leaf ingestion','Nitrate toxicity from the hay'],
    why:'Cantharidin is a potent vesicant that damages every epithelium it contacts — hence renal disease, hemorrhagic cystitis with hematuria, oral ulceration, and peracute death. Muzzle-dunking to soothe oral pain is the pathognomonic behavior, and calcium and magnesium fall dramatically. Mortality is high; treatment is supportive.'
  });

  Q.push({
    m:'equine',
    stem:'A yearling colt has been eating from a feed bin that was previously used for cattle rations. He develops colic and sweating, and an echocardiogram 3 weeks later shows markedly reduced fractional shortening with a dilated left ventricle.',
    lead:'What is the toxin, and what determines the prognosis?',
    a:'An ionophore such as monensin — prognosis is judged by fractional shortening on echocardiography',
    wrong:['An ionophore such as monensin — prognosis is judged by serum cardiac troponin I alone','Fumonisin — prognosis is judged by the extent of white matter necrosis','Selenium toxicosis — prognosis is judged by hoof wall separation'],
    why:'Horses are uniquely sensitive to ionophores, which are used in cattle as coccidiostats and growth promoters — cross-contaminated feed is the classic route. They cause myocardial necrosis and subsequent dilated cardiomyopathy, so echocardiographic fractional shortening determines prognosis. There is no antidote; empty the GI tract with mineral oil, charcoal, and fluids.'
  });

  Q.push({
    m:'equine',
    stem:'A 4-year-old horse in central California grazing a poor, weedy pasture through a dry summer develops persistent chewing movements, tongue protrusion, and an inability to prehend or swallow feed. He stands over a full feed tub and is losing weight rapidly.',
    lead:'What is the diagnosis and prognosis?',
    a:'Yellow star thistle toxicosis — nigropallidal encephalomalacia, and the prognosis is grave',
    wrong:['Botulism — good prognosis with antitoxin and nursing','Lead toxicosis — good prognosis with calcium EDTA','Guttural pouch mycosis — fair prognosis with surgical management'],
    why:'Yellow star thistle and Russian knapweed destroy the globus pallidus and substantia nigra after prolonged grazing, typically in California and the West. The two signs are tremor and dysphagia — the horse physically cannot prehend food and starves with a full tub. The lesion is irreversible, so euthanasia is the answer.'
  });

  Q.push({
    m:'equine',
    stem:'A 4-month-old foal is presented for poor growth. A fecal float shows a heavy burden of large, thick-shelled, round ascarid eggs. The owner wants the strongest available dewormer.',
    lead:'What should you use and why?',
    a:'Fenbendazole for 5 days — a benzimidazole is not a paralytic, so worms die slowly and pass gradually',
    wrong:['Ivermectin once — the macrocyclic lactones are most effective against ascarids','Moxidectin once — it has the longest tissue persistence','Pyrantel at a double dose — to also cover tapeworms'],
    why:'Parascaris equorum is the number one parasite of foals 2–5 months. The danger is a heavy burden plus a rapidly paralytic drug: mass die-off causes small intestinal impaction or rupture, a well-known cause of post-deworming colic and death. Fenbendazole kills slowly. Ascarids have also developed macrocyclic lactone resistance.'
  });

  Q.push({
    m:'equine',
    stem:'A 12-year-old gelding has recurrent episodes of spasmodic colic. At surgery for the most recent episode, an ileocecal intussusception is found. The horse is on a year-round ivermectin rotation.',
    lead:'What parasite is most likely, and why did the deworming program miss it?',
    a:'Anoplocephala perfoliata — ivermectin is not effective against tapeworms',
    wrong:['Cyathostomes — ivermectin does not reach encysted larvae','Strongylus vulgaris — ivermectin does not reach migrating larvae','Parascaris equorum — the horse is too old for meaningful immunity'],
    why:'Anoplocephala congregates at the ileocecal junction, causing impaction and intussusception, and is a recognized cause of spasmodic colic. Ivermectin covers strongyles, ascarids, Dictyocaulus, Onchocerca, bots, and heartworm — but NOT cestodes. Use praziquantel or a double dose of pyrantel. Oribatid mites are the intermediate host.'
  });

  Q.push({
    m:'equine',
    stem:'A 3-day-old foal is dull and not nursing well. It was born unobserved in a pasture. Serum IgG is 320 mg/dL. Blood culture is pending.',
    lead:'What is the most likely septicemic organism?',
    a:'E. coli',
    wrong:['Streptococcus equi subsp. zooepidemicus','Rhodococcus equi','Actinobacillus equuli'],
    why:'E. coli is the most common cause of neonatal septicemia in foals, almost always on a background of failure of passive transfer. IgG under 400 mg/dL is complete FPT; under 800 is the threshold overall. The equine placenta is epitheliochorial and diffuse, so no antibody crosses in utero — the foal needs 1.5–2 L of colostrum within 18 hours, before gut closure at about 24 hours.'
  });

  /* ==================== BOVINE — EXPANDED ==================== */

  Q.push({
    m:'bovine',
    stem:'A 4-year-old Holstein calved 12 days ago. She is off feed, producing less milk, and has ketones in her urine. On auscultation with simultaneous percussion you hear a high-pitched resonant ping in the left paralumbar region between ribs 9 and 13.',
    lead:'What is the diagnosis?',
    a:'Left displaced abomasum',
    wrong:['Right displaced abomasum','Cecal dilatation','Rumen void from vagal indigestion'],
    why:'The classic LDA is a fresh, high-producing dairy cow in negative energy balance, and it travels with ketosis, hypocalcemia, and metritis. The left-sided ping between ribs 9 and 13 is the finding. An RDA pings on the right and can progress to volvulus, which is an emergency. Correct the displacement surgically and treat the concurrent disease.'
  });

  Q.push({
    m:'bovine',
    stem:'A mature cow is dull with a distended, papple-shaped abdomen and scant feces. She has a history of hardware disease treated 2 months ago. Her heart rate is 44 beats per minute.',
    lead:'Which finding points to the diagnosis?',
    a:'The bradycardia — vagal indigestion',
    wrong:['The scant feces — abomasal impaction','The papple shape alone — free gas bloat','The history of hardware disease — chronic peritonitis'],
    why:'Vagal indigestion is outflow failure at the pylorus or reticulo-omasal orifice from vagal nerve damage, often after hardware disease or an abscess. It produces the papple-shaped abdomen AND bradycardia — the bradycardia is the tell, because a sick cow would otherwise be tachycardic.'
  });

  Q.push({
    m:'bovine',
    stem:'A high-producing dairy cow is found dead. On the days before, she had been coughing with blood-flecked nasal discharge and had jugular distension. Necropsy shows a liver abscess eroding into the caudal vena cava and multiple pulmonary abscesses, one of which has ruptured into a bronchus.',
    lead:'What organism and what upstream event started this?',
    a:'Fusobacterium necrophorum, entering the portal circulation through a rumen wall damaged by grain overload',
    wrong:['Trueperella pyogenes, seeded hematogenously from a chronic mastitis','Mannheimia haemolytica, extending from a bronchopneumonia','Mycobacterium bovis, from a primary pulmonary focus'],
    why:'The chain is grain overload → rumenitis → F. necrophorum into the portal circulation → liver abscess → erosion into the caudal vena cava → septic emboli to the lungs → pulmonary abscess rupturing into an airway. The three signs are right-sided heart failure, epistaxis, and hemoptysis, and cows are often found dead from exsanguination.'
  });

  Q.push({
    m:'bovine',
    stem:'A 3-day-old beef calf has profuse watery diarrhea and is severely dehydrated and acidotic. Several other calves born the same week are similarly affected. The oldest affected calf is 4 days old.',
    lead:'What is the most likely agent?',
    a:'Enterotoxigenic E. coli',
    wrong:['Rotavirus','Coronavirus','Cryptosporidium'],
    why:'Calf diarrhea is answered by age. Under 4 days is ETEC, using the K99/F5 fimbrial adhesin to produce a secretory watery diarrhea with profound dehydration and acidosis. Rotavirus starts at 5 days, coronavirus at 4–30 days, Cryptosporidium at 1–3 weeks, and Salmonella and coccidia after 21 days.'
  });

  Q.push({
    m:'bovine',
    stem:'The best-grown, fastest-gaining calf in a group of 2-week-old beef calves is found dead with no premonitory signs. Necropsy shows a hemorrhagic, necrotizing segment of small intestine. The producer wants to know how it spread from the other calves.',
    lead:'What do you tell him?',
    a:'Clostridium perfringens is not transmitted between calves — it comes from soil and normal gut flora and proliferates when management changes',
    wrong:['It spreads by the fecal–oral route between calves and the pen must be depopulated','It spreads through contaminated colostrum from the dam','It spreads by biting flies from the affected calf'],
    why:'This is enterotoxemia in the classic "best calf in the pen." Unlike the other calf scours agents, C. perfringens is not contagious — it is a normal inhabitant that proliferates with dietary or management change. The same point holds in adult cattle. Prevention is dam vaccination and avoiding abrupt intake changes.'
  });

  Q.push({
    m:'bovine',
    stem:'A 3-year-old cow is blind, head pressing, and having intermittent seizures. Her menace response is absent but her pupillary light reflexes are intact. The herd has recently been switched to a ration containing a high proportion of distillers grains, and the water source is high in sulfate.',
    lead:'What is the diagnosis and treatment?',
    a:'Polioencephalomalacia — thiamine IV',
    wrong:['Lead toxicosis — calcium EDTA','Listeriosis — procaine penicillin','Nervous coccidiosis — amprolium and supportive care'],
    why:'Central blindness — menace absent, PLR intact — with head pressing and star-gazing, bilaterally symmetric, is PEM. The two most common causes in cattle are thiamine deficiency from thiaminase-producing rumen flora and excess sulfur from high-sulfate water or distillers grains; high-dose amprolium is the third. The response to IV thiamine is rapid and is itself diagnostic.'
  });

  Q.push({
    m:'bovine',
    stem:'A 2-year-old heifer is circling persistently to the left. She has a drooped left ear, a drooped left lip, and is drooling. The herd has been fed silage from the bottom of a poorly packed bunker.',
    lead:'What will the CSF show, and what is the treatment?',
    a:'Mononuclear pleocytosis with elevated protein — treat with high-dose procaine penicillin',
    wrong:['Neutrophilic, xanthochromic CSF — treat with oxytetracycline','Eosinophilic pleocytosis — treat with fenbendazole and anti-inflammatories','Normal CSF — treat with thiamine'],
    why:'Listeria monocytogenes from spoiled silage above pH 5.5 ascends the trigeminal nerve to the brainstem, producing UNILATERAL cranial nerve deficits and circling toward the lesion. CSF is mononuclear. Contrast TEME, where fever and respiratory disease come first and the CSF is neutrophilic and xanthochromic — that sequence and that CSF are the discriminators.'
  });

  Q.push({
    m:'bovine',
    stem:'A beef herd in California\'s foothills has a cluster of late-term abortions. The aborted fetuses have markedly enlarged lymph nodes and spleen, and the thymus is essentially destroyed.',
    lead:'What is the most likely cause?',
    a:'Epizootic bovine abortion ("foothill abortion"), transmitted by Ornithodoros coriaceus',
    wrong:['Neospora caninum, transmitted by dog feces','Brucella abortus, with a retained placenta','Mycotic abortion from Aspergillus'],
    why:'The destroyed thymus with enlarged lymphoid tissue in a late-term aborted fetus in the California foothills is epizootic bovine abortion, vectored by a soft tick. Neospora is the leading cause of bovine abortion worldwide but does not give this fetal lymphoid picture; mycotic abortion gives a thick leathery placenta plus ring-like plaques around the fetal eyes.'
  });

  Q.push({
    m:'bovine',
    stem:'A dairy is investigating poor reproductive performance. Records show a first-service conception rate of 32% and services per conception of 3.4. Body condition, ration, and disease incidence are all within target.',
    lead:'Where should you look first?',
    a:'Heat detection, insemination technique, and semen handling',
    wrong:['Subclinical endometritis in the postpartum cows','Trace mineral deficiency affecting oocyte quality','Bull fertility, by scrotal circumference measurement'],
    why:'The target first-service conception rate is 50–60% with 1.5–2.0 services per conception. A low first-service rate together with high services-per-conception points to a problem with heat detection, insemination technique, or semen handling rather than with the cows themselves — poor breeding technique specifically depresses the first-service conception rate.'
  });

  Q.push({
    m:'bovine',
    stem:'A fresh dairy cow has a sudden, severe drop in milk production. The udder is soft and flaccid with no heat, pain, or swelling, and the milk is slightly blood-tinged. She is febrile.',
    lead:'What is the most likely cause?',
    a:'Leptospirosis — "flabby bag" mastitis',
    wrong:['Coliform mastitis from E. coli','Mycoplasma bovis mastitis','Staphylococcus aureus mastitis'],
    why:'"Flabby bag" is the leptospirosis presentation: sudden agalactia with a soft flaccid udder and no inflammation, often with blood-tinged milk and fever. Coliform mastitis instead gives a hot or cold swollen quarter with watery secretion and endotoxic shock. Lepto also causes late abortion, weak calves, and agalactia — and it is zoonotic.'
  });

  Q.push({
    m:'bovine',
    stem:'A cow is found dead in a pasture with unclotted blood oozing from the nose and anus. Rigor mortis has not developed. Two other cows died suddenly in the same field this week.',
    lead:'What is the correct diagnostic approach?',
    a:'Collect vitreous humor or an ear-scrape blood smear — do NOT open the carcass',
    wrong:['Perform a full field necropsy and submit spleen and liver','Open the abdomen only, and submit intestinal contents','Collect a jugular blood sample from an in-contact cow and submit serology first'],
    why:'Anthrax. Sudden death with unclotted blood and no rigor mortis is the picture, and opening the carcass exposes the vegetative organism to oxygen, producing environmentally persistent spores that contaminate the site for decades. Sample the vitreous humor or take a smear from an ear scrape, and report — it is reportable and zoonotic.'
  });

  Q.push({
    m:'bovine',
    stem:'A group of cattle housed adjacent to a sheep flock develops high fever, bilateral corneal opacity with uveitis, profuse oculonasal discharge, erosive stomatitis, generalized lymphadenopathy, and diarrhea. All affected animals die.',
    lead:'What is the most likely diagnosis?',
    a:'Malignant catarrhal fever',
    wrong:['Bovine viral diarrhea — mucosal disease','Infectious bovine rhinotracheitis','Bluetongue'],
    why:'The six-sign constellation with bilateral corneal opacity, plus the history of contact with sheep, is MCF from ovine herpesvirus-2. It is essentially always fatal and is reportable. Mucosal disease affects PI animals individually rather than a group in sheep contact, and IBR gives a red muzzle with purulent discharge and no corneal opacity.'
  });

  /* ==================== SWINE — EXPANDED ==================== */

  Q.push({
    m:'swine',
    stem:'A 7-week-old pig in a nursery is found dead. Two pen-mates are febrile, depressed, and reluctant to move, with swollen joints. Necropsy of the dead pig shows fibrin covering the pericardium, pleura, peritoneum, and joint surfaces.',
    lead:'What is the most likely agent and the treatment?',
    a:'Glaesserella parasuis — treat with penicillin',
    wrong:['Mycoplasma hyorhinis — treat with tylosin','Streptococcus suis — treat with penicillin','Actinobacillus pleuropneumoniae — treat with ceftiofur'],
    why:'Fibrinous polyserositis with septicemia and sudden death in a 6–8 week old pig is Glässer\'s disease; penicillin is the treatment. M. hyorhinis also gives polyserositis with arthritis but in pigs under 10 weeks with colostrum deprivation as the setup, and mycoplasmas do not respond to penicillin. Strep suis targets meninges, joints, and heart valves.'
  });

  Q.push({
    m:'swine',
    stem:'A 5-month-old grow-finish pig has a chronic mild lameness localized to the joints, with no fever and no systemic illness. The barn has poor ventilation and high ammonia. The pig was treated with penicillin without improvement.',
    lead:'What is the most likely agent and the correct drug?',
    a:'Mycoplasma hyosynoviae — tylosin or lincomycin',
    wrong:['Mycoplasma hyorhinis — tylosin or lincomycin','Erysipelothrix rhusiopathiae — a longer course of penicillin','Streptococcus suis — ceftiofur'],
    why:'Synoviae stays in the synovium: M. hyosynoviae affects 4–6 month old pigs with joint-only mild lameness and no systemic disease, associated with ventilation and stress, and it is resistant to penicillin. M. hyorhinis is the younger, systemic one — under 10 weeks with polyserositis and colostrum deprivation.'
  });

  Q.push({
    m:'swine',
    stem:'A barn\'s water line froze overnight and was restored the next morning, when pigs drank freely. Several are now head pressing, blind, and seizuring, and some are sitting on their haunches like dogs. Histopathology of the brain shows perivascular cuffing with eosinophils.',
    lead:'What is the diagnosis, and what is the critical management point?',
    a:'Salt poisoning / water deprivation — reintroduce water slowly and in small amounts',
    wrong:['Salt poisoning / water deprivation — give free access to water and IV hypotonic fluids','Pseudorabies — depopulate and report','Edema disease — reduce dietary protein and reduce weaning stress'],
    why:'The disease is really water deprivation, and the damage occurs on rehydration: sodium accumulates, the brain generates idiogenic osmoles, and when water is suddenly restored the brain over-swells. Perivascular eosinophilic cuffing is pathognomonic and pigs are the most affected species. Free access to water is what kills them.'
  });

  Q.push({
    m:'swine',
    stem:'A nursery pig 2 weeks post-weaning is found dead, one of several in the top weight group. Others have swollen eyelids, an odd hoarse squeal, and ataxia with paddling. There is no diarrhea. Necropsy shows edema of the gastric submucosa and mesocolon.',
    lead:'What is the diagnosis?',
    a:'Edema disease — Shiga toxin-producing F18 E. coli',
    wrong:['Streptococcus suis meningitis','Mulberry heart disease','Porcine polio (Teschovirus)'],
    why:'F18 fimbrial receptors develop only after weaning, and Stx2e causes an angiopathy rather than secretory diarrhea — hence eyelid and forehead edema, gastric submucosal and mesocolon edema, laryngeal edema causing the squeaky squeal, ataxia, and sudden death in the best-doing pigs. Management is reducing weaning stress and abrupt feed changes.'
  });

  Q.push({
    m:'swine',
    stem:'A rapidly growing nursery pig — one of the best in the pen — is found dead with no prior signs. Necropsy shows transmural hemorrhages giving the heart a mottled, mulberry-like appearance.',
    lead:'What is the deficiency, and what two other syndromes does it cause?',
    a:'Vitamin E and selenium — hepatosis dietetica in the liver and white muscle disease in skeletal muscle',
    wrong:['Copper — swayback and enzootic ataxia','Thiamine — polioencephalomalacia and cortical blindness','Iron — anemia and hyperkalemic sudden death'],
    why:'Mulberry heart disease is vitamin E and selenium deficiency, and the same deficiency produces hepatosis dietetica and white muscle disease in different tissues. Treat and prevent with vitamin E injection and dietary selenium. Note the related trap: iron dextran injection into a selenium-deficient piglet causes acute muscle damage, hyperkalemia, and sudden death.'
  });

  Q.push({
    m:'swine',
    stem:'A finishing barn has a sharp rise in mortality over 48 hours. Affected pigs are open-mouth breathing with bloody froth at the nostrils and die within hours. Necropsy shows a fibrinohemorrhagic necrotizing pleuropneumonia with dorsocaudal lung lesions.',
    lead:'What is the most likely agent?',
    a:'Actinobacillus pleuropneumoniae',
    wrong:['Mycoplasma hyopneumoniae','PRRS virus','Pasteurella multocida'],
    why:'Peracute death in growing pigs with bloody nasal froth and dorsocaudal fibrinohemorrhagic necrotizing pleuropneumonia is APP. M. hyopneumoniae instead causes a chronic dry bark cough with cranioventral consolidation and is the great enabler of secondary infection rather than a rapid killer.'
  });

  Q.push({
    m:'swine',
    stem:'A herd veterinarian submits serum from a group of finishing pigs and the PRRS ELISA returns positive. The herd was vaccinated 4 months ago. The producer asks whether the herd is currently infected.',
    lead:'What can you conclude from the positive ELISA?',
    a:'Only that the pigs have been exposed — the ELISA cannot distinguish vaccination from field infection, or indicate protection',
    wrong:['The pigs are actively infected and shedding','The pigs are protected by vaccinal immunity','The pigs were infected with a field strain, since vaccine antibody wanes by 3 months'],
    why:'A positive PRRS ELISA means exposure, not active infection and not protection. To establish current infection use PCR on serum, oral fluids, or processing fluids, and sequence ORF5 to determine the strain — which matters because vaccine protection is strain-dependent.'
  });

  /* ================ SMALL RUMINANTS & CAMELIDS ================ */

  Q.push({
    m:'smallrum',
    stem:'A ewe carrying triplets is 3 weeks from lambing. She is off feed, dull, and slow to rise, with a sweet odor to her breath. Urine is strongly positive for ketones. Blood glucose is low.',
    lead:'What is the definitive treatment?',
    a:'Deliver the fetuses — by C-section or induction',
    wrong:['Propylene glycol alone until she eats voluntarily','IV calcium borogluconate and oral potassium','Dexamethasone to mobilize glucose and improve appetite'],
    why:'Pregnancy toxemia is negative energy balance driven by the glucose demand of multiple fetuses, so removing that demand is the definitive treatment. Propylene glycol, dextrose, and calcium support her, but if you leave the fetuses in place the drain continues. The parallel disease in cattle is ketosis and fat cow syndrome.'
  });

  Q.push({
    m:'smallrum',
    stem:'A flock of sheep was moved to a barn where the only available feed was a bagged ration purchased for the farm\'s beef cattle. Six weeks later two ewes die suddenly. Necropsy shows dark, gunmetal-colored kidneys and port wine-colored urine in the bladder.',
    lead:'What is the toxicosis and the treatment?',
    a:'Copper toxicosis — D-penicillamine and ammonium tetrathiomolybdate with fluids',
    wrong:['Copper deficiency — copper supplementation','Nitrate toxicosis — methylene blue','Bacillary hemoglobinuria — penicillin and fluke control'],
    why:'Sheep are uniquely sensitive to copper and pigs are resistant — feeding cattle or horse rations to sheep is the classic cause, because copper levels safe for cattle are lethal to sheep. Copper accumulates silently in the liver, then releases in a hemolytic crisis: gunmetal kidneys and port wine urine are the necropsy signature.'
  });

  Q.push({
    m:'smallrum',
    stem:'A 3-day-old lamb is found dead. A littermate is peracutely ill with bloody diarrhea and dies within the hour. Necropsy shows hemorrhagic, necrotizing enteritis. The ewes were not vaccinated pre-lambing.',
    lead:'Which clostridial type is this, and why are neonates specifically affected?',
    a:'C. perfringens type C — neonates do not yet produce trypsin, which would destroy beta toxin, and colostrum contains trypsin inhibitors',
    wrong:['C. perfringens type D — epsilon toxin is only absorbed through an immature gut','C. perfringens type A — alpha toxin requires a milk substrate','C. novyi type B — the neonatal liver provides an anaerobic niche'],
    why:'Type C produces alpha PLUS beta toxin, and beta toxin is destroyed by pancreatic trypsin — which neonates do not yet make, and which colostral trypsin inhibitors further block. That is why the window is 1–3 days. Type D is the "pulpy kidney" enterotoxemia of the fastest-growing lamb on grain.'
  });

  Q.push({
    m:'smallrum',
    stem:'A veterinarian plans to sedate a ram for a minor procedure and reaches for xylazine at the dose she uses in cattle.',
    lead:'What is the concern?',
    a:'Sheep and goats are exquisitely sensitive to alpha-2 agonists — xylazine causes pulmonary edema and fatal hypoxemia',
    wrong:['Xylazine causes fatal bloat in small ruminants by abolishing eructation','Xylazine is contraindicated because it causes uterine contraction','Xylazine has no analgesic effect in small ruminants and is simply ineffective'],
    why:'Xylazine causes severe pulmonary edema and hypoxemia in sheep and goats, which can be fatal — use it with great caution and at much reduced doses. The other small ruminant drug danger to know is amprolium, a thiamine analog that at high doses precipitates polioencephalomalacia.'
  });

  Q.push({
    m:'camelids',
    stem:'A 4-year-old alpaca is presented for weight loss and lethargy. PCV is 14%. Fecal examination is negative for Haemonchus. Endoscopy is unremarkable but the animal has been hospitalized and stressed for a week, and a blood smear shows small organisms on the surface of red blood cells.',
    lead:'What is the diagnosis and treatment?',
    a:'Mycoplasma haemolamae — oxytetracycline',
    wrong:['Haemonchus contortus — moxidectin','C3 ulceration with GI blood loss — omeprazole','Eperythrozoon-like contaminant — no treatment needed'],
    why:'The three causes of anemia in camelids are C3 ulcer, Haemonchus, and Mycoplasma haemolamae. The last is a hemotropic bacterium attached to the red cell surface; many animals are asymptomatic carriers until stress, immunosuppression, or concurrent illness triggers severe hemolysis. Treat with oxytetracycline.'
  });

  Q.push({
    m:'camelids',
    stem:'A newborn cria is in respiratory distress and cannot nurse. It breathes only when its mouth is forced open, and no air movement can be detected at either nostril.',
    lead:'What is the most likely diagnosis?',
    a:'Choanal atresia',
    wrong:['Cleft palate','Congenital tracheal stenosis','Aspiration pneumonia from dystocia'],
    why:'Choanal atresia is the most common congenital malformation in camelids, and because camelids are obligate nasal breathers it presents as respiratory distress with inability to nurse. Prognosis is guarded; surgical correction is difficult.'
  });

  Q.push({
    m:'camelids',
    stem:'A hospitalized llama with pneumonia is to be treated. A technician suggests tilmicosin, which the practice keeps for bovine respiratory disease.',
    lead:'What is your response?',
    a:'Tilmicosin is fatal in camelids and must never be used — it causes dose-dependent cardiovascular collapse with no antidote',
    wrong:['Tilmicosin is acceptable in camelids at half the bovine dose','Tilmicosin is acceptable but must be given intravenously rather than subcutaneously','Tilmicosin is ineffective in camelids but not dangerous'],
    why:'Tilmicosin is cardiotoxic and fatal in camelids — and in horses, goats, swine, and humans. There is no effective antidote. Handle the bottle carefully: accidental human self-injection has been fatal.'
  });

  /* ==================== LARGE ANIMAL TOXICOLOGY ==================== */

  Q.push({
    m:'latox',
    stem:'Several cows are found dead near a drought-stressed cornfield they broke into overnight. Blood drawn from a dying animal is chocolate brown and does not turn red on exposure to air.',
    lead:'What is the toxicosis and the treatment?',
    a:'Nitrate toxicity — methylene blue',
    wrong:['Cyanide toxicity — sodium thiosulfate and sodium nitrite','Carbon monoxide — oxygen therapy','Blue-green algae — supportive care only'],
    why:'Brown blood means methemoglobinemia, which is nitrate; drought-stressed and heavily fertilized forage accumulates it. Treat with methylene blue. Cyanide is the direct contrast — bright red blood and mucous membranes with a bitter almond odor of the GI tract, treated with sodium thiosulfate, sodium nitrite, and methylene blue.'
  });

  Q.push({
    m:'latox',
    stem:'A group of cattle grazing a pasture containing chokecherry and Johnson grass after a frost are found dead. Mucous membranes and blood are bright cherry red, and the rumen contents have a faint bitter almond odor.',
    lead:'What is the mechanism and the treatment?',
    a:'Cyanide blocks cellular respiration so hemoglobin cannot release oxygen — treat with sodium thiosulfate, sodium nitrite, and methylene blue',
    wrong:['Nitrate oxidizes hemoglobin to methemoglobin — treat with methylene blue alone','Carbon monoxide binds hemoglobin with high affinity — treat with 100% oxygen','Grayanotoxin blocks sodium channels — treat with atropine and fluids'],
    why:'Cyanogenic plants — chokecherry, arrow grass, Sudan grass, Johnson grass, sorghum — release cyanide, which blocks cytochrome oxidase so oxygen cannot be extracted. The blood stays oxygenated and bright red. Carbon monoxide is the other cause of cherry-red membranes.'
  });

  Q.push({
    m:'latox',
    stem:'A beef herd grazing rangeland develops abortions in the last trimester. The pasture has a heavy stand of pine, and cattle have been sheltering under the trees during a period of cold, windy weather. Aborting cows retain their placentas.',
    lead:'What is the toxic principle?',
    a:'Isocupressic acid from ponderosa pine needles',
    wrong:['Anagyrine from lupine','Swainsonine from locoweed','Cyclopamine from false hellebore'],
    why:'Ponderosa pine needle abortion occurs in the last trimester and is accompanied by retained placenta and weak calves; cattle eat needles most when sheltering in cold weather. Lupine causes crooked calf disease at days 40–70, and cyclopamine causes cyclopia when eaten at day 14 of gestation.'
  });

  Q.push({
    m:'latox',
    stem:'A flock of sheep grazing a weedy western pasture produces several lambs with a single central eye and severe craniofacial deformity.',
    lead:'What plant is responsible, and when in gestation was it eaten?',
    a:'False hellebore (Veratrum californicum) — cyclopamine, eaten around day 14 of gestation',
    wrong:['False hellebore — cyclopamine, eaten around day 30 of gestation','Lupine — anagyrine, eaten at days 40–70','Locoweed — swainsonine, eaten throughout gestation'],
    why:'The "monkey-faced lamb" is cyclopamine teratogenesis, and timing determines the defect: day 14 gives craniofacial deformities including cyclopia, while day 30 gives limb and metacarpal or metatarsal shortening. Lupine at days 40–70 gives arthrogryposis and cleft palate — crooked calf disease.'
  });

  Q.push({
    m:'latox',
    stem:'A cow grazing a pasture with a heavy weed burden is examined for weight loss and abortion. Her breath and urine have a distinctly mousey odor.',
    lead:'What toxin does this suggest?',
    a:'Coniine — poison hemlock',
    wrong:['Cicutoxin — water hemlock','Ptaquiloside — bracken fern','Grayanotoxin — rhododendron'],
    why:'The mouse-urine odor of the breath and urine is the pathognomonic sign of poison hemlock (Conium maculatum); coniine is a nicotinic agonist causing a depolarizing block, and it is also a teratogen causing arthrogryposis. Water hemlock, by contrast, causes violent grand mal seizures and is one of the most acutely lethal plants in North America.'
  });

  Q.push({
    m:'sa-tox',
    stem:'A 6 kg terrier chewed through a box of green rodenticide pellets 4 days ago. She is now lethargic with pale mucous membranes, a large subcutaneous hematoma over the shoulder, and dyspnea. PT is markedly prolonged; aPTT is mildly prolonged. Platelet count is normal.',
    lead:'Which rodenticide is most consistent with these findings, and what is the antidote?',
    a:'Brodifacoum — vitamin K1 for 3–4 weeks',
    wrong:['Bromethalin — mannitol for cerebral edema','Cholecalciferol — fluids, furosemide and bisphosphonates','Zinc phosphide — gastric alkalinization and supportive care'],
    why:'PT prolongs first in anticoagulant rodenticide toxicosis because factor VII sits in the extrinsic pathway and has the shortest half-life; aPTT follows. Brodifacoum is the second-generation product, so vitamin K1 must run 3–4 weeks rather than the shorter warfarin course. Bromethalin is the discriminator to exclude — it causes tremors, ataxia and paresis with a normal PT and no coagulopathy at all.'
  });

  Q.push({
    m:'sa-tox',
    stem:'A 3-year-old Labrador is found staggering next to a chewed bait station. Over 6 hours he develops tremors, hindlimb paresis and severe ataxia. PT, aPTT and platelet count are all normal, and serum calcium is 10.1 mg/dL.',
    lead:'What is the most likely toxicant?',
    a:'Bromethalin',
    wrong:['Brodifacoum','Cholecalciferol','Strychnine'],
    why:'Bromethalin uncouples oxidative phosphorylation in the CNS, producing cerebral edema with tremors, ataxia and paresis — and, critically, no coagulopathy. A normal PT rules out the anticoagulants, and a normal calcium rules out cholecalciferol. There is no antidote; treat with decontamination and mannitol.'
  });

  Q.push({
    m:'sa-tox',
    stem:'A cat is presented 5 hours after being seen licking a puddle in the garage. She is depressed and polyuric. Chemistry shows azotemia, hyperglycemia and a low total calcium with a high anion gap metabolic acidosis. Urine sediment shows numerous dumbbell-shaped crystals.',
    lead:'What is the most appropriate treatment, and what limits its usefulness here?',
    a:'Fomepizole — but the feline window is roughly 3 hours from ingestion',
    wrong:['Ethanol infusion — fomepizole is contraindicated in cats','Vitamin K1 — the crystalluria reflects hepatic injury','Calcium gluconate alone — correcting the hypocalcemia is definitive'],
    why:'The five classic ethylene glycol abnormalities are high anion gap acidosis, azotemia, hyperglycemia, polyuria progressing to oliguria, and hypocalcemia from oxalate chelation; calcium oxalate monohydrate crystals are the "picket fence"/dumbbell forms. Fomepizole competitively inhibits alcohol dehydrogenase and is preferred over ethanol because it adds no hyperosmolality, acidosis or CNS depression. It is used in cats at a higher dose, but must start within about 3 hours — this cat is already outside that window, which is why feline exposure carries a much worse prognosis.'
  });

  Q.push({
    m:'sa-tox',
    stem:'An indoor cat is presented for depression, hypersalivation, ataxia and generalized muscle tremors. The owner mentions she treated the cat last night with a spot-on flea product she had left over from her dog.',
    lead:'What is the treatment?',
    a:'Methocarbamol and bathe the patient to remove the source',
    wrong:['Atropine and 2-PAM','N-acetylcysteine','Vitamin K1'],
    why:'Pyrethroids prolong sodium channel depolarization and cats cannot clear them because they lack adequate glucuronidation — hence the classic history of a dog product applied to a cat. Methocarbamol is the centrally acting muscle relaxant used for tremorgenic toxicoses, and decontamination by bathing removes ongoing absorption. Atropine plus 2-PAM belongs to organophosphates, which present with SLUDGE signs instead.'
  });

  Q.push({
    m:'sa-tox',
    stem:'A farm dog is presented recumbent with rigid extensor spasm of all four limbs, giving a sawhorse posture. Touching him or clapping triggers a violent tetanic episode. He was seen digging in a neighbor’s garden where bait had been placed for gophers.',
    lead:'What is the mechanism of this toxin?',
    a:'Antagonism of glycine, the inhibitory neurotransmitter of the spinal cord and brainstem',
    wrong:['Decreased GABA and serotonin','Inhibition of acetylcholinesterase','Massive presynaptic acetylcholine release at the neuromuscular junction'],
    why:'Strychnine outcompetes glycine, so inhibition of the spinal motor neurons is lost and any sensory stimulus triggers rigid extensor spasm. Metaldehyde — the other bait — decreases GABA and serotonin and gives severe tremors and hyperthermia ("shake and bake") rather than stimulus-triggered rigidity. Both are treated with methocarbamol, but strychnine additionally demands a dark, quiet room.'
  });

  Q.push({
    m:'sa-tox',
    stem:'A 10 kg dog ate several pieces of sugar-free gum 45 minutes ago. On presentation he is weak and disoriented. Blood glucose is 38 mg/dL and potassium is 3.0 mEq/L.',
    lead:'What should be monitored for the next 72 hours in addition to glucose?',
    a:'Liver enzymes — high doses cause acute hepatic necrosis',
    wrong:['Serum calcium — xylitol chelates calcium','PT and aPTT — xylitol is a vitamin K antagonist','Methemoglobin — xylitol oxidizes hemoglobin'],
    why:'Xylitol triggers rapid, massive insulin release from the canine pancreas — a species-specific effect, absent in cats and humans — giving hypoglycemia, hypokalemia and seizures. At higher doses it also causes acute hepatic necrosis, so liver enzymes need monitoring for 72 hours after the acute hypoglycemia is managed with dextrose and potassium.'
  });

  Q.push({
    m:'sa-tox',
    stem:'A cat is presented with facial and paw edema, tachypnea, and mucous membranes that appear dark brown rather than pink. The owner gave a half tablet of a human pain reliever last night for a limp.',
    lead:'What is the antidote?',
    a:'N-acetylcysteine',
    wrong:['Methylene blue','Fomepizole','Pralidoxime (2-PAM)'],
    why:'Cats lack glucuronyl transferase, so acetaminophen metabolites accumulate and oxidize hemoglobin — producing methemoglobinemia with "muddy" brown blood, Heinz body anemia and the characteristic facial and paw edema. N-acetylcysteine replenishes glutathione; ascorbic acid is an adjunct. Methylene blue is itself on the Heinz body list and is not the answer in cats.'
  });

  Q.push({
    m:'sa-tox',
    stem:'An owner calls after her dog drank from a bucket of dilute bleach. The dog is drooling and has vomited once.',
    lead:'What is the correct advice?',
    a:'Dilute with milk or water and do NOT induce emesis',
    wrong:['Induce emesis with 3% hydrogen peroxide immediately','Give activated charcoal and induce emesis','Give apomorphine and refer for endoscopy'],
    why:'Emesis is contraindicated for corrosives — bleach, drain cleaners, strong acids and alkalis — because bringing the corrosive back up re-injures the esophagus and adds aspiration risk. The same rule applies to petroleum distillates, where aspiration pneumonitis is the danger. Dilution with milk or water is the correct first step.'
  });

  Q.push({
    m:'sa-tox',
    stem:'A cat is presented anuric 36 hours after the owner brought home a bouquet. Chemistry shows severe azotemia. The owner reports the cat chewed the leaves and got yellow pollen on her face.',
    lead:'Which plant is responsible?',
    a:'A true lily — Lilium or Hemerocallis species',
    wrong:['Peace lily — insoluble calcium oxalate crystals','Lily of the valley — cardiac glycosides','Dieffenbachia — insoluble calcium oxalate crystals'],
    why:'True lilies (Stargazer, Easter, Tiger, Asiatic) and daylilies cause acute renal failure in cats only; every part is toxic including pollen and vase water, and treatment is aggressive fluid diuresis for 48–72 hours. Peace and calla lilies are not true lilies — their insoluble oxalate crystals cause immediate oral pain and drooling, not renal failure. Lily of the valley behaves like digoxin toxicity with arrhythmias and hyperkalemia.'
  });

  Q.push({
    m:'sa-heme',
    stem:'A 2-year-old Doberman Pinscher bleeds excessively after an elective ovariohysterectomy. Platelet count is 240,000/µL, PT and aPTT are within reference range, and buccal mucosal bleeding time is markedly prolonged.',
    lead:'What is the most likely diagnosis?',
    a:'von Willebrand disease',
    wrong:['Hemophilia A','Immune-mediated thrombocytopenia','Disseminated intravascular coagulation'],
    why:'A normal platelet count with a prolonged BMBT points to a qualitative platelet defect, and von Willebrand disease is the most common inherited bleeding disorder of dogs with the Doberman as the classic breed — the factor is needed for platelet adhesion to subendothelial collagen. Hemophilia A prolongs aPTT and ACT with a normal PT and affects males; ITP would show a markedly low platelet count.'
  });

  Q.push({
    m:'sa-heme',
    stem:'A 5-year-old spayed female Cocker Spaniel is presented with icterus, tachypnea and a PCV of 13%. The smear shows marked polychromasia and numerous small, dense red cells lacking central pallor. A drop of blood mixed with saline shows persistent clumping.',
    lead:'Which finding on this smear is most specific for the diagnosis?',
    a:'Spherocytes',
    wrong:['Schistocytes','Heinz bodies','Howell-Jolly bodies'],
    why:'IMHA is defined by four findings: regenerative anemia, spherocytes, autoagglutination and a positive Coombs test. Spherocytes reflect partial phagocytic removal of antibody-coated membrane, which is an IMHA phenomenon — they are not a feature of ITP, which is diagnosed by the platelet count. Schistocytes would instead suggest DIC or another microangiopathy.'
  });

  Q.push({
    m:'sa-heme',
    stem:'A 4 kg cat has a PCV of 12% from chronic blood loss and you want to raise it to 25% with packed red cells.',
    lead:'What volume of pRBCs is required?',
    a:'52 mL',
    wrong:['13 mL','26 mL','104 mL'],
    why:'The rule is 1 mL/kg of packed RBCs raises the PCV by 1%. The needed rise is 25 − 12 = 13%, so 4 kg × 1 mL/kg × 13 = 52 mL. This cat must also be blood-typed first: type B cats carry strong naturally occurring anti-A alloantibodies and can have a fatal reaction to type A blood within milliliters, with no prior sensitization required.'
  });

  Q.push({
    m:'sa-heme',
    stem:'A healthy 3-year-old Australian Shepherd has a pre-anesthetic CBC run before a dental. The report notes 68% band neutrophils with hyposegmented, band-shaped nuclei. The dog is bright, afebrile and clinically normal, and a recheck two weeks later is identical.',
    lead:'What is the explanation?',
    a:"Pelger-Huët anomaly",
    wrong:['Overwhelming sepsis with a degenerative left shift','Chédiak-Higashi syndrome','Chronic ehrlichiosis'],
    why:"Pelger-Huët anomaly is a benign inherited defect of nuclear segmentation seen in Australian Shepherds — the nuclei are hyposegmented but the chromatin is mature and coarsely clumped, and the dog is clinically well. The trap is reading it as an overwhelming left shift. Chédiak-Higashi is the color-dilute Persian cat with giant leukocyte granules and a bleeding tendency."
  });

  Q.push({
    m:'sa-heme',
    stem:'A 9-year-old dog with a large abdominal mass is bleeding from venipuncture sites. PT and aPTT are prolonged, platelet count is 42,000/µL, D-dimer is positive and antithrombin III activity is low. Schistocytes are present on the smear.',
    lead:'How many of the four DIC criteria does this patient meet?',
    a:'All four',
    wrong:['Two','Three','One — only the thrombocytopenia counts'],
    why:'The four criteria are elevated PT and PTT, thrombocytopenia, a positive D-dimer, and decreased antithrombin III; two of four are needed to diagnose DIC and this patient has all four, with schistocytes as the expected smear finding. Antithrombin III is also lost in protein-losing nephropathy, which is why it is measured in both settings.'
  });

  Q.push({
    m:'sa-heme',
    stem:'A 7-year-old spayed female dog has a total calcium of 15.8 mg/dL, ionized calcium of 1.9 mmol/L, and generalized peripheral lymphadenopathy.',
    lead:'Using the "HARD IONS" framework, which two causes should be considered first in a dog?',
    a:'Lymphoma and anal sac apocrine gland adenocarcinoma',
    wrong:['Primary hyperparathyroidism and idiopathic hypercalcemia','Vitamin D toxicosis and spurious elevation','Chronic kidney disease and hypoadrenocorticism'],
    why:'"HARD IONS" covers hyperparathyroidism, Addison’s, renal disease, vitamin D toxicosis, idiopathic, osteolytic, neoplastic and spurious — but in a dog the two to think of first are lymphoma and anal sac apocrine gland adenocarcinoma, both hypercalcemia of malignancy. Idiopathic hypercalcemia is classically the cat, not the dog.'
  });

  Q.push({
    m:'sa-heme',
    stem:'A Doberman Pinscher treated with trimethoprim-sulfa for a deep pyoderma returns 12 days later with fever, a shifting-leg lameness with joint effusion, and proteinuria.',
    lead:'Which hypersensitivity type does this represent?',
    a:'Type III — immune complex deposition',
    wrong:['Type I — IgE-mediated','Type II — antibody against self antigen','Type IV — delayed cell-mediated'],
    why:'Type III reactions deposit antigen–antibody complexes in tissue, and the classic triad of deposition sites is arthritis, nephritis and uveitis. Sulfa drugs cause a type III reaction specifically in Doberman Pinschers — a well-recognized breed idiosyncrasy. Type II would be IMHA, ITP or myasthenia gravis; KCS from sulfonamides is the type IV reaction against the lacrimal gland.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A 12-week-old puppy has a continuous murmur loudest high on the left heart base and bounding, hyperkinetic femoral pulses. Echocardiography confirms left-to-right shunting.',
    lead:'What is the appropriate management?',
    a:'Surgical ligation or coil embolization',
    wrong:['Medical management with pimobendan alone, as closure is contraindicated','Balloon valvuloplasty of the pulmonic valve','Phlebotomy to control secondary polycythemia'],
    why:'A continuous "machinery" murmur with bounding pulses is a PDA, the most common congenital defect in dogs, and a left-to-right shunt should be closed by ligation or coil embolization. The one situation where closure is fatal is a reversed, right-to-left shunt — there the shunt is the patient’s only pressure relief, and those patients are managed with phlebotomy instead.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A 4-month-old kitten has a loud holosystolic murmur audible with equal intensity on both sides of the thorax. She is growing normally and has no respiratory signs.',
    lead:'What is the most likely defect?',
    a:'Ventricular septal defect',
    wrong:['Patent ductus arteriosus','Tetralogy of Fallot','Mitral valve dysplasia'],
    why:'A loud holosystolic murmur heard on both sides is a VSD, the most common congenital defect in cats — and also the most common congenital defect in cattle, where it presents at 2–3 months. Small defects are often tolerated; large ones lead to CHF. A PDA would be a continuous machinery murmur at the left base, and Tetralogy would add polycythemia and dark red mucous membranes.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A 6-month-old dog has exercise intolerance, dark red mucous membranes and a PCV of 68%. Auscultation reveals a systolic murmur at the left heart base. Echocardiography shows an overriding aorta, pulmonic stenosis, a ventricular septal defect and right ventricular hypertrophy.',
    lead:'What explains the polycythemia?',
    a:'Right-to-left shunting causes hypoxemia, which drives erythropoietin release',
    wrong:['Splenic contraction from chronic catecholamine release','Relative polycythemia from dehydration','Primary polycythemia vera occurring as a coincidental finding'],
    why:'Tetralogy of Fallot has four components — overriding aorta, pulmonic stenosis, VSD and right ventricular hypertrophy — and the right-to-left shunt produces chronic hypoxemia, increased erythropoietin and secondary polycythemia with dark red mucous membranes. Polycythemia is the unique finding that separates it from the other congenital defects. Treatment is phlebotomy and palliative shunting.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A 9-year-old Golden Retriever collapses at home. On exam heart sounds are muffled, jugular veins are distended and femoral pulses are weak. The ECG shows beat-to-beat variation in QRS amplitude, and the DV radiograph shows a globoid cardiac silhouette.',
    lead:'What is the immediate treatment?',
    a:'Pericardiocentesis',
    wrong:['IV furosemide','IV lidocaine bolus','Synchronized cardioversion'],
    why:'Muffled heart sounds, electrical alternans and a globoid heart are three of the five classic signs of pericardial effusion; pulsus paradoxus and a "nutmeg" liver on necropsy complete the set. The problem is mechanical — the heart cannot fill — so the treatment is drainage, not diuresis. Furosemide would worsen preload in a tamponade patient.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A 4-year-old male cat cannot urinate and has been straining for 36 hours. He is bradycardic at 90 bpm. The ECG shows tall, spiked T waves, a prolonged P-R interval and absent P waves, with widening QRS complexes.',
    lead:'What should be given first?',
    a:'Calcium gluconate',
    wrong:['Regular insulin with dextrose','Sodium bicarbonate','Atropine'],
    why:'The hyperkalemia ECG progresses through tented T waves, prolonged P-R, loss of the P wave (atrial standstill), then widened QRS to sine wave and arrest. Calcium gluconate comes first because it is cardioprotective and works immediately without changing the potassium; insulin with dextrose or a beta agonist then shifts potassium intracellularly, and relieving the obstruction is definitive.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A 3-year-old cat presents in acute respiratory distress with an S4 gallop, and thoracic radiographs show pulmonary edema.',
    lead:'What is the first drug to give?',
    a:'Furosemide IV or IM',
    wrong:['Pimobendan PO','Diltiazem PO','Enalapril PO'],
    why:'Furosemide is the cornerstone of acute CHF management, and in a cat in CHF the first drug is IV or IM furosemide. An S4 gallop is the pathologic gallop of feline hypertrophic cardiomyopathy — diltiazem has a role in HCM but not as the emergency drug, and oral therapy is inappropriate in a cat that is decompensated and stressed.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A 5-year-old mixed-breed dog is hit by a car. He is tachypneic with an increased respiratory effort. On auscultation lung sounds are absent dorsally but audible ventrally.',
    lead:'Where should thoracocentesis be performed?',
    a:'Dorsally — free air rises to the highest point in the chest',
    wrong:['Ventrally, at the costochondral junction','At the 4th intercostal space on the left only','Not at all — supplemental oxygen alone will resolve it'],
    why:'Absent lung sounds dorsally indicate pneumothorax, because free air rises; fluid, by contrast, is tapped ventrally. Oxygen is supportive and even speeds reabsorption by creating a nitrogen gradient, but it is not sufficient on its own — the air must be removed.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A dog is recovering from anesthesia after a dental. Two days later he is febrile and coughing. Radiographs show an alveolar pattern in the right cranial and right middle lung lobes.',
    lead:'What is the diagnosis, and what underlying problem should be sought?',
    a:'Aspiration pneumonia — look for megaesophagus, laryngeal paralysis or a seizure disorder',
    wrong:['Cardiogenic pulmonary edema — look for mitral regurgitation','Neurogenic pulmonary edema — look for a head injury','Lung lobe torsion — look for a prior pleural effusion'],
    why:'Gravity and bronchial anatomy direct aspirate into the right cranial and right middle lobes in a sternally recumbent animal, making that distribution the signature of aspiration pneumonia. Neurogenic pulmonary edema is caudodorsal instead, which is the discriminator, and cardiogenic edema in dogs is perihilar and caudodorsal.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A dog seizures at home for 6 minutes and is presented an hour later in respiratory distress. Radiographs show a caudodorsal alveolar pattern. Cardiac silhouette and left atrial size are normal.',
    lead:'What is the diagnosis?',
    a:'Neurogenic pulmonary edema',
    wrong:['Cardiogenic pulmonary edema','Aspiration pneumonia','Acute respiratory distress syndrome from sepsis'],
    why:'Neurogenic pulmonary edema is caudodorsal on radiographs — the opposite of the perihilar cardiogenic pattern in dogs, and the useful discriminator. Its four causes are head trauma, seizures, electrocution and upper airway obstruction including strangulation and choke. It is usually self-limiting over 24–72 hours with oxygen and treatment of the primary insult.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A dog struck by a car is stuporous. Heart rate is 44 bpm and systolic blood pressure is 195 mmHg. Pupils are asymmetric.',
    lead:'What is the correct action?',
    a:'Treat the intracranial pressure — mannitol, head elevated 30° — and do not lower the blood pressure',
    wrong:['Give an IV bolus of a fast-acting antihypertensive to protect the brain','Give atropine to correct the bradycardia','Start a dobutamine CRI to improve cardiac output'],
    why:'Bradycardia with hypertension is the Cushing reflex, a compensatory response that maintains cerebral perfusion against rising intracranial pressure. Lowering the blood pressure removes the only thing keeping blood flowing to the brain. Treat the ICP instead with mannitol or hypertonic saline and 30° head elevation.'
  });

  Q.push({
    m:'sa-cardioresp',
    stem:'A cat hit by a car has a distended abdomen and has not urinated in 18 hours. Abdominocentesis yields fluid with a creatinine of 9.2 mg/dL; serum creatinine is 3.6 mg/dL.',
    lead:'What does this ratio establish?',
    a:'Uroabdomen — fluid:serum creatinine ≥ 2:1',
    wrong:['Septic peritonitis','Bile peritonitis','Chylous effusion from lymphatic rupture'],
    why:'Abdominal fluid to serum creatinine of at least 2:1 confirms uroabdomen; the potassium ratio of ≥1.4:1 in dogs and ≥1.9:1 in cats is the supporting criterion. Creatinine is the more reliable of the two because it is a larger molecule and equilibrates across the peritoneum more slowly. Septic peritonitis is diagnosed instead by blood glucose exceeding fluid glucose by more than 20 mg/dL.'
  });

  Q.push({
    m:'sa-neuro',
    stem:'A 6-year-old dog is non-ambulatory. Thoracic limbs have normal to increased tone with brisk reflexes, pelvic limbs are paretic with hyperreflexia and crossed extensor reflexes, and conscious proprioception is absent in all four limbs. Panniculus is intact.',
    lead:'Where is the lesion?',
    a:'C1–C5',
    wrong:['C6–T2','T3–L3','L4–S4'],
    why:'All four limbs UMN localizes to C1–C5; C6–T2 would give LMN signs in the thoracic limbs from the brachial intumescence. T3–L3 spares the forelimbs entirely and is the most common IVDD site in chondrodystrophic dogs, while L4–S4 gives LMN signs in the pelvic limbs, anus and bladder.'
  });

  Q.push({
    m:'sa-neuro',
    stem:'A dachshund is paraplegic after an acute onset of back pain. The bladder is large, firm and very difficult to express manually. Anal tone is present and pelvic limb reflexes are exaggerated.',
    lead:'Where is the lesion relative to L7, and what is the practical risk?',
    a:'Cranial to L7 — a UMN bladder, at risk of rupture and detrusor damage',
    wrong:['Caudal to L7 — an LMN bladder, at risk of overflow incontinence','Caudal to L7 — a UMN bladder from a sacral lesion','Cranial to L7 — but bladder function is unaffected by cord lesions'],
    why:'A UMN bladder is turgid and difficult to express because the detrusor contracts against a spastic, non-relaxing urethral sphincter — express or catheterize regularly to avoid rupture and detrusor damage. An LMN bladder from a lesion caudal to L7 is flaccid and easy to express with no anal tone and constant overflow dribbling.'
  });

  Q.push({
    m:'sa-neuro',
    stem:'A 9-year-old dog has a left head tilt and a nystagmus that changes direction with head position. Hopping and conscious proprioception are delayed on the RIGHT side. Mentation is dull.',
    lead:'On which side is the lesion?',
    a:'The right — the side of the proprioceptive deficits',
    wrong:['The left — the side of the head tilt','Bilateral, given the changing nystagmus','Cannot be determined without advanced imaging'],
    why:'This is paradoxical vestibular disease from a lesion in the cerebellar peduncle or flocculonodular lobe: the head tilt and nystagmus point away from the lesion. Proprioception never lies, so when a vestibular case has both vestibular signs and CP deficits, the lesion sits on the side of the CP deficits. Direction-changing nystagmus and altered mentation already mark this as central rather than peripheral.'
  });

  Q.push({
    m:'sa-neuro',
    stem:'A dog struck by a car has rigid extension of both thoracic limbs but moves them normally and has normal thoracic limb reflexes and proprioception. Both pelvic limbs are paralyzed.',
    lead:'What does this posture indicate?',
    a:'A severe T3–L3 lesion — Schiff-Sherrington posture',
    wrong:['A C1–C5 lesion with tetraparesis','Cerebellar injury with decerebellate rigidity','A grave prognosis regardless of deep pain status'],
    why:'Schiff-Sherrington posture results from interruption of ascending inhibitory input from border cells in the lumbar cord to the forelimb extensors, so the forelimbs are rigid but functionally normal. It localizes a severe T3–L3 lesion — and the trap is reading it either as a forelimb lesion or as an independent poor prognostic sign, which it is not. Deep pain perception carries the prognosis.'
  });

  Q.push({
    m:'sa-neuro',
    stem:'A 5-year-old dog has episodic exercise-induced weakness that resolves with rest. Thoracic radiographs show a dilated, air-filled esophagus and a right middle lung lobe alveolar pattern.',
    lead:'What is the best diagnostic test?',
    a:'Serum acetylcholine receptor antibody assay',
    wrong:['Edrophonium (Tensilon) response test as the definitive diagnosis','Muscle biopsy with histochemistry','CSF analysis and myelography'],
    why:'Exercise-induced weakness plus megaesophagus and secondary aspiration pneumonia is acquired myasthenia gravis, a type II hypersensitivity in which antibody is directed against the acetylcholine receptor. The serum ACh receptor antibody assay is the best diagnostic test. The aspiration pattern in the right middle lobe is the expected complication of the megaesophagus.'
  });

  Q.push({
    m:'sa-neuro',
    stem:'A cat fed a homemade diet consisting largely of raw fish is presented with ventroflexion of the neck, ataxia, mydriasis and episodes of dorsal head flexion described as stargazing.',
    lead:'What is the deficiency?',
    a:'Thiamine — vitamin B1',
    wrong:['Taurine','Potassium','Cobalamin'],
    why:'Raw seafood contains thiaminase, which destroys dietary thiamine; the syndrome is ventroflexion of the neck, ataxia, mydriasis and the characteristic stargazing posture progressing to seizures, and it reverses rapidly with thiamine if caught early. Hypokalemia also causes ventroflexion in cats, but it lacks the stargazing and mydriasis, and taurine deficiency causes DCM and central retinal degeneration instead.'
  });

  Q.push({
    m:'sa-neuro',
    stem:'A hypertensive 14-year-old cat is presented for acute blindness. Fundic exam shows bullous retinal detachment and intraretinal hemorrhage. Systolic blood pressure is 235 mmHg.',
    lead:'What drug addresses the underlying cause?',
    a:'Amlodipine',
    wrong:['Latanoprost','Prednisolone acetate','Dorzolamide'],
    why:'Posterior uveitis — chorioretinitis — is caused by hypertension, so the treatment that saves the retina is antihypertensive. Amlodipine is the first-line antihypertensive in cats and is therefore the drug that prevents hypertensive posterior uveitis and retinal detachment. Latanoprost increases aqueous outflow but is contraindicated in uveitis and in feline glaucoma.'
  });

  Q.push({
    m:'sa-neuro',
    stem:'A cat has recurrent unilateral conjunctivitis and blepharospasm. Fluorescein staining reveals branching, linear corneal ulcers.',
    lead:'What is the diagnosis and treatment?',
    a:'Feline herpesvirus-1 — famciclovir',
    wrong:['Chlamydia felis — oral doxycycline','Mycoplasma felis — topical oxytetracycline','Feline calicivirus — supportive care only'],
    why:'Dendritic corneal ulcers are pathognomonic for feline herpesvirus-1, which causes conjunctivitis and keratitis with lifelong latency and stress-induced recrudescence; famciclovir is the treatment. Chlamydia felis is suggested by intracytoplasmic inclusion bodies on conjunctival cytology and causes chemosis rather than corneal ulceration — and it requires oral doxycycline, because topicals do not clear the carrier state.'
  });

  Q.push({
    m:'sa-medicine',
    stem:'A 7-month-old Yorkshire Terrier is small for her age and becomes disoriented and ataxic 2 hours after eating. Bloodwork shows low BUN, hypoalbuminemia, hypocholesterolemia and a microcytic anemia. Urinalysis shows ammonium biurate crystals.',
    lead:'Which medical treatment reduces ammonia absorption by trapping it in the colon?',
    a:'Lactulose',
    wrong:['Ursodiol','Metoclopramide','S-adenosylmethionine'],
    why:'Portosystemic shunt presents as a young, stunted animal with post-prandial hepatic encephalopathy, ammonium biurate uroliths and a microcytic anemia from abnormal iron transport. Lactulose acidifies the colon, trapping ammonia as ionized NH4+ so it cannot be absorbed; oral neomycin or metronidazole kills urease-producing flora, and protein is fed at the maximum tolerated level rather than severely restricted. Surgical attenuation is definitive.'
  });

  Q.push({
    m:'sa-medicine',
    stem:'A 10-year-old cat is icteric with a two-week history of vomiting and anorexia. Ultrasound shows a thickened, hyperechoic pancreas, thickened small intestinal wall and a distended common bile duct.',
    lead:'What is the anatomic basis for this combination of findings?',
    a:'In the cat the pancreatic duct and common bile duct fuse before entering the duodenum',
    wrong:['Cats have no sphincter of Oddi, allowing free duodenal reflux','The feline gallbladder is bilobed, predisposing it to obstruction','Cats lack a hepatic portal triad, so inflammation spreads unimpeded'],
    why:'Feline triaditis is the triad of pancreatitis, IBD and cholangitis/cholangiohepatitis, and it occurs because the feline pancreatic duct and common bile duct fuse before entering the duodenum, letting inflammation ascend readily between all three organs. Amoxicillin-clavulanic acid is the antibiotic of choice for the cholangitis component, given its enteric coverage and biliary penetration.'
  });

  Q.push({
    m:'sa-medicine',
    stem:'A dog from Missouri has had three months of diarrhea characterized by small volumes passed 8–10 times daily with mucus, fresh red blood and marked tenesmus. Rectal cytology shows macrophages containing numerous small yeast with a basophilic center.',
    lead:'What is the diagnosis and best confirmatory test?',
    a:'Histoplasmosis — urine fungal antigen',
    wrong:['Blastomycosis — cytology of a lymph node aspirate','Trichuriasis — repeated fecal flotation','Pythiosis — serologic ELISA'],
    why:'Small intracellular yeast inside macrophages is Histoplasma capsulatum, and histoplasmosis is one of the few systemic mycoses that presents as large bowel diarrhea — small volume, increased frequency, hematochezia and tenesmus. Urine antigen is the diagnostic submission. Blastomyces is larger, extracellular, broad-based budding, and gives the BELLS pattern rather than colitis.'
  });

  Q.push({
    m:'sa-medicine',
    stem:'A diabetic dog on twice-daily NPH insulin has persistent morning hyperglycemia of 380 mg/dL. A 12-hour glucose curve shows a fall to 42 mg/dL at 5 hours, followed by a rise to 390 mg/dL by hour 9.',
    lead:'What is the correct adjustment?',
    a:'Decrease the insulin dose',
    wrong:['Increase the insulin dose','Switch to glargine at the same dose','Add a second midday injection'],
    why:'This is the Somogyi phenomenon — hypoglycemia followed by counter-regulatory rebound hyperglycemia from glucagon, cortisol and epinephrine — and it occurs when the dose is too high. The trap is reacting to the high morning glucose by increasing insulin, which makes it worse. The clue is the excessive nadir on the curve, and the target nadir is 80–150 mg/dL in both dogs and cats.'
  });

  Q.push({
    m:'sa-medicine',
    stem:'A 6-year-old Soft-Coated Wheaten Terrier has pitting edema of all four distal limbs and has lost weight. Serum albumin is 1.4 g/dL, cholesterol is 480 mg/dL and the urine protein:creatinine ratio is 8.9. Renal values are normal.',
    lead:'Which drug class is first-line for the proteinuria?',
    a:'ACE inhibitors — benazepril or enalapril',
    wrong:['Loop diuretics — furosemide','Glucocorticoids — prednisone','Calcium channel blockers — amlodipine'],
    why:'Hypoalbuminemia, proteinuria, hypercholesterolemia and edema are the four components of nephrotic syndrome, and the Wheaten Terrier is the classic PLN breed. The lesion is glomerular, and ACE inhibitors reduce glomerular capillary pressure and proteinuria. Antithrombotics matter too, because loss of antithrombin III makes these patients hypercoagulable.'
  });

  Q.push({
    m:'sa-medicine',
    stem:'A hypothyroid-looking Labrador on phenobarbital for epilepsy has a total T4 below the reference range. He is otherwise clinically well with a normal coat.',
    lead:'What should be done before starting levothyroxine?',
    a:'Measure free T4 by equilibrium dialysis plus TSH — phenobarbital suppresses total T4',
    wrong:['Start levothyroxine and recheck total T4 in 4 weeks','Perform a TSH stimulation test','Discontinue phenobarbital permanently and recheck'],
    why:'Euthyroid sick syndrome is produced by three drugs worth naming together — phenobarbital, prednisone and carprofen — which suppress total T4 in a dog with normal thyroid function. Confirming with free T4 by equilibrium dialysis plus TSH avoids treating a dog that is not hypothyroid.'
  });

  Q.push({
    m:'sa-medicine',
    stem:'A 3-year-old cat with severe, non-seasonal pruritus has crusting on the ear margins, elbows and hocks. Scratching the ear pinna causes the ipsilateral hind leg to scratch. Two superficial skin scrapes are negative.',
    lead:'What is the most likely diagnosis?',
    a:'Sarcoptes — negative scrapes do not rule it out',
    wrong:['Demodex — deep scrapes are needed','Cheyletiella — look for walking dandruff','Otodectes — check the ear canals'],
    why:'A positive pinnal-pedal reflex with pruritus at the ear margins, elbows, hocks and ventrum is sarcoptic mange, and because so few mites are usually present, a negative skin scrape does not exclude it. Sarcoptes is a burrowing mite, so it needs systemic therapy — isoxazolines, selamectin or ivermectin — and it is zoonotic, though self-limiting in humans.'
  });

  Q.push({
    m:'sa-medicine',
    stem:'A 9-year-old cat is presented for lethargy. Abdominal palpation reveals marked splenomegaly. There are no cutaneous masses.',
    lead:'What is the most likely cause, and what is the next step?',
    a:'Mast cell tumor — fine-needle aspirate the spleen',
    wrong:['Lymphoma — bone marrow aspirate','Hemangiosarcoma — CT of the abdomen','Extramedullary hematopoiesis — no further workup needed'],
    why:'Mast cell tumor is the most common cause of splenomegaly in cats, and visceral MCT in cats is a distinct and more aggressive entity than the cutaneous form. FNA of the spleen is the immediate diagnostic step because round cell tumors exfoliate readily on cytology. In dogs, toceranib — a c-KIT receptor tyrosine kinase inhibitor — is used for mast cell disease, with wide-margin surgery still first-line.'
  });

  Q.push({
    m:'sa-medicine',
    stem:'A cat has a firm subcutaneous mass in the interscapular region. It appeared after vaccination 4 months ago, measures 2.5 cm, and the owner reports it has grown over the past month.',
    lead:'How many criteria of the 3-2-1 rule does this mass meet, and what should be done?',
    a:'All three — biopsy or excise, planning radical excision in advance',
    wrong:['One — monitor and recheck in 3 months','Two — aspirate only and recheck in a month','None — post-vaccination masses under 3 cm can be observed'],
    why:'The 3-2-1 rule triggers action if a post-vaccination mass is present 3 months after vaccination, is larger than 2 cm, or is still growing 1 month later — any one criterion is enough, and this mass meets all three. Injection-site sarcomas are locally aggressive and demand radical excision planned before the first cut, which is also why vaccines are given as distally as possible.'
  });

  Q.push({
    m:'sa-vectorborne',
    stem:'A 4-year-old German Shepherd from Oklahoma has intermittent fever, epistaxis and pitting edema of the distal limbs. CBC shows pancytopenia; chemistry shows hypoalbuminemia and hyperglobulinemia. A buffy coat smear shows morulae within monocytes.',
    lead:'What is the diagnosis?',
    a:'Ehrlichia canis',
    wrong:['Anaplasma phagocytophilum','Ehrlichia ewingii','Rickettsia rickettsii'],
    why:'Morulae in monocytes with limb edema and hypoalbuminemia is Ehrlichia canis, transmitted by the brown dog tick Rhipicephalus sanguineus, with German Shepherds severely affected in the chronic pancytopenic phase. Anaplasma and E. ewingii both put morulae in granulocytes instead. Treatment is doxycycline for 28 days.'
  });

  Q.push({
    m:'sa-vectorborne',
    stem:'A cat in rural Missouri is presented in July, moribund, with a temperature of 106°F, icterus, hepatosplenomegaly and lymphadenomegaly. A blood smear shows small signet-ring inclusions inside erythrocytes, and a splenic aspirate shows large schizont-laden macrophages.',
    lead:'What is the treatment?',
    a:'Atovaquone plus azithromycin',
    wrong:['Doxycycline','Imidocarb dipropionate','Clindamycin'],
    why:'Cytauxzoon felis is transmitted by Amblyomma americanum with the bobcat as reservoir, and it infects both macrophages and erythrocytes — the schizont phase in tissue is what kills. Geography (Missouri and the south central states), season and signet-ring piroplasms make the diagnosis, and treatment is atovaquone plus azithromycin as an emergency. Doxycycline covers the rickettsial tick-borne diseases but not this protozoan.'
  });

  Q.push({
    m:'sa-vectorborne',
    stem:'A hunting dog in North Carolina develops acute fever, widespread petechiae, limb edema and neurologic signs. Platelet count is 38,000/µL. The illness began 6 days ago and the owner removed an ornate tick with short mouthparts a week before that.',
    lead:'What discriminates this from ehrlichiosis?',
    a:'It is over in about 2 weeks — RMSF is acute with no carrier state',
    wrong:['It responds to imidocarb rather than doxycycline','It produces morulae in monocytes','It causes a chronic pancytopenia over months'],
    why:'The ornate tick with short mouthparts is Dermacentor, the vector of Rocky Mountain spotted fever, whose pathogenesis is vasculitis — fever, petechiae, edema, neurologic signs and thrombocytopenia. The key discriminator is the time course: RMSF is over in about two weeks, self-limiting or fatal, with no carrier state, unlike the chronic phase of E. canis. Both are treated with doxycycline.'
  });

  Q.push({
    m:'sa-vectorborne',
    stem:'A dog in Connecticut has fever, a shifting-leg lameness and thrombocytopenia. PCV is normal. A blood smear shows morulae within neutrophils.',
    lead:'What is the most likely agent?',
    a:'Anaplasma phagocytophilum',
    wrong:['Ehrlichia canis','Babesia canis','Borrelia burgdorferi'],
    why:'Fever and lameness with thrombocytopenia and NO anemia, plus morulae in neutrophils, is Anaplasma phagocytophilum. It shares the Ixodes vector with Lyme disease, so co-infection is common — which is exactly why the pattern must be read carefully. Ehrlichia canis puts morulae in monocytes and adds limb edema and hypoalbuminemia; Babesia gives hemolytic anemia with thrombocytopenia.'
  });

  Q.push({
    m:'sa-vectorborne',
    stem:'A 6-year-old dog with no flea or tick preventive has a new grade IV/VI left-sided systolic murmur, fever of unknown origin and lameness. Blood cultures are repeatedly negative. Echocardiography shows an aortic valve vegetation.',
    lead:'Which organism should be specifically pursued?',
    a:'Bartonella vinsonii',
    wrong:['Streptococcus canis','Erysipelothrix rhusiopathiae','Borrelia burgdorferi'],
    why:'The aortic valve is the endocarditis valve in small animals — tricuspid is the cattle answer — and while Streptococcus is the most commonly isolated organism overall, a culture-negative endocarditis in a dog on no flea/tick preventive should raise Bartonella vinsonii specifically. Fleas are the reservoir for the feline species, B. henselae, which causes cat scratch fever in people.'
  });

  Q.push({
    m:'sa-vectorborne',
    stem:'A dog living near Phoenix, Arizona has a chronic cough, a draining tract over the distal radius and generalized lymphadenopathy. Radiographs show osteomyelitis. Cytology from the tract shows large, thick, double-walled structures containing endospores.',
    lead:'What is the diagnosis and expected treatment duration?',
    a:'Coccidioidomycosis — 6 to 12 months of itraconazole',
    wrong:['Blastomycosis — 3 to 6 months of itraconazole','Histoplasmosis — 4 to 6 months of itraconazole','Aspergillosis — a single topical clotrimazole infusion'],
    why:'Spherules containing endospores are highly distinctive for Coccidioides immitis, and the geography — Arizona, the San Joaquin Valley, New Mexico, west Texas — seals it. Coccidioidomycosis requires the longest course of any of the systemic mycoses at 6–12 months. Blastomyces would show broad-based budding yeast and the BELLS pattern in the river valleys instead.'
  });

  Q.push({
    m:'sa-vectorborne',
    stem:'An indoor-outdoor cat has a firm swelling over the bridge of the nose and a fleshy polyp protruding from one nostril. There is also chorioretinitis on fundic exam. The owner keeps racing pigeons.',
    lead:'What is the best diagnostic test?',
    a:'Latex agglutination for capsular antigen',
    wrong:['Urine fungal antigen','Wood’s lamp examination of the lesion','Serum agar gel immunodiffusion'],
    why:'The "Roman nose" cat with granulomatous rhinitis, a nasal polyp, CNS disease or chorioretinitis, and a pigeon dropping exposure is cryptococcosis. Latex agglutination for capsular antigen is a superb test; cytology shows small yeast with a large clear capsule and narrow-based budding on India ink or mucicarmine. Fluconazole has the best CNS penetration. Urine antigen is the histoplasmosis submission.'
  });

  Q.push({
    m:'sa-vectorborne',
    stem:'A 7-year-old German Shepherd has 4 months of ulcerated, blood-tinged nasal discharge, depigmentation of the nasal planum and marked facial pain. Rhinoscopy shows turbinate destruction and white fungal plaques.',
    lead:'What complication should be anticipated during anesthetic recovery after treatment?',
    a:'Severe laryngeal edema — have intubation supplies ready',
    wrong:['Malignant hyperthermia','Aspiration pneumonia from the infusate','Post-obstructive pulmonary edema'],
    why:'Nasal aspergillosis in a dolichocephalic dog, classically the German Shepherd, is treated by topical clotrimazole infused into the nasal cavity and frontal sinus under anesthesia. Severe laryngeal edema is a real recovery risk after nasal infusion, so intubation supplies must be immediately available. Diagnosis rests on branching septate hyphae on histopathology.'
  });

  Q.push({
    m:'sa-parasites',
    stem:'A 5-month-old dog has chronic large bowel diarrhea with hematochezia. Serum sodium is 137 mEq/L and potassium is 6.1 mEq/L, giving a Na:K ratio of 22. An ACTH stimulation test is normal. Three fecal flotations have been negative.',
    lead:'What is the most likely cause?',
    a:'Trichuris vulpis',
    wrong:["Hypoadrenocorticism — the ACTH stim was a false negative",'Giardia duodenalis','Tritrichomonas foetus'],
    why:"Whipworms cause GI sodium loss and potassium retention that mimics Addison's disease — pseudo-Addison's — but with a normal ACTH stimulation test, and they also cause cecocolic intussusception. Trichuris eggs are shed intermittently, so repeated negative fecals do not exclude infection; treat empirically with fenbendazole. Tritrichomonas is the kitten diarrhea answer and needs ronidazole."
  });

  Q.push({
    m:'sa-parasites',
    stem:'A 10-week-old kitten from a shelter has had semi-formed, foul-smelling diarrhea with fresh blood and mucus for six weeks, unresponsive to metronidazole. A direct fecal smear shows a motile, pear-shaped flagellate with a single nucleus and an undulating membrane.',
    lead:'What is the correct treatment?',
    a:'Ronidazole',
    wrong:['Fenbendazole','Sulfadimethoxine','Praziquantel'],
    why:'Tritrichomonas foetus resembles Giardia but has ONE nucleus and an undulating membrane, where Giardia has two nuclei and a falling-leaf motion. It causes chronic, unresponsive large bowel diarrhea in kittens from catteries and shelters, and it requires ronidazole — not metronidazole, which is the trap and explains the treatment failure here.'
  });

  Q.push({
    m:'sa-parasites',
    stem:'An owner brings in small, white, motile segments resembling grains of rice found around her dog’s perineum and in his bedding.',
    lead:'What must be treated alongside praziquantel?',
    a:'The flea infestation — the flea is the intermediate host',
    wrong:['The rodent population — rodents are the intermediate host','The environment for Toxocara eggs, which co-occur','Nothing further — praziquantel is curative on its own'],
    why:'Motile proglottids resembling white rice or cucumber seeds are Dipylidium caninum, whose intermediate host is the flea, with chewing lice as a secondary host. The animal must swallow a flea to become infected, so treating with praziquantel without flea control simply invites recurrence. Taenia species are the ones acquired by eating rodents or rabbits.'
  });

  Q.push({
    m:'sa-parasites',
    stem:'A child develops intensely itchy, serpiginous, raised tracks on the soles of her feet after playing in a sandbox where neighborhood dogs defecate.',
    lead:'Which parasite is responsible?',
    a:'Ancylostoma — cutaneous larval migrans',
    wrong:['Toxocara canis — visceral larval migrans','Baylisascaris procyonis — neural larva migrans','Strongyloides stercoralis — larva currens'],
    why:'Getting the direction right is the whole question: hookworm larvae penetrate skin but cannot mature in a human, giving cutaneous larval migrans. Toxocara canis instead goes round the body to the organs and eye — visceral and ocular larval migrans, a leading infectious cause of childhood blindness — and Baylisascaris from raccoons causes devastating neural larva migrans in children.'
  });

  Q.push({
    m:'sa-parasites',
    stem:'A dog in Michigan that frequently catches and eats crayfish at a creek has a chronic cough and an acute pneumothorax. Radiographs show thin-walled cystic lung lesions in the caudal lobes.',
    lead:'Which finding on fecal examination would confirm the diagnosis?',
    a:'A single-operculate egg',
    wrong:['A bipolar-plugged, asymmetric egg','A thin-walled egg containing 2–8 cells','Larvae recovered on a Baermann'],
    why:'Paragonimus kellicotti is the lung fluke of dogs and cats, with the snail and the crayfish as its two intermediate hosts; the egg has a single operculum — a distinct "lid." Cystic lung lesions, cough and pneumothorax are the clinical picture, and treatment is fenbendazole or praziquantel. The bipolar-plugged asymmetric egg is Capillaria aerophila, and Baermann larvae would suggest Aelurostrongylus in a cat.'
  });

  Q.push({
    m:'sa-parasites',
    stem:'A dog’s fecal flotation shows oocysts containing four sporocysts. The dog is clinically normal and lives with a pet rabbit whose litter box he raids.',
    lead:'How should this result be interpreted?',
    a:'A pseudoparasite — Eimeria passing through from eaten rabbit feces',
    wrong:['Cystoisospora infection requiring sulfadimethoxine','Cryptosporidium infection requiring acid-fast confirmation','Toxoplasma oocyst shedding requiring owner counseling'],
    why:'Eimeria has 4 sporocysts and infects ruminants, horses, rabbits and poultry — not dogs and cats — so a dog eating rabbit feces will pass the oocysts spuriously. Cystoisospora, the genus that does infect dogs, cats and pigs, has 2 sporocysts and is treated with sulfadimethoxine. Recognizing the pseudoparasite avoids treating a healthy animal.'
  });

  Q.push({
    m:'sa-feline',
    stem:'A 5-year-old indoor cat has a 3-month history of paroxysmal coughing and expiratory wheeze. Radiographs show a diffuse bronchial pattern with prominent donuts and train tracks, a flattened diaphragm, and right middle lung lobe consolidation.',
    lead:'Which drug directly addresses the bronchoconstriction?',
    a:'Terbutaline — a beta-2 adrenergic agonist',
    wrong:['Furosemide','Doxycycline','Maropitant'],
    why:'The three radiographic hallmarks of feline asthma are hyperinflation with a flattened diaphragm, a bronchial pattern of thickened walls seen end-on as donuts and in profile as train tracks, and right middle lung lobe consolidation from mucus plugging of that bronchus. Terbutaline is the beta-2 agonist that bronchodilates and relaxes the airways; corticosteroids, inhaled or systemic, control the inflammation.'
  });

  Q.push({
    m:'sa-feline',
    stem:'A young cat has a non-septic, protein-rich pleural effusion. One drop of the effusion is layered onto 8 mL of distilled water containing one drop of 98% acetic acid; the drop retains its shape and drifts down as a string.',
    lead:'How is this result interpreted?',
    a:'Positive — high protein and inflammatory mediator content, consistent with an exudate',
    wrong:['Negative — a pure transudate','Invalid — the test requires serum, not effusion','Positive — but it specifically confirms chylothorax'],
    why:'The Rivalta test is a cage-side separation of transudate from exudate, classically used in FIP workups. A drop that dissolves and disperses is negative; a drop that keeps its shape as a ball or string is positive, indicating high protein and inflammatory mediators. The two most common causes of feline pleural effusion overall are heart failure and neoplasia, with pyothorax, chylothorax and FIP behind them.'
  });

  Q.push({
    m:'sa-feline',
    stem:'A 6-month-old kitten from a shelter has marked bilateral chemosis and conjunctival hyperemia with minimal sneezing and no corneal ulceration. Conjunctival cytology shows intracytoplasmic inclusion bodies.',
    lead:'What is the appropriate treatment?',
    a:'Oral doxycycline',
    wrong:['Topical triple antibiotic ointment alone','Famciclovir','Topical corticosteroid'],
    why:'Chlamydia felis is suggested by intracytoplasmic inclusion bodies in conjunctival cytology and is predominantly a conjunctivitis with chemosis rather than a true URI. Oral doxycycline is required because topical therapy does not clear the carrier state; oxytetracycline is an alternative for Chlamydia or Mycoplasma. Dendritic ulcers would instead point to herpesvirus and famciclovir.'
  });

  Q.push({
    m:'sa-pharm',
    stem:'A dehydrated 12-year-old dog with a pyelonephritis is being treated. The clinician is choosing between gentamicin and a fluoroquinolone.',
    lead:'What is the strongest argument against the aminoglycoside here?',
    a:'Nephrotoxicity is worst in volume-depleted patients',
    wrong:['Aminoglycosides have no gram-negative activity','Aminoglycosides cannot reach urinary concentrations','Aminoglycosides are contraindicated with any fluid therapy'],
    why:'Aminoglycosides carry three toxicities worth naming together — ototoxic, nephrotoxic and neuromuscular blockade — and the nephrotoxicity is worst in dehydrated patients, so they should never be given to a volume-depleted animal; once-daily dosing reduces renal accumulation. Both aminoglycosides and fluoroquinolones also lack anaerobic activity, because both depend on oxygen-dependent uptake or aerobic metabolism.'
  });

  Q.push({
    m:'sa-pharm',
    stem:'A dog is presented with a deep, necrotic bite-wound abscess. The clinician wants an agent with reliable activity against obligate anaerobes.',
    lead:'Which drug is the poorest choice?',
    a:'Enrofloxacin',
    wrong:['Metronidazole','Clindamycin','Amoxicillin-clavulanate'],
    why:'Fluoroquinolones and aminoglycosides have no anaerobic activity because both require oxygen-dependent uptake or aerobic metabolism, which is precisely why they fail in abscesses and necrotic tissue. The three best anaerobic choices are penicillins, clindamycin and metronidazole, with metronidazole the most reliably anaerobicidal.'
  });

  Q.push({
    m:'sa-pharm',
    stem:'A cat with a fractured femur is receiving buprenorphine and remains painful. The clinician considers doubling the buprenorphine dose.',
    lead:'Why will that not work?',
    a:'Buprenorphine has a ceiling effect — higher doses add side effects, not analgesia',
    wrong:['Buprenorphine is inactivated by feline glucuronidation','Buprenorphine has no analgesic activity in cats','Buprenorphine antagonizes its own receptor at higher doses only in cats'],
    why:'Buprenorphine is a partial mu agonist and butorphanol is a kappa agonist and mu antagonist; both, along with the NSAIDs as a class, have a ceiling effect where increasing the dose increases side effects without increasing analgesia. For severe pain the answer is to switch to a full mu agonist — morphine, hydromorphone, methadone or fentanyl — not to escalate. Buprenorphine does have excellent transmucosal absorption in cats.'
  });

  Q.push({
    m:'sa-pharm',
    stem:'A pig under halothane anesthesia develops a rapidly rising body temperature, muscle rigidity and severe acidosis.',
    lead:'Which drug is indicated, and what is its mechanism?',
    a:'Dantrolene — a ryanodine receptor antagonist that blocks calcium release from the sarcoplasmic reticulum',
    wrong:['Methocarbamol — a centrally acting muscle relaxant','Succinylcholine — a depolarizing neuromuscular blocker','Atipamezole — an alpha-2 antagonist'],
    why:'Malignant hyperthermia, or porcine stress syndrome, is treated and prevented with dantrolene, which antagonizes the ryanodine receptor and blocks calcium release from the sarcoplasmic reticulum. The same drug is used in horses for post-anesthetic myositis and exertional rhabdomyolysis. Methocarbamol is the tremorgenic-toxicosis relaxant and does nothing for the underlying calcium release.'
  });

  Q.push({
    m:'sa-pharm',
    stem:'A cat with immune-mediated hemolytic anemia is started on prednisolone. The clinician asks whether azathioprine should be added as a steroid-sparing adjunct, as it would be in a dog.',
    lead:'What is the correct answer?',
    a:'No — cats lack TPMT and develop severe marrow suppression; use chlorambucil or cyclosporine',
    wrong:['Yes, at half the canine dose','Yes, but only with weekly CBC monitoring','No — azathioprine causes fatal pulmonary edema in cats'],
    why:'Cats lack thiopurine methyltransferase and cannot metabolize azathioprine, developing severe and sometimes fatal bone marrow suppression; chlorambucil or cyclosporine are the feline alternatives. Azathioprine sits on the "never in cats" list alongside cisplatin (fatal pulmonary edema), 5-FU (fatal neurotoxicity), ketoconazole, permethrin and acetaminophen.'
  });

  Q.push({
    m:'sa-boards',
    stem:'A patient in respiratory distress has an SpO2 of 90% on room air.',
    lead:'What is the corresponding PaO2, and what does it mean clinically?',
    a:'60 mmHg — the threshold for oxygen supplementation',
    wrong:['80 mmHg — borderline, continue monitoring','50 mmHg — the threshold for visible cyanosis','30 mmHg — critical'],
    why:'The 90/60 rule is the one pair to memorize: an SpO2 of 90% corresponds to a PaO2 of 60 mmHg, and below that you are on the steep part of the oxyhemoglobin dissociation curve where small drops in saturation mean large drops in PaO2. Visible cyanosis requires a PaO2 under 50 mmHg and at least 5 g/dL of desaturated hemoglobin, which is why a severely anemic patient can be profoundly hypoxemic without ever looking cyanotic.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A screening test for a disease with a herd prevalence of 0.1% has a sensitivity of 95% and a specificity of 95%. You test 100,000 animals: 95 true positives and 4,995 false positives.',
    lead:'What is the positive predictive value?',
    a:'About 1.9%',
    wrong:['About 95%','About 68%','About 50%'],
    why:'PPV = TP/(TP+FP) = 95/5,090 ≈ 1.9%. The test is unchanged — it is the rarity of the disease that destroys the meaning of a positive result, because the enormous healthy population generates far more false positives than there are true cases. The same test at 10% prevalence gives a PPV of 68%.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A dog with intense non-seasonal pruritus, crusting at the ear margins and elbows, and a positive pinnal-pedal reflex has had two negative superficial skin scrapes.',
    lead:'How should the negative scrapes be interpreted?',
    a:'The scrape has low sensitivity, so a negative result does not rule out sarcoptic mange — treat empirically',
    wrong:['The scrape has high sensitivity, so sarcoptic mange is effectively excluded','The negative results confirm demodicosis instead','A third scrape is required before any treatment can be justified'],
    why:'Very few Sarcoptes mites are usually present, so the scrape misses most true cases — it is a low-sensitivity, high-specificity test. A negative does not exclude the diagnosis, while a positive is essentially conclusive. Because a sensitive test is what rules disease out (SnNout), an insensitive one cannot.'
  });

  Q.push({
    m:'diagnostics',
    stem:'You are choosing between two tests for a regulatory program in which a positive result means the animal is quarantined for life or euthanized.',
    lead:'Which test characteristic matters most?',
    a:'High specificity',
    wrong:['High sensitivity','High analytical sensitivity','A high negative predictive value'],
    why:'A false positive here is unrecoverable for that animal, so you need a test that almost never calls a healthy animal positive — that is specificity, and SpPin says a positive on a highly specific test rules disease in. Equine infectious anemia testing is exactly this setting. Sensitivity is what you optimize when a missed case is the expensive error.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A herd is screened for bovine tuberculosis with the caudal fold tuberculin test, read at 72 hours. Reactors are then tested with the comparative cervical test.',
    lead:'What is the statistical logic of this two-step scheme?',
    a:'Serial testing — a sensitive screen followed by a specific confirmation, which raises overall specificity',
    wrong:['Parallel testing — running both tests raises overall sensitivity','Serial testing — which raises overall sensitivity','Parallel testing — which reduces the false negative rate to near zero'],
    why:'Testing only the positives from the first test and requiring both to agree is serial testing: overall specificity rises and overall sensitivity falls slightly. The caudal fold test is the sensitive herd screen; the comparative cervical test is the more specific follow-up that separates M. bovis from M. avium sensitization. Parallel testing — calling it positive if either test is positive — does the opposite.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A continuous-scale assay reports a numeric value, and the laboratory lowers the cutoff used to call a result positive.',
    lead:'What happens to the test characteristics?',
    a:'Sensitivity rises and specificity falls',
    wrong:['Sensitivity falls and specificity rises','Both rise, because more information is used','Neither changes — they are fixed properties of the assay'],
    why:'More results cross a lower threshold, so more diseased animals are caught (sensitivity up) and more healthy animals are wrongly flagged (specificity down). The two always trade against each other for a given assay; the ROC curve plots that trade-off as sensitivity against 1 − specificity, and the area under it measures overall discrimination.'
  });

  Q.push({
    m:'diagnostics',
    stem:'Of 100 dogs tested, 40 truly have the disease. The test returns 36 true positives, 4 false negatives, 6 false positives and 54 true negatives.',
    lead:'What is the positive predictive value?',
    a:'85.7%',
    wrong:['90.0%','93.1%','40.0%'],
    why:'PPV = TP/(TP+FP) = 36/(36+6) = 36/42 = 85.7% — read across the test-positive row. The 90% figures are sensitivity (36/40) and specificity (54/60), read down the disease columns, and 93.1% is the NPV (54/58). Reading the grid in the wrong direction is the most common error on these items.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A clinic adopts a new in-house test. Sensitivity and specificity are unchanged from the reference laboratory version, but the clinic serves a much higher-risk caseload than the reference population.',
    lead:'Which values change?',
    a:'PPV rises and NPV falls',
    wrong:['Sensitivity and specificity both rise','PPV falls and NPV rises','Nothing changes, because the test is the same'],
    why:'Sensitivity and specificity are properties of the test and do not move with the population. Predictive values do: as prevalence rises, a positive result is more likely to be real (PPV up) and a negative result is less reassuring (NPV down). This is why the same test performs differently in a referral hospital than in a wellness clinic.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A test for a disease with a prevalence of 0.1% is evaluated. It returns a negative result on every animal tested, and is reported as 99.9% accurate.',
    lead:'What is the problem with that claim?',
    a:'Accuracy is inflated by the huge true-negative count; the sensitivity of this test is zero',
    wrong:['Accuracy is the correct summary measure and the test is excellent','The specificity is zero, which is what accuracy is hiding','Accuracy cannot be calculated without knowing the gold standard'],
    why:'Accuracy = (TP+TN)/total, and when 99.9% of animals are healthy a test that never calls anything positive scores 99.9% while catching no cases at all. Sensitivity is TP/(TP+FN) = 0/100 = 0%. Its specificity is a perfect 100% — which is exactly why accuracy alone is a misleading summary for a rare disease.'
  });

  Q.push({
    m:'diagnostics',
    stem:'An in-house chemistry analyzer is run five times on the same control sample. The five results are nearly identical to each other, but all five sit well above the control material\'s stated value.',
    lead:'How is this analyzer best described?',
    a:'Precise but inaccurate',
    wrong:['Accurate but imprecise','Both accurate and precise','Neither accurate nor precise'],
    why:'Precision is repeatability — how tightly repeated measurements cluster — and these cluster tightly. Accuracy is closeness to the true value, and they are all systematically high. A consistently miscalibrated analyzer is the textbook example of precise and inaccurate.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A dog vaccinated against Lyme disease is tested with an antibody assay against the C6 peptide, which returns positive.',
    lead:'What does this result indicate?',
    a:'Natural exposure to Borrelia burgdorferi, because the C6 antibody is not produced in response to vaccination',
    wrong:['Vaccine response only, which is why the C6 test is used post-vaccination','Active clinical Lyme disease requiring immediate treatment','A false positive, since vaccinated dogs cannot be tested serologically'],
    why:'The whole point of the C6 test is its specificity for natural exposure: vaccinated dogs do not make antibody to that peptide, so a positive distinguishes exposure from vaccine response in a way general Borrelia serology cannot. Exposure is not the same as clinical disease — many seropositive dogs never develop signs.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A test has a sensitivity of 90% and a specificity of 90%.',
    lead:'What is the positive likelihood ratio?',
    a:'9',
    wrong:['0.11','0.9','1.8'],
    why:'LR+ = Sn/(1 − Sp) = 0.90/0.10 = 9, meaning a positive result makes the disease about nine times more likely than it was beforehand. The negative likelihood ratio is (1 − Sn)/Sp = 0.10/0.90 = 0.11. An LR+ above 10 or an LR− below 0.1 is considered strongly informative.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A shelter wants to be as certain as possible that no infected animal enters the general population. Two independent tests are available, and any animal positive on either test will be isolated.',
    lead:'What is the effect of this strategy?',
    a:'Parallel testing — sensitivity rises and specificity falls',
    wrong:['Parallel testing — specificity rises and sensitivity falls','Serial testing — specificity rises and sensitivity falls','Serial testing — sensitivity rises and specificity falls'],
    why:'Calling an animal positive if either test is positive is parallel testing: fewer cases are missed (sensitivity up) at the cost of more healthy animals being isolated (specificity down). That trade is appropriate when a missed case is unacceptable. Requiring both tests to agree — serial testing — would do the opposite.'
  });

  Q.push({
    m:'diagnostics',
    stem:'Two clinicians independently score the same 200 radiographs as normal or abnormal. Only 6% of the films are truly abnormal, and the two agree on 92% of them.',
    lead:'Which statistic should be reported instead of raw percent agreement?',
    a:'Kappa',
    wrong:['Specificity','Positive predictive value','The likelihood ratio'],
    why:'When one outcome is rare, two observers who both call almost everything normal will agree a high proportion of the time by chance alone. Kappa corrects agreement for the amount expected by chance, which is why it is the statistic reported for inter-observer and inter-test agreement.'
  });

  Q.push({
    m:'diagnostics',
    stem:'An exam item prints the standard lettered 2 × 2, with disease status across the top and test result down the side: cell A is test-positive and diseased, B is test-positive and healthy, C is test-negative and diseased, D is test-negative and healthy.',
    lead:'Which expression gives the sensitivity?',
    a:'A / (A + C)',
    wrong:['A / (A + B)','D / (B + D)','D / (C + D)'],
    why:'Sensitivity is read straight down the diseased column, which contains A and C — the animals that truly have the disease, split by whether the test found them. A/(A+B) is the PPV, read across the positive row; D/(B+D) is specificity; D/(C+D) is the NPV.'
  });

  Q.push({
    m:'diagnostics',
    stem:'Using the same lettered layout — A test-positive and diseased, B test-positive and healthy, C test-negative and diseased, D test-negative and healthy.',
    lead:'Which cell represents the false negatives?',
    a:'C',
    wrong:['A','B','D'],
    why:'A false negative is a diseased animal the test called negative — the test-negative row crossed with the diseased column, which is C. B is the false positives, and A and D are the two correct cells. Mislabelling C as B is the single most common error on lettered-table items.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A lettered 2 × 2 is given with A = 90, B = 60, C = 10, D = 340. A is test-positive and diseased, B is test-positive and healthy, C is test-negative and diseased, D is test-negative and healthy.',
    lead:'What is the positive predictive value?',
    a:'60%',
    wrong:['90%','85%','15%'],
    why:'PPV = A/(A+B) = 90/150 = 60% — read across the test-positive row. The 90% figure is the sensitivity, A/(A+C) = 90/100, read down the diseased column. Reading the grid in the wrong direction is what turns a 60% answer into a 90% one.'
  });

  Q.push({
    m:'diagnostics',
    stem:'On the same lettered 2 × 2, an item asks you to identify the denominator used for specificity.',
    lead:'Which cells make up that denominator?',
    a:'B + D — all the truly healthy animals',
    wrong:['A + C — all the truly diseased animals','C + D — all the test-negative animals','A + B — all the test-positive animals'],
    why:'Specificity = D/(B+D). The denominator is the healthy column: every animal without the disease, split by whether the test correctly cleared it. A+C is the denominator for sensitivity, C+D for NPV, and A+B for PPV.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A herd of 600 cattle has a true prevalence of 10%. The available test is 90% sensitive and 95% specific.',
    lead:'How many infected cattle will this test MISS?',
    a:'6',
    wrong:['54','27','60'],
    why:'Go straight to the error cell with the complement: diseased = 600 × 10% = 60, and the test misses (1 − 0.90) = 10% of them, so FN = 60 × 0.10 = 6. There is no need to compute the 54 true positives and subtract. The 27 is the false positive count — 540 healthy × (1 − 0.95) — and 60 is the diseased column itself.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A clinic screens 400 dogs. Prevalence is 25%, and the test is 88% sensitive and 90% specific.',
    lead:'How many healthy dogs will be wrongly flagged as positive?',
    a:'30',
    wrong:['12','88','300'],
    why:'False positives come out of the healthy column via the complement of specificity: healthy = 400 × 75% = 300, and 1 − 0.90 = 10% of them are wrongly flagged, so FP = 300 × 0.10 = 30. The 12 is the false negatives — 100 diseased × (1 − 0.88) — and 300 is the healthy column itself.'
  });

  Q.push({
    m:'diagnostics',
    stem:'A student is asked for the number of false negatives a 75% sensitive test will produce in a group of 80 truly infected animals.',
    lead:'What is the most direct route to the answer?',
    a:'80 × (1 − 0.75) = 20',
    wrong:['80 × 0.75 = 60, then that is the answer','80 ÷ 0.75 = 107','80 × 0.25 × 0.75 = 15'],
    why:'Sensitivity is the fraction of diseased animals the test catches, so its complement is the fraction it misses — apply (1 − Sn) to the diseased column and you land on the false negatives in one step. Computing 80 × 0.75 = 60 gives the true positives, which then needs a subtraction; the complement skips it entirely.'
  });

})(window.NAVLE_QUESTIONS);
