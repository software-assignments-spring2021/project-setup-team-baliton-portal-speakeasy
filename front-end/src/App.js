import './App.css';
import MainPage from './MainPage';
import About from './About'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Chatroom from './Chatroom'
import EasterEgg from './EasterEgg'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/easter">
        <Toplog />
          <EasterEgg/>
          <Bottom />
        </Route>
        <Route path="/taglist">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/tag">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/recent">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/createcall">
          <Toplog />
          NOT IMPLEMENTED YET
          <Bottom />
        </Route>
        <Route path="/chatroom">
          <Toplog />
          <Chatroom/>
          <Bottom />
        </Route>
        <Route path="/about">
          <Toplog />
          <About />
        </Route>
        <Route path="/">
          <Toplog />
          <MainPage />
          <Bottom />
        </Route>
      </Switch>
     </Router>
  );
}

function Linker(prop) {
  return (
    <div align = {prop.ali}>
      <Link variant = {prop.var} to = {prop.action} className = "buttons" id = {prop.id}>  {prop.name}
      </Link>
    </div>
  );
}


export const Toplog = (props) => {
  return (
    <div id = "top">
      <div id = "nickname">
        <Textbox mess = "Nickname: " tag = "nickname" name = "confirm"> </Textbox>
      </div>
      <Linker ali = "left" var = "primary" action = "/easter" name = "Speakeasy" id = 'au'> </Linker>

    </div>
  );
}



function Textbox(prop) {
  return (
    <div align = {prop.ali}>
     <form action="/callPage">
       <label form="tag"><b>{prop.mess}</b></label>
       <input type="text" id={prop.tag} name = {prop.tag}/><br/><br/>
       <input type="submit" value= {prop.name} id = "submitcall"/>
     </form>
    </div>
  );
}

function Bottom() {
  return (
    <div id = "bottom">
      <Linker ali = "center" var = "primary" action = "/about" name = "About us" id = 'au'> </Linker>
      <h2> All right reserved 2021 </h2>
    </div>
  );
}

export default App;
export {Linker , Textbox};
