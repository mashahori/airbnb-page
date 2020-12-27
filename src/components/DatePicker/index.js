import { useState } from "react";
import { DateRangePicker } from "react-dates";
import InlineSVG from "svg-inline-react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "./index.scss";

const loop = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display:block;fill:none;height:12px;width:12px;stroke:currentColor;stroke-width:5.333333333333333;overflow:visible" aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>`;

const DatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focus, setFocus] = useState("startDate");
  const [opened, setOpened] = useState(false);

  const handeleDates = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="date-picker">
      {!opened && (
        <div
          className="date-picker__button"
          onClick={() => setOpened(true)}
          role="button"
        >
          <span className="date-picker__city">Seatle</span>
          <span className="date-picker__date">Укажите дату</span>
          <div className="date-picker__icon">
            <InlineSVG src={loop} />
          </div>
        </div>
      )}
      {opened && (
        <div>
          <DateRangePicker
            startDate={startDate}
            startDateId="your_unique_start_date_id"
            endDate={endDate}
            endDateId="your_unique_end_date_id"
            onDatesChange={({ startDate, endDate }) =>
              handeleDates(startDate, endDate)
            }
            focusedInput={focus}
            onFocusChange={(focusedInput) => setFocus(focusedInput)}
            withPortal={true}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
