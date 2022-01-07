import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,

  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,

} from "react-share"; // https://github.com/nygardk/react-share/

export default class SocialShare extends Component {
  static propTypes = {
    link: PropTypes.string,
    description: PropTypes.string
  }
  render() {
    const {link, description} = this.props;
    const shareLink = link;
    const title = description;
    return (
      <section className="c-network">
        <div className="network">
          <FacebookShareButton
            url={shareLink}
            quote={title}
            className="network__share-button"
          >
            <FacebookIcon
              size={"2rem"} // You can use rem value isntead of numbers
              round
            />
          </FacebookShareButton>
        </div>

        <div className="network">
          <TwitterShareButton
            url={shareLink}
            title={title}
            className="network__share-button"
          >
            <TwitterIcon size={"2rem"} round />
          </TwitterShareButton>

        </div>


        <div className="network">
          <LinkedinShareButton
            url={shareLink}
            title={title}
    

            className="network__share-button"
          >
            <LinkedinIcon size={"2rem"} round />
          </LinkedinShareButton>
        </div>

        <div className="network">
          <EmailShareButton
            url={shareLink}
            subject={title}
            body="body"
            className="network__share-button"
          >
            <EmailIcon size={"2rem"} round />
          </EmailShareButton>
        </div>
      </section>
    );
  }
}
