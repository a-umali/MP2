
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
        <div>
          <h1>Hello, Next.js!</h1>
          <p>Paragraph</p>
          <button>Click me!</button>
        </div>
    </main>
  );
};
