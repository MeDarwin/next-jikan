"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

/**
 * React type animation component for server side rendering usage.
 */
const ClientTypeAnimation = (
  props: React.ComponentProps<typeof TypeAnimation>
) => {
  return <TypeAnimation {...props} />;
};

export default ClientTypeAnimation;
