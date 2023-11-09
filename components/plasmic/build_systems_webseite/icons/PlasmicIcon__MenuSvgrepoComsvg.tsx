// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuSvgrepoComsvgIcon(props: MenuSvgrepoComsvgIconProps) {
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
          "M1 12a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1zm0-8a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1zm0 16a1 1 0 011-1h20a1 1 0 110 2H2a1 1 0 01-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MenuSvgrepoComsvgIcon;
/* prettier-ignore-end */
