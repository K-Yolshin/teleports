import arrowLeft from '@/assets/arrow-left.svg';

/**
 * Component of the content after input.
 */
const Root = `
  position: relative;

  cursor: pointer;

  display: inline-flex;

  padding: 0 3px 0 18px;

  font-family: Museo Sans Cyrl;
  font-size: 18px;
  font-weight: 300;

  line-height: 22px;
  height: 22px;

  color: #00A8FF;

  :before {
    content: url(${arrowLeft});

    position: absolute;
    top: 1px;
    left: 0;

    height: 100%;
  }
`;

export default Root;
