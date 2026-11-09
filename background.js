const SITE = "https://pixelperfectresizer.com/";
const MENU_ID = "resize-with-pixelperfect";

// Only http(s) URLs are passed on; data:/blob: URLs can be megabytes long or tab-local.
function resizerUrl(imgUrl) {
  try {
    const { protocol } = new URL(imgUrl);
    if (protocol === "http:" || protocol === "https:") {
      return `${SITE}?imgUrl=${encodeURIComponent(imgUrl)}`;
    }
  } catch {}
  return SITE;
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: "Resize with PixelPerfect",
    contexts: ["image"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== MENU_ID) return;
  chrome.tabs.create({
    url: resizerUrl(info.srcUrl),
    index: tab ? tab.index + 1 : undefined,
  });
});
