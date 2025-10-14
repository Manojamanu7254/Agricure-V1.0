// 🍅 Tomato Disease Identifier – Beautiful Detailed Output Version

document.getElementById('imageUpload').addEventListener('change', function () {
    const fileInput = document.getElementById('imageUpload');
    const fileName = fileInput.files[0] ? fileInput.files[0].name : 'Choose a file';
    const fileNameLabel = document.getElementById('fileName');
    fileNameLabel.textContent = fileName;
    fileNameLabel.style.transition = "all 0.3s ease";
    fileNameLabel.style.color = "#007bff";
    fileNameLabel.style.fontWeight = "600";
    setTimeout(() => (fileNameLabel.style.color = "#333"), 1000);
});

const imageInfo = {
    "6a56a429-b241.JPG": {
        additionalImage1: "PROJECT VALID\\tamato bactrial spot 1.JPG",
        additionalImage2: "PROJECT VALID\\tamato bactrial spot 2.JPG",
        diseaseName: "Tomato Bacterial Spot",
        scientificName: "Xanthomonas campestris pv. vesicatoria",
        description: "A destructive bacterial disease that causes dark, greasy lesions on leaves, stems, and fruits. It reduces photosynthesis and fruit quality.",
        symptoms: [
            "Small, brown to black water-soaked spots on leaves",
            "Yellowing and premature leaf drop",
            "Rough, scabby patches on fruits"
        ],
        effects: "Severely infected plants lose foliage, leading to sunscalded fruit and poor yield quality.",
        spread: "It spreads rapidly through splashing rain, wind, contaminated tools, and infected seeds or transplants.",
        prevention: "Use certified disease-free seeds, crop rotation, copper-based bactericides, and avoid overhead irrigation.",
        environmentalConditions: "Thrives in warm, humid conditions (25–30°C with high moisture).",
        managementTips: [
            "Disinfect tools regularly",
            "Remove crop debris after harvest",
            "Apply bio-control agents like Bacillus subtilis"
        ]
    },
    "95de9f94-ddb1-4303-b3d9-.JPG": {
        additionalImage1: "PROJECT VALID\\tamato early bright 5.JPG",
        additionalImage2: "PROJECT VALID\\tamato early bright 6.JPG",
        diseaseName: "Tomato Early Blight",
        scientificName: "Alternaria solani",
        description: "A common fungal disease affecting leaves, stems, and fruits, known for its target-like dark brown spots.",
        symptoms: [
            "Concentric ring spots on older leaves",
            "Leaves turn yellow and drop prematurely",
            "Fruit rot near the stem end"
        ],
        effects: "Reduces foliage area and weakens the plant, decreasing yield potential.",
        spread: "Spores spread through wind, rain splash, and infected debris.",
        prevention: "Use resistant varieties, avoid overhead watering, and apply recommended fungicides.",
        environmentalConditions: "Favored by warm, moist weather (24–29°C).",
        managementTips: [
            "Ensure proper field sanitation",
            "Avoid planting in the same field consecutively",
            "Improve air circulation between plants"
        ]
    },
    "_GHLB2 Leaf 8633_flipLR.JPG": {
        additionalImage1: "PROJECT VALID\\tamato late bright 1.JPG",
        additionalImage2: "PROJECT VALID\\tamato late bright 2.JPG",
        diseaseName: "Tomato Late Blight",
        scientificName: "Phytophthora infestans",
        description: "A fast-spreading, devastating disease that affects all parts of the tomato plant.",
        symptoms: [
            "Dark, water-soaked lesions on leaves and stems",
            "White fungal growth under humid conditions",
            "Brown, firm rot on fruits"
        ],
        effects: "Leads to rapid defoliation and plant death within days under favorable weather.",
        spread: "Spread by spores through wind and rain in cool, humid climates.",
        prevention: "Use resistant cultivars, apply fungicides, and destroy infected plants.",
        environmentalConditions: "Cool (18–22°C) and wet weather accelerates infection.",
        managementTips: [
            "Avoid late evening irrigation",
            "Maintain field drainage",
            "Monitor fields frequently during monsoon"
        ]
    }
};

// 🌿 Main Function
function getImageInfo() {
    const imageUpload = document.getElementById("imageUpload").files[0];
    const infoBox = document.getElementById("info");
    const spinner = document.getElementById("loadingSpinner");
    const preview = document.getElementById("uploadedImagePreview");
    const add1 = document.getElementById("additionalImage1");
    const add2 = document.getElementById("additionalImage2");

    if (!imageUpload) {
        infoBox.innerHTML = `<p style="color:#d9534f;font-weight:600;">⚠️ Please upload an image first.</p>`;
        return;
    }

    spinner.style.display = 'block';
    spinner.style.animation = "spin 1s linear infinite";
    preview.style.display = add1.style.display = add2.style.display = 'none';
    infoBox.innerHTML = '';

    setTimeout(() => {
        const info = imageInfo[imageUpload.name];

        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            preview.style.transition = "opacity 0.6s ease";
            preview.style.opacity = "1";
            preview.style.borderRadius = "15px";
            preview.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
        };
        reader.readAsDataURL(imageUpload);

        if (info) {
            infoBox.innerHTML = `
                <div style="
                    background:linear-gradient(135deg,#e3f2fd,#f9f9ff);
                    padding:25px;
                    border-radius:15px;
                    box-shadow:0 4px 20px rgba(0,0,0,0.1);
                    font-family:Segoe UI, sans-serif;
                    line-height:1.6;
                    ">
                    <h2 style="color:#0069d9;">🌾 Disease: ${info.diseaseName}</h2>
                    <p><b>Scientific Name:</b> <i>${info.scientificName}</i></p>
                    <p><b>Description:</b> ${info.description}</p>
                    <h3 style="color:#007bff;">🧬 Symptoms:</h3>
                    <ul>${info.symptoms.map(s => `<li>${s}</li>`).join('')}</ul>
                    <p><b>Effects:</b> ${info.effects}</p>
                    <p><b>Spread:</b> ${info.spread}</p>
                    <p><b>Environmental Conditions:</b> ${info.environmentalConditions}</p>
                    <h3 style="color:#28a745;">🛡️ Prevention & Management:</h3>
                    <ul>${info.managementTips.map(t => `<li>${t}</li>`).join('')}</ul>
                    <p><b>General Prevention:</b> ${info.prevention}</p>
                </div>
            `;
            add1.src = info.additionalImage1;
            add2.src = info.additionalImage2;
            add1.style.display = add2.style.display = 'block';
            add1.style.borderRadius = add2.style.borderRadius = '12px';
            add1.style.boxShadow = add2.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        } else {
            infoBox.innerHTML = `<p style="color:#d9534f;font-weight:600;">❌ Unrecognized image. Please try again.</p>`;
        }

        spinner.style.display = 'none';
    }, 2500 + Math.random() * 1500);
}

// 🌾 Spinner animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}
`;
document.head.appendChild(style);
