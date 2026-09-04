/* NAVLE Hub — Small ruminants & camelids
 * Source: NAVLE_Ruminant_Study_Guide.pdf (§11–12) + infectious disease guide
 * Ovine/caprine 3.3%, camelid/cervidae 1.7% of the exam.
 */
(function (N) {
  N.push({
    id: 'smallrum',
    group: 'Species',
    title: 'Sheep & Goats',
    tagline: 'Ovine/caprine is 3.3% of the exam. Clostridial disease, lentiviruses, and copper are the pillars.',
    weight: 3.3,
    sections: [
      { type: 'callout', variant: 'pearl', title: 'One virus family, two species, nearly identical disease', body: 'CAE (goats) and OPP / maedi-visna (sheep) are both LENTIVIRUSES — the same family as FIV and HIV. Both are transmitted in COLOSTRUM and milk, cause lifelong infection, and are controlled only by test-and-cull plus feeding heat-treated colostrum. Neither has a treatment or a vaccine.' },
      {
        type: 'table', title: 'The lentiviruses — CAE and OPP',
        columns: ['Disease', 'Species', 'Clinical syndromes', 'Diagnosis'],
        rows: [
          ['CAE (caprine arthritis encephalitis)', 'GOATS', 'Three forms by age: (1) neurologic signs in 2–4 month olds — leukoencephalomyelitis; (2) ARTHRITIS in animals over 1 year — swollen carpi, "big knee"; (3) HARD UDDER (indurative mastitis) with agalactia. Also chronic pneumonia and wasting.', 'ELISA or AGID for screening. Transmitted in COLOSTRUM — infected for life. Seroconversion can take months. Control: test-and-cull, remove kids at birth, feed heat-treated colostrum (56°C × 60 min) or pasteurized milk.'],
          ['OPP (ovine progressive pneumonia) / maedi-visna', 'SHEEP', 'Four signs: PNEUMONIA (progressive dyspnea — "maedi" means shortness of breath), ATAXIA ("visna" = the neurologic form), WEIGHT LOSS, and HARD UDDER. Progressive dyspnea and wasting with no fever and no response to antibiotics.', 'AGID or ELISA serology, or PCR — test and cull. Lung histopath: lymphoid interstitial pneumonia.']
        ]
      },
      {
        type: 'table', title: 'Clostridial disease of sheep and goats',
        columns: ['Organism / type', 'Disease', 'Treatment & prevention'],
        rows: [
          ['C. perfringens type A', 'Alpha toxin only. Causes hemorrhagic bowel syndrome in adult cattle and YELLOW LAMB DISEASE.', 'General clostridial treatment: PENICILLIN, ANTITOXIN, IV FLUIDS, NSAIDs. Prevention: pre-lambing vaccination of dams so antibody transfers in colostrum. CD-T vaccine covers types C and D plus tetanus.'],
          ['C. perfringens type B', 'LAMB DYSENTERY — not present in the US.', 'As above.'],
          ['C. perfringens type C', 'Produces alpha PLUS BETA toxin. PERACUTE DEATH with hemorrhagic enteritis in 1–3 day old kids and lambs. Called "struck" in Great Britain.', 'Why neonates specifically: they do not yet produce the pancreatic proteolytic enzyme TRYPSIN, which would otherwise destroy beta toxin — and colostrum contains trypsin inhibitors.'],
          ['C. perfringens type D', 'ENTEROTOXEMIA — "PULPY KIDNEY" disease. Epsilon toxin. Classic in the fastest-growing lamb on high grain; sudden death, opisthotonos, glycosuria.', 'Vaccinate; avoid abrupt grain increases.'],
          ['C. novyi type B', '"BIG HEAD" — toxin-mediated necrosis causing edema and swelling of the head in young rams that fight. Also "BLACK DISEASE" / infectious necrotic hepatitis, which follows Fasciola migration creating anaerobic hepatic niches. Peracute, sudden-death presentation.', 'PENICILLIN. Control flukes to prevent black disease.'],
          ['C. haemolyticum', 'Bacillary hemoglobinuria / "red water" — also follows fluke migration.', 'Penicillin; fluke control.'],
          ['C. tetani', 'Tetanus — spastic paralysis.', 'PENICILLIN, antitoxin, wound care.']
        ]
      },
      {
        type: 'table', title: 'Infectious disease', wide: true,
        columns: ['Disease', 'Agent', 'Features & management'],
        rows: [
          ['Contagious ecthyma ("orf", sore mouth) ⚑Z', 'PARAPOXVIRUS', 'Crusty scabs and cauliflower-like proliferative growths around the MOUTH, NOSTRILS, EYELIDS, and HOOVES — and on the ewe\'s teats, causing her to reject the lamb. Lambs are reluctant to nurse → poor growth. ZOONOTIC — causes painful nodules on handlers\' hands. Self-limiting in 1–4 weeks; support nursing and treat secondary infection. Live scab vaccine is available but commits the flock, because it introduces the virus. Differentiate from bluetongue, FMD, and sheep/goat pox.'],
          ['Caseous lymphadenitis (CLA) ⚑Z', 'Corynebacterium pseudotuberculosis', 'Abscessation of peripheral and internal lymph nodes — parotid, submandibular, prescapular, prefemoral — with thick, pasty, greenish-white odorless pus ("toothpaste") in characteristic onion-ring laminations. Internal form: chronic wasting and respiratory signs ("thin ewe syndrome"). Diagnosis: CULTURE; ultrasound for internal abscesses. Lifelong; cull or isolate. Antibiotics penetrate the capsule poorly and the organism persists in soil and bedding for months, which is why culling wins. Shear and handle young clean animals first.'],
          ['Chlamydial polyarthritis', 'Chlamydia pecorum', 'Three signs: LAMENESS, CONJUNCTIVITIS, FEVER. Treat with OXYTETRACYCLINE.'],
          ['Enzootic abortion of ewes (EAE) ⚑Z', 'Chlamydia abortus', 'Late-term abortion. Placental lesions: necrotic COTYLEDONS and INTERCOTYLEDONARY SPACE. Seriously zoonotic — can cause abortion in pregnant women. Pregnant women must not handle lambing ewes.'],
          ['Mycoplasma polyarthritis', 'Mycoplasma spp.', 'Three outcomes: death in the young, brain disease, and polyarthritis.'],
          ['Vibriosis', 'Campylobacter fetus subsp. fetus', 'A cause of abortion, common in the WESTERN USA. Reduce by VACCINATION.'],
          ['Toxoplasmosis', 'Toxoplasma gondii', 'Abortion with bright dark-red cotyledons bearing white foci of necrosis — a distinctive placental picture. Note Toxoplasma causes abortion in sheep and goats but NOT in cows.'],
          ['Brucellosis ⚑R', 'Brucella ovis', 'In rams: EPIDIDYMITIS and decreased fertility. Palpate every ram\'s epididymis at breeding soundness exam.'],
          ['Ulcerative posthitis ("pizzle rot")', 'Corynebacterium renale', 'Urea-splitting bacteria on a high-protein diet produce ammonia that ulcerates the prepuce. Reduce dietary protein.'],
          ['Lumpy wool', 'Dermatophilus congolensis', 'The sheep form of dermatophilosis — crusts binding the wool into hard tufts.'],
          ['Sheep keds', 'Melophagus ovinus', 'A wingless fly, not a tick. Anemia and wool damage.'],
          ['Interdigital dermatitis / foot rot', 'Fusobacterium necrophorum with Dichelobacter nodosus', 'Footbaths (zinc sulfate), trimming, and culling chronically affected animals.'],
          ['Psoroptes ovis ⚑R', 'Surface mite', 'The most important sheep mite and REPORTABLE — eradicated from the US. Found on the back, sides, and rump. Non-burrowing, with an oval body and long pedicles.'],
          ['Border disease ("hairy shaker disease")', 'PESTIVIRUS related to BVDV', 'Lambs born with tremors and a hairy birth coat, plus hydranencephaly. Diagnose by virus isolation.'],
          ['Louping ill', 'Flavivirus; Ixodes vector', 'Ovine encephalomyelitis; fine muscle tremors and nervous nibbling.'],
          ['Systemic pasteurellosis', 'Mannheimia / Pasteurella', 'Treat with oxytetracycline or florfenicol.'],
          ['Scrapie ⚑R', 'Prion', 'Pruritus, wool loss, ataxia, wasting. Test by IMMUNOHISTOCHEMISTRY of the OBEX — also third eyelid and rectal mucosa biopsy in live animals. National eradication program with mandatory identification.']
        ]
      },
      {
        type: 'table', title: 'Metabolic & nutritional disease',
        columns: ['Condition', 'Detail'],
        rows: [
          ['Pregnancy toxemia', 'Late-gestation ewe or doe carrying multiple fetuses in negative energy balance → ketosis. Treatment: DELIVER THE FETUSES — C-section or induction — because the fetal glucose demand is the problem. Plus propylene glycol, dextrose, and calcium.'],
          ['Copper toxicosis — the sheep-specific poisoning', 'SHEEP are uniquely sensitive to copper; PIGS are resistant. The classic cause: feeding CATTLE or HORSE feed to sheep — those rations contain copper levels that are safe for cattle and lethal for sheep. Copper accumulates silently in the liver, then releases in a hemolytic crisis. Signs: HEMOLYTIC ANEMIA with methemoglobinemia, hemoglobinemia, and hemoglobinuria. Necropsy: GUNMETAL-colored kidneys and "PORT WINE" urine. Treat with D-PENICILLAMINE and AMMONIUM TETRATHIOMOLYBDATE plus fluids.'],
          ['Copper DEFICIENCY', 'Two syndromes separated by age: ENZOOTIC ATAXIA in lambs 1–2 months old, acquired postnatally; and SWAYBACK, congenital or in very young lambs, with progressive ascending paralysis. Both are demyelinating. Also caused by molybdenum excess.'],
          ['Zinc deficiency in goats', 'Parakeratosis and poor coat quality.'],
          ['PEM', 'Causes in small ruminants: HIGH SULFUR and LOW THIAMINE; also high-dose AMPROLIUM. Treat with thiamine.'],
          ['Frothy bloat', 'Sign: OPEN-MOUTH BREATHING with severe left-sided distension. Legume pastures. Treat with poloxalene or mineral oil; trocarize if life-threatening.'],
          ['Polled intersex', 'Three hornless goat breeds are affected: Saanen, Alpine, and Toggenburg. The polled gene is linked to intersex — breeding polled to polled produces sterile intersex offspring.'],
          ['Urolithiasis in males', 'Struvite on an all-grain diet; silicate on western range. Wethers and feedlot lambs are at highest risk — the classic obstructed small ruminant.']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Two small ruminant drug dangers', body: 'XYLAZINE causes FATAL HYPOXEMIA in sheep and goats — small ruminants are exquisitely sensitive to alpha-2 agonists, which cause pulmonary edema and severe hypoxemia. Use with great caution and at much reduced doses. AMPROLIUM at high doses causes PEM in sheep, because it is a thiamine analog — dose carefully and supplement thiamine on prolonged courses.' },
      {
        type: 'rapidfire', title: 'Rapid-fire small ruminant recall',
        items: [
          ['Big knee in a goat + hard udder', 'CAE — colostrum-transmitted lentivirus'],
          ['Progressive pneumonia + hard udder in a sheep', 'OPP / maedi-visna'],
          ['Sudden death in the best-grown lamb on grain', 'C. perfringens type D — pulpy kidney'],
          ['Peracute hemorrhagic death in a 1–3 day old lamb', 'Type C — no trypsin yet'],
          ['Swollen head in a fighting ram', 'C. novyi type B big head → penicillin'],
          ['Scabby mouth, zoonotic', 'Orf (parapoxvirus)'],
          ['Onion-ring abscess', 'Caseous lymphadenitis → culture'],
          ['Gunmetal kidneys + port wine urine', 'Copper toxicosis — fed cattle feed'],
          ['Ewe with twins, off feed, ketotic', 'Pregnancy toxemia → C-section'],
          ['Hairy shaker lamb', 'Border disease'],
          ['Bottle jaw + anemia + normal manure', 'Haemonchus → FAMACHA'],
          ['Xylazine in a sheep', 'Fatal hypoxemia — avoid or dose far lower']
        ]
      },
      {
        type: 'cloze', title: 'Numbers',
        items: [
          { q:'Sheep and goat gestation is ___ days.', a:'150', why:'Estrus 24 hours; cycle ~17 days; seasonally polyestrus, short-day breeders.' },
          { q:'The ovine and caprine estrous cycle is about ___ days.', a:'17', accept:['~17','17 days','16-17'], why:'Shorter than the 21-day cycle of cattle, pigs and horses.' },
          { q:'A ruminant has ___ permanent teeth.', a:'32', why:'No upper incisors — a dental pad instead.' }
        ]
      }
    ]
  });

  N.push({
    id: 'camelids',
    group: 'Species',
    title: 'Camelids',
    tagline: 'Camelid/cervidae is 1.7% of the exam. Camelids are pseudo-ruminants — the anatomy is different.',
    weight: 1.7,
    sections: [
      { type: 'callout', variant: 'pearl', title: 'C1 blocks, C3 burns', body: 'Camelids have a three-compartment stomach (C1, C2, C3), not four. C1 gets IMPACTIONS and gastroliths; C3 gets ULCERS and is the site of acid secretion. That single distinction answers several questions.' },
      {
        type: 'table', title: 'Anatomy, physiology & reproduction',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Stomach compartments', 'C1 — impactions and GASTROLITHS. C3 — ULCERS, and the site of acid secretion.'],
          ['Most common congenital malformation', 'CHOANAL ATRESIA — the cria cannot breathe through the nose, and camelids are obligate nasal breathers, so it presents with respiratory distress and inability to nurse.'],
          ['Ovulation', 'INDUCED ovulators — along with cats, rabbits, and ferrets.'],
          ['Pregnancy detection', 'As early as 16 days.'],
          ['Uterine horn', 'Essentially ALL pregnancies occur in the LEFT uterine horn — which is why UTERINE TORSION is such a common camelid dystocia.'],
          ['Placentation', 'EPITHELIOCHORIAL, MICROCOTYLEDONARY, DIFFUSE. Fetal villi are spread over the entire chorionic sac but attach through thousands of tiny villous clusters. Because it is epitheliochorial it is NON-INVASIVE — all maternal and fetal tissue layers remain intact, giving a relatively loose attachment. No antibody crosses in utero, so crias depend entirely on colostrum.'],
          ['Puberty', 'Llamas reach puberty later than alpacas — roughly 2–3 years for llamas versus 12–18 months for alpaca females.']
        ]
      },
      {
        type: 'table', title: 'Camelid medicine',
        columns: ['Condition', 'Detail'],
        rows: [
          ['Three causes of anemia', '1. C3 ULCER causing GI blood loss · 2. Haemonchus contortus · 3. Mycoplasma haemolamae.'],
          ['Mycoplasma haemolamae', 'A hemotropic bacterium that attaches to the SURFACE of red blood cells. Many infected animals are asymptomatic carriers, but the organism triggers severe, sometimes fatal hemolytic anemia when the animal is stressed, immunosuppressed, or has a concurrent illness. Treat with OXYTETRACYCLINE.'],
          ['Ulcers vs. impactions', 'C3 ulcers — reduce by minimizing stress, providing adequate roughage, and using prophylactic anti-ulcer medication in hospitalized animals. C1 impactions — from poor-quality forage and dehydration.'],
          ['Most common parasites', 'NEMATODES — strongyles, whipworms, and the meningeal worm. Also Eimeria coccidiosis, including E. macusaniensis, which is highly pathogenic. Treat Eimeria with PONAZURIL.'],
          ['Nematodirus', 'Three signs: diarrhea, weight loss, failure to thrive. Diagnose by direct smear and fecal float.'],
          ['Meningeal worm', 'Parelaphostrongylus tenuis — causes meningoencephalitis, ataxia, and paresis. White-tailed deer is the definitive host. CSF: EOSINOPHILIC pleocytosis. Prevent by keeping deer off pasture and monthly ivermectin in endemic areas.'],
          ['Enterotoxemia', 'C. perfringens types A, C, and D. Vaccinate.'],
          ['Alpaca fever', 'Streptococcus equi subsp. zooepidemicus — septicemia with high fever, often after stress or shows.'],
          ['Juvenile llama immunodeficiency syndrome', 'Very low IgG from a genetic defect in B lymphocyte production and humoral immunity. Recurrent infections and failure to thrive despite adequate colostrum.'],
          ['Berserk male syndrome', 'Also called NOVICE HANDLER SYNDROME — a hand-reared male that has imprinted on humans becomes dangerously aggressive at maturity. Prevention is everything: do not bottle-raise and over-handle male crias.'],
          ['Ear ticks', 'Cause otitis media and interna.']
        ]
      },
      {
        type: 'table', title: 'Camelid dermatology',
        columns: ['Condition', 'Detail'],
        rows: [
          ['Munge', 'Idiopathic hyperkeratosis — thick crusted lesions around the nose, mouth, eyes, and ears. Affects animals 6 months to 2 years old. Multifactorial; rule out zinc deficiency and mites first.'],
          ['Zinc-responsive dermatosis', 'Non-pruritic papules and crusting; responds to zinc supplementation.'],
          ['Sarcoptic mange', 'Sarcoptes scabiei var. cameli — a BURROWING mite. Treat with IVERMECTIN. Psoroptes and Chorioptes live ON the skin and can be treated topically.'],
          ['Psoroptes ovis ⚑R', 'REPORTABLE in camelids. Causes lesions in the EARS. Camelids serve as ASYMPTOMATIC CARRIERS — which is exactly why it is reportable and why they matter epidemiologically to the sheep industry.']
        ]
      },
      { type: 'callout', variant: 'danger', title: 'Tilmicosin is cardiotoxic in camelids', body: 'Tilmicosin (Micotil) is fatal in camelids — and in horses, goats, swine, and humans. It causes dose-dependent cardiovascular collapse with no effective antidote. Never use it in a camelid, and handle the bottle carefully — accidental human self-injection has been fatal.' },
      {
        type: 'rapidfire', title: 'Rapid-fire camelid recall',
        items: [
          ['Impaction', 'C1'],
          ['Ulcer', 'C3'],
          ['Cria that can\'t breathe through its nose', 'Choanal atresia'],
          ['All pregnancies in the left horn', 'Uterine torsion risk'],
          ['Camelid placenta', 'Epitheliochorial, microcotyledonary, diffuse'],
          ['Anemia in an alpaca', 'C3 ulcer · Haemonchus · Mycoplasma haemolamae → oxytetracycline'],
          ['Ataxic alpaca', 'Meningeal worm → eosinophilic CSF'],
          ['Reportable ear mite, asymptomatic carrier', 'Psoroptes ovis'],
          ['Aggressive hand-raised male', 'Berserk male syndrome'],
          ['The drug never to give', 'Tilmicosin']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
