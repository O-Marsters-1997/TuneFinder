import type { Component } from "solid-js";
import { Props } from "components/lib/variants/view";
import { viewVariants, viewComponents } from "@myTypes/constants";
import { getView } from "@base/theme/variant.helpers";

const View: Component<Props> = (props) => {
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
