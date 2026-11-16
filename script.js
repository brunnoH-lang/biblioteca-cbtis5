const libros = [
    { 
        id: 1, 
        titulo: "Curso de Transformadores y Motores Trifásicos", 
        autor: "Gilberto Enríquez Harper", 
        estante: "Estante 2", 
        categoria: "Electromecánica", 
        img: "https://libroweb.alfaomega.com.mx/images/cover3d/9786077686415.png",
        texto: "CAPÍTULO 1: Transformadores y Motores Trifásicos en Sistemas Industriales.\n\nLos transformadores trifásicos permiten elevar o reducir niveles de tensión en redes de distribución mediante inducción electromagnética, operando bajo configuraciones Delta (Δ) y Estrella (Y).\n\nEn la segunda sección se estudia el motor de inducción trifásico: constitución del estator y rotor de jaula de ardilla, generación del campo magnético giratorio, cálculo de deslizamiento, curvas par-velocidad y métodos de arranque a tensión reducida."
    },
    { 
        id: 2, 
        titulo: "Curso Integral de Dibujo Técnico", 
        autor: "Gilberto Enríquez Harper", 
        estante: "Estante 2", 
        categoria: "Electromecánica", 
        img: "https://tse3.mm.bing.net/th/id/OIP.mfews3y13KfG-u4PACR-bwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "UNIDAD 2: Normalización, Escalas y Proyecciones Ortogonales.\n\nEl dibujo técnico es el lenguaje gráfico normalizado para representar piezas mecánicas, ensambles e instalaciones industriales con exactitud geométrica.\n\nEste curso abarca el uso de instrumentos de trazo, alfabeto de líneas, acotación bajo normas ISO y ANSI, vistas auxiliares, cortes y secciones, así como la representación en perspectiva isométrica y proyecciones diédricas."
    },
    { 
        id: 3, 
        titulo: "Manual de Comunicación Oral", 
        autor: "Autores Varios", 
        estante: "Estante 3", 
        categoria: "Español / Comunicación", 
        img: "https://http2.mlstatic.com/D_NQ_NP_722619-MLM82367581774_022025-O.webp",
        texto: "MÓDULO I: Técnicas de Expresión Oral, Dicción y Oratoria.\n\nLa comunicación oral eficaz requiere coherencia en el discurso, claridad vocal y dominio del lenguaje no verbal frente a una audiencia.\n\nEn este manual se desarrollan ejercicios de respiración, proyección de voz, control del miedo escénico, estructuración de exposiciones académicas y estrategias para participar en debates y mesas redondas."
    },
    { 
        id: 4, 
        titulo: "Desarrollo Web con HTML5 y CSS", 
        autor: "Especialidad en Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://http2.mlstatic.com/D_NQ_NP_732751-MPE87039114408_072025-O.webp",
        texto: "LECCIÓN 3: Maquetación Semántica con HTML5 y Hojas de Estilo CSS3.\n\nHTML5 define la estructura de las páginas web mediante etiquetas semánticas como <header>, <nav>, <main>, <article> y <footer>, optimizando la accesibilidad y el posicionamiento.\n\nCon CSS3 se aplica el modelo de caja (Box Model), selectores avanzados, sistemas de distribución flexible con Flexbox y CSS Grid, además de Media Queries para lograr sitios web responsivos."
    },
    { 
        id: 5, 
        titulo: "Compendio Fiscal para Estudiantes", 
        autor: "Ediciones Académicas", 
        estante: "Estante 1", 
        categoria: "Contabilidad", 
        img: "https://th.bing.com/th/id/R.398dcd2825bd5278366837550df8a57d?rik=COFffS3j9gZsaQ&riu=http%3a%2f%2fwww.librerialeon.com.mx%2fimagenes%2f9786079%2f978607998438.GIF&ehk=n%2f7MgVoTtAu%2bwFteoY5K7yzPQQDKqCsjb8FXOTTWL%2fY%3d&risl=&pid=ImgRaw&r=0",
        texto: "SECCIÓN A: Legislación Tributaria, ISR e IVA en México.\n\nEste compendio reúne los fundamentos del Código Fiscal de la Federación y las leyes tributarias vigentes aplicables a personas físicas y morales.\n\nIncluye casos prácticos sobre el cálculo del Impuesto Sobre la Renta (ISR), determinación del Impuesto al Valor Agregado (IVA), emisión de Comprobantes Fiscales Digitales por Internet (CFDI) y cumplimiento de declaraciones periódicas."
    },
    { 
        id: 6, 
        titulo: "Probabilidad y Estadística Aplicada", 
        autor: "Academia de Matemáticas", 
        estante: "Estante 5", 
        categoria: "Matemáticas", 
        img: "https://hachettelivre.mx/wp-content/uploads/2023/07/9786074387667.jpeg",
        texto: "CAPÍTULO 4: Estadística Descriptiva y Distribuciones de Probabilidad.\n\nLa estadística permite recopilar, organizar y analizar conjuntos de datos mediante tablas de frecuencia, histogramas, medidas de tendencia central (media, mediana, moda) y dispersión (varianza y desviación estándar).\n\nEn el bloque de probabilidad se estudian técnicas de conteo, probabilidad condicional, teorema de Bayes y las distribuciones Binomial, de Poisson y Normal."
    },
    { 
        id: 7, 
        titulo: "Manual de Prácticas de Química II", 
        autor: "Área Laboratorista Químico", 
        estante: "Estante 3", 
        categoria: "Laboratorista Químico", 
        img: "https://tse2.mm.bing.net/th/id/OIP._HOMudiIrv5tixqAePoC0gHaJl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "PRÁCTICA No. 5: Preparación de Soluciones, Estequiometría y Titulación Ácido-Base.\n\nObjetivo: Preparar soluciones valoradas expresadas en molaridad y normalidad, y determinar la concentración desconocida de un ácido mediante titulación volumétrica con hidróxido de sodio (NaOH) usando fenolftaleína como indicador.\n\nNormas de laboratorio: Uso obligatorio de bata blanca de algodón, lentes de seguridad, guantes de nitrilo y manejo correcto de residuos químicos."
    },
    { 
        id: 8, 
        titulo: "Ecología y Sustentabilidad Ambiental", 
        autor: "C.P.T. Ecología", 
        estante: "Estante 2", 
        categoria: "C.P.T. Ecología", 
        img: "https://tse1.mm.bing.net/th/id/OIP.2mIb9lXjRG0wTP2xm0oSlgHaJj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "UNIDAD 3: Ecosistemas, Ciclos Biogeoquímicos y Desarrollo Sustentable.\n\nLa ecología analiza la relación entre los factores bióticos y abióticos dentro de los ecosistemas, el flujo de energía en las cadenas tróficas y los ciclos del carbono, nitrógeno y agua.\n\nSe abordan también el impacto ambiental de las actividades humanas, la conservación de la biodiversidad, el uso de energías limpias y las estrategias de sustentabilidad."
    },
    { 
        id: 9, 
        titulo: "Fundamentos de Base de Datos con MySQL", 
        autor: "Academia de Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://tse1.mm.bing.net/th/id/OIP.5CYvIE-0TCNe4wGZmuiFVQHaJk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "MÓDULO II: Diseño Relacional y Consultas SQL en MySQL.\n\nUn sistema gestor de bases de datos relacionales organiza la información en tablas vinculadas mediante llaves primarias y foráneas.\n\nEste manual guía desde el modelado Entidad-Relación y la normalización (1FN, 2FN, 3FN) hasta la creación de bases de datos en MySQL y el dominio de sentencias DDL y DML: CREATE, SELECT, INSERT, UPDATE, DELETE y JOIN."
    },
    { 
        id: 10, 
        titulo: "Circuitos Lógicos y Electrónica Digital", 
        autor: "Ing. Roberto M. Garza", 
        estante: "Estante 2", 
        categoria: "Electromecánica", 
        img: "https://tse2.mm.bing.net/th/id/OIP.vfJs9__CDOxRueyjP65a9AHaKl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "CAPÍTULO 3: Sistemas Numéricos, Compuertas Lógicas y Álgebra de Boole.\n\nLa electrónica digital opera mediante señales discretas binarias (0 y 1). Se estudian las conversiones entre sistemas binario, octal, decimal y hexadecimal.\n\nIncluye el diseño y análisis de circuitos combinacionales con compuertas AND, OR, NOT, NAND y XOR, simplificación mediante mapas de Karnaugh, multiplexores, decodificadores y flip-flops."
    },
    { 
        id: 11, 
        titulo: "Contabilidad de Sociedades Mercantiles", 
        autor: "Lic. Carmen Solís", 
        estante: "Estante 1", 
        categoria: "Contabilidad", 
        img: "https://th.bing.com/th/id/OIP.O6pPxVwhCFdaljVuwYrOXwHaJW?w=200&h=252&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "UNIDAD 1: Constitución, Capital Social y Estados Financieros de Sociedades.\n\nEstudio del marco legal bajo la Ley General de Sociedades Mercantiles y el registro contable de Sociedades Anónimas (S.A.) y de Responsabilidad Limitada (S. de R.L.).\n\nDesarrolla asientos de apertura, exhibición de acciones, aumento y disminución de capital, constitución de reservas legales, reparto de dividendos y procesos de fusión o liquidación."
    },
    { 
        id: 12, 
        titulo: "Análisis Instrumental y Cromatografía", 
        autor: "Laboratorio de Investigación Química", 
        estante: "Estante 3", 
        categoria: "Laboratorista Químico", 
        img: "https://th.bing.com/th/id/OIP.71PxaFNbs91MGnZOieV8dwHaJ3?w=200&h=267&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "SECCIÓN C: Espectrofotometría y Métodos Cromatográficos de Separación.\n\nEl análisis instrumental emplea propiedades físico-químicas para identificar y cuantificar analitos en concentraciones traza.\n\nCubre la ley de Beer-Lambert en espectrofotometría UV-Visible, absorción atómica, potenciometría y los principios de la cromatografía en capa fina, cromatografía de gases (GC) y cromatografía líquida de alta eficacia (HPLC)."
    },
    { 
        id: 13, 
        titulo: "Cálculo Diferencial e Integral", 
        autor: "Academia de Matemáticas", 
        estante: "Estante 5", 
        categoria: "Matemáticas", 
        img: "https://th.bing.com/th/id/OIP.fmEix-GviJON6k9rh5WWeQHaLe?w=200&h=311&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "UNIDAD 1: Límites, Derivadas e Integrales Definidas e Indefinidas.\n\nEn la primera parte se analizan funciones, límites, continuidad y reglas de derivación aplicadas al cálculo de máximos, mínimos y razones de cambio.\n\nLa segunda parte aborda la antiderivada, métodos de integración (por sustitución y por partes) y el Teorema Fundamental del Cálculo para determinar áreas bajo la curva y volúmenes de sólidos."
    },
    { 
        id: 14, 
        titulo: "Física General y Mecánica Clásica", 
        autor: "Ing. Carlos Mendoza", 
        estante: "Estante 5", 
        categoria: "Matemáticas", 
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1572209864i/48593361.jpg",
        texto: "CAPÍTULO 2: Cinemática, Leyes de Newton y Conservación de la Energía.\n\nEstudio de las magnitudes vectoriales, movimiento rectilíneo uniformemente acelerado (MRUA), tiro parabólico y movimiento circular.\n\nDesarrolla las tres leyes del movimiento de Newton, diagramas de cuerpo libre, fricción, trabajo mecánico, potencia, energía cinética y potencial, así como principios básicos de hidrostática."
    },
    { 
        id: 15, 
        titulo: "Programación Orientada a Objetos en Java", 
        autor: "Especialidad en Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://edicionesdelau.com/wp-content/uploads/2023/01/ProgamOrientadaObjetosJava-scaled.jpg",
        texto: "MÓDULO 3: Clases, Objetos, Encapsulamiento, Herencia y Polimorfismo en Java.\n\nLa Programación Orientada a Objetos (POO) estructura el software modelando entidades del mundo real mediante atributos y métodos.\n\nEn este libro se implementan en lenguaje Java constructores, modificadores de acceso, sobrecarga de métodos, clases abstractas, interfaces, colecciones (ArrayList) y manejo de excepciones con try-catch."
    },
    { 
        id: 16, 
        titulo: "Introducción a la Algoritmia con Python", 
        autor: "Academia de Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://th.bing.com/th/id/OIP.fabe0x_X0sX6ShbAHtmUvgAAAA?w=200&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "CAPÍTULO 1: Lógica de Programación, Estructuras de Control y Funciones en Python.\n\nUn algoritmo es una secuencia finita y ordenada de pasos lógicos para resolver un problema, representable mediante pseudocódigo y diagramas de flujo.\n\nUtilizando Python, se practican tipos de datos, operadores lógicos, condicionales (if, elif, else), ciclos repetitivos (for, while), listas, diccionarios y programación modular mediante funciones."
    },
    { 
        id: 17, 
        titulo: "Mantenimiento Industrial y Oleohidráulica", 
        autor: "Gilberto Enríquez Harper", 
        estante: "Estante 2", 
        categoria: "Electromecánica", 
        img: "https://images.librotea.com/uploads/media/2018/09/13/mantenimiento-industrial.jpeg",
        texto: "UNIDAD 4: Planes de Mantenimiento y Sistemas Oleohidráulicos de Potencia.\n\nAborda la gestión del mantenimiento preventivo, predictivo y correctivo para reducir paros no programados en maquinaria industrial.\n\nEn el área de oleohidráulica se estudia el principio de Pascal, bombas hidráulicas de engranes y pistones, válvulas direccionales y limitadoras de presión, cilindros actuadores y lectura de simbología ISO 1219."
    },
    { 
        id: 18, 
        titulo: "Química Orgánica y Estructura Molecular", 
        autor: "Laboratorio de Investigación Química", 
        estante: "Estante 3", 
        categoria: "Laboratorista Químico", 
        img: "https://http2.mlstatic.com/D_NQ_NP_686080-MLM49765347390_042022-O-quimica-organica-3ed-estructura-y-funciones.webp",
        texto: "SECCIÓN A: Hibridación del Carbono, Hidrocarburos y Grupos Funcionales.\n\nLa química orgánica estudia los compuestos basados en el átomo de carbono, su tetravalencia, hibridación (sp3, sp2, sp) e isomería estructural y espacial.\n\nSe detallan la nomenclatura IUPAC, propiedades físicas y reacciones características de alcanos, alquenos, alquinos, compuestos aromáticos, alcoholes, aldehídos, cetonas y ácidos carboxílicos."
    },
    { 
        id: 19, 
        titulo: "Redes de Computadoras y Cableado Estructurado", 
        autor: "Especialidad en Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://imgv2-1-f.scribdassets.com/img/document/712513133/original/893ea698b7/1?v=1",
        texto: "MÓDULO I: Arquitecturas de Red, Direccionamiento IP y Normas de Cableado.\n\nComprende las topologías de red LAN/WAN, las capas de los modelos OSI y TCP/IP, el subneteo en IPv4 y la configuración básica de switches y routers.\n\nEn la práctica física se desarrolla la instalación de cableado estructurado bajo estándares ANSI/TIA-568, armado de cables directos y cruzados (normas T568A y T568B) y certificación de nodos."
    },
    { 
        id: 20, 
        titulo: "Gestión Administrativa y Financiera", 
        autor: "Lic. Carmen Solís", 
        estante: "Estante 1", 
        categoria: "Contabilidad", 
        img: "https://th.bing.com/th/id/OIP.GDb5_F4IGQUR3smGLPNWLQAAAA?w=200&h=300&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "CAPÍTULO 2: Proceso Administrativo, Presupuestos y Análisis Financiero.\n\nIntegra las cuatro etapas del proceso administrativo (planeación, organización, dirección y control) aplicadas a la operación eficiente de una empresa.\n\nEn el ámbito financiero abarca la elaboración de presupuestos maestros, flujo de efectivo, cálculo del punto de equilibrio, razones financieras de liquidez y rentabilidad, y evaluación de proyectos."
    },
    { 
        id: 21, 
        titulo: "Historia de la Filosofía y Ética Contemporánea", 
        autor: "Dr. Fernando Morales", 
        estante: "Estante 4", 
        categoria: "Filosofía y Ética", 
        img: "https://tse3.mm.bing.net/th/id/OIP.EsvPJvzncO8sEGUleMeVegHaJZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "CAPÍTULO 1: Evolución del Pensamiento Filosófico y Dilemas Éticos Actuales.\n\nRecorrido histórico desde los filósofos presocráticos, Sócrates, Platón y Aristóteles, pasando por el racionalismo y empirismo moderno, hasta las corrientes contemporáneas.\n\nEn el apartado de ética se examinan la libertad, la responsabilidad moral, los derechos humanos, la bioética y los desafíos éticos frente al avance tecnológico."
    },
    { 
        id: 22, 
        titulo: "Sociología y Estructura Social", 
        autor: "Lic. Marcela Ramírez G.", 
        estante: "Estante 4", 
        categoria: "Ciencias Sociales", 
        img: "https://http2.mlstatic.com/D_NQ_NP_684486-MLA42406430880_062020-O.webp",
        texto: "UNIDAD 2: Teorías Sociológicas, Estratificación e Instituciones Sociales.\n\nIntroduce los fundamentos de la sociología clásica y contemporánea (Comte, Durkheim, Marx y Weber) para interpretar el comportamiento colectivo.\n\nAnaliza el proceso de socialización, el rol de la familia, la educación y el Estado, las clases sociales, la movilidad social y las causas de los fenómenos de cambio y conflicto social."
    },
    { 
        id: 23, 
        titulo: "Introducción a la Lógica y Argumentación", 
        autor: "Academia de Humanidades", 
        estante: "Estante 4", 
        categoria: "Filosofía y Ética", 
        img: "https://http2.mlstatic.com/D_NQ_NP_750221-MLM49077990443_022022-O.webp",
        texto: "MÓDULO 1: Estructura del Razonamiento, Silogismos y Detección de Falacias.\n\nLa lógica estudia los principios que distinguen el razonamiento correcto del incorrecto mediante el análisis de premisas y conclusiones.\n\nEste texto desarrolla la lógica proposicional, tablas de verdad, reglas de inferencia, silogismos categóricos y la identificación de falacias formales e informales en debates y textos argumentativos."
    },
    { 
        id: 24, 
        titulo: "Estructura Socioeconómica y Política de México", 
        autor: "Departamento de Ciencias Sociales", 
        estante: "Estante 4", 
        categoria: "Ciencias Sociales", 
        img: "https://tse2.mm.bing.net/th/id/OIP.Lnc5Ajr4ndxCCAbjm3KlrwHaKS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "UNIDAD 3: Modelos de Desarrollo Económico y Sistema Político Mexicano.\n\nExamina la transición económica de México desde el modelo de Sustitución de Importaciones y el Desarrollo Estabilizador hasta la apertura comercial y el modelo neoliberal.\n\nAnaliza indicadores macroeconómicos (PIB, inflación, empleo), la estructura del Estado mexicano, la división de poderes, el sistema electoral y los retos actuales de desigualdad y desarrollo regional."
    }
];

