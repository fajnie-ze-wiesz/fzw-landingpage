export function sprinkle(targetElement, {
  sprinkleElements,
  colors
}) {
  console.log(targetElement);
  if (!sprinkleElements) {
    sprinkleElements = defaultSprinkleElements()
  }
  const circumference = (targetElement.clientWidth + targetElement.clientHeight) * 2;
  const sprinkleCount = Math.ceil(circumference / 500);
  console.log(sprinkleCount);
  console.log(sprinkleElements);
  for (let i = 0; i < sprinkleCount; i++) {
    let sprinkleElement = getRandomArrayItem(sprinkleElements).cloneNode(true)
    sprinkleElement.style.stroke = getRandomArrayItem(colors);
    let [x, y] = randomPosition(targetElement)
    sprinkleElement.style.left = `${x}px`
    sprinkleElement.style.top = `${y}px`

    sprinkleElement.animate([{
        transform: `rotate(0deg) translateY(0px) rotate(0deg)`
      },
      {
        transform: `rotate(${Math.random()*360}deg) translateY(${30+Math.random()*100}px) rotate(${Math.random()*1000}deg)`
      },
      {
        transform: `rotate(${Math.random()*720}deg) translateY(0px) rotate(${Math.random()*1000}deg)`
      }
    ], {
      duration: 8000,
      direction: 'alternate',
      iterationStart: Math.random(),
      easing: 'linear',
      iterations: Infinity
    });

    document.querySelector('body').append(sprinkleElement)
  }
}

function defaultSprinkleElements() {
  // return [circle, wave, cross, triangle, square]
  return [createEllipse(), createCross()]
}

function randomPosition(element) {
  return [element.offsetLeft + Math.random() * element.clientWidth, element.offsetTop + Math.random() * element.clientHeight]
}

function createEllipse() {
  var svg = generateSVG()

  var ellipse = document.createElementNS("http://www.w3.org/2000/svg", 'ellipse');

  ellipse.setAttribute("cx", "20");
  ellipse.setAttribute("cy", "20");
  ellipse.setAttribute("rx", "15");
  ellipse.setAttribute("ry", "15");

  svg.appendChild(ellipse)

  return svg
}

function createCross() {
  var svg = generateSVG()
  var line1 = document.createElementNS("http://www.w3.org/2000/svg", 'line');
  var line2 = document.createElementNS("http://www.w3.org/2000/svg", 'line');

  line1.setAttribute("x1", "5");
  line1.setAttribute("y1", "5");
  line1.setAttribute("x2", "35");
  line1.setAttribute("y2", "35");

  line2.setAttribute("x1", "35");
  line2.setAttribute("y1", "5");
  line2.setAttribute("x2", "5");
  line2.setAttribute("y2", "35");

  svg.append(line1)
  svg.append(line2)
  return svg
}

function generateSVG() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  svg.setAttribute("viewBox", "0 0 40 40");
  svg.style.position = "absolute";
  svg.style['z-index'] = "0";
  svg.style.strokeWidth = "5px";
  svg.style.stroke = 'black';
  svg.style.height = "1.5em";
  svg.style.fill = "none";

  return svg
}

function getRandomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}