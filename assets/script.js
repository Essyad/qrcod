let qrCode;

// Translation texts
const translations = {
    en: {
        title: "QR Code Generator",
        contentLabel: "Content (URL/Text):",
        widthLabel: "Width (px):",
        heightLabel: "Height (px):",
        lightColorLabel: "Light Color:",
        darkColorLabel: "Dark Color:",
        generateButton: "Generate QR Code",
        downloadLink: "Download QR Code",
    },
    fr: {
        title: "Générateur de QR Code",
        contentLabel: "Contenu (URL/Texte):",
        widthLabel: "Largeur (px):",
        heightLabel: "Hauteur (px):",
        lightColorLabel: "Couleur Claire:",
        darkColorLabel: "Couleur Foncée:",
        generateButton: "Générer QR Code",
        downloadLink: "Télécharger le QR Code",
    }
};

// Translation function
function translatePage() {
    const language = document.getElementById('languageSelect').value;
    document.getElementById('title').innerText = translations[language].title;
    document.getElementById('contentLabel').innerText = translations[language].contentLabel;
    document.getElementById('widthLabel').innerText = translations[language].widthLabel;
    document.getElementById('heightLabel').innerText = translations[language].heightLabel;
    document.getElementById('lightColorLabel').innerText = translations[language].lightColorLabel;
    document.getElementById('darkColorLabel').innerText = translations[language].darkColorLabel;
    document.getElementById('generateButton').innerText = translations[language].generateButton;
    document.getElementById('downloadLink').innerText = translations[language].downloadLink;
}

// Generate QR code function
function generateQRCode() {
    const content = document.getElementById('content').value;
    const width = parseInt(document.getElementById('width').value);
    const height = parseInt(document.getElementById('height').value);
    const lightColor = document.getElementById('lightColor').value;
    const darkColor = document.getElementById('darkColor').value;

    if (qrCode) {
        qrCode.update({
            data: content,
            width: width,
            height: height,
            dotsOptions: {
                color: darkColor,
            },
            backgroundOptions: {
                color: lightColor,
            }
        });
    } else {
        qrCode = new QRCodeStyling({
            width: width,
            height: height,
            data: content,
            dotsOptions: {
                color: darkColor,
            },
            backgroundOptions: {
                color: lightColor,
            }
        });
    }

    // Clear existing QR code and append the new one
    document.getElementById('qrcode').innerHTML = "";
    qrCode.append(document.getElementById('qrcode'));

    // Enable download link
    qrCode.getRawData('png').then(function(blob) {
        const downloadLink = document.getElementById('downloadLink');
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.style.display = 'block';
    });
}