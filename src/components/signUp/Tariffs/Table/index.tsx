import React, { Children } from 'react';
import { Waypoint } from 'react-waypoint';
import { withContextProvider } from './withContext/index';

import { isEdge, isFirefox } from '@/helpers/browsers';

import Item, { Props as ItemProps } from './Item';
import Props from './Props';

import Header from './Header';
import Root from './Root';
import Cell from './Cell';
import Row from './Row';
import ButtonsBackground from './ButtonsBackground';

import getRows from './getRows';

/*
 * Component of the Root wrapped in context provider
 */
const Context = withContextProvider(Root);

/*
 * Component of the Tariffs
 */
const Table = (props: Props) => {
  const {
    tableRef,
    children,
    title,
    webAppTitle,
    usersText,
    adminText,
    managerText,
    dispatcherText,
    financierText,
    mobileAppTitle,
    driverText,
    customerText,
    passengerText,
    commercialUserText,
    crmTitle,
    mailingText,
    emailText,
    pushText,
    smsText,
    acbTitle,
    dataTransferText,
    ofPassengersText,
    ofCrewText,
    gibddTitle,
    ofNoticesAboutOpgdText,
    dailyTitle,
    finesText,
    gibddText,
    amppText,
    madiText,
    documentFlowTitle,
    limitsTitle,
    countOfTsText,
    carriersText,
    customersText,
    ordersText,
    issuesText,
    ordersCalendarText,
    issuesCalendarText,
    employeesText,
    templatesText,
    dealsText,
    acquiringText,
    withdrawalText,
    onEnterWaypoint,
    onLeaveWaypoint,
  } = props;

  const rows = getRows(props);

  const emptyRow = Children.map(children, (child, index) => (
    <Cell column={index} key={index} />
  ));

  return (
    <Context innerRef={tableRef}>
      <Header>
        <Row>
          <Cell
            borderBottom={true}
            borderRight={false}
            borderTop={true}
            isRootCell={true}
            rowSpan={3}
          >
            {title}
          </Cell>
          {rows.title}
        </Row>
        <Row>
          {rows.price}
        </Row>
        <Row>
          {rows.for}
        </Row>
      </Header>

      <Waypoint
        onEnter={onEnterWaypoint}
        onLeave={onLeaveWaypoint}
      />

      <tbody>
        <Row>
          <Cell isTitle={true}>{webAppTitle}</Cell>
          {rows.webApp}
        </Row>
        <Row>
          <Cell isSubtitle={true}>{usersText}</Cell>
          {emptyRow}
        </Row>
        <Row>
          <Cell>{adminText}</Cell>
          {rows.webAppAdmins}
        </Row>
        <Row>
          <Cell>{dispatcherText}</Cell>
          {rows.webAppDispatchers}
        </Row>
        <Row>
          <Cell>{managerText}</Cell>
          {rows.webAppManagers}
        </Row>
        <Row>
          <Cell borderBottom={true}>{financierText}</Cell>
          {rows.webAppFinancier}
        </Row>

        <Row>
          <Cell isTitle={true}>{mobileAppTitle}</Cell>
          {rows.mobile}
        </Row>
        <Row>
          <Cell isSubtitle={true}>{usersText}</Cell>
          {emptyRow}
        </Row>
        <Row>
          <Cell>{driverText}</Cell>
          {rows.mobileDrivers}
        </Row>
        <Row>
          <Cell>{customerText}</Cell>
          {rows.mobileCustomers}
        </Row>
        <Row>
          <Cell>{passengerText}</Cell>
          {rows.mobilePassengers}
        </Row>
        <Row>
          <Cell />
          {emptyRow}
        </Row>
        <Row>
          <Cell borderBottom={true} paddingBottom={true}>{commercialUserText}</Cell>
          {rows.mobileCommercialUsers}
        </Row>

        <Row>
          <Cell isTitle={true}>{crmTitle}</Cell>
          {rows.crm}
        </Row>
        <Row>
          <Cell isSubtitle={true}>{mailingText}</Cell>
          {emptyRow}
        </Row>
        <Row>
          <Cell>{emailText}</Cell>
          {rows.crmEmail}
        </Row>
        <Row>
          <Cell>{pushText}</Cell>
          {rows.crmPush}
        </Row>
        <Row>
          <Cell borderBottom={true}>{smsText}</Cell>
          {rows.crmSms}
        </Row>

        <Row>
          <Cell isTitle={true}>{acbTitle}</Cell>
          {rows.acb}
        </Row>
        <Row>
          <Cell isSubtitle={true}>{dataTransferText}</Cell>
          {emptyRow}
        </Row>
        <Row>
          <Cell>{ofPassengersText}</Cell>
          {rows.acbPassengers}
        </Row>
        <Row>
          <Cell borderBottom={true}>{ofCrewText}</Cell>
          {rows.acbCrew}
        </Row>

        <Row>
          <Cell isTitle={true}>{gibddTitle}</Cell>
          {rows.gibdd}
        </Row>
        <Row>
          <Cell isSubtitle={true}>{dataTransferText}</Cell>
          {emptyRow}
        </Row>
        <Row>
          <Cell borderBottom={true}>{ofNoticesAboutOpgdText}</Cell>
          {rows.gibddNoticesOfOpgd}
        </Row>

        <Row>
          <Cell isTitle={true}>{dailyTitle}</Cell>
          {rows.daily}
        </Row>
        <Row>
          <Cell isSubtitle={true}>{finesText}</Cell>
          {emptyRow}
        </Row>
        <Row>
          <Cell>{gibddText}</Cell>
          {rows.dailyGibdd}
        </Row>
        <Row>
          <Cell>{amppText}</Cell>
          {rows.dailyAmpp}
        </Row>
        <Row>
          <Cell borderBottom={true}>{madiText}</Cell>
          {rows.dailyMadi}
        </Row>

        <Row>
          <Cell isTitle={true} borderBottom={true}>{documentFlowTitle}</Cell>
          {rows.documentFlow}
        </Row>

        <Row>
          <Cell isTitle={true}>{limitsTitle}</Cell>
          {rows.limit}
        </Row>
        <Row>
          <Cell>{countOfTsText}</Cell>
          {rows.limitTs}
        </Row>
        <Row>
          <Cell>{carriersText}</Cell>
          {rows.limitCarries}
        </Row>
        <Row>
          <Cell>{customersText}</Cell>
          {rows.limitCustomers}
        </Row>
        <Row>
          <Cell>{ordersText}</Cell>
          {rows.limitOrders}
        </Row>
        <Row>
          <Cell>{issuesText}</Cell>
          {rows.limitIssues}
        </Row>
        <Row>
          <Cell>{ordersCalendarText}</Cell>
          {rows.limitOrdersCalendar}
        </Row>
        <Row>
          <Cell>{issuesCalendarText}</Cell>
          {rows.limitIssuesCalendar}
        </Row>
        <Row>
          <Cell>{employeesText}</Cell>
          {rows.limitEmployees}
        </Row>
        <Row>
          <Cell>{templatesText}</Cell>
          {rows.limitTemplates}
        </Row>
        <Row>
          <Cell>{dealsText}</Cell>
          {rows.limitDeals}
        </Row>
        <Row>
          <Cell>{acquiringText}</Cell>
          {rows.limitAcquiring}
        </Row>
        <Row>
          <Cell>{withdrawalText}</Cell>
          {rows.limitWithdrawal}
        </Row>

        <Row>
          <Cell />
          {emptyRow}
        </Row>

        <Row>
          <Cell height={49} borderBottom={true} />
          <Cell height={49} borderBottom={true} />
          <Cell height={49} borderBottom={true} />
          <Cell height={49} borderBottom={true} />
          <Cell height={49} borderBottom={true} />
        </Row>

        <Row
          position={props.areButtonsFixed ? 'fixed' : 'absolute'}
          right={props.areButtonsFixed ? props.buttonsRight
            : isEdge() ? -0.5
            : isFirefox() ? 0
            : -1
          }
        >
          <ButtonsBackground />
          {rows.buttons}
        </Row>
      </tbody>
    </Context>
  );
};

export default Table;
export { Item, ItemProps };
