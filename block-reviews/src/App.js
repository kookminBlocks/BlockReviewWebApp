import React from "react";
import WriteReview from "./components/review/WriteReview";
import { init, web3, account } from "./config-web3";
import Detail from "./components/review/Detail";

function App() {
  return (
    <div>
      <button onClick={init}>Init Test</button>
      <Detail />
    </div>
  );
}

export default App;
