import { submitByApikey } from 'arseeding-js';

const arseedingUrl = 'https://arseed.web3infra.dev';
const apikey = '<your arseeding apiKey>';  // Add your apiKey here
const contentType = 'data type';  // For most files this might be 'application/octet-stream', or 'image/jpeg' for JPEG images, etc.

async function uploadToArweave() {
    const fileInput = document.getElementById('fileInput');
    const tagInput = document.getElementById('tagInput'); // Get the tag input element
    const file = fileInput.files[0];
    const tag = tagInput.value; // Get the value from the input element

    if (!file) {
        alert("Please choose a file to upload");
        return;
    }

    if (!tag) {
        alert("Please enter a tag");
        return;
    }

    const data = await file.arrayBuffer();
    const tags = { a: 'aa', b: 'bb' };  // Update with your tags if needed

    try {
        const res = await submitByApikey(
            arseedingUrl,
            apikey,
            tag,  // Use the tag from the input field
            Buffer.from(data),
            contentType,
            tags
        );

        document.getElementById('output').innerHTML = JSON.stringify(res, null, 2);
    } catch (error) {
        console.error("Error uploading file:", error);
        document.getElementById('output').innerHTML = "Error: " + error.message;
    }
}
