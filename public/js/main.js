window.onload = () => {
    let sections = document.querySelectorAll('.sekcja');
    for (var section of sections) {
        section.append(randomPosition(createEllipse()))
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
}

function randomPosition(element) {
    element.style.left = Math.random()*window.innerWidth;
    element.style.top = Math.random()*window.innerHeight;
    return element;
}

function createEllipse() {
    var svg = generateSVG()
    svg.appendChild(generateEllipse())
    return svg
}

function generateSVG() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
    svg.setAttribute("viewBox","0 0 40 40");
    svg.style.position = "absolute";
    svg.style.height = "1.5em";
    svg.style.fill = "none";

    return svg
}

function generateEllipse() {
    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');

    newElement.setAttribute("cx","20");
    newElement.setAttribute("cy","20");
    newElement.setAttribute("rx","15");
    newElement.setAttribute("ry","15");

    // newElement.style.stroke = "#" + Math.floor(Math.random()*1000);
    newElement.style.stroke = getRandomColor();
    newElement.style.strokeWidth = "5px";
    return newElement
}

function getRandomColor(excludedColor) {
    let colors = new Set([
        '#ef420c',
        '#10305f',
        '#ebf1f4',
        '#9dabbc'
    ])
    if (excludedColor) {
        colors.delete(excludedColor)
    }
    console.log(Array.from(colors));
    console.log(colors[Math.round(Math.random()*colors.length)]);
    return colors[Math.round(Math.random()*colors.length)]
}
