let sizes = [0, 4, 8, 16, 24, 36];
let directions = {
    top     : 't',
    left    : 'l',
    bottom  : 'b',
    right   : 'r'
}
let colors = {
    red:    ['#fff5f5', '#ff6b6b', '#f03e3e', '#c92a2a' ],
    blue:   ['#e8f7ff','#329af0','#1c7cd6','#1862ab'],
    green:  ['#ebfbee', '#51cf66', '#37b24d', '#2b8a3e'],
    yellow: ['#fff9db', '#fcc419', '#f59f00', '#e67700' ],
    orange: ['#fff4e6', '#ff922b', '#f76707', '#d9480f' ]
};
let grays = [ '#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529' ];
let cssColors = '',
    cssBackgroundColors = '',
    cssMargins = '',
    cssPaddings = '';

generateMargins = () => {
    sizes.forEach((size, index) => {
        cssMargins += `
.m-${index}  { margin: ${size}px; }
.mx-${index} { margin-top: ${size}px; margin-bottom: ${size}px; }
.my-${index} { margin-left: ${size}px; margin-right: ${size}px; }
        `;
            
        Object.entries(directions).forEach(([direction, abbr]) => {
            cssMargins += `
.m${abbr}-${index} { margin-${direction}: ${size}px; }
            `;
        })
    });
}

generatePaddings = () => {
    sizes.forEach((size, index) => {
        cssPaddings += `
.p-${index}  { padding: ${size}px; }
.px-${index} { padding-top: ${size}px; padding-bottom: ${size}px; }
.py-${index} { padding-left: ${size}px; padding-right: ${size}px; }
        `;

        Object.entries(directions).forEach(([direction, abbr]) => {
            cssPaddings += `
.p${abbr}-${index} { padding-${direction}: ${size}px; }
            `
        })
    });
}

generateColors = () => {
    grays.forEach((grayHex, index) => {
        cssColors += `
.color-gray-${index}        { color:${grayHex}; }
        `;
        cssBackgroundColors += `
.background-gray-${index}   { background-color:${grayHex}; }
        `;
    });

    Object.entries(colors).forEach(([color, hexArray]) => {
        cssColors += `
.color-${color}             { color:${hexArray[2]}; }
.color-${color}-transparent { color:${hexArray[0]}; }
.color-${color}-lite        { color:${hexArray[1]}; }
.color-${color}-dark        { color:${hexArray[3]}; }
        `;

        cssBackgroundColors += `
.background-${color}             { background-color:${hexArray[2]}; }
.background-${color}-transparent { background-color:${hexArray[0]}; }
.background-${color}-lite        { background-color:${hexArray[1]}; }
.background-${color}-dark        { background-color:${hexArray[3]}; }
        `;
    });
}

generateAll = () => {
    generateColors();
    generateMargins();
    generatePaddings();
}

appendOnElement = () => {
    generateAll();
    if (document.querySelector('.code')) document.querySelector('.code').innerHTML = cssBackgroundColors + cssColors + cssMargins + cssPaddings
}

window.addEventListener('load', () => {            
    appendOnElement();
});