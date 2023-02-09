import { useState, useEffect, FC } from "react";
import styled, { css } from "styled-components";
import { CalendarPropsTypes, dayType } from "../Common/types";
import { utils } from "../Common/utils";

const CalendarFrame = styled.div`
  width: 18rem;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
  background: #09171d;
  color: #728284;
`;

const Header = styled.div`
  font-size: 18px;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;
`;

const Day = styled.div<dayType>`
  width: 14.2%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props: dayType) =>
    props.isSelectedDate &&
    css`
      background-color: #839496;
      color: #011216;
    `}
`;

export const Calendar: FC<CalendarPropsTypes> = ({ date }) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const MONTHS = [
    "Janury",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //state values starts here
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(utils.getStartDayOfMonth(date));
  // state values ends here

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(utils.getStartDayOfMonth(date));
  }, [date]);

  const days = utils.isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  return (
    <CalendarFrame id={"calendar-frame"}>
      <Header>
        <div>
          {MONTHS[month]} {year}
        </div>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((dayItemValue) => (
          <Day key={dayItemValue}>
            <div>{dayItemValue}</div>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const dayNumber = index - (startDay - 1);
            return (
              <Day key={index} isSelectedDate={dayNumber === day}>
                {dayNumber > 0 ? dayNumber : ""}
              </Day>
            );
          })}
      </Body>
    </CalendarFrame>
  );
};
