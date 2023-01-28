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
      as={props.as ?? viewComponents.div}
    >
      {props.children}
    </ViewVariant>
  );
};

export default View;
