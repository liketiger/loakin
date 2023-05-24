import React from "react";
import { RaidDetail } from "../../types/render-type";
import RaidInfoItem from "./RaidInfoItem";

type RaidInfoProp = {
  raid: RaidDetail[];
  scheduleId: string | undefined;
};

const RaidInfoList = (props: RaidInfoProp) => {
  const { raid, scheduleId } = props;

  return <>
   {raid.map((item, idx) => <RaidInfoItem key={idx} item={item} scheduleId={scheduleId} />)}
  </>;
};

export default RaidInfoList;
