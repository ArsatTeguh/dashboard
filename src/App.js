import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/dashboard";
import User from "./component/menu/user";
import UserManagement from "./component/menu/usersManagement";
import { DataContext } from "./store/utils";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <DataContext>
        <Dashboard> 
          <Routes>
            <Route path="/dashboard" element={<User />} />
            <Route path="/usermanagement" element={<UserManagement />} />
          </Routes>
          </Dashboard>
        </DataContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
