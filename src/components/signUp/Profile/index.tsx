import React, { PureComponent } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import HorzForm, { Item } from '@/components/common/HorzForm';
import AvatarInput from '@/components/common/AvatarInput';
import DateInput from '@/components/common/DateInput';
import Checkbox from '@/components/common/Checkbox';
import Select, { Option } from '@/components/common/Select';
import Spacer from '@/components/common/Spacer';
import Input from '@/components/common/Input';
import Text from '@/components/common/Text';
import Box from '@/components/common/Box';

import isValid from '@/helpers/email/isValid';
import isDigit from '@/helpers/validators/isDigit';

import content from './content';

const getMaxBirthdayDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 16);
  return date;
};

const {
  certTypeDateTitle,
  certNumberTitle,
  certNumberText,
  certDateTitle,
  certDateText,
  certTypesTitle,
  certTypesText,
  passwordAgainTitle,
  passwordAgainText,
  passwordsTitle,
  passwordTitle,
  passwordText,
  noSecondNameText,
  secondNameTitle,
  experienceText,
  secondNameText,
  firstNameTitle,
  firstNameText,
  lastNameTitle,
  birthdayTitle,
  birthdayText,
  lastNameText,
  profileTitle,
  photoTitle,
  isDriverTitle,
  isDriverInfo,
  emailTitle,
  emailInfo,
  emailText,
} = content;

/**
 * Value of the form.
 */
export interface Value {

  /**
   * Value of the input element of the form.
   */
  [name: string]: any;

  // errors of the fiels.
  passwordAgainError?: string;
  certTypesError?: string;
  certNumberError?: string;
  firstNameError?: string;
  lastNameError?: string;
  passwordError?: string;
  emailError?: string;
}

/**
 * Properties of the Profile.
 */
interface Props extends WithNamespaces {

  /**
   * Name of the form.
   */
  name?: string;

  /**
   * Handles a submit of the form.
   */
  onSubmit?: (values: any, name?: string) => void;

  /**
   * Profile data from redux store
   */
  profile?: {
    value: object,
  };
}

/**
 * State of the Profile.
 */
interface State {

  /**
   * Value of the input element of the form.
   */
  [name: string]: any;
}

/**
 * Returns a cyrillic variant of the word.
 * @param number A number.
 * @param words Collection of the variants of the word.
 */
const getWord = (number: number, ...words: string[]) => {
  const value = Math.abs(number) % 100;
  const lastChar = value % 10;

  if (value > 10 && value < 20) {
    return words[2];
  }

  if (lastChar > 1 && lastChar < 5) {
    return words[1];
  }

  if (lastChar === 1) {
    return words[0];
  }

  return words[2];
};

/**
 * Component of the profile's form.
 * @param p Properties.
 */
class Profile extends PureComponent<Props, State> {

  /**
   * @inheritDoc
   */
  constructor(props: Props) {
    super(props);

    const { profile } = this.props;

    const profileValue = profile && profile.value ? profile.value : {};

    this.state = {
      noSecondName: false,
      certTypeDates: [],
      isDriver: false,
      certTypes: [],

      ...profileValue,
      passwordAgain: profileValue['password'],
    };
  }

  /**
   * @inheritdoc
   */
  static getDerivedStateFromProps(props: Props, state: State) {
    const { noSecondName } = state;
    const secondName = noSecondName ? '' : state.secondName;

    return { ...state, secondName };
  }

  /**
   * Handles a change of the input element.
   * @param value The new value.
   * @param name Name of the element.
   */
  handleChange = (value: any, name?: string) => {
    name && this.setState({ [name]: value });
  }

