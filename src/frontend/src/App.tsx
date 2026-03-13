import BottomNav from "@/components/BottomNav";
import WhatsAppFab from "@/components/WhatsAppFab";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/CartContext";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useNavigate,
} from "@tanstack/react-router";

import About from "@/pages/About";
import Cart from "@/pages/Cart";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Knowledge from "@/pages/Knowledge";
import Offers from "@/pages/Offers";
import ProductDetail from "@/pages/ProductDetail";
import Shop from "@/pages/Shop";
import SkinGuide from "@/pages/SkinGuide";

// Root layout
const rootRoute = createRootRoute({
  component: () => (
    <CartProvider>
      <div className="app-container">
        <Outlet />
        <BottomNav />
        <WhatsAppFab />
      </div>
      <Toaster richColors position="top-center" />
    </CartProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/shop",
  component: Shop,
});
const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$id",
  component: ProductDetail,
});
const skinGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/skin-guide",
  component: SkinGuide,
});
const knowledgeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/knowledge",
  component: Knowledge,
});
const offersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/offers",
  component: Offers,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: Cart,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  shopRoute,
  productRoute,
  skinGuideRoute,
  knowledgeRoute,
  offersRoute,
  aboutRoute,
  contactRoute,
  cartRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export { Link, useNavigate };

export default function App() {
  return <RouterProvider router={router} />;
}
