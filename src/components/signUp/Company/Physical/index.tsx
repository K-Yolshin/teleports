import React, { FC } from 'react';

import Select, { Option as SelectOption } from '@/components/common/Select';
import Radio, { Option as RadioOption } from '@/components/common/Radio';
import ImagesInput from '@/components/common/ImagesInput';
import ImageInput from '@/components/common/ImageInput';
import DateInput from '@/components/common/DateInput';
import { Item } from '@/components/common/HorzForm';
import Checkbox from '@/components/common/Checkbox';
import Input from '@/components/common/Input';

import PhotosText from '../PhotosText';
import content from '../content';

const getMaxBirthdayDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 16);
  return date;
};

const {
  noSecondNameText,
  secondNameTitle,
  secondNameText,

  firstNameTitle,
  firstNameText,

  lastNameTitle,
  lastNameText,

  birthdayTitle,
  birthdayText,

  birthPlaceTitle,
  birthPlaceText,

  sexFemaleText,
  sexMaleText,
  sexTitle,

  idTitle,
  idText,

  docTypeTitle,
  docTypeText,
  docTypes,

  docNumberTitle,
  docNumberText,

  innPhysicalText,
  innTitle,

  photosTitle,
  logoTitle,

  siteTitle,
  siteText,
  siteInfo,
} = content;

/**
 * Fields for physical subject.
 */
const Physical: FC<any> = ({
  handleChange,
  isExpanded,
  t,

  firstNameError,
  firstName,

  noSecondName,
  secondName,

  lastNameError,
  lastName,

  birthdayError,
  birthday,

  birthPlace,

  sex,

  id,

  docNumber,
  docType,
  documentNumberError,

  inn,
  innError,

  photos,
  logo,

  site,
  siteError,
}) => (
  <>
    <Item
      title={t(lastNameTitle)}
      isRequired={true}
      width="small"
    >
      <Input
        onChange={handleChange}
        placeholder={t(lastNameText)}
        error={t(lastNameError)}
        errorDisplay="tooltip"
        value={lastName}
        name="lastName"
      />
    </Item>
    <Item
      title={t(firstNameTitle)}
      isRequired={true}
      width="small"
    >
      <Input
        onChange={handleChange}
        placeholder={t(firstNameText)}
        errorDisplay="tooltip"
        error={t(firstNameError)}
        value={firstName}
        name="firstName"
      />
    </Item>
    <Item
      isFade={noSecondName}
      title={t(secondNameTitle)}
      width="small"
      aside={(
        <Checkbox
          onChange={handleChange}
          value={noSecondName}
          name="noSecondName"
        >
          {t(noSecondNameText)}
        </Checkbox>
      )}
    >
      <Input
        onChange={handleChange}
        placeholder={t(secondNameText)}
        isDisabled={noSecondName}
        value={secondName}
        name="secondName"
      />
    </Item>
    <Item
      title={t(birthdayTitle)}
      isRequired={true}
      width="auto"
    >
      <DateInput
        placeholder={t(birthdayText)}
        onChange={handleChange}
        errorDisplay="tooltip"
        error={t(birthdayError)}
        value={birthday}
        name="birthday"
        maxDate={getMaxBirthdayDate()}
      />
    </Item>
    {isExpanded && (
      <>
        <Item
          title={t(birthPlaceTitle)}
          width="normal"
        >
          <Input
            placeholder={t(birthPlaceText)}
            onChange={handleChange}
            value={birthPlace}
            name="birthPlace"
          />
        </Item>
        <Item title={t(sexTitle)} width="auto">
          <Radio
            onChange={handleChange}
            value={sex}
            name="sex"
          >
            <RadioOption value="male">{t(sexMaleText)}</RadioOption>
            <RadioOption value="female">{t(sexFemaleText)}</RadioOption>
          </Radio>
        </Item>
        <Item
          title={t(idTitle)}
          width="normal"
          isFade={true}
        >
          <Input
            placeholder={t(idText)}
            onChange={handleChange}
            isDisabled={true}
            value={id}
            name="id"
          />
        </Item>
        <Item
          title={t(docTypeTitle)}
          width="normal"
        >
          <Select
            placeholder={t(docTypeText)}
            onChange={handleChange}
            value={docType}
            name="docType"
          >
            {docTypes.map((type, index) => (
              <SelectOption value={index} key={index}>{t(type)}</SelectOption>
            ))}
          </Select>
        </Item>
        <Item title={t(docNumberTitle)} width="normal">
          <Input
            placeholder={t(docNumberText)}
            onChange={handleChange}
            value={docNumber}
            error={documentNumberError}
            errorDisplay="tooltip"
            name="docNumber"
          />
        </Item>
        <Item title={t(innTitle)} width="normal">
          <Input
            placeholder={t(innPhysicalText)}
            onChange={handleChange}
            value={inn}
            error={t(innError)}
            errorDisplay="tooltip"
            name="inn"
          />
        </Item>
        <Item
          title={logoTitle}
          width="x-small"
        >
          <ImageInput
            onChange={handleChange}
            value={logo}
            name="logo"
          />
        </Item>
        <Item
          title={t(photosTitle)}
          width="wide"
          helper={<PhotosText t={t} />}
        >
          <ImagesInput
            onChange={handleChange}
            value={photos}
            name="photos"
          />
        </Item>
        <Item
          title={t(siteTitle)}
          notice={t(siteInfo)}
          width="normal"
        >
          <Input
            placeholder={t(siteText)}
            onChange={handleChange}
            value={site}
            error={siteError}
            errorDisplay="tooltip"
            name="site"
          />
        </Item>
      </>
    )}
  </>
);

export default Physical;
