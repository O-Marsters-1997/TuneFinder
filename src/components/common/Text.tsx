import type { Component } from "solid-js";
import { mergeProps } from "solid-js";
import { Props } from "@components/lib/variants/text";
import { textVariants } from "@myTypes/constants";
import { getText } from "@theme/variant.helpers";
import { getTextVariant } from "@utils/style/style.helpers";

const Text: Component<Props> = (props) => {
  // const props = mergeProps({ variant: textVariants.base }, _props);

  const TextVariant = getText(props.variant ?? "base");

  return (
    <TextVariant
      text={props.text}
      variant={props.variant}
      as={getTextVariant(props.variant ?? "base")}
      colorvariant={props.colorvariant}
      lineheight={props.lineheight}
      sizeadjust={props.sizeadjust}
    >
      {props.text}
    </TextVariant>
  );
};

export default Text;
