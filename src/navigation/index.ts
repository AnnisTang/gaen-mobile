import { useCallback } from "react"
import { Platform, StatusBar } from "react-native"
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation"
import { useFocusEffect } from "@react-navigation/native"

export type NavigationProp = NavigationScreenProp<
  NavigationState,
  NavigationParams
>

export type OnboardingScreen =
  | "Welcome"
  | "PersonalPrivacy"
  | "NotificationDetails"
  | "ShareDiagnosis"
  | "NotificationPermissions"
  | "EnableExposureNotifications"
  | "LanguageSelection"

export const OnboardingScreens: {
  [key in OnboardingScreen]: OnboardingScreen
} = {
  Welcome: "Welcome",
  PersonalPrivacy: "PersonalPrivacy",
  NotificationDetails: "NotificationDetails",
  ShareDiagnosis: "ShareDiagnosis",
  NotificationPermissions: "NotificationPermissions",
  EnableExposureNotifications: "EnableExposureNotifications",
  LanguageSelection: "LanguageSelection",
}

export type ExposureHistoryScreen = "ExposureHistory" | "NextSteps" | "MoreInfo"

export const ExposureHistoryScreens: {
  [key in ExposureHistoryScreen]: ExposureHistoryScreen
} = {
  ExposureHistory: "ExposureHistory",
  NextSteps: "NextSteps",
  MoreInfo: "MoreInfo",
}

export type MoreStackScreen =
  | "Settings"
  | "About"
  | "Licenses"
  | "ENDebugMenu"
  | "LanguageSelection"
  | "AffectedUserFlow"
  | "ExposureListDebugScreen"
  | "ENLocalDiagnosisKey"

export const MoreStackScreens: {
  [key in MoreStackScreen]: MoreStackScreen
} = {
  Settings: "Settings",
  About: "About",
  Licenses: "Licenses",
  LanguageSelection: "LanguageSelection",
  ENDebugMenu: "ENDebugMenu",
  AffectedUserFlow: "AffectedUserFlow",
  ENLocalDiagnosisKey: "ENLocalDiagnosisKey",
  ExposureListDebugScreen: "ExposureListDebugScreen",
}

export type SelfAssessmentScreen = "SelfAssessment"

export const SelfAssessmentScreens: {
  [key in SelfAssessmentScreen]: SelfAssessmentScreen
} = {
  SelfAssessment: "SelfAssessment",
}

export type AffectedUserFlowScreen =
  | "AffectedUserStart"
  | "AffectedUserCodeInput"
  | "AffectedUserPublishConsent"
  | "AffectedUserConfirmUpload"
  | "AffectedUserExportDone"
  | "AffectedUserComplete"

export const AffectedUserFlowScreens: {
  [key in AffectedUserFlowScreen]: AffectedUserFlowScreen
} = {
  AffectedUserStart: "AffectedUserStart",
  AffectedUserCodeInput: "AffectedUserCodeInput",
  AffectedUserPublishConsent: "AffectedUserPublishConsent",
  AffectedUserConfirmUpload: "AffectedUserConfirmUpload",
  AffectedUserExportDone: "AffectedUserExportDone",
  AffectedUserComplete: "AffectedUserComplete",
}
export type Screen =
  | OnboardingScreen
  | ExposureHistoryScreen
  | MoreStackScreen
  | SelfAssessmentScreen
  | AffectedUserFlowScreen
  | "Home"

export const Screens: { [key in Screen]: Screen } = {
  ...OnboardingScreens,
  ...ExposureHistoryScreens,
  ...MoreStackScreens,
  ...SelfAssessmentScreens,
  ...AffectedUserFlowScreens,
  Home: "Home",
}

export type Stack =
  | "Onboarding"
  | "ExposureHistoryFlow"
  | "SelfAssessment"
  | "More"
  | "AffectedUserFlow"

export const Stacks: { [key in Stack]: Stack } = {
  Onboarding: "Onboarding",
  ExposureHistoryFlow: "ExposureHistoryFlow",
  SelfAssessment: "SelfAssessment",
  More: "More",
  AffectedUserFlow: "AffectedUserFlow",
}

type BarStyle = "dark-content" | "light-content"

export const useStatusBarEffect = (barStyle: BarStyle): void => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(barStyle)
      Platform.OS === "android" && StatusBar.setTranslucent(true)
    }, [barStyle]),
  )
}
