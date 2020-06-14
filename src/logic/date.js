function addZeroBefore(value) {
  if (value >= 10) return value;
  return `0${value}`;
}

export function formatDateLess(timestamp) {
  const date = new Date(timestamp);
  const day = addZeroBefore(date.getDate());
  const month = addZeroBefore(date.getMonth() + 1);

  const formated = `${day}/${month}`;

  return formated;
}

export function formatDateTime(timestamp) {
  return timestamp;
}
