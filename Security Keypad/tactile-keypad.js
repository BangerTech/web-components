import { r as d, j as e, c as n, R as p, a as f } from "./utils-BMb77LDV.js";
import { c as o, T as i } from "./createLucideIcon-uHuL4UE3.js";
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g = [
  [
    "path",
    {
      d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
      key: "1yo7s0"
    }
  ],
  ["path", { d: "m12 9 6 6", key: "anjzzh" }],
  ["path", { d: "m18 9-6 6", key: "1fp51s" }]
], u = o("delete", g);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], j = o("shield-check", y);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], N = o("shield", k);
function b() {
  const [s, t] = d.useState(""), [c, h] = d.useState("DISARMED"), r = (a) => {
    s.length < 4 && t((l) => l + a);
  }, x = () => {
    t("");
  }, m = () => {
    s === "1234" && h((a) => a === "ARMED" ? "DISARMED" : "ARMED"), t("");
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "p-6 rounded-[2rem] bg-surface-darker shadow-rim flex flex-col gap-6 w-full max-w-sm", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative w-full h-24 rounded-xl bg-surface-dark shadow-soft-in overflow-hidden flex flex-col items-center justify-center border border-white/5", children: [
      /* @__PURE__ */ e.jsx("div", { className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3 z-10 mb-2", children: [
        c === "ARMED" ? /* @__PURE__ */ e.jsx(j, { className: "w-5 h-5 text-tech-orange animate-pulse" }) : /* @__PURE__ */ e.jsx(N, { className: "w-5 h-5 text-tech-blue" }),
        /* @__PURE__ */ e.jsx("span", { className: n(
          "font-tech text-3xl tracking-widest font-bold text-glow-blue",
          c === "ARMED" ? "text-tech-orange text-glow-orange" : "text-tech-blue"
        ), children: c })
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: "flex gap-3 h-3", children: [...Array(4)].map((a, l) => /* @__PURE__ */ e.jsx(
        "div",
        {
          className: n(
            "w-3 h-3 rounded-full transition-all duration-300",
            l < s.length ? "bg-white shadow-[0_0_5px_white]" : "bg-white/10"
          )
        },
        l
      )) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9].map((a) => /* @__PURE__ */ e.jsx(
        i,
        {
          label: a.toString(),
          variant: "keycap",
          className: "h-16 text-xl font-tech",
          onClick: () => r(a.toString())
        },
        a
      )),
      /* @__PURE__ */ e.jsx(
        i,
        {
          icon: /* @__PURE__ */ e.jsx(u, { className: "w-5 h-5" }),
          variant: "keycap",
          className: "h-16 text-red-400",
          onClick: x
        }
      ),
      /* @__PURE__ */ e.jsx(
        i,
        {
          label: "0",
          variant: "keycap",
          className: "h-16",
          onClick: () => r("0")
        }
      ),
      /* @__PURE__ */ e.jsx(
        i,
        {
          label: "ENT",
          variant: "keycap",
          className: n("h-16", c === "ARMED" ? "text-tech-blue" : "text-tech-orange"),
          active: !0,
          onClick: m
        }
      )
    ] })
  ] });
}
class v extends HTMLElement {
  setConfig(t) {
    this._config = t;
  }
  set hass(t) {
    this._hass = t, this.render();
  }
  render() {
    this.root || (this.root = p.createRoot(this)), this.root.render(
      /* @__PURE__ */ e.jsx(f.StrictMode, { children: /* @__PURE__ */ e.jsx("div", { style: { padding: "16px", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ e.jsx(b, {}) }) })
    );
  }
}
customElements.define("tactile-keypad-card", v);
