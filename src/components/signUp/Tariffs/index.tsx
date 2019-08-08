import React, { PureComponent } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';
import { Waypoint } from 'react-waypoint';

import { isEdge, isFirefox } from '@/helpers/browsers';

import Spacer from '@/components/common/Spacer';
import Text from '@/components/common/Text';

import { default as Root, Item, ItemProps } from './Table';
import { WaypointHandlerArg } from './Table/Props';
import content from './content';

/**
 * Width of table borders in px.
 */
const borderWidth = 1;

/**
 * Props of the tariffs.
 */
interface Props extends WithNamespaces {

  /**
   * Handles a select of one of items.
   */
  onSelect?: (value: string) => void;

  /**
   * Tarrifs.
   */
  items: ItemProps[];
}

/**
 * State of the Tariffs component.
 */
interface State {
  /**
   * Tarrifs.
   */
  areButtonsFixed: boolean;
  /**
   * Widths of cells in row.
   */
  rowWidths: number[];
  /**
   * Right offset for buttons when their position is fixed.
   */
  buttonsRight: number;
}

/**
 * Container of a tariffs.
 */
class Tariffs extends PureComponent<Props> {

  /**
   * @inheritdoc
   */
  state: State = {
    areButtonsFixed: false,
    rowWidths: [0, 0, 0, 0, 0],
    buttonsRight: 0,
  };

  /**
   * Ref of the table
   */
  tableRef = React.createRef();

  /**
   * Id of timeout for setButtonsStyles
   */
  buttonsStylesTimeout: any = 0;

  /**
   * @inheritdoc
   */
  componentDidMount() {
    // @ts-ignore
    const { height: docElHeight } = document.documentElement
      .getBoundingClientRect();
    const { top: tBodyTop, bottom: tBodyBottom } = (this.tableRef.current as HTMLTableElement)
      .tBodies[0].getBoundingClientRect();

    this.setState({
      areButtonsFixed: tBodyTop - docElHeight < 0 || tBodyBottom < 0,
    });

    // delayed invocation for correct values
    this.buttonsStylesTimeout = setTimeout(this.setButtonsStyles, 300);
    window.addEventListener('resize', this.setButtonsStyles);
  }

  /**
   * @inheritdoc
   */
  componentWillUnmount() {
    clearTimeout(this.buttonsStylesTimeout);
    window.removeEventListener('resize', this.setButtonsStyles);
  }

  /**
   * Handles enter top waypoint.
   */
  handleEnterTopWaypoint = ({ previousPosition }: WaypointHandlerArg) => {
    if (previousPosition === 'below') {
      this.setState({ areButtonsFixed: true });
    }
  }

  /**
   * Handles leaving top waypoint.
   */
  handleLeaveTopWaypoint = ({ currentPosition }: WaypointHandlerArg) => {
    if (currentPosition === 'below') {
      this.setState({ areButtonsFixed: false });
    }
  }

  /**
   * Handles enter bottom waypoint.
   */
  handleEnterBottomWaypoint = ({ previousPosition }: WaypointHandlerArg) => {
    if (previousPosition === 'below') {
      this.setState({ areButtonsFixed: false });
    }
  }

  /**
   * Handles leaving bottom waypoint.
   */
  handleLeaveBottomWaypoint = ({ currentPosition }: WaypointHandlerArg) => {
    if (currentPosition === 'below') {
      this.setState({ areButtonsFixed: true });
    }
  }

  /**
   * Handles a click on a variant.
   */
  handleClick = (value: any) => {
    const { onSelect } = this.props;
    onSelect && onSelect(value);
  }

  /**
   * @inheritdoc
   */
  render() {
    const { items, t } = this.props;

    return (
      <>
        <Root
          {...this.state}
          tableRef={this.tableRef}
          title={t(content.title)}
          unlimitedText={t(content.unlimitedText)}
          webAppTitle={t(content.webAppTitle)}
          usersText={t(content.usersText, { defaultValue: content.usersText })}
          adminText={t(content.adminText)}
          dispatcherText={t(content.dispatcherText)}
          managerText={t(content.managerText)}
          financierText={t(content.financierText)}
          mobileAppTitle={t(content.mobileAppTitle)}
          driverText={t(content.driverText)}
          customerText={t(content.customerText)}
          passengerText={t(content.passengerText)}
          commercialUserText={t(content.commercialUserText)}
          crmTitle={t(content.crmTitle)}
          mailingText={t(content.mailingText, { defaultValue: content.mailingText })}
          emailText={t(content.emailText)}
          pushText={t(content.pushText)}
          smsText={t(content.smsText)}
          acbTitle={t(content.acbTitle)}
          dataTransferText={t(content.dataTransferText, {
            defaultValue: content.dataTransferText,
          })}
          ofPassengersText={t(content.ofPassengersText)}
          ofCrewText={t(content.ofCrewText)}
          gibddTitle={t(content.gibddTitle)}
          ofNoticesAboutOpgdText={t(content.ofNoticesAboutOpgdText)}
          dailyTitle={t(content.dailyTitle)}
          finesText={t(content.finesText, { defaultValue: content.finesText })}
          gibddText={t(content.gibddText)}
          amppText={t(content.amppText)}
          madiText={t(content.madiText)}
          documentFlowTitle={t(content.documentFlowTitle)}
          limitsTitle={t(content.limitsTitle)}
          countOfTsText={t(content.countOfTsText)}
          carriersText={t(content.carriersText)}
          customersText={t(content.customersText)}
          ordersText={t(content.ordersText)}
          issuesText={t(content.issuesText)}
          ordersCalendarText={t(content.ordersCalendarText)}
          issuesCalendarText={t(content.issuesCalendarText)}
          employeesText={t(content.employeesText)}
          templatesText={t(content.templatesText)}
          dealsText={t(content.dealsText)}
          acquiringText={t(content.acquiringText)}
          withdrawalText={t(content.withdrawalText)}
          connectText={t(content.connectText)}
          onEnterWaypoint={this.handleEnterTopWaypoint}
          onLeaveWaypoint={this.handleLeaveTopWaypoint}
        >
          {items.map(item => (
            <Item
              onClick={this.handleClick}
              key={item.id}
              {...item}
            />
          ))}
        </Root>
        <Waypoint
          onEnter={this.handleEnterBottomWaypoint}
          onLeave={this.handleLeaveBottomWaypoint}
        />
        <Spacer height={19} />
        {content.info.map((text, index) => (
          <React.Fragment key={index}>
            <Spacer height={16} />
            <Text>{t(text)}</Text>
          </React.Fragment>
        ))}
        <Spacer height={39} />
      </>
    );
  }

  /**
   * Set styles for cells in buttons row.
   */
  setButtonsStyles = () => {
    const { right, width } = (this.tableRef.current as HTMLTableElement)
      .getBoundingClientRect();

    let delta = borderWidth;
    if (isFirefox()) delta = 0;
    else if (isEdge()) delta = borderWidth / 2;

    this.setState({
      rowWidths: this.getRowWidths(),
      buttonsRight: right - width - delta,
    });
  }

  /**
   * Returns array with widths of cells by columns.
   */
  getRowWidths() {
    const widths = [];
    const table = this.tableRef.current;
    const rowChilds = (table as HTMLTableElement).rows[0].childNodes;

    let cell: HTMLTableDataCellElement;
    // @ts-ignore
    for (cell of rowChilds) {
      widths.push(cell.getBoundingClientRect().width);
    }

    return widths;
  }
}

export default withNamespaces()(Tariffs);
