import logo from './logo.svg';
import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import ListTask from './todo/ListTask'
import FilterText from "./todo/FilterText"
import TaskEdit from "./todo/TaskEdit"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/tasks/:task_id">
                    <TaskEdit />
                </Route>
                <Route path="/">
                    <FilterText />
                    <ListTask />
                </Route>
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
