import{w as o}from"./compat.module-qtfPsa-n.js";import"./preact.module-0A_VdQ5M.js";const u=o.createContext({});function C(t){return e;function e(r){const n=i(r.components);return o.createElement(t,{...r,allComponents:n})}}function i(t){const e=o.useContext(u);return o.useMemo(()=>typeof t=="function"?t(e):{...e,...t},[e,t])}const f={};function m({components:t,children:e,disableParentContext:r}){let n;return r?n=typeof t=="function"?t({}):t||f:n=i(t),o.createElement(u.Provider,{value:n},e)}export{u as MDXContext,m as MDXProvider,i as useMDXComponents,C as withMDXComponents};