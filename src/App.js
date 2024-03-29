
import React, { PureComponent } from 'react';
import Header from './Header';
import searchInput from "./searchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";

//teste
export default class App extends PureComponent {
   constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };
  
  render(){
  return(
        <div>
          <Header />
          <searchIput  textChange={this.handleSearchChange}/>
          <EmojiResults emojiData={this.state.filteredEmoji}/>
        </div>
  )
  }
}
     