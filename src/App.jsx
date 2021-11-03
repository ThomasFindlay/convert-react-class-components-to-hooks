import { useState } from "react";
import "./App.css";
import ManagingStateClass from "./components/managing-state/ManagingStateClass.jsx";
import ManagingStateHooks from "./components/managing-state/ManagingStateHooks.jsx";
import StateChangesClass from "./components/state-changes/StateChangesClass.jsx";
import StateChangesHooks from "./components/state-changes/StateChangesHooks.jsx";
import FetchingDataClass from "./components/fetching-data/FetchingDataClass.jsx";
import FetchingDataHooks from "./components/fetching-data/FetchingDataHooks.jsx";

import CleanupClass from "./components/cleanup/CleanupClass.jsx";
import CleanupHooks from "./components/cleanup/CleanupHooks.jsx";

function App() {
  return (
    <div className="App">
      <div className="section">
        <ManagingStateClass />
        <ManagingStateHooks />
      </div>
      <div className="section">
        <StateChangesClass />
        <StateChangesHooks />
      </div>
      <div className="section">
        <FetchingDataClass />
        <FetchingDataHooks />
      </div>
      <div className="section">
        <CleanupClass />
        <CleanupHooks />
      </div>
    </div>
  );
}

export default App;
