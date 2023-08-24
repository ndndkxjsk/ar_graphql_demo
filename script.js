import { submitByApikey } from 'arseeding-js';

const arseedingUrl = 'https://arseed.web3infra.dev';
const apikey = '<your arseeding apiKey>';  // Add your apiKey here
const contentType = 'data type';  // For most files, this might be 'application/octet-stream', or 'image/jpeg' for JPEG images, etc.

async function uploadToArweave() {
    const fileInput = document.getElementById('fileInput');
    const tagInput = document.getElementById('tagInput');
    const file = fileInput.files[0];
    const tag = tagInput.value;

    if (!file) {
        alert("Please choose a file to upload");
        return;
    }

    if (!tag) {
        alert("Please enter a tag");
        return;
    }

    const data = await file.arrayBuffer();
    const tags = { a: 'aa', b: 'bb' };

    try {
        const res = await submitByApikey(
            arseedingUrl,
            apikey,
            tag,
            Buffer.from(data),
            contentType,
            tags
        );

        // Displaying feedback
        const outputElement = document.getElementById('output');
        outputElement.innerHTML = `<p>Upload Successful!</p>`;
        outputElement.innerHTML += `<p>Item ID: ${res.itemId}</p>`;
        outputElement.innerHTML += `<p>Size: ${res.size} bytes</p>`;

    } catch (error) {
        console.error("Error uploading file:", error);
        document.getElementById('output').innerHTML = "Error: " + error.message;
    }
}
