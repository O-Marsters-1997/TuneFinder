import type { Component } from "solid-js";
import { ViewProps } from "components/lib/variants/view";
import { viewVariants, viewComponents } from "@myTypes/constants";
import { getView } from "@theme/variant.helpers";

const View: Component<ViewProps> = (props) => {
  const ViewVariant = getView(props.variant ?? viewVariants.base);

  return (
    <ViewVariant
      variant={props.variant}
      height={props.height}
      width={props.width}
      maxWidth={props.maxWidth}
      maxHeight={props.maxHeight}
      as={props.as ?? viewComponents.div}
      style={props.style}
    >
      {props.children}
    </ViewVariant>
  );
};

export default View;
