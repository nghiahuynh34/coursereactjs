import Header from "../components/Header";
import Footer from "../DefaultLayout/Footer";
function WithouSidebar({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default WithouSidebar