import css from './App.module.css';
import Sidebar from "./components/Sidebar";
// import NavBarSimple from "./components/NavBarSimple";
import NavBarForm from "./components/NavBarForm";
import ContentAPI from './components/ContentAPI';
// import Content from "./components/Content";
// import ContentHooks from './components/ContentHooks';


function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      {/* <NavBarSimple /> */}
      <NavBarForm />
      {/* <Content /> */}
      {/* <ContentHooks /> */}
      <ContentAPI />
    </div>
  );
}

export default App;