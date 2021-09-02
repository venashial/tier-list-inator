import html2canvas from 'html2canvas';
import { isRendering } from './../routes/edit/_store.js';

export default async function download(id) {
  isRendering.update(() => true)
  await new Promise(r => setTimeout(r, 2000));
  const canvas = await html2canvas(document.getElementById(id), {
    useCORS: true,
    logging: false,
  })
  isRendering.update(() => false)
  const a = document.createElement("a");
  a.href = canvas.toDataURL("image/png");
  a.download = "tier-list.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}