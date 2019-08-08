import React, { createRef, PureComponent, ReactElement, ReactText } from 'react';
import Root from './Root';
import Option from './Option';
import Context from './Context';
import Item from './Item';
import Text from './Text';
import Icon from './Icon';

/**
 *  Type for React Element Option
 */
type OptionType = ReactElement<{ value: ReactText, children: ReactText }>;

/**
 * Props for Select component
 */
interface SelectProps {
  /**
   * Handler of a click event.
   */
  onChange?: (value: string) => void;
  /**
   * Add red border if true.
   */
  error?: boolean;
  /**
   * Text in the placeholder.
   */
  placeholder?: string;
  /**
   * Text in the tooltip.
   */
  tooltip?: string;
  /**
   * Elements in the ButtonGroup.
   */
  children: OptionType | OptionType[];
  /**
   * Selected value
   */
  value: React.ReactText;
}

/**
 * State for Select component
 */
interface SelectState {
  /**
   * Show or hidden drop-down list (Context)
   */
  show: boolean;
}

/**
 * Component of the Select
 */
class Select extends PureComponent<SelectProps, SelectState> {

  private readonly rootRef: React.RefObject<HTMLDivElement> = createRef();

  state = {
    show: false,
  };

  componentDidMount(): void {
    document.body.addEventListener('click', this.onBodyClick);
  }

  componentWillUnmount(): void {
    document.body.removeEventListener('click', this.onBodyClick);
  }

  onBodyClick = (e: Event) => {
    const { show } = this.state;

    const { current } = this.rootRef;

    if (current && current.contains(e.target as Node)) {
      return;
    }

    if (show) {
      this.hideContext();
    }
  }

  hideContext = () => {
    this.setState({ show: false });
  }

  toggleContext = () => {
    this.setState({ show: !this.state.show });
  }

  onSelectItem = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLDivElement;

    const value = this.getOptionValue(target);

    if (this.props.onChange && value) {
      this.props.onChange(value);
    }

    this.hideContext();
  }

  getOptionValue = (element: HTMLDivElement) => {
    const optionAttrValue = element.attributes.getNamedItem('value');

    return optionAttrValue ? optionAttrValue.value : '';
  }

  render() {
    const { children, value, error = false, tooltip: title } = this.props;

    const { show } = this.state;

    const selectedOption =
      React.Children
        .toArray(children)
        .find((child: OptionType) => child.props.value === value);

    const text = selectedOption ? (selectedOption as OptionType).props.children : '';

    return (
      <Root ref={this.rootRef}>
        <Item title={title} error={error} onClick={this.toggleContext}>
          <Text>{text}</Text>
          <Icon active={show}/>
        </Item>
        {show ? <Context onClick={this.onSelectItem}>{children}</Context> : null}
      </Root>
    );
  }
}

export { Option };

export default Select;
export { Item as Text };
