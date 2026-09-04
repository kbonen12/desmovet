/* NAVLE Hub — Cardiology, Respiratory, Acid–Base & Critical Care (dogs & cats)
 * Source: NAVLE_Dogs_Cats_Study_Guide.pdf ch. 3 and 4.
 */
(function (N) {
  N.push({
    id: 'sa-cardioresp',
    group: 'Species',
    title: 'Cardiology & Critical Care',
    tagline: 'Murmur location, the hyperkalemia ECG, and the numbers that decide what you do next.',
    weightNote: 'part of the 49.9% dog + cat block',
    covKey: 'dogcat', covTitle: 'Dogs & Cats', covWeight: 49.9,
    sections: [
      {
        type: 'table', title: 'Hemodynamic first principles',
        columns: ['Concept', 'Definition'],
        rows: [
          ['Cardiac output', 'CO = stroke volume × heart rate'],
          ['Stroke volume determined by', 'Preload · afterload · contractility'],
          ['Oxygen delivery', 'DO₂ = cardiac output × arterial oxygen content'],
          ['Compensation for acute blood loss', 'Three responses: 1. Increased cardiac output with vasoconstriction (RAAS/angiotensin). 2. ADH drives water and sodium resorption by the kidney. 3. Splenic contraction autotransfuses stored red cells.']
        ]
      },
      {
        type: 'table', title: 'Body water compartments',
        columns: ['Compartment', 'Fraction'],
        rows: [
          ['Total body water (TBW)', '~60% of body weight. Use 70% for pediatric patients and lean body weight for obese patients, since fat holds little water.'],
          ['Intracellular fluid (ICF)', '2/3 of TBW = 40% of body weight'],
          ['Extracellular fluid (ECF)', '1/3 of TBW = 20% of body weight'],
          ['ECF subdivides into', 'Interstitial = 75% of ECF · intravascular = 25% of ECF. This is why only about a quarter of a crystalloid bolus stays in the vasculature.']
        ]
      },
      {
        type: 'table', title: 'Shock',
        columns: ['Type', 'Mechanism'],
        rows: [
          ['Hypovolemic', 'Critical reduction in intravascular volume — hemorrhage, third-spacing or dehydration → decreased tissue perfusion and oxygenation.'],
          ['Cardiogenic', 'Decreased myocardial contractility with a subsequent fall in oxygen delivery. Always associated with primary heart disease.'],
          ['Obstructive', 'Abnormal blood distribution that impairs venous return — GDV compressing the caudal vena cava, pericardial tamponade, or saddle thrombus.'],
          ['Distributive (vasogenic)', 'Typically secondary to sepsis or anaphylaxis, causing widespread vasodilation and maldistribution of an adequate blood volume.']
        ]
      },

      {
        type: 'table', title: 'Heart sounds',
        columns: ['Sound', 'Origin'],
        rows: [
          ['S1', 'Closure of the AV valves (mitral and tricuspid) — marks the onset of ventricular contraction, systole.'],
          ['S2', 'Closure of the pulmonic and aortic valves — onset of diastole.'],
          ['S3', 'Rapid ventricular filling / relaxation. A pathologic gallop in dogs and cats — think dilated cardiomyopathy.'],
          ['S4', 'Atrial contraction. Pathologic gallop — think hypertrophic cardiomyopathy in cats.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Left-side auscultation — "PAM"',
        list: [
          '<b>P</b>ulmonic — 3rd intercostal space',
          '<b>A</b>ortic — 4th intercostal space',
          '<b>M</b>itral — 5th intercostal space',
          'On the right, the tricuspid valve sits between the 3rd and 4th ICS. Tricuspid dysplasia produces a systolic murmur at the right mid-thorax.'
        ]
      },
      {
        type: 'table', title: 'Murmur localization',
        columns: ['Location', 'Murmurs heard there'],
        rows: [
          ['Left heart BASE', 'Three: pulmonic stenosis, PDA and subaortic stenosis.'],
          ['Left heart APEX', 'Mitral valve dysplasia — and acquired mitral regurgitation, by far the most common murmur in an older small-breed dog.'],
          ['Right side, 3rd–4th ICS', 'Tricuspid disease; also where a VSD is often loudest.']
        ]
      },

      {
        type: 'table', title: 'Congenital heart disease',
        wide: true,
        columns: ['Defect', 'Murmur', 'Key features', 'Treatment'],
        rows: [
          ['PDA (dog)', 'Continuous "machinery" or "washing machine" murmur, loudest at the left heart base.', 'The most common congenital defect in DOGS. Bounding, hyperkinetic femoral pulses.', 'Surgical ligation or coil embolization. Do NOT close a right-to-left (reversed) shunt — the shunt is the patient\'s only pressure relief and closing it is fatal.'],
          ['VSD (cat)', 'Loud holosystolic (constant) murmur heard on BOTH sides.', 'The most common congenital defect in CATS, and also the most common congenital defect in CATTLE, where it presents at 2–3 months.', 'Small defects are often tolerated; large ones lead to CHF.'],
          ['Patent foramen ovale / ASD', 'Often soft, or a relative pulmonic stenosis murmur.', 'Fails to close within 48 hours of birth → shunting from the LEFT atrium to the RIGHT atrium.', 'Usually incidental unless large.'],
          ['Tetralogy of Fallot', 'Variable; often a pulmonic stenosis murmur.', 'Four components: 1. Overriding (dextroposed) aorta · 2. Pulmonic stenosis · 3. Ventricular septal defect · 4. Right ventricular hypertrophy. Unique finding: POLYCYTHEMIA.', 'The right-to-left shunt causes hypoxemia → increased erythropoietin → polycythemia and dark red mucous membranes. Phlebotomy; palliative shunting.']
        ]
      },

      {
        type: 'table', title: 'Acquired cardiac disease',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Valvular endocarditis — which valve?', 'Small animals: the AORTIC valve, and mitral. Cattle: the TRICUSPID valve / right side. The most commonly isolated organism from vegetative endocarditis is Streptococcus; in dogs also consider Bartonella vinsonii — a dog with a new murmur and no flea/tick preventive.'],
          ['Pericardial effusion', 'Five signs: 1. Muffled heart sounds · 2. Electrical alternans — beat-to-beat variation in QRS amplitude as the heart swings in fluid · 3. Pulsus paradoxus — systolic blood pressure drops more than 10 mmHg on inspiration · 4. Enlarged, globoid heart on the DV/VD radiograph · 5. "Nutmeg" liver on necropsy from chronic passive congestion. Also jugular distension, ascites, weak pulses. Treatment: pericardiocentesis.']
        ]
      },

      {
        type: 'table', title: 'Arrhythmias',
        columns: ['Arrhythmia', 'Recognition', 'Treatment'],
        rows: [
          ['Atrial fibrillation — small animals', 'Irregularly irregular rhythm with variable heart sound intensity; no P waves; pulse deficits.', 'Four drugs: diltiazem (calcium channel blocker, decreases rate), atenolol (beta blocker, rate and rhythm), digoxin (rate control) and procainamide.'],
          ['Atrial fibrillation — cattle', 'The most common arrhythmia in cattle. Sign: pulsus alternans — two quick normal pulses followed by a dropped pulse.', 'Often resolves with correction of the underlying GI disease.'],
          ['Atrial fibrillation — horses', 'Quinidine or another class IA sodium channel blocker; add digoxin for rate control if quinidine produces an accelerated ventricular response.', 'Contrast: the most common pathologic arrhythmia in horses is 2nd degree AV block, though physiologic 2° AVB at rest is normal in horses.'],
          ['Atrial premature contractions', 'Diagnosed clinically by pulse deficits.', 'Treat the underlying disease.'],
          ['VPCs — when to treat', 'Four indications: 1. HR > 180 bpm · 2. Pulse deficits · 3. Clinical signs — syncope, weakness · 4. VPCs or ventricular tachycardia lasting > 20 seconds. Also R-on-T phenomenon and multiform complexes.', 'Lidocaine acutely; mexiletine or sotalol for long-term management.'],
          ['Ventricular fibrillation', 'Chaotic electrical AND mechanical activity during cardiac arrest.', 'Defibrillation.'],
          ['Ventricular asystole', 'NO electrical and no mechanical activity — a flat line.', 'Not shockable — CPR and epinephrine.']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'ECG in hyperkalemia — the progression',
        list: [
          '1. Tented (tall, spiked) T waves — the earliest change',
          '2. Prolonged P-R interval',
          '3. Loss of the P wave (atrial standstill)',
          '4. Widened QRS → sine wave → arrest',
          'Classic setting: blocked male cat, uroabdomen, or hypoadrenocorticism. Treat with calcium gluconate for cardioprotection, then insulin + dextrose or a beta agonist to shift potassium intracellularly.'
        ]
      },
      {
        type: 'table', title: 'Atrial enlargement on ECG',
        columns: ['Chamber', 'P wave change'],
        rows: [
          ['Right atrial enlargement (P pulmonale)', 'Tall and slender P waves — increased amplitude.'],
          ['Left atrial enlargement (P mitrale)', 'Increased P wave DURATION — a wide, often notched P.']
        ]
      },

      {
        type: 'table', title: 'Heart failure therapy',
        columns: ['Drug', 'Role'],
        rows: [
          ['Furosemide', 'Loop diuretic — the cornerstone of acute CHF management. In a cat in CHF, the first drug to give is IV or IM furosemide.'],
          ['Nitroprusside', 'Venodilator and arteriodilator for fulminant, refractory pulmonary edema. Requires blood pressure monitoring.'],
          ['Enalapril / benazepril', 'ACE inhibitors — block angiotensin II formation, stopping vasoconstriction and reducing aldosterone. Enalapril increases cardiac output by reducing afterload.'],
          ['Spironolactone', 'Aldosterone antagonist, potassium-sparing diuretic. Also a competitive antagonist at the ADH/aldosterone axis.'],
          ['Sodium-restricted diet', 'Adjunct to reduce volume retention.'],
          ['Diltiazem', 'Calcium channel blocker treating three things: atrial fibrillation, supraventricular tachycardia and HCM.'],
          ['Amlodipine', 'Calcium channel blocker for HYPERTENSION — first-line in cats, and therefore the drug that prevents hypertensive posterior uveitis and retinal detachment.'],
          ['Horse in CHF', 'Furosemide and benazepril.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Pimobendan',
        body: 'Pimobendan is a first-line drug for canine CHF from myxomatous mitral valve disease and DCM. It is an <b>inodilator</b> — a calcium sensitizer that increases contractility, plus a phosphodiesterase-3 inhibitor that vasodilates. It is also used pre-clinically in stage B2 mitral valve disease to delay the onset of heart failure.'
      },
      {
        type: 'rapidfire', title: 'Rapid-fire cardiology recall',
        items: [
          ['Continuous machinery murmur', 'PDA — most common congenital defect in dogs'],
          ['Holosystolic murmur on both sides', 'VSD — most common in cats and cattle'],
          ['Polycythemia + dark red mucous membranes + congenital murmur', 'Tetralogy of Fallot'],
          ['Muffled sounds + electrical alternans + globoid heart', 'Pericardial effusion → pericardiocentesis'],
          ['Tented T waves, no P waves', 'Hyperkalemia'],
          ['Irregularly irregular with pulse deficits', 'Atrial fibrillation'],
          ['Endocarditis valve', 'Aortic in small animals, tricuspid in cattle'],
          ['Cat in CHF', 'Furosemide first'],
          ['Hypertension in a cat', 'Amlodipine']
        ]
      },

      {
        type: 'table', title: 'Oxygenation & ventilation',
        columns: ['Concept', 'Detail'],
        rows: [
          ['Ventilation is defined by PaCO₂', 'Normal 35–45 mmHg · hyperventilating < 30 mmHg · hypoventilating > 45 mmHg. Ventilation is about CO₂, not oxygen — the single most useful acid–base fact.'],
          ['Cyanosis', 'Indicates PaO₂ less than 50 mmHg. It requires ≥ 5 g/dL of desaturated hemoglobin, which is why a severely anemic patient can be profoundly hypoxemic and never look cyanotic.'],
          ['Five causes of hypoxemia', '1. Hypoventilation · 2. Low FiO₂ · 3. V/Q mismatch · 4. Diffusion impairment · 5. Venous admixture / right-to-left shunt.'],
          ['Most common cause of cardiac arrest', 'Systemic hypoxemia. This is why airway and breathing come before everything else.']
        ]
      },
      {
        type: 'table', title: 'Pulse oximetry → arterial oxygen',
        columns: ['SpO₂', 'PaO₂', 'Interpretation'],
        rows: [
          ['98–100%', '> 100 mmHg', 'Normal on room air or supplemented.'],
          ['95%', '80 mmHg', 'Borderline — start paying attention.'],
          ['90%', '60 mmHg', 'The clinical cutoff. Below this you are on the steep part of the curve and desaturating fast. Supplement oxygen.'],
          ['50%', '30 mmHg', 'Critical.'],
          ['10%', '10 mmHg', 'Incompatible with life.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'The 90/60 rule',
        body: 'An SpO₂ of 90% corresponds to a PaO₂ of 60 mmHg — memorize this one pair and you can reconstruct the rest of the oxyhemoglobin dissociation curve. Below 90%, small further drops in saturation mean large drops in PaO₂.'
      },

      {
        type: 'table', title: 'Acid–base',
        columns: ['Disturbance', 'Causes & species notes'],
        rows: [
          ['Metabolic acidosis in cattle', 'Saliva loss — ruminant saliva is rich in bicarbonate, so losing it (esophageal obstruction, salivation) costs the animal its buffer. Also grain overload / rumen acidosis and diarrhea.'],
          ['Metabolic alkalosis in horses', 'Saliva loss in the horse causes alkalosis instead, because equine saliva is rich in chloride. Also the sweating horse, which loses large amounts of chloride and potassium.'],
          ['Respiratory acidosis', 'Hypoventilation with buildup of CO₂ — airway obstruction, pneumothorax, flail chest, pleural space disease, anesthetic depression.'],
          ['Normal HCO₃⁻', '22–24 mEq/L'],
          ['Base excess', 'The amount of base needed to return plasma pH to normal. A negative value (base deficit) means metabolic acidosis.'],
          ['Bicarbonate deficit', 'HCO₃⁻ needed (mEq) = 0.3–0.4 × body weight (kg) × base deficit. A 470 kg horse with a base excess of −13: 0.4 × 470 × 13 ≈ 2,440 mEq. In practice give roughly half and recheck. The 0.3 factor approximates ECF volume; 0.4 is used when a more complete correction is intended.']
        ]
      },

      {
        type: 'cloze', title: 'Critical care numbers to type from memory',
        items: [
          { q:'Cardiac output = stroke volume × ___.', a:'heart rate', accept:['hr','heart-rate'], why:'And stroke volume is set by preload, afterload and contractility.' },
          { q:'Oxygen delivery (DO₂) = cardiac output × ___.', a:'arterial oxygen content', accept:['arterial o2 content','oxygen content','cao2'], why:'Which is why anemia and hypoxemia both reduce delivery at a normal cardiac output.' },
          { q:'An SpO₂ of 95% corresponds to a PaO₂ of about ___ mmHg.', a:'80', why:'Borderline — start paying attention. 90% maps to 60 mmHg, the supplementation threshold.' },
          { q:'Hypoventilation is a PaCO₂ above ___ mmHg.', a:'45', why:'Hyperventilation is below 30. Normal is 35–45.' },
          { q:'Uroabdomen: abdominal fluid to serum potassium ratio of at least ___ : 1 in the dog.', a:'1.4', accept:['1.4:1'], why:'In the cat the cutoff is 1.9:1. Creatinine at 2:1 is the more reliable criterion in either species.' },
          { q:'Pulsus paradoxus: systolic pressure drops more than ___ mmHg on inspiration.', a:'10', why:'One of the five signs of pericardial effusion, alongside muffled sounds, electrical alternans, a globoid heart and a nutmeg liver.' },
          { q:'Treat VPCs when the heart rate exceeds ___ bpm.', a:'180', why:'Or with pulse deficits, clinical signs, or runs lasting more than 20 seconds.' },
          { q:'Treat VPCs when ventricular tachycardia lasts more than ___ seconds.', a:'20', why:'Lidocaine acutely; mexiletine or sotalol long term.' }
        ]
      },
      {
        type: 'table', title: 'Pleural space & pulmonary disease',
        columns: ['Condition', 'Key feature', 'Management'],
        rows: [
          ['Pneumothorax', 'NO lung sounds DORSALLY — free air rises to the highest point in the chest.', 'Thoracocentesis at the DORSAL aspect of the chest, where the air is. Fluid is tapped ventrally.'],
          ['Aspiration pneumonia', 'Alveolar pattern in the RIGHT CRANIAL and RIGHT MIDDLE lung lobes — gravity and bronchial anatomy direct aspirate there in a sternally recumbent animal.', 'Antibiotics, oxygen, nebulization and coupage. Look for the underlying cause: megaesophagus, laryngeal paralysis, anesthesia, seizures.'],
          ['Atelectasis', 'Incomplete expansion of lung from loss of air in the alveoli. Three common causes: prolonged recumbency, inhalation anesthesia and decreased surfactant.', 'Recruitment maneuvers, positional changes, PEEP.'],
          ['Neurogenic pulmonary edema', 'CAUDODORSAL distribution on radiographs — the opposite of the perihilar/caudodorsal cardiogenic pattern in dogs, and a useful discriminator. Four causes: head trauma, seizures, electrocution, upper airway obstruction including strangulation and choke.', 'Oxygen; treat the primary insult. Usually self-limiting over 24–72 hours.'],
          ['Lung lobe torsion', 'Typically the right middle lobe in deep-chested dogs, or any lobe following chronic effusion.', 'Lung lobectomy. During surgery isoflurane plus succinylcholine (a depolarizing neuromuscular blocker) keeps the patient completely still.']
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Oxygen in pneumothorax',
        body: 'Oxygen is supportive and not contraindicated — by creating a nitrogen gradient it actually speeds reabsorption of pleural air. But oxygen alone is not sufficient treatment: you must remove the air. Do both.'
      },

      {
        type: 'table', title: 'Trauma & emergency',
        columns: ['Topic', 'Detail'],
        rows: [
          ['Smoke inhalation — four effects', '1. Carbon monoxide production → displaces oxygen from hemoglobin, and pulse oximetry reads falsely normal. 2. Carbon dioxide production → severe acidosis. 3. Laryngeal edema → upper airway obstruction, which may be delayed hours. 4. Inhibition of pulmonary macrophage function → secondary bacterial pneumonia days later.'],
          ['Burn classification', '1st degree — epidermis only. 2nd degree — epidermis and deep dermis, partial thickness. 3rd degree — epidermis, dermis and adnexal structures, full thickness with no regenerative source left. 4th degree — total destruction of skin, fat, fascia, muscle and bone.'],
          ['Septic peritonitis — the diagnostic rule', 'Blood glucose more than 20 mg/dL HIGHER than the abdominal fluid glucose confirms septic peritonitis, because bacteria consume glucose in the effusion. Seeing intracellular bacteria in effusion neutrophils is also definitive.'],
          ['Uroabdomen — the diagnostic ratios', 'Abdominal fluid : serum CREATININE ≥ 2:1. Abdominal fluid : serum POTASSIUM ≥ 1.4:1 in dogs, 1.9:1 in cats. Creatinine is the more reliable of the two because it is a larger molecule and equilibrates across the peritoneum more slowly.'],
          ['Cushing reflex', 'Bradycardia and hypertension in response to increased intracranial pressure. Do NOT lower the blood pressure — the hypertension is compensatory, maintaining cerebral perfusion against the rising ICP. Treat the ICP instead: mannitol, hypertonic saline, elevate the head 30°.'],
          ['Lactate', 'A reflection of ANAEROBIC metabolism — produced from pyruvate to regenerate NAD⁺ and keep glycolysis running. Normal < 2.5 mmol/L. Serial lactate (clearance) is a better prognostic tool than any single value.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire critical care recall',
        items: [
          ['No lung sounds dorsally', 'Pneumothorax → tap dorsally'],
          ['Alveolar pattern right cranial / right middle', 'Aspiration pneumonia'],
          ['Caudodorsal edema after a seizure or choke', 'Neurogenic pulmonary edema'],
          ['Bradycardia + hypertension in a head-trauma patient', 'Cushing reflex — do not treat the blood pressure'],
          ['Abdominal fluid creatinine twice serum', 'Uroabdomen'],
          ['Abdominal fluid glucose 20 mg/dL below blood', 'Septic peritonitis'],
          ['PaCO₂ > 45 · PaCO₂ < 30', 'Hypoventilation · hyperventilation'],
          ['Normal lactate', '< 2.5 mmol/L']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
