import "./App.css";
import {
  Header,
  Hero,
  Categories,
  Popular,
  BottomTabs,
} from "./components/index";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* HERO */}
      <Hero />

      {/* CATEGORY */}
      <Categories />

      <Popular />

      <BottomTabs />
    </div>
  );
}

export default App;
