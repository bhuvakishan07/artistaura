import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Header />

      {/* Main hero area with your 3D scene */}
      <main style={{ height: "calc(100vh - 60px)" }}>
        <Canvas
          shadows
          camera={{ position: [0, 1.5, 5], fov: 50 }}
        >
          <Experience />
        </Canvas>
      </main>

      <Footer />
    </div>
  );
}
