import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

import React from "react";

const Share = ({ url }) => {
  return (
    <>
      <EmailShareButton subject="Mirá esto" body="Te comparto esta novedad de la asociacion de Pickleball" url={url}>
        <EmailIcon size={32} round />
      </EmailShareButton>

      <FacebookShareButton quote="Mirá esto" url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton title="Mirá esto" url={url}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <WhatsappShareButton title="Mirá esto"  url={url}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </>
  );
};

export default Share;
