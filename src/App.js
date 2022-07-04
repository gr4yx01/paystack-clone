import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HomeLayout from "./Layout/HomeLayout";

function App() {
  return (
    <div className="app">
      <HomeLayout>
        <Header />
        <Hero />
        <Body />
      </HomeLayout>
    </div>
  );
}

export default App;
