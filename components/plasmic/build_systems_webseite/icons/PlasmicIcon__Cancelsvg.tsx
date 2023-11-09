// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CancelsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CancelsvgIcon(props: CancelsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 64 64"}
      strokeWidth={"3"}
      stroke={"currentColor"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M8.06 8.06l47.35 47.88m.53-47.88L8.59 55.94"}></path>
    </svg>
  );
}

export default CancelsvgIcon;
/* prettier-ignore-end */
