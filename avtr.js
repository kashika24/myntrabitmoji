document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('avatarCanvas');
    const ctx = canvas.getContext('2d');
    

    const assets = {
        face: new Image(),
        hairstyle: new Image(),
        eyes: new Image(),
        eyebrows: new Image(),
        mouth: new Image(),
        // accessories: new Image(),
        body: new Image()
        // arms: new Image(),
        // legs: new Image()
    };

    function loadAsset(category, filename) {
        const img = assets[category];
        img.src = `assets/${category}/${filename}`;
        img.onload = () => {
            console.log(`${filename} loaded`);
            drawAvatar();
        };
        img.onerror = () => {
            console.error(`Failed to load ${filename}`);
        };
    }

    function drawAvatar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw hairstyle
        if (assets.hairstyle.complete) ctx.drawImage(assets.hairstyle, 115, 82.5, 170, 160); // Adjust position and size

        // Draw body
        if (assets.body.complete) ctx.drawImage(assets.body, 106, 175, 194, 214); // Adjust position and size

        // Draw legs
        // if (assets.legs.complete) ctx.drawImage(assets.legs, 100, 500, 200, 200); // Adjust position and size

        // Draw arms
        // if (assets.arms.complete) ctx.drawImage(assets.arms, 100, 300, 200, 200); // Adjust position and size

        // Draw face
        if (assets.face.complete) ctx.drawImage(assets.face, 158, 110, 85, 80); // Adjust position and size

        // Draw eyes
        if (assets.eyes.complete) ctx.drawImage(assets.eyes, 170, 131, 61, 30); // Adjust position and size

         // Draw eyebrows
         if (assets.eyebrows.complete) ctx.drawImage(assets.eyebrows, 164, 117, 73, 30); // Adjust position and size

        // Draw mouth
        if (assets.mouth.complete) ctx.drawImage(assets.mouth, 183, 156.5, 35, 30); // Adjust position and size

        // Draw accessories
    //     if (assets.accessories.complete) ctx.drawImage(assets.accessories, 150, 100, 100, 100); // Adjust position and size
    }

    const scale = 0.5; // 50% of original size
ctx.drawImage(assets.body, 100, 300, assets.body.width * scale, assets.body.height * scale);


    // Load default components
    loadAsset('body', 'body1.png');
    // loadAsset('legs', 'legs1.png');
    // loadAsset('arms', 'arms1.png');
    loadAsset('face', 'face1.png');
    loadAsset('hairstyle', 'hairstyle1.png');
    loadAsset('eyes', 'eyes1.png');
    loadAsset('eyebrows', 'eyebrows1.png');
    loadAsset('mouth', 'mouth3.png');
    // loadAsset('accessories', 'accessory1.png');

    document.querySelector('.controls').addEventListener('change', (event) => {
        const category = event.target.name;
        const filename = event.target.value;
        console.log(`Changing ${category} to ${filename}`);
        loadAsset(category, filename);
    });
    
    // document.addEventListener('DOMContentLoaded', (event) => {
    //     console.log("DOM fully loaded and parsed"); // Debugging
    
    //     // Ensure the save button and form elements are present
    //     const saveButton = document.getElementById('saveButton');
    //     if (!saveButton) {
    //         console.error("Save button not found");
    //         return;
    //     }
    
    //     saveButton.addEventListener('click', saveBitmoji);
    
    //     function getBitmojiData() {
    //         const body = document.getElementById('body');
    //         const hairStyle = document.getElementById('hairStyle');
    //         const eyebrows = document.getElementById('eyebrows');
    //         const eye = document.getElementById('eye');
    //         const face = document.getElementById('face');
    //         const mouth = document.getElementById('mouth');
    
    //         if (!body || !hairStyle || !eyebrows || !eye || !face || !mouth) {
    //             console.error("One or more form elements not found");
    //             return null;
    //         }
    
    //         const avatarData = {
    //             body: body.value,
    //             hairStyle: hairStyle.value,
    //             eyebrows: eyebrows.value,
    //             eye: eye.value,
    //             face: face.value,
    //             mouth: mouth.value
    //         };
    
    //         console.log("Collected Bitmoji Data: ", avatarData); // Debugging
    //         return avatarData;
    //     }
    
    //     function saveBitmoji() {
    //         const bitmojiData = getBitmojiData();
    //         if (!bitmojiData) {
    //             console.error("Failed to collect Bitmoji data");
    //             return;
    //         }
    
    //         fetch('/save-bitmoji', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(bitmojiData)
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log("Server Response: ", data); // Debugging
    //             if (data.success) {
    //                 alert('Bitmoji saved successfully! Shareable link: ' + data.link);
    //             } else {
    //                 alert('Failed to save Bitmoji.');
    //             }
    //         })
    //         .catch(error => {
    //             console.error("Error: ", error); // Debugging
    //             alert('An error occurred while saving the Bitmoji.');
    //         });
    //     }
    // });


    function saveAvatarConfig() {
                const avatarConfig = {
                    body: document.getElementById('body').value,
                    face: document.getElementById('face').value,
                    hairstyle: document.getElementById('hairstyle').value,
                    eyes: document.getElementById('eyes').value,
                    eyebrows: document.getElementById('eyebrows').value,
                    mouth: document.getElementById('mouth').value
                };
                localStorage.setItem('avatarConfig', JSON.stringify(avatarConfig));
                alert('Avatar configuration saved!');
            }
        
            function loadAvatarConfig() {
                const avatarConfig = JSON.parse(localStorage.getItem('avatarConfig'));
                if (avatarConfig) {
                    document.getElementById('body').value = avatarConfig.body;
                    document.getElementById('face').value = avatarConfig.face;
                    document.getElementById('hairstyle').value = avatarConfig.hairstyle;
                    document.getElementById('eyes').value = avatarConfig.eyes;
                    document.getElementById('eyebrows').value = avatarConfig.eyebrows;
                    document.getElementById('mouth').value = avatarConfig.mouth;
        
                    assets.body.src = assetPaths[avatarConfig.body];
                    assets.face.src = assetPaths[avatarConfig.face];
                    assets.hairstyle.src = assetPaths[avatarConfig.hairstyle];
                    assets.eyes.src = assetPaths[avatarConfig.eyes];
                    assets.eyebrows.src = assetPaths[avatarConfig.eyebrows];
                    assets.mouth.src = assetPaths[avatarConfig.mouth];
        
                    for (const key in assets) {
                        assets[key].onload = drawAvatar;
                    }
                } else {
                    alert('No saved avatar configuration found.');
                }
            }
        
            // loadAssets(drawAvatar());
        
            document.getElementById('saveAvatar').addEventListener('click', saveAvatarConfig);
            document.getElementById('loadAvatar').addEventListener('click', loadAvatarConfig);
    
    


});


