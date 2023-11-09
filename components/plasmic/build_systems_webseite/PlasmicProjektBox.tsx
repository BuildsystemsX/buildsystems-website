// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mqV4UcDB7VtiJ8cJsjEuAy
// Component: GjDkrEeBjxHa

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
import SmallButton from "../../SmallButton"; // plasmic-import: HXVAhiAlnBWR/component

import { useScreenVariants as useScreenVariantslHlE6P37P8G4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LHlE6P37P8G4/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_build_systems_webseite.module.css"; // plasmic-import: mqV4UcDB7VtiJ8cJsjEuAy/projectcss
import sty from "./PlasmicProjektBox.module.css"; // plasmic-import: GjDkrEeBjxHa/css

createPlasmicElementProxy;

export type PlasmicProjektBox__VariantMembers = {
  shrinked: "shrinked";
  projekte:
    | "schumacherQuartierOld"
    | "urbanScaleTimberOld"
    | "trial"
    | "urbanScaleTimberNew"
    | "punkthaus"
    | "schumacherQuartierNew"
    | "aschheim";
};
export type PlasmicProjektBox__VariantsArgs = {
  shrinked?: SingleBooleanChoiceArg<"shrinked">;
  projekte?: SingleChoiceArg<
    | "schumacherQuartierOld"
    | "urbanScaleTimberOld"
    | "trial"
    | "urbanScaleTimberNew"
    | "punkthaus"
    | "schumacherQuartierNew"
    | "aschheim"
  >;
};
type VariantPropType = keyof PlasmicProjektBox__VariantsArgs;
export const PlasmicProjektBox__VariantProps = new Array<VariantPropType>(
  "shrinked",
  "projekte"
);

export type PlasmicProjektBox__ArgsType = {};
type ArgPropType = keyof PlasmicProjektBox__ArgsType;
export const PlasmicProjektBox__ArgProps = new Array<ArgPropType>();

export type PlasmicProjektBox__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  linkAufProjektseite?: p.Flex<"div">;
};

