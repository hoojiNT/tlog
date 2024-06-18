import * as React from "react";
// import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  ErrorComponent,
  createRouter,
} from "@tanstack/react-router";
// import { auth } from "./utils/auth";
// import { Spinner } from "./components/Spinner";
// import { routeTree } from "./routeTree.gen";

import { useSessionStorage } from "./hooks/useSessionStorage";
import WebApp from "@twa-dev/sdk";
import { routeTree } from './routeTree.gen'
const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl`}>
      {/* <Spinner /> */}
    </div>
  ),
  defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: {
    auth: undefined!, // We'll inject this when we render
  },
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

WebApp.ready();
