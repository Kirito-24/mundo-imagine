// --- COMENTARIOS DE REFERENCIA PREINSTALADOS ---
const COMENTARIOS_REFERENCIA = [
  {
    autor: 'NeoGamer_99',
    texto: '¡Con el nuevo bono de +20 gemas cada 15 minutos ya me compré el Fórmula 1 🏎️ y el Dragón Esmeralda 🐉!',
    fecha: 'Hace 10 min',
    likes: 18,
    esFundador: true,
    esVip: true
  },
  {
    autor: 'Luna_Cyber',
    texto: 'Activé el Modo Neón y ver a los 3 gatitos rebotando por toda la pantalla mientras juego es lo máximo 🐱✨',
    fecha: 'Hace 35 min',
    likes: 12,
    esFundador: true,
    esVip: false
  },
  {
    autor: 'Akira_Dev',
    texto: 'Consejo: compren primero el Imán de Gemas 🧲 y el Escudo 🛡️, sirven muchísimo en ambos juegos.',
    fecha: 'Hace 1 hora',
    likes: 24,
    esFundador: false,
    esVip: true
  },
  {
    autor: 'PixelCat_24',
    texto: '¡Hay más de 200 personajes en la tienda! Mi favorito es el Tiburón Megalodón 🦈 y el OVNI 🛸.',
    fecha: 'Hace 2 horas',
    likes: 9,
    esFundador: false,
    esVip: false
  }
];

// --- GENERADOR DE LOS 210 ARTÍCULOS DE LA TIENDA ---
const MEJORAS_BASE = [
  { id: 'perk_magnet', nombre: 'Imán de Gemas', icono: '🧲', precio: 50, tipo: 'perk', cat: 'mejoras', desc: 'Atrae automáticamente las gemas cercanas hacia ti.' },
  { id: 'perk_shield', nombre: 'Escudo de Energía', icono: '🛡️', precio: 60, tipo: 'perk', cat: 'mejoras', desc: 'Resiste 1 impacto mortal de mina o láser por partida.' },
  { id: 'perk_double', nombre: 'Multiplicador x2 💎', icono: '⚡', precio: 100, tipo: 'perk', cat: 'mejoras', desc: 'Duplica todas las gemas que atrapes jugando.' },
  { id: 'badge_founder', nombre: 'Insignia Fundador', icono: '⭐', precio: 50, tipo: 'badge', cat: 'mejoras', desc: 'Añade el rango dorado FUNDADOR junto a tu apodo.' },
  { id: 'badge_vip', nombre: 'Corona Rey Neón', icono: '👑', precio: 90, tipo: 'badge', cat: 'mejoras', desc: 'Borde dorado VIP y corona real en tus comentarios.' }
];

// 70 Animales
const LISTA_ANIMALES = [
  ['🐱','Gato Galáctico',20],['🐶','Perro Cyber',20],['🐺','Lobo Lunar',30],['🦊','Zorro Ígneo',30],['🦁','León Dorado',40],
  ['🐯','Tigre Neón',40],['🐆','Pantera Sombra',45],['🐻','Oso Grizzly',25],['🐻‍❄️','Oso Polar',35],['🐼','Panda Bambú',35],
  ['🐨','Koala Zen',25],['🐵','Mono Ágil',20],['🦍','Gorila Titán',50],['🐘','Elefante Real',40],['🦏','Rinoceronte Blindado',45],
  ['🦛','Hipopótamo Acuático',35],['🦒','Jirafa Estelar',30],['🦓','Cebra Rayo',30],['🐎','Caballo Veloz',35],['🦄','Unicornio Mágico',65],
  ['🦌','Ciervo Bosque',30],['🐰','Conejo Turbo',20],['🐹','Hámster Cósmico',20],['🐭','Ratón Laser',15],['🐿️','Ardilla Veloz',20],
  ['🦔','Erizo Espina',25],['🦇','Murciélago Nocturno',30],['🦉','Búho Sabio',35],['🦅','Águila Imperial',50],['🦆','Pato Cuac',20],
  ['🦢','Cisne Blanco',30],['🦩','Flamenco Neón',35],['🦚','Pavo Real',40],['🦜','Loro Pirata',35],['🐧','Pingüino Ártico',25],
  ['🐸','Rana Saltarina',20],['🐊','Cocodrilo Feroz',45],['🐢','Tortuga Marina',25],['🐍','Serpiente Cobra',35],['🐉','Dragón Esmeralda',75],
  ['🦖','Dinosaurio T-Rex',70],['🦕','Brontosaurio',60],['🐳','Ballena Azul',45],['🐬','Delfín Sónico',40],['🦈','Tiburón Megalodón',65],
  ['🐙','Pulpo Kraken',50],['🦑','Calamar Gigante',45],['🦀','Cangrejo Pinza',25],['🦞','Langosta Roja',30],['🦐','Camarón Pistola',20],
  ['🐡','Pez Globo',25],['🐠','Pez Tropical',20],['🐟','Pez Plata',15],['🦭','Foca Marina',30],['🐌','Caracol Turbo',20],
  ['🦋','Mariposa Monarca',25],['🐝','Abeja Reina',30],['🐞','Mariquita Suerte',20],['🪲','Escarabajo Hércules',35],['🕷️','Araña Cyber',35],
  ['🦂','Escorpión Dorado',45],['🐪','Camello Desierto',30],['🦙','Llama Andina',35],['🦘','Canguro Boxeador',40],['🦥','Perezoso Relax',25],
  ['🦦','Nutria Marina',30],['🦨','Zorrillo Gas',25],['🦡','Tejón Miel',35],['🦫','Castor Ingeniero',30],['🐾','Garra Salvaje',40]
];

