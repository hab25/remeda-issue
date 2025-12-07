import * as R from "remeda";

export const soundPressureLevelBandToDataKey = <T extends number | string>(
  band: T
) =>
  `soundPressureLevelForThe${R.join(
    R.split(`${band}`, "."),
    "_"
  )}HertzBandInDecibels` as const;
