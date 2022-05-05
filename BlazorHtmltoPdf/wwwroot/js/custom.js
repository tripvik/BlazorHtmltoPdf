window.PrintPdf = () => {
    var divContents = document.getElementById('invoice');
    html2pdf(divContents);
};