import React, { PureComponent } from 'react';
import { withNamespaces, WithNamespaces } from 'react-i18next';

import Radio, { Option as RadioOption } from '@/components/common/Radio';
import HorzForm, { Item } from '@/components/common/HorzForm';
import Spacer from '@/components/common/Spacer';
import Box from '@/components/common/Box';

import isDigit from '@/helpers/validators/isDigit';
import isUrl from '@/helpers/validators/isUrl';

import Individual from './Individual';
import Juridical from './Juridical';
import Physical from './Physical';
import Expand from './Expand';

import content from './content';

const {
  subjectTitle,
  subjectInfo,
  subjectIndividualText,
  subjectJuridicalText,
  subjectPhysicalText,

  title,
} = content;

/**
 * Value of the form.
 */
export interface Value {

  /**
   * Value of the input element of the form.
   */
  [name: string]: any;
}

/**
 * Option of the option of auto-detection.
 */
interface AutoDetectOption {
  address: string;
  regDate: Date;
  name: string;
  ogrn: string;
  inn: string;
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
   * Handles an auto detect of juridical tax subject.
   */
  onJuridicalSearch?: (value: string) => void;

  /**
   * Finded options.
   */
  juridicalOptions?: AutoDetectOption[];

  /**
   * Handles an auto detect of juridical tax subject.
   */
  onIndividualSearch?: (value: string) => void;

  /**
   * Finded options.
   */
  individualOptions?: AutoDetectOption[];

  /**
   * Value from redux store
   */
  company?: {
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

  /**
   * True if the form is expaned.
   */
  isExpaned: false;
}

/**
 * Component of the companies's form.
 */
class Company extends PureComponent<Props, State> {

  /**
   * @inheritDoc
   */
  constructor(props: Props) {
    super(props);

    const { company } = this.props;

    const companyValue = company && company.value ? company.value : {};

    this.state = {
      isExpaned: false,

      subject: 'physical',
      isAutoDetect: true,
      sex: 'male',

      ...companyValue,
    };
  }

