import { Platform, PlatformColor } from "react-native";

const primaryColor =
  Platform.OS === "ios"
    ? PlatformColor("systemBlue")
    : PlatformColor("@android:color/holo_blue_dark");

const secondary =
  Platform.OS === "ios"
    ? PlatformColor("systemGray4")
    : PlatformColor("@android:color/holo_gray_dark");

export default {
  primaryColor,
  secondary,
};
