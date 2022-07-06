import React, { useState } from "react";
import Matches from "./pages/Matches";
import Perfis from "./pages/Perfis";
import Header from "./components/Hender";




function App() {
  const [pagina, setPagina] = useState(true)


  const trocarTela = () => {
    setPagina(!pagina)
  }

  const trocaPagina = () => {
    switch (pagina) {
      case true:
        return <Perfis />
      case false:
        return <Matches />

    }

  };


  return (
    <div>
      <Header trocarTela={trocarTela} />
      {trocaPagina()}
    </div>

  );
}

export default App;