// 50 Carros y Vehículos
const LISTA_CARROS = [
  ['🏎️','Fórmula 1 Neón',60],['🚗','Auto Deportivo Rojo',35],['🚙','Camioneta 4x4',40],['🚕','Taxi Urbano',25],['🚓','Patrulla Policial',45],
  ['🚑','Ambulancia Turbo',40],['🚒','Camión de Bomberos',45],['🚐','Furgoneta Retro',30],['🛻','Pickup Todo Terreno',40],['🚚','Camión de Carga',35],
  ['🚛','Tráiler Gigante',50],['🚜','Tractor Poderoso',30],['🏍️','Moto GP Racing',55],['🛵','Scooter Eléctrico',25],['🚲','Bicicleta BMX',20],
  ['🛴','Monopatín Turbo',20],['🛹','Skate Volador',35],['🛼','Patines Roller',25],['🚄','Tren Bala Japonés',55],['🚂','Locomotora Vapor',45],
  ['🚆','Tren Expreso',40],['🚇','Metro Subterráneo',35],['🚊','Tranvía Clásico',30],['🚝','Monocarril Futuro',50],['✈️','Avión supersónico',60],
  ['🛩️','Avioneta Acrobática',45],['🚁','Helicóptero Táctico',55],['🚀','Cohete Intergaláctico',50],['🛸','OVNI Platillo Volador',80],['🛰️','Satélite Espía',60],
  ['⛵','Velero del Viento',30],['🚤','Lancha Rápida',45],['🛥️','Yate de Lujo',65],['🛳️','Crucero Imperial',60],['⛴️','Transbordador',40],
  ['🚢','Barco Transatlántico',55],['🛶','Canoa Rápida',20],['🚠','Teleférico Cumbre',30],['🚡','Cabina Aérea',30],['🚟','Tren Colgante',40],
  ['🛺','TukTuk Asiático',25],['🛞','Rueda de Fuego',30],['🚨','Sirena Policial',35],['⛽','Bomba Nitro',40],['🚧','Barrera Vial',20],
  ['⚓','Ancla Pirata',35],['🪂','Paracaídas Extremo',35],['💺','Asiento Eyectable',40],['🛒','Carrito de Compras',25],['🛷','Trineo Ártico',30]
];

// 45 Fantasía, Monstruos y Espacio
const LISTA_FANTASIA = [
  ['👾','Alien Supremo',65],['👽','Extraterrestre Gris',55],['🤖','Robot Mecha',60],['👻','Fantasma Boo',45],['👹','Demonio Oni',60],
  ['👺','Tengu Místico',55],['🤡','Payaso Bromista',40],['💩','Monstruo Divertido',30],['💀','Calavera Neón',50],['☠️','Pirata Calavera',55],
  ['🎃','Calabaza Halloween',45],['😈','Diablillo Púrpura',50],['🧙','Mago Arcano',65],['🧚','Hada Luminosa',50],['🧛','Vampiro Conde',60],
  ['🧜','Sirena Atlántida',55],['🧝','Elfo Arquero',55],['🧞','Genio de la Lámpara',70],['🧟','Zombi Mutante',45],['🥷','Ninja Sombra',75],
  ['🦸','Superhéroe Galáctico',70],['🦹','Supervillano Oscuro',70],['🕵️','Detective Secreto',45],['💂','Guardia Real',40],['🤠','Vaquero del Oeste',45],
  ['👨‍🚀','Astronauta Apolo',65],['🤴','Príncipe Dorado',60],['👸','Princesa Estelar',60],['👼','Ángel Guardián',55],['🎅','Santa Claus',50],
  ['⛄','Muñeco de Nieve',35],['🧌','Troll de Montaña',50],['☄️','Cometa Halley',65],['🌟','Estrella Supernova',55],['🌙','Luna Creciente',45],
  ['☀️','Sol Radiante',60],['🪐','Planeta Saturno',70],['🌌','Galaxia Espiral',80],['🌪️','Tornado Vórtice',55],['🔥','Llama Inmortal',60],
  ['💧','Gota Cristalina',30],['🌊','Ola Tsunami',50],['❄️','Copo de Hielo',40],['🔮','Orbe Adivino',65],['🧿','Amuleto Místico',50]
];

