import html2canvas from "html2canvas";

var options = {
  // logging: true,
  // profile: true,
  allowTaint: true,
  useCORS: true,
  scale: 3,
};

const saveImage = (elementId, callback) => {
  let fileName = `Design_${new Date().toISOString().substring(0, 10)}.png`;
  html2canvas(document.getElementById(elementId), options).then(canvas => {
    console.warn("Run!");
    const button = document.getElementById(elementId);
    const data = canvas.toDataURL("image/png");
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), fileName);
    } else {
      const downloadLink = document.createElement("a");
      button.appendChild(downloadLink);
      downloadLink.setAttribute("download", fileName);
      downloadLink.setAttribute("href", data);
      downloadLink.click();
      button.removeChild(downloadLink);
    }
    callback();
  });
};

export default saveImage;
