var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5O7YCF2W.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("body", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] }) })
  ] });
}
var Layout = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Link, { to: "/", prefetch: "intent", className: "text-2xl font-semibold m-5", children: [
    "Movie",
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-teal-500", children: "DB" })
  ] }) }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("main", { children })
] });

// app/routes/movie.$id.comments.tsx
var movie_id_comments_exports = {};
__export(movie_id_comments_exports, {
  action: () => action,
  default: () => Comments,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
db = new import_client.PrismaClient();

// app/routes/movie.$id.comments.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
async function loader({ params }) {
  let data = await db.comment.findMany({
    where: {
      movieId: params.id
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return (0, import_node2.json)({ data });
}
async function action({ request }) {
  let formData = await request.formData();
  if (!formData.has("comment") || formData.get("comment") === "")
    return new Response("Missing comment", {
      status: 400
    });
  let data = await db.comment.create({
    data: {
      message: formData.get("comment"),
      movieId: formData.get("id")
    }
  });
  return (0, import_node2.json)({ data });
}
function Comments() {
  let { id } = (0, import_react3.useParams)(), { data } = (0, import_react3.useLoaderData)(), navigation = (0, import_react3.useNavigation)(), readableDateWithTime = (/* @__PURE__ */ new Date()).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "rounded-lg border p-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "text-xl font-semibold text-center mb-5", children: "Tu opini\xF3n" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react3.Form, { method: "POST", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { name: "comment", className: "w-full border border-teal-500 rounded-lg p-2" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { type: "hidden", name: "id", value: id }),
        navigation.state === "submitting" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "submit", disabled: !0, className: "bg-teal-500 px-4 py-2 rounded-lg text-white w-full", children: "Enviando..." }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "submit", className: "bg-teal-500 px-4 py-2 rounded-lg text-white w-full", children: "Enviar comentario" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "mt-5 flex flex-col gap-y-3", children: data.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex flex-row mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: comment.message }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "mx-2", children: "-" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("small", { className: "font-semibold", children: readableDateWithTime })
      ] }, comment.id)) })
    ] })
  ] });
}

// app/routes/movie.$id.tsx
var movie_id_exports = {};
__export(movie_id_exports, {
  default: () => MovieId,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_react_router = require("react-router"), import_jsx_runtime4 = require("react/jsx-runtime");
async function loader2({ params }) {
  let { id } = params, req = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTU1ODI0NWIwNDM5NGE0YzhkYjQ4YTQ1NzI3NGE3NyIsInN1YiI6IjY1M2I3YTA0MTA5Y2QwMDEyY2ZlNGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_DVjeHhiLhioZ8i9gDwyerfJxdx-CXibkwDtkStRDI"
    }
  });
  return (0, import_node3.json)(await req.json());
}
function MovieId() {
  let movie = (0, import_react_router.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "min-h-screen p-10 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "img",
      {
        src: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        alt: "Movie poster",
        className: "h-[40vh] object-cover w-full rounded-xl"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "text-4xl font-bold text-center pt-5", children: movie.title }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-col md:flex-row gap-x-10 gap-y-10 mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-full md:w-1/2 font-semibold", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "underline", children: "Homepage:" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react4.Link, { to: movie.homepage, target: "_blank", children: [
            " ",
            "Link"
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "underline", children: "Idioma original:" }),
          " ",
          movie.original_language
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "underline", children: "Sinopsis:" }),
          " ",
          movie.overview
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "underline", children: "Fecha de estreno:" }),
          " ",
          movie.release_date
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "w-full md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react4.Outlet, {}) })
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta
});
var import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime"), meta = () => [
  { title: "Remix Demo App" },
  { name: "description", content: "Welcome to Remix!" }
];
async function loader3({}) {
  let req = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTU1ODI0NWIwNDM5NGE0YzhkYjQ4YTQ1NzI3NGE3NyIsInN1YiI6IjY1M2I3YTA0MTA5Y2QwMDEyY2ZlNGViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g_DVjeHhiLhioZ8i9gDwyerfJxdx-CXibkwDtkStRDI"
      }
    }
  );
  return (0, import_node4.json)(await req.json());
}
function Index() {
  let movies = (0, import_react5.useLoaderData)().results;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "bg-white py-6 sm:py-8 lg:py-12", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mx-auto max-w-screen-2xl px-4 md:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mb-10 md:mb-16", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl", children: "Top Trending Movies" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8", children: movies.map((movie) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-col overflow-hidden rounded-lg border bg-white ", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Link, { to: `/movie/${movie.id}/comments`, prefetch: "intent", className: "group relative block h-48 overflow-hidden bg-gray-100 md:h-64", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, alt: "Movie poster", className: "absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex flex-1 flex-col p-4 sm:p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "mb-2 text-lg font-semibold text-gray-800", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Link, { to: `/movie/${movie.id}/comments`, prefetch: "intent", className: "transition duration-100 hover:text-indigo-500", children: movie.title }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-gray-500 line-clamp-3", children: movie.overview })
      ] })
    ] }, movie.id)) })
  ] }) });
}

// app/routes/hello.tsx
var hello_exports = {};
__export(hello_exports, {
  default: () => Hello
});
var import_jsx_runtime6 = require("react/jsx-runtime");
function Hello() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { children: "Hello World" }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EH6YTP3Y.js", imports: ["/build/_shared/chunk-QGNQXKGO.js", "/build/_shared/chunk-DWFMXSZ6.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YIGRHBWJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-GW7OOZ6G.js", imports: ["/build/_shared/chunk-YD3KDPF7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/hello": { id: "routes/hello", parentId: "root", path: "hello", index: void 0, caseSensitive: void 0, module: "/build/routes/hello-F3NBFECC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/movie.$id": { id: "routes/movie.$id", parentId: "root", path: "movie/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/movie.$id-5MVJTOV7.js", imports: ["/build/_shared/chunk-YD3KDPF7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/movie.$id.comments": { id: "routes/movie.$id.comments", parentId: "routes/movie.$id", path: "comments", index: void 0, caseSensitive: void 0, module: "/build/routes/movie.$id.comments-DZYSUMQX.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "aa1b755a", hmr: void 0, url: "/build/manifest-AA1B755A.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/movie.$id.comments": {
    id: "routes/movie.$id.comments",
    parentId: "routes/movie.$id",
    path: "comments",
    index: void 0,
    caseSensitive: void 0,
    module: movie_id_comments_exports
  },
  "routes/movie.$id": {
    id: "routes/movie.$id",
    parentId: "root",
    path: "movie/:id",
    index: void 0,
    caseSensitive: void 0,
    module: movie_id_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/hello": {
    id: "routes/hello",
    parentId: "root",
    path: "hello",
    index: void 0,
    caseSensitive: void 0,
    module: hello_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
