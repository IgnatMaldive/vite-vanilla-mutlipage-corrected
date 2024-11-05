export function schedulePost() {
  const platform = document.getElementById("platform").value;
  const message = document.getElementById("message").value;
  const date = document.getElementById("date").value;

  if (platform && message && date) {
    alert(`Post scheduled on ${platform} with message: "${message}" at ${date}`);
  } else {
    alert("Please fill out all fields.");
  }
}