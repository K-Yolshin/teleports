import styled from 'styled-components';

interface Props {
  /**
   * Percent from 0 to 100
   */
  value: number;
}

/**
 * Get hex color
 * @param value - percent from 0 to 100
 */
const getColor = (value: number): string => {
  const colors = {
    0: '#fff',
    20: '#D0021B',
    40: '#D0021B',
    60: '#F8E71C',
    80: '#F8E71C',
    100: '#5ABE2D',
  };

  const step = 20;

  const floorValue = Math.floor(value / step) * step;

  return colors[floorValue];
};

/**
 * Component of the Bar
 */
const Bar = styled.div<Props>`
  height: 19px;

  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: calc((100% - 30px) * ${p => p.value / 100});

  background-color: ${p => getColor(p.value)};
`;

export default Bar;