// document.addEventListener("DOMContentLoaded", function() {
//     const canvas = document.getElementById('avatarCanvas');
//     const ctx = canvas.getContext('2d');
    
//     const assets = {
//         face: new Image(),
//         hairstyle: new Image(),
//         eyes: new Image(),
//         eyebrows: new Image(),
//         mouth: new Image(),
//         body: new Image()
//     };

//     // const assetPaths = {
//     //     body1: 'assets/body/body1.png',
//     //     body2: 'assets/body/body2.png',
//     //     body3: 'assets/body/body3.png',
//     //     face1: 'assets/face/face1.png',
//     //     face2: 'assets/face/face2.png',
//     //     hairstyle1: 'assets/hairstyle/hairstyle1.png',
//     //     hairstyle2: 'assets/hairstylehairstyle2.png',
//     //     hairstyle3: 'assets/hairstyle/hairstyle3.png',
//     //     hairstyle4: 'assets/hairstyle/hairstyle4.png',
//     //     eyes1: 'assets/eyes/eyes1.png',
//     //     eyes2: 'assets/eyes/eyes2.png',
//     //     eyes3: 'assets/eyes/eyes3.png',
//     //     eyes4: 'assets/eyes/eyes4.png',
//     //     eyebrows1: 'assets/eyebrows/eyebrows1.png',
//     //     eyebrows2: 'assets/eyebrows/eyebrows2.png',
//     //     eyebrows3: 'assets/eyebrows/eyebrows3.png',
//     //     eyebrows4: 'assets/eyebrows/eyebrows4.png',
//     //     eyebrows5: 'assets/eyebrows/eyebrows5.png',
//     //     mouth1: 'assets/mouth/mouth3.png'
//     // };

//     function loadAssets(callback) {
//         let loadedAssets = 0;
//         const totalAssets = Object.keys(assets).length;
//         for (const key in assets) {
//             assets[key].onload = () => {
//                 loadedAssets++;
//                 if (loadedAssets === totalAssets) {
//                     callback;
//                 }
//             };
//             assets[key].src = assetPaths[key + "1"];
//         }
//     }

//     // function drawAvatar() {
//     //             ctx.clearRect(0, 0, canvas.width, canvas.height);
        
//     //             // Draw hairstyle
//     //             if (assets.hairstyle.complete) ctx.drawImage(assets.hairstyle, 115, 82.5, 170, 160); // Adjust position and size
        
