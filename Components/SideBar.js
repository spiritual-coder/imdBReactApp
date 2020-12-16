import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import twitterApi from './twitterApi';
import TweetCard from './TweetCard.js'

class Tweet extends Component {

	state = {
		tweetList: [],
	};

	getTweets = () => {
		twitterApi().then(heading => {
			this.setState({
				tweetList: heading
			});
		});
	};


	componentDidMount() {
		this.getTweets();
	}
  
  render() {

    return (
      <div>
        
        {this.state.tweetList.map(
        	({heading, para, imgUrl, tweetId}) => (
        	<TweetCard 
        	heading={heading} 
        	para={para}
        	imgUrl={imgUrl} 
        	key={tweetId}
        	/>
        	)
        	)}
      </div>
    );
  }
  
}

export default Tweet;