/* SAHNE 5 — TAHMİN ET, SINA (70–80 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 5, start: 70, end: 80, name: 'Predict and test', nameTr: 'Tahmin et, sına', concept: '7/40 and 5/12', conceptTr: '7/40 ve 5/12', render });
})(window.LI = window.LI || {});