// 40 Comida, Objetos y Deportes
const LISTA_OBJETOS = [
  ['🍔','Hamburguesa Doble',25],['🍕','Pizza Pepperoni',25],['🌮','Taco Picante',25],['🌯','Burrito Supremo',25],['🍣','Sushi Samurai',30],
  ['🍜','Ramen Caliente',30],['🍦','Helado Suave',20],['🍩','Dona Glaseada',20],['🎂','Pastel de Fiesta',35],['🍪','Galleta Chispas',20],
  ['🍫','Barra de Chocolate',25],['🍿','Palomitas de Cine',25],['🍟','Papas Fritas',20],['🌭','Hot Dog Clásico',20],['🥑','Aguacate Feliz',30],
  ['🍉','Sandía Fresca',20],['🍍','Piña Tropical',25],['🍓','Fresa Brillante',20],['🍌','Plátano Dorado',20],['🍎','Manzana Roja',15],
  ['🍒','Cerezas Gemelas',25],['🌶️','Chile de Fuego',30],['☕','Café Espresso',25],['🥤','Soda Neón',20],['⚽','Balón de Fútbol',30],
  ['🏀','Balón de Básquet',30],['🏈','Balón Americano',30],['⚾','Pelota de Béisbol',25],['🎾','Pelota de Tenis',25],['🎱','Bola 8 de Billar',35],
  ['🏆','Trofeo Campeón',75],['🥇','Medalla de Oro',50],['🥊','Guante de Boxeo',40],['🎸','Guitarra Rockera',55],['🎮','Mando Gamer',50],
  ['🎲','Dado de la Suerte',35],['💎','Diamante Puro',90],['💰','Bolsa de Fortuna',85],['⚔️','Espadas Cruzadas',60],['💣','Bomba Explosiva',45]
];

// Unificar los 210 artículos en el catálogo
const CATALOGO_TIENDA = [...MEJORAS_BASE];

function agregarListaAlCatalogo(lista, prefijo, categoria, descripcionBase) {
  lista.forEach((item, index) => {
    CATALOGO_TIENDA.push({
      id: `${prefijo}_${index}`,
      nombre: item[1],
      icono: item[0],
      precio: item[2],
      tipo: 'skin',
      cat: categoria,
      desc: `${descripcionBase} (${item[1]}).`
    });
  });
}

agregarListaAlCatalogo(LISTA_ANIMALES, 'ani', 'animales', 'Juega en el Arcade con este animal');
agregarListaAlCatalogo(LISTA_CARROS, 'car', 'carros', 'Conduce este vehículo a máxima velocidad');
agregarListaAlCatalogo(LISTA_FANTASIA, 'fan', 'fantasia', 'Personaje especial con brillo neón');
agregarListaAlCatalogo(LISTA_OBJETOS, 'obj', 'objetos', 'Objeto divertido para tus partidas');

// --- ESTADO Y LOCALSTORAGE ---
let gemas = parseInt(localStorage.getItem('mi_gemas') || '25', 10);
let inventario = JSON.parse(localStorage.getItem('mi_inventario') || '[]');
let skinEquipada = localStorage.getItem('mi_skin') || '🚀';
let modoNeonActivo = localStorage.getItem('mi_neon') === 'true';
let apodoGuardado = localStorage.getItem('mi_apodo') || '';
let categoriaActualTienda = 'todos';

let ideasGuardadas = JSON.parse(localStorage.getItem('mi_ideas_v2') || 'null');
if (!ideasGuardadas || ideasGuardadas.length === 0) {
  ideasGuardadas = COMENTARIOS_REFERENCIA;
  localStorage.setItem('mi_ideas_v2', JSON.stringify(ideasGuardadas));
}

const contadorGemasEl = document.getElementById('gem-count');
const feedIdeasEl = document.getElementById('ideas-feed');
const inputIdeaEl = document.getElementById('idea-text');
const inputAutorEl = document.getElementById('idea-author');

// --- MODAL DE ANUNCIO (ENTRADA, BONO DE 15 MINUTOS Y COFRE DE 24 HORAS) ---
let tipoRecompensaPendiente = null; // null | 'express15' | 'daily24'

function iniciarTemporizadorModal(segundos = 5, motivo = null) {
  tipoRecompensaPendiente = motivo;
  const modal = document.getElementById('ad-modal-overlay');
  const btnCerrar = document.getElementById('btn-close-ad');
  const tituloModal = document.getElementById('ad-modal-title');

  modal.classList.remove('hidden');
  btnCerrar.disabled = true;

  if (motivo === 'express15') {
    tituloModal.textContent = '⚡ Bono Express (+20 💎)';
  } else if (motivo === 'daily24') {
    tituloModal.textContent = '🎁 Cofre Diario (+10 💎)';
  } else {
    tituloModal.textContent = '⚡ Patrocinador Oficial';
  }

  let restante = segundos;
  btnCerrar.textContent = `Espera ${restante}s...`;

  const intervalo = setInterval(() => {
    restante--;
    if (restante > 0) {
      btnCerrar.textContent = `Espera ${restante}s...`;
    } else {
      clearInterval(intervalo);
      btnCerrar.disabled = false;
      if (tipoRecompensaPendiente === 'express15') {
        btnCerrar.textContent = '✖ Cerrar y Recibir +20 💎';
      } else if (tipoRecompensaPendiente === 'daily24') {
        btnCerrar.textContent = '✖ Cerrar y Recibir +10 💎';
      } else {
        btnCerrar.textContent = '✖ Cerrar Anuncio y Entrar 🚀';
      }
    }
  }, 1000);
}

