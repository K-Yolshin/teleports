import React, { Children } from 'react';

import ValuedButton from '@/components/common/ValuedButton';

import BlueContentBottom from './BlueContentBottom';
import BlueContentTop from './BlueContentTop';
import ButtonContainer from './ButtonContainer';
import Subcell from './Subcell';
import Cell from './Cell';
import Props from './Props';
import { Props as ItemProps } from './Item';

import check from '@/assets/tariffs-check.svg';
import cross from '@/assets/tariffs-cross.svg';

/*
 * Array of names of rows with usual render function
 */
const simpleRowsNames = [
  'webApp',
  'webAppAdmins',
  'webAppDispatchers',
  'webAppManagers',
  'mobile',
  'mobileDrivers',
  'mobileCustomers',
  'mobilePassengers',
  'crm',
  'crmEmail',
  'crmPush',
  'acb',
  'acbPassengers',
  'gibdd',
  'dailyGibdd',
  'dailyAmpp',
  'limit',
  'limitTs',
  'limitCarries',
  'limitCustomers',
  'limitOrders',
  'limitIssues',
  'limitOrdersCalendar',
  'limitIssuesCalendar',
  'limitEmployees',
  'limitTemplates',
  'limitDeals',
  'limitAcquiring',
  'limitWithdrawal',
];

/*
 * Array of names of rows with border and usual render function
 */
const borderBotomRowsNames = [
  'for',
  'webAppFinancier',
  'mobileCommercialUsers',
  'crmSms',
  'acbCrew',
  'gibddNoticesOfOpgd',
  'dailyMadi',
  'documentFlow',
];

/*
 * Returns object with rendered rows content of Table by name of row
 */
export default function getRows({ children, unlimitedText, connectText, rowWidths }: Props) {
  const rows: any = {};

  simpleRowsNames.forEach((rowName: string) => {
    rows[rowName] = [];
  });
  borderBotomRowsNames.forEach((rowName: string) => {
    rows[rowName] = [];
  });
  rows.title = [];
  rows.daily = [];
  rows.price = [];
  rows.buttons = [];

  const renderValue = (value: boolean | number | string) => {
    if (typeof(value) === 'boolean') {
      return value
        ? <img src={check} />
        : <img src={cross} />;
    }

    if (typeof(value) === 'number' || typeof(value) === 'string') {
      return value < 0
        ? unlimitedText
        : value;
    }

    return '';
  };

  Children.forEach(children, (child, index) => {
    // @ts-ignore
    const childProps = child.props;
    const item = childProps as ItemProps;

    simpleRowsNames.forEach((rowName: string) => {
      rows[rowName].push((
        <Cell column={index} key={index}>
          {renderValue(item[rowName])}
        </Cell>
      ));
    });

    borderBotomRowsNames.forEach((rowName: string) => {
      rows[rowName].push((
        <Cell borderBottom={true} column={index} key={index}>
          {renderValue(item[rowName])}
        </Cell>
      ));
    });

    rows.title.push((
      <Cell
        borderBottom={true}
        borderRight={false}
        borderLeft={false}
        isBlueCell={true}
        column={index}
        key={index}
      >
        <BlueContentTop column={index}>
          {item.name}
        </BlueContentTop>
      </Cell>
    ));

    rows.price.push((
      <Cell
        column={index}
        borderLeft={false}
        borderRight={false}
        borderBottom={true}
        isBlueCell={true}
        height={85}
        key={index}
      >
        <BlueContentBottom
          column={index}
          firstRow={item.free}
          secondRow={item.price}
          thirdRow={item.per}
        />
      </Cell>
    ));

    rows.daily.push((
      <Cell
        column={index}
        key={index}
      >
        <Subcell>{renderValue(item.daily)}</Subcell>
        <Subcell>{renderValue(item.dailyPer)}</Subcell>
      </Cell>
    ));

    rows.buttons.push((
      <ButtonContainer
        width={rowWidths[index + 1]}
        column={index}
        key={index}
      >
        <ValuedButton
          onClick={item.onClick}
          value={item.id}
          variant="greenHover"
          borderRadius={20}
          fontSize={14}
          flat={true}
        >
          {connectText}
        </ValuedButton>
      </ButtonContainer>
    ));
  });

  return rows;
}
