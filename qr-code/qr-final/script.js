const formEle = document.getElementsByTagName("form")[0];
const inpEle = document.querySelector("#qrText");
const qrCodeEle = document.querySelector("#qrcode");
let inpValue = "";

inpEle.addEventListener("input", function (e) {
  inpValue = e.target.value;
});

function generateQr() {
  qrCodeEle.innerHTML = "";
  const qrcode = new QRCode(qrCodeEle, {
    text: inpValue,
    width: 128,
    height: 128,
    colorDark: "#fff",
    colorLight: "#fff0",
  });
  return qrcode;
}

formEle.addEventListener("submit", function (e) {
  e.preventDefault();

  const currentValue = inpEle.value.trim();
  if (currentValue.length === 0) return;
  generateQr();
  inpEle.value = "";
});
