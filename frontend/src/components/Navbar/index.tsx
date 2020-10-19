import React from "react";

interface Props {
  text?: string;
}

export const Navbar = (props: Props) => <div>{props.text}</div>;
