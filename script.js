const frm = document.querySelector("#frm");
const output = document.querySelector("#output");
const spin = document.querySelector("#loading");
const qrc = document.querySelector("#qrcode")
function generateQr(e){
    e.preventDefault();
    const url = document.querySelector('#url').value
    const size = document.querySelector('#size').value
    const Clrdark = document.querySelector('#colorDark').value
    const ClrLight = document.querySelector('#ColorLight').value
    spin.style.display = "flex"
    setTimeout(()=>{
        spin.style.display = "none"
        qrc.innerHTML = ""
        const qrcode = new QRCode(qrc,{
            text: url,
            width: size,
            height: size,
            colorDark:Clrdark,
            colorLight:ClrLight,
            correctLevel:QRCode.CorrectLevel.H

        });
    },2000)
}
frm.addEventListener("submit",generateQr);
