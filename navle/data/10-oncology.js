/* NAVLE Hub — Veterinary Oncology Drugs
 * Source: NAVLE_Oncology_Drugs_Cheat_Sheet.pdf
 */
(function (N) {
  N.push({
    id: 'oncology',
    group: 'Cross-cutting',
    title: 'Oncology Drugs',
    tagline: 'Drug → class & mechanism → what it treats → what it does to the patient → species traps.',
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'The six facts that show up most',
        list: [
          'Cyclophosphamide → sterile hemorrhagic cystitis (acrolein). Prevent with AM dosing + water ± furosemide; treat with mesna.',
          'Doxorubicin → dilated cardiomyopathy in DOGS (cumulative, dose-dependent) but nephrotoxicity in CATS. Severe vesicant.',
          'Cisplatin is lethal in cats — fatal pulmonary edema. Use carboplatin instead. Cisplatin in dogs = nephrotoxic, needs saline diuresis.',
          '5-FU is lethal in cats — seizures and death, including from licking topical cream off an owner.',
          'Vincristine → peripheral neuropathy + ileus; vinblastine → myelosuppression. Vincristine is the drug of choice for TVT.',
          'Lomustine → hepatotoxicity + delayed cumulative thrombocytopenia; crosses the BBB.'
        ]
      },
      {
        type: 'table', title: 'Alkylating agents', wide: true,
        columns: ['Drug', 'Class / MOA', 'Main uses', 'Key toxicities', 'Species / high-yield'],
        rows: [
          ['Cyclophosphamide', 'Alkylating agent (nitrogen mustard) — cross-links DNA; cell-cycle nonspecific', 'Lymphoma (the C in CHOP); sarcomas, carcinomas; immune-mediated disease (IMHA, ITP)', 'Sterile hemorrhagic cystitis from the acrolein metabolite; myelosuppression (nadir ~7–10 d); alopecia (poodles, OES, terriers); GI upset', 'Cystitis is the classic board answer. Prevent: dose in AM, free water, ± furosemide. Treat/prevent with mesna. Do not re-challenge after cystitis.'],
          ['Chlorambucil', 'Alkylating agent — slowest, gentlest of the class; oral', 'Feline small-cell (low-grade) GI lymphoma; chronic lymphocytic leukemia; IBD; immune-mediated disease', 'Gradual, cumulative myelosuppression (thrombocytopenia); GI upset; rare reversible myoclonus/neurotoxicity in cats at high dose', 'Workhorse oral drug in cats. Well tolerated; monitor CBC q2–4 wk.'],
          ['Lomustine (CCNU)', 'Nitrosourea alkylator — lipid soluble, crosses the blood–brain barrier; oral', 'Mast cell tumor; rescue lymphoma; CNS lymphoma; cutaneous epitheliotropic (T-cell) lymphoma; histiocytic sarcoma', 'Hepatotoxicity in dogs (cumulative, can be fatal — monitor ALT); neutropenia nadir ~7 d; delayed cumulative thrombocytopenia; pulmonary fibrosis in cats', 'Two-toxicity drug: liver + delayed marrow. Give SAMe/silybin and check ALT before every dose.'],
          ['Melphalan', 'Alkylating agent (phenylalanine mustard); oral', 'Multiple myeloma (with prednisone) — the standard answer', 'Myelosuppression, especially thrombocytopenia; cumulative', 'Myeloma = melphalan + prednisone. Monitor CBC.'],
          ['Ifosfamide', 'Alkylating agent, cyclophosphamide analog', 'Soft tissue sarcoma; rescue protocols', 'Severe hemorrhagic cystitis and nephrotoxicity — mandatory mesna + saline diuresis; myelosuppression', 'Never give without mesna and diuresis.'],
          ['Dacarbazine (DTIC)', 'Alkylating/antimetabolite hybrid', 'Rescue lymphoma (e.g., with doxorubicin); sarcomas', 'Severe vomiting; myelosuppression; vesicant — perivascular necrosis', 'Notorious emetic — pre-treat with maropitant.']
        ]
      },
      {
        type: 'table', title: 'Antitumor antibiotics', wide: true,
        columns: ['Drug', 'Class / MOA', 'Main uses', 'Key toxicities', 'Species / high-yield'],
        rows: [
          ['Doxorubicin', 'Anthracycline antitumor antibiotic — topoisomerase II inhibitor + free-radical DNA damage', 'Lymphoma (the H in CHOP); hemangiosarcoma; osteosarcoma; carcinomas; single-agent rescue', 'Dogs: cumulative, dose-dependent dilated cardiomyopathy (cap ~180–240 mg/m² cumulative); severe vesicant; acute anaphylactoid histamine release during infusion; myelosuppression nadir 7–10 d; hemorrhagic colitis 3–5 d; red-orange urine', 'Cats get nephrotoxicity, not cardiotoxicity. Screen dogs with echo; avoid in pre-existing DCM / Dobermans / Boxers. Dexrazoxane = cardioprotectant + extravasation antidote. Slow infusion + antihistamine.'],
          ['Mitoxantrone', 'Anthracenedione — topo II inhibitor; less cardiotoxic than doxorubicin', 'Transitional cell carcinoma (with piroxicam); lymphoma rescue; SCC in cats', 'Myelosuppression (dose-limiting); GI upset; blue-green urine/sclera', 'Substitute when doxorubicin cardiotoxicity is a concern.'],
          ['Actinomycin D (dactinomycin)', 'Antitumor antibiotic — intercalates DNA', 'Doxorubicin substitute in lymphoma protocols', 'Myelosuppression; GI; vesicant', 'Used when the doxorubicin cumulative cardiac dose is reached.']
        ]
      },
      {
        type: 'table', title: 'Antimetabolites', wide: true,
        columns: ['Drug', 'Class / MOA', 'Main uses', 'Key toxicities', 'Species / high-yield'],
        rows: [
          ['Cytarabine (Ara-C)', 'Pyrimidine antimetabolite — S-phase specific; crosses the BBB', 'CNS lymphoma; acute leukemias; also immunosuppressant for MUE/GME', 'Myelosuppression; GI upset', 'The "gets into the CNS" antimetabolite.'],
          ['Methotrexate', 'Folate antagonist — inhibits dihydrofolate reductase', 'Older lymphoma protocols (e.g., COAP / L-MOPP era)', 'GI ulceration/mucositis; myelosuppression; hepatotoxicity', 'Rescue = leucovorin (folinic acid). Renal excretion — avoid with NSAIDs.'],
          ['5-Fluorouracil (5-FU)', 'Pyrimidine antimetabolite', 'Dogs: carcinomas; topical for cutaneous tumors', 'Fatal neurotoxicity — seizures, cerebellar signs; GI; myelosuppression', 'ABSOLUTELY CONTRAINDICATED IN CATS. Also a common toxicosis question: cat licks owner\'s topical 5-FU cream → seizures → death.'],
          ['Gemcitabine', 'Pyrimidine antimetabolite; radiosensitizer', 'Carcinomas; combined with radiation or carboplatin', 'Myelosuppression; GI', 'Think "radiation sensitizer."']
        ]
      },
      {
        type: 'table', title: 'Mitotic spindle inhibitors (vinca alkaloids & taxanes)', wide: true,
        columns: ['Drug', 'Class / MOA', 'Main uses', 'Key toxicities', 'Species / high-yield'],
        rows: [
          ['Vincristine', 'Vinca alkaloid — binds tubulin, blocks mitotic spindle (M-phase)', 'Lymphoma (the O / Oncovin in CHOP); transmissible venereal tumor (TVT) — drug of choice; ITP (raises platelet count)', 'Peripheral neuropathy; ileus/constipation; severe vesicant; relatively mild myelosuppression', 'Neurotoxic > myelosuppressive. TVT and ITP are the two signature non-lymphoma uses.'],
          ['Vinblastine', 'Vinca alkaloid — same MOA as vincristine', 'Mast cell tumor (with prednisone ± lomustine)', 'Myelosuppression is dose-limiting (nadir ~7 d); vesicant; less neurotoxic than vincristine', 'Flip of vincristine: more marrow, less nerve.'],
          ['Paclitaxel / docetaxel', 'Taxane — stabilizes microtubules, blocks mitosis', 'Carcinomas, mast cell tumor (limited use)', 'Hypersensitivity to the vehicle (Cremophor) in dogs; myelosuppression', 'Pre-medicate for hypersensitivity.']
        ]
      },
      {
        type: 'table', title: 'Platinum agents', wide: true,
        columns: ['Drug', 'Class / MOA', 'Main uses', 'Key toxicities', 'Species / high-yield'],
        rows: [
          ['Cisplatin', 'Platinum agent — DNA cross-links', 'Canine osteosarcoma (post-amputation); carcinomas; intracavitary for mesothelioma', 'Nephrotoxicity (requires aggressive saline diuresis); severe emesis; ototoxicity; myelosuppression', 'NEVER IN CATS — fatal pulmonary edema. This is one of the most heavily tested facts on the exam.'],
          ['Carboplatin', 'Platinum agent — same MOA, better tolerated', 'Osteosarcoma (dogs); carcinomas; the platinum you can use in cats (e.g., injection-site sarcoma, SCC)', 'Myelosuppression is dose-limiting; thrombocytopenia with delayed nadir in cats; minimal nephro-/oto-toxicity; less emetic', 'Safe in cats, no diuresis needed. Dose off GFR / body weight in small dogs.']
        ]
      },
      {
        type: 'table', title: 'Enzymes, hormones, targeted agents & other', wide: true,
        columns: ['Drug', 'Class / MOA', 'Main uses', 'Key toxicities', 'Species / high-yield'],
        rows: [
          ['L-asparaginase', 'Enzyme — depletes extracellular asparagine, which lymphoblasts cannot synthesize', 'Lymphoma / lymphoid leukemia induction and rescue; fast, marrow-sparing response', 'Anaphylaxis (give SC or IM, not IV); pancreatitis; coagulopathy; little myelosuppression', 'Do not give on the same day as vincristine (↑ neutropenia and pancreatitis risk) — separate by 6+ h or dose the day before.'],
          ['Prednisone / prednisolone', 'Glucocorticoid — induces apoptosis in lymphoid cells', 'Lymphoma (the P in CHOP); mast cell tumor; brain tumor edema; palliative care; hypercalcemia of malignancy', 'PU/PD/PP, iatrogenic hyperadrenocorticism, GI ulceration (worse with NSAIDs), immunosuppression, muscle wasting', 'Never start steroids before you have a diagnosis — they destroy cytology/histopath, mask disease, and induce multidrug resistance (shorter remission).'],
          ['Hydroxyurea', 'Ribonucleotide reductase inhibitor — S-phase', 'Polycythemia vera; chronic myelogenous leukemia; mast cell tumor', 'Myelosuppression; methemoglobinemia and anemia in cats; onychomadesis (nail sloughing) in dogs', 'The go-to for polycythemia vera after phlebotomy.'],
          ['Toceranib (Palladia)', 'Receptor tyrosine kinase inhibitor — KIT, VEGFR, PDGFR; oral', 'Labeled for recurrent grade II/III cutaneous mast cell tumor; off-label for anal sac adenocarcinoma, thyroid carcinoma, others', 'Diarrhea/hemorrhagic GI signs (dose-limiting); anorexia; neutropenia; hypertension and proteinuria; hypoalbuminemia; muscle cramping; lameness', 'Works best on tumors with an activating c-KIT mutation. Monitor BP and urine protein:creatinine.'],
          ['Masitinib (Kinavet)', 'Tyrosine kinase inhibitor — KIT/PDGFR', 'Canine mast cell tumor', 'Protein-losing nephropathy; GI; neutropenia', 'Check UPC before and during therapy.'],
          ['Piroxicam', 'Non-selective NSAID — COX inhibition, antiangiogenic', 'Transitional cell carcinoma of the bladder (± mitoxantrone); SCC; other carcinomas', 'GI ulceration/perforation; renal papillary necrosis; hepatopathy', 'TCC = piroxicam. Give with misoprostol/gastroprotectant; never combine with corticosteroids.'],
          ['Rabacfosadine (Tanovea)', 'Acyclic nucleotide prodrug targeted to lymphoid cells', 'Canine lymphoma (conditionally approved, single agent)', 'Pulmonary fibrosis (can be fatal); dermatopathy; GI; myelosuppression', 'Avoid in West Highland White Terriers and other breeds predisposed to pulmonary fibrosis.'],
          ['Tigilanol tiglate (Stelfonta)', 'Intratumoral protein kinase C activator — destroys tumor vasculature', 'Non-metastatic canine mast cell tumor (single intratumoral injection)', 'Massive degranulation → hypotension, GI ulceration; large open wound at the site that heals by second intention', 'Mandatory pre-treatment: H1 blocker + H2 blocker + corticosteroid.']
        ]
      },
      {
        type: 'rapidfire', title: 'Buzzword → drug',
        items: [
          ['Sterile hemorrhagic cystitis', 'Cyclophosphamide (or ifosfamide)'],
          ['Dilated cardiomyopathy in a dog', 'Doxorubicin'],
          ['Nephrotoxicity in a cat on chemo', 'Doxorubicin'],
          ['Fatal pulmonary edema in a cat', 'Cisplatin'],
          ['Seizures in a cat after topical cream', '5-Fluorouracil'],
          ['Peripheral neuropathy / ileus', 'Vincristine'],
          ['Blue-green urine and sclera', 'Mitoxantrone'],
          ['Red-orange urine', 'Doxorubicin'],
          ['Hepatotoxicity + delayed thrombocytopenia', 'Lomustine'],
          ['Anaphylaxis + pancreatitis', 'L-asparaginase'],
          ['Renal papillary necrosis', 'Piroxicam (NSAID)'],
          ['Proteinuria + hypertension + diarrhea', 'Toceranib'],
          ['Pulmonary fibrosis in a Westie', 'Rabacfosadine'],
          ['Myoclonus in a cat', 'Chlorambucil'],
          ['Methemoglobinemia in a cat', 'Hydroxyurea']
        ]
      },
      {
        type: 'rapidfire', title: 'Tumor → first-line drug',
        items: [
          ['Multicentric lymphoma (dog)', 'CHOP protocol'],
          ['Feline small-cell GI lymphoma', 'Chlorambucil + prednisolone'],
          ['CNS lymphoma', 'Lomustine or cytarabine (cross the BBB)'],
          ['Transmissible venereal tumor', 'Vincristine'],
          ['Mast cell tumor', 'Vinblastine + prednisone, lomustine, toceranib'],
          ['Osteosarcoma (post-amputation)', 'Carboplatin (or cisplatin, dogs)'],
          ['Hemangiosarcoma (post-splenectomy)', 'Doxorubicin'],
          ['Bladder transitional cell carcinoma', 'Piroxicam ± mitoxantrone'],
          ['Multiple myeloma', 'Melphalan + prednisone'],
          ['Polycythemia vera', 'Hydroxyurea'],
          ['Anal sac adenocarcinoma', 'Toceranib / carboplatin'],
          ['Injection-site sarcoma (cat)', 'Surgery + RT ± doxorubicin/carboplatin']
        ]
      },
      {
        type: 'table', title: 'Toxicity → antidote / management',
        columns: ['Problem', 'Management'],
        rows: [
          ['Doxorubicin extravasation', 'Stop, aspirate, cold compress, dexrazoxane IV'],
          ['Vincristine / vinblastine extravasation', 'Warm compress + hyaluronidase (do NOT cool)'],
          ['Cyclophosphamide cystitis', 'Discontinue permanently; mesna, furosemide, fluids'],
          ['Methotrexate overdose', 'Leucovorin (folinic acid)'],
          ['Cisplatin nephrotoxicity', 'Saline diuresis before/after; never use in cats'],
          ['Anthracycline cardiotoxicity', 'Prevent: echo screening, cumulative dose cap, dexrazoxane'],
          ['Febrile neutropenia', 'Broad-spectrum antibiotics, fluids, hospitalize; dose-reduce 20–25%'],
          ['Chemo-induced nausea / vomiting', 'Maropitant, ondansetron; metoclopramide'],
          ['Mast cell degranulation', 'H1 + H2 blockers ± steroid; pre-treat before cytoreduction']
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Species & breed cautions',
        list: [
          'Cats: no cisplatin (fatal pulmonary edema), no 5-FU (fatal neurotoxicity). Doxorubicin causes nephrotoxicity, not cardiotoxicity — check renal values. Lomustine can cause pulmonary fibrosis. Chlorambucil and carboplatin are the well-tolerated staples. Use prednisoLONE, not prednisone.',
          'Dogs with the MDR1 (ABCB1-1Δ) mutation — Collies, Australian Shepherds, Shelties and other herding breeds: reduced clearance of vincristine, vinblastine, doxorubicin and actinomycin D → severe myelosuppression. Test and dose-reduce.',
          'Doberman, Boxer, Great Dane: pre-existing DCM risk — echo before doxorubicin. West Highland White Terrier: avoid rabacfosadine. Greyhounds / sighthounds: low body fat, higher toxicity risk.'
        ]
      },
      {
        type: 'callout', variant: 'pearl', title: 'Protocol & safety points worth a free point',
        list: [
          'CHOP = Cyclophosphamide, Hydroxydaunorubicin (doxorubicin), Oncovin (vincristine), Prednisone — 19–25 wk, the standard for canine multicentric lymphoma. Median survival ~12 mo; ~80–90% remission. Prednisone alone: ~2–3 mo.',
          'Check a CBC before every dose. Typical neutrophil nadir is 7 days (5–10 d). Delay treatment if neutrophils are below ~1,500–2,000/µL; reduce the next dose by 20–25% after grade 3–4 neutropenia.',
          'Substage b (clinically ill) and T-cell immunophenotype = worse prognosis. Hypercalcemia in a dog with lymphoma suggests mediastinal / T-cell disease.',
          'Handling: chemotherapy agents are hazardous drugs — chemo gloves, closed-system transfer devices, no compounding by pregnant staff, and owners must handle patient waste with gloves for 3–5 days after treatment.',
          'Cell-cycle specific (vincristine = M, cytarabine/hydroxyurea = S) vs. nonspecific (alkylators, doxorubicin) — specific drugs favor frequent low doses; nonspecific favor higher intermittent dosing.'
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