function cerrarModalAnuncio() {
  const modal = document.getElementById('ad-modal-overlay');
  modal.classList.add('hidden');

  if (tipoRecompensaPendiente === 'express15') {
    tipoRecompensaPendiente = null;
    localStorage.setItem('mi_express_ts', Date.now().toString());
    sumarGemas(20);
    actualizarRelojesRecompensas();
    mostrarToast('⚡ ¡Anuncio completado! Recibiste +20 💎 gratis');
  } else if (tipoRecompensaPendiente === 'daily24') {
    tipoRecompensaPendiente = null;
    localStorage.setItem('mi_daily_ts', Date.now().toString());
    sumarGemas(10);
    actualizarRelojesRecompensas();
    mostrarToast('🎁 ¡Cofre diario reclamado! Recibiste +10 💎');
  }
}

// --- NOTIFICACIONES Y BILLETERA ---
function mostrarToast(mensaje) {
  const cont = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = mensaje;
  cont.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3200);
}

function actualizarBilletera() {
  contadorGemasEl.textContent = gemas;
  localStorage.setItem('mi_gemas', gemas.toString());
  const labelSkin = document.getElementById('current-skin-label');
  if (labelSkin) labelSkin.textContent = skinEquipada;
}

function sumarGemas(cantidad) {
  gemas += cantidad;
  actualizarBilletera();
}

// --- 3 GATOS QUE REBOTAN POR TODA LA PANTALLA ---
const gatosRebotadores = [
  { el: document.getElementById('mascota-1'), x: 80,  y: 120, vx: 3.5,  vy: 2.7 },
  { el: document.getElementById('mascota-2'), x: 350, y: 260, vx: -3.1, vy: 3.3 },
  { el: document.getElementById('mascota-3'), x: 600, y: 180, vx: 2.9,  vy: -3.4 }
];

function alternarModoNeon() {
  modoNeonActivo = !modoNeonActivo;
  localStorage.setItem('mi_neon', modoNeonActivo.toString());
  aplicarModoNeon();
  mostrarToast(modoNeonActivo ? '🐾 ¡3 Gatos Neón liberados en pantalla!' : '🌙 Modo estándar activado');
}

function aplicarModoNeon() {
  if (modoNeonActivo) {
    document.body.classList.add('modo-neon');
    gatosRebotadores.forEach(g => { g.el.style.display = 'flex'; });
  } else {
    document.body.classList.remove('modo-neon');
    gatosRebotadores.forEach(g => { g.el.style.display = 'none'; });
  }
}

function animarTresGatos() {
  if (modoNeonActivo) {
    const maxW = Math.max(120, window.innerWidth - 56);
    const maxH = Math.max(120, window.innerHeight - 56);

    gatosRebotadores.forEach(g => {
      g.x += g.vx;
      g.y += g.vy;

      if (g.x <= 6) { g.x = 6; g.vx = Math.abs(g.vx); }
      else if (g.x >= maxW) { g.x = maxW; g.vx = -Math.abs(g.vx); }

      if (g.y <= 6) { g.y = 6; g.vy = Math.abs(g.vy); }
      else if (g.y >= maxH) { g.y = maxH; g.vy = -Math.abs(g.vy); }

      g.el.style.transform = `translate3d(${g.x}px, ${g.y}px, 0)`;
    });
  }
  requestAnimationFrame(animarTresGatos);
}

// --- SISTEMA DE RECOMPENSAS: CADA 15 MINUTOS (+20 💎) Y CADA 24 HORAS (+10 💎) ---
const TIEMPO_15M = 15 * 60 * 1000;
const TIEMPO_24H = 24 * 60 * 60 * 1000;

function reclamarBono15Min() {
  const ahora = Date.now();
  const ultimoExpress = parseInt(localStorage.getItem('mi_express_ts') || '0', 10);

  if (ahora - ultimoExpress < TIEMPO_15M) {
    mostrarToast('⏳ Aún faltan unos minutos para el siguiente anuncio de +20 💎.');
    return;
  }

  iniciarTemporizadorModal(5, 'express15');
}

function reclamarRecompensaDiaria() {
  const ahora = Date.now();
  const ultimoReclamo = parseInt(localStorage.getItem('mi_daily_ts') || '0', 10);

  if (ahora - ultimoReclamo < TIEMPO_24H) {
    mostrarToast('⏳ Ya reclamaste tu cofre diario. Espera al contador de 24h.');
    return;
  }

  iniciarTemporizadorModal(5, 'daily24');
}

