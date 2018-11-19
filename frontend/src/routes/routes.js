import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsListContainer from '../components/posts-list/posts-list-container';
import PostsDetailsContainer from '../components/posts-list/posts-details/posts-details-container';
import PostNewContainer from '../components/posts-list/post-new/post-new-container';
import PostNew from '../components/posts-list/post-new/post-new';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PostsListContainer} />
    <Route path="/post-new" component={PostNewContainer} />
    <Route path="/:category/:id" exact component={PostsDetailsContainer} />
    <Route path="/:category/post-edit/:id/" component={PostNewContainer} />
  </Switch>
);

export default Routes;
