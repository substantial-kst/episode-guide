import React from "react";
import {getOrdinal, months, stringLeadingZeros} from "../utils/DateFormatter";

const BroadcastDate:React.FC<BroadcastDate> = broadcastDate => (
    <p>
        <span>Original Broadcast: </span>
        <span>{months.full[parseInt(broadcastDate.month) - 1]} </span>
        <span>{stringLeadingZeros(broadcastDate.date)}<sup>{`${getOrdinal(broadcastDate.date)}`}</sup>, </span>
        <span>{broadcastDate.year}</span>
    </p>
);

export default BroadcastDate;