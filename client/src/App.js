// import "./App.css";
import AssignRoles from "./AssignRoles";
import Home from "./pages/Home";
import AddMed from "./pages/AddMed";
import Supply from "./pages/Supply";
import Track from "./pages/Track";
import Layout from "./Components/Layout/Layout";
import Service from "./pages/Service";
import Create from "./pages/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./Components/NavBar";
import CreateForm from "./Components/Create-Form";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index exact element={<Home />} />
            <Route path="/roles" element={<AssignRoles />} />
            <Route path="/addmed" element={<AddMed />} />
            <Route path="/supply" element={<Supply />} />
            <Route path="/track" element={<Track />} />
            <Route path="/service" element={<Service />} />

            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>

          <Route path="/create" element={<CreateForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
