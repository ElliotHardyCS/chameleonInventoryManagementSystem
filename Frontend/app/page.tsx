import NavBar from "./components/navigationBar";
import HomePage from "./components/homePage";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div>
        <HomePage />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