export interface DefaultProjektBoxProps {
  shrinked?: SingleBooleanChoiceArg<"shrinked">;
  projekte?: SingleChoiceArg<
    | "schumacherQuartierOld"
    | "urbanScaleTimberOld"
    | "trial"
    | "urbanScaleTimberNew"
    | "punkthaus"
    | "schumacherQuartierNew"
    | "aschheim"
  >;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProjektBox__RenderFunc(props: {
  variants: PlasmicProjektBox__VariantsArgs;
  args: PlasmicProjektBox__ArgsType;
  overrides: PlasmicProjektBox__OverridesType;
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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "shrinked",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.shrinked
      },
      {
        path: "projekte",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.projekte
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
        sty.root,
        {
          [sty.rootprojekte_punkthaus]: hasVariant(
            $state,
            "projekte",
            "punkthaus"
          ),
          [sty.rootprojekte_urbanScaleTimberNew]: hasVariant(
            $state,
            "projekte",
            "urbanScaleTimberNew"
          ),
          [sty.rootprojekte_urbanScaleTimberOld]: hasVariant(
            $state,
            "projekte",
            "urbanScaleTimberOld"
          ),
          [sty.rootshrinked]: hasVariant($state, "shrinked", "shrinked")
        }
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.imgprojekte_aschheim]: hasVariant(
            $state,
            "projekte",
            "aschheim"
          ),
          [sty.imgprojekte_punkthaus]: hasVariant(
            $state,
            "projekte",
            "punkthaus"
          ),
          [sty.imgprojekte_schumacherQuartierNew]: hasVariant(
            $state,
            "projekte",
            "schumacherQuartierNew"
          ),
          [sty.imgprojekte_schumacherQuartierOld]: hasVariant(
            $state,
            "projekte",
            "schumacherQuartierOld"
          ),
          [sty.imgprojekte_trial]: hasVariant($state, "projekte", "trial"),
          [sty.imgprojekte_urbanScaleTimberNew]: hasVariant(
            $state,
            "projekte",
            "urbanScaleTimberNew"
          ),
          [sty.imgprojekte_urbanScaleTimberOld]: hasVariant(
            $state,
            "projekte",
            "urbanScaleTimberOld"
          ),
          [sty.imgshrinked]: hasVariant($state, "shrinked", "shrinked")
        })}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={
          hasVariant($state, "projekte", "aschheim")
            ? "100%"
            : hasVariant($state, "projekte", "punkthaus")
            ? "100%"
            : hasVariant($state, "projekte", "urbanScaleTimberNew")
            ? "100%"
            : hasVariant($state, "projekte", "trial")
            ? "100%"
            : "auto"
        }
        loading={"lazy"}
        src={
          hasVariant($state, "projekte", "aschheim")
            ? {
                src: "/plasmic/build_systems_webseite/images/comingSoonpng.png",
                fullWidth: 726,
                fullHeight: 726,
                aspectRatio: undefined
              }
            : hasVariant($state, "projekte", "schumacherQuartierNew")
            ? {
                src: "/plasmic/build_systems_webseite/images/_01Fixpng.png",
                fullWidth: 1920,
                fullHeight: 1920,
                aspectRatio: undefined
              }
            : hasVariant($state, "projekte", "punkthaus")
            ? {
                src: "/plasmic/build_systems_webseite/images/punktSquaredpng.png",
                fullWidth: 726,
                fullHeight: 726,
                aspectRatio: undefined
              }
            : hasVariant($state, "projekte", "urbanScaleTimberNew")
            ? {
                src: "/plasmic/build_systems_webseite/images/configurator01Squaredpng.png",
                fullWidth: 798,
                fullHeight: 798,
                aspectRatio: undefined
              }
            : hasVariant($state, "projekte", "trial")
            ? {
                src: "/plasmic/build_systems_webseite/images/_01Fixpng.png",
                fullWidth: 1920,
                fullHeight: 1920,
                aspectRatio: undefined
              }
            : hasVariant($state, "projekte", "urbanScaleTimberOld")
            ? {
                src: "/plasmic/build_systems_webseite/images/image.png",
                fullWidth: 760,
                fullHeight: 507,
                aspectRatio: undefined
              }
            : {
                src: "/plasmic/build_systems_webseite/images/gruppe393Png.png",
                fullWidth: 597,
                fullHeight: 397,
                aspectRatio: undefined
              }
        }
      />

      <div
        className={classNames(projectcss.all, sty.freeBox__s81Vw, {
          [sty.freeBoxprojekte_schumacherQuartierOld__s81Vw2I20]: hasVariant(
            $state,
            "projekte",
            "schumacherQuartierOld"
          ),
          [sty.freeBoxprojekte_urbanScaleTimberNew__s81VwiJsFy]: hasVariant(
            $state,
            "projekte",
            "urbanScaleTimberNew"
          ),
          [sty.freeBoxprojekte_urbanScaleTimberOld__s81VwnGeF]: hasVariant(
            $state,
            "projekte",
            "urbanScaleTimberOld"
          ),
          [sty.freeBoxshrinked__s81VwaQ4O]: hasVariant(
            $state,
            "shrinked",
            "shrinked"
          )
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__kgjxE,
            {
              [sty.textprojekte_aschheim__kgjxEW9Jh]: hasVariant(
                $state,
                "projekte",
                "aschheim"
              ),
              [sty.textprojekte_punkthaus__kgjxE5D5Pv]: hasVariant(
                $state,
                "projekte",
                "punkthaus"
              ),
              [sty.textprojekte_urbanScaleTimberNew__kgjxEiJsFy]: hasVariant(
                $state,
                "projekte",
                "urbanScaleTimberNew"
              ),
              [sty.textprojekte_urbanScaleTimberOld__kgjxEnGeF]: hasVariant(
                $state,
                "projekte",
                "urbanScaleTimberOld"
              ),
              [sty.textshrinked__kgjxEaQ4O]: hasVariant(
                $state,
                "shrinked",
                "shrinked"
              )
            }
          )}
        >
          {hasVariant($state, "projekte", "aschheim")
            ? "Ersatzneubau Rathaus Aschheim"
            : hasVariant($state, "projekte", "punkthaus")
            ? "Punkth\u00e4user M\u00fcnchen"
            : hasVariant($state, "projekte", "urbanScaleTimberNew")
            ? "Urban Scale Timber"
            : hasVariant($state, "projekte", "urbanScaleTimberOld")
            ? "Urban Scale Timber"
            : "Schumacher Quartier"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__r4Iwr,
            {
              [sty.textprojekte_aschheim__r4IwrW9Jh]: hasVariant(
                $state,
                "projekte",
                "aschheim"
              ),
              [sty.textprojekte_punkthaus__r4Iwr5D5Pv]: hasVariant(
                $state,
                "projekte",
                "punkthaus"
              ),
              [sty.textprojekte_schumacherQuartierNew__r4IwrqIcy8]: hasVariant(
                $state,
                "projekte",
                "schumacherQuartierNew"
              ),
              [sty.textprojekte_schumacherQuartierOld__r4Iwr2I20]: hasVariant(
                $state,
                "projekte",
                "schumacherQuartierOld"
              ),
              [sty.textprojekte_urbanScaleTimberNew__r4IwRiJsFy]: hasVariant(
                $state,
                "projekte",
                "urbanScaleTimberNew"
              ),
              [sty.textprojekte_urbanScaleTimberOld__r4IwRnGeF]: hasVariant(
                $state,
                "projekte",
                "urbanScaleTimberOld"
              ),
              [sty.textshrinked__r4IwRaQ4O]: hasVariant(
                $state,
                "shrinked",
                "shrinked"
              )
            }
          )}
        >
          {hasVariant($state, "projekte", "aschheim")
            ? "Entwicklungspartner: Gemeinde Aschheim \nProjektvolumen: 2300 m2 BGF\nJahr: 2023\nAssetklasse: Nicht-Wohngeb\u00e4ude"
            : hasVariant($state, "projekte", "punkthaus")
            ? "Projektvolumen: 5000 m2 BGF\nJahr: 2023\nAssetklasse: Wohnen \n"
            : hasVariant($state, "projekte", "urbanScaleTimberNew")
            ? "Forschungsprojekt TU M\u00fcnchen \nLehrstuhl f\u00fcr Holzbau und Baukonstruktion\nJahr: 2022\nAssetklasse: Wohnen"
            : hasVariant($state, "projekte", "urbanScaleTimberOld")
            ? "Forschungsprojekt TU M\u00fcnchen \nLehrstuhl f\u00fcr Holzbau und Baukonstruktion\nJahr: 2022\nAssetklasse: Wohnen"
            : "Kunde: Tegel Projekt GmbH\nProjektvolumen: 600.000 m2 BGF\nJahr: 2021\nAssetklasse: Wohnen, Mixed Use"}
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__wfZik, {
            [sty.freeBoxprojekte_trial__wfZikTpGun]: hasVariant(
              $state,
              "projekte",
              "trial"
            ),
            [sty.freeBoxprojekte_urbanScaleTimberNew__wfZikiJsFy]: hasVariant(
              $state,
              "projekte",
              "urbanScaleTimberNew"
            ),
            [sty.freeBoxshrinked__wfZikaQ4O]: hasVariant(
              $state,
              "shrinked",
              "shrinked"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["updateExpanded"] = true
              ? (() => {
                  const actionArgs = {
                    vgroup: "shrinked",
                    operation: 2,
                    value: "shrinked"
                  };
                  return (({ vgroup, value }) => {
                    if (typeof value === "string") {
                      value = [value];
                    }

                    const oldValue = p.get($state, vgroup);
                    p.set($state, vgroup, !oldValue);
                    return !oldValue;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateExpanded"] != null &&
              typeof $steps["updateExpanded"] === "object" &&
              typeof $steps["updateExpanded"].then === "function"
            ) {
              $steps["updateExpanded"] = await $steps["updateExpanded"];
            }
          }}
        >
          <SmallButton
            className={classNames("__wab_instance", sty.smallButton___4YjRu, {
              [sty.smallButtonprojekte_trial___4YjRutpGun]: hasVariant(
                $state,
                "projekte",
                "trial"
              ),
              [sty.smallButtonprojekte_urbanScaleTimberNew___4YjRUiJsFy]:
                hasVariant($state, "projekte", "urbanScaleTimberNew"),
              [sty.smallButtonshrinked___4YjRUaQ4O]: hasVariant(
                $state,
                "shrinked",
                "shrinked"
              )
            })}
            noLeftSiteShift={
              hasVariant($state, "shrinked", "shrinked") ? true : true
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___3B2A,
                {
                  [sty.textprojekte_trial___3B2AtpGun]: hasVariant(
                    $state,
                    "projekte",
                    "trial"
                  ),
                  [sty.textprojekte_urbanScaleTimberNew___3B2AiJsFy]:
                    hasVariant($state, "projekte", "urbanScaleTimberNew"),
                  [sty.textshrinked___3B2AaQ4O]: hasVariant(
                    $state,
                    "shrinked",
                    "shrinked"
                  )
                }
              )}
            >
              {hasVariant($state, "projekte", "trial")
                ? "- weniger "
                : hasVariant($state, "shrinked", "shrinked")
                ? "+ mehr "
                : "- weniger "}
            </div>
          </SmallButton>
        </div>
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__gvShG, {
          [sty.freeBoxprojekte_schumacherQuartierOld__gvShG2I20]: hasVariant(
            $state,
            "projekte",
            "schumacherQuartierOld"
          ),
          [sty.freeBoxprojekte_urbanScaleTimberOld__gvShGnGeF]: hasVariant(
            $state,
            "projekte",
            "urbanScaleTimberOld"
          ),
          [sty.freeBoxshrinked__gvShGaQ4O]: hasVariant(
            $state,
            "shrinked",
            "shrinked"
          )
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__oa4Op,
            {
              [sty.textprojekte_aschheim__oa4OpW9Jh]: hasVariant(
                $state,
                "projekte",
                "aschheim"
              ),
              [sty.textprojekte_punkthaus__oa4Op5D5Pv]: hasVariant(
                $state,
                "projekte",
                "punkthaus"
              ),
              [sty.textprojekte_schumacherQuartierNew__oa4OpqIcy8]: hasVariant(
                $state,
                "projekte",
                "schumacherQuartierNew"
              ),
              [sty.textprojekte_schumacherQuartierOld__oa4Op2I20]: hasVariant(
                $state,
                "projekte",
                "schumacherQuartierOld"
              ),
              [sty.textprojekte_urbanScaleTimberNew__oa4OPiJsFy]: hasVariant(
                $state,
                "projekte",
                "urbanScaleTimberNew"
              ),
              [sty.textprojekte_urbanScaleTimberOld__oa4OPnGeF]: hasVariant(
                $state,
                "projekte",
                "urbanScaleTimberOld"
              ),
              [sty.textshrinked__oa4OPaQ4O]: hasVariant(
                $state,
                "shrinked",
                "shrinked"
              )
            }
          )}
        >
          {hasVariant($state, "projekte", "aschheim")
            ? "In Abstimmung mit Bauherrin und Planern wurde der Wettbewerbsbeitrag und Entwurf analysiert und optimiert hinsichtlich der Nachhaltigkeitsanforderungen durch die KfW sowie zur Reduktion von CO2-Emissionen. Daf\u00fcr wurden im gemeinsamen Austausch Benchmarks f\u00fcr das Treibhauspotential der Konstruktion und des Energiebedarfs festgelegt und schlie\u00dflich grundlegende Optimierungsm\u00f6glichkeiten hinsichtlich grauer und operativer Emissionen bzgl. Konstruktion, Lastabtrag und Materialauswahl untersucht und f\u00fcr die Umsetzung vorgeschlagen. Die Ergebnisse stellt BuildSystems der Gemeinde \u00f6ffentlichkeitswirksam zur Verf\u00fcgung, um das Einsparungspotential des neuen Rathauses anschaulich gegen\u00fcber externen Akteuren abzubilden. "
            : hasVariant($state, "projekte", "punkthaus")
            ? "Das nachhaltige Punkthaus ist ein zukunftsweisendes Beispiel f\u00fcr den Geschosswohnungsbau, das die Anspr\u00fcche an \u00f6kologische, soziale und \u00f6konomische Nachhaltigkeit erf\u00fcllt. Die Wohnungsgrundrisse sind EOF-gef\u00f6rdert und gew\u00e4hrleisten so bezahlbaren Wohnraum f\u00fcr verschiedene Zielgruppen. Das ressourcenschonende Material- und Konstruktionskonzept und der energetische KFW 40-Standard reduzieren CO2-Emissionen signifikant. Durch den hohen Kompaktheitsgrad und das effiziente A/V-Verh\u00e4ltnis wird Energie optimal genutzt. Die Durchmischung verschiedener Funktionen f\u00f6rdert soziale Interaktion und kurze Wege. Das Geb\u00e4ude erreicht eine hohe ESG-Konformit\u00e4t, sodass eine umfassende Nachhaltigkeit gew\u00e4hrleistet ist."
            : hasVariant($state, "projekte", "urbanScaleTimberNew")
            ? "Urban Scale Timber bietet ein Tool f\u00fcr automatisierte holzbauspezifische Machbarkeitsstudien f\u00fcr private und \u00f6ffentliche Projektentwickler und Planerinnen und macht entsprechendes Fachwissen greifbar, um den Entwicklungsprozess von Holzbauprojekten zu skalieren, zu verbessern und zu beschleunigen. Hierdurch k\u00f6nnen am Anfang der Projektkonzeption bzw. des Planungsprozesses belastbare Szenarien hinsichtlich des Tragwerks, eingesetzter Holzbausysteme, Baukosten und der \u00d6kobilanzierung erzeugt werden. Auf Grundlage hieraus generierter objektspezifischer Holzbau-Varianten k\u00f6nnen Rahmenbedingungen und Zielvereinbarungen fr\u00fchzeitig festgelegt und in Folge erheblich Planungszeit, -kosten und-risiken reduziert werden.\nAls Forschungstransfer erhielt das Team von Urban Scale Timber das Exist- und Fl\u00fcgge-Stipendium und wurde mit dem Gr\u00fcndungspreis + des BMWK ausgezeichnet."
            : hasVariant($state, "projekte", "urbanScaleTimberOld")
            ? "Urban Scale Timber bietet ein Tool f\u00fcr automatisierte holzbauspezifische Machbarkeitsstudien f\u00fcr private und \u00f6ffentliche Projektentwickler und Planerinnen und macht entsprechendes Fachwissen greifbar, um den Entwicklungsprozess von Holzbauprojekten zu skalieren, zu verbessern und zu beschleunigen. Hierdurch k\u00f6nnen am Anfang der Projektkonzeption bzw. des Planungsprozesses belastbare Szenarien hinsichtlich des Tragwerks, eingesetzter Holzbausysteme, Baukosten und der \u00d6kobilanzierung erzeugt werden. Auf Grundlage hieraus generierter objektspezifischer Holzbau-Varianten k\u00f6nnen Rahmenbedingungen und Zielvereinbarungen fr\u00fchzeitig festgelegt und in Folge erheblich Planungszeit, -kosten und-risiken reduziert werden.\nAls Forschungstransfer erhielt das Team von Urban Scale Timber das Exist- und Fl\u00fcgge-Stipendium und wurde mit dem Gr\u00fcndungspreis + des BMWK ausgezeichnet."
            : "Das Schumacher Quartier soll als reines Holzbauaurtier auf dem Gel\u00e4nde des ehemaligen Flughafen Tegel in Berlin entstehen. Das Modellquartier steht fu\u0308r \u00f6kologischen Neubau, Nutzungsmischung und innovative Mobilita\u0308tskonzepte sowie energetisch vorbildliche Geba\u0308ude innerhalb eines autoarmen Wohngebiets, das die ausreichende Gru\u0308nversorgung sicherstellt. Aufgrund des angestrebten Modellcharakters wird von allen Beteiligten Kreativit\u00e4t und der Wille zur Innovation erwartet. Neue Wege zu beschreiten, ist die grundlegende Anforderung. \nIm Zuge der Potenzialstudie erarbeiteten Martin Bittmann und Daniel Dieren im Austausch mit der TU Berlin und dem Fraunhofer Institut die Holzbau-Matrix, die der Tegel Projekt GmbH bei der Auswertung des Vergabeverfahrens als Grundlage dient. Die Matrix macht Nachhaltigkeitsaspekte unterschiedlicher Holzbaumethoden greifbar und legt Benchmarks f\u00fcr die Bewertung und den Vergleich der Einreichungen fest.   \n"}
        </div>
        <div
          data-plasmic-name={"linkAufProjektseite"}
          data-plasmic-override={overrides.linkAufProjektseite}
          className={classNames(projectcss.all, sty.linkAufProjektseite, {
            [sty.linkAufProjektseiteprojekte_schumacherQuartierOld]: hasVariant(
              $state,
              "projekte",
              "schumacherQuartierOld"
            ),
            [sty.linkAufProjektseiteshrinked]: hasVariant(
              $state,
              "shrinked",
              "shrinked"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToPage"] != null &&
              typeof $steps["goToPage"] === "object" &&
              typeof $steps["goToPage"].then === "function"
            ) {
              $steps["goToPage"] = await $steps["goToPage"];
            }
          }}
        >
          <SmallButton
            className={classNames("__wab_instance", sty.smallButton__kaZmN, {
              [sty.smallButtonshrinked__kaZmNaQ4O]: hasVariant(
                $state,
                "shrinked",
                "shrinked"
              )
            })}
            noLeftSiteShift={
              hasVariant($state, "shrinked", "shrinked") ? true : true
            }
            plus={hasVariant($state, "shrinked", "shrinked") ? true : undefined}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jkUEp,
                {
                  [sty.textshrinked__jkUEpaQ4O]: hasVariant(
                    $state,
                    "shrinked",
                    "shrinked"
                  )
                }
              )}
            >
              {hasVariant($state, "shrinked", "shrinked")
                ? "Projektseite"
                : "mehr Erfahren"}
            </div>
          </SmallButton>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "linkAufProjektseite"],
  img: ["img"],
  linkAufProjektseite: ["linkAufProjektseite"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  linkAufProjektseite: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjektBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjektBox__VariantsArgs;
    args?: PlasmicProjektBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjektBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjektBox__ArgsType,
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
          internalArgPropNames: PlasmicProjektBox__ArgProps,
          internalVariantPropNames: PlasmicProjektBox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjektBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjektBox";
  } else {
    func.displayName = `PlasmicProjektBox.${nodeName}`;
  }
  return func;
}

export const PlasmicProjektBox = Object.assign(
  // Top-level PlasmicProjektBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    linkAufProjektseite: makeNodeComponent("linkAufProjektseite"),

    // Metadata about props expected for PlasmicProjektBox
    internalVariantProps: PlasmicProjektBox__VariantProps,
    internalArgProps: PlasmicProjektBox__ArgProps
  }
);

export default PlasmicProjektBox;
/* prettier-ignore-end */
