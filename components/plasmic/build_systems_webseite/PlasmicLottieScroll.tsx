// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mqV4UcDB7VtiJ8cJsjEuAy
// Component: LYYlooQf4EWV

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantslHlE6P37P8G4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LHlE6P37P8G4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems_webseite.module.css"; // plasmic-import: mqV4UcDB7VtiJ8cJsjEuAy/projectcss
import sty from "./PlasmicLottieScroll.module.css"; // plasmic-import: LYYlooQf4EWV/css

createPlasmicElementProxy;

export type PlasmicLottieScroll__VariantMembers = {};
export type PlasmicLottieScroll__VariantsArgs = {};
type VariantPropType = keyof PlasmicLottieScroll__VariantsArgs;
export const PlasmicLottieScroll__VariantProps = new Array<VariantPropType>();

export type PlasmicLottieScroll__ArgsType = {};
type ArgPropType = keyof PlasmicLottieScroll__ArgsType;
export const PlasmicLottieScroll__ArgProps = new Array<ArgPropType>();

export type PlasmicLottieScroll__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultLottieScrollProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLottieScroll__RenderFunc(props: {
  variants: PlasmicLottieScroll__VariantsArgs;
  args: PlasmicLottieScroll__ArgsType;
  overrides: PlasmicLottieScroll__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantslHlE6P37P8G4()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLottieScroll__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLottieScroll__VariantsArgs;
    args?: PlasmicLottieScroll__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLottieScroll__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLottieScroll__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLottieScroll__ArgProps,
          internalVariantPropNames: PlasmicLottieScroll__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLottieScroll__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLottieScroll";
  } else {
    func.displayName = `PlasmicLottieScroll.${nodeName}`;
  }
  return func;
}

export const PlasmicLottieScroll = Object.assign(
  // Top-level PlasmicLottieScroll renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLottieScroll
    internalVariantProps: PlasmicLottieScroll__VariantProps,
    internalArgProps: PlasmicLottieScroll__ArgProps
  }
);

export default PlasmicLottieScroll;
/* prettier-ignore-end */
