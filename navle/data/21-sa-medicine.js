/* NAVLE Hub — GI, Liver, Urinary, Endocrine, Derm & Oncology (dogs & cats)
 * Source: NAVLE_Dogs_Cats_Study_Guide.pdf ch. 7–10.
 */
(function (N) {
  N.push({
    id: 'sa-medicine',
    group: 'Species',
    title: 'GI, Urinary, Endocrine & Oncology',
    tagline: 'Liver enzymes, the shunt, the glucose curve, the mites, and the round cell tumors.',
    weightNote: 'part of the 49.9% dog + cat block',
    covKey: 'dogcat', covTitle: 'Dogs & Cats', covWeight: 49.9,
    sections: [
      {
        type: 'table', title: 'Liver enzymes & function',
        columns: ['Category', 'Detail'],
        rows: [
          ['LEAKAGE enzymes', 'ALT and AST — released from damaged hepatocytes. They indicate hepatocellular injury and are NOT a measure of liver function.'],
          ['CHOLESTATIC (inducible) enzymes', 'ALP and GGT — induced by cholestasis, and in dogs by corticosteroids and phenobarbital.'],
          ['Where ALP comes from — four sources', 'Liver · intestine · kidney · BONE. The bone isoenzyme is why young growing dogs and dogs with osteosarcoma have high ALP. The steroid-induced isoenzyme is dog-specific and does not exist in cats — which is why any ALP elevation in a cat is significant.'],
          ['Liver-specific enzyme in large animals', 'SDH (sorbitol dehydrogenase) in cow, sheep, horse and goat. ALT is not liver-specific in these species.'],
          ['Best measure of liver FUNCTION', 'Bile acids, pre- and post-prandial — or ammonia.'],
          ['What the liver produces', 'Bilirubin · bile acids · fibrinogen · albumin · antithrombin III · BUN (urea) · cholesterol · glucose · coagulation factors. Loss of any of these is how liver failure presents: hypoalbuminemia, coagulopathy, low BUN, hypoglycemia, hypocholesterolemia.']
        ]
      },
      {
        type: 'table', title: 'Portosystemic shunt (PSS)',
        columns: ['Feature', 'Detail'],
        rows: [
          ['Pathognomonic in CATS', 'Bright copper/orange irises and ptyalism (drooling). The drooling in particular is a much more prominent PSS sign in cats than in dogs.'],
          ['Associated anemia', 'MICROCYTIC anemia — from abnormal iron transport and sequestration, not iron deficiency per se.'],
          ['Signalment', 'Young animal, stunted growth, post-prandial neurologic signs (hepatic encephalopathy), ammonium biurate uroliths.'],
          ['Three medical treatments', '1. Lactulose — acidifies the colon, trapping ammonia in the ionized (NH₄⁺) form to decrease absorption. 2. Feed the maximum protein tolerated without causing encephalopathy — restriction should not be so severe that it worsens catabolism. 3. Oral neomycin or metronidazole to kill urease-producing gut flora that generate ammonia. Definitive treatment is surgical attenuation of the shunting vessel.']
        ]
      },
      {
        type: 'table', title: 'Feline hepatobiliary & GI disease',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Feline triaditis', 'Extrahepatic biliary obstruction in cats is associated with the triad of 1. pancreatitis, 2. IBD, 3. cholangitis / cholangiohepatitis. Anatomic basis: in the cat the pancreatic duct and common bile duct fuse before entering the duodenum, so inflammation ascends readily between all three organs.'],
          ['Cholangitis treatment', 'Amoxicillin-clavulanic acid is the antibiotic of choice — good coverage of the ascending enteric organisms and excellent biliary penetration.'],
          ['Feline colitis — three common causes', '1. Tritrichomonas foetus · 2. Adverse food reaction · 3. Lymphoplasmacytic colitis.'],
          ['Ollulanus tricuspis', 'The stomach worm of CATS ONLY. Chronic vomiting and gastritis. Diagnosed by examining vomitus, not feces — the larvae are passed in vomit.'],
          ['Platynosomum fastosum', 'The liver fluke of cats causing hepatobiliary AND pancreatic disease. Endemic in Florida, the Caribbean and Hawaii. Cats acquire it by eating infected lizards ("lizard poisoning"). Treat with praziquantel.'],
          ['Hepatic lipidosis', 'A cause of Heinz body anemia. The classic setting is an obese cat that stops eating for any reason — nutritional support by feeding tube is the treatment.']
        ]
      },
      {
        type: 'table', title: 'Diarrhea localization',
        columns: ['Feature', 'SMALL bowel', 'LARGE bowel'],
        rows: [
          ['Volume', 'Large volume per defecation', 'Small volume per defecation'],
          ['Frequency', 'Normal to mildly increased', 'Markedly increased frequency'],
          ['Blood', 'Melena — digested, black', 'Hematochezia — fresh red'],
          ['Mucus', 'Absent', 'Present'],
          ['Tenesmus / urgency', 'Absent', 'Present'],
          ['Weight loss / vomiting', 'Common', 'Uncommon']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Why localization matters on the exam',
        body: 'Histoplasmosis causes <b>large</b> bowel diarrhea — increased frequency, decreased volume, hematochezia — and that fact is only usable if you know the localization table. Likewise <i>Trichuris</i> (whipworm) and <i>Tritrichomonas</i> are large bowel; <i>Giardia</i> and IBD are typically small bowel.'
      },
      {
        type: 'table', title: 'Esophageal & miscellaneous',
        columns: ['Condition', 'Key fact'],
        rows: [
          ['Spirocerca lupi (dog)', 'The esophageal worm of dogs, causing reactive granulomas in the caudal esophageal wall. Can undergo neoplastic transformation to osteosarcoma or fibrosarcoma, and causes aortic aneurysms and spondylitis. Dung beetle intermediate host.'],
          ['Metoclopramide', 'The antiemetic that crosses the blood-brain barrier and antagonizes dopamine in the chemoreceptor trigger zone (CRTZ). Also a prokinetic. Contrast with maropitant (NK-1 antagonist) and ondansetron (5-HT₃ antagonist).'],
          ['Dog and cat placentation', 'ENDOTHELIOCHORIAL, ZONARY. Compare: horses and pigs = epitheliochorial, diffuse — maternal and fetal circulations remain completely separate, hence no transplacental antibody transfer and total dependence on colostrum. Ruminants = synepitheliochorial, cotyledonary. Rabbits, rodents, primates = hemochorial, discoid (most invasive).'],
          ['Dentition', 'Dog 42 · cat 30 · pig 44 · horse 36–44 · ruminant 32.']
        ]
      },

      {
        type: 'table', title: 'Protein-losing nephropathy & nephrotic syndrome',
        columns: ['Topic', 'Detail'],
        rows: [
          ['PLN — the classic case', 'A Soft-Coated Wheaten Terrier with distal limb edema and a history of weight loss. Also Shar Pei, Bernese Mountain Dog, Doberman.'],
          ['Where in the kidney', 'The GLOMERULUS — PLN is a glomerulonephritis, or amyloidosis. Tubular disease does not lose protein at this magnitude.'],
          ['Treatment', 'ACE inhibitors such as benazepril or enalapril, which reduce glomerular capillary pressure and proteinuria. Add antithrombotics — loss of antithrombin III makes these patients hypercoagulable — a renal diet, and treat the underlying antigenic trigger.'],
          ['Nephrotic syndrome — four components', '1. Hypoalbuminemia · 2. Proteinuria · 3. Hypercholesterolemia · 4. Edema / ascites. A complication of glomerular disease. Protein-losing enteropathy produces hypoalbuminemia and edema too, but true nephrotic syndrome is by definition renal.']
        ]
      },
      {
        type: 'table', title: 'Urolithiasis & lower urinary tract',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Most common feline stone at LOW urine pH', 'CALCIUM OXALATE. Acidic urine favors oxalate; alkaline urine favors struvite. Calcium oxalate is not dissolvable — it must be removed surgically or by voiding urohydropropulsion.'],
          ['Uroabdomen diagnosis', 'Abdominal fluid : serum creatinine ≥ 2:1; abdominal fluid : serum potassium ≥ 1.4:1 in dogs, 1.9:1 in cats.'],
          ['Hypospadias', 'Abnormal placement of the urethral opening, ventral and caudal to the normal position — a congenital defect of urethral fold fusion.']
        ]
      },
      {
        type: 'table', title: 'Diabetes mellitus & insulin therapy',
        columns: ['Concept', 'Detail'],
        rows: [
          ['Insulins, shortest to longest acting', 'Regular (fastest — the DKA/CRI insulin) → NPH / Vetsulin (lente), the dog insulin → detemir / PZI → glargine, the cat insulin → ultralente.'],
          ['Interpreting a glucose curve — three things', '1. The nadir. 2. The duration of effect. 3. The clinical signs. Never adjust insulin on a single glucose value, and always weigh the clinical signs above the curve.'],
          ['Ideal nadir', '80–150 mg/dL in both dogs and cats.'],
          ['Somogyi phenomenon', 'A period of hypoglycemia followed by rebound HYPERglycemia, driven by counter-regulatory hormone release — glucagon, cortisol, epinephrine. Seen when the insulin dose is TOO HIGH. The trap: the owner reports a persistently high morning glucose and the reflex is to increase insulin, which makes it worse. The correct action is to DECREASE the dose. The clue is an excessive fall in glucose during the curve, followed by a high reading.'],
          ['Stress hyperglycemia (cat)', 'Cats develop marked stress hyperglycemia from restraint alone; below roughly 290 mg/dL stress remains a plausible explanation. Use fructosamine to distinguish transient stress hyperglycemia from true diabetes — it reflects the preceding 2–3 weeks.']
        ]
      },
      {
        type: 'table', title: 'Thyroid & adrenal notes',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Euthyroid sick syndrome — three drugs', 'Phenobarbital · prednisone · carprofen. These suppress total T4 in a dog with normal thyroid function, producing a false diagnosis of hypothyroidism. Always confirm with free T4 by equilibrium dialysis plus TSH before treating.'],
          ['Drug-induced hypoadrenocorticism', "Mitotane (o,p'-DDD) causes adrenocortical necrosis and can produce iatrogenic Addison's disease. Trilostane can do the same reversibly."],
          ["Pseudo-Addison's (dog)", "Trichuris vulpis (whipworm) causes GI sodium loss and potassium retention that mimics the hyponatremia and hyperkalemia of Addison's disease — with a normal ACTH stimulation test."]
        ]
      },
      {
        type: 'table', title: 'Estrus & gestation',
        columns: ['Species', 'Estrus duration', 'Cycle type', 'Gestation'],
        rows: [
          ['Dog', '9 days', 'Non-seasonally MONOESTRUS — a single isolated heat at any time of year, roughly every 6–7 months', '62–65 days'],
          ['Cat', '7 days', 'Seasonally polyestrus (anestrus in December); induced ovulator', '65 days'],
          ['Cow', '18 hours', 'Year-round polyestrus; 21-day cycle', '~9 months (270 days)'],
          ['Mare', '5–7 days', 'Seasonally polyestrus (anestrus in December); 21-day cycle', '11 months (> 330 days)'],
          ['Sow', '40–60 hours', 'Year-round polyestrus; 21-day cycle', '114 days — "3 months, 3 weeks, 3 days"'],
          ['Ewe / doe', '24 hours', 'Seasonally polyestrus; cycle < 20 days (~17)', '150 days']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'The estrus and cycle patterns, condensed',
        list: [
          'Estrus of 7 days: cats and horses.',
          '21-day cycle: pigs, cattle, horses. Sheep are shorter, ~17 days.',
          'Year-round polyestrus: pigs and cattle.',
          'Seasonally polyestrus: sheep and goats (short-day); horses and cats (long-day — anestrus in December).',
          'Non-seasonally monoestrus: the DOG.',
          'Induced ovulators: cats, rabbits, ferrets, camelids.'
        ]
      },
      {
        type: 'cloze', title: 'Estrus & gestation — type them from memory',
        items: [
          { q:'Canine estrus lasts ___ days.', a:'9', why:'The dog is non-seasonally monoestrus — a single isolated heat roughly every 6–7 months.' },
          { q:'Feline estrus lasts ___ days.', a:'7', why:'Cats are seasonally polyestrus and induced ovulators. Horses also have a 7-day estrus.' },
          { q:'Feline gestation is ___ days.', a:'65', why:'Canine gestation is 62–65 days.' },
          { q:'Bovine estrus lasts ___ hours.', a:'18', why:'The shortest of the domestic species — which is why heat detection is the limiting step in a dairy.' },
          { q:'Equine gestation is about ___ months.', a:'11', accept:['11 months','330','>330 days'], why:'Over 330 days. Mares are seasonally polyestrus with a 21-day cycle.' },
          { q:'Sow gestation is ___ days.', a:'114', why:'"3 months, 3 weeks, 3 days."' },
          { q:'Ewe and doe gestation is ___ days.', a:'150', why:'Estrus 24 hours; cycle under 20 days, about 17.' },
          { q:'Which species are induced ovulators? ___', a:'cats, rabbits, ferrets, camelids', accept:['cat rabbit ferret camelid','cats rabbits ferrets camelids','cat, rabbit, ferret, camelid'], why:'Ovulation follows copulation rather than a spontaneous LH surge.' }
        ]
      },
      {
        type: 'table', title: 'Reproductive miscellany',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Estradiol in the dog', 'Causes two things: bone marrow toxicity (aplastic anemia — estrogen is myelotoxic in dogs and ferrets) and pyometra, because estrogen primes the endometrium for progesterone-driven cystic hyperplasia.'],
          ['Eclampsia', 'Periparturient hypocalcemia in the lactating bitch — tremors, hyperthermia, seizures. Treat with slow IV calcium gluconate with ECG monitoring, then wean or supplement the puppies.'],
          ['Priapism', 'Erection in the absence of sexual stimulation that does not resolve quickly. Classically associated with acepromazine, especially in stallions where it can be permanent.']
        ]
      },

      {
        type: 'table', title: 'Dermatophytes',
        wide: true,
        columns: ['Organism', 'Host / reservoir', "Wood's lamp", 'Morphology & notes'],
        rows: [
          ['Microsporum canis', 'Cats are the natural host; also dogs. The most common cause of dermatophytosis in dogs and cats.', 'FLUORESCES apple-green — the only one that reliably does, and only about 50% of the time.', 'Macroconidia are spindle-shaped, thick-walled, with a paintbrush-like terminal knob, and contain MORE THAN 6 CELLS.'],
          ['Microsporum gypseum (and M. persicolor)', 'Geophilic — from soil. Digging dogs.', 'Does NOT fluoresce', 'Macroconidia are < 5 cells and thin-walled — the discriminator from M. canis.'],
          ['Trichophyton mentagrophytes ⚑Z', 'Lives in RODENTS — the zoonotic dermatophyte spread from hamsters and other small pets. Also rabbits and chinchillas.', 'Does NOT fluoresce', 'Treat with terbinafine.'],
          ['Trichophyton verrucosum', 'Cattle — ringworm with thick gray-white crusts around the eyes and face in calves.', 'No', 'Highly zoonotic to handlers.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: "The two most common zoophilic dermatophytes",
        list: [
          '<b>Microsporum canis</b> — cats are the natural host; fluoresces.',
          '<b>Trichophyton mentagrophytes</b> — rodents are the reservoir; does not fluoresce; treat with terbinafine.',
          "A negative Wood's lamp never rules out ringworm. Culture on DTM is definitive.",
          'Treatment by species: ketoconazole is acceptable in dogs · ITRACONAZOLE for cats and small dogs (avoid ketoconazole in cats — anorexia, hepatotoxicity, vomiting) · terbinafine for rabbits, chinchillas and rodents.'
        ]
      },
      {
        type: 'table', title: 'Mites',
        wide: true,
        columns: ['Mite', 'Morphology', 'Disease', 'Treatment'],
        rows: [
          ['Sarcoptes ⚑Z', 'BURROWING. Short legs with long unsegmented pedicles. Round body.', 'Intense, non-seasonal pruritus — ear margins, elbows, hocks, ventrum. Positive pinnal-pedal reflex. Zoonotic and self-limiting in humans. Often only a few mites present, so a negative skin scrape does not rule it out.', 'Isoxazolines (afoxolaner, fluralaner), selamectin, ivermectin.'],
          ['Demodex', 'BURROWING — lives in hair follicles. Cigar-shaped.', 'Usually non-pruritic alopecia unless secondarily infected. Juvenile-onset (hereditary) vs. adult-onset — look for underlying immunosuppression or endocrine disease.', 'Isoxazolines. Deep skin scrapes to diagnose.'],
          ['Cheyletiella ⚑Z', 'Surface / NON-burrowing. Prominent hook-like mouthparts.', '"WALKING DANDRUFF" — large scale over the dorsal back that appears to move. Affects small animals and rabbits. Pruritic and zoonotic.', 'Isoxazolines; selamectin, lime sulfur.'],
          ['Otodectes cynotis', 'Surface, ear canal.', 'Ear mites — dark, dry, coffee-ground exudate; intense head shaking. Most common in kittens.', 'Imidacloprid/moxidectin or selamectin — imidacloprid is the standard answer for mange in cats.'],
          ['Chorioptes', 'Surface. Long legs, short unsegmented pedicles.', 'Leg mange in horses and cattle; distal limbs, perineum, tail head. Seen in WINTER in the northeastern US.', 'Topical sprays and dusts — because it lives on the surface.'],
          ['Psoroptes', 'Surface. Long legs, segmented pedicles.', 'Common in cattle, sheep and rabbits (P. cuniculi ear mite). Reportable in sheep; eradicated from the US.', 'Topical sprays and dusts.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Burrowing vs. surface — the concept behind the treatment',
        list: [
          '<b>BURROWING:</b> Sarcoptes and Demodex. They live inside the skin, so they need systemic therapy and cause deep inflammation — hyperemia, papules, pustules.',
          '<b>SURFACE:</b> Psoroptes, Chorioptes, Cheyletiella, Otodectes. They live on the skin surface, so topical sprays and dusts work.',
          'Pedicle mnemonic: <i>Chorioptes</i> = <b>chort</b> pedicles, long legs. <i>Sarcoptes</i> = short legs, long pedicles.'
        ]
      },

      {
        type: 'callout', variant: 'pearl', title: 'The round cell mnemonic — "T-LYMMPH"',
        body: '<b>T</b>VT (transmissible venereal tumor) · <b>LYM</b>phoma · <b>M</b>ast cell tumor · <b>M</b>elanoma · <b>P</b>lasma cell tumor · <b>H</b>istiocytoma. Round cells are discrete, individualized cells with round nuclei that exfoliate readily on FNA — which is why cytology is so useful for this group and comparatively poor for mesenchymal tumors.'
      },
      {
        type: 'table', title: 'Tumors by location and species',
        columns: ['Tumor', 'Key facts'],
        rows: [
          ['CNS tumors', 'Meningioma is the most common BRAIN tumor in BOTH dogs and cats, and the most common SPINAL tumor in dogs. The most common SPINAL tumor in CATS is LYMPHOMA, often FeLV-associated in young cats. That is the one exception in the grid, and it is what gets tested.'],
          ['Mast cell tumor', 'The most common cause of SPLENOMEGALY in CATS — perform an FNA of the spleen. Visceral MCT in cats is a distinct, more aggressive entity than the cutaneous form. Treatment in dogs: toceranib (Palladia), a receptor tyrosine kinase inhibitor targeting c-KIT. Surgery with wide margins remains first-line.'],
          ['Feline mammary tumors', 'Roughly 85–90% are MALIGNANT — far worse than canine. Size is the key prognostic indicator: > 3 cm → median survival 4–6 months after surgery; < 2 cm → median survival ~3 years. Treatment is bilateral radical mastectomy. Early spay is strongly protective.'],
          ['Canine mammary tumors', 'The classic "50/50 rule" — about half benign, half malignant. Risk is dramatically reduced by spaying before the first heat.'],
          ['Osteosarcoma', 'Negative prognostic indicator: HIGH ALP. Elevated total or bone ALP at diagnosis correlates with a shorter disease-free interval and survival. Large and giant breeds, metaphyseal ("away from the elbow, toward the knee"), highly metastatic to lung.'],
          ['Basal cell tumor / adenoma', 'Breeds predisposed: Himalayan and Persian cats. Cytology: large, round to polygonal cells with distinct borders, often in tight clusters and pigmented.'],
          ['Lymphoma and FeLV', 'Radiographic finding: a WIDENED MEDIASTINUM — mediastinal lymphoma in a young FeLV-positive cat. Dyspnea, non-compressible cranial thorax, pleural effusion.'],
          ['Limbal melanoma', 'Slow growing with a low rate of metastasis.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Feline injection-site sarcoma — the 3-2-1 rule',
        list: [
          'Biopsy or excise a post-vaccination mass if it is:',
          '<b>3</b> — still present 3 months after vaccination',
          '<b>2</b> — larger than 2 cm in diameter',
          '<b>1</b> — still increasing in size 1 month after vaccination',
          'Any one of the three triggers action. These tumors are locally aggressive and require radical excision — plan the surgery before you cut.',
          'FVRCP = feline viral rhinotracheitis (herpesvirus-1) · calicivirus · panleukopenia. Give it distal to the right elbow. The convention: FVRCP right front, rabies right rear, leukemia left rear — as distally as possible, so a resulting sarcoma can be treated by amputation.'
        ]
      },
      {
        type: 'table', title: 'Chemotherapy toxicities',
        columns: ['Drug', 'Toxicity in DOGS', 'Toxicity in CATS'],
        rows: [
          ['Doxorubicin', 'CARDIOTOXIC — cumulative, dose-dependent dilated cardiomyopathy. Also a severe vesicant on extravasation.', 'NEPHROTOXIC. Monitor renal values in cats, cardiac function in dogs.'],
          ['Cisplatin', 'Nephrotoxic; requires saline diuresis.', 'FATAL PULMONARY TOXICITY — never give cisplatin to a cat. Causes fulminant pulmonary edema. Use carboplatin instead.'],
          ['Azathioprine', 'Immunosuppressant; hepatotoxicity and myelosuppression possible.', 'Contraindicated — cats lack TPMT (thiopurine methyltransferase) and develop severe bone marrow suppression.'],
          ['5-Fluorouracil', 'Used topically.', 'Fatal neurotoxicity in cats.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'The "never in cats" drug list',
        body: 'Cisplatin (fatal pulmonary edema) · 5-FU (fatal neurotoxicity) · azathioprine (marrow suppression, no TPMT) · ketoconazole (hepatotoxicity, poorly tolerated) · permethrin/pyrethroids (tremors, seizures) · acetaminophen (methemoglobinemia, no glucuronyl transferase) · phenol-based disinfectants. The unifying theme for several of these: cats are deficient in glucuronidation and several other conjugation pathways.'
      },
      {
        type: 'rapidfire', title: 'Rapid-fire oncology recall',
        items: [
          ['Round cells', 'T-LYMMPH'],
          ['Splenomegaly in a cat', 'Mast cell tumor → FNA the spleen'],
          ['Brain tumor, dog or cat', 'Meningioma'],
          ['Spinal tumor in a cat', 'Lymphoma'],
          ['Widened mediastinum in a young cat', 'FeLV mediastinal lymphoma'],
          ['Feline mammary mass > 3 cm · < 2 cm', 'MST 4–6 months · ~3 years'],
          ['High ALP with a bone tumor', 'Negative prognostic indicator for osteosarcoma'],
          ['Post-vaccine mass', 'The 3-2-1 rule'],
          ['Doxorubicin', 'Cardiotoxic in dogs, nephrotoxic in cats']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
