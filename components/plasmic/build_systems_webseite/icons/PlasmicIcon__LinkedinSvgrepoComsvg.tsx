// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LinkedinSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LinkedinSvgrepoComsvgIcon(
  props: LinkedinSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 10a1 1 0 011-1h1a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8zm6 9h1a1 1 0 001-1v-4.5c0-1.5 3-2.5 3-.5v5a1 1 0 001 1h1a1 1 0 001-1v-6c0-2-1.5-3-3.5-3S13 10.5 13 10.5V10a1 1 0 00-1-1h-1a1 1 0 00-1 1v8a1 1 0 001 1z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M20 1a3 3 0 013 3v16a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h16zm0 2a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LinkedinSvgrepoComsvgIcon;
/* prettier-ignore-end */
