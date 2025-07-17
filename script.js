
// script.js
const ramos = [
  // 1° Semestre
  { nombre: "Morfología integral", semestre: 1, desbloquea: ["Fisiología", "Bases del cuidado de enfermería"] },
  { nombre: "Química general y orgánica", semestre: 1, desbloquea: ["Bioquímica"] },
  { nombre: "Biología celular", semestre: 1, desbloquea: ["Microbiología", "Bioquímica"] },
  { nombre: "Razonamiento matemático", semestre: 1, desbloquea: ["Salud Publica I"] },
  { nombre: "Bases Teóricas de la Enfermería", semestre: 1, desbloquea: ["Bases del cuidado de enfermería", "Enfermería en la Promoción y Prevención en la Salud"] },

  // 2° Semestre
  { nombre: "Microbiología", semestre: 2, desbloquea: ["Farmacología general"] },
  { nombre: "Bioquímica", semestre: 2, desbloquea: ["Farmacología general"] },
  { nombre: "Psicología evolutiva", semestre: 2, desbloquea: ["Cuidado de Enfermería en el Ciclo Vital"] },
  { nombre: "Bases del cuidado de enfermería", semestre: 2, desbloquea: ["Salud Publica I", "Cuidado de Enfermería en el Ciclo Vital"] },
  { nombre: "Habilidades comunicativas", semestre: 2, desbloquea: [] },

  // 3° Semestre
  { nombre: "Fisiología", semestre: 3, desbloquea: ["Fisiopatología"] },
  { nombre: "Salud Publica I", semestre: 3, desbloquea: ["Salud Publica II"] },
  { nombre: "Enfermería en la Promoción y Prevención en la Salud", semestre: 3, desbloquea: ["Salud Publica II", "Bases de enfermería en la salud familiar y comunitaria"] },
  { nombre: "Cuidado de Enfermería en el Ciclo Vital", semestre: 3, desbloquea: ["Cuidado de enfermería en adulto y adulto mayor"] },
  { nombre: "Ingles I", semestre: 3, desbloquea: ["Ingles II"] },

  // 4° Semestre
  { nombre: "Fisiopatología", semestre: 4, desbloquea: ["Farmacología clínica y farmacovigilancia", "Cuidado de enfermería en el niño y el adulto", "Integrador I: Cuidados de Enfermería I"] },
  { nombre: "Farmacología general", semestre: 4, desbloquea: ["Farmacología clínica y farmacovigilancia", "Integrador I: Cuidados de Enfermería I"] },
  { nombre: "Salud Publica II", semestre: 4, desbloquea: ["Cuidado de Enfermería en Salud Familiar y Comunitaria", "Fundamentos de gestión y liderazgo en enfermería", "Integrador I: Cuidados de Enfermería I"] },
  { nombre: "Bases de enfermería en la salud familiar y comunitaria", semestre: 4, desbloquea: ["Métodos de análisis en Enfermería", "Integrador I: Cuidados de Enfermería I"] },
  { nombre: "Cuidado de enfermería en adulto y adulto mayor", semestre: 4, desbloquea: ["Cuidado de enfermería en salud familiar y comunitaria", "Cuidado de enfermería en el niño y el adulto", "Integrador I: Cuidados de Enfermería I", "Métodos de análisis en Enfermería"] },
  { nombre: "Ingles II", semestre: 4, desbloquea: ["Ingles III"] },

  // 5° Semestre
  { nombre: "Farmacología clínica y farmacovigilancia", semestre: 5, desbloquea: ["Cuidado de enfermería en adulto y adulto mayor con alteraciones"] },
  { nombre: "Cuidado de enfermería en salud familiar y comunitaria", semestre: 5, desbloquea: ["Cuidado de enfermería en salud mental y comunitaria"] },
  { nombre: "Cuidado de enfermería en el niño y el adulto", semestre: 5, desbloquea: ["Cuidado de enfermería en adulto y adulto mayor con alteraciones"] },
  { nombre: "Fundamentos de gestión y liderazgo en enfermería", semestre: 5, desbloquea: ["Administración en unidades de enfermería"] },
  { nombre: "Integrador I: Cuidados de Enfermería I", semestre: 5, desbloquea: ["Cuidado de enfermería en salud mental y comunitaria", "Cuidado de enfermería en adulto y adulto mayor con alteraciones", "Ética y legislación en enfermería", "Cuidado de enfermería en el niño y adolescente con alteraciones"] },
  { nombre: "Ingles III", semestre: 5, desbloquea: ["Ingles IV"] },

  // 6° Semestre
  { nombre: "Cuidado de enfermería en salud mental y comunitaria", semestre: 6, desbloquea: ["Cuidado de enfermería en la salud familiar y comunitaria"] },
  { nombre: "Cuidado de enfermería en adulto y adulto mayor con alteraciones", semestre: 6, desbloquea: ["Cuidado integral del niño y del adulto", "Cuidado de enfermería en el niño y adolescente con alteraciones", "Integrador II: Cuidado de Enfermería II"] },
  { nombre: "Métodos de análisis en Enfermería", semestre: 6, desbloquea: ["Seminario de investigación en Enfermería"] },
  { nombre: "Administración en unidades de enfermería", semestre: 6, desbloquea: ["Desarrollo de proyecto en enfermería"] },
  { nombre: "Ingles IV", semestre: 6, desbloquea: ["Seminario de investigación en Enfermería"] },
  { nombre: "Razonamiento científico y Tics", semestre: 6, desbloquea: ["Pensamiento crítico"] },

  // 7° Semestre
  { nombre: "Ética y legislación en enfermería", semestre: 7, desbloquea: ["Cuidado integral del niño y del adulto", "Seminario de investigación en Enfermería", "Integrador II: Cuidado de Enfermería II"] },
  { nombre: "Cuidado de enfermería en la salud familiar y comunitaria", semestre: 7, desbloquea: ["Integrador II: Cuidado de Enfermería II"] },
  { nombre: "Cuidado de enfermería en el niño y adolescente con alteraciones", semestre: 7, desbloquea: ["Cuidado integral del niño y del adulto", "Integrador II: Cuidado de Enfermería II"] },
  { nombre: "Desarrollo de proyecto en enfermería", semestre: 7, desbloquea: ["Integrador II: Cuidado de Enfermería II"] },
  { nombre: "Pensamiento crítico", semestre: 7, desbloquea: ["Responsabilidad social"] },

  // 8° Semestre
  { nombre: "Cuidado integral del niño y del adulto", semestre: 8, desbloquea: ["Integrador III: Gestión del cuidado en unidades de enfermería", "Integrador IV: Gestión del cuidado en salud familiar y comunitaria"] },
  { nombre: "Seminario de investigación en Enfermería", semestre: 8, desbloquea: ["Integrador III: Gestión del cuidado en unidades de enfermería", "Integrador IV: Gestión del cuidado en salud familiar y comunitaria"] },
  { nombre: "Integrador II: Cuidado de Enfermería II", semestre: 8, desbloquea: ["Integrador III: Gestión del cuidado en unidades de enfermería", "Integrador IV: Gestión del cuidado en salud familiar y comunitaria"] },
  { nombre: "Responsabilidad social", semestre: 8, desbloquea: ["Integrador III: Gestión del cuidado en unidades de enfermería", "Integrador IV: Gestión del cuidado en salud familiar y comunitaria"] },

  // 9° y 10° Semestre
  { nombre: "Integrador III: Gestión del cuidado en unidades de enfermería", semestre: 9, desbloquea: [] },
  { nombre: "Integrador IV: Gestión del cuidado en salud familiar y comunitaria", semestre: 10, desbloquea: [] }
];

