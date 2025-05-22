import AppStyle from "./App.module.css";
import Header from "./Components/Header/Header";
import Form from "./Components/Main/Form/Form";
function App() {
  return (
    <div className={AppStyle.App_HERO}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
