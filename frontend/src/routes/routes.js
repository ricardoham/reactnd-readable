import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsListContainer from '../components/posts-list/posts-list-container';
import PostsDetailsContainer from '../components/posts-list/posts-details/posts-details-container';
import PostNewContainer from '../components/posts-list/post-new.js/post-new-container';
import PostEditContainer from '../components/posts-list/post-edit/post-edit-container';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PostsListContainer} />
    <Route path="/post-new" component={PostNewContainer} />
    <Route path="/:category/post-details/:id" component={PostsDetailsContainer} />
    <Route path="/:category/post-edit/:id" component={PostEditContainer} />
  </Switch>
);

export default Routes;
