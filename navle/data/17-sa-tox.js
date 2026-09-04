/* NAVLE Hub — Small Animal Toxicology
 * Source: NAVLE_Dogs_Cats_Study_Guide.pdf ch. 1.
 *
 * Nearly every small animal toxicology item asks one of three things:
 * mechanism, antidote, or the one lab abnormality that gives it away.
 * The tables below are built on those three columns deliberately.
 */
(function (N) {
  N.push({
    id: 'sa-tox',
    group: 'Cross-cutting',
    title: 'Small Animal Toxicology',
    tagline: 'Mechanism, antidote, and the one lab value that gives it away.',
    weightNote: 'part of the 49.9% dog + cat block',
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'How toxicology is tested',
        body: 'Nearly every small animal toxicology item is one of three questions: What is the mechanism? What is the antidote? What is the one lab abnormality that gives it away? Build recall around those three columns and almost any stem becomes recognizable.'
      },

      {
        type: 'table', title: 'Rodenticides — know all three',
        wide: true,
        columns: ['Rodenticide', 'Mechanism', 'Signs & lab findings', 'Antidote / treatment'],
        rows: [
          ['Warfarin\n1st-generation anticoagulant', 'Anticoagulant — interferes with vitamin K–dependent factors II, VII, IX and X.', 'PROLONGED PT FIRST, because factor VII has the shortest half-life and sits in the extrinsic pathway. Hemorrhage, anemia.', 'Vitamin K1 (phytonadione).'],
          ['Brodifacoum\n2nd generation — d-CON', 'Inhibits vitamin K epoxide reductase. Much longer-acting than warfarin.', 'Hemorrhage and anemia. Prolonged PT, then PTT.', 'Vitamin K1 — but for a much longer course (3–4 weeks) because of the extended half-life.'],
          ['Cholecalciferol', 'Converted to active vitamin D → increased calcium resorption from bone and absorption from gut.', 'Fatal HYPERCALCEMIA, hyperphosphatemia, soft-tissue mineralization, acute kidney injury.', 'Fluids, furosemide, glucocorticoids, bisphosphonates, calcitonin. Vitamin K does nothing here.'],
          ['Bromethalin\nnot vitamin-K responsive', 'Neurotoxic — uncouples oxidative phosphorylation in the CNS → cerebral edema.', 'Tremors, ataxia, paresis. NO coagulopathy.', 'Decontamination, mannitol for cerebral edema. No antidote.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Bromethalin vs. brodifacoum — the classic pairing',
        list: [
          '<b>Bromethalin = BRAIN.</b> Tremors, ataxia, paresis. Neurotoxic. No vitamin K response.',
          '<b>Brodifacoum = BLEEDING.</b> Hemorrhage and anemia. Responds to vitamin K1.',
          'A rodenticide exposure with neurologic signs and a <b>normal PT</b> is not an anticoagulant.'
        ]
      },

      {
        type: 'table', title: 'Ethylene glycol (antifreeze)',
        columns: ['Finding', 'Detail'],
        rows: [
          ['The five classic abnormalities', '1. High anion gap metabolic acidosis · 2. Azotemia · 3. Hyperglycemia · 4. Polyuria progressing to oliguria · 5. Hypocalcemia, from chelation by oxalate.'],
          ['Urine sediment', 'Calcium oxalate crystalluria — the monohydrate form, classically described as "picket fence" or dumbbell-shaped.'],
          ['Treatment', '4-methylpyrazole (fomepizole, 4-MP) — competitively inhibits alcohol dehydrogenase, preventing conversion of ethylene glycol to its toxic metabolites.'],
          ['Why 4-MP over ethanol', 'Three reasons: it does not cause hyperosmolality, metabolic acidosis, or CNS depression — all of which ethanol adds on top of the toxicosis.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'The feline treatment window is razor thin',
        body: 'Fomepizole <b>is</b> used in cats, but at a much higher dose than in dogs, and it must be started within about 3 hours of ingestion to work. Cats have a far narrower window and a much worse prognosis than dogs, so ethylene glycol exposure in a cat is a true emergency.'
      },

      {
        type: 'table', title: 'Insecticides & neurotoxins',
        wide: true,
        columns: ['Toxin', 'Mechanism', 'Signs', 'Treatment'],
        rows: [
          ['Organophosphates / carbamates', 'Inhibit acetylcholinesterase → ACh accumulates → muscarinic overstimulation.', 'Muscarinic signs: hypersalivation, incoordination, bloat. Think SLUDGE — Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis.', 'Atropine (blocks muscarinic receptors) and 2-PAM (pralidoxime), which reactivates acetylcholinesterase before the enzyme "ages."'],
          ['Pyrethrins / pyrethroids', 'Toxic to CATS. Alter sodium channel activity to increase the length of depolarization. Cats lack the glucuronidation capacity to clear them.', 'Four outcomes: depression, hypersalivation, ataxia, muscle tremors. Classic history: the owner applied a dog flea product to the cat.', 'Methocarbamol and remove the source — bathe the patient.'],
          ['Strychnine', 'Snail/gopher bait. Outcompetes GLYCINE, the inhibitory neurotransmitter of the spinal cord and brainstem → loss of inhibition.', 'Affects striated (skeletal) muscle → rigid extensor spasm, "sawhorse" stance, tetanic seizures triggered by stimuli.', 'Methocarbamol. Minimize sensory stimulation — dark, quiet room.'],
          ['Metaldehyde (snail bait)', 'The other snail bait. Decreases GABA and serotonin.', 'Severe muscle tremors — "shake and bake." Hyperthermia.', 'Methocarbamol, cooling, decontamination.'],
          ['Black widow spider\nLatrodectus mactans / L. hesperus', 'Alpha-latrotoxin triggers massive acetylcholine release at the neuromuscular junction, ultimately destroying peripheral nerve terminals.', 'Rigid muscle spasm progressing to ascending motor paralysis and cardiovascular collapse.', 'Antivenin, muscle relaxants, supportive care.']
        ]
      },

      {
        type: 'table', title: 'Food & household toxicoses',
        wide: true,
        columns: ['Toxin', 'Mechanism', 'Signs', 'Treatment'],
        rows: [
          ['Xylitol (dog)', 'Rapid, massive insulin release from the canine pancreas — does not occur in cats or humans. High doses also cause acute hepatic necrosis.', 'Three outcomes: hypoglycemia, hypokalemia, coma and seizures.', 'Dextrose IV, potassium supplementation, monitor liver enzymes for 72 hours.'],
          ['Chocolate', 'Methylxanthines — theobromine and caffeine. Phosphodiesterase inhibition and adenosine receptor antagonism.', 'Three outcomes: CNS excitation, tachycardia, vasoconstriction. Also vomiting, PU/PD, arrhythmias.', 'Highest toxin concentration is unsweetened BAKING chocolate; white chocolate is nearly harmless. Decontamination, fluids, beta-blockers for tachyarrhythmia.'],
          ['Grapes and raisins', 'Mechanism now attributed to TARTARIC ACID.', 'Acute kidney injury.', 'Aggressive decontamination and fluid diuresis.'],
          ['Onions / garlic', 'Organosulfur compounds cause oxidative damage to hemoglobin.', 'Heinz body anemia, plus hemoglobinuria and hemoglobinemia.', 'Supportive; transfusion if severe.'],
          ['Acetaminophen (cat)', 'Cats lack glucuronyl transferase and cannot conjugate the drug → toxic metabolites accumulate.', 'METHEMOGLOBINEMIA — dark brown, "muddy" blood and mucous membranes. Also Heinz body anemia, facial/paw edema, hepatic necrosis (more so in dogs).', 'N-acetylcysteine, which replenishes glutathione. Ascorbic acid as an adjunct.'],
          ['Bleach', 'Corrosive / irritant.', 'Oral and esophageal irritation, vomiting.', 'Dilute the stomach contents with milk or water. Do NOT induce emesis.'],
          ['Fleet (phosphate) enemas (cat)', 'High in PHOSPHORUS. Absorbed phosphate chelates calcium.', 'Three consequences: decreased serum calcium → weakness, shock, tremors, seizures; hypernatremia; hyperphosphatemia.', 'Calcium gluconate, phosphate binders, and sometimes insulin + dextrose to drive phosphate intracellularly.'],
          ['Petroleum distillates (cat)', 'Aspiration pneumonitis risk; dermal irritation.', 'Respiratory distress, dermatitis, pain.', 'Buprenorphine for analgesia. Bathe with mild detergent. Never induce emesis — aspiration risk.'],
          ['Zinc (pennies)', 'Oxidative hemolysis. Pennies minted after 1983 are predominantly zinc.', 'Heinz body anemia, hemolysis, GI signs, renal injury.', 'Remove the foreign body — the anemia will not resolve until the source is out.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Never induce emesis for corrosives or petroleum distillates',
        body: 'Emesis is contraindicated for corrosives — bleach, drain cleaners, strong acids and alkalis — because bringing the corrosive back up re-injures the esophagus and adds aspiration risk. The same rule applies to petroleum distillates, where the danger is aspiration pneumonitis. Correct approach: dilute with milk or water and do NOT induce vomiting.'
      },

      {
        type: 'table', title: 'Heinz body anemia — memorize the whole list',
        note: 'Feline hemoglobin has eight reactive sulfhydryl groups, which is why cats form Heinz bodies far more readily than other species.',
        columns: ['The seven general causes', 'Cat-specific causes'],
        rows: [
          ['1. Zinc', '1. Hepatic lipidosis'],
          ['2. Onions (and garlic)', '2. Acetaminophen toxicity'],
          ['3. Brassica — kale, cabbage, rape', '3. Zinc toxicity'],
          ['4. Rye grass', '4. Diabetic ketoacidosis'],
          ['5. Red maple (classically the horse)', 'Two of these four are metabolic diseases, not poisons.'],
          ['6. Molybdenum', ''],
          ['7. Methylene blue', '']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Red maple is a horse toxicity',
        body: 'Red maple appears on the general Heinz body list, but the classic exam presentation is a <b>horse</b> with icterus, methemoglobinemia and hemolytic anemia after eating wilted red maple leaves. Keep the species attached to the toxin — molybdenum is likewise a ruminant problem.'
      },

      {
        type: 'table', title: 'The lilies — a guaranteed question',
        columns: ['Lily', 'Toxic effect', 'Detail'],
        rows: [
          ['True lilies — Lilium spp. (Stargazer, Easter, Tiger, Asiatic) and Hemerocallis (daylily)', 'ACUTE RENAL FAILURE — cats', 'Every part is toxic, including pollen and vase water. Cats only; dogs get GI upset. Aggressive fluid diuresis for 48–72 hours.'],
          ['Peace lily and calla lily', 'Insoluble calcium oxalate crystals', 'Not true lilies. Immediate oral pain, drooling and swelling from mechanical crystal injury — not renal failure.'],
          ['Lily of the valley\nConvallaria majalis', 'CARDIOTOXIC', 'Contains cardiac glycosides — behaves like digoxin toxicity: arrhythmias, bradycardia, GI signs, hyperkalemia.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'The three renal toxicants',
        body: 'Lilies · grapes · raisins. Acute kidney injury in a dog or cat with a dietary or plant history is one of these three — or ethylene glycol.'
      },

      {
        type: 'rapidfire', title: 'Rapid-fire toxicology recall',
        items: [
          ['Prolonged PT first — factor VII, shortest half-life, extrinsic pathway', 'Anticoagulant rodenticide'],
          ['Hypercalcemia after a rodenticide', 'Cholecalciferol'],
          ['Tremors + ataxia after a rodenticide, normal PT', 'Bromethalin'],
          ['Calcium oxalate crystalluria + high anion gap acidosis', 'Ethylene glycol → fomepizole'],
          ['SLUDGE', 'Organophosphate → atropine + 2-PAM'],
          ['Cat treated with a dog flea product', 'Pyrethroid → methocarbamol'],
          ['Rigid extensor spasm, snail bait', 'Strychnine (glycine antagonist) → methocarbamol'],
          ['Severe tremors, snail bait', 'Metaldehyde'],
          ['Dog + sugar-free gum', 'Xylitol → hypoglycemia, hypokalemia, seizures'],
          ['Brown blood in a cat', 'Acetaminophen → N-acetylcysteine'],
          ['Cat + houseplant + anuria', 'True lily']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
