const args = process.argv.slice(2);
const times = args.map(Number);
let delay = 0;
times.forEach((nums) => {
  delay = nums * 1000;
  if (!nums) return;
  else if (nums < 0) return;
  else if (typeof (nums) !== 'number') return;
  else {
    setTimeout(() => {
      process.stdout.write('beep\n');
      process.stdout.write('\x07');
    }, delay);
    // console.log(delay)
  }
});