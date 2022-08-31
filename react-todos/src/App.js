import {BrowserRouter as Router, Route, Routes, Link,} from "react-router-dom";
import Home from "./routes/Home";
import TodoListItem from "./routes/TodoListItem";

function App() {
    return(
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route TodoListItem />
          </Routes>
        </Router>
    );

}

export default App;