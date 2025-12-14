import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import HomePage from "./router/HomePage";
import Card from "./router/Card";
export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/game"
        element={
          <Layout>
            <Card />
          </Layout>
        }
      />
    </Routes>
  );
}