let prestamos = JSON.parse(localStorage.getItem('libros_cbtis5')) || [];

const productsGrid = document.getElementById('products-grid');
const categoryTitle = document.getElementById('category-title');
const productCount = document.getElementById('product-count');
const navLinks = document.querySelectorAll('.nav-link');
const inputBuscar = document.getElementById('input-buscar');

const btnCartToggle = document.getElementById('btn-cart-toggle');
const cartDropdown = document.getElementById('cart-dropdown');
const btnCloseCart = document.getElementById('btn-close-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotalQty = document.getElementById('cart-total-qty');
const btnCheckout = document.getElementById('btn-checkout');
const btnClearCart = document.getElementById('btn-clear-cart');

const modalReader = document.getElementById('modal-reader');
const modalTitle = document.getElementById('modal-title');
const modalAuthor = document.getElementById('modal-author');
const modalShelf = document.getElementById('modal-shelf');
const modalText = document.getElementById('modal-text');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnFooterClose = document.getElementById('btn-footer-close');

document.addEventListener('DOMContentLoaded', () => {
    renderLibros(libros);
    updateCartUI();
    setupEventListeners();
});

function setupEventListeners() {
    btnCartToggle.addEventListener('click', () => cartDropdown.classList.toggle('active'));
    btnCloseCart.addEventListener('click', () => cartDropdown.classList.remove('active'));

    btnCloseModal.addEventListener('click', cerrarLectura);
    btnFooterClose.addEventListener('click', cerrarLectura);
    modalReader.addEventListener('click', (e) => {
        if (e.target === modalReader) cerrarLectura();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            const estante = link.getAttribute('data-shelf');
            filtrarPorEstante(estante);
        });
    });

    inputBuscar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtrados = libros.filter(l => 
            l.titulo.toLowerCase().includes(query) || 
            l.autor.toLowerCase().includes(query) ||
            l.categoria.toLowerCase().includes(query) ||
            l.estante.toLowerCase().includes(query)
        );
        categoryTitle.textContent = query ? `Resultados para "${query}"` : 'Acervo de Libros';
        renderLibros(filtrados);
    });

    btnClearCart.addEventListener('click', () => {
        prestamos = [];
        saveAndUpdateCart();
    });

    btnCheckout.addEventListener('click', procesarPrestamoWhatsApp);
}

