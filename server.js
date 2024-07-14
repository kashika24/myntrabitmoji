const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.json());

app.post('/save-bitmoji', (req, res) => {
    const bitmojiData = req.body;

    console.log("Received Bitmoji Data: ", bitmojiData); // Debugging

    // Simulating saving to database
    const dataPath = path.join(__dirname, 'bitmojiData.json');
    fs.writeFile(dataPath, JSON.stringify(bitmojiData), (err) => {
        if (err) {
            console.error("Error saving Bitmoji data: ", err);
            return res.json({ success: false, message: 'Failed to save Bitmoji data.' });
        }

        // Simulating image generation and saving
        const imagePath = path.join(__dirname, 'bitmoji.png');
        // Placeholder image generation function (replace with actual implementation)
        fs.writeFile(imagePath, generateImageFromData(bitmojiData), (err) => {
            if (err) {
                console.error("Error generating Bitmoji image: ", err);
                return res.json({ success: false, message: 'Failed to generate Bitmoji image.' });
            }

            const shareableLink = `http://localhost:3000/bitmoji.png`;

            res.json({
                success: true,
                link: shareableLink
            });
        });
    });
});

function generateImageFromData(data) {
    // Placeholder function to simulate image generation
    return Buffer.from('fake-image-data');
}

app.use('/bitmoji.png', express.static(path.join(__dirname, 'bitmoji.png')));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});