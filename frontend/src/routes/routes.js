import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostsListContainer from '../components/posts-list/posts-list-container';
import PostsDetailsContainer from '../components/posts-list/posts-details/posts-details-container';
import PostNewContainer from '../components/posts-list/post-new/post-new-container';
import CommentsNewContainer from '../components/comments/comments-new/comments-new-container';
import CommentsEditContainer from '../components/comments/comments-new/comments-edit-container';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={PostsListContainer} />
    <Route path="/post-new" component={PostNewContainer} />
    <Route path="/:category/:id" exact component={PostsDetailsContainer} />
    <Route path="/:category/post-edit/:id/" component={PostNewContainer} />
    <Route path="/:category/:id/comments-new" component={CommentsNewContainer} />
    <Route exact path="/:category/:id/comments-edit" component={CommentsEditContainer} />
  </Switch>
);

export default Routes;
