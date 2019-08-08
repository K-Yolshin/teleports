import React, { FC } from 'react';

import withInput from '@/helpers/containers/withInput';

import Checkbox from '@/components/common/Checkbox';

import { default as field } from '@/entities/signIn/byEmail/isNotRemember';

import create from '@/helpers/containers/create';

const Nds: FC<any> = ({
  onChange,
  value,
}) => {
  return (
    <Checkbox
      tooltip="Чужой компьютер"
      onChange={onChange}
      value={value}
    >
      Чужой компьютер
    </Checkbox>
  );
};

export default create(
  Nds,
  withInput(field),
);
