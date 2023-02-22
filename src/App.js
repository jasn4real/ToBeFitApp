import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Form from "./pages/Form";
import Nav from "./Components/Nav";
import Shop from "./pages/Shop";
import "./Styling/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Index />} />
          <Route path="/exercises/:id" element={<Show />} />
          <Route path="/exercises/:id/edit" element={<Edit />} />
          <Route path="/exercises/new" element={<Form />} />
          <Route path="/shopSupplements" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
