import React, { FC } from 'react';

import CompanyInput from '@/components/signUp/CompanyInput';
import ImagesInput from '@/components/common/ImagesInput';
import ImageInput from '@/components/common/ImageInput';
import DateInput from '@/components/common/DateInput';
import { Item } from '@/components/common/HorzForm';
import Checkbox from '@/components/common/Checkbox';
import Input from '@/components/common/Input';

import PhotosText from '../PhotosText';
import content from '../content';

const {
  isAutoDetectText,

  ipTitle,
  ipText,

  orgNameTitle,
  orgNameText,

  juridicalAddressTitle,
  juridicalAddressText,

  regDateTitle,

  innTitle,
  innText,

  ogrnipTitle,
  ogrnipText,

  physicalAddressTitle,
  physicalAddressText,

  postAddressTitle,
  postAddressText,

  idTitle,
  idText,

  idAcbTitle,
  idAcbText,

  kppTitle,
  kppText,

  photosTitle,
  logoTitle,

  siteTitle,
  siteText,
  siteInfo,
} = content;

/**
 * Fields for individual subject.
 */
const Individual: FC<any> = ({
  handleChange,
  isExpanded,
  t,

  isAutoDetect,

  handleIndividualSearch,
  individualOptions,

  ipError,
  ip,

  orgNameError,
  orgName,

  juridicalAddressError,
  juridicalAddress,

  innError,
  inn,

  ogrnipError,
  ogrnip,

  physicalAddress,

  postAddress,

  id,

  idAcb,

  kpp,

  regDate,

  photos,
  logo,

  site,
  siteError,
}) => (
  <>
    <Item offset="small">
      <Checkbox
        onChange={handleChange}
        value={isAutoDetect}
        name="isAutoDetect"
      >
        {t(isAutoDetectText)}
      </Checkbox>
    </Item>
    {isAutoDetect && (
      <Item
        title={t(ipTitle)}
        isRequired={isAutoDetect}
        width="normal"
      >
        <CompanyInput
          onQuery={handleIndividualSearch}
          options={individualOptions}
          onChange={handleChange}
          placeholder={t(ipText)}
          errorDisplay="tooltip"
          error={t(ipError)}
          value={ip}
          name="ip"
        />
      </Item>
    )}
    {(!isAutoDetect || ip) && (
      <>
        <Item
          isRequired={!isAutoDetect}
          title={t(orgNameTitle)}
          width="normal"
        >
          <Input
            onChange={handleChange}
            isDisabled={isAutoDetect}
            placeholder={t(orgNameText)}
            errorDisplay="tooltip"
            error={t(orgNameError)}
            value={orgName}
            name="orgName"
          />
        </Item>
        <Item
          title={t(juridicalAddressTitle)}
          width="normal"
        >
          <Input
            onChange={handleChange}
            isDisabled={isAutoDetect}
            placeholder={t(juridicalAddressText)}
            errorDisplay="tooltip"
            error={t(juridicalAddressError)}
            value={juridicalAddress}
            name="juridicalAddress"
          />
        </Item>
        <Item
          title={t(regDateTitle)}
          width="normal"
        >
          <DateInput
            onChange={handleChange}
            isDisabled={isAutoDetect}
            errorDisplay="tooltip"
            value={regDate}
            name="regDate"
            maxDate={new Date()}
          />
        </Item>
        <Item
          isRequired={!isAutoDetect}
          title={t(innTitle)}
          width="normal"
        >
          <Input
            onChange={handleChange}
            placeholder={t(innText)}
            isDisabled={isAutoDetect}
            errorDisplay="tooltip"
            error={t(innError)}
            value={inn}
            name="inn"
          />
        </Item>
        <Item
          title={t(ogrnipTitle)}
          width="normal"
        >
          <Input
            onChange={handleChange}
            placeholder={t(ogrnipText)}
            isDisabled={isAutoDetect}
            errorDisplay="tooltip"
            error={t(ogrnipError)}
            value={ogrnip}
            name="ogrnip"
          />
        </Item>
      </>
    )}
    {isExpanded && (
      <>
        <Item
          title={t(physicalAddressTitle)}
          width="normal"
        >
          <Input
            placeholder={t(physicalAddressText)}
            onChange={handleChange}
            value={physicalAddress}
            name="physicalAddress"
          />
        </Item>
        <Item
          title={t(postAddressTitle)}
          width="normal"
        >
          <Input
            placeholder={t(postAddressText)}
            onChange={handleChange}
            value={postAddress}
            name="postAddress"
          />
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
          title={t(idAcbTitle)}
          width="normal"
        >
          <Input
            placeholder={t(idAcbText)}
            onChange={handleChange}
            value={idAcb}
            name="idAcb"
          />
        </Item>
        <Item
          title={t(kppTitle)}
          width="normal"
        >
          <Input
            placeholder={t(kppText)}
            onChange={handleChange}
            value={kpp}
            name="kpp"
          />
        </Item>
        <Item
          title={logoTitle}
          width="wide"
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

export default Individual;
