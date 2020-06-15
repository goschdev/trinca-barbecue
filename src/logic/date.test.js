import { formatDateLess, formatDateTime } from './date';

describe('[Logic] date', () => {
  describe('function formatDateLess', () => {
    it('Should returns 01/12', () => {
      expect(formatDateLess('2020-12-01T20:00')).toEqual('01/12');
    });
    
    it('Should returns 23/12', () => {
      expect(formatDateLess('2020-12-23T23:50:10.012Z')).toEqual('23/12');
    });
  });

  describe('function formatDateTime', () => {
    it('Should returns 01/12/2020 às 20h00', () => {
      expect(formatDateTime('2020-12-01T20:00')).toEqual('01/12/2020 às 20h00');
    });

    it('Should returns 23/12/2020 às 20h50', () => {
      expect(formatDateTime('2020-12-23T23:50:10.012Z')).toEqual('23/12/2020 às 20h50');
    });
  });
});
