/* NAVLE Hub — Feline-Specific Medicine
 * Source: NAVLE_Dogs_Cats_Study_Guide.pdf ch. 14.
 */
(function (N) {
  N.push({
    id: 'sa-feline',
    group: 'Species',
    title: 'Feline-Specific Medicine',
    tagline: 'Four physiologic facts explain most feline questions.',
    weightNote: 'part of the 49.9% dog + cat block',
    covKey: 'dogcat', covTitle: 'Dogs & Cats', covWeight: 49.9,
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'Why cats get their own chapter',
        body: 'Cats are not small dogs, and the NAVLE knows it. Nearly every feline question turns on one of four physiologic facts: deficient <b>glucuronidation</b> (drug toxicities), <b>preformed blood-type antibodies</b> (transfusion), <b>fused pancreatic and bile ducts</b> (triaditis), and <b>obligate carnivore nutrient requirements</b> (taurine, arginine, thiamine).'
      },
      {
        type: 'table', title: 'Respiratory',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Feline asthma', 'Three radiographic hallmarks: 1. HYPERINFLATION — mucus plugging and inflammation cause air trapping; look for a flattened diaphragm. 2. BRONCHIAL PATTERN — irregularly thickened bronchial walls seen end-on as "donuts" and in profile as "train tracks." 3. RIGHT MIDDLE LUNG LOBE CONSOLIDATION from mucus plugging of that lobe\'s bronchus. Radiographically this reads as a diffuse bronchial to bronchointerstitial pattern with pulmonary hyperinflation. Treatment: terbutaline — a beta-2 adrenergic agonist that bronchodilates and relaxes the airways — plus inhaled or systemic corticosteroids.'],
          ['Pleural effusion — two most common causes', '1. Heart failure. 2. Neoplasia. Then pyothorax, chylothorax and FIP.'],
          ['Rivalta test', 'A cage-side test to separate transudate from exudate, classically used in FIP workups. Method: add one drop of 98% acetic acid to 8 mL of distilled water in a clear tube, then carefully layer one drop of the effusion on top. NEGATIVE: the drop dissolves and disperses. POSITIVE: the drop keeps its shape — remains a ball or drifts down as a string — indicating high protein and inflammatory mediator content.']
        ]
      },
      {
        type: 'table', title: 'Feline infectious disease',
        columns: ['Agent', 'Key facts'],
        rows: [
          ['FeLV', 'ELISA and PCR test for CIRCULATING ANTIGEN, not antibody. That is why a positive test in a kitten may still clear, and why antibody-based logic does not apply. Radiographs: widened mediastinum from mediastinal lymphoma.'],
          ['Feline herpesvirus-1 (FVR)', 'Conjunctivitis and keratitis, dendritic corneal ulcers, chronic upper respiratory disease with lifelong latency and stress-induced recrudescence. Treat with FAMCICLOVIR, plus L-lysine, though evidence for lysine is weak.'],
          ['Chlamydia felis', 'Suggested by INTRACYTOPLASMIC INCLUSION BODIES in conjunctival cytology. Predominantly a conjunctivitis with chemosis rather than a true URI. Treat with ORAL DOXYCYCLINE — systemic therapy is required because topicals do not clear the carrier state. Oxytetracycline is an alternative for Chlamydia or Mycoplasma.'],
          ['Cytauxzoonosis', 'Fever, hepatosplenomegaly, lymphadenomegaly and icterus, in Missouri, in July. Atovaquone + azithromycin. Usually fatal.'],
          ['Mycoplasma haemofelis', 'Cocci in rings ON the RBC surface, fever, hemolytic anemia. Most common in outdoor male cats. Doxycycline.'],
          ['Toxoplasmosis', 'Cat is the definitive host; oocysts sporulate in 1–5 days. Clindamycin.']
        ]
      },
      {
        type: 'table', title: 'Feline odds and ends — the "most common" list',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Feline acne', 'An IDIOPATHIC condition — comedones on the chin. Manage with hygiene, plastic bowl avoidance and topical therapy.'],
          ['Most common brain tumor', 'Meningioma — surgically resectable, with a good prognosis in cats.'],
          ['Most common spinal tumor', 'LYMPHOMA — the exception to the meningioma rule.'],
          ['Most common cause of splenomegaly', 'Mast cell tumor — FNA the spleen.'],
          ['Most common congenital heart disease', 'VSD.'],
          ['Most common urolith at low pH', 'Calcium oxalate.'],
          ['Stress hyperglycemia threshold', 'Around 290 mg/dL; confirm true diabetes with fructosamine.'],
          ['Anemia of chronic disease', 'Mild, non-regenerative, normocytic, normochromic — driven by inflammatory cytokines. The most common anemia in a sick cat.'],
          ['Mange treatment', 'Imidacloprid.'],
          ['Cholangitis antibiotic', 'Amoxicillin-clavulanic acid.'],
          ['Ringworm treatment', 'Itraconazole — never ketoconazole in cats.'],
          ['Petroleum distillate toxicity', 'Buprenorphine for analgesia; do not induce emesis.']
        ]
      }
    ]
  });

  N.push({
    id: 'sa-pharm',
    group: 'Cross-cutting',
    title: 'Pharmacology, Anesthesia & Analgesia',
    tagline: 'Adverse effects, spectrum gaps, receptor targets, and the ceiling effect.',
    weightNote: 'small animal focus, with the species traps attached',
    sections: [
      {
        type: 'table', title: 'Antimicrobial side effects — the tested set',
        columns: ['Drug / class', 'Adverse effect'],
        rows: [
          ['Aminoglycosides (gentamicin, amikacin)', 'Three toxicities to name together: OTOTOXIC · NEPHROTOXIC · NEUROMUSCULAR BLOCKADE. Nephrotoxicity is worst in dehydrated patients — never give an aminoglycoside to a volume-depleted animal. Once-daily dosing reduces renal accumulation.'],
          ['Tetracyclines', 'Hepatotoxicity and potential nephrotoxicity — CONTRAINDICATED in renal insufficiency. Also cause discoloration and skeletal/dental abnormalities in the young, and primary photosensitization. DOXYCYCLINE is the tetracycline of choice in renal compromise, because it is eliminated largely by the GI tract rather than the kidney, and it causes fewer skeletal abnormalities.'],
          ['Doxycycline in HORSES', 'Small IV doses in horses are associated with cardiac arrhythmias, collapse and DEATH. Oral doxycycline is acceptable in horses; IV doxycycline is not.'],
          ['Sulfonamides / TMS', 'The second "toxic T." Causes KCS (keratoconjunctivitis sicca), type I and type III hypersensitivity, hepatitis, hemolytic anemia and bone marrow suppression at high doses. Also polyarthritis and fever. Sulfa drugs cause a type III hypersensitivity specifically in DOBERMAN PINSCHERS — a well-recognized breed idiosyncrasy.'],
          ['Lincosamides (clindamycin)', 'GI upset. Esophageal stricture in cats if dosed dry — always follow with water or food.'],
          ['Macrolides (erythromycin)', 'GI problems — in HORSES, FATAL COLITIS. The related trap: when a foal is treated with erythromycin for Rhodococcus, the MARE is at risk of C. difficile enterocolitis from grooming the foal.'],
          ['Macrolides and cephalosporins', 'Cause pain and swelling on IM injection.'],
          ['Chloramphenicol', 'Reversible bone marrow suppression in animals; idiosyncratic irreversible aplastic anemia in HUMANS — counsel owners to wear gloves.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'The "two toxic Ts"',
        list: [
          '<b>Tetracycline</b> — hepatotoxic, nephrotoxic, avoid in renal insufficiency, photosensitization, skeletal changes in the young.',
          '<b>TMS</b> (trimethoprim-sulfa) — KCS, type I and III hypersensitivity, hepatitis, hemolytic anemia, marrow suppression.'
        ]
      },
      {
        type: 'table', title: 'Antimicrobial spectrum',
        columns: ['Question', 'Answer'],
        rows: [
          ['Which two have NO anaerobic activity?', 'Fluoroquinolones (enrofloxacin) and aminoglycosides. Both require oxygen-dependent uptake or aerobic metabolism — which is precisely why they fail in abscesses, necrotic tissue, and any anaerobic environment.'],
          ['Which three are BEST for anaerobes?', 'Penicillins · clindamycin · metronidazole. Metronidazole is the most reliably anaerobicidal.'],
          ['Which two classes hit protozoa AND bacteria?', 'Nitroimidazoles (metronidazole, ronidazole) and sulfonamides, including potentiated sulfas. Clindamycin also qualifies.'],
          ['Which drugs are ototoxic? (four)', 'Chlorhexidine · alcohols · aminoglycosides · polymyxins. This is why you must confirm an intact tympanic membrane before putting anything in an ear canal.'],
          ['Which two drugs are nephrotoxic?', 'Aminoglycosides — gentamicin and amikacin.']
        ]
      },
      {
        type: 'table', title: 'Otic therapeutics',
        columns: ['Agent', 'Role'],
        rows: [
          ['Dexamethasone / corticosteroids', 'The common anti-inflammatory placed in the ear to reduce inflammation and canal swelling — often the single most important component.'],
          ['Enrofloxacin (otic)', 'Treats gram-negative rods, especially Pseudomonas — the difficult chronic otitis pathogen.'],
          ['Combination products', 'A single product containing an antibacterial, a steroid and an antifungal — because most otitis externa is a mixed Malassezia/bacterial infection with an allergic underlying cause.']
        ]
      },
      {
        type: 'table', title: 'Cardiovascular & emergency drugs',
        columns: ['Drug', 'Mechanism', 'Use'],
        rows: [
          ['Phenylephrine', 'Alpha-1 agonist', 'Vasoconstriction and increased blood pressure. Norepinephrine and dopamine also produce vasoconstriction via alpha-1.'],
          ['Dobutamine and dopamine', 'BETA-1 receptors', 'Increase cardiac contractility — positive inotropes.'],
          ['Epinephrine in CPR', 'Alpha-1 mediated peripheral vasoconstriction', 'Increases CORONARY and cerebral perfusion during chest compressions — that is the reason it is given, not the beta effect.'],
          ['Atropine', 'Muscarinic antagonist — parasympatholytic', 'Increases heart rate. Also for organophosphate toxicosis, and as a mydriatic.'],
          ['Lidocaine and mexiletine', 'Class IB antiarrhythmics', 'Ventricular arrhythmias. Mexiletine is the oral drug for longer-term management and can cause GI upset; lidocaine is the acute IV drug.'],
          ['Diltiazem', 'Calcium channel blocker', 'Atrial fibrillation, supraventricular tachycardia, HCM.'],
          ['Amlodipine', 'Calcium channel blocker', 'Hypertension — first-line in cats.'],
          ['Enalapril / benazepril', 'ACE inhibitors', 'CHF, proteinuria/PLN, hypertension.'],
          ['Spironolactone', 'Aldosterone antagonist, potassium-sparing', 'Adjunct in CHF; competitive antagonist in the ADH/aldosterone axis.'],
          ['Furosemide', 'Loop diuretic', 'First drug in acute CHF, including in the cat — IV or IM.']
        ]
      },
      {
        type: 'table', title: 'Anesthesia & sedation',
        columns: ['Drug', 'Mechanism & notes'],
        rows: [
          ['Acepromazine', 'Phenothiazine tranquilizer — antagonizes central DOPAMINE receptors. No analgesia, not reversible, causes hypotension via alpha-1 blockade, and is associated with PRIAPISM, notably in stallions. Historically avoided in seizure patients, though that concern is now largely disproven.'],
          ['Ketamine', 'Antagonizes NMDA receptors, decreasing glutamate-mediated excitation and central sensitization. Dissociative anesthesia; preserves airway reflexes; excellent for wind-up pain.'],
          ['Benzodiazepines (diazepam, midazolam)', 'Enhance GABA-A receptor activity — increased chloride conductance → hyperpolarization. Anxiolysis, muscle relaxation, anticonvulsant. Diazepam per rectum for status epilepticus.'],
          ['Xylazine and detomidine', 'Alpha-2 adrenergic agonists. Sedation, analgesia, muscle relaxation — and HYPERGLYCEMIA, since alpha-2 stimulation inhibits insulin release. Reversible with atipamezole or yohimbine.'],
          ['Succinylcholine', 'Depolarizing neuromuscular blocker — used with isoflurane during lung lobectomy to keep the patient absolutely still. No analgesia and no sedation, so the patient must be fully anesthetized.'],
          ['Dantrolene', 'RYANODINE RECEPTOR ANTAGONIST — blocks calcium release from the sarcoplasmic reticulum. In PIGS: prevents and treats MALIGNANT HYPERTHERMIA (porcine stress syndrome). In HORSES: post-anesthetic myositis and exertional rhabdomyolysis.'],
          ['Doxapram', 'Central respiratory stimulant — neonatal resuscitation.'],
          ['Methocarbamol', 'Centrally acting muscle relaxant — the antidote-of-convenience for tremorgenic toxicoses: pyrethroids, strychnine, metaldehyde.']
        ]
      },
      {
        type: 'table', title: 'Analgesia',
        columns: ['Concept', 'Detail'],
        rows: [
          ['Drugs with a CEILING EFFECT', 'Buprenorphine (a partial mu agonist) and butorphanol (a kappa agonist / mu antagonist), plus the NSAIDs as a class. A ceiling effect means increasing the dose does not increase analgesia — it only increases side effects. For severe pain you must switch to a full mu agonist (morphine, hydromorphone, methadone, fentanyl), not escalate the dose.'],
          ['COX-2 selective anti-inflammatories', 'Firocoxib and deracoxib — the "-coxib" suffix. Spare the constitutive COX-1 prostaglandins that maintain gastric mucosa and renal perfusion.'],
          ['Buprenorphine', 'Also the analgesic of choice for petroleum distillate toxicity in cats. Excellent transmucosal absorption in cats.']
        ]
      },
      {
        type: 'table', title: 'Immunosuppressants & miscellaneous',
        columns: ['Drug', 'Notes'],
        rows: [
          ['Azathioprine', 'Immunosuppressant used for IMHA and ITP in dogs. TOXIC TO CATS — they lack THIOPURINE METHYLTRANSFERASE (TPMT) and cannot metabolize the drug, causing severe bone marrow suppression. Use chlorambucil or cyclosporine in cats.'],
          ['Phytonadione', 'Vitamin K1 — treats anticoagulant rodenticide toxicosis.'],
          ['Terbutaline', 'Beta-2 adrenergic agonist — bronchodilation and airway relaxation. Feline asthma.'],
          ['Metoclopramide', 'Crosses the blood-brain barrier and antagonizes dopamine in the CRTZ to inhibit emesis; also a prokinetic.'],
          ['Toceranib (Palladia)', 'Receptor tyrosine kinase inhibitor (c-KIT) — canine mast cell tumors.'],
          ['Mitotane', "Adrenocorticolytic — treats Cushing's, and can cause iatrogenic Addison's."],
          ['Amitraz', 'Alpha-2 agonist acaricide. CONTRAINDICATED IN HORSES — causes fatal impaction colic.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire pharmacology recall',
        items: [
          ['Ototoxic + nephrotoxic + neuromuscular blockade', 'Aminoglycosides'],
          ['KCS in a dog on antibiotics', 'Sulfonamides / TMS'],
          ['Doberman + sulfa', 'Type III hypersensitivity'],
          ['Renal patient needing a tetracycline', 'Doxycycline'],
          ['IV doxycycline in a horse', 'Collapse and death'],
          ['Erythromycin in a horse', 'Fatal colitis; in the mare of a treated foal, C. difficile'],
          ['No anaerobic coverage', 'Fluoroquinolones and aminoglycosides'],
          ['Best anaerobic coverage', 'Penicillins, clindamycin, metronidazole'],
          ['NMDA antagonist · dopamine antagonist sedative', 'Ketamine · acepromazine'],
          ['Ryanodine receptor antagonist', 'Dantrolene → malignant hyperthermia in pigs'],
          ['Ceiling effect', 'Buprenorphine and butorphanol'],
          ['Azathioprine in a cat', 'No TPMT → marrow suppression']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
