import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";

import { MainPage } from "./pages/MainPage";
import { ActionChoice } from "./pages/ActionChoice";
import { About } from "./pages/About";

interface ActionState {
  actionMark: string[];
  difficulty: string;
  count: string;
}

interface ActionTaskContextType {
  action: ActionState;
  setAction: React.Dispatch<React.SetStateAction<ActionState>>;
}

export const ActionTaskContext = createContext({
  action: {
    actionMark: ["+"],
    difficulty: "1",
    count: "5",
  },
  setAction: (action: ActionState) => {},
});

function App() {
  const [action, setAction] = useState<ActionState>({
    actionMark: ["+"],
    difficulty: "1",
    count: "5",
  });

  const context: ActionTaskContextType = { action, setAction };
  return (
    <div className="App">
      <div className="container">
        <Header />
        <ActionTaskContext.Provider value={context}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/choice" element={<ActionChoice />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ActionTaskContext.Provider>
      </div>
    </div>
  );
}

export default App;
