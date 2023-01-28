import type { Component } from "solid-js";
import { ViewProps } from "components/lib/variants/view";
import { viewVariants, viewComponents } from "@myTypes/constants";
import { getView } from "@theme/variant.helpers";

const View: Component<ViewProps> = (props) => {
  const { variant, height, width, as } = props;
  const ViewVariant = getView(props.variant ?? viewVariants.base);

  return (
    <ViewVariant
      variant={variant}
      height={height}
      width={width}
      as={as ?? viewComponents.div}
    >
      {props.children}
    </ViewVariant>
  );
};

export default View;
