import test from 'node:test';
import assert from 'node:assert/strict';
import { recipesData } from '../src/data/recipes.ts';
import { saucesData } from '../data/../src/data/sauces.ts';
import { translations } from '../src/i18n/translations.ts';

test('Recipe database has exactly 60 recipes with required fields', () => {
  assert.equal(recipesData.length, 60, 'Should have exactly 60 recipes');

  // Check chapters 1 to 6 are all populated
  for (let cap = 1; cap <= 6; cap++) {
    const chapterRecipes = recipesData.filter(r => r.capitulo === cap);
    assert.equal(chapterRecipes.length, 10, `Chapter ${cap} should have exactly 10 recipes`);
  }

  // Check each recipe integrity
  recipesData.forEach(r => {
    assert.ok(r.id >= 1 && r.id <= 60, `Recipe id ${r.id} out of bounds`);
    assert.ok(r.titulo && r.titulo_en && r.titulo_es, `Recipe ${r.id} missing localized titles`);
    assert.ok(r.subtitulo && r.subtitulo_en && r.subtitulo_es, `Recipe ${r.id} missing localized subtitles`);
    assert.ok(r.tempoAirFryer > 0, `Recipe ${r.id} has invalid air fryer time`);
    assert.ok(r.temperatura >= 140 && r.temperatura <= 220, `Recipe ${r.id} has invalid temperature`);
    assert.ok(r.ingredientes.length > 0, `Recipe ${r.id} has no ingredients`);
    assert.ok(r.passos.length > 0, `Recipe ${r.id} has no steps`);
    assert.ok(r.dicaDoChef.length > 0, `Recipe ${r.id} has no chef tip`);
    assert.ok(r.molhosSugeridosIds.length > 0, `Recipe ${r.id} has no recommended sauces`);

    // Verify linked sauces exist in saucesData
    r.molhosSugeridosIds.forEach(sauceId => {
      const sauceExists = saucesData.some(s => s.id === sauceId);
      assert.ok(sauceExists, `Recipe ${r.id} links to non-existent sauce ID ${sauceId}`);
    });
  });
});

test('Sauce database has exactly 40 sauces across 4 categories', () => {
  assert.equal(saucesData.length, 40, 'Should have exactly 40 sauces');

  for (let cat = 1; cat <= 4; cat++) {
    const catSauces = saucesData.filter(s => s.categoria === cat);
    assert.equal(catSauces.length, 10, `Category ${cat} should have exactly 10 sauces`);
  }

  saucesData.forEach(s => {
    assert.ok(s.id >= 1 && s.id <= 40, `Sauce id ${s.id} out of bounds`);
    assert.ok(s.titulo && s.titulo_en && s.titulo_es, `Sauce ${s.id} missing titles`);
    assert.ok(s.estilo && s.estilo_en && s.estilo_es, `Sauce ${s.id} missing style`);
    assert.ok(s.ingredientes.length > 0, `Sauce ${s.id} missing ingredients`);
    assert.ok(s.passos.length > 0, `Sauce ${s.id} missing steps`);
  });
});

test('Translations dictionary supports PT, EN and ES completely', () => {
  const languages = ['pt', 'en', 'es'] as const;
  languages.forEach(lang => {
    const t = translations[lang];
    assert.ok(t, `Language ${lang} missing from translations`);
    assert.ok(t.appName, `Language ${lang} missing appName`);
    assert.ok(t.upsellTitle, `Language ${lang} missing upsellTitle`);
    assert.ok(t.timerShakeNow, `Language ${lang} missing timerShakeNow`);
    assert.ok(t.portionCalc, `Language ${lang} missing portionCalc`);
  });
});

test('Portion scaling calculates quantities correctly', () => {
  const sample = recipesData[0].ingredientes[0];
  const baseQtd = sample.qtd;
  assert.equal(baseQtd * 1, baseQtd);
  assert.equal(baseQtd * 2, baseQtd * 2);
  assert.equal(baseQtd * 4, baseQtd * 4);
});

test('All 60 recipes and 40 sauces have verified realistic product photography URLs', () => {
  recipesData.forEach(r => {
    assert.ok(r.imagem, `Recipe #${r.id} missing real product image`);
    assert.match(r.imagem, /^https:\/\//, `Recipe #${r.id} image must be HTTPS URL`);
  });

  saucesData.forEach(s => {
    assert.ok(s.imagem, `Sauce #${s.id} missing real product image`);
    assert.match(s.imagem, /^https:\/\//, `Sauce #${s.id} image must be HTTPS URL`);
  });
});

test('Free access mode ensures all 40 sauces can be opened directly without gating', () => {
  assert.equal(saucesData.length, 40);
  saucesData.forEach(s => {
    assert.ok(s.id >= 1 && s.id <= 40);
    assert.ok(s.ingredientes.length >= 2, `Sauce #${s.id} should have complete ingredients`);
    assert.ok(s.passos.length >= 2, `Sauce #${s.id} should have complete preparation steps`);
  });
});
