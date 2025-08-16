import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store/store";
import queryClient from "./config/reactQuery";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/CartPage";
import Success from "./pages/Success/Success";
import { Container } from "./components/shared/Container/Container";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Router>
          <Container>
            <div className="App">
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/carrinho" element={<Cart />} />
                  <Route path="/sucesso" element={<Success />} />
                </Routes>
              </main>
            </div>
          </Container>
        </Router>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
