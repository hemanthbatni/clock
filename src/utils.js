export const handleDate = (date) => {
  const hours = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());
  return { hours, minutes, seconds };
};

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};
