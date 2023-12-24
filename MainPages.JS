// Define a list of valid page names
const validPageNames = ["Home", "About", "Contact", "index"];

function navigateTo(pageName) {
    // Check if the requested page name is in the list of valid page names
    if (validPageNames.includes(pageName)) {
        // Page exists, navigate to it
        const filePath = pageName + ".html";
        window.location.href = filePath;
    } else {
        // Page doesn't exist, redirect to Error404.html
        window.location.href = "index.html";
    }
}