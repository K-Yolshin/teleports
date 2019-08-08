import { ReactNode } from 'react';

/**
 * Argument for Waypoint handlers.
 */
export interface WaypointHandlerArg {

  /**
   * The position that the waypoint has at the moment.
   */
  currentPosition: string;

  /**
   * The position that the waypoint had before.
   */
  previousPosition: string;
}

/**
 * Props of the Tariffs component.
 */
export default interface Props {
  title: string;

  unlimitedText: string;

  webAppTitle: string;
  usersText: string;
  adminText: string;
  dispatcherText: string;
  managerText: string;
  financierText: string;

  mobileAppTitle: string;
  driverText: string;
  customerText: string;
  passengerText: string;
  commercialUserText: string;

  crmTitle: string;
  mailingText: string;
  emailText: string;
  pushText: string;
  smsText: string;

  acbTitle: string;
  dataTransferText: string;
  ofPassengersText: string;
  ofCrewText: string;

  gibddTitle: string;
  ofNoticesAboutOpgdText: string;

  dailyTitle: string;
  finesText: string;
  gibddText: string;
  amppText: string;
  madiText: string;

  documentFlowTitle: string;

  limitsTitle: string;
  countOfTsText: string;
  carriersText: string;
  customersText: string;
  ordersText: string;
  issuesText: string;
  ordersCalendarText: string;
  issuesCalendarText: string;
  employeesText: string;
  templatesText: string;
  dealsText: string;
  acquiringText: string;
  withdrawalText: string;

  connectText: string;

  children: ReactNode;

  tableRef: React.Ref<any>;

  areButtonsFixed: boolean;
  rowWidths: number[];
  buttonsRight: number;

  onEnterWaypoint: (arg: WaypointHandlerArg) => void;
  onLeaveWaypoint: (arg: WaypointHandlerArg) => void;
}
