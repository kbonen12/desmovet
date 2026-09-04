/* NAVLE Hub — Equine
 * Source: NAVLE_Equine_Study_Guide.pdf
 * Equine is 14.7% of the exam — the largest block after dogs and cats.
 */
(function (N) {
  N.push({
    id: 'equine',
    group: 'Species',
    title: 'Equine',
    tagline: '14.7% of the exam — the largest block after dogs and cats.',
    weight: 14.7,
    sections: [

      /* ---------------- Cardiology ---------------- */
      {
        type: 'table', title: 'Cardiology',
        columns: ['Topic', 'Key facts'],
        rows: [
          ['Most common arrhythmias', 'Atrial fibrillation is the most common pathologic arrhythmia. Second-degree AV block is the most common arrhythmia at rest and is physiologic in a resting horse with a low heart rate — it disappears with exercise or excitement. Mobitz type I (Wenckebach) shows progressive PR/PQ prolongation before a dropped beat and is the normal equine finding; Mobitz type II shows no progressive prolongation and is pathologic.'],
          ['Atrial fibrillation — recognition', 'Irregularly irregular rhythm that does NOT disappear with exercise — that is the discriminator from physiologic 2° AV block. No P waves, irregular R-R intervals. Confirm with ECG.'],
          ['Atrial fibrillation — treatment', 'Quinidine (a class IA sodium channel blocker) for chemical conversion; add digoxin for rate control if quinidine produces an accelerated ventricular response. Transvenous electrical cardioversion is the modern alternative. Prognosis is good with cardioversion provided there is no underlying structural heart disease.'],
          ['Aortic rupture', 'The FRIESIAN — older male. A breed-specific predisposition worth memorizing on its own.'],
          ['Holodiastolic musical decrescendo murmur', 'Aortic insufficiency / regurgitation — the classic "dove coo" murmur of the older horse. Usually well tolerated.'],
          ['Thumps (synchronous diaphragmatic flutter)', 'Associated with HYPOCALCEMIA and other electrolyte derangements — the phrenic nerve depolarizes alongside the atria, so the flank twitches in time with the heartbeat. Endurance horses after prolonged exertion and sweating.'],
          ['Splenic contraction', 'Epinephrine release increases PCV/HCT — the horse stores a large red cell reserve in the spleen, so an excited horse has an artifactually high PCV.'],
          ['DIC treatment', 'Heparin. DIC is a state of excessive clotting; aminocaproic acid does the opposite — it prevents breakdown of a formed clot and is used to control excessive bleeding.']
        ]
      },

      /* ---------------- Respiratory ---------------- */
      {
        type: 'table', title: 'Equine asthma (RAO / heaves)',
        columns: ['Aspect', 'Detail'],
        rows: [
          ['Mild-to-moderate signs', 'Exercise intolerance / poor performance and chronic cough. No signs at rest.'],
          ['Severe (heaves)', 'Mild neutrophilia, hyperfibrinogenemia, increased SAA, and BAL containing CURSCHMANN SPIRALS (inspissated mucus plugs). Also a "heave line" from abdominal effort, nostril flare, and increased expiratory effort.'],
          ['Diagnosis', 'BAL — Curschmann spirals and neutrophilia. Environmental history: hay and indoor stabling, or summer pasture for the pasture-associated form.'],
          ['The confirmatory drug test', 'Buscopan (N-butylscopolammonium), a bronchodilator — improvement after administration confirms reversible bronchoconstriction.'],
          ['Treatment', 'Clenbuterol (beta-2 agonist) and dexamethasone. Environmental management is the real treatment — soaked hay or complete feed, turnout, dust reduction.']
        ]
      },
      {
        type: 'table', title: 'Upper airway surgical disease',
        columns: ['Condition', 'Presentation', 'Treatment'],
        rows: [
          ['Laryngeal hemiplegia ("roaring")', 'Left recurrent laryngeal neuropathy → failure of arytenoid abduction → inspiratory noise and exercise intolerance. Large breeds.', 'Prosthetic laryngoplasty ("tie-back") of the affected side.'],
          ['Dorsal displacement of the soft palate (DDSP)', 'Expiratory "gurgling" noise, choking-down during exercise.', 'Tie-forward procedure, or staphylectomy (resection of the caudal free margin of the soft palate).'],
          ['Epiglottic entrapment', 'Abnormal airway noise; the aryepiglottic fold envelops the epiglottis.', 'Surgical transection of the entrapping fold.'],
          ['Ethmoid hematoma', 'UNILATERAL EPISTAXIS — the buzzword — intermittent and not exercise-associated.', 'Intralesional formaldehyde via endoscope. Perform CT or MRI FIRST to assess the cribriform plate — formaldehyde reaching the cribriform plate causes fatal neurologic injury.'],
          ['Guttural pouch tympany', 'Young horse with a non-painful, air-filled swelling in the parotid region.', 'Surgical fenestration of the median septum.'],
          ['Temporohyoid osteoarthropathy (THO)', 'Arthritis at the junction of the stylohyoid and temporal bones. CN VII and VIII deficits — head shaking, facial paralysis, vestibular signs.', 'Unilateral ceratohyoidectomy to reduce leverage on the fused joint.'],
          ['Viborg\'s triangle', 'The surgical landmark for guttural pouch access, bounded by three structures: ramus (bend) of the mandible, the linguofacial vein, and the tendon of the sternocephalicus muscle.', 'A classic anatomy question — know the three borders.']
        ]
      },
      {
        type: 'table', title: 'Lower airway & pleural disease',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Pleuropneumonia', 'Main organism: Streptococcus equi subsp. zooepidemicus. Classic history is long-distance transport with the head tied up ("shipping fever").'],
          ['Acute bronchointerstitial pneumonia', 'Two risk factors: heat stress and recent antimicrobial use. Foals; high mortality.'],
          ['EIPH (exercise-induced pulmonary hemorrhage)', 'Diagnosed by hemosiderin within alveolar macrophages ("siderophages") on BAL.'],
          ['EHV-5', 'Equine multinodular pulmonary fibrosis (EMPF) — progressive nodular interstitial fibrosis in adult horses.'],
          ['Dysphagia', 'Most common complication: aspiration pneumonia.'],
          ['Anhidrosis', 'Diagnose with the terbutaline sweat test — intradermal beta-2 agonist fails to provoke sweating.'],
          ['Why horses cannot vomit', 'A strong lower esophageal sphincter with an oblique, low angle of entry into the stomach — functionally a one-way valve. This is why gastric reflux must be relieved by nasogastric tube and why gastric rupture is a real risk in obstructive colic.']
        ]
      },

      /* ---------------- Colic & GI ---------------- */
      {
        type: 'table', title: 'GI functional anatomy you will be asked about',
        columns: ['Structure', 'Detail'],
        rows: [
          ['Cecum', 'Sits on the RIGHT side.'],
          ['Small colon', 'The segment with ONE broad antimesenteric band — and the site where fecaliths lodge. The right ventral colon has 4 bands.'],
          ['Most common impaction site', 'PELVIC FLEXURE of the large colon, where the diameter narrows sharply. Second most common: the junction of the right dorsal colon with the transverse colon.'],
          ['Epiploic foramen', 'The opening into the omental bursa, bounded by the caudate lobe of the liver, the portal vein, and the caudal vena cava. Entrapment incarcerates the distal jejunum and ileum — a strangulating lesion requiring emergency surgery. The behavioral association is CRIBBING.'],
          ['Normal gastric capacity', '8–10 L — small relative to body size, which is why gastric rupture occurs when reflux is not relieved.']
        ]
      },
      { type: 'callout', variant: 'pearl', title: 'The cribbing question', body: 'Cribber + acute severe colic + small intestinal distension → EPIPLOIC FORAMEN ENTRAPMENT. One of the tightest signalment-to-lesion links in equine medicine.' },
      {
        type: 'table', title: 'Equine gastric ulcer syndrome (EGUS)',
        columns: ['Type', 'Features', 'Treatment'],
        rows: [
          ['Equine SQUAMOUS gastric disease', 'The upper, non-glandular mucosa. Graded 0–4. Caused by acid splashing during exercise and intermittent feeding.', 'Responds well to a 28-day course of omeprazole. Feeding alfalfa is useful — it buffers and raises stomach pH.'],
          ['Equine GLANDULAR gastric disease', 'The lower, glandular mucosa. Described morphologically as hemorrhagic, fibrinosuppurative, raised, or flat. Reflects a breakdown of mucosal defense rather than acid excess — harder to treat.', 'Omeprazole PLUS sucralfate PLUS misoprostol. Longer courses; often needs management change.'],
          ['What divides them', 'The MARGO PLICATUS — the abrupt line separating squamous from glandular mucosa.', 'Naming it is the exam question.']
        ]
      },
      {
        type: 'table', title: 'Colic lesions & enteropathies',
        columns: ['Condition', 'Features', 'Management'],
        rows: [
          ['Large colon impaction', 'Pelvic flexure; slow-onset, mild-to-moderate pain, decreased manure.', 'Initial treatment: 6–8 L of water by nasogastric tube every 4–6 hours, plus analgesia and IV fluids. Withhold feed.'],
          ['Enterolith', 'Composed of MAGNESIUM AMMONIUM PHOSPHATE (struvite), layered around a nidus. Alfalfa-heavy diets and California are classic associations.', 'Abdominal radiographs are about 80% sensitive. Treatment is midline celiotomy to remove them.'],
          ['Duodenitis–proximal jejunitis (DPJ)', 'Large-volume gastric reflux, fever, depression. Associated with laminitis; itself a proximal enteritis.', 'Medical: repeated nasogastric decompression, IV fluids, anti-endotoxic therapy. Distinguish from strangulating obstruction, which needs surgery.'],
          ['Colic with large volumes of gastric reflux', 'Points to a proximal (small intestinal) lesion — DPJ, ileal impaction, or a strangulating small intestinal obstruction.', 'Decompress, then determine surgical vs. medical.'],
          ['Equine proliferative enteropathy', 'Lawsonia intracellularis — weanling and yearling horses. Diarrhea and profound HYPOPROTEINEMIA with ventral edema.', 'Tetracyclines (oxytetracycline or doxycycline); also erythromycin/rifampin. Plasma for severe hypoproteinemia.'],
          ['Most common IBD in horses', 'Lymphocytic-plasmacytic enterocolitis.', 'Corticosteroids.'],
          ['Most common cause of peritonitis in an adult horse', 'Large or small strongyle migration (cyathostomiasis). Think Actinobacillus equuli as the organism.', 'Antimicrobials, peritoneal lavage, anthelmintic control.'],
          ['Rectal prolapse', 'Common cause: dystocia.', 'Reduce, purse-string, treat the cause.'],
          ['Rectal tears — the four grades', 'Grade 1 — mucosa and submucosa only. Grade 2 — muscularis alone ruptured (mucosa intact). Grade 3 — mucosa, submucosa, and muscularis (serosa intact). Grade 4 — full-thickness tear into the abdomen.', 'Grade 4 is a surgical emergency and a malpractice-exposure event. Stop the exam, sedate, give antibiotics and anti-inflammatories, and refer immediately.'],
          ['Prerenal azotemia', 'BUN:creatinine ratio over 20:1.', 'Fluid therapy.']
        ]
      },
      {
        type: 'table', title: 'Infectious diarrhea',
        columns: ['Agent', 'Presentation', 'Diagnosis & treatment'],
        rows: [
          ['Potomac horse fever (equine monocytic ehrlichiosis)', 'Neorickettsia risticii, an intracellular bacterium infecting MONOCYTES. Fever, diarrhea, laminitis, abortion. Seen in the FALL on the EAST COAST and generally near water — the organism lives in trematodes in aquatic insects (caddisflies, mayflies) that horses ingest accidentally.', 'Blood or fecal PCR. Treat with OXYTETRACYCLINE.'],
          ['Rotavirus', 'The classic stem: a 2–5 month old foal with profuse "cow pie" diarrhea and dehydration. Destroys enterocytes → lactase deficiency → maldigestion and malabsorption.', 'Resistant to PHENOLIC disinfectants — use bleach or accelerated hydrogen peroxide. Vaccinate mares in late gestation. Supportive care.'],
          ['Clostridium perfringens type C', 'Fulminant HEMORRHAGIC diarrhea in foals under 10 days of age. Peracute and often fatal.', 'Metronidazole for clostridial enterocolitis in foals; antitoxin, plasma, and aggressive supportive care.'],
          ['Clostridioides difficile', 'Antimicrobial-associated colitis. The classic setup: a foal is treated with erythromycin for Rhodococcus, and the MARE develops enterocolitis from grooming and ingesting the drug.', 'Metronidazole.'],
          ['Salmonellosis', 'Fever and severe illness. Fecal culture needs multiple samples because shedding is intermittent.', 'Isolation and barrier nursing; supportive care.'],
          ['NSAID toxicity / right dorsal colitis', 'History of phenylbutazone use; hypoproteinemia; thickened right dorsal colon on ultrasound.', 'Stop the NSAID; pelleted low-bulk diet, misoprostol, sucralfate.'],
          ['Sand enteropathy', 'Sandy soil or pasture exposure; sand settles out on a fecal float-in-water test.', 'Psyllium, mineral oil, dietary management.']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Erythromycin, the foal, and the mare', body: 'A favorite exam item because it tests two facts at once: macrolides are the treatment for Rhodococcus equi in the foal, and macrolides cause fatal colitis in the adult horse. The mare is poisoned by her own foal\'s medication. Warn owners to wear gloves and prevent the mare from licking the foal\'s mouth after dosing. And always ask about recent NSAID or antibiotic use in an adult horse with colitis — iatrogenic causes are common and easy to overlook.' },

      /* ---------------- Liver, muscle, endocrine ---------------- */
      {
        type: 'table', title: 'Hepatic disease',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Liver-specific enzyme', 'SDH (sorbitol dehydrogenase) is the liver-specific enzyme in the horse — and in cattle, sheep, and goats. GGT is the useful cholestatic marker. ALT is not liver-specific in large animals.'],
          ['Pyrrolizidine alkaloid toxicosis', 'Hepatocytes cannot divide → progressive hepatic failure and hepatic encephalopathy. Three diagnostic findings: MEGALOCYTOSIS, PERIPORTAL FIBROSIS, BILE DUCT HYPERPLASIA. Plants: ragwort (Senecio), fiddleneck (Amsinckia), groundsel, tansy.'],
          ['Theiler\'s disease (serum hepatitis)', 'The look-alike for PA toxicosis. Acute hepatic necrosis weeks after administration of an equine biologic (tetanus antitoxin, plasma); now attributed to equine parvovirus-hepatitis. Differentiate on histopathology — PA gives megalocytosis and fibrosis, Theiler\'s gives acute centrilobular necrosis without megalocytes.'],
          ['Secondary photosensitization', 'Phylloerythrin, the normal chlorophyll breakdown product, is normally cleared by the liver. When the liver is damaged it accumulates in skin and reacts with UV light, burning white and unpigmented areas. Primary photosensitization, with no liver disease, comes from St. John\'s wort, Erodium, brassicas, Hypericum — and from tetracyclines.'],
          ['Portosystemic shunt in FOALS', 'Two features: neurologic signs, and — the trap — NORMAL liver enzymes. A shunt bypasses the liver rather than damaging it.'],
          ['Hemochromatosis', 'An iron storage disease with hemosiderin deposited in hepatocytes. Related: oral IRON supplementation causes liver injury and hepatic encephalopathy in FOALS — never give oral iron to a neonatal foal.'],
          ['SAA vs. fibrinogen', 'Both are made by the LIVER. SAA rises and falls faster than fibrinogen, making it the better marker of acute and resolving inflammation.']
        ]
      },
      {
        type: 'table', title: 'Muscle disease',
        columns: ['Condition', 'Pathophysiology & signs', 'Management'],
        rows: [
          ['HYPP (hyperkalemic periodic paralysis)', 'Autosomal DOMINANT mutation of the skeletal muscle voltage-gated sodium channel. Channels fail to close, sodium leaks in, the muscle stays depolarized and cannot repolarize → weakness and paralysis, with potassium leaving the cell → HYPERKALEMIA. Quarter Horses tracing to Impressive.', 'Three-part emergency treatment: 5% sodium bicarbonate IV (drives K⁺ into the cell in exchange for H⁺); 5% dextrose IV ± insulin (drives K⁺ intracellularly); calcium borogluconate IV (stabilizes the myocardium against hyperkalemia). Long term: low-potassium diet, acetazolamide.'],
          ['Exertional rhabdomyolysis ("tying up")', 'Two lab indicators: elevated CK and AST. CK peaks early; AST stays up longer.', 'Rest, fluids (myoglobin is nephrotoxic), NSAIDs.'],
          ['PSSM type 1', 'Polysaccharide storage myopathy — abnormal glycogen accumulation.', 'Diet HIGH IN FAT and LOW IN STARCH, plus consistent daily exercise.'],
          ['Post-anesthetic myositis', 'Compartment-syndrome-like muscle injury after recumbency.', 'Dantrolene — a ryanodine receptor antagonist and muscle relaxant. Keep MAP above 70 mmHg under anesthesia to prevent it.']
        ]
      },
      {
        type: 'table', title: 'Endocrine',
        columns: ['Condition', 'Pathophysiology', 'Diagnosis & treatment'],
        rows: [
          ['PPID (pituitary pars intermedia dysfunction, "equine Cushing\'s")', 'LOSS OF DOPAMINE production by hypothalamic neurons that normally inhibit the pars intermedia → unrestrained POMC-derived hormone output. Hirsutism/hypertrichosis, laminitis, muscle wasting, PU/PD.', 'Resting ACTH, accounting for the seasonal autumn rise; TRH stimulation improves sensitivity. Treat with PERGOLIDE — a DOPAMINE AGONIST that replaces the missing inhibition.'],
          ['EMS (equine metabolic syndrome)', 'Insulin dysregulation with regional adiposity and laminitis risk.', 'Test a resting insulin first, then an oral sugar test if equivocal. Diet and exercise; levothyroxine or metformin as adjuncts.'],
          ['Nutritional secondary hyperparathyroidism ("big head" / bran disease)', 'Excess dietary phosphorus, or oxalate-rich grasses, blocks calcium absorption → PTH rises → fibrous osteodystrophy of the facial bones.', 'Increased PTH, HYPERPHOSPHATEMIA, normal-to-low calcium. Correct the calcium:phosphorus ratio.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire GI, liver & metabolic recall',
        items: [
          ['Cribber with acute colic', 'Epiploic foramen entrapment'],
          ['Enterolith', 'Magnesium ammonium phosphate → radiographs 80% sensitive → surgery'],
          ['The line dividing squamous from glandular ulcers', 'Margo plicatus'],
          ['Foal with cow-pie diarrhea', 'Rotavirus — resistant to phenolics'],
          ['Fall, east coast, near water, fever + diarrhea + laminitis', 'Potomac horse fever → oxytetracycline'],
          ['Weanling with diarrhea and severe hypoproteinemia', 'Lawsonia → tetracyclines'],
          ['Megalocytosis + bile duct hyperplasia', 'Pyrrolizidine alkaloids'],
          ['Foal with neuro signs and normal liver enzymes', 'Portosystemic shunt'],
          ['Quarter Horse that goes down with hyperkalemia', 'HYPP → bicarbonate, dextrose, calcium'],
          ['Hairy coat that won\'t shed + laminitis', 'PPID → pergolide']
        ]
      },

      /* ---------------- Neurology ---------------- */
      { type: 'callout', variant: 'pearl', title: 'The ataxic horse — the single highest-yield equine neurology item', body: 'Five conditions produce an ataxic horse, and the exam separates them by age, symmetry, and one diagnostic test. Work the table below before anything else.' },
      {
        type: 'table', title: 'The ataxic horse algorithm', wide: true,
        columns: ['Disease', 'Age', 'Signs', 'Diagnosis & treatment'],
        rows: [
          ['Cervical vertebral malformation (wobblers / CVM)', 'Type 1 young; type 2 older', 'SYMMETRIC ataxia, WORSE IN THE PELVIC LIMBS, UMN signs, circumduction of the hindlimbs.', 'Myelography with contrast.'],
          ['EPM', 'Any', 'ASYMMETRIC ataxia with focal muscle atrophy — the discriminator from wobblers. Cranial nerve deficits possible. Sarcocystis neurona; opossum definitive host.', 'Check a CBC for anemia before and during treatment. Three options: antifolate antibiotics (sulfadiazine/sulfamethoxazole + pyrimethamine, 6 months); oral ponazuril, 28 days; diclazuril pellets, 28 days.'],
          ['EDM (equine degenerative myeloencephalopathy)', 'Under 1 year', 'SYMMETRIC ataxia in a young horse.', 'Caused by LOW VITAMIN E in foals lacking green feed or supplementation. Supplement vitamin E.'],
          ['EHV-1 myeloencephalopathy', 'Adult', 'ASCENDING PARALYSIS and POSTERIOR PARESIS; urinary incontinence and a flaccid tail. Often a traveling horse with a fever.', 'CSF: XANTHOCHROMIC with elevated protein. Vasculitis and thrombosis of spinal vessels. Supportive care; strict biosecurity.'],
          ['Cauda equina syndrome (polyneuritis equi)', 'Adult', 'Poor tail tone and fecal incontinence; perineal analgesia; urinary retention.', 'An autoimmune reaction against myelin P2 protein. Prognosis POOR.'],
          ['Equine motor neuron disease (EMND)', 'Adult', 'Three signs: weight loss with a GOOD appetite, inability to stand / constant weight shifting, and generalized muscle atrophy. Trembling, low head carriage. Not truly ataxic — weak.', 'Caused by LOW VITAMIN E. Diagnose by biopsy of the sacrocaudalis dorsalis (tail head) muscle and the spinal accessory nerve.']
        ]
      },
      {
        type: 'table', title: 'The two types of wobblers',
        columns: ['Type', 'Signalment', 'Mechanism & site', 'Treatment'],
        rows: [
          ['Type 1 — dynamic compression', 'Young horse, Thoroughbred', 'Compression occurs when the neck is FLEXED. Most common at C3–C4 and C4–C5. Associated with OCD and rapid growth.', 'Dietary restriction and limited exercise — slow the growth rate.'],
          ['Type 2 — static compression', 'Older horse, Warmblood', 'Osteophytes from articular process osteoarthritis compress the cord regardless of position. Most common at C5–C6 and C6–C7.', 'NSAIDs and stall rest; surgical stabilization in selected cases.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'Wobblers vs. EPM — the discriminator that answers most questions', body: 'WOBBLERS = SYMMETRIC ataxia, worse behind, no muscle atrophy, young growing horse → myelogram. EPM = ASYMMETRIC ataxia with focal muscle atrophy and possible cranial nerve signs → antiprotozoal therapy. Symmetry is the fastest discriminator.' },
      {
        type: 'table', title: 'Encephalitides',
        columns: ['Disease', 'Virus', 'Features', 'Diagnosis'],
        rows: [
          ['EEE and WEE', 'Togavirus (alphavirus)', 'Mosquito-borne; birds are the reservoir. EEE has very high mortality.', 'IgM capture ELISA — the test of choice for all equine arboviral encephalitides. CSF in EEE: NEUTROPHILIC pleocytosis with increased protein — unusual for a viral encephalitis and therefore a testable detail.'],
          ['VEE ⚑R', 'Alphavirus', 'High viremia — which is why the horse is an amplifying host for VEE, unlike EEE and WEE where horses are dead-end hosts.', 'IgM ELISA; report.'],
          ['West Nile virus', 'Flavivirus', 'Two signs to name: FINE MUSCLE TREMORS and HYPERESTHESIA. Also ataxia and cranial nerve deficits.', 'IgM ELISA. Vaccinate — highly effective.'],
          ['Borna disease', 'Bornavirus', 'Associated with Joest-Degen intranuclear inclusion bodies.', 'Histopathology.'],
          ['Hendra virus ⚑R ⚑Z', 'Henipavirus (paramyxovirus)', 'Fatal respiratory and neurologic disease in horses in AUSTRALIA; endemic in FRUIT BATS. Highly fatal zoonosis — has killed veterinarians.', 'Exclusion diagnosis in any Australian horse with fever plus respiratory or neurologic signs. Extreme PPE.'],
          ['Rabies ⚑R ⚑Z', 'Lyssavirus', 'Protean — can mimic colic, lameness, or any neurologic presentation.', 'Always on the differential for an unexplained equine neurologic case. Vaccinate. Use PPE and do not perform an oral exam or necropsy without precautions.']
        ]
      },
      {
        type: 'table', title: 'Neuromuscular & other',
        columns: ['Condition', 'Features', 'Treatment'],
        rows: [
          ['Botulism — adult', 'Flaccid paralysis from blockade of acetylcholine release at the neuromuscular junction. Dysphagia, weak tongue tone, trembling, recumbency.', 'Antitoxin; supportive care and ventilation. Vaccinate in endemic regions (Kentucky, mid-Atlantic).'],
          ['Shaker foal syndrome', 'Botulism in foals 2 weeks to 8 months. Different from adult botulism — foals ingest the SPORE, which germinates and produces toxin IN the gut (a toxico-infection), rather than ingesting preformed toxin. C. botulinum type B.', 'Antitoxin and potassium penicillin (to kill vegetative organisms in the gut). Nursing care.'],
          ['Tetanus', 'Clostridium tetani; blocks inhibitory neurotransmitter release → spastic paralysis, third eyelid prolapse, "sawhorse" stance, lockjaw.', 'Three-part treatment: antitoxin IV, metronidazole PO or per rectum, and penicillin. Plus a dark quiet stall, sedation, and wound debridement.'],
          ['Peripheral vestibular disease', 'Four signs: head tilt, circling, loss of balance, and fast phase of nystagmus AWAY from the lesion. No proprioceptive deficits — that is what makes it peripheral. Common cause: THO.', 'Treat the underlying cause.'],
          ['Lead poisoning', 'ROARING and DYSPHAGIA — laryngeal and pharyngeal paralysis. A distinctive equine presentation of lead toxicosis.', 'Calcium EDTA chelation.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire equine neurology recall',
        items: [
          ['Symmetric ataxia, worse behind, young Thoroughbred', 'Wobblers type 1 → myelogram'],
          ['Asymmetric ataxia with muscle atrophy', 'EPM → ponazuril or diclazuril 28 days'],
          ['Ataxic foal under 1 year', 'EDM → vitamin E'],
          ['Weight loss with a good appetite + trembling', 'EMND → vitamin E, tail-head biopsy'],
          ['Traveling horse, fever, then hind-end paresis, xanthochromic CSF', 'EHV-1 myeloencephalopathy'],
          ['Poor tail tone + fecal incontinence', 'Cauda equina syndrome — poor prognosis'],
          ['Fine tremors + hyperesthesia', 'West Nile virus'],
          ['Neutrophilic CSF in an encephalitic horse', 'EEE'],
          ['Foal 2 weeks to 8 months, trembling and weak', 'Shaker foal — a toxico-infection'],
          ['Roaring plus dysphagia', 'Lead poisoning']
        ]
      },

      /* ---------------- Lameness ---------------- */
      {
        type: 'table', title: 'Conditions of the foot',
        columns: ['Condition', 'Definition', 'Treatment'],
        rows: [
          ['Quittor', 'Chronic infection of the COLLATERAL CARTILAGES of P3, with draining tracts at the coronary band.', 'Surgical debridement.'],
          ['Sidebone', 'OSSIFICATION of the collateral cartilages of P3, from repeated concussion on the quarters of the hoof. Often incidental.', 'Usually none.'],
          ['Canker', 'Suppurative HYPERTROPHY of the frog and sole — proliferative, foul-smelling tissue. Proliferative, unlike thrush which is destructive.', 'Debridement, topical therapy, dry environment.'],
          ['Thrush', 'Malodorous, black, degenerative infection of the frog sulci from wet, dirty footing.', 'Copper sulfate and EXERCISE, plus hygiene.'],
          ['Pedal osteitis', 'Demineralization of the solar margin of the distal phalanx, usually secondary to inflammation and chronic bruising.', 'Corrective shoeing, rest.'],
          ['Distal phalanx fracture (non-articular)', 'Fracture of P3 not involving the joint surface.', 'Bar shoe and rest.'],
          ['Club foot', 'Contracture of the distal interphalangeal joint. Classic: a Quarter Horse at 6 months. Congenital, or acquired from nutritional imbalance.', 'Trimming, toe extensions, oxytetracycline in foals, deep digital flexor tenotomy if severe.']
        ]
      },
      {
        type: 'table', title: 'Joints, tendons & sheaths',
        columns: ['Term', 'Definition'],
        rows: [
          ['Bog spavin', 'Idiopathic synovitis of the TIBIOTARSAL joint — soft, fluctuant distension of the hock.'],
          ['Thoroughpin', 'Tarsal sheath tenosynovitis — effusion of the sheath of the lateral deep digital flexor tendon at the tarsus. An incidental finding and NOT painful.'],
          ['Curb', 'Thickening or bowing of the plantar tarsal ligament, at the plantar aspect of the hock.'],
          ['Windpuffs', 'Digital sheath tenosynovitis. Treatment: nothing — a cosmetic blemish in an older working horse.'],
          ['Bowed tendon', 'Superficial digital flexor tendinitis — convex swelling of the palmar metacarpus.'],
          ['Tendon sheath most prone to tenosynovitis', 'The digital flexor tendon sheath (DFTS).'],
          ['Rupture of the common digital extensor tendon', 'In foals: swelling of the tendon sheath at the DORSOLATERAL aspect of the carpus. Often bilateral, often with flexural deformity; usually a good prognosis with splinting.'],
          ['Stifle pouches', 'The medial and lateral femorotibial pouches do NOT communicate with each other. The femoropatellar pouch communicates with the medial femorotibial in most horses — which matters for joint injections and infection spread.']
        ]
      },
      {
        type: 'table', title: 'Developmental orthopedic disease',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['OCD — most common location', 'The DISTAL INTERMEDIATE RIDGE OF THE TIBIA, in the tarsocrural joint. Failure of endochondral ossification.'],
          ['Subchondral bone cyst', 'Most commonly at the MEDIAL FEMORAL CONDYLE. Classic stem: a young Warmblood or Thoroughbred with stifle effusion and lameness. Part of the OCD/DOD complex.'],
          ['Flexural deformities in foals', 'Limit exercise and reassess daily. High-dose IV oxytetracycline is used for congenital flexural deformities — it chelates calcium and transiently relaxes the musculotendinous unit.'],
          ['Carpal valgus', 'Lateral deviation distal to the carpus. Treat with regular hoof rasping and periosteal stripping to encourage growth on the CONCAVE side. Transphyseal bridging for severe or late cases.'],
          ['Rib fractures in foals', 'Ribs 3–6 at the COSTOCHONDRAL JUNCTION — a common birth injury and a cause of sudden death from cardiac or pulmonary laceration. Palpate and ultrasound the thorax of every dystocia foal.']
        ]
      },

      /* ---------------- Ophthalmology ---------------- */
      {
        type: 'table', title: 'Ophthalmology',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Equine recurrent uveitis (ERU, "moon blindness")', 'The leading cause of blindness in horses; immune-mediated, with Leptospira as a recognized trigger. Appaloosas are predisposed. Two common sequelae: CATARACTS and GLAUCOMA.'],
          ['The pupil discriminator', 'Active GLAUCOMA → MYDRIATIC (dilated) pupil. Uveitis WITHOUT glaucoma → MIOTIC (constricted) pupil. A dilated pupil in a painful eye should make you measure intraocular pressure.'],
          ['Glaucoma treatment in ERU', 'Timolol — a beta blocker acting on the ciliary body to decrease aqueous humor production. Dorzolamide — a carbonic anhydrase inhibitor that also decreases production. Latanoprost increases outflow but is contraindicated in uveitis.'],
          ['Corpora nigra cysts', 'Cystic granula iridica on the dorsal pupillary margin, causing head-shy or spooky behavior when they obstruct vision. Treat symptomatic cysts with TRANSCORNEAL LASER PHOTOCOAGULATION. The ruminant equivalent is the GRANULA IRIDICA — same structure, different name.'],
          ['Cataracts', 'Most common cause in the horse: chronic uveitis.']
        ]
      },

      /* ---------------- Dermatology ---------------- */
      {
        type: 'table', title: 'Infectious & parasitic skin disease', wide: true,
        columns: ['Condition', 'Agent', 'Lesions', 'Treatment'],
        rows: [
          ['Dermatophytosis (ringworm) ⚑Z', 'Trichophyton equinum or T. mentagrophytes', 'Circular areas of alopecia and crusting, often in the girth and saddle area. Spread by tack and grooming equipment.', 'Griseofulvin; topical lime sulfur or enilconazole. Disinfect tack.'],
          ['Dermatophilosis ("rain rot", "rain scald") ⚑Z', 'Dermatophilus congolensis — a gram-positive facultative anaerobic actinomycete', 'Crusted, matted "paintbrush" tufts along the dorsum and rump after prolonged wetting.', 'Cytology: "RAILROAD TRACK" chains of cocci in two parallel rows. Keep dry; penicillin if severe.'],
          ['Bacterial folliculitis', 'Corynebacterium, Staphylococcus pseudintermedius, Staphylococcus aureus', 'Papules and pustules in the saddle and girth region.', 'Antibacterial shampoo; systemic antibiotics if deep.'],
          ['Pigeon fever / ulcerative lymphangitis', 'Corynebacterium pseudotuberculosis — gram-positive (stains PURPLE), facultative intracellular', 'Two syndromes: pigeon fever, with deep pectoral abscessation (also abdomen and groin) giving the "pigeon-breasted" look; and ulcerative lymphangitis, with limb swelling and draining tracts — cellulitis indicates progression.', 'Lance and drain abscesses; systemic antibiotics for the lymphangitic and internal forms. Fly control — Musca and Stomoxys transmit it.'],
          ['Epizootic lymphangitis ⚑R', 'Histoplasma capsulatum var. farciminosum — a chronic dimorphic fungal disease', 'Multiple swollen papules on the forelimbs and pectoral region with purulent drainage; ulcerative papules. Transmitted by Stomoxys flies.', 'Cytology: budding YEAST with a HALO, inside macrophages. Amphotericin B. A foreign animal disease of horses — not present in the US.'],
          ['Cutaneous habronemiasis ("summer sores")', 'Habronema muscae, H. microstoma, Draschia megastoma', 'Non-healing, exuberant granulation tissue at wounds, the medial canthus, and the prepuce — where flies deposit larvae.', 'Three-part control: regular anthelmintics (ivermectin), fly control, and manure removal.'],
          ['Onchocerciasis', 'Onchocerca cervicalis; Culicoides vector', 'A "BULL\'S EYE" lesion in the CENTER of the forehead — the buzzword. Also ventral midline dermatitis and uveitis.', 'Ivermectin — expect a transient inflammatory reaction as microfilariae die.'],
          ['Aural plaques', 'Ear papillomas — papillomavirus', 'White, flat, depigmented plaques on the inner pinna. Transmitted by BLACK FLIES. They last FOR LIFE.', 'Generally none; cosmetic. Imiquimod is used but painful.'],
          ['New World screwworm ⚑R', 'Cochliomyia hominivorax', 'Larvae feed on living tissue, burrowing into wounds. Eradicated from the US by sterile male release.', 'REPORTABLE. Any suspect case must be reported immediately.']
        ]
      },
      {
        type: 'table', title: 'Mites',
        columns: ['Mite', 'Morphology', 'Lesions', 'Treatment'],
        rows: [
          ['Chorioptes equi — the most common mite of horses', 'Surface. LONG legs, SHORT pedicles.', 'PASTERN DERMATITIS — distal limbs, especially in feathered breeds. Also perineum and tail head. Seen in WINTER in the northeastern US.', 'Topical sprays and dusts — it lives on the surface. Lime sulfur.'],
          ['Psoroptes ovis ⚑R', 'Surface. Oval body, LONG segmented pedicles.', 'Pruritic papules at the base of the mane, tail, and forelock. Eliminated from the US and REPORTABLE.', 'Lime sulfur. Report.'],
          ['Sarcoptes ⚑Z', 'BURROWING. Short legs, long unsegmented pedicles.', 'Severe pruritus and self-trauma of the head, neck, and shoulders. Rare in horses. Burrowing causes swelling, hyperemia, papules, and pustules.', 'Ivermectin — systemic therapy is required for a burrowing mite. Zoonotic.']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Amitraz is contraindicated in horses', body: 'Amitraz is a formamidine acaricide that causes impaction colic and ataxia in horses and can be fatal. It is used in cattle and dogs — never reach for it in a horse with mange.' },
      {
        type: 'table', title: 'Neoplasia',
        columns: ['Tumor', 'Key facts'],
        rows: [
          ['Sarcoid', 'Caused by BOVINE PAPILLOMAVIRUS types 1 and 2. The most common equine skin tumor; locally aggressive, does not metastasize, notorious for recurrence after incomplete removal. Treat with intralesional CISPLATIN plus debulking.'],
          ['Squamous cell carcinoma', 'Five sites: penis, sheath, lips, eyelids, and eye (third eyelid and limbus). Unpigmented, sun-exposed skin and mucocutaneous junctions. Locally invasive with a real metastatic rate — treat aggressively and early.'],
          ['Granulosa (theca) cell tumor', 'The ovarian tumor producing testosterone and stallion-like behavior — see reproduction below.']
        ]
      },

      /* ---------------- Infectious disease ---------------- */
      {
        type: 'table', title: 'Viral infectious disease', wide: true,
        columns: ['Disease', 'Virus', 'Signs', 'Diagnosis & control'],
        rows: [
          ['Equine infectious anemia (EIA, "swamp fever") ⚑R', 'RNA virus — a lentivirus (retrovirus)', 'Most common lab finding: THROMBOCYTOPENIA. Fever, anemia, weight loss, ventral edema. Lifelong carrier state. Transmitted by biting flies (tabanids) and contaminated needles.', 'AGID — the COGGINS test — or cELISA. REPORTABLE; positives are quarantined for life at least 200 yards from other equids, or euthanized. No treatment, no vaccine.'],
          ['Equine viral arteritis (EVA)', 'Arterivirus', 'Five signs: fever, limb edema, abortion, conjunctivitis ("pink eye"), and respiratory disease. A vasculitis.', 'STALLIONS are the permanent carriers — they shed in semen for life. Transmitted by SHIPPED SEMEN as well as by aerosol. Manage by vaccination; test and document status before vaccinating a colt.'],
          ['EHV-1 and EHV-4 (equine rhinopneumonitis)', 'Alphaherpesvirus', 'Three syndromes from EHV-1: respiratory disease, ABORTION, and neurologic disease. EHV-4 is mainly respiratory. The classic abortion stem is "snotty" young horses, then abortion storms 4–5 months later in late-pregnant mares. Also interstitial pneumonia in the foal and THYMIC ATROPHY.', 'PCR of nasal swab and buffy coat. Vaccinate pregnant mares at 5, 7, and 9 months of gestation and again close to parturition. Latency and recrudescence make eradication impossible.'],
          ['EHV-3', 'Alphaherpesvirus', 'Equine coital exanthema. NO effect on fertility or breeding — the lesions resolve, leaving depigmented scars on the vulva, perineum, penis, and prepuce.', 'Sexual rest until lesions heal. Reassure the client.'],
          ['EHV-2', 'Gammaherpesvirus', 'Associated with respiratory disease and fever.', 'Largely supportive.'],
          ['EHV-5', 'Gammaherpesvirus', 'Equine multinodular pulmonary fibrosis.', 'Corticosteroids ± antivirals; guarded prognosis.'],
          ['Equine influenza', 'RNA virus — orthomyxovirus', 'Explosive outbreaks of fever and harsh dry cough in naive populations. Damages respiratory epithelium — allow 3 weeks of rest per week of fever.', 'Vaccinate; antigenic drift requires updated strains.'],
          ['African horse sickness ⚑R', 'ORBIVIRUS — the same genus as bluetongue', 'Four signs: hydropericardium, fever, respiratory difficulty, and supraorbital/periorbital edema. Mortality up to 90% in the pulmonary form.', 'Spread by CULICOIDES midges. Prevent by vaccination in endemic regions. A foreign animal disease — report immediately.']
        ]
      },
      {
        type: 'table', title: 'Bacterial & protozoal infectious disease', wide: true,
        columns: ['Disease', 'Organism', 'Features', 'Diagnosis & treatment'],
        rows: [
          ['Strangles', 'Streptococcus equi subsp. equi', 'Young horse, new arrival or show. High fever, mucopurulent nasal discharge, and abscessation of the submandibular and retropharyngeal lymph nodes; dysphagia, extended head and neck. Guttural pouch empyema and chondroids create carriers.', 'Culture or PCR of nasopharyngeal or guttural pouch lavage — best for carrier detection. Bloodwork: NEUTROPHILIC LEUKOCYTOSIS. Fever screening is the earliest outbreak sign. Post-exposure immunity depends on local nasal antibody against the SeM PROTEIN — the basis for the intranasal vaccine. Isolate 3 weeks; three negative guttural pouch lavages to release.'],
          ['Purpura hemorrhagica', 'Immune sequela to S. equi or to vaccination', 'A TYPE III hypersensitivity — immune complex vasculitis. Well-demarcated ventral edema and petechiae.', 'Three-part treatment: penicillin, NSAIDs (flunixin or phenylbutazone), and corticosteroids.'],
          ['Streptococcus equi subsp. zooepidemicus', 'Opportunist', 'The most common cause of infectious infertility in horses (endometritis in the mare), and the main organism in pleuropneumonia.', 'Culture-directed antimicrobials.'],
          ['Rhodococcus equi', 'Gram-positive pleomorphic intracellular coccobacillus', 'Foals around 1–4 months of age. Pyogranulomatous PNEUMONIA with abscesses, plus ulcerative enterocolitis and DIARRHEA. Insidious onset; foals compensate until they crash.', 'Gram-positive pleomorphic rods on a transtracheal wash plus culture; ultrasound for abscesses. Treat with a MACROLIDE — clarithromycin or erythromycin — PLUS RIFAMPIN. Remember the mare-colitis risk.'],
          ['Equine granulocytic anaplasmosis', 'Anaplasma phagocytophilum', 'Four signs: fever, limb edema, icterus, and petechiae. Vector: IXODES tick.', 'MORULAE in NEUTROPHILS on a routine blood smear — diagnostic for only 3–5 days of the illness. Confirm with blood PCR. Treat with oxytetracycline and supportive care.'],
          ['Lyme disease / borreliosis', 'Borrelia burgdorferi; Ixodes vector', 'Three manifestations in horses: neuroborreliosis, uveitis, and cutaneous pseudolymphoma.', 'Multiplex serology; doxycycline or oxytetracycline.'],
          ['Equine piroplasmosis ⚑R', 'Theileria (Babesia) equi and Babesia caballi', 'PEAR-SHAPED bodies inside RBCs. Hemolytic anemia, fever, icterus, hemoglobinuria. Endemic in FLORIDA in the US.', 'Treat with IMIDOCARB and fluids. Reportable in the US.'],
          ['MRSA ⚑Z', 'Staphylococcus aureus', 'Carried in the NASAL PASSAGES of horses and their handlers. A genuine hospital-biosecurity and zoonotic concern.', 'Culture and susceptibility; barrier nursing.'],
          ['Glanders ("farcy") ⚑R ⚑Z', 'Burkholderia mallei', 'Deep ulcers in the mouth and nasal septum, and nodular ulceration of the skin with corded lymphatics ("farcy pipes").', 'EUTHANIZE. Zoonotic and reportable — a historical biowarfare agent. Do not attempt treatment.'],
          ['Dourine ⚑R', 'Trypanosoma equiperdum', 'A VENEREAL disease — the only trypanosome spread by coitus rather than a vector. "SILVER DOLLAR" skin plaques plus genital edema and neurologic signs.', 'REPORTABLE. Test and slaughter.'],
          ['Contagious equine metritis (CEM) ⚑R', 'Taylorella equigenitalis', 'Copious mucopurulent vulvar discharge and short-cycling in mares. STALLIONS are the asymptomatic carriers, on the external genitalia.', 'CONTACT THE STATE VETERINARIAN — that is the answer. Requires specific transport media and approved laboratories.']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'The equine foreign animal diseases', body: 'Contagious equine metritis and epizootic lymphangitis are the two most often paired, but add African horse sickness, glanders, dourine, and screwworm — all reportable, none present in the US. Vesicular stomatitis is the vesicular disease that DOES affect horses, which is how it is distinguished from foot-and-mouth disease in the field.' },
      {
        type: 'rapidfire', title: 'Rapid-fire equine infectious disease recall',
        items: [
          ['Coggins / AGID', 'EIA → thrombocytopenia → reportable, no treatment'],
          ['Stallion carrier + shipped semen + limb edema and abortion', 'Equine viral arteritis'],
          ['Abortion storm 4–5 months after a respiratory outbreak', 'EHV-1 → vaccinate at 5, 7, 9 months'],
          ['Depigmented scars on the vulva, no fertility effect', 'EHV-3 coital exanthema'],
          ['Hydropericardium + Culicoides + Africa', 'African horse sickness (orbivirus)'],
          ['Foal with lung abscesses', 'Rhodococcus equi → macrolide + rifampin'],
          ['Morulae in neutrophils + Ixodes', 'Anaplasmosis → oxytetracycline'],
          ['Pear-shaped bodies in RBCs', 'Piroplasmosis → imidocarb'],
          ['Silver dollar plaques + venereal', 'Dourine → report'],
          ['Deep oral ulcers + skin nodules, zoonotic', 'Glanders → euthanize'],
          ['Mucopurulent discharge, stallion carrier', 'CEM → call the state vet']
        ]
      },

      /* ---------------- Parasitology ---------------- */
      { type: 'callout', variant: 'pearl', title: 'The two parasites that matter most', body: 'Adult horses in North America: CYATHOSTOMES (small strongyles) — the number one parasite of concern today. Young horses 2–5 months: PARASCARIS EQUORUM (ascarids). Nearly every equine parasitology question resolves to one of these two.' },
      {
        type: 'table', title: 'Nematodes & cestodes',
        columns: ['Parasite', 'Disease', 'Diagnosis & treatment'],
        rows: [
          ['Cyathostomes (small strongyles)', 'The #1 parasite of adult horses in North America. Larvae ENCYST in the gut wall and remain dormant, then emerge en masse in winter or early spring → larval cyathostominosis / TYPHLOCOLITIS with diarrhea, hypoproteinemia, weight loss, and colic. Necropsy: tiny gritty nodules in the cecum and colon wall.', 'Moxidectin, or fenbendazole at the 5-day larvicidal dose. Add prednisolone to blunt the inflammatory response to mass larval death. Fecal egg counts do not reflect encysted burden — that is the whole clinical problem.'],
          ['Strongylus vulgaris (large strongyle)', 'VERMINOUS ARTERITIS — larval migration through the CRANIAL MESENTERIC ARTERY causing thrombosis and arteritis → non-strangulating infarction and colic. Also a leading cause of peritonitis.', 'Ivermectin. Now rare because of modern anthelmintic use.'],
          ['Parascaris equorum (ascarid)', 'The #1 parasite of foals 2–5 months. Larval migration through the lungs causes "summer colds" / verminous pneumonia — nasal discharge and cough in a young foal. The danger: heavy burdens plus deworming → sudden mass die-off → SMALL INTESTINAL IMPACTION or RUPTURE.', 'FENBENDAZOLE for 5 days at 2–5 months — a benzimidazole is chosen deliberately because it is NOT a paralytic, so worms die slowly and pass gradually. Do NOT use ivermectin in a heavily parasitized foal. Ascarids have developed macrocyclic lactone resistance.'],
          ['Dictyocaulus arnfieldi (equine lungworm)', 'Found in the BRONCHI; causes chronic cough. The DONKEY is the definitive host and is usually asymptomatic — the classic history is a horse pastured with donkeys.', 'IVERMECTIN. Horses are typically dead-end hosts and do not pass larvae, so fecals are often negative — treat on suspicion.'],
          ['Pinworms (Oxyuris equi)', 'Tail rubbing and perineal irritation.', 'Perianal tape test; ivermectin or pyrantel.'],
          ['Anoplocephala perfoliata (tapeworm)', 'ILEOCECAL IMPACTION and INTUSSUSCEPTION — it congregates at the ileocecal junction. A recognized cause of spasmodic colic. Oribatid mite intermediate host.', 'PRAZIQUANTEL, or a double dose of pyrantel. IVERMECTIN IS NOT EFFECTIVE AGAINST TAPEWORMS — a favorite trick question.']
        ]
      },
      {
        type: 'table', title: 'Anthelmintic pharmacology',
        columns: ['Drug', 'Mechanism', 'Spectrum'],
        rows: [
          ['Ivermectin', 'Increases release of GABA and opens glutamate-gated chloride channels → paralysis of the parasite.', 'Strongyles, ascarids (with resistance), Dictyocaulus, Onchocerca, bots, heartworm. NOT tapeworms.'],
          ['Moxidectin', 'Increases neuronal inhibition via chloride channels and GABA. Longer half-life and better tissue persistence than ivermectin.', 'Encysted cyathostomes — its key advantage.'],
          ['Pyrantel', 'Produces a DEPOLARIZING neuromuscular blockade.', 'Roundworms, hookworms, ascarids, pinworms; tapeworms at a double dose.'],
          ['Fenbendazole', 'Benzimidazole — binds tubulin. Not a paralytic, so worms die slowly.', 'Ascarids in foals; 5-day larvicidal dose for encysted cyathostomes.'],
          ['Praziquantel', 'Increases membrane permeability to calcium.', 'Tapeworms in horses and small animals.'],
          ['Albendazole', 'Benzimidazole.', 'Nematodes and flukes in cattle and camelids.']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Macrocyclic lactone resistance', body: 'The two macrocyclic lactones are IVERMECTIN and MOXIDECTIN. Two helminth groups have developed resistance to them: small strongyles (cyathostomes) and ascarids. This is why fecal egg count reduction testing and targeted, rather than rotational blanket, deworming is now standard.' },

      /* ---------------- Reproduction ---------------- */
      {
        type: 'table', title: 'The mare',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Cycle', 'Seasonally polyestrus (long-day breeder), anestrus in winter. Estrus lasts 5–7 days; cycle length 21 days. Gestation 11 months (>330 days).'],
          ['Follicle size for ovulation', '35 mm or greater is the usual threshold at which hCG or deslorelin will reliably induce ovulation.'],
          ['Two-week pregnancy on ultrasound', 'A small round anechoic structure with bright hyperechoic dashes on the dorsal and ventral aspects of the yolk sac — "SPECULAR REFLECTORS." Round shape at this stage is what distinguishes an embryonic vesicle from a uterine cyst.'],
          ['Best time to evaluate cervical integrity', 'DIESTRUS — the cervix is closed and tight under progesterone, so a defect is apparent. In estrus the cervix is normally relaxed and open.'],
          ['Stage 2 parturition', '20–30 minutes, during which the fetus is expelled. Equine parturition is explosive; anything longer is a dystocia and an emergency ("red bag," premature placental separation).'],
          ['Most common cause of dystocia', 'POSTURAL abnormalities due to the foal\'s long extremities — not an oversized fetus. That distinction is the exam point.'],
          ['Retained placenta', 'The part usually retained is the tip of the NON-GRAVID uterine horn, which is thinner-walled. Retention beyond 3 hours is an emergency in the mare — laminitis and metritis risk.'],
          ['Metritis after breeding', 'A normal post-breeding inflammatory response resolves within 48 hours. Persistence beyond that defines the "susceptible mare."'],
          ['Endometritis treatment', 'Three components: uterine lavage, antimicrobials, and oxytocin to promote clearance.'],
          ['Intrauterine antibiotic', 'AMIKACIN is the only antibiotic labeled for intrauterine use in horses in the US and Canada. Extralabel options: ampicillin, ceftiofur, penicillin. Aminoglycosides are ototoxic and nephrotoxic systemically.'],
          ['Ascending bacterial placentitis', 'Three treatments: flunixin meglumine, progesterone/altrenogest for myometrial quiescence, and broad-spectrum antibiotics. Classic sign: premature udder development and vulvar discharge.'],
          ['Uterine artery rupture', 'Three-part management: hypertonic saline, aminocaproic acid, and — critically — KEEP THE MARE CALM AND QUIET. Excitement raises blood pressure and blows the clot. Do not over-resuscitate.'],
          ['Granulosa (theca) cell tumor', 'The mare develops stallion-like behavior from high TESTOSTERONE. Elevated: estrogen, INHIBIN, ANTI-MÜLLERIAN HORMONE, and androgens. AMH is the most sensitive single test. The contralateral ovary is small and inactive; unilateral ovariectomy is curative.'],
          ['Embryo retrieval', 'Perform 7–8 days post-ovulation — the equine embryo enters the uterus late, on day 6.'],
          ['Persistent hymen', 'In cattle and horses, caused by segmental aplasia of the paramesonephric (Müllerian) ducts.'],
          ['Twin reduction', 'Best performed early — around days 14–16, before fixation, by manual crush.']
        ]
      },
      {
        type: 'table', title: 'The stallion & infertility',
        columns: ['Question', 'Answer'],
        rows: [
          ['#1 cause of infertility — stallion', 'Testicular degeneration.'],
          ['#1 cause of infertility — mare', 'Endometritis caused by Streptococcus equi subsp. zooepidemicus — also the most common cause of infectious infertility overall.'],
          ['Carrier states to remember', 'Stallions carry EVA (in semen, for life) and CEM (on the external genitalia).'],
          ['Priapism', 'Persistent erection without sexual stimulation that does not resolve — classically after acepromazine, and potentially permanent in stallions.']
        ]
      },
      {
        type: 'table', title: 'The foal',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Failure of passive transfer (FPT)', 'IgG < 800 mg/dL; partial FPT 400–800, complete FPT <400. The equine placenta is epitheliochorial and diffuse, so no antibody crosses in utero — the foal is entirely dependent on colostrum.'],
          ['Colostrum requirement', '1.5–2 L for a 50 kg foal in the first 18 hours of life. Gut closure occurs by about 24 hours.'],
          ['Most common cause of neonatal septicemia', 'E. coli. Almost always on a background of FPT.'],
          ['Neonatal resuscitation', 'Epinephrine 0.5–1 mL of the 1:1000 solution for a 100 lb foal, every 3 minutes (0.01 mg/kg). 1:1000 means 1 gram in 1000 mL = 1 mg/mL.'],
          ['Doxapram', 'A CNS respiratory stimulant — used in dummy foal syndrome (neonatal maladjustment) when the foal is hypoventilating.'],
          ['Rib fractures', 'Ribs 3–6 at the costochondral junction. Palpate and ultrasound every dystocia foal before handling it roughly.'],
          ['Oxytetracycline in foals', 'High-dose IV oxytetracycline for congenital flexural limb deformities.'],
          ['Oral iron', 'Causes liver injury and hepatic encephalopathy in foals — never give it.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire repro & neonate recall',
        items: [
          ['Specular reflectors on a round vesicle', '~14-day pregnancy'],
          ['When to evaluate the cervix', 'Diestrus — closed under progesterone'],
          ['Stage 2 duration', '20–30 minutes; longer is an emergency'],
          ['Cause of equine dystocia', 'Postural, not fetal oversize'],
          ['Retained placenta — which part', 'Tip of the non-gravid horn'],
          ['Mare acting like a stallion', 'Granulosa cell tumor → AMH, inhibin, testosterone'],
          ['Uterine artery rupture', 'Keep her calm'],
          ['Intrauterine antibiotic', 'Amikacin'],
          ['FPT threshold', 'IgG <800 mg/dL; give 1.5–2 L colostrum in 18 hours'],
          ['Septic foal', 'E. coli']
        ]
      },

      /* ---------------- Toxicology ---------------- */
      { type: 'callout', variant: 'pearl', title: 'The equine toxicology shortlist', body: 'Horses are uniquely or especially sensitive to a handful of toxins. If a toxicology question specifies a horse, run this list first: ionophores · blister beetles · black walnut · fumonisin · yellow star thistle · red maple · fescue · bracken fern.' },
      {
        type: 'table', title: 'Toxins where the horse is the sensitive species', wide: true,
        columns: ['Toxin', 'Source & mechanism', 'Signs', 'Management'],
        rows: [
          ['Ionophores — monensin, lasalocid, salinomycin', 'HORSES ARE UNIQUELY SENSITIVE. Used in cattle as a coccidiostat and growth promoter; horses are poisoned by cattle feed. Ionophores disrupt cation transport across membranes.', 'MYOCARDIAL NECROSIS and subsequent DILATED CARDIOMYOPATHY. Colic, sweating, ataxia, sudden death, or delayed heart failure weeks later.', 'Determine prognosis with FRACTIONAL SHORTENING on echocardiography. Empty the GI tract three ways: mineral oil, activated charcoal, fluid therapy. No antidote.'],
          ['Cantharidin (blister beetle)', 'Beetles baled into alfalfa hay. A potent vesicant that damages every epithelium it contacts.', 'Three signs: renal disease, hematuria with hemorrhagic cystitis, and peracute death. Also colic and oral ulceration. The pathognomonic behavior: the horse DUNKS ITS MUZZLE in water to soothe oral pain. Causes cardiovascular and endotoxic shock.', 'Supportive; check calcium and magnesium, which fall dramatically. High mortality.'],
          ['Black walnut', 'Shavings used as bedding.', 'LAMINITIS — acute, within 24 hours of exposure, with limb edema.', 'Remove the bedding immediately; cryotherapy, NSAIDs.'],
          ['Fumonisin', 'Fusarium in moldy corn. Inhibits sphingolipid synthesis.', 'EQUINE LEUKOENCEPHALOMALACIA — liquefactive necrosis of cerebral white matter. Sudden blindness, circling, ataxia, death.', 'No treatment; remove the feed. Test suspect corn.'],
          ['Yellow star thistle (and Russian knapweed)', 'Prolonged grazing, typically in California and the West.', 'NIGROPALLIDAL ENCEPHALOMALACIA — destroys the GLOBUS PALLIDUS and the SUBSTANTIA NIGRA. Two signs: TREMOR and DYSPHAGIA — the horse physically cannot prehend food and starves with a full feed tub.', 'PROGNOSIS GRAVE. The lesion is irreversible. Euthanasia.'],
          ['Sorghum / Sudan grass / Johnson grass', 'Cyanogenic and lathyrogenic grasses.', 'MYELOMALACIA of the LOWER spinal cord. Three signs: pelvic limb incoordination, urine dribbling, death. Also cystitis and ataxia.', 'Remove from the pasture. Damage is permanent.'],
          ['Bracken fern', 'Contains THIAMINASE and ptaquiloside.', 'In HORSES: polioencephalomalacia from thiamine destruction — blindness, ataxia, seizures. In cattle the same plant causes bone marrow suppression and enzootic hematuria — a different disease in a different species.', 'Thiamine supplementation in horses; remove the plant.'],
          ['Red maple', 'WILTED leaves are the danger.', 'ICTERUS, methemoglobinemia, Heinz body hemolytic anemia, hemoglobinuria.', 'Supportive; transfusion. Remove access to fallen branches.'],
          ['Slaframine', 'MOLDY RED CLOVER (Rhizoctonia leguminicola).', 'Hypersalivation — "slobbers." Otherwise benign.', 'Remove the clover. Reassure the client.'],
          ['Snake envenomation', 'Pit vipers — rattlesnake, copperhead, cottonmouth. Horses are usually bitten on the muzzle while grazing.', 'COAGULOPATHY is the tested answer. Also massive local swelling, and the real emergency is airway obstruction from nasal and muzzle edema. Cardiotoxicity and rhabdomyolysis with heavy envenomation.', 'Antivenin if available; protect the airway — pass nasal tubes early. Fluids, analgesia, tetanus prophylaxis. Monitor coagulation and cardiac rhythm.'],
          ['Perennial ryegrass staggers', 'Endophytic fungus produces lolitrem B, a neurotoxicant acting on GABA receptors.', 'Fine head tremors and nodding movements; depression, ataxia, tremors. Worse when excited.', 'Remove from the pasture; usually reversible.'],
          ['Fescue toxicosis', 'Endophyte-infected tall fescue produces ERGOPEPTINE ALKALOIDS, which are DOPAMINE AGONISTS.', 'In the MARE: PROLONGED GESTATION, agalactia, thickened placenta ("red bag"), dystocia, and abortion. Dopamine agonism suppresses prolactin → no milk. General signs: lameness, sloughing of the rear hooves, decreased weight gain, fat necrosis.', 'Remove pregnant mares from fescue 60–90 days before foaling. Treat with DOMPERIDONE — a dopamine ANTAGONIST — to restore prolactin.'],
          ['Lead', 'Contaminated petroleum products or paint.', 'ROARING and DYSPHAGIA from laryngeal and pharyngeal paralysis. General signs: acute blindness, dullness, recumbency, unawareness of surroundings.', 'Calcium EDTA to chelate, or succimer. Do NOT use sodium EDTA — it binds calcium and causes fatal hypocalcemia.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'Fescue and PPID are mirror images', body: 'Fescue endophyte alkaloids are dopamine AGONISTS, which suppress prolactin and cause agalactia — so the treatment is a dopamine ANTAGONIST, domperidone. PPID is the opposite: dopamine is deficient, so you give the agonist, pergolide. Getting the direction right answers both questions.' },

      /* ---------------- Pharmacology ---------------- */
      {
        type: 'table', title: 'Pharmacology & anesthesia',
        columns: ['Drug', 'Notes'],
        rows: [
          ['Detomidine / xylazine', 'Alpha-2 agonists. Detomidine causes analgesia and HYPERGLYCEMIA (alpha-2 stimulation inhibits insulin release). Profound sedation with a head-down posture; watch for bradycardia and AV block.'],
          ['Acepromazine', 'Phenothiazine — antagonizes central dopamine receptors. Hypotension; PRIAPISM in stallions, potentially permanent.'],
          ['Dantrolene', 'Ryanodine receptor antagonist — post-anesthetic myositis and exertional rhabdomyolysis in horses; malignant hyperthermia in pigs.'],
          ['Doxapram', 'CNS respiratory stimulant — dummy foal syndrome and neonatal resuscitation.'],
          ['Buscopan', 'Antispasmodic and bronchodilator; used to confirm reversible airway obstruction, and for spasmodic colic and rectal exam relaxation.'],
          ['Clenbuterol', 'Beta-2 agonist bronchodilator for equine asthma.'],
          ['Erythromycin / macrolides', 'Treatment for Rhodococcus in foals — but FATAL COLITIS in adult horses, including the treated foal\'s dam.'],
          ['Doxycycline', 'Oral doxycycline is acceptable in horses. IV doxycycline — even at small doses — causes CARDIAC ARRHYTHMIAS, COLLAPSE, and DEATH. Never give it intravenously.'],
          ['Polymyxin', 'Used as an anti-endotoxin agent. At high doses it is NEPHROTOXIC and NEUROTOXIC.'],
          ['Aminoglycosides (amikacin, gentamicin, tobramycin)', 'Ototoxic and nephrotoxic. Amikacin is the labeled intrauterine drug.'],
          ['Sulfadiazine / sulfamethoxazole', 'Antifolate therapy for EPM. Side effect: ANEMIA — monitor with a CBC every 2 weeks.'],
          ['COX-2 selective NSAIDs', 'Firocoxib and meloxicam — spare gastric and renal prostaglandins.'],
          ['Aminocaproic acid', 'Prevents breakdown of a formed clot — used to control excessive bleeding (uterine artery rupture, guttural pouch mycosis).'],
          ['Tetracycline', 'Can cause primary photosensitization.']
        ]
      },
      {
        type: 'cloze', title: 'Clinical formulas & numbers',
        items: [
          { q:'MAP = diastolic + (systolic − diastolic) / ___.', a:'3', why:'Mean arterial pressure determines tissue perfusion.' },
          { q:'Keep MAP above ___ mmHg under anesthesia to prevent post-anesthetic myopathy.', a:'70', why:'The single most important number in equine anesthetic monitoring.' },
          { q:'Bicarbonate deficit (mEq) = ___ × body weight (kg) × base deficit.', a:'0.3-0.4', accept:['0.3–0.4','0.3 to 0.4','0.4'], why:'A 470 kg horse with a base excess of −13 needs roughly 2,440 mEq at the 0.4 factor. Give about half and recheck.' },
          { q:'Epinephrine 1:1000 contains ___ mg/mL.', a:'1', accept:['1 mg/mL'], why:'1 gram in 1000 mL.' },
          { q:'Remove pregnant mares from endophyte-infected fescue ___ days before foaling.', a:'60-90', accept:['60–90','60 to 90'], why:'Ergopeptine alkaloids are dopamine agonists — they suppress prolactin and cause prolonged gestation, agalactia and a thickened placenta.' },
          { q:'A horse has ___ permanent teeth.', a:'36-44', accept:['36–44','36 to 44'], why:'The range reflects canines and wolf teeth. Dog 42, cat 30, pig 44, ruminant 32.' }
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire repro & neonate recall',
        items: [
          ['Specular reflectors on a round vesicle', '~14-day pregnancy'],
          ['When to evaluate the cervix', 'Diestrus — closed under progesterone'],
          ['Stage 2 duration', '20–30 minutes; longer is an emergency'],
          ['Cause of equine dystocia', 'Postural, not fetal oversize'],
          ['Retained placenta — which part', 'Tip of the non-gravid horn'],
          ['Mare acting like a stallion', 'Granulosa cell tumor → AMH, inhibin, testosterone'],
          ['Uterine artery rupture', 'Keep her calm'],
          ['Intrauterine antibiotic', 'Amikacin'],
          ['FPT threshold', 'IgG <800 mg/dL; give 1.5–2 L colostrum in 18 hours'],
          ['Septic foal', 'E. coli']
        ]
      },

      /* ---------------- Toxicology ---------------- */
      { type: 'callout', variant: 'pearl', title: 'The equine toxicology shortlist', body: 'Horses are uniquely or especially sensitive to a handful of toxins. If a toxicology question specifies a horse, run this list first: ionophores · blister beetles · black walnut · fumonisin · yellow star thistle · red maple · fescue · bracken fern.' },
      {
        type: 'table', title: 'Toxins where the horse is the sensitive species', wide: true,
        columns: ['Toxin', 'Source & mechanism', 'Signs', 'Management'],
        rows: [
          ['Ionophores — monensin, lasalocid, salinomycin', 'HORSES ARE UNIQUELY SENSITIVE. Used in cattle as a coccidiostat and growth promoter; horses are poisoned by cattle feed. Ionophores disrupt cation transport across membranes.', 'MYOCARDIAL NECROSIS and subsequent DILATED CARDIOMYOPATHY. Colic, sweating, ataxia, sudden death, or delayed heart failure weeks later.', 'Determine prognosis with FRACTIONAL SHORTENING on echocardiography. Empty the GI tract three ways: mineral oil, activated charcoal, fluid therapy. No antidote.'],
          ['Cantharidin (blister beetle)', 'Beetles baled into alfalfa hay. A potent vesicant that damages every epithelium it contacts.', 'Three signs: renal disease, hematuria with hemorrhagic cystitis, and peracute death. Also colic and oral ulceration. The pathognomonic behavior: the horse DUNKS ITS MUZZLE in water to soothe oral pain. Causes cardiovascular and endotoxic shock.', 'Supportive; check calcium and magnesium, which fall dramatically. High mortality.'],
          ['Black walnut', 'Shavings used as bedding.', 'LAMINITIS — acute, within 24 hours of exposure, with limb edema.', 'Remove the bedding immediately; cryotherapy, NSAIDs.'],
          ['Fumonisin', 'Fusarium in moldy corn. Inhibits sphingolipid synthesis.', 'EQUINE LEUKOENCEPHALOMALACIA — liquefactive necrosis of cerebral white matter. Sudden blindness, circling, ataxia, death.', 'No treatment; remove the feed. Test suspect corn.'],
          ['Yellow star thistle (and Russian knapweed)', 'Prolonged grazing, typically in California and the West.', 'NIGROPALLIDAL ENCEPHALOMALACIA — destroys the GLOBUS PALLIDUS and the SUBSTANTIA NIGRA. Two signs: TREMOR and DYSPHAGIA — the horse physically cannot prehend food and starves with a full feed tub.', 'PROGNOSIS GRAVE. The lesion is irreversible. Euthanasia.'],
          ['Sorghum / Sudan grass / Johnson grass', 'Cyanogenic and lathyrogenic grasses.', 'MYELOMALACIA of the LOWER spinal cord. Three signs: pelvic limb incoordination, urine dribbling, death. Also cystitis and ataxia.', 'Remove from the pasture. Damage is permanent.'],
          ['Bracken fern', 'Contains THIAMINASE and ptaquiloside.', 'In HORSES: polioencephalomalacia from thiamine destruction — blindness, ataxia, seizures. In cattle the same plant causes bone marrow suppression and enzootic hematuria — a different disease in a different species.', 'Thiamine supplementation in horses; remove the plant.'],
          ['Red maple', 'WILTED leaves are the danger.', 'ICTERUS, methemoglobinemia, Heinz body hemolytic anemia, hemoglobinuria.', 'Supportive; transfusion. Remove access to fallen branches.'],
          ['Slaframine', 'MOLDY RED CLOVER (Rhizoctonia leguminicola).', 'Hypersalivation — "slobbers." Otherwise benign.', 'Remove the clover. Reassure the client.'],
          ['Snake envenomation', 'Pit vipers — rattlesnake, copperhead, cottonmouth. Horses are usually bitten on the muzzle while grazing.', 'COAGULOPATHY is the tested answer. Also massive local swelling, and the real emergency is airway obstruction from nasal and muzzle edema. Cardiotoxicity and rhabdomyolysis with heavy envenomation.', 'Antivenin if available; protect the airway — pass nasal tubes early. Fluids, analgesia, tetanus prophylaxis. Monitor coagulation and cardiac rhythm.'],
          ['Perennial ryegrass staggers', 'Endophytic fungus produces lolitrem B, a neurotoxicant acting on GABA receptors.', 'Fine head tremors and nodding movements; depression, ataxia, tremors. Worse when excited.', 'Remove from the pasture; usually reversible.'],
          ['Fescue toxicosis', 'Endophyte-infected tall fescue produces ERGOPEPTINE ALKALOIDS, which are DOPAMINE AGONISTS.', 'In the MARE: PROLONGED GESTATION, agalactia, thickened placenta ("red bag"), dystocia, and abortion. Dopamine agonism suppresses prolactin → no milk. General signs: lameness, sloughing of the rear hooves, decreased weight gain, fat necrosis.', 'Remove pregnant mares from fescue 60–90 days before foaling. Treat with DOMPERIDONE — a dopamine ANTAGONIST — to restore prolactin.'],
          ['Lead', 'Contaminated petroleum products or paint.', 'ROARING and DYSPHAGIA from laryngeal and pharyngeal paralysis. General signs: acute blindness, dullness, recumbency, unawareness of surroundings.', 'Calcium EDTA to chelate, or succimer. Do NOT use sodium EDTA — it binds calcium and causes fatal hypocalcemia.']
        ]
      },
      { type: 'callout', variant: 'discrim', title: 'Fescue and PPID are mirror images', body: 'Fescue endophyte alkaloids are dopamine AGONISTS, which suppress prolactin and cause agalactia — so the treatment is a dopamine ANTAGONIST, domperidone. PPID is the opposite: dopamine is deficient, so you give the agonist, pergolide. Getting the direction right answers both questions.' },

      /* ---------------- Pharmacology ---------------- */
      {
        type: 'table', title: 'Pharmacology & anesthesia',
        columns: ['Drug', 'Notes'],
        rows: [
          ['Detomidine / xylazine', 'Alpha-2 agonists. Detomidine causes analgesia and HYPERGLYCEMIA (alpha-2 stimulation inhibits insulin release). Profound sedation with a head-down posture; watch for bradycardia and AV block.'],
          ['Acepromazine', 'Phenothiazine — antagonizes central dopamine receptors. Hypotension; PRIAPISM in stallions, potentially permanent.'],
          ['Dantrolene', 'Ryanodine receptor antagonist — post-anesthetic myositis and exertional rhabdomyolysis in horses; malignant hyperthermia in pigs.'],
          ['Doxapram', 'CNS respiratory stimulant — dummy foal syndrome and neonatal resuscitation.'],
          ['Buscopan', 'Antispasmodic and bronchodilator; used to confirm reversible airway obstruction, and for spasmodic colic and rectal exam relaxation.'],
          ['Clenbuterol', 'Beta-2 agonist bronchodilator for equine asthma.'],
          ['Erythromycin / macrolides', 'Treatment for Rhodococcus in foals — but FATAL COLITIS in adult horses, including the treated foal\'s dam.'],
          ['Doxycycline', 'Oral doxycycline is acceptable in horses. IV doxycycline — even at small doses — causes CARDIAC ARRHYTHMIAS, COLLAPSE, and DEATH. Never give it intravenously.'],
          ['Polymyxin', 'Used as an anti-endotoxin agent. At high doses it is NEPHROTOXIC and NEUROTOXIC.'],
          ['Aminoglycosides (amikacin, gentamicin, tobramycin)', 'Ototoxic and nephrotoxic. Amikacin is the labeled intrauterine drug.'],
          ['Sulfadiazine / sulfamethoxazole', 'Antifolate therapy for EPM. Side effect: ANEMIA — monitor with a CBC every 2 weeks.'],
          ['COX-2 selective NSAIDs', 'Firocoxib and meloxicam — spare gastric and renal prostaglandins.'],
          ['Aminocaproic acid', 'Prevents breakdown of a formed clot — used to control excessive bleeding (uterine artery rupture, guttural pouch mycosis).'],
          ['Tetracycline', 'Can cause primary photosensitization.']
        ]
      },
      {
        type: 'table', title: 'Clinical formulas',
        columns: ['Formula', 'Detail'],
        rows: [
          ['Mean arterial pressure', 'MAP = diastolic + (systolic − diastolic) / 3. MAP determines tissue perfusion — keep it above 70 mmHg under anesthesia to prevent post-anesthetic myopathy.'],
          ['Bicarbonate deficit', 'HCO₃⁻ (mEq) = 0.3–0.4 × body weight (kg) × base deficit. Example: a 470 kg horse with a base excess of −13 → 0.4 × 470 × 13 ≈ 2,440 mEq.'],
          ['Epinephrine 1:1000', '1 gram in 1000 mL = 1 mg/mL.']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
