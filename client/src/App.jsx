import { BrowserRouter, Route } from "react-router-dom";

import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Route path="/" exact component={StreamList}></Route>
        <Route path="/streams/new" component={StreamCreate}></Route>
        <Route path="/streams/edit" component={StreamEdit}></Route>
        <Route path="/streams/delete" component={StreamDelete}></Route>
        <Route path="/streams/show" component={StreamShow}></Route>
      </Container>
    </BrowserRouter>
  );
}

export default App;
