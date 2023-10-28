import Calculator from "../components/Calculator";
import Header from "../components/Header";
import Info from "../components/Info";
import Layout from "../components/layout";

const App = () => {
  return (
    <>
      <Layout>
        <Header />
        <Calculator />
      </Layout>
      <Info />
    </>
  );
};

export default App;