  /**
   * Handles a submit of the form.
   */
  handleSubmit = () => {
    const { t } = this.props;
    const {
      passwordAgain,
      noSecondName,
      secondName,
      firstName,
      certNumber,
      certDate,
      certTypes,
      birthday,
      lastName,
      isDriver,
      password,
      photo,
      email,
    } = this.state;

    const match = t(content.passwordError);
    const format = t(content.emailError);
    const required = t(content.required);
    const invalidFormat = t(content.invalidFormat);

    let passwordAgainError: string|undefined = undefined;
    let certTypesError: string|undefined  = undefined;
    let certNumberError: string|undefined  = undefined;
    let certDateError: string|undefined  = undefined;
    let firstNameError: string|undefined = undefined;
    let lastNameError: string|undefined = undefined;
    let passwordError: string|undefined = undefined;
    let emailError: string|undefined = undefined;

    let certTypeDatesError = false;
    const certTypeDatesErrors: any = {};
    const certTypeDates: any = {};

    !passwordAgain && (passwordAgainError = required);
    !password && (passwordError = required);
    !firstName && (firstNameError = required);
    firstName && firstName !== firstName.trim() && (firstNameError = invalidFormat);
    !lastName && (lastNameError = required);
    lastName && lastName !== lastName.trim() && (lastNameError = invalidFormat);
    !email && (emailError = required);

    if (email) {
      !isValid(email) && (emailError = format);
    }

    if (password !== passwordAgain) {
      passwordAgainError = match;
      passwordError = match;
    }

    if (isDriver) {
      !certNumber && (certNumberError = required);
      certNumber && !isDigit(certNumber) && (certNumberError = invalidFormat);
      !certDate && (certDateError = required);
      (!certTypes || !certTypes.length) && (certTypesError = required);

      const typesCount = certTypes ? certTypes.length : 0;

      for (let i = 0; i < typesCount; i += 1) {
        const certTypeName = `certTypeDate${certTypes[i]}`;
        const certTypeDate = this.state[certTypeName];

        certTypeDates[certTypeName] = certTypeDate;

        if (certTypeDate) {
          continue;
        }

        certTypeDatesErrors[`${certTypeName}Error`] = required;
        certTypeDatesError = true;
      }
    }

    const isErrors = false
      || certTypeDatesError
      || passwordAgainError
      || certTypesError
      || certNumberError
      || certDateError
      || firstNameError
      || lastNameError
      || passwordError
      || emailError;

    this.setState({
      ...certTypeDatesErrors,
      passwordAgainError,
      certTypesError,
      certNumberError,
      certDateError,
      firstNameError,
      lastNameError,
      passwordError,
      emailError,
    });

    if (!isErrors) {
      const { onSubmit, name } = this.props;

      onSubmit && onSubmit(
        {
          ...certTypeDates,
          noSecondName,
          secondName,
          firstName,
          certNumber,
          certDate,
          certTypes,
          birthday,
          lastName,
          isDriver,
          password,
          photo,
          email,
        },
        name,
      );
    }
  }

