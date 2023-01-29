import type { Component } from "solid-js";

type ModifiedState = { class: string };

export const componentVariantsHoc = (
  OriginalComponent: Component<typeof props>,
  modifiedState: ModifiedState,
  props: any,
) => {
  const ModifiedComponent: Component<typeof props> = (props) => {
    return <OriginalComponent {...props} {...modifiedState} />;
  };
  return ModifiedComponent(props);
};
