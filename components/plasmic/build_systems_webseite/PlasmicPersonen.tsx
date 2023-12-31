// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mqV4UcDB7VtiJ8cJsjEuAy
// Component: cquHKcSQWbgC

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
import Menu from "../../Menu"; // plasmic-import: 3tVaCsuA_u6n/component
import BuildSystemsHeadline from "../../BuildSystemsHeadline"; // plasmic-import: A3rV3DR6661C/component
import PersonBox from "../../PersonBox"; // plasmic-import: 96YGiaLILyHl/component
import ImageFooter from "../../ImageFooter"; // plasmic-import: BSa7gVRQINSW/component
import HiderHeadlines from "../../HiderHeadlines"; // plasmic-import: 9NJcKhpG5t4t/component

import { useScreenVariants as useScreenVariantslHlE6P37P8G4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LHlE6P37P8G4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems_webseite.module.css"; // plasmic-import: mqV4UcDB7VtiJ8cJsjEuAy/projectcss
import sty from "./PlasmicPersonen.module.css"; // plasmic-import: cquHKcSQWbgC/css

createPlasmicElementProxy;

export type PlasmicPersonen__VariantMembers = {};
export type PlasmicPersonen__VariantsArgs = {};
type VariantPropType = keyof PlasmicPersonen__VariantsArgs;
export const PlasmicPersonen__VariantProps = new Array<VariantPropType>();

export type PlasmicPersonen__ArgsType = {};
type ArgPropType = keyof PlasmicPersonen__ArgsType;
export const PlasmicPersonen__ArgProps = new Array<ArgPropType>();

export type PlasmicPersonen__OverridesType = {
  root?: p.Flex<"div">;
  menuStack?: p.Flex<"div">;
  menu?: p.Flex<typeof Menu>;
  buildSystemsHeadline?: p.Flex<typeof BuildSystemsHeadline>;
  personList?: p.Flex<"div">;
  martin?: p.Flex<"div">;
  julia?: p.Flex<"div">;
  daniel?: p.Flex<"div">;
  danielL?: p.Flex<"div">;
  vinzenz?: p.Flex<"div">;
  andreas?: p.Flex<"div">;
  versteckterHeader?: p.Flex<"div">;
  imageFooter?: p.Flex<typeof ImageFooter>;
  hiderHeadlines?: p.Flex<typeof HiderHeadlines>;
};

export interface DefaultPersonenProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPersonen__RenderFunc(props: {
  variants: PlasmicPersonen__VariantsArgs;
  args: PlasmicPersonen__ArgsType;
  overrides: PlasmicPersonen__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicPersonen.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPersonen.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPersonen.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicPersonen.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicPersonen.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicPersonen.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <div
            data-plasmic-name={"menuStack"}
            data-plasmic-override={overrides.menuStack}
            className={classNames(projectcss.all, sty.menuStack)}
          >
            <Menu
              data-plasmic-name={"menu"}
              data-plasmic-override={overrides.menu}
              className={classNames("__wab_instance", sty.menu)}
              expand={
                hasVariant(globalVariants, "screen", "iPhone")
                  ? undefined
                  : hasVariant(globalVariants, "screen", "iPad")
                  ? undefined
                  : undefined
              }
              onSubSite={
                hasVariant(globalVariants, "screen", "iPhone")
                  ? []
                  : hasVariant(globalVariants, "screen", "iPad")
                  ? []
                  : ["personen"]
              }
            />
          </div>
          <BuildSystemsHeadline
            data-plasmic-name={"buildSystemsHeadline"}
            data-plasmic-override={overrides.buildSystemsHeadline}
            className={classNames("__wab_instance", sty.buildSystemsHeadline)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__tVi6D)} />

          <div className={classNames(projectcss.all, sty.freeBox__y7CLi)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jeVpq
              )}
            >
              {
                "Wir vertreten nicht nur einen integralen Prozess in der Planung, wir leben Interdisziplinarit\u00e4t im Team: Jeder bringt einen Baustein der ganzheitlichen Betrachtung mit ein. Gemeinsam erfassen wir \u00f6kologische Anforderungen auf allen Ebenen und und betrachten die Gesamtwirkung der Ma\u00dfnahmen zur Emissionsreduktion durch die sozio\u00f6konomische Perspektive."
              }
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gMoGv
              )}
            >
              {hasVariant(globalVariants, "screen", "iPhone")
                ? "denkt #vernetzt / #ganzheitlich / #langfristig."
                : "denkt #vernetzt / #ganzheitlich / #langfristig."}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__lPthg)} />

          <div className={classNames(projectcss.all, sty.freeBox___6ThVh)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___4SaKb
              )}
            >
              {hasVariant(globalVariants, "screen", "iPhone")
                ? "f\u00fchrt Kompetenzen, Prozesse und Tools zusammen."
                : "f\u00fchrt Kompetenzen, Prozesse und Tools zusammen."}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__pqi2Q)}>
            <p.Stack
              as={"div"}
              data-plasmic-name={"personList"}
              data-plasmic-override={overrides.personList}
              hasGap={true}
              className={classNames(projectcss.all, sty.personList)}
            >
              <div
                data-plasmic-name={"martin"}
                data-plasmic-override={overrides.martin}
                className={classNames(projectcss.all, sty.martin)}
              >
                <PersonBox
                  className={classNames(
                    "__wab_instance",
                    sty.personBox___92Rv2
                  )}
                  personen={"martinBittmann"}
                  shrinked={true}
                />
              </div>
              <div
                data-plasmic-name={"julia"}
                data-plasmic-override={overrides.julia}
                className={classNames(projectcss.all, sty.julia)}
              >
                <PersonBox
                  className={classNames("__wab_instance", sty.personBox__v0H)}
                  personen={"juliaDorn"}
                  shrinked={true}
                />
              </div>
              <div
                data-plasmic-name={"daniel"}
                data-plasmic-override={overrides.daniel}
                className={classNames(projectcss.all, sty.daniel)}
              >
                <PersonBox
                  className={classNames(
                    "__wab_instance",
                    sty.personBox___0EUfa
                  )}
                  personen={"danielDieren"}
                  shrinked={true}
                />
              </div>
              <div
                data-plasmic-name={"danielL"}
                data-plasmic-override={overrides.danielL}
                className={classNames(projectcss.all, sty.danielL)}
              >
                <PersonBox
                  className={classNames("__wab_instance", sty.personBox__eiWYc)}
                  personen={"danielLocatelli"}
                  shrinked={true}
                />
              </div>
              <div
                data-plasmic-name={"vinzenz"}
                data-plasmic-override={overrides.vinzenz}
                className={classNames(projectcss.all, sty.vinzenz)}
              >
                <PersonBox
                  className={classNames("__wab_instance", sty.personBox__yiWbW)}
                  personen={"vinzenzTrimborn"}
                  shrinked={true}
                />
              </div>
              <div
                data-plasmic-name={"andreas"}
                data-plasmic-override={overrides.andreas}
                className={classNames(projectcss.all, sty.andreas)}
              >
                <PersonBox
                  className={classNames(
                    "__wab_instance",
                    sty.personBox___211Ln
                  )}
                  personen={"andreasThoma"}
                  shrinked={true}
                />
              </div>
            </p.Stack>
          </div>
          <div
            data-plasmic-name={"versteckterHeader"}
            data-plasmic-override={overrides.versteckterHeader}
            className={classNames(projectcss.all, sty.versteckterHeader)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__h8Iqo
              )}
            >
              {hasVariant(globalVariants, "screen", "iPhone")
                ? "fu\u0308hrt  #Kompetenzen / #Prozesse / #Tools zusammen."
                : "denkt vernetzt, ganzheitlich und langfristig."}
            </div>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__x0UW4)} />

          <ImageFooter
            data-plasmic-name={"imageFooter"}
            data-plasmic-override={overrides.imageFooter}
            className={classNames("__wab_instance", sty.imageFooter)}
          />

          <HiderHeadlines
            data-plasmic-name={"hiderHeadlines"}
            data-plasmic-override={overrides.hiderHeadlines}
            className={classNames("__wab_instance", sty.hiderHeadlines)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "menuStack",
    "menu",
    "buildSystemsHeadline",
    "personList",
    "martin",
    "julia",
    "daniel",
    "danielL",
    "vinzenz",
    "andreas",
    "versteckterHeader",
    "imageFooter",
    "hiderHeadlines"
  ],
  menuStack: ["menuStack", "menu"],
  menu: ["menu"],
  buildSystemsHeadline: ["buildSystemsHeadline"],
  personList: [
    "personList",
    "martin",
    "julia",
    "daniel",
    "danielL",
    "vinzenz",
    "andreas"
  ],
  martin: ["martin"],
  julia: ["julia"],
  daniel: ["daniel"],
  danielL: ["danielL"],
  vinzenz: ["vinzenz"],
  andreas: ["andreas"],
  versteckterHeader: ["versteckterHeader"],
  imageFooter: ["imageFooter"],
  hiderHeadlines: ["hiderHeadlines"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuStack: "div";
  menu: typeof Menu;
  buildSystemsHeadline: typeof BuildSystemsHeadline;
  personList: "div";
  martin: "div";
  julia: "div";
  daniel: "div";
  danielL: "div";
  vinzenz: "div";
  andreas: "div";
  versteckterHeader: "div";
  imageFooter: typeof ImageFooter;
  hiderHeadlines: typeof HiderHeadlines;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPersonen__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPersonen__VariantsArgs;
    args?: PlasmicPersonen__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPersonen__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPersonen__ArgsType,
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
          internalArgPropNames: PlasmicPersonen__ArgProps,
          internalVariantPropNames: PlasmicPersonen__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPersonen__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPersonen";
  } else {
    func.displayName = `PlasmicPersonen.${nodeName}`;
  }
  return func;
}

