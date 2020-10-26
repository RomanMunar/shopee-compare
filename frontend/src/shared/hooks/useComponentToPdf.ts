import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function useComponentToPdf({ targetId }: { targetId: string }) {
  const screenshotTarget: HTMLElement =
    document.querySelector(`#${targetId}`) || document.body;

  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    console.log(base64image);
    const pdf = new jsPDF();
    // @ts-ignore
    pdf.addImage(base64image, "PNG", 0, 0, 0, 0, undefined, "SLOW");
    pdf.save("download.pdf");
  });
}
