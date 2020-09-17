import React from 'react';
import "./App.css";
import Tabs from "./components/Tabs"

function App() {
  return (
    <div class = "All">
      <h1>Tabs</h1>
      <Tabs>
        <div label = "Tab 1">Tab 1 details are displayed here.</div>
        <div label = "Tab 2">Tab 2 details are displayed here.</div>
        <div label = "Tab 3">Tab 3 details are displayed here.</div>
      </Tabs>
      </div>
  );
}

export default App;