export const PlasmicPersonen = Object.assign(
  // Top-level PlasmicPersonen renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuStack: makeNodeComponent("menuStack"),
    menu: makeNodeComponent("menu"),
    buildSystemsHeadline: makeNodeComponent("buildSystemsHeadline"),
    personList: makeNodeComponent("personList"),
    martin: makeNodeComponent("martin"),
    julia: makeNodeComponent("julia"),
    daniel: makeNodeComponent("daniel"),
    danielL: makeNodeComponent("danielL"),
    vinzenz: makeNodeComponent("vinzenz"),
    andreas: makeNodeComponent("andreas"),
    versteckterHeader: makeNodeComponent("versteckterHeader"),
    imageFooter: makeNodeComponent("imageFooter"),
    hiderHeadlines: makeNodeComponent("hiderHeadlines"),

    // Metadata about props expected for PlasmicPersonen
    internalVariantProps: PlasmicPersonen__VariantProps,
    internalArgProps: PlasmicPersonen__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "BuildSystems",
      description:
        "BuildSystems entwickelt individuelle Smart Sustainability Roadmaps (Nachhaltigkeitsfahrpläne).  Wir unterstützen Immobilienentwickler:innen in einer frühen Phase der Planung.",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPersonen;
/* prettier-ignore-end */