function actualizarRelojesRecompensas() {
  const ahora = Date.now();

  // Reloj Bono 15 Minutos (+20 gemas)
  const btnExpress = document.getElementById('btn-express-reward');
  const ultimoExpress = parseInt(localStorage.getItem('mi_express_ts') || '0', 10);
  const rest15 = TIEMPO_15M - (ahora - ultimoExpress);

  if (rest15 > 0) {
    btnExpress.disabled = true;
    const m = Math.floor(rest15 / (1000 * 60));
    const s = Math.floor((rest15 % (1000 * 60)) / 1000);
    btnExpress.textContent = `⏳ Disponible en ${m}m ${s}s`;
  } else {
    btnExpress.disabled = false;
    btnExpress.textContent = '📺 Ver Anuncio (+20 💎)';
  }

  // Reloj Cofre 24 Horas (+10 gemas)
  const btnDaily = document.getElementById('btn-daily-reward');
  const ultimoDaily = parseInt(localStorage.getItem('mi_daily_ts') || '0', 10);
  const rest24 = TIEMPO_24H - (ahora - ultimoDaily);

  if (rest24 > 0) {
    btnDaily.disabled = true;
    const h = Math.floor(rest24 / (1000 * 60 * 60));
    const m = Math.floor((rest24 % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((rest24 % (1000 * 60)) / 1000);
    btnDaily.textContent = `⏳ Disponible en ${h}h ${m}m ${s}s`;
  } else {
    btnDaily.disabled = false;
    btnDaily.textContent = '🎁 Ver Anuncio (+10 💎)';
  }
}

setInterval(actualizarRelojesRecompensas, 1000);

// --- MURO DE COMENTARIOS CON APODO ---
function guardarYRenderizarIdeas() {
  localStorage.setItem('mi_ideas_v2', JSON.stringify(ideasGuardadas));
  feedIdeasEl.innerHTML = '';

  ideasGuardadas.forEach((item, index) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'post-card' + (item.esVip ? ' vip-post' : '');
    tarjeta.innerHTML = `
      <div class="post-header">
        <div>
          <span class="author-name">👤 ${item.autor || 'Explorador'}</span>
          ${item.esVip ? '<span class="badge-tag badge-vip">👑 REY NEÓN</span>' : ''}
          ${item.esFundador ? '<span class="badge-tag badge-founder">⭐ FUNDADOR</span>' : ''}
        </div>
        <span>${item.fecha}</span>
      </div>
      <p style="font-size: 0.94rem; line-height: 1.45;">${item.texto}</p>
      <button class="btn-like" onclick="darLike(${index})">❤️ ${item.likes || 0}</button>
    `;
    feedIdeasEl.appendChild(tarjeta);
  });
}

function publicarIdea() {
  const apodo = inputAutorEl.value.trim() || 'Jugador_Neón';
  const texto = inputIdeaEl.value.trim();

  if (!texto) {
    mostrarToast('✏️ Escribe un comentario antes de publicar.');
    return;
  }

  localStorage.setItem('mi_apodo', apodo);

  ideasGuardadas.unshift({
    autor: apodo,
    texto: texto,
    fecha: 'Ahora mismo (' + new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) + ')',
    likes: 1,
    esFundador: inventario.includes('badge_founder'),
    esVip: inventario.includes('badge_vip')
  });

  inputIdeaEl.value = '';
  sumarGemas(5);
  guardarYRenderizarIdeas();
  mostrarToast(`🚀 ¡Publicado como ${apodo}! Ganaste +5 💎`);
}

function darLike(i) {
  ideasGuardadas[i].likes = (ideasGuardadas[i].likes || 0) + 1;
  guardarYRenderizarIdeas();
}

// --- TIENDA MEGA BAZAR NEÓN (210 PERSONAJES CON FILTRO Y BUSCADOR) ---
function filtrarTienda(categoria, btnEl) {
  categoriaActualTienda = categoria;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderizarTienda();
}

function renderizarTienda() {
  const cont = document.getElementById('shop-container');
  const busqueda = (document.getElementById('shop-search')?.value || '').toLowerCase().trim();
  cont.innerHTML = '';

  const totalCountEl = document.getElementById('count-all');
  if (totalCountEl) totalCountEl.textContent = CATALOGO_TIENDA.length;

  const listaFiltrada = CATALOGO_TIENDA.filter(item => {
    const coincideCat = categoriaActualTienda === 'todos' || item.cat === categoriaActualTienda;
    const coincideTexto = !busqueda || item.nombre.toLowerCase().includes(busqueda) || item.icono.includes(busqueda);
    return coincideCat && coincideTexto;
  });

  listaFiltrada.forEach(item => {
    const comprado = inventario.includes(item.id);
    const esSkinEquipada = item.tipo === 'skin' && skinEquipada === item.icono;

    let textoBoton = `Comprar (${item.precio} 💎)`;
    let claseBoton = 'btn-shop';

    if (comprado) {
      if (item.tipo === 'skin') {
        textoBoton = esSkinEquipada ? 'Equipado ⭐' : 'Equipar';
        claseBoton = esSkinEquipada ? 'btn-shop equipped' : 'btn-shop owned';
      } else {
        textoBoton = 'Activo ✅';
        claseBoton = 'btn-shop owned';
      }
    }

    const card = document.createElement('div');
    card.className = 'shop-card';
    card.innerHTML = `
      <div class="shop-card-icon">${item.icono}</div>
      <h4>${item.nombre}</h4>
      <p>${item.desc}</p>
      <button class="${claseBoton}" onclick="accionTienda('${item.id}')">${textoBoton}</button>
    `;
    cont.appendChild(card);
  });

  const mejoras = [];
  if (inventario.includes('perk_magnet')) mejoras.push('🧲 Imán');
  if (inventario.includes('perk_shield')) mejoras.push('🛡️ Escudo');
  if (inventario.includes('perk_double')) mejoras.push('⚡ Gemas x2');
  document.getElementById('active-perks-label').textContent = mejoras.length ? 'Activos: ' + mejoras.join(' | ') : 'Sin mejoras activas';
}

