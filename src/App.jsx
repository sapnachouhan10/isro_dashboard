import { Outlet } from "react-router";
import "./App.scss";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="page-container">
      <Toaster />
      <Outlet />
    </div>
  );
}

export default App;
