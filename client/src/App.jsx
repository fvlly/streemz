import { Router, Route } from "react-router-dom";

import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Container>
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/new" component={StreamCreate}></Route>
        <Route path="/streams/edit/:id" component={StreamEdit}></Route>
        <Route path="/streams/delete/:id" component={StreamDelete}></Route>
        <Route path="/streams/show/:id" component={StreamShow}></Route>
      </Container>
    </Router>
  );
}

export default App;
