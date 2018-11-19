import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsListContainer from '../components/posts-list/posts-list-container';
import PostsDetailsContainer from '../components/posts-list/posts-details/posts-details-container';
import PostNewContainer from '../components/posts-list/post-new.js/post-new-container';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PostsListContainer} />
    <Route path="/post-new" component={PostNewContainer} />
    <Route path="/:category/:id" component={PostsDetailsContainer} />
    <Route path="/:id/post-edit" component={PostNewContainer} />
  </Switch>
);

export default Routes;
