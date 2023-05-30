import React from "react";
import RaidInfoItem from "./RaidInfoItem";
import { RaidInfoProp } from "../../types/raid";

const RaidInfoList = (props: RaidInfoProp) => {
  const { raid, scheduleId } = props;

  return <>
   {raid.map((item, idx) => <RaidInfoItem key={idx} item={item} scheduleId={scheduleId} />)}
  </>;
};

export default RaidInfoList;