function accionTienda(idItem) {
  const item = CATALOGO_TIENDA.find(x => x.id === idItem);
  if (!item) return;

  if (inventario.includes(idItem)) {
    if (item.tipo === 'skin') {
      skinEquipada = (skinEquipada === item.icono) ? '🚀' : item.icono;
      localStorage.setItem('mi_skin', skinEquipada);
      actualizarBilletera();
      renderizarTienda();
      mostrarToast(`✨ Personaje cambiado a ${skinEquipada}`);
    }
    return;
  }

  if (gemas >= item.precio) {
    gemas -= item.precio;
    inventario.push(idItem);
    localStorage.setItem('mi_inventario', JSON.stringify(inventario));

    if (item.tipo === 'skin') {
      skinEquipada = item.icono;
      localStorage.setItem('mi_skin', skinEquipada);
    }

    actualizarBilletera();
    renderizarTienda();
    guardarYRenderizarIdeas();
    mostrarToast(`🎉 ¡Compraste ${item.nombre} ${item.icono}!`);
  } else {
    mostrarToast(`💎 Te faltan ${item.precio - gemas} gemas. ¡Usa el Bono de 15 min o juega!`);
  }
}

// --- ZONA ARCADE CON BRILLO NEÓN, MOUSE Y GATO SALTARÍN ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let juegoSeleccionado = 1;
let juegoActivo = false;
let puntuacion = 0;
let escudoDisponible = false;
let teclas = {};

// Juego 1: Cohete / Personaje con soporte de Mouse
let nave = { x: 250, y: 255, width: 38, height: 32, speed: 7 };
let objetosCaida = [];

// Juego 2: Gato Saltarín (o personaje equipado) con rastro de luz
let gatoRunner = { x: 75, y: 230, vy: 0, gravedad: 0.62, saltosRestantes: 2, sueloY: 230 };
let estelaGato = [];
let obstaculosRunner = [];
let gemasRunner = [];
let frameRunner = 0;

function obtenerRecordActual() {
  const clave = juegoSeleccionado === 1 ? 'mi_record_g1' : 'mi_record_g2';
  return parseInt(localStorage.getItem(clave) || '0', 10);
}

function guardarRecordActual(nuevo) {
  const clave = juegoSeleccionado === 1 ? 'mi_record_g1' : 'mi_record_g2';
  localStorage.setItem(clave, nuevo.toString());
  document.getElementById('high-score-val').textContent = nuevo;
}

function cambiarJuego(num) {
  juegoSeleccionado = num;
  juegoActivo = false;
  puntuacion = 0;
  document.getElementById('score-val').textContent = '0';
  document.getElementById('high-score-val').textContent = obtenerRecordActual();

  document.getElementById('tab-game-1').classList.toggle('active', num === 1);
  document.getElementById('tab-game-2').classList.toggle('active', num === 2);
  document.getElementById('controls-game-1').style.display = num === 1 ? 'flex' : 'none';
  document.getElementById('controls-game-2').style.display = num === 2 ? 'flex' : 'none';

  const inst = document.getElementById('game-instructions');
  if (num === 1) {
    inst.innerHTML = 'Mueve tu personaje con el <strong>MOUSE</strong> (o flechas ◀ ▶) para atrapar gemas brillantes (+1 💎) y estrellas (+3 💎).';
  } else {
    inst.innerHTML = '¡Salta con el <strong>Gato Neón 🐱</strong> (o tu personaje equipado)! Presiona <strong>ESPACIO</strong> o haz clic en el juego para hacer Salto y Doble Salto.';
  }
}

function iniciarOReiniciarJuego() {
  puntuacion = 0;
  escudoDisponible = inventario.includes('perk_shield');
  document.getElementById('score-val').textContent = '0';
  document.getElementById('shield-status').textContent = escudoDisponible ? 'Activo 🛡️' : 'No';

  if (juegoSeleccionado === 1) {
    objetosCaida = [];
    nave.x = canvas.width / 2 - 18;
  } else {
    obstaculosRunner = [];
    gemasRunner = [];
    estelaGato = [];
    gatoRunner.y = gatoRunner.sueloY;
    gatoRunner.vy = 0;
    gatoRunner.saltosRestantes = 2;
    frameRunner = 0;
  }
  juegoActivo = true;
}

function saltarRunner() {
  if (!juegoActivo && juegoSeleccionado === 2) {
    iniciarOReiniciarJuego();
    return;
  }
  if (juegoSeleccionado === 2 && gatoRunner.saltosRestantes > 0) {
    gatoRunner.vy = -11.5;
    gatoRunner.saltosRestantes--;
  }
}

// Control con el Mouse en el Juego 1
canvas.addEventListener('mousemove', e => {
  if (juegoSeleccionado === 1 && juegoActivo) {
    const rect = canvas.getBoundingClientRect();
    const escalaX = canvas.width / rect.width;
    const mouseX = (e.clientX - rect.left) * escalaX;
    nave.x = Math.max(8, Math.min(canvas.width - 42, mouseX - 18));
  }
});

canvas.addEventListener('pointerdown', () => {
  if (juegoSeleccionado === 2) saltarRunner();
  else if (!juegoActivo) iniciarOReiniciarJuego();
});

