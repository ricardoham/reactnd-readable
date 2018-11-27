import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/dashboard/dashboard';
import PostsDetailsContainer from '../components/posts-list/posts-details/posts-details-container';
import PostNewContainer from '../components/posts-list/post-new/post-new-container';
import CommentsNewContainer from '../components/comments/comments-new/comments-new-container';
import CommentsEditContainer from '../components/comments/comments-new/comments-edit-container';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/:category" component={Dashboard} />
    <Route path="/post/new" exact component={PostNewContainer} />
    <Route path="/:category/:id" exact component={PostsDetailsContainer} />
    <Route path="/:category/post-edit/:id/" component={PostNewContainer} />
    <Route path="/:category/:id/comments-new" component={CommentsNewContainer} />
    <Route exact path="/:category/:id/comments-edit" component={CommentsEditContainer} />
  </Switch>
);

export default Routes;
