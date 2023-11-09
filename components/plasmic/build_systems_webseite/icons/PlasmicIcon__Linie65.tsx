// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Linie65IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Linie65Icon(props: Linie65IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 606"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M2 606V0"} stroke={"currentColor"} strokeWidth={"3"}></path>
    </svg>
  );
}

export default Linie65Icon;
/* prettier-ignore-end */
