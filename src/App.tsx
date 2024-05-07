import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/rootLayout";
import AdminLayout from "./layout/adminLayout";
// import BoxChat from "./pages/client/chat/boxChat";

function App() {
  return (
    <>
      <Routes>
        {/* CLient */}
        <Route path="/" element={<RootLayout />}></Route>
        {/* <Route path="/chat" element={<BoxChat />}></Route> */}
        {/* Admin */}
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
