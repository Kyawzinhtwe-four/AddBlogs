import { Route, Routes } from "react-router";
import Header from "./Components/Header";
import Home from "./Components/Home";
import AddForm from "./Components/AddForm";
import NotFound from "./Components/NotFound";
import BlogDetail from "./Components/BlogDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs/:blogId" element={<BlogDetail />} />
        <Route path="add-blogs" element={<AddForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
