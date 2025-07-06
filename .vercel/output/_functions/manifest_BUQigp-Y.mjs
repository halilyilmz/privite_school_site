import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_CTXQ3AQ_.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B8Fr_TCt.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ibrahim/OneDrive/Masa%C3%BCst%C3%BC/wep%20projeleri/alman_site/alman-syte/","cacheDir":"file:///C:/Users/ibrahim/OneDrive/Masa%C3%BCst%C3%BC/wep%20projeleri/alman_site/alman-syte/node_modules/.astro/","outDir":"file:///C:/Users/ibrahim/OneDrive/Masa%C3%BCst%C3%BC/wep%20projeleri/alman_site/alman-syte/dist/","srcDir":"file:///C:/Users/ibrahim/OneDrive/Masa%C3%BCst%C3%BC/wep%20projeleri/alman_site/alman-syte/src/","publicDir":"file:///C:/Users/ibrahim/OneDrive/Masa%C3%BCst%C3%BC/wep%20projeleri/alman_site/alman-syte/public/","buildClientDir":"file:///C:/Users/ibrahim/OneDrive/Masa%C3%BCst%C3%BC/wep%20projeleri/alman_site/alman-syte/dist/client/","buildServerDir":"file:///C:/Users/ibrahim/OneDrive/Masa%C3%BCst%C3%BC/wep%20projeleri/alman_site/alman-syte/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit-contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-contact.js","pathname":"/api/submit-contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ibrahim/OneDrive/Masaüstü/wep projeleri/alman_site/alman-syte/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/submit-contact@_@js":"pages/api/submit-contact.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/ibrahim/OneDrive/Masaüstü/wep projeleri/alman_site/alman-syte/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_6TFIzSfv.mjs","\u0000@astrojs-manifest":"manifest_BUQigp-Y.mjs","C:/Users/ibrahim/OneDrive/Masaüstü/wep projeleri/alman_site/alman-syte/src/components/teachers.jsx":"_astro/teachers.Cb8aYT-N.js","C:/Users/ibrahim/OneDrive/Masaüstü/wep projeleri/alman_site/alman-syte/src/components/event_carousel.jsx":"_astro/event_carousel.DDb3fmNe.js","C:/Users/ibrahim/OneDrive/Masaüstü/wep projeleri/alman_site/alman-syte/src/components/signup.jsx":"_astro/signup.BV3eljpy.js","@astrojs/react/client.js":"_astro/client.BPIbHqJh.js","C:/Users/ibrahim/OneDrive/Masaüstü/wep projeleri/alman_site/alman-syte/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.DN4oSqWe.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.CsLG5_Qr.css","/favicon.svg","/_astro/browser.DNbOK0Tw.js","/_astro/client.BPIbHqJh.js","/_astro/event_carousel.DDb3fmNe.js","/_astro/image-url.umd.DdgdPl-q.js","/_astro/index.BVOCwoKb.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/signup.BV3eljpy.js","/_astro/stegaEncodeSourceMap.DN4oSqWe.js","/_astro/teachers.Cb8aYT-N.js","/images/bina_3.png","/images/bina_4.png","/images/ilk.jpg","/images/ogr_1.png","/images/ogr_2.png","/images/ogr_3.png","/images/ogr_4.png","/images/ten_2.png","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"hL6MT0oxRMyXBI2k5+rkLkM37aQqQGG2viHc29w/vGE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
