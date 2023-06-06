import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import {Home,About,NotFound,User} from "./pages"
import { GithubProvider } from "./components/context/github/GuthubContext";
import {AlertProvider} from "./components/context/alert/AlertContext"
import Alert from "./components/layout/Alert";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
          <Alert/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/notfound" element={<NotFound/>}/>
            <Route path="/user/:login" element={<User/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
