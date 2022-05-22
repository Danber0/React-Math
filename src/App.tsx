import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Header } from "./components/Header";

import { MainPage } from "./pages/MainPage";
import { ActionChoice } from "./pages/ActionChoice";
import { About } from "./pages/About";
import { SolveTasks } from "./pages/SolveTasks";
import { Result } from "./pages/Result";
import { useAppSelector } from "./hooks";
import { setClearTask, setResultFalse } from "./store/actions/tasks";
import { useDispatch } from "react-redux";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const timerRef: { current: NodeJS.Timeout | number } = useRef(0);
  const [timer, setTimer] = useState(0);
  const { tasks, showResultTask } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    if (location.pathname !== "/result") {
      dispatch(setResultFalse());
    }
    if (location.pathname !== "/solve") {
      dispatch(setClearTask());
    }
    if (location.pathname === "/solve") {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          return prev + 1;
        });
      }, 1000);
    } else {
      if (location.pathname === "/result") {
        clearInterval(timerRef.current as NodeJS.Timeout);
      } else {
        clearInterval(timerRef.current as NodeJS.Timeout);
        setTimer(0);
      }
    }
  }, [dispatch, location.pathname]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/choice" element={<ActionChoice />} />
          <Route
            path="/solve"
            element={
              tasks.length ? (
                <SolveTasks timer={timer} />
              ) : (
                <Navigate to="/choice" />
              )
            }
          />
          <Route
            path="/result"
            element={
              showResultTask ? (
                <Result time={timer} />
              ) : (
                <Navigate to="/choice" />
              )
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
