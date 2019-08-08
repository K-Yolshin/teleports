import React, { Component } from 'react';

import InputPopup from '@/components/common/InputPopup';
import Select, { Option } from '@/components/common/Select';
import Error from '@/components/common/Error';

import content from './content';
import Field from './Field';
import Root from './Root';

/**
 * Props of the DateInput component.
 */
export interface Props {

  /**
   * Value of DateInput.
   */
  value?: Date;

  /**
   * Name of the input element.
   */
  name?: string;

  /**
   * True if the control must be disabled.
   */
  isDisabled?: boolean;

  /**
   * Placeholder.
   */
  placeholder?: string;

  /**
   * Max available date.
   */
  maxDate?: Date;

  /**
   * Min available date.
   */
  minDate?: Date;

  /**
   * Change handler.
   */
  onChange?: (value: any, name?: string) => void;

  /**
   * Text with red border or only red border.
   */
  error?: string | boolean;

  /**
   * Display error mode.
   * @default "normal"
   */
  errorDisplay?: 'normal' | 'tooltip';
}

/**
 * State of the DateInput component.
 */
interface State {

  /**
   * The value of the component.
   */
  value?: Date;
}

/**
 * Counts of the days by months.
 */
const daysCounts = [
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

/**
 * Returns a list with year, month and date of the value.
 * @param value The date.
 */
const splitDate = (value: Date) => {
  const year = value.getFullYear();
  const month = value.getMonth();
  const date = value.getDate();

  return [
    date,
    month,
    year,
  ];
};

/**
 * Returns a single value from a components.
 * @param year Year of the value.
 * @param month Month of the value.
 * @param date Date of the value.
 */
const joinDate = (date: number, month: number, year: number) => {
  return new Date(year, month, date, 0, 0, 0, 0);
};

/**
 * Returns a normalized date.
 * @param value The dirty date.
 */
const normalizeDate = (value: Date) => {
  const [year, month, date] = splitDate(value);
  return joinDate(year, month, date);
};

/**
 * Component of the DateInput.
 */
export default class DateInput extends Component<Props, State> {

  /**
   * @inheritdoc
   */
  state: State = { value: undefined };

  /**
   * @inheritdoc
   */
  static getDerivedStateFromProps(props: Props, state: State) {
    const value = props.hasOwnProperty('value')
      ? props.value ? normalizeDate(props.value) : props.value
      : state.value;

    return { ...state, value };
  }

  /**
   * Sets a state value.
   * @param year Year.
   * @param month Month.
   * @param date Days.
   */
  setValue = (date: number, month: number, year: number) => {
    let newDate = date;
    let newMonth = month;
    let newYear = year;

    const { maxDate, minDate } = this.props;
    if (maxDate && newYear > maxDate.getFullYear()) newYear = maxDate.getFullYear();
    if (maxDate && newYear >= maxDate.getFullYear() && newMonth > maxDate.getMonth()) {
      newMonth = maxDate.getMonth();
    }
    if (maxDate && newYear >= maxDate.getFullYear() && newMonth >= maxDate.getMonth() && newDate > maxDate.getDate()) {
      newDate = maxDate.getDate();
    }

    if (minDate && newYear < minDate.getFullYear()) newYear = minDate.getFullYear();
    if (minDate && newYear <= minDate.getFullYear() && newMonth < minDate.getMonth()) {
      newMonth = minDate.getMonth();
    }
    if (minDate && newYear <= minDate.getFullYear() && newMonth <= minDate.getMonth() && newDate < minDate.getDate()) {
      newDate = minDate.getDate();
    }

    const nextValue = joinDate(newDate, newMonth, newYear);

    this.setState({ value: nextValue });

    const { onChange, name } = this.props;
    onChange && onChange(nextValue, name);
  }

  /**
   * Returns a units of the current value..
   */
  getUnits = () => this.state.value
    ? splitDate(this.state.value)
    : [1, 0, content.minYear]

  /**
   * Handles a change of the year's select.
   */
  handleYearChange = (value?: any) => {
    const units = this.getUnits();

    const year = value || content.minYear;
    const [date, month] = units;

    this.setValue(date, month, year);
  }

  /**
   * Handles a change of the month's select.
   */
  handleMonthChange = (value?: any) => {
    const units = this.getUnits();

    const month = value;
    const [date, , year] = units;

    const daysCount = daysCounts[month];
    const nextDate = date > daysCount ? daysCount : date;

    this.setValue(nextDate, month, year);
  }

  /**
   * Handles a change of the date's select.
   */
  handleDateChange = (value?: any) => {
    const units = this.getUnits();

    const date = value;
    const [, month, year] = units;

    this.setValue(date, month, year);
  }

  /**
   * @inheritdoc
   */
  render() {
    const { value } = this.state;
    const {
      minDate,
      maxDate,
      errorDisplay = 'normal',
      placeholder,
      isDisabled,
      error,
    } = this.props;

    const text = placeholder || content.text;
    const [yearText, monthText, dateText] = text.split(/\s*\/\s*/g);

    let month;
    let year;
    let date;

    if (value) {
      [date, month, year] = splitDate(value);
    }

    const errorText = typeof error === 'string' ? error : '';
    const isError = Boolean(errorText);

    const isTooltip = errorDisplay === 'tooltip';

    const monthsNode: any = [];
    const yearsNode: any = [];
    const datesNode: any = [];

    let maxYear = content.maxYear;
    let maxMonth = content.months.length;
    let daysCount = daysCounts[month || 0];

    let minMonth = 0;
    let minDay = 1;
    let minYear = content.minYear;

    if (maxDate) {
      maxYear = maxDate.getFullYear();
    }

    if (maxDate && year === maxDate.getFullYear()) {
      maxMonth = maxDate.getMonth() + 1;
    }

    if (maxDate && year === maxDate.getFullYear() && month === maxDate.getMonth()) {
      daysCount = maxDate.getDate();
    }

    if (minDate) {
      minYear = minDate.getFullYear();
    }

    if (minDate && year === minDate.getFullYear()) {
      minMonth = minDate.getMonth();
    }

    if (minDate && year === minDate.getFullYear() && month === minDate.getMonth()) {
      minDay = minDate.getDate();
    }

    for (let i = minYear; i <= maxYear; i += 1) {
      const yearNode = <Option key={i} value={i}>{i}</Option>;
      yearsNode.push(yearNode);
    }

    for (let i = minMonth; i < maxMonth; i += 1) {
      const monthNode = <Option key={i} value={i}>{content.months[i]}</Option>;
      monthsNode.push(monthNode);
    }

    for (let i = minDay; i <= daysCount; i += 1) {
      const dateNode = <Option key={i} value={i}>{i}</Option>;
      datesNode.push(dateNode);
    }

    const isDateDisabled = isDisabled || !value;
    const isMonthDisabled = isDisabled || !value;
    const isYearDisabled = isDisabled;

    return (
      <InputPopup
        isShown={isError && isTooltip}
        text={errorText}
      >
        <Root>
          <Field>
            <Select
              onChange={this.handleDateChange}
              disabled={isDateDisabled}
              placeholder={dateText}
              error={isError}
              value={date}
            >
              {datesNode}
            </Select>
          </Field>
          <Field>
            <Select
              onChange={this.handleMonthChange}
              disabled={isMonthDisabled}
              placeholder={monthText}
              error={isError}
              value={month}
            >
              {monthsNode}
            </Select>
          </Field>
          <Field>
            <Select
              onChange={this.handleYearChange}
              disabled={isYearDisabled}
              placeholder={yearText}
              error={isError}
              value={year}
            >
              {yearsNode}
            </Select>
          </Field>
        </Root>

        {!isTooltip && Boolean(errorText) && (
          <Error>{errorText}</Error>
        )}
      </InputPopup>
    );
  }
}
