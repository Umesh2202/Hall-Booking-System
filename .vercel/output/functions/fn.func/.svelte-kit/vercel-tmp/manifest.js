export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.9a865050.js","imports":["_app/immutable/entry/start.9a865050.js","_app/immutable/chunks/index.0569c376.js","_app/immutable/chunks/singletons.fe833d96.js","_app/immutable/chunks/index.5dbb22dc.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.bb2b7744.js","imports":["_app/immutable/entry/app.bb2b7744.js","_app/immutable/chunks/index.0569c376.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/hallsBook",
				pattern: /^\/api\/hallsBook\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/hallsBook/_server.ts.js')
			},
			{
				id: "/api/halls",
				pattern: /^\/api\/halls\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/halls/_server.ts.js')
			},
			{
				id: "/api/users",
				pattern: /^\/api\/users\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/users/_server.ts.js')
			},
			{
				id: "/halls",
				pattern: /^\/halls\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/halls/[hall]",
				pattern: /^\/halls\/([^/]+?)\/?$/,
				params: [{"name":"hall","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/userForm",
				pattern: /^\/userForm\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
