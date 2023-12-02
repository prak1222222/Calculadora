
function calcular() {
    const lampWattage = document.getElementById('lampWattage').value;
    const lampHours = document.getElementById('lampHours').value;
    const acWattage = document.getElementById('acWattage').value;
    const acHours = document.getElementById('acHours').value;

    const lampConsumption = lampWattage * lampHours;
    const acConsumption = acWattage * acHours;

    const totalConsumption = lampConsumption + acConsumption;

    document.getElementById('result').innerHTML = `O consumo total é de ${totalConsumption} watts-hora por dia.`;
}

// Animação de plano de fundo 

const ul = document.querySelector("ul");

const random = (min, max) => Math.random() * (max - min) + min;

const randomColors = ["#8400ff", "#2bff00", "#eaff00"];

for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");

  const size = Math.floor(random(50, 120));
  const position = random(1, 94);
  const delay = random(5, 1);
  const duration = random(10, 40);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;

  li.style.backgroundColor = randomColors[Math.floor(random(0, 3))];

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;

  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, 
                                                   ${Math.random()}, ${Math.random()})`;

  ul.appendChild(li);
}