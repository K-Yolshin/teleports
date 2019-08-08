import React, { Component } from 'react';

import Text from '@/components/common/Text';

import Item from '../Item';

import Wrapper from './Wrapper';
import Header from './Header';
import Inner from './Inner';
import Root from './Root';

interface Props {
  options?: Item[] | undefined;
  onClick?: (value: Item) => void;
}

class List extends Component<Props, {}> {

  handles: any = {};

  createHandler(item: Item) {
    return () => {
      const { onClick } = this.props;
      onClick && onClick(item);
    };
  }

  getHandler(item: Item) {
    const { id } = item;

    if (!this.handles[id]) {
      this.handles[id] = this.createHandler(item);
    }

    return this.handles[id];
  }

  render() {
    const { options } = this.props;

    if (!options) {
      return null;
    }

    return (
      <Root>
        <Header>
          <Text color="gray">Выберите вариант или продолжите ввод</Text>
        </Header>
        {options.map((item: Item) => {
          const {
            address,
            name,
            inn,
            id,
          } = item;

          const onClick = this.getHandler(item);

          return (
            <Wrapper key={id} onClick={onClick}>
              <Text>{name}</Text>
              <Inner>
                <Text color="gray" overflow="elipsis">
                  {inn}
                  {' '}
                  {address}
                </Text>
              </Inner>
            </Wrapper>
          );
        })}
      </Root>
    );
  }
}

export default List;
