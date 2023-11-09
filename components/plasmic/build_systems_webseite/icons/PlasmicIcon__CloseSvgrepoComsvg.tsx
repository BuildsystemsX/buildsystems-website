// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloseSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloseSvgrepoComsvgIcon(props: CloseSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      version={"1.1"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M390.248 91.582l30.17 30.17L286.168 256l134.25 134.248-30.17 30.17L256 286.168l-134.248 134.25-30.17-30.17L225.83 256 91.582 121.752l30.17-30.17L256 225.83 390.248 91.582z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default CloseSvgrepoComsvgIcon;
/* prettier-ignore-end */
