import { r as l, j as e, c as h, R as _, a as N } from "./utils-BMb77LDV.js";
function E({ value: f = 22, onChange: n }) {
  const [a, d] = l.useState(f), [o, g] = l.useState(!1), u = l.useRef(null), c = 16, p = 32, v = (s) => {
    g(!0), x(s);
  }, x = (s) => {
    if (!u.current) return;
    const t = u.current.getBoundingClientRect(), i = t.left + t.width / 2, m = t.top + t.height / 2, j = s.clientX - i, y = s.clientY - m;
    let r = Math.atan2(y, j) * (180 / Math.PI);
    r > 135 && r < 180 && (r = 135), r < -135 && r > -180 && (r = -135);
    const T = (Math.max(-135, Math.min(135, r)) + 135) / 270, b = c + T * (p - c);
    d(Math.round(b * 10) / 10), n && n(Math.round(b * 10) / 10);
  };
  l.useEffect(() => {
    const s = (i) => {
      o && x(i);
    }, t = () => {
      g(!1);
    };
    return window.addEventListener("pointermove", s), window.addEventListener("pointerup", t), () => {
      window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", t);
    };
  }, [o]);
  const w = (a - c) / (p - c) * 270 - 135;
  return /* @__PURE__ */ e.jsxs("div", { className: "relative w-80 h-80 rounded-full bg-surface-darker shadow-rim p-2 flex items-center justify-center select-none touch-none", children: [
    /* @__PURE__ */ e.jsx("div", { className: "absolute inset-4 rounded-full bg-surface-dark shadow-soft-out flex items-center justify-center pointer-events-none", children: Array.from({ length: 60 }).map((s, t) => {
      if (t > 45) return null;
      const i = t / 45 * 270 - 135, m = i <= w;
      return /* @__PURE__ */ e.jsx(
        "div",
        {
          className: h(
            "absolute w-0.5 h-3 origin-bottom transition-colors duration-300",
            m ? "bg-tech-orange shadow-[0_0_5px_var(--color-tech-orange)]" : "bg-gray-800"
          ),
          style: {
            height: "12px",
            top: "0px",
            left: "50%",
            transformOrigin: "50% 144px",
            transform: `translateX(-50%) rotate(${i}deg)`
          }
        },
        t
      );
    }) }),
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        ref: u,
        onPointerDown: v,
        className: h(
          "w-56 h-56 rounded-full bg-surface-dark shadow-soft-out flex items-center justify-center relative z-10 border border-black/20 cursor-grab active:cursor-grabbing",
          o && "scale-[0.98] transition-transform duration-100"
        ),
        children: [
          /* @__PURE__ */ e.jsx("div", { className: "w-full h-full rounded-full bg-gradient-to-br from-white/5 to-transparent absolute inset-0 pointer-events-none" }),
          /* @__PURE__ */ e.jsx(
            "div",
            {
              className: h(
                "absolute inset-0 rounded-full",
                !o && "transition-transform duration-300 ease-out"
              ),
              style: { transform: `rotate(${w}deg)` },
              children: /* @__PURE__ */ e.jsx("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-tech-orange shadow-[0_0_8px_var(--color-tech-orange)] ring-1 ring-black/50" })
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center z-20 pointer-events-none", children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-[10px] text-gray-600 tracking-widest mb-1", children: "SETPOINT" }),
            /* @__PURE__ */ e.jsx("span", { className: "font-tech text-6xl font-bold text-gray-200 text-glow-blue tabular-nums leading-none", children: a.toFixed(1) }),
            /* @__PURE__ */ e.jsx("span", { className: "font-mono text-xs text-tech-blue mt-1", children: "° CELSIUS" })
          ] })
        ]
      }
    )
  ] });
}
class M extends HTMLElement {
  // 1. setConfig: HA calls this when the card is loaded with the YAML config
  setConfig(n) {
    if (!n.entity)
      throw new Error("You need to define an entity (climate.something)");
    this._config = n;
  }
  // 2. set hass: HA calls this whenever the state changes
  set hass(n) {
    this._hass = n, this.render();
  }
  // 3. Render the React Component
  render() {
    this.root || (this.root = _.createRoot(this));
    const n = this._config.entity, a = this._hass.states[n], d = a ? parseFloat(a.attributes.temperature || a.state) : 22;
    this.root.render(
      /* @__PURE__ */ e.jsx(N.StrictMode, { children: /* @__PURE__ */ e.jsx("div", { className: "tactile-card-container", style: { display: "flex", justifyContent: "center", padding: "16px" }, children: /* @__PURE__ */ e.jsx(
        E,
        {
          value: d,
          onChange: (o) => {
            this._hass.callService("climate", "set_temperature", {
              entity_id: n,
              temperature: o
            });
          }
        }
      ) }) })
    );
  }
  // 4. Card Size (optional)
  getCardSize() {
    return 4;
  }
}
customElements.define("tactile-thermostat-card", M);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "tactile-thermostat-card",
  name: "Tactile Thermostat",
  description: "A futuristic tactile thermostat knob"
});
