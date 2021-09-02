import html2canvas from 'html2canvas';

export default async function download(id) {
  const canvas = await html2canvas(document.getElementById(id))
  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = "myImage.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}