const aprobados = new Set();
const ramosMap = new Map();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  const maxSemestre = Math.max(...ramos.map(r => r.semestre));

  for (let i = 1; i <= maxSemestre; i++) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    columna.innerHTML = `<h2>${i}° Semestre</h2>`;

    ramos.filter(r => r.semestre === i).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo bloqueado";
      div.innerText = ramo.nombre;
      div.onclick = () => aprobarRamo(ramo.nombre);
      columna.appendChild(div);
      ramosMap.set(ramo.nombre, div);
    });

    contenedor.appendChild(columna);
  }

  desbloquearIniciales();
}

function desbloquearIniciales() {
  ramos.forEach(ramo => {
    if (!ramos.some(r => r.desbloquea.includes(ramo.nombre))) {
      desbloquear(ramo.nombre);
    }
  });
}

function aprobarRamo(nombre) {
  if (aprobados.has(nombre)) return;
  aprobados.add(nombre);
  const el = ramosMap.get(nombre);
  el.classList.add("aprobado");

  const ramo = ramos.find(r => r.nombre === nombre);
  ramo.desbloquea.forEach(desbloquear);
}

function desbloquear(nombre) {
  const el = ramosMap.get(nombre);
  if (el) el.classList.remove("bloqueado");
}

crearMalla();
