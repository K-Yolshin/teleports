import React, { Component } from 'react';
import Text from '@/components/common/Text';
import { Root, Wrap, Flex, Header } from './styles';

interface IItem {
  id: number;
  name: string;
  inn: string;
  adress: string;
}

interface IDropdownList {
  options?: IItem[] | undefined;
  onQuery?: any;
  onChange?: any;
}

class DropdownList extends Component<IDropdownList, {}> {

  handleSelect = (id: number) => {
    const { options } = this.props;
    const item = options && options
      .find((el: IItem) => {
        return el.id === id;
      });
    return item;
  }

  renderItem = (item: IItem[]) => {
    return item.map(({
      id,
      name,
      inn,
      adress,
    }) => {
      const selected = () => {
        this.handleSelect(id);
      };
      return (
        <Wrap key={id} onClick={selected}>
          <Text>{name}</Text>
          <Flex>
            <Text color="gray">{inn}</Text>
            {' '}
            <Text color="gray">{adress}</Text>
          </Flex>
        </Wrap>);
    });
  }

  render() {
    const { options: items } = this.props;

    if (!items) return null;

    return (
      <Root>
        <Header>
          <Text color="gray">Выберите вариант или продолжите ввод</Text>
        </Header>
        {this.renderItem(items)}
      </Root>
    );
  }
}

export default DropdownList;
