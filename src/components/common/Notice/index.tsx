import React, { Component, createRef, SyntheticEvent } from 'react';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import Markdown from 'react-markdown';

import ButtonContainer from './ButtonContainer';
import { arrowStyles } from './StyledArrow';
import Content from './Content';

interface State {
  /**
   * State of Notice opened.
   */
  isOpened: boolean;
}

interface Props {

  /**
   * Children is element, which trigger popover on by onClick.
   */
  children: React.ReactElement<any>;

  /**
   * Content of popover.
   */
  content?: React.ReactNode|React.ReactNodeArray;

  /**
   * Markdown text of the popover.
   */
  text?: string;

  /**
   * Positionong of popover.
   * @default bottom
   */
  positioning?: 'bottom'|'left'|'right'|'top';
}

/**
 * Component of the Notice.
 */
class Notice extends Component<Props, State> {

  private readonly rootRef: React.RefObject<HTMLDivElement> = createRef();

  state: State = {
    isOpened: false,
  };

  openHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState({
      isOpened: !this.state.isOpened,
    });
  }

  componentDidMount() {
    document.body.addEventListener('click', this.onBodyClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onBodyClick);
  }

  onBodyClick = (e: Event) => {
    const { current } = this.rootRef;
    const { isOpened } = this.state;

    if (current && current.contains(e.target as Node)) {
      return;
    }

    if (isOpened) {
      this.setState({ isOpened: false });
    }
  }

  render() {
    const {
      positioning,
      children,
      content,
      text,
    } = this.props;

    const contentNode = content || <Markdown source={text} />;

    return (
      <Popover
        isOpen={this.state.isOpened}
        position={positioning}
        padding={0}
        // tslint:disable-next-line jsx-no-lambda
        content={({ position, targetRect, popoverRect }) => (
          <ArrowContainer
            popoverRect={popoverRect}
            arrowStyle={arrowStyles}
            targetRect={targetRect}
            position={position}
            arrowSize={15}
          >
            <Content ref={this.rootRef}>
              {contentNode}
            </Content>
          </ArrowContainer>
        )}
      >
        <ButtonContainer onClick={this.openHandler}>
          {children}
        </ButtonContainer>
      </Popover>
    );
  }
}

export default Notice;
