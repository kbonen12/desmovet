/* NAVLE Hub — Fecal Egg ID & Antiparasiticide Selection
 * Source: Fecal_Egg_ID_Antiparasiticide_Guide.docx
 * (which cites CAPC guidelines for ascarids and hookworms, and Cornell CVM on
 *  emerging Ancylostoma caninum drug resistance)
 */
(function (N) {
  N.push({
    id: 'parasitology',
    group: 'Cross-cutting',
    title: 'Fecal Egg ID & Dewormers',
    tagline: 'Match what is on the slide to the parasite, then to the drug that actually kills it.',
    sections: [
      {
        type: 'callout', variant: 'pearl', title: 'The three traps this topic is built on',
        list: [
          'Pyrantel does not touch whipworms or tapeworms — the single most testable gap in coverage.',
          'Coccidia and Giardia are protozoa. Anthelmintics do not kill coccidia; you need a coccidiostat.',
          'A negative fecal float does not rule out infection — intermittent shedding, prepatent period, and single-sex infections all produce false negatives.'
        ]
      },
      {
        type: 'table', title: 'What you see on the slide → parasite → drug of choice', wide: true,
        columns: ['What you see', 'Likely parasite', 'Drug(s) of choice', 'Key notes'],
        rows: [
          ['Thick-walled, brown, round-oval; pitted (Toxocara) or smooth (Toxascaris) surface; unembryonated',
           'Roundworms — Toxocara canis / T. cati, Toxascaris leonina',
           'Pyrantel pamoate, fenbendazole, or a macrocyclic lactone (milbemycin, moxidectin)',
           'ZOONOTIC — visceral and ocular larva migrans. Deworm puppies and kittens at 2, 4, 6, and 8 weeks.'],
          ['Thin-shelled, oval, colorless; morula (8–16 cell) stage inside',
           'Hookworms — Ancylostoma spp., Uncinaria stenocephala',
           'Pyrantel, fenbendazole, milbemycin, or moxidectin',
           'ZOONOTIC — cutaneous larva migrans. Benzimidazole and macrocyclic lactone resistance in A. caninum is now widespread in the US: recheck a fecal 2 weeks post-treatment, and consider a combination product (e.g. emodepside + praziquantel) or resistance PCR if treatment fails.'],
          ['Barrel or lemon-shaped, brown, with bipolar plugs at each end',
           'Whipworm — Trichuris vulpis',
           'Fenbendazole (3–5 day course, repeat in 3 weeks); milbemycin or moxidectin also effective',
           'Pyrantel alone is NOT effective. Shedding is intermittent — a negative float does not rule it out; treat empirically if the signs fit.'],
          ['Round, thick striated shell with a hexacanth embryo; OR rice-grain proglottids / egg packets on the stool or perianal fur',
           'Tapeworms — Dipylidium caninum, Taenia spp., Echinococcus spp.',
           'Praziquantel (drug of choice) or epsiprantel',
           'Standard flotation often misses the eggs — diagnosis is usually visual, from proglottids. Dipylidium needs flea control too. Echinococcus eggs look identical to Taenia — zoonotic hydatid risk in endemic areas.'],
          ['Small oval-to-round oocyst, smooth thin wall, unsporulated (no internal structure visible when fresh)',
           'Coccidia — Cystoisospora / Isospora spp.',
           'Sulfadimethoxine, ponazuril / toltrazuril, or trimethoprim-sulfa',
           'Protozoa, not helminths — NOT killed by anthelmintics. Needs a coccidiostat instead.'],
          ['Oval cyst, smooth wall, 2–4 nuclei and axonemes visible',
           'Giardia spp.',
           'Fenbendazole (5-day course) ± metronidazole',
           'Bathe the pet at the end of treatment to remove cysts from the haircoat. Zoonotic potential is debated but hygiene is still warranted.'],
          ['Larvated egg, or free larvae seen directly on the slide',
           'Strongyloides stercoralis',
           'Fenbendazole or ivermectin',
           'ZOONOTIC. More common in puppies, kennels, and immunosuppressed animals.'],
          ['Large, thick smooth shell, oval, already embryonated',
           'Physaloptera spp.',
           'Pyrantel or fenbendazole (often needs repeat or higher dosing)',
           'Notoriously hard to clear. Associated with chronic vomiting; adults shed intermittently, so flotation often misses it.'],
          ['Similar to a whipworm egg, but the bipolar plugs are rougher and asymmetric',
           'Capillaria / Eucoleus / Pearsonema spp.',
           'Fenbendazole',
           'Respiratory (Eucoleus boehmi) and bladder (Pearsonema) forms exist — note the sample source, feces vs. urine sediment.'],
          ['Very small, round, unsporulated oocyst — smaller than Cystoisospora',
           'Toxoplasma gondii (cats)',
           'Not treated with dewormers; clindamycin if clinically ill',
           'ZOONOTIC — the key counseling point for pregnant or immunocompromised household members.']
        ]
      },
      {
        type: 'callout', variant: 'discrim', title: 'Whipworm vs. Capillaria — the one-line discriminator',
        body: 'Both are barrel-shaped with bipolar plugs. Trichuris vulpis has smooth, symmetric plugs; Capillaria / Eucoleus / Pearsonema have rougher, asymmetric plugs. Then check where the sample came from — a Pearsonema egg belongs in urine sediment, not feces.'
      },
      {
        type: 'table', title: 'Drug class cheat sheet',
        columns: ['Drug class', 'Covers', 'Common products'],
        rows: [
          ['Benzimidazoles (fenbendazole)', 'Roundworms, hookworms, whipworms, Giardia, some lungworms — broad and safe', 'Panacur, Safe-Guard'],
          ['Pyrantel pamoate', 'Roundworms and hookworms ONLY — not whipworms, not tapeworms', 'Nemex, Strongid'],
          ['Macrocyclic lactones (milbemycin, moxidectin, ivermectin)', 'Roundworms, hookworms (label-dependent) — usually paired with heartworm prevention', 'Interceptor Plus, Sentinel, Advantage Multi, Trifexis, Simparica Trio'],
          ['Praziquantel / epsiprantel', 'Tapeworms only', 'Droncit; component of Drontal Plus and Interceptor Plus'],
          ['Coccidiostats (sulfadimethoxine, ponazuril / toltrazuril)', 'Coccidia only — not an anthelmintic', 'Albon, Marquis, Baycox']
        ]
      },
      {
        type: 'table', title: 'Parasite × drug class matrix', wide: true,
        note: '✓ = effective / labeled · ✓* = effective but a caveat applies · – = not effective / not indicated',
        columns: ['Parasite', 'Benzimidazoles', 'Pyrantel', 'Macrocyclic lactones', 'Praziquantel', 'Coccidiostats'],
        rows: [
          ['Toxocara canis / T. cati (roundworm)', '✓', '✓', '✓', '–', '–'],
          ['Toxascaris leonina (roundworm)', '✓', '✓', '✓*', '–', '–'],
          ['Ancylostoma caninum (hookworm, dog)', '✓*', '✓*', '✓*', '–', '–'],
          ['Ancylostoma tubaeforme (hookworm, cat)', '✓', '✓', '✓', '–', '–'],
          ['Uncinaria stenocephala (hookworm)', '✓', '✓', '✓', '–', '–'],
          ['Trichuris vulpis (whipworm)', '✓', '–', '✓*', '–', '–'],
          ['Dipylidium caninum (flea tapeworm)', '–', '–', '–', '✓', '–'],
          ['Taenia spp. (tapeworm)', '–', '–', '–', '✓', '–'],
          ['Echinococcus spp. (tapeworm)', '–', '–', '–', '✓*', '–'],
          ['Cystoisospora / Isospora spp. (coccidia)', '–', '–', '–', '–', '✓'],
          ['Giardia spp.', '✓*', '–', '–', '–', '–'],
          ['Strongyloides stercoralis', '✓', '–', '✓*', '–', '–'],
          ['Physaloptera spp.', '✓*', '✓*', '–', '–', '–'],
          ['Capillaria / Eucoleus / Pearsonema spp.', '✓', '–', '–', '–', '–'],
          ['Toxoplasma gondii (cat)', '–', '–', '–', '–', '–']
        ]
      },
      {
        type: 'list', title: 'What the ✓* caveats mean',
        items: [
          '<b>Toxascaris leonina</b> — macrocyclic lactone efficacy is less consistently labeled than for Toxocara; check the product label.',
          '<b>Ancylostoma caninum</b> — benzimidazole and macrocyclic lactone resistance is now widespread in US dogs, and pyrantel resistance is also reported. Recheck a fecal 2 weeks post-treatment before assuming efficacy.',
          '<b>Trichuris vulpis</b> — macrocyclic lactone efficacy applies to milbemycin and moxidectin, not to every product in the class (not ivermectin at standard heartworm-prevention doses).',
          '<b>Echinococcus spp.</b> — praziquantel is effective, but higher-frequency dosing is often recommended in endemic areas because of the zoonotic hydatid risk.',
          '<b>Giardia spp.</b> — fenbendazole is effective but is often combined with metronidazole, which is not one of the five classes above.',
          '<b>Strongyloides stercoralis</b> — macrocyclic lactone efficacy refers to ivermectin specifically, at doses higher than standard heartworm prevention.',
          '<b>Physaloptera spp.</b> — response to pyrantel and fenbendazole is inconsistent; repeat dosing or a different class is often needed to clear the infection.'
        ]
      },
      {
        type: 'callout', variant: 'danger', title: 'Caveats before you treat',
        list: [
          'Confirm with CENTRIFUGAL fecal flotation, not gravity or passive flotation — it recovers far more eggs, especially Trichuris and Physaloptera.',
          'Egg count does not equal clinical severity, and a negative float does not rule out infection. Antigen or PCR testing can catch what flotation misses, especially for hookworms.',
          'Hookworm drug resistance (Ancylostoma caninum) is documented and spreading in US dogs, affecting both benzimidazoles and macrocyclic lactones. Any apparent treatment failure warrants a fecal recheck 2 weeks post-treatment before assuming reinfection.',
          'Tapeworm eggs and proglottids are easy to miss on routine flotation — diagnosis is often made by the owner seeing motile segments.',
          'Confirm current dosing, label indications, and species-specific safety — for example ivermectin sensitivity in MDR1 herding breeds — before treating.'
        ]
      },
      {
        type: 'rapidfire', title: 'Rapid-fire fecal ID recall',
        items: [
          ['Barrel-shaped egg with smooth bipolar plugs', 'Trichuris vulpis — fenbendazole; pyrantel will NOT work'],
          ['Barrel-shaped egg with rough, asymmetric bipolar plugs', 'Capillaria / Eucoleus / Pearsonema — fenbendazole'],
          ['Thin-shelled oval egg with an 8–16 cell morula', 'Hookworm — and think resistance in A. caninum'],
          ['Thick-walled pitted brown egg, unembryonated', 'Toxocara — zoonotic visceral / ocular larva migrans'],
          ['Thick-walled SMOOTH brown egg, unembryonated', 'Toxascaris leonina'],
          ['Rice-grain segments on the perianal fur', 'Dipylidium — praziquantel plus flea control'],
          ['Thick striated shell with a hexacanth embryo', 'Taenia (or Echinococcus — they look identical)'],
          ['Oval cyst with 2–4 nuclei and axonemes', 'Giardia — fenbendazole ± metronidazole, then bathe the pet'],
          ['Small unsporulated oocyst, smooth thin wall', 'Cystoisospora — needs a coccidiostat, not a dewormer'],
          ['Very small unsporulated oocyst in a cat', 'Toxoplasma gondii — counsel pregnant and immunocompromised owners'],
          ['Larvated egg or free larvae on the slide', 'Strongyloides stercoralis — zoonotic'],
          ['Large embryonated egg in a chronically vomiting dog', 'Physaloptera — hard to clear, often missed on flotation'],
          ['The one drug class that covers tapeworms', 'Praziquantel / epsiprantel — nothing else on the list works'],
          ['The parasite pyrantel misses that fenbendazole catches', 'Whipworm (Trichuris vulpis)']
        ]
      }
    ]
  });
})(window.NAVLE_MODULES);
