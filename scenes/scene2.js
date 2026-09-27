/* SAHNE 2 — KÂĞIT KALEMLE (10–30 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 2, start: 10, end: 30, name: 'On paper', nameTr: 'Kâğıt kalemle', concept: '3 ÷ 4 = 0.75', conceptTr: '3 ÷ 4 = 0,75', render });
})(window.LI = window.LI || {});
