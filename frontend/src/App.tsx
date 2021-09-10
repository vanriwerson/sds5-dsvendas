import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

//import React from 'react'; em desuso a partir da versão 17 do React
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá, mundo!</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
