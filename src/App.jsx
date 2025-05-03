import Card from "./components/Card";

const App = () => {
  return (
    <main className="bg-bg-yellow min-h-screen h-full flex justify-center items-center px-10 py-5 relative">
      <Card />
      <p className="text-xs absolute text-gray-950 bottom-0">
        Challenge by{" "}
        <a className="font-bold text-gray-950" href="https://www.frontendmentor.io/" target="_blank">
          Frontend Mentor.{" "}
        </a>{" "}
        Coded by{" "}
        <a className="font-bold text-gray-950" href="https://github.com/pedrogl1990" target="_blank">
          Pedro Leite.
        </a>
      </p>
    </main>
  );
};

export default App;
