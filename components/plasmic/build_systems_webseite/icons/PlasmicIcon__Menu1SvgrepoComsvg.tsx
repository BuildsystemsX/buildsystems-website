// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Menu1SvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Menu1SvgrepoComsvgIcon(props: Menu1SvgrepoComsvgIconProps) {
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
          "M19.5 8.25h-15v-1.5h15v1.5zm0 4.5h-15v-1.5h15v1.5zm0 4.5h-15v-1.5h15v1.5z"
        }
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Menu1SvgrepoComsvgIcon;
/* prettier-ignore-end */
