import React from 'react';

class PostsDetails extends React.PureComponent {

  // renderPostDetail = () => {
  //   const { post } = this.props;
  //   return post.map(postItem => (
  //     <span>{postItem.title}</span>
  //   ));
  // }

  render() {
    console.log('DETAILS', this.props.post);
    return (
      <div>
        {/* {this.renderPostDetail()} */}
      </div>
    );
  }
}

export default PostsDetails;
