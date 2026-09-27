/* SAHNE 1 — KESİR BİR BÖLMEDİR (0–10 s)  3 pizzas for 4 people.
   The whole film's drawing lives in LI.world(t); each scene only sets the camera. */
(function (LI) {
  'use strict';
  const { seg } = LI.E;
  const KD = LI.KD, F = () => LI.Film, A = LI.Ang;
  const END = (t) => 1 - seg(t, 90.4, 91.4);

  function win(t, a, b, fi = 0.4, fo = 0.4) { return seg(t, a, a + fi) * (1 - seg(t, b - fo, b)); }
  /** timed expressions at one place: [start, end, items (or a string), amber?] */
  function exprs(ctx, t, P, list, sz) {
    const f = F();
    list.forEach(([a, b, items, hot]) => {
      const al = win(t, a, b); if (al <= 0) return;
      f.expr(ctx, typeof items === 'string' ? [items] : items, P.x, P.y, sz ?? P.s, { alpha: al, w: P.w, halo: true, color: hot ? A.amber : undefined });
    });
  }
  const fr = (n, d, hot) => F().fr(n, d, hot);
  const dec = (a, b, hot) => F().dec(a, b, hot);
  const at = (P, k) => ({ x: P.x, y: P.y[k], s: P.s, w: P.w });

  function context(ctx, env, t) {
    exprs(ctx, t, KD.L(env).CX, [
      [4.4, 10.2, 'Kesir çizgisi aslında bir bölme işaretidir'],
      [10.6, 29.8, 'Kâğıt kalemle bölelim: 3 ÷ 4'],
      [30.4, 39.8, 'Şimdi 1 ÷ 3'],
      [40.2, 46.0, 'Bir de 2 ÷ 11'],
      [46.2, 49.8, 'Kalan tekrar edince rakamlar da tekrar eder', true],
      [50.4, 59.8, 'Biri biter, biri tekrar eder: bir örüntü var mı?'],
      [60.0, 64.8, 'Paydaları asal çarpanlarına ayıralım'],
      [65.0, 69.8, 'Payda yalnızca 2 ve 5’lerden oluşuyorsa bölme biter!', true],
      [70.4, 79.8, 'Tahmin et, sonra bölerek sına'],
    ]);
  }

  /* ── 0–10 s: a fraction is a division ── */
  function intro(ctx, env, t) {
    const E = KD.L(env).E;
    exprs(ctx, t, at(E, 1), [[5.0, 10.2, ['3 pizza 4 kişiye eşit paylaşılırsa her biri ', fr(3, 4), ' alır']]]);
    exprs(ctx, t, at(E, 2), [[7.0, 10.2, [fr(3, 4), ' = 3 ÷ 4'], true]], E.s * 1.4);
  }

  /* ── 10–50 s: dividing on paper and on a calculator ── */
  const PHASE = [
    { a: 3, b: 4, n: 3, t: [11.0, 13.0, 15.0], end: 29.8, calc: [19.0, 20.0, '0,75'], rest: 'Kalan 0: bölme bitti' },
    { a: 1, b: 3, n: 4, t: [31.0, 32.6, 34.2, 35.4], end: 39.8, calc: [35.6, 36.2, '0,333333333'], rest: '' },
    { a: 2, b: 11, n: 4, t: [40.6, 41.8, 43.0, 44.2], end: 49.8, calc: [44.6, 45.2, '0,181818181'], rest: '' },
  ];
  function division(ctx, env, t) {
    const L = KD.L(env), f = F();
    PHASE.forEach((P) => {
      const rows = f.steps(P.a, P.b, P.n);
      rows.forEach((s, i) => {
        const al = win(t, P.t[i], P.end); if (al <= 0) return;
        const rep = P.a !== 3 && i >= 2; // a remainder that has come back
        f.fit(ctx, s + (P.a === 1 && i === 3 ? ' ...' : ''), L.STEP.x, L.STEP.y[i], L.STEP.s, L.STEP.w, Object.assign({ alpha: al, halo: true, p: seg(t, P.t[i], P.t[i] + 0.8) }, rep ? f.AMB : {}));
      });
      const ca = win(t, P.calc[0], P.end); if (ca > 0) f.calc(ctx, L.CALC, P.calc[2], seg(t, P.calc[1], P.calc[1] + (P.a === 3 ? 0.6 : 1.2)), ca);
    });
    const W0 = at(L.W, 0), W1 = at(L.W, 1);
    exprs(ctx, t, W0, [[17.0, 29.8, 'Kalan 0: bölme bitti'], [37.2, 39.8, ['Kalan hep 1, rakam hep 3: ', fr(1, 3), ' = ', dec(1, 3)]],
      [46.2, 49.8, ['Kalanlar 2, 9, 2, 9...: ', fr(2, 11), ' = ', dec(2, 11)]]]);
    exprs(ctx, t, W1, [[22.4, 29.8, [fr(3, 4), ' = 0,75: sonlu ondalık gösterim'], true], [38.4, 39.8, 'Tekrar eden kısmın üstüne çizgi çekeriz'],
      [47.4, 49.8, 'Bu bir devirli ondalık gösterim', true]]);
  }

  /* ── 50–70 s: a table of unit fractions ── */
  const LEFT = [2, 4, 5, 8, 10, 20], RIGHT = [3, 6, 7, 9, 11, 12];
  const factors = (n) => { const f = []; let m = n; for (let d = 2; m > 1; d++) while (m % d === 0) { f.push(d); m /= d; } return f; };
  function table(ctx, env, t) {
    const L = KD.L(env), T = L.TBL, f = F(), a = seg(t, 50.4, 50.8) * (1 - seg(t, 69.4, 70.2)); if (a <= 0) return;
    [[T.xl, 'Biten', LEFT, false, 0], [T.xr, 'Tekrar eden', RIGHT, true, T.stack || 0]].forEach(([x, head, list, rep, oy]) => {
      const h = seg(t, 50.6, 51.0) * a; if (h > 0) f.T(ctx, head, x, T.hy + oy, Object.assign({ size: T.s * 1.15, alpha: h, halo: true }, rep ? f.AMB : {}));
      list.forEach((b, i) => {
        const k = seg(t, 51.2 + i * 0.5, 51.6 + i * 0.5) * a; if (k <= 0) return;
        const fs = factors(b), fk = seg(t, 60.4 + i * 0.35, 60.8 + i * 0.35), onlyTF = fs.every((p) => p === 2 || p === 5);
        const items = [fr(1, b), ' = ', dec(1, b)];
        const glow = seg(t, 65.0, 65.6) * (1 - seg(t, 69.2, 69.8));
        if (fk > 0) items.push(`   ${b} = ${fs.join(' × ')}`);
        f.expr(ctx, items, x, T.y0 + oy + i * T.dy, T.s, { alpha: k, w: T.w, halo: false, color: glow > 0.5 && onlyTF ? A.amber : undefined });
      });
    });
  }

  /* ── 70–80 s: predict, then divide ── */
  function predict(ctx, env, t) {
    const L = KD.L(env), E = L.E, f = F();
    exprs(ctx, t, at(E, 0), [[71.0, 79.8, [fr(7, 40), ':  40 = 2 × 2 × 2 × 5, tahmin: biter']]]);
    exprs(ctx, t, at(E, 1), [[73.0, 79.8, ['7 ÷ 40 = 0,175'], true]]);
    exprs(ctx, t, at(E, 2), [[75.0, 79.8, [fr(5, 12), ':  12 = 2 × 2 × 3, tahmin: tekrar eder']]]);
    exprs(ctx, t, at(E, 3), [[77.0, 79.8, ['5 ÷ 12 = ', dec(5, 12)], true]]);
    const tk = (k, s, t0) => { const p = seg(t, t0, t0 + 0.5) * (1 - seg(t, 79.4, 79.8)); if (p <= 0) return;
      const w = f.width(ctx, s, E.s); f.tick(ctx, E.x + w / 2 + 26, E.y[k], seg(t, t0, t0 + 0.5), 1 - seg(t, 79.4, 79.8)); };
    tk(1, '7 ÷ 40 = 0,175', 73.8); tk(3, '5 ÷ 12 = 0,416', 77.8);
  }

  function summary(ctx, env, t) {
    if (t < 80.4) return;
    const S = KD.L(env).SUM, f = F(), a = END(t);
    [[['Kesir bir bölmedir: ', fr('a', 'b'), ' = a ÷ b'], 80.6], [['Kalan 0 olursa biter, kalan tekrar ederse devreder'], 81.6],
      [['Sadeleşmiş kesrin paydası yalnızca 2 ve 5’lerden oluşuyorsa biter'], 82.6], [[fr(1, 3), ' = ', dec(1, 3), '     ', fr(3, 4), ' = 0,75'], 83.6, true]].forEach(([items, t0, hot], i) => {
      const al = seg(t, t0, t0 + 0.4) * a; if (al <= 0) return;
      f.expr(ctx, items, S.x, S.y[i], S.s * (i === 3 ? 1.2 : 1), { alpha: al, w: S.w, halo: true, color: hot ? A.amber : undefined });
    });
  }

  LI.fireworks = function (ctx, env, t) {
    const k = seg(t, 84.4, 86.4);
    if (k <= 0 || t >= 91) return;
    const n = F().nokta(t, env), C = [n.x, n.y - 170];
    [30, 60, 90, 120, 150].forEach((d, i) => {
      const r = 150 + 30 * Math.sin(t * 2 + i);
      A.arc(ctx, C, r, d - 12, d + 12, { p: seg(k, i * 0.12, i * 0.12 + 0.4), alpha: 0.8 * (1 - seg(t, 90.2, 91)), w: 6, seed: 80 + i });
    });
  };

  LI.world = function (ctx, env, t) { context(ctx, env, t); intro(ctx, env, t); division(ctx, env, t); table(ctx, env, t); predict(ctx, env, t); summary(ctx, env, t); };

  function camera(t, env) {
    const L = KD.L(env);
    return LI.Camera.breathe(LI.Camera.track([
      [0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [3.0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [4.8, KD.cam(env, { zoom: 1 })],
    ], t), t, 0.5);
  }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 1, start: 0, end: 10, name: 'A fraction is a division', nameTr: 'Kesir bir bölmedir', concept: '3/4 = 3 ÷ 4', conceptTr: '3/4 = 3 ÷ 4', render });
})(window.LI = window.LI || {});