window.addEventListener('keydown', e => {
  teclas[e.key] = true;
  if ((e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') && juegoSeleccionado === 2) {
    e.preventDefault();
    saltarRunner();
  }
});
window.addEventListener('keyup', e => { teclas[e.key] = false; });

const bL = document.getElementById('btn-left');
const bR = document.getElementById('btn-right');
bL.addEventListener('pointerdown', e => { e.preventDefault(); teclas['ArrowLeft'] = true; });
bL.addEventListener('pointerup', () => { teclas['ArrowLeft'] = false; });
bL.addEventListener('pointerleave', () => { teclas['ArrowLeft'] = false; });
bR.addEventListener('pointerdown', e => { e.preventDefault(); teclas['ArrowRight'] = true; });
bR.addEventListener('pointerup', () => { teclas['ArrowRight'] = false; });
bR.addEventListener('pointerleave', () => { teclas['ArrowRight'] = false; });

function otorgarGemasArcade(base) {
  const mult = inventario.includes('perk_double') ? 2 : 1;
  const total = base * mult;
  puntuacion += total;
  sumarGemas(total);
  document.getElementById('score-val').textContent = puntuacion;
}

function finalizarPartida() {
  juegoActivo = false;
  const rec = obtenerRecordActual();
  if (puntuacion > rec) {
    guardarRecordActual(puntuacion);
    mostrarToast(`🏆 ¡Nuevo Récord! Ganaste +${puntuacion} 💎`);
  } else {
    mostrarToast(`🎮 Partida finalizada. Sumaste +${puntuacion} 💎`);
  }
}

// --- BUCLE DE RENDERIZADO CON BRILLO NEÓN (SHADOW GLOW) ---
function bucleArcade() {
  ctx.fillStyle = '#04060c';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Rejilla espacial brillante de fondo
  ctx.strokeStyle = 'rgba(0, 242, 254, 0.06)';
  ctx.lineWidth = 1;
  for (let gx = 0; gx < canvas.width; gx += 45) {
    ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, canvas.height); ctx.stroke();
  }
  for (let gy = 0; gy < canvas.height; gy += 45) {
    ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(canvas.width, gy); ctx.stroke();
  }

  if (!juegoActivo) {
    ctx.save();
    ctx.shadowBlur = 18;
    ctx.shadowColor = '#00f2fe';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 19px Poppins, sans-serif';
    ctx.textAlign = 'center';
    const titulo = juegoSeleccionado === 1 ? '🚀 Lluvia Cósmica (Control con Mouse)' : '🐱 Gato Salto Neón (Runner)';
    ctx.fillText(titulo, canvas.width / 2, canvas.height / 2 - 14);

    ctx.fillStyle = '#00ffcc';
    ctx.font = '14px Poppins, sans-serif';
    ctx.fillText('Haz clic aquí o presiona "Jugar / Reiniciar" para empezar', canvas.width / 2, canvas.height / 2 + 18);
    ctx.restore();

    requestAnimationFrame(bucleArcade);
    return;
  }

  const tieneIman = inventario.includes('perk_magnet');

  // ================= JUEGO 1: LLUVIA CÓSMICA (MOUSE + TECLADO) =================
  if (juegoSeleccionado === 1) {
    if ((teclas['ArrowLeft'] || teclas['a'] || teclas['A']) && nave.x > 8) nave.x -= nave.speed;
    if ((teclas['ArrowRight'] || teclas['d'] || teclas['D']) && nave.x < canvas.width - 42) nave.x += nave.speed;

    if (Math.random() < 0.05) {
      const rand = Math.random();
      let tipo = 'gema';
      if (rand < 0.34) tipo = 'mina';
      else if (rand > 0.86) tipo = 'estrella';

      objetosCaida.push({
        x: Math.random() * (canvas.width - 34) + 12,
        y: -20,
        tipo: tipo,
        speed: 2.5 + Math.random() * 2.4
      });
    }

    for (let i = objetosCaida.length - 1; i >= 0; i--) {
      let obj = objetosCaida[i];
      obj.y += obj.speed;

      if (tieneIman && obj.tipo !== 'mina') {
        const dx = (nave.x + 15) - obj.x;
        const dy = (nave.y + 15) - obj.y;
        if (Math.hypot(dx, dy) < 130) obj.x += dx * 0.07;
      }

      ctx.save();
      ctx.font = '21px sans-serif';
      ctx.shadowBlur = 16;
      ctx.shadowColor = obj.tipo === 'mina' ? '#ef4444' : (obj.tipo === 'estrella' ? '#f59e0b' : '#00f2fe');
      const icono = obj.tipo === 'mina' ? '💣' : (obj.tipo === 'estrella' ? '🌟' : '💎');
      ctx.fillText(icono, obj.x, obj.y);
      ctx.restore();

      if (Math.abs(obj.x - (nave.x + 8)) < 27 && Math.abs(obj.y - (nave.y + 16)) < 27) {
        if (obj.tipo === 'mina') {
          if (escudoDisponible) {
            escudoDisponible = false;
            document.getElementById('shield-status').textContent = 'Usado 💥';
            objetosCaida.splice(i, 1);
            mostrarToast('🛡️ ¡El escudo absorbió la explosión!');
          } else {
            finalizarPartida();
            break;
          }
        } else {
          otorgarGemasArcade(obj.tipo === 'estrella' ? 3 : 1);
          objetosCaida.splice(i, 1);
        }
        continue;
      }
      if (obj.y > canvas.height + 25) objetosCaida.splice(i, 1);
    }

    // Dibujar Cohete / Personaje con Brillo Neón
    ctx.save();
    ctx.shadowBlur = 22;
    ctx.shadowColor = '#00f2fe';
    if (escudoDisponible) {
      ctx.strokeStyle = '#00ffcc';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(nave.x + 16, nave.y + 12, 24, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.font = '29px sans-serif';
    ctx.fillText(skinEquipada, nave.x, nave.y + 22);
    ctx.restore();
  }

  // ================= JUEGO 2: GATO SALTO NEÓN (RUNNER) =================
  else if (juegoSeleccionado === 2) {
    frameRunner++;

    // Suelo láser con resplandor
    ctx.save();
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#ff007f';
    ctx.strokeStyle = '#ff007f';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, gatoRunner.sueloY + 28);
    ctx.lineTo(canvas.width, gatoRunner.sueloY + 28);
    ctx.stroke();
    ctx.restore();

    // Física del Gato
    gatoRunner.y += gatoRunner.vy;
    gatoRunner.vy += gatoRunner.gravedad;

    if (gatoRunner.y >= gatoRunner.sueloY) {
      gatoRunner.y = gatoRunner.sueloY;
      gatoRunner.vy = 0;
      gatoRunner.saltosRestantes = 2;
    }

    // Estela neón detrás del Gato
    estelaGato.push({ x: gatoRunner.x, y: gatoRunner.y + 14, alpha: 0.7 });
    if (estelaGato.length > 8) estelaGato.shift();

    estelaGato.forEach(p => {
      p.x -= 4;
      p.alpha -= 0.08;
      if (p.alpha > 0) {
        ctx.fillStyle = `rgba(0, 242, 254, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x + 10, p.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (frameRunner % 72 === 0) {
      obstaculosRunner.push({
        x: canvas.width + 10,
        y: gatoRunner.sueloY,
        width: 16,
        height: 28,
        speed: 5 + Math.min(3.5, puntuacion * 0.05)
      });
    }

    if (frameRunner % 52 === 0) {
      gemasRunner.push({
        x: canvas.width + 10,
        y: gatoRunner.sueloY - (Math.random() > 0.4 ? 60 : 12),
        esEstrella: Math.random() > 0.8,
        speed: 4.7
      });
    }

    for (let i = gemasRunner.length - 1; i >= 0; i--) {
      let g = gemasRunner[i];
      g.x -= g.speed;

      if (tieneIman && Math.hypot(gatoRunner.x - g.x, gatoRunner.y - g.y) < 120) {
        g.x += (gatoRunner.x - g.x) * 0.09;
        g.y += (gatoRunner.y - g.y) * 0.09;
      }

      ctx.save();
      ctx.shadowBlur = 15;
      ctx.shadowColor = g.esEstrella ? '#f59e0b' : '#00f2fe';
      ctx.font = '20px sans-serif';
      ctx.fillText(g.esEstrella ? '🌟' : '💎', g.x, g.y + 18);
      ctx.restore();

      if (Math.abs(g.x - gatoRunner.x) < 27 && Math.abs(g.y - gatoRunner.y) < 27) {
        otorgarGemasArcade(g.esEstrella ? 3 : 1);
        gemasRunner.splice(i, 1);
        continue;
      }
      if (g.x < -30) gemasRunner.splice(i, 1);
    }

    for (let i = obstaculosRunner.length - 1; i >= 0; i--) {
      let obs = obstaculosRunner[i];
      obs.x -= obs.speed;

      ctx.save();
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#ef4444';
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      ctx.strokeStyle = '#ffffff';
      ctx.strokeRect(obs.x, obs.y, obs.width, obs.height);
      ctx.restore();

      if (gatoRunner.x + 24 > obs.x && gatoRunner.x < obs.x + obs.width && gatoRunner.y + 24 > obs.y) {
        if (escudoDisponible) {
          escudoDisponible = false;
          document.getElementById('shield-status').textContent = 'Usado 💥';
          obstaculosRunner.splice(i, 1);
          mostrarToast('🛡️ ¡Escudo activado contra el láser!');
        } else {
          finalizarPartida();
          break;
        }
      }
      if (obs.x < -30) obstaculosRunner.splice(i, 1);
    }

    // Por defecto salta el Gato (🐱), o el personaje que equipes en la tienda
    const iconoSaltarin = skinEquipada === '🚀' ? '🐱' : skinEquipada;
    ctx.save();
    ctx.shadowBlur = 24;
    ctx.shadowColor = '#00ffcc';
    if (escudoDisponible) {
      ctx.strokeStyle = '#00ffcc';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(gatoRunner.x + 15, gatoRunner.y + 12, 24, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.font = '30px sans-serif';
    ctx.fillText(iconoSaltarin, gatoRunner.x, gatoRunner.y + 23);
    ctx.restore();
  }

  requestAnimationFrame(bucleArcade);
}

// --- INICIALIZACIÓN AL CARGAR ---
window.onload = function() {
  if (apodoGuardado) inputAutorEl.value = apodoGuardado;
  actualizarBilletera();
  aplicarModoNeon();
  guardarYRenderizarIdeas();
  renderizarTienda();
  actualizarRelojesRecompensas();
  document.getElementById('high-score-val').textContent = obtenerRecordActual();
  iniciarTemporizadorModal(5, null);
  animarTresGatos();
  bucleArcade();
};