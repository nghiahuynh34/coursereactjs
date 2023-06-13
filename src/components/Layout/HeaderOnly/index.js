import Header from "../components/Header";
import Footer from "../DefaultLayout/Footer";
function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default HeaderOnly