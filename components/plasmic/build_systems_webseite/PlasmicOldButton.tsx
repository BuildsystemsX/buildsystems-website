// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mqV4UcDB7VtiJ8cJsjEuAy
// Component: NNkPJ19Ban7U

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems_webseite.module.css"; // plasmic-import: mqV4UcDB7VtiJ8cJsjEuAy/projectcss
import sty from "./PlasmicOldButton.module.css"; // plasmic-import: NNkPJ19Ban7U/css

createPlasmicElementProxy;

export type PlasmicOldButton__VariantMembers = {};
export type PlasmicOldButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicOldButton__VariantsArgs;
export const PlasmicOldButton__VariantProps = new Array<VariantPropType>();

export type PlasmicOldButton__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicOldButton__ArgsType;
export const PlasmicOldButton__ArgProps = new Array<ArgPropType>("children");

export type PlasmicOldButton__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultOldButtonProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicOldButton__RenderFunc(props: {
  variants: PlasmicOldButton__VariantsArgs;
  args: PlasmicOldButton__ArgsType;
  overrides: PlasmicOldButton__OverridesType;
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
    >
      {p.renderPlasmicSlot({
        defaultContents: "Action",
        value: args.children,
        className: classNames(sty.slotTargetChildren)
      })}
    </div>
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
  PlasmicOldButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOldButton__VariantsArgs;
    args?: PlasmicOldButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOldButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOldButton__ArgsType,
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
          internalArgPropNames: PlasmicOldButton__ArgProps,
          internalVariantPropNames: PlasmicOldButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOldButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOldButton";
  } else {
    func.displayName = `PlasmicOldButton.${nodeName}`;
  }
  return func;
}

export const PlasmicOldButton = Object.assign(
  // Top-level PlasmicOldButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicOldButton
    internalVariantProps: PlasmicOldButton__VariantProps,
    internalArgProps: PlasmicOldButton__ArgProps
  }
);

export default PlasmicOldButton;
/* prettier-ignore-end */
