import type { Component } from "solid-js";

type ModifiedState = { class: string };

// Using class prop as defined by emotion css prop rule
const componentVariantsHoc = (
  OriginalComponent: Component<typeof props>,
  modifiedState: ModifiedState,
  props: any,
) => {
  const ModifiedComponent: Component<typeof props> = () => {
    return <OriginalComponent {...props} {...modifiedState} />;
  };
  return ModifiedComponent(props);
};

export default componentVariantsHoc;
