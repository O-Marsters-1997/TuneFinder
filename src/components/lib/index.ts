import { styled } from "solid-styled-components";
import { ViewProps } from "@common/View";
import { MyView } from "./variants/view";

type ViewPropsOmitAs = Omit<ViewProps, "as"> & {
  as?: "div";
};

const ViewLib = styled(MyView)<ViewPropsOmitAs>``;

export const RowContainer = styled(ViewLib)`
  display: flex;
`;

export const ColumnContainer = styled(ViewLib)`
  display: flex;
`;

export const TestContainer = styled(ViewLib)`
  height: 500px;
  width: 500px;
  background-color: orange;
`;