  /**
   * @inheritdoc
   */
  static getDerivedStateFromProps(props: Props, state: State) {
    let {
      juridicalAddress,
      orgName,
      regDate,
      ogrnip,
      ogrn,
      inn,
    } = state;

    const { isAutoDetect, subject } = state;

    if (!isAutoDetect) {
      return state;
    }

    if (subject === 'individual') {
      const { ip } = state;

      juridicalAddress = ip ? ip.address : '';
      regDate = ip ? ip.regDate : '';
      orgName = ip ? ip.name : '';
      ogrnip = ip ? ip.ogrn : '';
      inn = ip ? ip.inn : '';
    }

    if (subject === 'juridical') {
      const { org } = state;

      juridicalAddress = org ? org.address : '';
      regDate = org ? org.regDate : '';
      orgName = org ? org.name : '';
      ogrn = org ? org.ogrn : '';
      inn = org ? org.inn : '';
    }

    return {
      ...state,
      juridicalAddress,
      orgName,
      regDate,
      ogrnip,
      ogrn,
      inn,
    };
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
   * Handles a search for the companies.
   */
  handleJuridicalSearch = (value?: string) => {
    if (!value) {
      return;
    }

    const { onJuridicalSearch } = this.props;
    onJuridicalSearch && onJuridicalSearch(value);
  }

  /**
   * Handles a search for the companies.
   */
  handleIndividualSearch = (value?: string) => {
    if (!value) {
      return;
    }

    const { onIndividualSearch } = this.props;
    onIndividualSearch && onIndividualSearch(value);
  }

  /**
   * Handles a submit of the form.
   */
  handleSubmit = () => {
    const {
      isAutoDetect,

      juridicalAddress,
      physicalAddress,
      postAddress,
      secondName,
      noSecondName,
      birthPlace,
      docNumber,
      firstName,
      birthday,
      lastName,
      subject,
      docType,
      regDate,
      orgName,
      photos,
      ogrnip,
      ogrn,
      idAcb,
      logo,
      site,
      kpp,
      inn,
      org,
      sex,
      id,
      ip,
    } = this.state;

    const { required, invalidFormat } = content;

    let firstNameError: string|undefined = undefined;
    let lastNameError: string|undefined = undefined;
    let birthdayError: string|undefined = undefined;
    let orgNameError: string|undefined = undefined;
    let orgError: string|undefined = undefined;
    let innError: string|undefined = undefined;
    let ogrnError: string|undefined = undefined;
    let ogrnipError: string|undefined = undefined;
    let ipError: string|undefined = undefined;
    let kppError: string|undefined = undefined;
    let siteError: string|undefined = undefined;
    let documentNumberError: string|undefined = undefined;

    switch (subject) {
      case 'physical': {
        !firstName && (firstNameError = required);
        firstName && firstName !== firstName.trim() && (firstNameError = invalidFormat);
        !lastName && (lastNameError = required);
        lastName && lastName !== lastName.trim() && (lastNameError = invalidFormat);
        !birthday && (birthdayError = required);
        inn && !isDigit(inn, [12]) && (innError = invalidFormat);
        site && !isUrl(site) && (siteError = invalidFormat);
        docNumber && !isDigit(docNumber) && (documentNumberError = invalidFormat);
        break;
      }

      case 'juridical': {
        if (!isAutoDetect) {
          !orgName && (orgNameError = required);
          orgName && orgName !== orgName.trim() && (orgNameError = invalidFormat);
          !inn && (innError = required);
          inn && inn !== inn.trim() && (innError = invalidFormat);
          inn && !isDigit(inn, [10]) && (innError = invalidFormat);
          ogrn && !isDigit(ogrn, [13, 15]) && (ogrnError = invalidFormat);
          kpp && !isDigit(kpp, [9]) && (kppError = invalidFormat);
        } else {
          !org && (orgError = required);
        }
        site && !isUrl(site) && (siteError = invalidFormat);
        break;
      }

      case 'individual': {
        if (!isAutoDetect) {
          !orgName && (orgNameError = required);
          !inn && (innError = required);
          !isDigit(inn, [12]) && (innError = invalidFormat);
          ogrnip && !isDigit(ogrnip, [13, 15]) && (ogrnipError = invalidFormat);
        } else {
          !ip && (ipError = required);
        }
        site && !isUrl(site) && (siteError = invalidFormat);
        break;
      }
    }

    const isErrors = false
      || firstNameError
      || lastNameError
      || birthdayError
      || orgNameError
      || orgError
      || innError
      || ipError
      || ogrnError
      || ogrnipError
      || kppError
      || siteError
      || documentNumberError;

    this.setState({
      firstNameError,
      lastNameError,
      birthdayError,
      orgNameError,
      orgError,
      innError,
      ipError,
      ogrnError,
      ogrnipError,
      kppError,
      siteError,
      documentNumberError,
    });

    if (!isErrors) {
      const { onSubmit, name } = this.props;

      onSubmit && onSubmit(
        {
          juridicalAddress,
          physicalAddress,
          isAutoDetect,
          postAddress,
          secondName,
          noSecondName,
          birthPlace,
          docNumber,
          firstName,
          birthday,
          lastName,
          subject,
          docType,
          regDate,
          orgName,
          photos,
          ogrnip,
          ogrn,
          idAcb,
          logo,
          site,
          kpp,
          inn,
          org,
          sex,
          id,
          ip,
        },
        name,
      );
    }
  }

  /**
   * Handles a click of the expand button.
   */
  handleExpandClick = () => {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  }

  /**
   * @inheritdoc
   */
  render() {
    const { isExpanded, subject } = this.state;
    const { name, t } = this.props;

    const expandText = isExpanded ? content.close : content.open;

    const nestedProps = {
      ...this.state,
      ...this.props,
      handleIndividualSearch: this.handleIndividualSearch,
      handleJuridicalSearch: this.handleJuridicalSearch,
      handleChange: this.handleChange,
    };

    return (
      <Box title={t(title)}>
        <HorzForm name={name} onSubmit={this.handleSubmit}>
          <Item
            title={t(subjectTitle)}
            notice={t(subjectInfo)}
          >
            <Radio
              onChange={this.handleChange}
              value={subject}
              name="subject"
            >
              <RadioOption value="physical">{t(subjectPhysicalText)}</RadioOption>
              <RadioOption value="juridical">{t(subjectJuridicalText)}</RadioOption>
              <RadioOption value="individual">{t(subjectIndividualText)}</RadioOption>
            </Radio>
          </Item>
          {(subject === 'individual') && <Individual {...nestedProps} />}
          {(subject === 'juridical') && <Juridical {...nestedProps} />}
          {(subject === 'physical') && <Physical {...nestedProps} />}
          {subject && (
            <Item>
              <Spacer height={40} />
              <Expand isExpanded={isExpanded} onClick={this.handleExpandClick}>
                {t(expandText)}
              </Expand>
            </Item>
          )}
        </HorzForm>
      </Box>
    );
  }
}

export default withNamespaces()(Company);
