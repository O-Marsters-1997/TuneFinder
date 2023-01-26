import { styled } from "solid-styled-components";
import Box from "@suid/material/Box";

export type StyleViewProps = {
  height: string;
  width: string;
};

export type ViewProps = {
  component: any;
} & StyleViewProps;

export const ViewBase = styled(Box)`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
`;
