/* NAVLE Hub — Neurology & Ophthalmology (dogs & cats)
 * Source: NAVLE_Dogs_Cats_Study_Guide.pdf ch. 5 and 6.
 */
(function (N) {
  N.push({
    id: 'sa-neuro',
    group: 'Species',
    title: 'Neurology & Ophthalmology',
    tagline: 'Localize first, then differentiate — the disease name follows from the localization.',
    weightNote: 'part of the 49.9% dog + cat block',
    covKey: 'dogcat', covTitle: 'Dogs & Cats', covWeight: 49.9,
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'The neurology exam strategy',
        body: 'Localize first, then differentiate. Almost every NAVLE neurology item can be answered by asking two questions: <b>UMN or LMN?</b> and <b>which spinal segment or cranial nerve?</b> The disease name follows from the localization.'
      },
      {
        type: 'table', title: 'UMN vs. LMN',
        columns: ['Sign', 'Upper motor neuron', 'Lower motor neuron'],
        rows: [
          ['Reflexes', 'Hyper-reflexia — loss of descending inhibition', 'Decreased or absent spinal reflexes'],
          ['Muscle tone', 'Increased', 'Decreased (flaccid)'],
          ['Muscle atrophy', 'Slow, disuse atrophy', 'Rapid, severe neurogenic atrophy']
        ]
      },
      {
        type: 'table', title: 'Spinal cord localization — the four segments',
        columns: ['Segment', 'Forelimbs', 'Hindlimbs / other'],
        rows: [
          ['C1–C5', 'UMN', 'UMN — all four limbs UMN.'],
          ['C6–T2', 'LMN — the brachial intumescence', 'UMN in the hindlimbs.'],
          ['T3–L3', 'Normal', 'UMN in the hindlimbs. The most common site of IVDD in chondrodystrophic dogs.'],
          ['L4–S4', 'Normal', 'LMN in the hindlimbs, anus and bladder → incontinence.']
        ]
      },
      {
        type: 'table', title: 'Reflexes, nerves & bladder function',
        columns: ['Item', 'Segments / lesion', 'Detail'],
        rows: [
          ['Patellar reflex', 'L4–L6', 'Femoral nerve.'],
          ['Withdrawal, pelvic limb', 'L6–S1', 'Sciatic nerve.'],
          ['UMN bladder', 'Cranial to L7', 'Turgid and DIFFICULT to express. The detrusor contracts against a spastic, non-relaxing urethral sphincter. Risk of bladder rupture and detrusor damage — express or catheterize regularly.'],
          ['LMN bladder', 'Caudal to L7', 'Flaccid and EASY to express, with no anal tone. Constant overflow dribbling.']
        ]
      },

      {
        type: 'table', title: 'Cranial nerves',
        columns: ['#', 'Nerve', 'Function & lesion signs'],
        rows: [
          ['I', 'Olfactory', 'Smell.'],
          ['II', 'Optic', 'Vision — assess with PLR and dazzle reflex. Afferent arm of the PLR and menace.'],
          ['III', 'Oculomotor', 'Movement of the eye; eyelid elevation; pupillary constriction (parasympathetic to the iris). Lesion → mydriasis and ventrolateral strabismus.'],
          ['IV', 'Trochlear', 'Innervates the dorsal oblique. Lesion → dorsomedial rotation of the globe, best seen in species with a horizontal pupil.'],
          ['V', 'Trigeminal', 'Mandibular — motor to muscles of mastication; damage → dropped jaw. Maxillary — sensation to face and nose. Ophthalmic — sensory to eye, cornea, eyelids; afferent of the palpebral and corneal reflex.'],
          ['VI', 'Abducens', 'Controls the lateral rectus. Lesion → MEDIAL strabismus — the eye cannot move outward.'],
          ['VII', 'Facial', 'Facial expression; closes the eyelids (orbicularis oculi); taste to the rostral ⅔ of the tongue; lacrimation. Lesion → loss of menace and palpebral response, ear droop, lip droop, and corneal ulceration from exposure keratitis.'],
          ['VIII', 'Vestibulocochlear', 'Balance and hearing. Lesion → nystagmus, head tilt, ataxia.'],
          ['IX', 'Glossopharyngeal', 'Swallowing (with X); gag reflex.'],
          ['X', 'Vagus', 'Lesion → dysphonia, dysphagia or megaesophagus; laryngeal paralysis.'],
          ['XI', 'Accessory', 'Motor to trapezius and neck muscles.'],
          ['XII', 'Hypoglossal', 'Tongue motor. Lesion → tongue deviation / atrophy.']
        ]
      },

      {
        type: 'table', title: 'Vestibular disease — peripheral vs. central',
        columns: ['Feature', 'PERIPHERAL', 'CENTRAL'],
        rows: [
          ['Nystagmus', 'Horizontal or rotary; direction does not change with head position', 'VERTICAL nystagmus, or a nystagmus that changes direction with head position'],
          ['Proprioceptive deficits', 'ABSENT — the hallmark', 'PRESENT — the hallmark'],
          ['Other', "Horner's syndrome, facial nerve paralysis — both run through the middle ear", 'Altered mentation, other cranial nerve deficits, cerebellar signs']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Paradoxical vestibular disease',
        body: 'The head tilt and nystagmus point <b>away</b> from the lesion. Caused by a lesion in the cerebellar peduncle or flocculonodular lobe. The rule that saves you: when a vestibular case has both vestibular signs and CP deficits, the lesion is on the side of the <b>proprioceptive deficits</b> — proprioception never lies. Classic example: a lesion in the left cerebellum producing left hypermetria and a right paradoxical head tilt; GME is a common cause.'
      },

      {
        type: 'table', title: 'Seizures & brain disease',
        columns: ['Condition', 'Key facts'],
        rows: [
          ['Status epilepticus', 'Diazepam — including per rectum, which works even in cats and is the route to know when there is no IV access. Follow with a loading dose of levetiracetam or phenobarbital.'],
          ['Idiopathic epilepsy — the signalment', 'Age 1–5 years is the defining feature: a first seizure inside that window in an otherwise normal dog with a normal interictal exam. Breeds: Beagle, Keeshond, Dachshund, Labrador Retriever, Golden Retriever, Vizsla; also Border Collie, German Shepherd, Belgian Tervuren. A first seizure under 1 year suggests congenital disease / portosystemic shunt or infection; over 5–6 years suggests neoplasia or metabolic disease.'],
          ['Granulomatous meningoencephalitis (GME)', 'Idiopathic inflammatory CNS disease of young to middle-aged small-breed dogs. Can produce paradoxical vestibular signs.'],
          ['Syringomyelia', 'Fluid-filled cavities within the spinal cord. Classic in Cavalier King Charles Spaniels with Chiari-like malformation — phantom scratching at the shoulder, neck pain.'],
          ['Schiff-Sherrington posture', 'Rigid forelimb extension with NORMAL forelimb function, plus hindlimb paralysis or paresis. Caused by interruption of ascending inhibitory input from border cells in the lumbar spinal cord to the forelimb extensors. It indicates a severe T3–L3 lesion — it does NOT by itself indicate a poor prognosis, and it is not a forelimb lesion. That is the trap.'],
          ['Myasthenia gravis', 'Best diagnostic test: acetylcholine receptor antibody assay on serum. A type II hypersensitivity. Presents with exercise-induced weakness and, importantly, megaesophagus → aspiration pneumonia.'],
          ['Thiamine (vitamin B1) deficiency (cat)', 'Cats fed raw seafood, which contains thiaminase that destroys dietary thiamine. Ventroflexion of the neck, ataxia, mydriasis, and characteristic dorsal flexion of the head ("stargazing"), progressing to seizures. Rapidly reversible with thiamine if caught early.']
        ]
      },

      {
        type: 'table', title: "Horner's syndrome",
        columns: ['Component', 'Detail'],
        rows: [
          ['The four signs', '1. Miosis (constricted pupil) · 2. Ptosis (drooped upper eyelid) · 3. Enophthalmos (sunken globe) · 4. Third eyelid protrusion.'],
          ['Species additions', 'Horses: ipsilateral head and neck sweating. Cattle: regional hyperthermia / loss of sweating on the muzzle.'],
          ['Localization', 'Loss of sympathetic innervation anywhere along a three-neuron pathway. The two most commonly tested sites are the T1–T3 spinal cord and otitis media. Also brachial plexus avulsion and retrobulbar disease.']
        ]
      },
      {
        type: 'table', title: 'Large animal neuro look-alikes worth knowing',
        columns: ['Disease', 'Discriminating features'],
        rows: [
          ['Listeriosis ("circling disease")', 'UNILATERAL cranial nerve deficits — classically a dropped lip/ear and dysphagia. CSF: MONONUCLEAR pleocytosis. Silage-associated. Treatment: procaine penicillin, high dose and prolonged.'],
          ['TEME\nthromboembolic meningoencephalitis, Histophilus somni', 'Fever and respiratory signs come FIRST, before the CNS signs. CSF: NEUTROPHILIC pleocytosis and xanthochromic (yellow) fluid indicating prior hemorrhage. Feedlot cattle.']
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire neurology recall',
        items: [
          ['Vertical nystagmus or CP deficits', 'CENTRAL vestibular'],
          ['Head tilt one way, CP deficits the other', 'Paradoxical — trust the CP deficits'],
          ['Rigid forelimbs, paralyzed hindlimbs', 'Schiff-Sherrington, T3–L3'],
          ["Turgid bladder you can't express", 'UMN — lesion cranial to L7'],
          ['Flaccid bladder, no anal tone', 'LMN — lesion caudal to L7'],
          ['Medial strabismus', 'CN VI abducens'],
          ["Can't blink, corneal ulcer", 'CN VII facial'],
          ['Megaesophagus + weakness', 'Myasthenia gravis → ACh receptor antibody assay'],
          ['Cat fed raw fish, ventroflexed neck', 'Thiamine deficiency'],
          ['Unilateral dropped lip + mononuclear CSF in a cow', 'Listeria → procaine penicillin']
        ]
      },

      {
        type: 'table', title: 'Uveitis',
        columns: ['Type', 'Structures affected', 'Causes & consequences'],
        rows: [
          ['Anterior uveitis', 'Three structures: anterior chamber, iris and ciliary body.', 'Aqueous flare, hypopyon, miosis, low IOP, ocular pain. In cats, chronic anterior uveitis is the usual cause of CATARACTS — always look for the underlying systemic disease: FeLV, FIV, FIP, toxoplasmosis, lymphoma.'],
          ['Posterior uveitis', 'Two structures: choroid and retina (chorioretinitis).', 'Caused by HYPERTENSION — which is why the answer to a hypertensive cat with retinal detachment or intraocular hemorrhage is amlodipine. Also infectious and neoplastic causes.']
        ]
      },
      {
        type: 'table', title: 'Pharmacology of the eye',
        columns: ['Drug', 'Class / mechanism', 'Use'],
        rows: [
          ['Pilocarpine', 'Muscarinic receptor AGONIST', 'Pupil constrictor. Used to diagnose CN III (oculomotor) lesions — a denervated pupil is supersensitive and constricts to dilute pilocarpine. Also lowers intraocular pressure.'],
          ['Atropine, glycopyrrolate, tropicamide', 'Anticholinergic (parasympatholytic)', 'Mydriasis. Atropine also relieves ciliary spasm pain in uveitis. Tropicamide is the short-acting diagnostic dilator.'],
          ['Timolol', 'Beta blocker acting on the ciliary body', 'Decreases aqueous humor production → lowers IOP in glaucoma.'],
          ['Dorzolamide', 'Carbonic anhydrase inhibitor', 'Reduces IOP by decreasing aqueous humor production.'],
          ['Latanoprost', 'Prostaglandin analogue', 'Increases aqueous humor OUTFLOW (uveoscleral). Potent IOP reduction — but contraindicated in uveitis and in feline glaucoma.']
        ]
      },
      {
        type: 'table', title: 'Miscellaneous ocular',
        columns: ['Condition', 'Key fact'],
        rows: [
          ['Feline herpesvirus (FHV-1) ocular disease', 'Conjunctivitis and keratitis — classically dendritic corneal ulcers, which are pathognomonic. Treat with famciclovir.'],
          ['Limbal (epibulbar) melanoma', 'Slow growing with a low rate of metastasis — a benign-behaving tumor at the limbus. Contrast with intraocular uveal melanoma in cats, which is far more aggressive.'],
          ['Posterior synechia', 'Adhesion of the iris to the anterior lens capsule, a sequela of anterior uveitis. Produces an irregular, "dyscoric" pupil.'],
          ['KCS', 'A type IV hypersensitivity against the lacrimal gland. Also drug-induced — sulfonamides/TMS are the classic culprit.'],
          ['Equine glaucoma vs. uveitis pupil', 'Active glaucoma → MYDRIATIC pupil. Uveitis without glaucoma → MIOTIC pupil. Treat equine recurrent uveitis glaucoma with timolol and dorzolamide.']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
