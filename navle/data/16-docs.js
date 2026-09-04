/* NAVLE Hub — Source document library
 *
 * The original study guides, kept alongside the hub so they can be read and
 * printed as documents. Files live in docs/ next to index.html; build.js copies
 * them beside the single-file build too.
 *
 * `module` links a document to the hub chapter built from it.
 */
(function (D) {
  D.push(
    { file:'NAVLE_HighYield_Blueprint.pdf', title:'High-Yield & Commonly-Missed Topics',
      pages:3, module:'blueprint',
      desc:'The ICVA exam blueprint — species and competency domain weights — plus the bread-and-butter conditions by species and the areas where prepared students most often lose points.' },

    { file:'NAVLE_Differential_Clusters.pdf', title:'Differential Clusters',
      pages:5, module:'clusters-sa',
      desc:'Look-alike conditions grouped by presenting complaint: PU/PD, hypercalcemia, anemia, pediatric diarrhea, icterus, tick-borne disease, FLUTD, equine neuro and diarrhea, downer cow, vesicular disease, rodenticides.' },

    { file:'NAVLE_Infectious_Disease_Guide.pdf', title:'High-Yield Infectious Diseases',
      pages:6, module:'id-smallanimal',
      desc:'Top 5 for dogs and cats, top 3 for horses, cattle, swine, sheep and goats, exotics, and fish — in signs → diagnosis → treatment → NAVLE-flags format.' },

    { file:'NAVLE_Dogs_Cats_Study_Guide.pdf', title:'Dogs & Cats Study Guide',
      pages:49, module:'sa-medicine',
      desc:'Canine and feline medicine organized by body system: toxicology, hematology and transfusion, cardiology, respiratory and critical care, neurology, ophthalmology, GI and liver, urinary and endocrine, dermatology, oncology, vector-borne disease, systemic mycoses, parasitology, feline-specific medicine, and pharmacology and anesthesia — plus zoonoses, breed predispositions, and the topics it deliberately leaves to other resources.' },

    { file:'NAVLE_Equine_Study_Guide.pdf', title:'Equine Study Guide',
      pages:30, module:'equine',
      desc:'Cardiology, respiratory and upper airway, colic and GI, liver/muscle/endocrine, the ataxic horse algorithm, lameness and the foot, ophthalmology, dermatology, infectious disease, parasitology, reproduction and neonatology, toxicology, and pharmacology.' },

    { file:'NAVLE_Ruminant_Study_Guide.pdf', title:'Ruminant Study Guide',
      pages:31, module:'bovine',
      desc:'Cattle, sheep, goats and camelids: forestomach and metabolic disease, the calf diarrhea algorithm, BRDC, the down or blind ruminant, abortion by timing, mastitis, foot and lameness, vector-borne and reportable disease, parasitology, small ruminant medicine, camelids, and toxicology.' },

    { file:'NAVLE_Swine_Study_Guide.pdf', title:'Swine Study Guide',
      pages:14, module:'swine',
      desc:'Organized by system and by age group: the piglet diarrhea algorithm, respiratory disease, systemic and septicemic disease, neurology, lameness, dermatology, reproduction, parasitology, toxicology, and the foreign animal diseases.' },

    { file:'NAVLE_Exotics_Avian_Study_Guide.pdf', title:'Exotics & Avian Study Guide',
      pages:32, module:'petbirds',
      desc:'Pet birds and psittacines, poultry and gamebirds, avian cross-cutting concepts, fish and aquaculture, reptiles and amphibians, rabbits, ferrets, guinea pigs, chinchillas, rodents and hedgehogs, and nonhuman primates.' },

    { file:'NAVLE_Oncology_Drugs_Cheat_Sheet.pdf', title:'Veterinary Oncology Drugs',
      pages:4, module:'oncology',
      desc:'Drug, class and mechanism, what it treats, what it does to the patient, and the species traps — plus buzzword-to-drug and tumor-to-drug quick tables and the extravasation protocols.' },

    { file:'Fecal_Egg_ID_Antiparasiticide_Guide.pdf', title:'Fecal Egg ID → Antiparasiticide Selection',
      pages:3, module:'parasitology',
      desc:'What you see on the slide, the likely parasite, and the drug that actually kills it — with the drug class cheat sheet, the parasite × class efficacy matrix, and the hookworm resistance guidance.' }
  );
})(window.NAVLE_DOCS);
