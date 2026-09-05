/* NAVLE Hub — Large Animal Toxicology
 * Source: NAVLE_Ruminant_Study_Guide.pdf §13 (+ cross-species toxins from the
 * equine and swine guides). Species-specific toxins also appear in their own
 * species modules; this is the cross-cutting view.
 */
(function (N) {
  N.push({
    id: 'latox',
    group: 'Cross-cutting',
    title: 'Large Animal Toxicology',
    tagline: 'Most of these questions are answered by matching the toxin to the species it hits hardest.',
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'Species sensitivity is the shortcut',
        list: [
          '<b>Horses:</b> ionophores · blister beetles · black walnut · fumonisin · yellow star thistle · red maple · fescue · bracken fern (polioencephalomalacia).',
          '<b>Cattle:</b> bracken fern (bone marrow suppression and enzootic hematuria) · nitrate · larkspur · oak (renal) · blue-green algae · lupine.',
          '<b>Sheep:</b> COPPER — uniquely sensitive; pigs are resistant.',
          '<b>Pigs:</b> zearalenone · salt poisoning / water deprivation · cocklebur · fumonisin (pulmonary edema).'
        ]
      },
      {
        type: 'table', title: 'Reproductive & teratogenic toxins',
        columns: ['Plant', 'Toxin', 'Effect', 'Critical timing'],
        rows: [
          ['False hellebore (Veratrum californicum) and skunk cabbage', 'CYCLOPAMINE — a teratogen', 'Four defects: CYCLOPIA, anophthalmos, cleft palate, metacarpal hypoplasia. The classic "monkey-faced lamb."', 'DAY 14 of gestation → craniofacial deformities (cyclopia). DAY 30 → limb and bone shortening of the metacarpal and metatarsal region.'],
          ['Lupine', 'Anagyrine', '"CROOKED CALF DISEASE" — ARTHROGRYPOSIS and CLEFT PALATE, plus neurologic disease.', 'Days 40–70 of gestation.'],
          ['Ponderosa pine needles', 'Isocupressic acid', 'ABORTION in the LAST TRIMESTER, with retained placenta and weak calves.', 'Third trimester. Also "western yellow pine" and "white pine."'],
          ['Locoweeds (Astragalus, Oxytropis, Swainsona)', 'SWAINSONINE', 'Inhibits alpha-mannosidase, the lysosomal enzyme that recycles spent glycoproteins → the cell cannot clear them → NEUROVISCERAL CYTOPLASMIC VACUOLATION → neurologic disease and ABORTION. Also worsens high-altitude / brisket disease.', 'Found in the West and Rocky Mountains.'],
          ['Fescue', 'ERGOPEPTINE ALKALOIDS — DOPAMINE AGONISTS', 'PROLACTIN SUPPRESSION → inhibits lactation. Prolonged gestation and reproductive failure in mares. Four general signs: lameness, sloughing of the rear hooves, decreased weight gain, fat necrosis. "Summer slump" and "fescue foot" in cattle.', 'Treat with DOMPERIDONE — a dopamine ANTAGONIST. Remove pregnant mares from fescue 60–90 days before foaling.'],
          ['Zearalenone', 'An ESTROGENIC mycotoxin (Fusarium)', 'PIGS are the sensitive species — hyperestrogenism and pseudopregnancy, vulvar swelling in prepubertal gilts, vaginal and rectal prolapse.', 'Moldy corn.']
        ]
      },
      {
        type: 'table', title: 'Hepatic toxins',
        columns: ['Toxin', 'Detail'],
        rows: [
          ['Pyrrolizidine alkaloids', 'Four plants: fiddleneck (Amsinckia intermedia), ragwort, groundsel, Senecio. Mechanism: hepatocytes cannot divide → progressive liver failure and hepatic encephalopathy. Three diagnostic findings: MEGALOCYTOSIS, PERIPORTAL FIBROSIS, BILE DUCT HYPERPLASIA. Often causes SECONDARY photosensitization. Prognosis POOR — the damage is cumulative and irreversible by the time signs appear.'],
          ['Aflatoxin', 'A mycotoxin from Aspergillus, found in MOLDY GRAIN, especially A. flavus in corn. Hepatotoxic, immunosuppressive, and carcinogenic.'],
          ['Poison hemlock (Conium maculatum)', 'Toxin: CONIINE — a nicotinic agonist causing a depolarizing block. PATHOGNOMONIC SIGN: the animal\'s BREATH and URINE smell of MOUSE URINE. Also a teratogen causing arthrogryposis.'],
          ['Cocklebur', 'PIGS are the most affected species; the toxic stage is the two-leaf seedling. Acute hepatic necrosis with hypoglycemia.']
        ]
      },
      {
        type: 'table', title: 'Pulmonary toxins',
        columns: ['Toxin', 'Detail'],
        rows: [
          ['The three pulmonary toxins', 'PERILLA MINT · MOLDY SWEET POTATOES (4-ipomeanol) · BRASSICAS (3-methylindole). All three produce atypical interstitial pneumonia with wet, firm lungs that fail to collapse at necropsy.'],
          ['Perilla mint', 'Damages two cell types: TYPE I PNEUMOCYTES and BRONCHIOLAR (Clara/club) EPITHELIAL CELLS. Necropsy: WET, EMPHYSEMATOUS lungs. High mortality from pulmonary fibrosis.'],
          ['Moldy sweet potatoes', 'Produce 4-IPOMEANOL → atypical interstitial pneumonia. Postmortem: lungs are wet, firm, and fail to collapse — identical to the 3-MI picture.'],
          ['Brassicas (rape, kale, turnips)', 'High L-TRYPTOPHAN → 3-METHYLINDOLE → FOG FEVER.'],
          ['Fumonisin', 'In pigs: hydrothorax and porcine pulmonary edema. In horses the same toxin causes equine leukoencephalomalacia.']
        ]
      },
      {
        type: 'table', title: 'Cardiac, hematologic & metabolic toxins',
        columns: ['Toxin', 'Detail'],
        rows: [
          ['Four cardiac toxin plants', 'Milkweed · gossypol (cotton seed) · OLEANDER (a cardiac glycoside) · foxglove. Arrhythmias and sudden death. Gossypol toxicity is inactivated by IRON.'],
          ['Ionophores', 'Monensin, lasalocid, salinomycin. Used in cattle as a COCCIDIOSTAT and to improve feed efficiency. HORSES are the toxic species — myocardial necrosis and dilated cardiomyopathy. Keep cattle feed away from horses.'],
          ['Six coagulopathy toxins', 'Bracken fern · cyanide · carbon monoxide · nitrates · moldy sweet clover · anthrax.'],
          ['Bracken fern', 'Two toxins: PTAQUILOSIDE and THIAMINASE. In CATTLE: severe BONE MARROW SUPPRESSION — low neutrophils and lymphocytes, depleted platelets → acute hemorrhagic disease; plus chronic BOVINE ENZOOTIC HEMATURIA with bladder tumors and bleeding. In HORSES: POLIOENCEPHALOMALACIA from thiaminase. One plant, two completely different diseases in two species.'],
          ['Moldy sweet clover', 'COUMARIN is converted to DICOUMAROL — a vitamin K antagonist (warfarin-like) → spontaneous bleeding. Vitamin K is required for factors II, VII, IX, and X. Diagnose with the PT, because factor VII (extrinsic pathway) has the shortest half-life and falls first.'],
          ['Cyanide', 'Five plants: chokecherry · arrow grass · Sudan grass · Johnson grass · sorghum. Blocks cellular respiration — hemoglobin cannot release oxygen. Three signs: BRIGHT RED mucous membranes, BRIGHT RED blood, BITTER ALMOND smell of the GI tract on necropsy. Three treatments: SODIUM THIOSULFATE, SODIUM NITRITE, METHYLENE BLUE.'],
          ['Nitrate', 'BROWN blood and methemoglobinemia — the direct contrast with cyanide\'s bright red. Treat with METHYLENE BLUE. Nitrate accumulates in drought-stressed forage and fertilized pasture.'],
          ['Carbon monoxide', 'The other cause of cherry-red mucous membranes.'],
          ['Blue-green algae', 'Anabaena, Microcystis, Aphanizomenon. Birds and cattle are the most commonly affected; a cow can die within MINUTES. Two pathways: nicotinic agonist and acetylcholinesterase inhibitor, producing a post-synaptic depolarizing block. Neurotoxic signs: miosis, ptyalism, bradycardia, diarrhea, ataxia, convulsions, death. Microcystin also causes acute hepatotoxicity.'],
          ['Salt poisoning / water deprivation', 'Lesion: PERIVASCULAR INFILTRATION OF EOSINOPHILS — pathognomonic, and best known in pigs. High blood sodium raises osmolarity → water leaves the brain → the brain generates idiogenic osmoles → when the animal is suddenly given free water the brain over-swells → head pressing, star-gazing, blindness, seizures. Also causes hemolysis as water rushes into red cells. Treatment principle: reintroduce water SLOWLY.'],
          ['Bovine bonkers (NPN / ammoniated forage toxicity)', 'Non-protein nitrogen toxicity from urea or ammoniated feed. The toxic compound is 4-methylimidazole. Hyperexcitability, tremors, stampeding. Treatment: ruminal infusion of 2–8 L of ACETIC ACID (vinegar) plus 3–10 L of COLD WATER — the acid traps ammonia as ammonium and the cold water slows fermentation.'],
          ['Lead', 'Four signs: acute blindness, dullness, down and unable to rise, unaware of surroundings. From batteries, paint, and crankcase oil. Chelate with CALCIUM EDTA or succimer — never SODIUM EDTA, which binds calcium. In horses, look instead for roaring and dysphagia.'],
          ['Oak / acorns', 'Tannins. Five signs: hemorrhagic diarrhea, abdominal pain, tenesmus, colic, death. In CATTLE the main lesion is RENAL damage; in calves, severe nephrosis. Sheep and especially GOATS are the LEAST sensitive.'],
          ['Water hemlock', 'RESINOIDS (cicutoxin) — the LEAVES and roots are toxic. Five outcomes: grand mal seizures, salivation, tachypnea, birth defects, death. One of the most acutely lethal plants in North America.'],
          ['Nightshade', 'Atropine-like — parasympatholytic. Treat with physostigmine, which itself causes dilated pupils, progressive paralysis, and depression in excess.'],
          ['Rhododendron / azalea', 'GRAYANOTOXIN — GI signs, cardiac arrhythmias, bradycardia, hypotension; it cannot be metabolized.'],
          ['Slaframine', 'MOLDY RED CLOVER. Causes hypersalivation — "slobbers." Otherwise benign.'],
          ['Ergotism', 'Claviceps purpurea, a parasitic fungus on rye, oat, wheat, and Kentucky bluegrass — and, unusually, on stored grain. Alkaloid → vascular constriction → thrombosis → GANGRENE of the extremities, ears, and tail, plus colic. Distinguish from FESCUE toxicosis, caused by the endophyte in tall fescue, which produces the same vasoconstrictive "fescue foot" — shared mechanism, different fungus.'],
          ['Larkspur (Delphinium)', 'Nerve block at the neuromuscular junction, muscle failure, SEVERE BLOAT — very lethal and not fixable. A leading cause of cattle death on western rangeland.'],
          ['Yellow star thistle', 'Nigropallidal encephalomalacia — a HORSE disease, not a ruminant one. Keep the species attached.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire large animal toxicology recall',
        items: [
          ['Bright red blood and mucous membranes, bitter almond', 'Cyanide → thiosulfate, nitrite, methylene blue'],
          ['Brown blood', 'Nitrate → methylene blue'],
          ['Cherry-red membranes without cyanide exposure', 'Carbon monoxide'],
          ['Breath and urine smell of mouse urine', 'Poison hemlock (coniine)'],
          ['Cyclopic "monkey-faced" lamb', 'False hellebore — cyclopamine at day 14'],
          ['Crooked calf disease', 'Lupine at days 40–70'],
          ['Gunmetal kidneys and port wine urine in a sheep', 'Copper toxicosis'],
          ['Horse with myocardial necrosis after eating cattle feed', 'Ionophore'],
          ['Alfalfa hay, hematuria, horse dunking its muzzle', 'Cantharidin — blister beetle'],
          ['Cow with bone marrow suppression and bladder tumors', 'Bracken fern'],
          ['Horse with blindness and white matter necrosis on moldy corn', 'Fumonisin — leukoencephalomalacia'],
          ['Perivascular eosinophilic cuffing in the brain', 'Salt poisoning / water deprivation — reintroduce water slowly'],
          ['Fat cow moved to lush autumn pasture, afebrile, SQ emphysema', 'Fog fever — 3-methylindole'],
          ['Prolonged gestation and agalactia in a mare', 'Fescue → domperidone']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
