import type { Component } from "solid-js";

const Timer: Component = () => {
  return <div class="hello">Hello wrold</div>;
};

// const getDisplayTimeBySeconds = (seconds: number) => {
//   const min = Math.floor(seconds / 60);
//   const sec = seconds % 60;
//   return `${getDisplayableTime(min)}:${getDisplayableTime(sec)}`;
// };

// function getDisplayableTime(timeValue: number) {
//   return timeValue < 10 ? `0${timeValue}` : `${timeValue}`;
// }

export default Timer;
