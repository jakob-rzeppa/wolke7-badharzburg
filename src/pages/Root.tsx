import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet, ScrollRestoration } from "react-router-dom";

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </QueryClientProvider>
  );
}

export default Root;
