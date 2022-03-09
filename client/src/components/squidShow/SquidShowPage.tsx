import React, { FC } from "react";

import { format } from "date-fns";
import { useParams } from "react-router-dom";

import { useFindBirthSign } from "./hooks/useFindBirthSign";
import { useGetSquid } from "./hooks/useGetSquid";
import "./styles/squid-show.pcss";

export const SquidShowPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: squid, isLoading, isSuccess } = useGetSquid(id);
  const birthdayDate = squid ? new Date(squid?.birthDate) : null;
  const signDetails = useFindBirthSign(birthdayDate);

  if (isLoading) {
    return <h4>Standby while your squid is summoned...</h4>;
  }
  if (isSuccess) {
    const birthday: string = format(birthdayDate, "MMMM dd");
    return (
      <div className="squid-show">
        <div className="squid-show__header">{squid.name}</div>
        <div className="squid-show__subheader">the {squid.species}</div>
        <div className="squid-show__attribute">Special Power: {squid.specialPower}</div>
        <div className="squid-show__attribute">Experience Points: {squid.xp}</div>
        <div className="squid-show__attribute">Birthday: {birthday}</div>
        <div className="squid-show__attribute">
          Zodiac Info:
          <ul className="squid-show__zodiac-list">
            <li>
              {squid.name} is a <span className="squid-show__zodiac-sign">{signDetails.title}</span>
              ,
            </li>
            <li>who is {signDetails.traits.join(", ")},</li>
            <li>has an element of {signDetails.element},</li>
            <li>and a birthstone of {signDetails.luckyGem}!</li>
          </ul>
        </div>
      </div>
    );
  }
  return <h4>Oh no! Squid error!</h4>;
};
