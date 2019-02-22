import React from 'react';

const SponsorTag = ({ children, url, image }) =>
  <a href={url} className="sponsortag" target="_blank">
    <img src={image} alt={children} className="sponsortag__image" />
  </a>

export default SponsorTag;