function renderLibros(lista) {
    productsGrid.innerHTML = '';
    productCount.textContent = `${lista.length} libro(s) disponibles en el catálogo`;

    if (lista.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #777; padding: 40px;">No se encontraron libros que coincidan con la búsqueda.</p>`;
        return;
    }

    lista.forEach(libro => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${libro.img}" alt="${libro.titulo}" class="product-img">
            <div class="product-info">
                <span class="product-category">${libro.categoria}</span>
                <span class="product-shelf"><i class="fa-solid fa-bookmark"></i> ${libro.estante}</span>
                <h3 class="product-title">${libro.titulo}</h3>
                <p class="product-author">por ${libro.autor}</p>
                <div class="product-price-row">
                    <button class="btn-read" onclick="abrirLectura(${libro.id})">
                        <i class="fa-solid fa-book-open"></i> Leer
                    </button>
                    <button class="btn-add-cart" onclick="agregarAlPrestamo(${libro.id})" title="Apartar para préstamo físico">
                        <i class="fa-solid fa-plus"></i> Apartar
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function abrirLectura(id) {
    const libro = libros.find(l => l.id === id);
    if (!libro) return;

    modalTitle.textContent = libro.titulo;
    modalAuthor.innerHTML = `<i class="fa-solid fa-user-pen"></i> Autor: <strong>${libro.autor}</strong>`;
    modalShelf.innerHTML = `<i class="fa-solid fa-layer-group"></i> Ubicación: <strong>${libro.estante} (${libro.categoria})</strong>`;
    modalText.textContent = libro.texto;

    modalReader.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function cerrarLectura() {
    modalReader.classList.remove('active');
    document.body.style.overflow = 'auto'; 
}

function filtrarPorEstante(estante) {
    if (estante === 'todas') {
        categoryTitle.textContent = 'Acervo de Libros';
        renderLibros(libros);
    } else {
        categoryTitle.textContent = estante;
        const filtrados = libros.filter(l => l.estante === estante);
        renderLibros(filtrados);
    }
}

function agregarAlPrestamo(id) {
    const libro = libros.find(l => l.id === id);
    const itemEnPrestamo = prestamos.find(item => item.id === id);

    if (itemEnPrestamo) {
        alert("Este libro ya está en tu lista de apartado.");
        return;
    }

    if (prestamos.length >= 3) {
        alert("Reglamento CBTis No. 5: Solo puedes solicitar hasta 3 libros simultáneamente.");
        return;
    }

    prestamos.push({ ...libro });
    saveAndUpdateCart();
    cartDropdown.classList.add('active');
}

function removerLibro(id) {
    prestamos = prestamos.filter(p => p.id !== id);
    saveAndUpdateCart();
}

function saveAndUpdateCart() {
    localStorage.setItem('libros_cbtis5', JSON.stringify(prestamos));
    updateCartUI();
}

function updateCartUI() {
    cartCount.textContent = prestamos.length;
    cartItemsContainer.innerHTML = '';

    if (prestamos.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-msg">No has seleccionado ningún libro.</p>';
        cartTotalQty.textContent = '0';
        return;
    }

    prestamos.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.titulo}</h4>
                <p>${item.estante} • ${item.autor}</p>
            </div>
            <div class="cart-item-controls">
                <button onclick="removerLibro(${item.id})" title="Quitar libro"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotalQty.textContent = prestamos.length;
}

function procesarPrestamoWhatsApp() {
    if (prestamos.length === 0) {
        alert('Selecciona al menos un libro para apartar.');
        return;
    }

    let mensaje = "📚 *Solicitud de Préstamo — Biblioteca CBTis No. 5*\n\n";
    mensaje += "Hola, me gustaría apartar los siguientes ejemplares físicamente:\n\n";

    prestamos.forEach((item, index) => {
        mensaje += `${index + 1}. *${item.titulo}*\n   📍 Ubicación: ${item.estante} (${item.categoria})\n`;
    });

    mensaje += `\n👤 *Nombre del Alumno:* (Escribe tu nombre)\n`;
    mensaje += `🪪 *Número de Control / Credencial:* \n`;
    mensaje += `🏫 *Especialidad y Semestre:* \n`;

    const telefonoBiblioteca = "5215554567890";
    const urlWhatsApp = `https://wa.me/${telefonoBiblioteca}?text=${encodeURIComponent(mensaje)}`;

    window.open(urlWhatsApp, '_blank');
}