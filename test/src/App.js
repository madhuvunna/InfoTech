import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ReduxandReduxSaga/store';
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/DashboardPage';
import MembersPage from './Components/MembersPage';

const App = () => (
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/login" component={LoginPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/members" component={MembersPage} />
                <Route path="/" component={LoginPage} />
            </Routes>
        </Router>
    </Provider>
);

export default App;