//     //             // Draw body
//     //             if (assets.body.complete) ctx.drawImage(assets.body, 106, 175, 194, 214); // Adjust position and size
        
//     //             // Draw legs
//     //             // if (assets.legs.complete) ctx.drawImage(assets.legs, 100, 500, 200, 200); // Adjust position and size
        
//     //             // Draw arms
//     //             // if (assets.arms.complete) ctx.drawImage(assets.arms, 100, 300, 200, 200); // Adjust position and size
        
//     //             // Draw face
//     //             if (assets.face.complete) ctx.drawImage(assets.face, 158, 110, 85, 80); // Adjust position and size
        
//     //             // Draw eyes
//     //             if (assets.eyes.complete) ctx.drawImage(assets.eyes, 170, 131, 61, 30); // Adjust position and size
        
//     //              // Draw eyebrows
//     //              if (assets.eyebrows.complete) ctx.drawImage(assets.eyebrows, 164, 117, 73, 30); // Adjust position and size
        
//     //             // Draw mouth
//     //             if (assets.mouth.complete) ctx.drawImage(assets.mouth, 183, 156.5, 35, 30); // Adjust position and size
        
//     //             // Draw accessories
//     //         //     if (assets.accessories.complete) ctx.drawImage(assets.accessories, 150, 100, 100, 100); // Adjust position and size
//     //         }
        
//     //         const scale = 0.5; // 50% of original size
//     //     ctx.drawImage(assets.body, 100, 300, assets.body.width * scale, assets.body.height * scale);
        

//         // Load default components
//     loadAsset('body', 'body1.png');
//     // loadAsset('legs', 'legs1.png');
//     // loadAsset('arms', 'arms1.png');
//     loadAsset('face', 'face1.png');
//     loadAsset('hairstyle', 'hairstyle1.png');
//     loadAsset('eyes', 'eyes1.png');
//     loadAsset('eyebrows', 'eyebrows1.png');
//     loadAsset('mouth', 'mouth3.png');
//     // loadAsset('accessories', 'accessory1.png');

//     document.querySelector('.controls').addEventListener('change', (event) => {
//         const category = event.target.name;
//         const filename = event.target.value;
//         console.log(`Changing ${category} to ${filename}`);
//         loadAsset(category, filename);
//     });

//     function drawAvatar() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(assets.body, 50, 50);
//         ctx.drawImage(assets.face, 50, 50);
//         ctx.drawImage(assets.hairstyle, 50, 50);
//         ctx.drawImage(assets.eyes, 50, 50);
//         ctx.drawImage(assets.eyebrows, 50, 50);
//         ctx.drawImage(assets.mouth, 50, 50);
//     }

//     function saveAvatarConfig() {
//         const avatarConfig = {
//             body: document.getElementById('body').value,
//             face: document.getElementById('face').value,
//             hairstyle: document.getElementById('hairstyle').value,
//             eyes: document.getElementById('eyes').value,
//             eyebrows: document.getElementById('eyebrows').value,
//             mouth: document.getElementById('mouth').value
//         };
//         localStorage.setItem('avatarConfig', JSON.stringify(avatarConfig));
//         alert('Avatar configuration saved!');
//     }

//     function loadAvatarConfig() {
//         const avatarConfig = JSON.parse(localStorage.getItem('avatarConfig'));
//         if (avatarConfig) {
//             document.getElementById('body').value = avatarConfig.body;
//             document.getElementById('face').value = avatarConfig.face;
//             document.getElementById('hairstyle').value = avatarConfig.hairstyle;
//             document.getElementById('eyes').value = avatarConfig.eyes;
//             document.getElementById('eyebrows').value = avatarConfig.eyebrows;
//             document.getElementById('mouth').value = avatarConfig.mouth;

//             assets.body.src = assetPaths[avatarConfig.body];
//             assets.face.src = assetPaths[avatarConfig.face];
//             assets.hairstyle.src = assetPaths[avatarConfig.hairstyle];
//             assets.eyes.src = assetPaths[avatarConfig.eyes];
//             assets.eyebrows.src = assetPaths[avatarConfig.eyebrows];
//             assets.mouth.src = assetPaths[avatarConfig.mouth];

//             for (const key in assets) {
//                 assets[key].onload = drawAvatar;
//             }
//         } else {
//             alert('No saved avatar configuration found.');
//         }
//     }

//     loadAssets(drawAvatar());

//     document.getElementById('saveAvatar').addEventListener('click', saveAvatarConfig);
//     document.getElementById('loadAvatar').addEventListener('click', loadAvatarConfig);
// });

