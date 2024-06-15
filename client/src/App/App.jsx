import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Inventory } from "../Pages/Inventory/Inventory";
import { SalesOrder } from "../Pages/SalesOrder/SalesOrder";
import { Help } from "../Pages/Help/Help";
import { Settings } from "../Pages/Settings/Settings";
import { Supliers } from "../Pages/Supliers/Supliers";
import { Reports } from "../Pages/Reports/Reports";
import { Layout } from "../Components/Layout/Layout";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/salesorder" element={<SalesOrder />} />
        <Route path="/supliers" element={<Supliers />} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/help" element={<Help />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Dashboard />} />
       
      </Routes>
      </Layout>
  
      {/* Add a Routes component with the following routes: */}
      
    </div>
  );
}

export default App;
