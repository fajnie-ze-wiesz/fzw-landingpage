export function sprinkle(targetElement, excludeElements, {
  sprinkleElements,
  colors,
  animate,
  rotate
}) {
  console.log(targetElement);
  if (!sprinkleElements) {
    sprinkleElements = defaultSprinkleElements()
  }
  const circumference = (targetElement.clientWidth + targetElement.clientHeight) * 2;
  const sprinkleCount = Math.min(Math.ceil(circumference / 400), 5);
  console.log(sprinkleCount);
  console.log(sprinkleElements);
  for (let i = 0; i < sprinkleCount; i++) {
    let sprinkleElement = getRandomArrayItem(sprinkleElements).cloneNode(true)
    sprinkleElement.style.stroke = colors[i % colors.length];
    let [x, y] = randomPosition(targetElement, excludeElements, 0)
    sprinkleElement.style.left = `${x}px`
    sprinkleElement.style.top = `${y}px`

    if (animate) {
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
    }
    if (rotate) {
        sprinkleElement.style.transform = `rotate(${Math.random()*360}deg)`
    }
    document.querySelector('body').append(sprinkleElement)
    excludeElements.push(sprinkleElement)
  }
}

function defaultSprinkleElements() {
  return [createEllipse(), createCross(), createRectangle(), createTriangle()]
}

function randomPosition(element, excludeElements, margin) {
    let [x, y] = [element.offsetLeft + Math.random() * element.clientWidth, (element.naturalHeight || element.offsetTop) + Math.random() * element.clientHeight]
    
    while (checkXCollision(x, element, excludeElements, margin)) {
        x = element.offsetLeft + Math.random() * element.clientWidth
    }
    
    while (checkYCollision(y, element, excludeElements, margin)) {
        y = (element.naturalHeight || element.offsetTop) + Math.random() * element.clientHeight
    }
    console.log([x, y]);
    return [x, y]
}

function checkXCollision(x, element, excludeElements, margin) {
    for (var excludeElement of excludeElements) {
        if (x + margin > excludeElement.offsetLeft && x - margin < excludeElement.offsetLeft + excludeElement.clientWidth) {
            return true
        }
    }
}

function checkYCollision(y, element, excludeElements, margin) {
    for (var excludeElement of excludeElements) {
        if (y + margin < excludeElement.offsetTop && y - margin > excludeElement.offsetTop + excludeElement.clientHeight) {
            return true
        }
    }
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

  line1.setAttribute("x1", "10");
  line1.setAttribute("y1", "10");
  line1.setAttribute("x2", "30");
  line1.setAttribute("y2", "30");
  line1.setAttribute("stroke-linecap", "round");

  line2.setAttribute("x1", "30");
  line2.setAttribute("y1", "10");
  line2.setAttribute("x2", "10");
  line2.setAttribute("y2", "30");
  line2.setAttribute("stroke-linecap", "round");

  svg.append(line1)
  svg.append(line2)
  return svg
}

function createTriangle() {
  var svg = generateSVG()
  var line1 = document.createElementNS("http://www.w3.org/2000/svg", 'line');
  var line2 = document.createElementNS("http://www.w3.org/2000/svg", 'line');
  var line3 = document.createElementNS("http://www.w3.org/2000/svg", 'line');

  line1.setAttribute("x1", "5");
  line1.setAttribute("y1", "5");
  line1.setAttribute("x2", "35");
  line1.setAttribute("y2", "5");
  line1.setAttribute("stroke-linecap", "round");

  line2.setAttribute("x1", "5");
  line2.setAttribute("y1", "5");
  line2.setAttribute("x2", "20");
  line2.setAttribute("y2", "30");
  line2.setAttribute("stroke-linecap", "round");
  
  line3.setAttribute("x1", "35");
  line3.setAttribute("y1", "5");
  line3.setAttribute("x2", "20");
  line3.setAttribute("y2", "30");
  line3.setAttribute("stroke-linecap", "round");

  svg.append(line1)
  svg.append(line2)
  svg.append(line3)
  return svg
}


function createRectangle() {
  var svg = generateSVG()
  var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

  rect.setAttribute("x", "5");
  rect.setAttribute("y", "5");
  rect.setAttribute("height", "30");
  rect.setAttribute("width", "30");
  rect.setAttribute("rx", "2");
  rect.setAttribute("ry", "2");

  svg.append(rect)
  return svg
}


function generateSVG() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
  svg.setAttribute("viewBox", "0 0 40 40");
  svg.style.position = "absolute";
  svg.style['z-index'] = "0";
  svg.style.strokeWidth = "7px";
  svg.style.stroke = 'black';
  svg.style.height = "1.5em";
  svg.style.fill = "none";

  return svg
}

function getRandomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}