import React, {Component} from 'react';
import RECOMMENDED_CONTENT_FEED_FRAGMENT from './fragment'
export {RECOMMENDED_CONTENT_FEED_FRAGMENT}

export default class RecommendedContentFeedListComponent extends Component {
  render() {
    return (
      <div>
        {this.props.edges.map(edge => {
          return (
            <div className="columns">
              <div className="column is-one-fifth">
                <figure className="image is-64x64">
                  <img src={edge.node.featuredMedia[0].imageSrc}/>
                </figure>
              </div>
              <div className="column">{edge.node.title.text}</div>
            </div>)
        })}
      </div>
    );
  }
}