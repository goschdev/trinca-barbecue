import moment from 'moment';

import { DATES } from 'logic/constants';

export function formatDateLess(timestamp) {
  const formated = moment(timestamp).format(DATES.dateLess);

  return formated;
}

export function formatDateTime(timestamp) {
  const formated = moment(timestamp).format(DATES.fullDatetime)
  
  return formated;
}
