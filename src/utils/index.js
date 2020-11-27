
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDueDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${date.getDay()} ${months[date.getMonth()]} ${date.getDate()}`;
}