const libros = [
    { 
        id: 1, 
        titulo: "Curso de Transformadores y Motores Trifásicos", 
        autor: "Gilberto Enríquez Harper", 
        estante: "Estante 2", 
        categoria: "Electromecánica", 
        img: "https://libroweb.alfaomega.com.mx/images/cover3d/9786077686415.png",
        texto: "CAPÍTULO 1: Fundamentos de Máquinas Eléctricas de Corriente Alterna.\n\nLos transformadores trifásicos son elementos esenciales en las redes de distribución de energía eléctrica industrial. Su funcionamiento se basa en la ley de inducción electromagnética de Faraday.\n\nUn sistema trifásico consta de tres corrientes alternas monofásicas de la misma frecuencia y amplitud, con un desfase entre ellas de 120 grados eléctricos. En este texto se examinan las conexiones Delta (Δ) y Estrella (Y), los principios de regulación de voltaje y las pruebas de cortocircuito y circuito abierto necesarias para garantizar la eficiencia operativa de los equipos del taller de Electromecánica."
    },
    { 
        id: 2, 
        titulo: "Curso Integral de Dibujo Técnico", 
        autor: "Gilberto Enríquez Harper", 
        estante: "Estante 2", 
        categoria: "Electromecánica", 
        img: "https://tse3.mm.bing.net/th/id/OIP.mfews3y13KfG-u4PACR-bwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "UNIDAD 2: Normalización y Proyecciones Ortogonales.\n\nEl dibujo técnico es el lenguaje gráfico universal empleado por ingenieros y técnicos para transmitir ideas precisas sobre componentes mecánicos y estructuras físicas.\n\nEn este manual se desarrollan las técnicas de trazado a escala, acotación normalizada bajo criterios ISO y ANSI, y el desarrollo de proyecciones diédricas. La correcta interpretación de planos es fundamental para la fabricación e instalación de sistemas industriales en talleres técnicos."
    },
    { 
        id: 3, 
        titulo: "Manual de Comunicación Oral", 
        autor: "Autores Varios", 
        estante: "Estante 3", 
        categoria: "Español / Comunicación", 
        img: "https://http2.mlstatic.com/D_NQ_NP_722619-MLM82367581774_022025-O.webp",
        texto: "MÓDULO I: Elementos de la Expresión Oral y Argumentación.\n\nLa comunicación oral efectiva es una habilidad crítica tanto en el entorno académico como profesional. Involucra el uso adecuado del lenguaje verbal, tono fonético y lenguaje corporal.\n\nEn esta guía práctica se estudian las técnicas para la estructuración de discursos, debates académicos, disertaciones e informes técnicos. Se enfatiza el dominio del pánico escénico, la modulación vocal y la construcción lógica de argumentos."
    },
    { 
        id: 4, 
        titulo: "Desarrollo Web con HTML5 y CSS", 
        autor: "Especialidad en Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://http2.mlstatic.com/D_NQ_NP_732751-MPE87039114408_072025-O.webp",
        texto: "LECCIÓN 3: Estructuración de Documentos Web semánticos.\n\nHTML5 proporciona la infraestructura fundamental para las aplicaciones e interfaces modernas de la red. Mediante etiquetas semánticas como <header>, <nav>, <main>, <section> y <footer>, los desarrolladores pueden organizar el contenido de manera óptima para navegadores y motores de búsqueda.\n\nComplementado con CSS3, permite la aplicación de estilos modernos, maquetación mediante Flexbox y Grid, y el diseño adaptable (Responsive Design) para todo tipo de dispositivos."
    },
    { 
        id: 5, 
        titulo: "Compendio Fiscal para Estudiantes", 
        autor: "Ediciones Académicas", 
        estante: "Estante 1", 
        categoria: "Contabilidad", 
        img: "https://th.bing.com/th/id/R.398dcd2825bd5278366837550df8a57d?rik=COFffS3j9gZsaQ&riu=http%3a%2f%2fwww.librerialeon.com.mx%2fimagenes%2f9786079%2f978607998438.GIF&ehk=n%2f7MgVoTtAu%2bwFteoY5K7yzPQQDKqCsjb8FXOTTWL%2fY%3d&risl=&pid=ImgRaw&r=0",
        texto: "SECCIÓN A: Marco Tributario y Obligaciones Fiscales.\n\nEste compendio compila las disposiciones legales y reglamentarias aplicables a la gestión contable y contabilidad de empresas.\n\nAborda temas referentes al Impuesto Sobre la Renta (ISR), Impuesto al Valor Agregado (IVA), facturación electrónica, deducciones autorizadas y los procedimientos de presentación de declaraciones ante las autoridades tributarias."
    },
    { 
        id: 6, 
        titulo: "Probabilidad y Estadística Aplicada", 
        autor: "Academia de Matemáticas", 
        estante: "Estante 5", 
        categoria: "Matemáticas", 
        img: "https://hachettelivre.mx/wp-content/uploads/2023/07/9786074387667.jpeg",
        texto: "CAPÍTULO 4: Distribuciones de Probabilidad Discretas y Continuas.\n\nLa estadística es una disciplina matemática orientada a la recolección, análisis e interpretación de datos numéricos para la toma de decisiones basada en evidencias.\n\nSe analizan conceptos centrales como media, mediana, moda, desviación estándar, probabilidad condicional y las distribuciones Normal y Binomial aplicadas a problemas en ingeniería y ciencias sociales."
    },
    { 
        id: 7, 
        titulo: "Manual de Prácticas de Química II", 
        autor: "Área Laboratorista Químico", 
        estante: "Estante 3", 
        categoria: "Laboratorista Químico", 
        img: "https://tse2.mm.bing.net/th/id/OIP._HOMudiIrv5tixqAePoC0gHaJl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "PRÁCTICA DE LABORATORIO No. 5: Estequiometría y Titulación Ácido-Base.\n\nObjetivo: Determinar experimentalmente la concentración de una solución ácida mediante titulación volumétrica utilizando hidróxido de sodio (NaOH) de concentración conocida e indicador de fenolftaleína.\n\nMedidas de seguridad: Es obligatorio el uso de bata blanca de algodón, gafas de protección y guantes durante la manipulación de reactivos en la mesa de trabajo."
    },
    { 
        id: 8, 
        titulo: "Ecología y Sustentabilidad Ambiental", 
        autor: "C.P.T. Ecología", 
        estante: "Estante 2", 
        categoria: "C.P.T. Ecología", 
        img: "https://tse1.mm.bing.net/th/id/OIP.2mIb9lXjRG0wTP2xm0oSlgHaJj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "UNIDAD 3: Flujo de Energía y Ciclos Biogeoquímicos en los Ecosistemas.\n\nLa ecología examina las interacciones complejas entre los organismos vivos y su entorno físico. En este módulo se abordan las redes tróficas, el ciclo del carbono, nitrógeno y agua, así como las estrategias para mitigar el impacto ambiental, promover la biodiversidad y fomentar el desarrollo sustentable en la región."
    },
    { 
        id: 9, 
        titulo: "Fundamentos de Base de Datos con MySQL", 
        autor: "Academia de Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://tse1.mm.bing.net/th/id/OIP.5CYvIE-0TCNe4wGZmuiFVQHaJk?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "MÓDULO II: Modelado Relacional y Lenguaje SQL.\n\nLas bases de datos relacionales permiten almacenar, organizar y consultar volúmenes masivos de información de manera estructurada. En este manual se estudian el diseño de diagramas Entidad-Relación, normalización de tablas y la ejecución de consultas mediante sentencias SELECT, INSERT, UPDATE y DELETE."
    },
    { 
        id: 10, 
        titulo: "Circuitos Lógicos y Electrónica Digital", 
        autor: "Ing. Roberto M. Garza", 
        estante: "Estante 2", 
        categoria: "Electromecánica", 
        img: "https://tse2.mm.bing.net/th/id/OIP.vfJs9__CDOxRueyjP65a9AHaKl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "CAPÍTULO 3: Compuertas Lógicas y Álgebra de Boole.\n\nLa electrónica digital sustenta el funcionamiento de los sistemas automatizados modernos. Este texto cubre el análisis de compuertas lógicas básicas (AND, OR, NOT), la simplificación de circuitos mediante mapas de Karnaugh y la implementación de sistemas combinacionales y secuenciales."
    },
    { 
        id: 11, 
        titulo: "Contabilidad de Sociedades Mercantiles", 
        autor: "Lic. Carmen Solís", 
        estante: "Estante 1", 
        categoria: "Contabilidad", 
        img: "https://th.bing.com/th/id/OIP.O6pPxVwhCFdaljVuwYrOXwHaJW?w=200&h=252&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "UNIDAD 1: Constitución y Registro Contable de Sociedades.\n\nSe analizan los aspectos legales y contables correspondientes a la creación de sociedades anónimas y de responsabilidad limitada, el registro de capital social variable, acciones, reservas y la formulación de estados financieros básicos bajo normatividad contable vigente."
    },
    { 
        id: 12, 
        titulo: "Análisis Instrumental y Cromatografía", 
        autor: "Laboratorio de Investigación Química", 
        estante: "Estante 3", 
        categoria: "Laboratorista Químico", 
        img: "https://th.bing.com/th/id/OIP.71PxaFNbs91MGnZOieV8dwHaJ3?w=200&h=267&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "SECCIÓN C: Técnicas Espectrofotométricas y Cromatográficas.\n\nEl análisis químico instrumental permite identificar y cuantificar componentes químicos complejos en muestras industriales y ambientales. Incluye los principios de operación de equipos de absorción atómica, espectroscopia UV-Vis y cromatografía de gases."
    },
    { 
        id: 13, 
        titulo: "Cálculo Diferencial e Integral", 
        autor: "Academia de Matemáticas", 
        estante: "Estante 5", 
        categoria: "Matemáticas", 
        img: "https://th.bing.com/th/id/OIP.fmEix-GviJON6k9rh5WWeQHaLe?w=200&h=311&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "UNIDAD 1: Límites, Derivadas y sus Aplicaciones.\n\nEl cálculo es la rama de las matemáticas que estudia el cambio continuo. En esta unidad se exploran las reglas de derivación, la interpretación geométrica de la pendiente de la recta tangente y el uso de la derivada para resolver problemas de optimización y razón de cambio en ingeniería."
    },
    { 
        id: 14, 
        titulo: "Física General y Mecánica Clásica", 
        autor: "Ing. Carlos Mendoza", 
        estante: "Estante 5", 
        categoria: "Matemáticas", 
        img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1572209864i/48593361.jpg",
        texto: "CAPÍTULO 2: Leyes del Movimiento de Newton y Trabajo.\n\nAnálisis dinámico del movimiento de los cuerpos rígidos. Comprende el estudio de las fuerzas, momentos, la conservación de la energía mecánica, la cantidad de movimiento y las aplicaciones prácticas en el diseño mecánico y estructural."
    },
    { 
        id: 15, 
        titulo: "Programación Orientada a Objetos en Java", 
        autor: "Especialidad en Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://edicionesdelau.com/wp-content/uploads/2023/01/ProgamOrientadaObjetosJava-scaled.jpg",
        texto: "MÓDULO 3: Clases, Herencia y Polimorfismo.\n\nLa Programación Orientada a Objetos (POO) es un paradigma fundamental para la creación de software robusto. Se analizan la abstracción, el encapsulamiento, la reutilización de código mediante herencia y el manejo de excepciones en aplicaciones de escritorio."
    },
    { 
        id: 16, 
        titulo: "Introducción a la Algoritmia con Python", 
        autor: "Academia de Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://th.bing.com/th/id/OIP.fabe0x_X0sX6ShbAHtmUvgAAAA?w=200&h=200&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "CAPÍTULO 1: Estructuras de Control y Datos.\n\nPython es un lenguaje de programación versátil e intuitivo. Este módulo introduce los conceptos clave de sintaxis, variables, estructuras condicionales (if/else), bucles (for/while) y manejo de listas y diccionarios para la solución lógica de problemas."
    },
    { 
        id: 17, 
        titulo: "Mantenimiento Industrial y Oleohidráulica", 
        autor: "Gilberto Enríquez Harper", 
        estante: "Estante 2", 
        categoria: "Electromecánica", 
        img: "https://images.librotea.com/uploads/media/2018/09/13/mantenimiento-industrial.jpeg",
        texto: "UNIDAD 4: Circuitos Hidráulicos y Neumáticos.\n\nEstudio detallado de la transmisión de potencia mediante fluidos confinados. Se describen bombas, válvulas distribuidoras de control, actuadores lineales/rotativos y esquemas de mantenimiento preventivo y correctivo en líneas de producción."
    },
    { 
        id: 18, 
        titulo: "Química Orgánica y Estructura Molecular", 
        autor: "Laboratorio de Investigación Química", 
        estante: "Estante 3", 
        categoria: "Laboratorista Químico", 
        img: "https://http2.mlstatic.com/D_NQ_NP_686080-MLM49765347390_042022-O-quimica-organica-3ed-estructura-y-funciones.webp",
        texto: "SECCIÓN A: Hidrocarburos y Grupos Funcionales.\n\nAnálisis del carbono y sus enlaces en compuestos orgánicos. Se exploran los alcanos, alquenos, alquinos, alcoholes, aldehídos y cetonas, junto con las normas de nomenclatura IUPAC y sus aplicaciones en la industria farmacéutica y petroquímica."
    },
    { 
        id: 19, 
        titulo: "Redes de Computadoras y Cableado Estructurado", 
        autor: "Especialidad en Programación", 
        estante: "Estante 1", 
        categoria: "Programación / Ofimática", 
        img: "https://imgv2-1-f.scribdassets.com/img/document/712513133/original/893ea698b7/1?v=1",
        texto: "MÓDULO I: Modelo OSI y Protocolos TCP/IP.\n\nFundamentos de telecomunicaciones e interconexión de redes LAN y WAN. Este manual abarca el ponchado de cables UTP bajo norma T568A/T568B, configuración de routers, switches y direccionamiento IPV4/IPV6."
    },
    { 
        id: 20, 
        titulo: "Gestión Administrativa y Financiera", 
        autor: "Lic. Carmen Solís", 
        estante: "Estante 1", 
        categoria: "Contabilidad", 
        img: "https://th.bing.com/th/id/OIP.GDb5_F4IGQUR3smGLPNWLQAAAA?w=200&h=300&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        texto: "CAPÍTULO 2: Presupuestos y Control de Costos.\n\nPrincipios esenciales de administración estratégica de recursos financieros. Cubre el cálculo de costos fijos y variables, análisis del punto de equilibrio y elaboración de presupuestos operativos para pymes y empresas consolidadas."
    },
    { 
        id: 21, 
        titulo: "Historia de la Filosofía y Ética Contemporánea", 
        autor: "Dr. Fernando Morales", 
        estante: "Estante 4", 
        categoria: "Filosofía y Ética", 
        img: "https://tse3.mm.bing.net/th/id/OIP.EsvPJvzncO8sEGUleMeVegHaJZ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "CAPÍTULO 1: El Pensamiento Crítico desde la Antigua Grecia hasta la Modernidad.\n\nLa filosofía examina las preguntas fundamentales sobre la existencia, el conocimiento, la moral y la verdad. Este texto analiza las corrientes éticas tradicionales, los dilemas morales contemporáneos y la importancia de la argumentación racional en la construcción de una ciudadanía democrática y consciente."
    },
    { 
        id: 22, 
        titulo: "Sociología y Estructura Social", 
        autor: "Lic. Marcela Ramírez G.", 
        estante: "Estante 4", 
        categoria: "Ciencias Sociales", 
        img: "https://http2.mlstatic.com/D_NQ_NP_684486-MLA42406430880_062020-O.webp",
        texto: "UNIDAD 2: Dinámicas de Grupo, Instituciones y Cambio Social.\n\nLa sociología estudia la vida social humana, los grupos y las sociedades. En esta obra se profundiza en el análisis de las instituciones sociales, la estratificación, los movimientos sociales y el impacto de la globalización en la identidad cultural y comunitaria."
    },
    { 
        id: 23, 
        titulo: "Introducción a la Lógica y Argumentación", 
        autor: "Academia de Humanidades", 
        estante: "Estante 4", 
        categoria: "Filosofía y Ética", 
        img: "https://http2.mlstatic.com/D_NQ_NP_750221-MLM49077990443_022022-O.webp",
        texto: "MÓDULO 1: Validez de los Razonamientos y Falacias Informales.\n\nEl estudio de la lógica formal e informal permite estructurar pensamientos claros y detectar errores o falacias en los discursos cotidianos, políticos y académicos. Se abordan los silogismos, las proposiciones y las herramientas para el debate crítico fundamentado."
    },
    { 
        id: 24, 
        titulo: "Estructura Socioeconómica y Política de México", 
        autor: "Departamento de Ciencias Sociales", 
        estante: "Estante 4", 
        categoria: "Ciencias Sociales", 
        img: "https://tse2.mm.bing.net/th/id/OIP.Lnc5Ajr4ndxCCAbjm3KlrwHaKS?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        texto: "UNIDAD 3: Modelos Económicos y Transformaciones Políticas del México Moderno.\n\nAnálisis crítico de los procesos históricos, económicos y políticos que han moldeado la sociedad mexicana contemporánea. Examina el impacto de los modelos de desarrollo, las crisis financieras, las reformas estructurales y los retos socioeconómicos actuales."
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