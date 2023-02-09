import { render, queryByAttribute, getByText } from "@testing-library/react";
import { Calendar } from "./Calendar";

test("components should render in the dom", () => {
  // day is  11 January 2023
  let randomDay = new Date(2023, 0, 11);

  // custom function to get an object based on id attribute
  const getById = queryByAttribute.bind(null, "id");

  //getting document object
  const dom = render(<Calendar date={randomDay} />);

  //getting calander frame based on id and checking if it is populated in dom
  const calendarFrame = getById(dom.container, "calendar-frame");
  expect(calendarFrame).toBeInTheDocument();

  const calendarHeader = getById(dom.container, "calendar-header");
  expect(calendarHeader).toBeInTheDocument();

  const calendarMonth = getById(dom.container, "calendar-month");
  expect(calendarMonth).toBeInTheDocument();

  const calendarYear = getById(dom.container, "calendar-year");
  expect(calendarYear).toBeInTheDocument();

  const calendarBody = getById(dom.container, "calendar-body");
  expect(calendarBody).toBeInTheDocument();

  // checking if 7 days from sunday to monday is present
  const DAYS_OF_THE_WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  for (let index = 1; index <= 7; index++) {
    const dayItem = getById(dom.container, `calendar-day-${index}`);
    expect(dayItem).toBeInTheDocument();
    expect(dayItem).toHaveTextContent(DAYS_OF_THE_WEEK[index - 1]);
  }
});

test("it should have expected initial value", () => {
  // day is  8 March 2023
  let randomDay = new Date(2023, 2, 8);

  // custom function to get an object based on id attribute
  const getById = queryByAttribute.bind(null, "id");

  //getting document object
  const dom = render(<Calendar date={randomDay} />);

  const calendarMonth = getById(dom.container, "calendar-month");
  // checking calendar month text is correct
  expect(calendarMonth).toHaveTextContent("March");

  const calendarYear = getById(dom.container, "calendar-year");
  // checking calendar month text is correct
  expect(calendarYear).toHaveTextContent("2023");

  //check if current day is highlighted
  const selectedDayItem = getByText(dom.container, "8");
  expect(selectedDayItem).toHaveStyle(`background:#839496`);

  //check if any other day is not higlighted
  for (let index = 1; index <= randomDay.getDate(); index++) {
    const selectedDayItem = getByText(dom.container, index.toString());
    if (selectedDayItem && index !== 8) {
      expect(selectedDayItem).not.toHaveStyle(`background:#839496`);
    }
  }
});
