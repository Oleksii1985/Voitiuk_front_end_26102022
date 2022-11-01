document.addEventListener('DOMContentLoaded', () => {
  let hours = Number(prompt('Type an integer number: '));
  let hoursToSeconds = hours * 3600;
  if (hours === 1 || hours === 0) {
    alert(`In ${hours} hour -> ${hoursToSeconds} seconds`);
  } else {
    alert(`In ${hours} hours -> ${hoursToSeconds} seconds`);
  }
})