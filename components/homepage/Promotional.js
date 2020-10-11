import React from "react";
import { Image } from "semantic-ui-react";

const Promotional = () => {
  return (
    <Image
      src="/images/promotional-image.jpg"
      rounded
      fluid
      style={{ height: "350px", objectFit: "cover" }}
    />
  );
};

export default Promotional;
