import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsListContainer from '../components/posts-list/posts-list-container';
import PostsDetailsContainer from '../components/posts-list/posts-details/posts-details-container';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PostsListContainer} />
    <Route path="/post" component={PostsDetailsContainer} />
  </Switch>
);

export default Routes;
