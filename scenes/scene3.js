/* SAHNE 3 — TEKRAR EDEN (30–50 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 3, start: 30, end: 50, name: 'Repeating', nameTr: 'Tekrar eden', concept: '1 ÷ 3 and 2 ÷ 11', conceptTr: '1 ÷ 3 ve 2 ÷ 11', render });
})(window.LI = window.LI || {});