  /**
   * @inheritdoc
   */
  render() {
    const { name, t } = this.props;
    const {
      passwordAgainError,
      certTypesError,
      certNumberError,
      certDateError,
      firstNameError,
      lastNameError,
      passwordError,
      emailError,

      passwordAgain,
      noSecondName,
      secondName,
      firstName,
      certNumber,
      certDate,
      certTypes,
      birthday,
      lastName,
      isDriver,
      password,
      photo,
      email,
    } = this.state;

    return (
      <>
        <Box title={t(profileTitle)}>
          <HorzForm name={name} onSubmit={this.handleSubmit}>
            <Item width="auto">
              <Checkbox
                onChange={this.handleChange}
                notice={t(isDriverInfo)}
                value={isDriver}
                name="isDriver"
              >
                {t(isDriverTitle)}
              </Checkbox>
            </Item>
            <Item title={t(photoTitle)}>
              <AvatarInput
                onChange={this.handleChange}
                value={photo}
                name="photo"
              />
            </Item>
            <Item
              title={t(lastNameTitle)}
              isRequired={true}
              width="small"
            >
              <Input
                onChange={this.handleChange}
                placeholder={t(lastNameText)}
                error={lastNameError}
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
                onChange={this.handleChange}
                placeholder={t(firstNameText)}
                errorDisplay="tooltip"
                error={firstNameError}
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
                  onChange={this.handleChange}
                  value={noSecondName}
                  name="noSecondName"
                >
                  {t(noSecondNameText)}
                </Checkbox>
              )}
            >
              <Input
                onChange={this.handleChange}
                placeholder={t(secondNameText)}
                isDisabled={noSecondName}
                value={secondName}
                name="secondName"
              />
            </Item>
            <Item
              title={t(emailTitle)}
              isRequired={true}
              width="small"
              notice={t(emailInfo)}
            >
              <Input
                onChange={this.handleChange}
                placeholder={t(emailText)}
                errorDisplay="tooltip"
                error={emailError}
                value={email}
                type="email"
                name="email"
              />
            </Item>
            <Item title={t(birthdayTitle)} width="auto">
              <DateInput
                placeholder={t(birthdayText)}
                onChange={this.handleChange}
                value={birthday}
                maxDate={getMaxBirthdayDate()}
                name="birthday"
              />
            </Item>
            {isDriver && (
              <>
                <Item
                  title={t(certNumberTitle)}
                  isRequired={true}
                  width="normal"
                >
                  <Input
                    placeholder={t(certNumberText)}
                    onChange={this.handleChange}
                    errorDisplay="tooltip"
                    error={certNumberError}
                    value={certNumber}
                    name="certNumber"
                  />
                </Item>
                <Item
                  title={t(certDateTitle)}
                  isRequired={true}
                  width="auto"
                >
                  <DateInput
                    placeholder={t(certDateText)}
                    onChange={this.handleChange}
                    errorDisplay="tooltip"
                    error={certDateError}
                    value={certDate}
                    name="certDate"
                  />
                </Item>
                <Item
                  title={t(certTypesTitle)}
                  isRequired={true}
                  width="small"
                >
                  <Select
                    placeholder={t(certTypesText)}
                    onChange={this.handleChange}
                    errorDisplay="tooltip"
                    error={certTypesError}
                    value={certTypes}
                    name="certTypes"
                    isMulti={true}
                  >
                    <Option value="А">А</Option>
                    <Option value="A1">A1</Option>
                    <Option value="Tb">Tb</Option>
                    <Option value="Tm">Tm</Option>
                    <Option value="M">M</Option>
                    <Option value="D1E">D1E</Option>
                    <Option value="DE">DE</Option>
                    <Option value="C1E">C1E</Option>
                    <Option value="CE">CE</Option>
                    <Option value="BE">BE</Option>
                    <Option value="D1">D1</Option>
                    <Option value="D">D</Option>
                    <Option value="C1">C1</Option>
                    <Option value="C">C</Option>
                    <Option value="B1">B1</Option>
                  </Select>
                </Item>
                {certTypes.map((type: string) => {
                  const title = `${t(certTypeDateTitle)} ${type}`;
                  const name = `certTypeDate${type}`;
                  const error = this.state[`${name}Error`];
                  const value = this.state[name];

                  let experienceNode: any = null;

                  const maxDate = new Date();

                  if (value) {
                    const experienceTime = (value as Date).getTime();
                    const currentTime = Date.now();

                    const diffTime = currentTime - experienceTime;
                    const diffYear = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));

                    const text = experienceText.split('/');
                    const word = getWord(diffYear, ...text);

                    experienceNode = <Text>Стаж {diffYear} {word}</Text>;
                  }

                  return (
                    <Item
                      aside={experienceNode}
                      isRequired={true}
                      title={title}
                      width="auto"
                      key={type}
                    >
                      <DateInput
                        placeholder={t(certDateText)}
                        onChange={this.handleChange}
                        errorDisplay="tooltip"
                        maxDate={maxDate}
                        value={value}
                        error={error}
                        name={name}
                      />
                    </Item>
                  );
                })}
              </>
            )}
          </HorzForm>
        </Box>
        <Spacer height={22} />
        <Box title={t(passwordsTitle)}>
          <HorzForm onSubmit={this.handleSubmit}>
            <Item
              title={t(passwordTitle)}
              width="small"
              isRequired={true}
            >
              <Input
                placeholder={t(passwordText)}
                onChange={this.handleChange}
                error={passwordError}
                errorDisplay="tooltip"
                value={password}
                type="password"
                name="password"
              />
            </Item>
            <Item
              title={t(passwordAgainTitle)}
              isRequired={true}
              width="small"
            >
              <Input
                onChange={this.handleChange}
                placeholder={t(passwordAgainText)}
                error={passwordAgainError}
                value={passwordAgain}
                errorDisplay="tooltip"
                name="passwordAgain"
                type="password"
              />
            </Item>
          </HorzForm>
        </Box>
      </>
    );
  }
}

export default withNamespaces()(Profile);
