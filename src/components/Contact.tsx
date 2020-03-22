import React from 'react';
import tumblr from '../img/icons/tumblr.svg';
import twitter from '../img/icons/twitter.svg';
import '../styles/Contact.css';
import { timingSafeEqual } from 'crypto';

interface ContactState {
  show?: boolean
}

class Contact extends React.Component<{}, ContactState> {
  constructor(props: any) {
    super(props);
    this.state = { show: false };
  }

  protected onMouseOver = () => {
    this.setState({ show: true });
  }

  protected onMouseLeave = () => {
    this.setState({ show: false });
  }


  render() {
    return (
      <div className="header-contact" onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
          {this.state.show
          ? <div>
                <a className="header-icon" href="https://mellific.tumblr.com" target="_blank">
                    <img src={tumblr} />
                </a>
                <a className="header-icon" href="https://twitter.com/shannonkao" target="_blank">
                    <img src={twitter} />
                </a>
            </div>
          : <a href="/">Contact</a>
          }
      </div>
    );
  }
}

export default Contact;
