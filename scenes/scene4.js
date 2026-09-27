/* SAHNE 4 — ÖRÜNTÜ (50–70 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 4, start: 50, end: 70, name: 'The pattern', nameTr: 'Örüntü', concept: 'Only 2s and 5s in the denominator', conceptTr: 'Paydada yalnızca 2 ve 5', render });
})(window.LI = window.LI || {});
