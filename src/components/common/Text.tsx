import type { Component } from "solid-js";
import { mergeProps } from "solid-js";
import { Props } from "@components/lib/variants/text";
import { textVariants } from "@myTypes/constants";
import { getText } from "@theme/variant.helpers";
import { getTextVariant } from "@utils/style/style.helpers";

const Text: Component<Props> = (_props) => {
  const props = mergeProps({ variant: textVariants.body1 }, _props);
  const { text, variant, colorvariant, lineheight, sizeadjust } = props;

  const TextVariant = getText(props.variant);
  return (
    <TextVariant
      text={text}
      variant={variant}
      as={getTextVariant(variant)}
      colorvariant={colorvariant}
      lineheight={lineheight}
      sizeadjust={sizeadjust}
    >
      {text}
    </TextVariant>
  );
};

export default Text;
