import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import Forcast from '../containers/Forcast';
import Detail from '../components/Detail';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="forcast/:city" component={Forcast} />
			<Route path="detail/:city" component={Detail} />
		</Route>
	</Router>
);

export default routes; 