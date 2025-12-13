import { R as n, j as e, a as c } from "./utils-BMb77LDV.js";
import { c as i, T as a } from "./createLucideIcon-uHuL4UE3.js";
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h = [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
], d = i("lightbulb", h);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], r = i("menu", l);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f = [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
], p = i("power", f);
class u extends HTMLElement {
  setConfig(t) {
    this._config = t;
  }
  set hass(t) {
    this._hass = t, this.render();
  }
  render() {
    this.root || (this.root = n.createRoot(this));
    const t = this._config.name || "Button", o = this._config.icon || "power";
    let s = p;
    o === "lightbulb" && (s = d), o === "menu" && (s = r), this.root.render(
      /* @__PURE__ */ e.jsx(c.StrictMode, { children: /* @__PURE__ */ e.jsx("div", { style: { padding: "16px", display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ e.jsx(
        a,
        {
          label: t,
          icon: /* @__PURE__ */ e.jsx(s, { className: "w-6 h-6" }),
          active: this._hass?.states[this._config.entity]?.state === "on",
          onClick: () => {
            this._config.entity && this._hass.callService("homeassistant", "toggle", {
              entity_id: this._config.entity
            });
          }
        }
      ) }) })
    );
  }
}
customElements.define("tactile-button-card", u);
