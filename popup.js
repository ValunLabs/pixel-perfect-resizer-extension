const SITE = "https://pixelperfectresizer.com/";

const input = document.getElementById("img-url");
const error = document.getElementById("error");

function open(url) {
  chrome.tabs.create({ url });
  window.close();
}

function isHttpUrl(value) {
  try {
    const { protocol } = new URL(value);
    return protocol === "http:" || protocol === "https:";
  } catch {
    return false;
  }
}

document.getElementById("open-site").addEventListener("click", () => open(SITE));

document.getElementById("quick-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!isHttpUrl(value)) {
    error.hidden = false;
    input.setAttribute("aria-invalid", "true");
    input.focus();
    return;
  }
  open(`${SITE}?imgUrl=${encodeURIComponent(value)}`);
});

input.addEventListener("input", () => {
  error.hidden = true;
  input.removeAttribute("aria-invalid");
});

input.focus();
