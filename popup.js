document.getElementById("findCodeButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.scripting.executeScript(
        {
          target: { tabId: tabId },
          files: ["background.js"]
        },
        (results) => {
          const resultElement = document.getElementById("result");
          if (chrome.runtime.lastError) {
            resultElement.style.display = "block";
            resultElement.innerText = `Error: ${chrome.runtime.lastError.message}`;
          } else {
            const { stateCode, description } = results[0]?.result || {};
            if (stateCode) {
              resultElement.style.display = "block";
              resultElement.innerText = `State Code: ${stateCode}\nDescription: ${description}`;
            } else {
              resultElement.style.display = "block";
              resultElement.innerText = "State Code not found.";
            }
          }
        }
      );
    });
  });
  