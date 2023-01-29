import type { Component } from "solid-js";

type ModifiedState = { class: string };

export const componentVariantsHoc = (
  OriginalComponent: Component<typeof props>,
  modifiedState: ModifiedState,
  props: any,
) => {
  console.log(modifiedState);
  const ModifiedComponent: Component<typeof props> = (props) => {
    return <OriginalComponent {...props} {...modifiedState} />;
  };
  return ModifiedComponent(props);
};
