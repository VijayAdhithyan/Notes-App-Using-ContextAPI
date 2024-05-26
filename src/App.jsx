import SideBar from "./components/sideBar/SideBar";
import HomePage from "./components/homePage/HomePage";
import "./App.css";
import NotesContext,{NotesDataContext} from "./components/context/NotesContext";

const App = () => {
  return (
    <>
      <SideBar />
      <NotesContext><HomePage /></NotesContext>
    </>
  );
};

export default App;
