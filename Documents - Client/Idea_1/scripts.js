function openFolder(folderName) {
    // Show the document display section
    document.getElementById("documentDisplay").classList.remove("hidden");
    // Hide the folder grid section
    document.getElementById("folderGrid").classList.add("hidden");
    // Set folder name as the current folder name
    document.getElementById("currentFolderName").innerText = folderName + " Documents";
}

function closeFolder() {
    // Hide the document display section
    document.getElementById("documentDisplay").classList.add("hidden");
    // Show the folder grid section
    document.getElementById("folderGrid").classList.remove("hidden");
}
