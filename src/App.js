import './App.css';

import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Russian from "./components/russian/russian"
import English from './components/english/english';
import Uzbek from './components/uzbek/uzbek'
import Main from './components/main/main';
import Finish from './components/finishpage/finish.page'
import FinishPageRussian from './components/finishpagerussian/finish.page.russian';
import FinishPageEnglish from './components/finishpageenglish/finish.page.english';
import NoMatch from './components/404page/NoMatch';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={() => <Main />} />
        <Route path="/russian" component={() => <Russian />} />
        <Route path="/english" component={() => <English />} />
        <Route path="/uzbek" component={() => <Uzbek />} />
        <Route path="/finishpage" component={() => <Finish />} />
        <Route path="/finishpage_russian" component={() => <FinishPageRussian />} />
        <Route path="/finishpage_english" component={() => <FinishPageEnglish />} />
        <Route path="*"><NoMatch /></Route>

      </Switch>

    </div>
  );
}

export default App;
