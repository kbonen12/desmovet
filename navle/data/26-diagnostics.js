/* NAVLE Hub — Diagnostic Test Statistics
 *
 * SOURCING NOTE. Unlike the species chapters, this one is not transcribed from
 * the study guides in docs/ — none of them cover test statistics, and the topic
 * sits inside Data Gathering & Interpretation, the largest competency block on
 * the exam. The definitions and formulas here are standard diagnostic
 * epidemiology; every worked number is computed in the text so it can be checked
 * by hand. The veterinary examples are drawn from tests already described in
 * this hub's own chapters (Coggins, the caudal fold test, FeLV antigen testing,
 * the C6 peptide, fecal flotation, skin scrapes).
 */
(function (N) {
  N.push({
    id: 'diagnostics',
    group: 'Start here',
    title: 'Diagnostic Test Statistics',
    tagline: 'Sensitivity, specificity, and the reason a positive test often means very little.',
    weightNote: 'Data Gathering & Interpretation is the largest competency block',
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'Read the 2 × 2 by direction',
        list: [
          'Everything on this page is one grid read two ways.',
          '<b>Down the columns</b> — you already know the truth, and you are asking how the test performed. That gives <b>sensitivity</b> and <b>specificity</b>. These are properties of the test.',
          '<b>Across the rows</b> — you have a test result in hand and are asking what it means for this patient. That gives <b>PPV</b> and <b>NPV</b>. These depend on prevalence, which is why they change from herd to herd.',
          'Almost every wrong answer on these items comes from reading the grid in the wrong direction.'
        ]
      },
      {
        type: 'matrix2x2', title: 'The 2 × 2 table',
        colTitle: 'Disease',
        cols: ['Sick', 'Healthy'],
        rowTitle: 'Test result',
        rows: ['Positive', 'Negative'],
        cells: [
          { key:'TP', label:'True positive', ok:true,  expr:'diseased × Sn',
            tip:'Diseased animals the test correctly calls positive. = diseased × sensitivity.' },
          { key:'FP', label:'False positive', ok:false, expr:'healthy × (1 − Sp)',
            tip:'Healthy animals the test wrongly calls positive. = healthy × (1 − specificity).' },
          { key:'FN', label:'False negative', ok:false, expr:'diseased × (1 − Sn)',
            tip:'Diseased animals the test misses. = diseased × (1 − sensitivity).' },
          { key:'TN', label:'True negative', ok:true,  expr:'healthy × Sp',
            tip:'Healthy animals the test correctly clears. = healthy × specificity.' }
        ],
        rowMargins: [
          { name:'PPV', formula:'TP / (TP + FP)',
            buildName:'Test + total', buildFormula:'TP + FP' },
          { name:'NPV', formula:'TN / (TN + FN)',
            buildName:'Test − total', buildFormula:'TN + FN' }
        ],
        colMargins: [
          { name:'Sensitivity', formula:'TP / (TP + FN)',
            buildName:'Diseased', buildFormula:'N × prevalence' },
          { name:'Specificity', formula:'TN / (TN + FP)',
            buildName:'Healthy', buildFormula:'N × (1 − prevalence)' }
        ],
        note: 'Sensitivity and specificity are computed down the disease columns; PPV and NPV across the test-result rows. Switch to Formula to see the grid built the other way — from prevalence, sensitivity and specificity.'
      },
      {
        type: 'callout', variant: 'pearl', title: 'Every cell in one step — use the complement',
        list: [
          'Split the population once, and each cell is then a single multiplication. You never have to compute a cell and subtract to get its neighbour:',
          '<b>Diseased</b> = N × prevalence  ·  <b>Healthy</b> = N × (1 − prevalence)',
          '<b>TP</b> = diseased × Sn  ·  <b>FN</b> = diseased × (1 − Sn)',
          '<b>TN</b> = healthy × Sp  ·  <b>FP</b> = healthy × (1 − Sp)',
          'The whole trick is that <b>the two error cells are the complements</b>. Sensitivity is the fraction of diseased animals the test catches, so (1 − Sn) is the fraction it misses — that is the false negatives, directly. Specificity is the fraction of healthy animals it clears, so (1 − Sp) is the fraction it wrongly flags — the false positives, directly.',
          'A test that is 90% sensitive misses 10% of the diseased column. A test that is 92% specific wrongly flags 8% of the healthy column. Go straight there.',
          'Switch the table above to <b>Formula</b> to see this laid out in the grid.'
        ]
      },
      {
        type: 'table', title: 'The four measures',
        wide: true,
        columns: ['Measure', 'Formula', 'The question it answers', 'What moves it'],
        rows: [
          ['Sensitivity\nthe true positive rate', 'TP / (TP + FN)', 'Of the animals that truly have the disease, what fraction does the test catch?', 'A property of the test. Independent of prevalence. A sensitive test has few FALSE NEGATIVES.'],
          ['Specificity\nthe true negative rate', 'TN / (TN + FP)', 'Of the animals that are truly healthy, what fraction does the test correctly clear?', 'A property of the test. Independent of prevalence. A specific test has few FALSE POSITIVES.'],
          ['Positive predictive value (PPV)', 'TP / (TP + FP)', 'This animal tested positive — what is the chance it actually has the disease?', 'Depends heavily on PREVALENCE. Falls as the disease becomes rarer, even with the test unchanged.'],
          ['Negative predictive value (NPV)', 'TN / (TN + FN)', 'This animal tested negative — what is the chance it is actually free of disease?', 'Also depends on prevalence, in the opposite direction: NPV rises as the disease becomes rarer.'],
          ['Accuracy', '(TP + TN) / total', 'What fraction of all results were correct?', 'Misleading on its own for a rare disease — a test that calls everything negative is 99.9% accurate for a 0.1% disease and useless.'],
          ['Prevalence', '(TP + FN) / total', 'What fraction of the population truly has the disease?', 'The column totals. It is the hinge on which PPV and NPV turn.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'SnNout and SpPin — the two mnemonics that answer most items',
        list: [
          '<b>SnNout</b> — a highly <b>Sn</b>sitive test, when <b>N</b>egative, rules the disease <b>out</b>. It has few false negatives, so a negative result is trustworthy.',
          '<b>SpPin</b> — a highly <b>Sp</b>ecific test, when <b>P</b>ositive, rules the disease <b>in</b>. It has few false positives, so a positive result is trustworthy.',
          'The corollary is what gets tested: a sensitive test that comes back <i>positive</i> tells you relatively little, and a specific test that comes back <i>negative</i> tells you relatively little.',
          'This is why you <b>screen with a sensitive test and confirm with a specific one</b>.'
        ]
      },
      {
        type: 'table', title: 'A worked 2 × 2 — check the arithmetic by hand',
        note: '100 dogs tested; 40 of them truly have the disease. TP 36 · FN 4 · FP 6 · TN 54.',
        columns: ['Measure', 'Working', 'Result'],
        rows: [
          ['Prevalence', '(36 + 4) / 100 = 40 / 100', '40%'],
          ['Sensitivity', '36 / (36 + 4) = 36 / 40', '90%'],
          ['Specificity', '54 / (54 + 6) = 54 / 60', '90%'],
          ['PPV', '36 / (36 + 6) = 36 / 42', '85.7%'],
          ['NPV', '54 / (54 + 4) = 54 / 58', '93.1%'],
          ['Accuracy', '(36 + 54) / 100 = 90 / 100', '90%'],
          ['Positive likelihood ratio (LR+)', 'Sn / (1 − Sp) = 0.90 / 0.10', '9 — a positive result makes disease 9× more likely'],
          ['Negative likelihood ratio (LR−)', '(1 − Sn) / Sp = 0.10 / 0.90', '0.11 — a negative result makes disease about 9× less likely']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'The prevalence trap — the single highest-yield item here',
        list: [
          'Take one unchanged test: <b>sensitivity 95%, specificity 95%</b>. Only the prevalence changes.',
          '<b>Prevalence 10%</b>, 1,000 animals → 100 diseased, 900 healthy. TP 95 · FN 5 · FP 45 · TN 855. <b>PPV = 95 / 140 = 68%</b>.',
          '<b>Prevalence 0.1%</b>, 100,000 animals → 100 diseased, 99,900 healthy. TP 95 · FN 5 · FP 4,995 · TN 94,905. <b>PPV = 95 / 5,090 = 1.9%</b>.',
          'Same test. A positive result went from meaning <i>probably diseased</i> to meaning <i>almost certainly a false positive</i>, purely because the disease got rarer.',
          'This is why mass screening of a low-prevalence population generates mostly false positives, and why a positive screening test in a healthy, low-risk animal must be confirmed before you act on it.',
          'NPV moves the other way — it rose from 99.4% to 99.995%. A negative test in a low-prevalence population is very reassuring.'
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Why "accuracy" is not worth much',
        list: [
          'Accuracy is only a prevalence-weighted blend of the other two: <b>accuracy = prevalence × sensitivity + (1 − prevalence) × specificity</b>.',
          'Rearranged, <b>accuracy − specificity = prevalence × (sensitivity − specificity)</b>. The rarer the disease, the closer accuracy sits to specificity — at 5% prevalence with a 10-point gap between Sn and Sp, accuracy lands half a point away from specificity.',
          'So for any uncommon disease, accuracy is very nearly just a restatement of how the test performs on healthy animals. It barely registers whether the test finds cases at all — which is how a test that calls everything negative scores 99.9% on a 0.1% disease.',
          'It is <b>not</b> the same quantity as specificity and answers a different question — specificity looks only at the healthy animals, accuracy at everyone — but the two converge numerically whenever almost everyone is healthy.',
          'Know the term, and know why it is a weak summary. The calculation drills deliberately do not ask for it.'
        ]
      },
      {
        type: 'table', title: 'Choosing and sequencing tests',
        columns: ['Situation', 'What you want', 'Why'],
        rows: [
          ['Screening a population, or ruling out a serious disease', 'HIGH SENSITIVITY', 'A missed case is the expensive error. You accept false positives and sort them out later.'],
          ['Confirming a positive screen before acting', 'HIGH SPECIFICITY', 'A false positive now costs the owner an animal, a quarantine, or a euthanasia decision.'],
          ['Testing before an irreversible action — culling, euthanasia, regulatory action', 'HIGH SPECIFICITY', 'The consequence of being wrong is not recoverable.'],
          ['Parallel testing — run two tests, call it positive if EITHER is positive', 'Raises sensitivity, lowers specificity', 'Fewer missed cases, more false positives. Use when missing a case is unacceptable.'],
          ['Serial testing — run a second test only on positives, call it positive if BOTH are positive', 'Raises specificity, lowers sensitivity', 'This is the screen-then-confirm pattern. Fewer false positives, at the cost of missing a few cases.'],
          ['Moving the cutoff on a continuous test down', 'Sensitivity rises, specificity falls', 'More results cross the threshold, so you catch more disease and more healthy animals.'],
          ['Moving the cutoff up', 'Specificity rises, sensitivity falls', 'The two always trade against each other for a given test. An ROC curve plots that trade-off — sensitivity against 1 − specificity — and the area under it measures how well the test discriminates overall.']
        ]
      },
      {
        type: 'table', title: 'Veterinary examples from elsewhere in this hub',
        wide: true,
        columns: ['Test', 'Where it appears', 'The statistical point'],
        rows: [
          ['Caudal fold tuberculin test → comparative cervical test', 'Bovine', 'The textbook screen-then-confirm pair. The caudal fold test is the sensitive herd screen read at 72 hours; the comparative cervical test is the more specific follow-up that separates M. bovis from M. avium sensitization. Running the specific test only on caudal-fold positives is serial testing.'],
          ['Coggins (AGID) for equine infectious anemia ⚑R', 'Equine', 'A regulatory test attached to lifetime quarantine or euthanasia — exactly the setting that demands high specificity, because a false positive is unrecoverable for that horse.'],
          ['FeLV ELISA for circulating antigen', 'Feline-Specific Medicine', 'Tests antigen, not antibody, so a positive kitten may still clear the infection. A single positive in a low-prevalence, low-risk cat is the prevalence trap in miniature — confirm before acting on it.'],
          ['Lyme C6 peptide antibody', 'Vector-Borne Disease & Mycoses', 'Specificity used deliberately: the C6 antibody appears with natural exposure but not with vaccination, so the test answers a question a general Borrelia serology cannot.'],
          ['Fecal flotation for Trichuris vulpis', 'Small Animal Parasitology', 'Low sensitivity by biology — whipworm eggs are shed intermittently, so a negative fecal does not rule out infection. The correct response to a negative test with a compatible picture is to treat empirically, not to exclude the diagnosis.'],
          ['Superficial skin scrape for Sarcoptes', 'GI, Urinary, Endocrine & Oncology', 'The same failure mode: few mites are usually present, so a negative scrape does not rule out sarcoptic mange. A positive scrape, though, is essentially conclusive — a low-sensitivity, high-specificity test.'],
          ['ACTH stimulation test in whipworm pseudo-Addison\'s', 'GI, Urinary, Endocrine & Oncology', 'A true negative that looks like a false negative. The hyponatremia and hyperkalemia are real, but they are not adrenal — the test is right and the clinician\'s prior was wrong.']
        ]
      },
      {
        type: 'table', title: 'Vocabulary that shows up as distractors',
        columns: ['Term', 'Meaning'],
        rows: [
          ['Gold standard', 'The reference test that defines truth for the purposes of the 2 × 2 — often necropsy, histopathology or culture. Sensitivity and specificity are always measured against something, and a flawed gold standard makes both numbers wrong.'],
          ['Accuracy vs. precision', 'Accuracy is closeness to the true value. Precision is repeatability — how tightly repeated measurements cluster, regardless of whether they cluster around the right answer. A consistently miscalibrated analyzer is precise and inaccurate.'],
          ['Apparent vs. true prevalence', 'Apparent prevalence is the proportion that tests positive. True prevalence is the proportion that actually has the disease. They differ whenever the test is imperfect, and apparent prevalence overstates true prevalence when the disease is rare.'],
          ['Kappa (κ)', 'Agreement between two tests or two observers, corrected for the agreement expected by chance alone. Raw percent agreement flatters a rare-outcome comparison; kappa does not.'],
          ['Incidence vs. prevalence', 'Incidence counts NEW cases arising over a period. Prevalence counts ALL existing cases at a point in time. A long-lasting disease has a high prevalence relative to its incidence.'],
          ['Sensitivity vs. analytical sensitivity', 'Diagnostic sensitivity is the fraction of diseased animals detected. Analytical sensitivity is the smallest quantity of analyte the assay can detect — the limit of detection. Exam items sometimes swap them.']
        ]
      },
      {
        /* Each scenario generates one calculation question per measure, and the
         * expected answers are computed from these four counts at runtime —
         * so the arithmetic in Practice can never drift from the table. */
        type: 'calcset', title: 'Calculation drills',
        note: 'Eight populations. In Practice these become solve-for-the-value questions with an interactive 2 × 2. A measure is only asked when its answer is unambiguously separated from every other measure in that scenario.',
        scenarios: [
          { id:'feedlot',  tp:45, fp:30, fn:5,  tn:420, askPrev:true,
            stem:'A feedlot screens 500 incoming calves for a viral disease against a gold-standard PCR. The screening test returns 45 true positives, 30 false positives, 5 false negatives and 420 true negatives.' },
          { id:'cattery',  tp:12, fp:28, fn:3,  tn:157,
            stem:'A cattery of 200 cats is screened for retroviral infection. Compared with the reference assay the in-house test gives 12 true positives, 28 false positives, 3 false negatives and 157 true negatives.' },
          { id:'eia',      tp:8,  fp:4,  fn:2,  tn:386,
            stem:'A regulatory program tests 400 horses on a breeding farm. Against the reference standard the test yields 8 true positives, 4 false positives, 2 false negatives and 386 true negatives.' },
          { id:'shelter',  tp:27, fp:9,  fn:3,  tn:261,
            stem:'A shelter runs an in-house antigen test on 300 intake dogs. Confirmatory testing shows 27 true positives, 9 false positives, 3 false negatives and 261 true negatives.' },
          { id:'johnes',   tp:21, fp:39, fn:9,  tn:531,
            stem:'A dairy of 600 cows is screened for a chronic wasting disease and every animal is later confirmed by culture. The screening ELISA gives 21 true positives, 39 false positives, 9 false negatives and 531 true negatives.' },
          { id:'inclinic', tp:45, fp:20, fn:15, tn:120,
            stem:'A referral clinic evaluates a point-of-care test on 200 patients worked up completely. It returns 45 true positives, 20 false positives, 15 false negatives and 120 true negatives.' },
          { id:'referral', tp:70, fp:10, fn:45, tn:115,
            stem:'A referral hospital evaluates a cytology-based test on 240 symptomatic patients, all of whom go on to definitive histopathology. The test gives 70 true positives, 10 false positives, 45 false negatives and 115 true negatives.' },
          { id:'workup',  tp:54, fp:42, fn:30, tn:174, askPrev:true,
            stem:'A teaching hospital audits 300 dogs presented for a specific complaint and worked up to a definitive diagnosis. The screening test recorded 54 true positives, 42 false positives, 30 false negatives and 174 true negatives.' }
        ]
      },
      {
        /* The reverse direction: given Sn, Sp, prevalence and a population size,
         * reconstruct the four cells. Every scenario is chosen so all six counts
         * are exact integers. */
        type: 'backcalcset', title: 'Back-calculation drills',
        note: 'The exam usually hands you sensitivity, specificity and prevalence and asks for a cell count. Work down the columns: population → diseased and healthy → apply sensitivity to the diseased column and specificity to the healthy one.',
        scenarios: [
          { id:'bc-herd',    n:500,  prev:10, sn:90, sp:92, askDiseased:true,
            label:'A herd of 500 cattle with a true prevalence of 10% is screened with a test that is 90% sensitive and 92% specific.' },
          { id:'bc-shelter', n:1000, prev:5,  sn:80, sp:90,
            label:'A shelter tests 1,000 incoming dogs for a disease with a 5% prevalence, using a test that is 80% sensitive and 90% specific.' },
          { id:'bc-clinic',  n:200,  prev:25, sn:94, sp:80,
            label:'A clinic screens 200 symptomatic cats for a condition with a 25% prevalence in that population, with a test that is 94% sensitive and 80% specific.' },
          { id:'bc-dairy',   n:800,  prev:15, sn:85, sp:95, askDiseased:true,
            label:'A dairy of 800 cows has a 15% prevalence of a chronic disease. The available test is 85% sensitive and 95% specific.' },
          { id:'bc-stable',  n:400,  prev:20, sn:75, sp:85,
            label:'A stable of 400 horses has a 20% prevalence of a parasitic infection. The fecal test used is 75% sensitive and 85% specific.' },
          { id:'bc-mass',    n:2000, prev:2,  sn:95, sp:90,
            label:'A mass screening program tests 2,000 animals for a disease with a true prevalence of 2%, using a test that is 95% sensitive and 90% specific.' }
        ]
      },
      {
        type: 'cloze', title: 'Formulas to type from memory',
        note: 'These double as the typed-answer drill in Practice.',
        items: [
          { q: 'False negatives = diseased × (1 − ___).', a:'sensitivity', accept:['sn'], why:'The complement shortcut. Sensitivity is the fraction of diseased animals caught, so 1 − Sn is the fraction missed — go straight to FN without computing TP and subtracting.' },
          { q: 'False positives = healthy × (1 − ___).', a:'specificity', accept:['sp'], why:'Specificity is the fraction of healthy animals cleared, so 1 − Sp is the fraction wrongly flagged.' },
          { q: 'True positives = diseased × ___.', a:'sensitivity', accept:['sn'], why:'And the diseased column itself is N × prevalence.' },
          { q: 'True negatives = healthy × ___.', a:'specificity', accept:['sp'], why:'And the healthy column is N × (1 − prevalence).' },
          { q: 'The number of diseased animals = total × ___.', a:'prevalence', accept:['p'], why:'Always the first step in a back-calculation — split the population into the two disease columns before applying anything to either one.' },
          { q: 'Sensitivity = TP / (TP + ___).', a:'FN', accept:['false negative','false negatives'], why:'Read down the diseased column. A sensitive test has few false negatives, so a negative result rules disease out — SnNout.' },
          { q: 'Specificity = TN / (TN + ___).', a:'FP', accept:['false positive','false positives'], why:'Read down the healthy column. A specific test has few false positives, so a positive result rules disease in — SpPin.' },
          { q: 'PPV = TP / (TP + ___).', a:'FP', accept:['false positive','false positives'], why:'Read across the test-positive row. Unlike sensitivity, PPV depends on prevalence.' },
          { q: 'NPV = TN / (TN + ___).', a:'FN', accept:['false negative','false negatives'], why:'Read across the test-negative row.' },
          { q: 'A highly sensitive test, when NEGATIVE, rules the disease ___.', a:'out', accept:['sn n out','snnout'], why:'SnNout. Few false negatives means a negative result can be trusted.' },
          { q: 'A highly specific test, when POSITIVE, rules the disease ___.', a:'in', accept:['sppin'], why:'SpPin. Few false positives means a positive result can be trusted.' },
          { q: 'Which two measures change with prevalence? ___', a:'PPV and NPV', accept:['ppv npv','predictive values','positive and negative predictive value'], why:'Sensitivity and specificity are properties of the test itself and do not move with prevalence.' },
          { q: 'As prevalence falls, PPV ___.', a:'falls', accept:['decreases','goes down','drops'], why:'And NPV rises. A positive result in a rare disease is mostly a false positive.' },
          { q: 'Screen with a test that has high ___.', a:'sensitivity', why:'Then confirm with a specific test. Missing a case is the expensive error at the screening stage.' },
          { q: 'Confirm a positive screen with a test that has high ___.', a:'specificity', why:'A false positive at the confirmatory stage costs the owner an animal or a quarantine.' },
          { q: 'Positive likelihood ratio = Sn / (1 − ___).', a:'Sp', accept:['specificity'], why:'LR+ above 10 is a strongly informative positive result.' },
          { q: 'Negative likelihood ratio = (1 − Sn) / ___.', a:'Sp', accept:['specificity'], why:'LR− below 0.1 is a strongly informative negative result.' },
          { q: 'Accuracy = (TP + ___) / total.', a:'TN', accept:['true negative','true negatives'], why:'Accuracy alone is misleading for a rare disease: calling everything negative scores 99.9% on a 0.1% disease.' },
          { q: 'Accuracy = prevalence × sensitivity + (1 − prevalence) × ___.', a:'specificity', accept:['sp'], why:'Which is why accuracy collapses onto specificity when disease is rare — accuracy − specificity = prevalence × (Sn − Sp).' },
          { q: 'Running a second test only on the positives, and calling it positive only if both agree, is ___ testing.', a:'serial', why:'Serial testing raises specificity and lowers sensitivity — the screen-then-confirm pattern. Parallel testing does the opposite.' },
          { q: 'Testing two ways at once and calling it positive if either is positive is ___ testing.', a:'parallel', why:'Parallel testing raises sensitivity and lowers specificity — use it when missing a case is unacceptable.' },
          { q: 'Lowering the cutoff on a continuous test raises ___ and lowers the other measure.', a:'sensitivity', why:'More results cross the threshold, catching more disease and more healthy animals. The ROC curve plots this trade-off.' },
          { q: 'Repeatability of a measurement, independent of whether it is correct, is called ___.', a:'precision', why:'Accuracy is closeness to the true value. A consistently miscalibrated analyzer is precise and inaccurate.' },
          { q: 'Agreement between two tests corrected for chance is measured by ___.', a:'kappa', accept:['cohen kappa','k'], why:'Raw percent agreement flatters a comparison when the outcome is rare.' },
          { q: 'New cases arising over a period is ___; all existing cases at a point in time is prevalence.', a:'incidence', why:'A long-lasting disease has a high prevalence relative to its incidence.' }
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire test statistics recall',
        items: [
          ['TP / (TP + FN)', 'Sensitivity — read down the diseased column'],
          ['TN / (TN + FP)', 'Specificity — read down the healthy column'],
          ['TP / (TP + FP)', 'PPV — read across the positive row'],
          ['TN / (TN + FN)', 'NPV — read across the negative row'],
          ['Negative result on a highly sensitive test', 'Rules the disease OUT — SnNout'],
          ['Positive result on a highly specific test', 'Rules the disease IN — SpPin'],
          ['Which measures depend on prevalence', 'PPV and NPV, never sensitivity or specificity'],
          ['Fastest route to the false negatives', 'diseased × (1 − Sn) — the complement, no subtraction'],
          ['Fastest route to the false positives', 'healthy × (1 − Sp)'],
          ['First step in any back-calculation', 'Split the population: diseased = N × prevalence'],
          ['Accuracy in a low-prevalence population', 'Sits almost on top of specificity — accuracy = p·Sn + (1−p)·Sp'],
          ['Positive screening test in a very low-prevalence population', 'Most positives are false — confirm before acting'],
          ['Screening test should maximize', 'Sensitivity'],
          ['Confirmatory test should maximize', 'Specificity'],
          ['Test both ways, positive if either is positive', 'Parallel testing — sensitivity up, specificity down'],
          ['Confirm only the positives, positive if both agree', 'Serial testing — specificity up, sensitivity down'],
          ['Lower the cutoff on a continuous test', 'Sensitivity up, specificity down'],
          ['Plot of sensitivity against 1 − specificity', 'ROC curve'],
          ['Precise but wrong', 'Repeatable and inaccurate — a miscalibrated analyzer'],
          ['The test that defines truth in the 2 × 2', 'The gold standard'],
          ['Agreement corrected for chance', 'Kappa'],
          ['Negative fecal in a dog with compatible signs', 'Whipworm eggs shed intermittently — low sensitivity, treat empirically'],
          ['Negative superficial skin scrape in an itchy dog', 'Sarcoptes — few mites present, so a negative does not rule out']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
