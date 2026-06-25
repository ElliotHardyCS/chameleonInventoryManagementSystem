import NavBar from "../components/navigationBar";
import Footer from "../components/footer";
import ContactUs from "../components/contactUs";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <ContactUs />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}