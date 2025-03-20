
document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "CVDamaris.pdf";  // Caminho do arquivo
    link.download = "CVDamaris.pdf";     // Nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

