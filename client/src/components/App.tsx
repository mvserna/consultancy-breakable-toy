// eslint-disable-next-line import/order
import { hot } from "react-hot-loader/root";
// eslint-disable-next-line import/order
import React, { FC } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { TopBar } from "./layout/TopBar";
import "../style/main.pcss";
import { SquidIndexPage } from "./squidIndex/SquidIndexPage";

const App: FC = () => {
  /*
  Defaults:
  - retry: false because we don't want to retry on network errors
  - refetchOnWindowFocus: true because we want to refetch data on window focus -- this easily hides
    bugs in development
  */
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={SquidIndexPage} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default hot(App);
