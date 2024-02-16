
import Main from "./section/Main";
import Sidebar from "./section/Sidebar";

const App = () => {
  return (
    <main className="bg-slate-200 w-full h-screen flex justify-between items-start gap-10 ">
      <Sidebar />
      <Main />
    </main>
  );
};

export default App;