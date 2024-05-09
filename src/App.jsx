import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import Header from "./components/Header";
import PostController from "./pages/Post/PostController";
import ListController from "./pages/List/ListController";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PostController />} />
      <Route path="/add-post" element={<ListController />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
