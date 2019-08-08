import React, { PureComponent } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import Root, { Group, Item } from '@/components/common/Stages';
import ProgressBar from '@/components/common/ProgressBar';
import Spacer from '@/components/common/Spacer';
import Button from '@/components/common/Button';
import Box from '@/components/common/Box';

import content from './content';

const {
  companyTitle,
  profileTitle,
  nextText,
  company,
  profile,
  title,
  info,
} = content;

/**
 * Properties of the Stages.
 */
interface Props extends WithNamespaces {

  /**
   * Number of a stage.
   */
  stage: 0 | 1 | 2 | 3 | 4;

  /**
   * Name of the related form.
   */
  form?: string;
}

/**
 * Container of the stages of progress.
 */
class Stages extends PureComponent<Props> {

  /**
   * @inheritdoc
   */
  render() {
    const {
      stage,
      form,
      t,
    } = this.props;

    const percents = stage * 100 / 4;

    return (
      <>
        <Box
          footer={<ProgressBar value={percents}/>}
          title={t(title)}
          notice={t(info)}
          size="small"
        >
          <Root>
            <Group title={t(companyTitle)}>
              <Item isChecked={stage > 0}>{t(company[0])}</Item>
              <Item isChecked={stage > 1}>{t(company[1])}</Item>
              <Item isChecked={stage > 1}>{t(company[2])}</Item>
              <Item isChecked={stage > 2}>{t(company[3])}</Item>
            </Group>
            <Group title={t(profileTitle)}>
              <Item isChecked={stage > 3}>{t(profile[0])}</Item>
            </Group>
          </Root>
        </Box>
        <Spacer height={25} />
        <Button
          variant="primary"
          type="submit"
          form={form}
        >
          {t(nextText)}
        </Button>
      </>
    );
  }
}

export default withNamespaces()(Stages);
