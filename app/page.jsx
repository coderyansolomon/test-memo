import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ComponentOne />
      <ComponentTwo />
    </main>
  );
}
