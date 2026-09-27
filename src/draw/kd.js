/* Shared layout + Nokta helpers for "Biter mi, Tekrar mı Eder?". */
(function (LI) {
  'use strict';
  const { clamp } = LI.E;
  LI.KD = {
    /** positions for 16:9 and 9:16 */
    L(env) {
      return env.V
        ? {
          CX: { x: 0, y: -770, s: 44, w: 960 },
          STEP: { x: 0, y: [-650, -570, -490, -410], s: 44, w: 900 },
          CALC: { x: 0, y: -170, w: 340, h: 300 },
          W: { x: 0, y: [30, 120], s: 44, w: 980 },
          TBL: { xl: 0, xr: 0, hy: -700, y0: -636, dy: 64, s: 38, w: 900, stack: 450 },
          E: { x: 0, y: [-600, -480, -360, -240], s: 46, w: 980 },
          SUM: { x: 0, y: [-580, -470, -360, -230], s: 44, w: 980 },
          nx: -360, gy: 560, s: 1.15 }
        : {
          CX: { x: 60, y: -440, s: 50, w: 1300 },
          STEP: { x: -60, y: [-320, -240, -160, -80], s: 50, w: 760 },
          CALC: { x: 570, y: -200, w: 300, h: 320 },
          W: { x: 100, y: [60, 150], s: 50, w: 1250 },
          TBL: { xl: -140, xr: 470, hy: -340, y0: -260, dy: 80, s: 42, w: 540 },
          E: { x: 110, y: [-300, -190, -80, 30], s: 54, w: 1250 },
          SUM: { x: 100, y: [-250, -150, -50, 70], s: 52, w: 1250 },
          nx: -800, gy: 262, s: 1.15 };
    },
    cam(env, o = {}) { return Object.assign({ x: env.V ? 0 : -60, y: env.V ? 60 : 0, zoom: 1, rot: 0, tilt: 1 }, o); },
    /** pupils + face toward a world point */
    look(p, target) {
      const e = LI.Nokta.eyes(p)[0];
      const dx = target[0] - e[0], dy = target[1] - e[1], d = Math.hypot(dx, dy) || 1;
      p.lookX = clamp(dx / d * 1.1, -1, 1); p.lookY = clamp(dy / d * 1.1, -1, 1);
      p.turn = clamp(dx / 900, -0.5, 0.5);
      return p;
    },
    /** a short ground stroke under Nokta */
    ground(ctx, env, x, gy) { LI.Ambient.ground(ctx, x - 360, x + 360, gy + 6, { alpha: 0.32 }); },
  };
})(window.LI = window.LI || {});
