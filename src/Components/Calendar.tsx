import { useState, useEffect, FC } from "react";
import styled, { css } from "styled-components";
import { CalendarPropsTypes, dayType } from "../Common/types";

const Frame = styled.div`
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
  const DAYS_OF_THE_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
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

  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
  }, [date]);

  function getStartDayOfMonth(dateValue: Date) {
    return new Date(dateValue.getFullYear(), dateValue.getMonth(), 1).getDay();
  }

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  return (
    <Frame>
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
            const dayNumber = index - (startDay - 2);
            return (
              <Day key={index} isSelectedDate={dayNumber === day}>
                {dayNumber > 0 ? dayNumber : ""}
              </Day>
            );
          })}
      </Body>
    </Frame>
  );
};
