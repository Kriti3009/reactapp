import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pages from "./pages/Pages";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Pages />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
