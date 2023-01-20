import type { Component } from "solid-js";

interface Props {
  token?: string;
}

const Searchbar: Component<Props> = (props) => {
  return <div>{props.token}</div>;
};

export default Searchbar;
