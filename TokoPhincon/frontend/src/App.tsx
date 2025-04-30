import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index.tsx";
import Layout from "./pages/layout.tsx";
import ProductsPage from "./pages/ProductPage.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import ManageProductPage from "./pages/ManageProductPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
            <Route path="manage-product" element={<ManageProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
