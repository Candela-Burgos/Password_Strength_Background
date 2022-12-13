const queryId = (id) => document.getElementById(`${id}`);

queryId("password").addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  queryId("background").style.filter = `blur(${blurValue}px)`;
});
