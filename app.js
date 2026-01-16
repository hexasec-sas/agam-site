(function () {
  // Año footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Menú móvil
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__list");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Cierra menú al hacer click
    menu.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

  /* === Zoom individual en imágenes de la galería === */
const zoomModal = document.getElementById("zoomModal");
const zoomImg = document.getElementById("zoomImg");
const zoomCaption = document.getElementById("zoomCaption");

function openZoom(src, altText){
  if(!zoomModal || !zoomImg) return;
  zoomImg.src = src;
  zoomImg.alt = altText || "Imagen ampliada";
  if(zoomCaption) zoomCaption.textContent = altText || "";
  zoomModal.classList.add("active");
  zoomModal.setAttribute("aria-hidden","false");
}

function closeZoom(){
  if(!zoomModal || !zoomImg) return;
  zoomModal.classList.remove("active");
  zoomModal.setAttribute("aria-hidden","true");
  zoomImg.src = "";
  zoomImg.alt = "";
  if(zoomCaption) zoomCaption.textContent = "";
}

/* Click en cualquier imagen dentro de la grilla del modal principal */
document.querySelectorAll("#galleryModal .galleryGrid img").forEach(img=>{
  img.addEventListener("click", ()=> openZoom(img.src, img.alt));
});

/* Cerrar zoom: botón, click fuera, ESC */
document.querySelector(".zoomClose")?.addEventListener("click", closeZoom);
document.querySelector(".zoomOverlay")?.addEventListener("click", closeZoom);

document.addEventListener("keydown",(e)=>{
  if(e.key === "Escape"){
    closeZoom();
  }
});

    
  }

  // Animación reveal (IntersectionObserver = liviano y rápido)
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));

  // Configura WhatsApp
  // ✅ Cambia este número al que quieras (formato internacional sin +, Colombia: 57 + número)
  const WA_NUMBER = "573137297652";

  function waLink(message) {
    const txt = encodeURIComponent(message);
    return `https://wa.me/${WA_NUMBER}?text=${txt}`;
  }

  // Botón rápido hero
  const quoteBtn = document.getElementById("quoteBtn");
  if (quoteBtn) {
    quoteBtn.addEventListener("click", () => {
      const name = (document.getElementById("name")?.value || "").trim();
      const phone = (document.getElementById("phone")?.value || "").trim();
      const service = (document.getElementById("service")?.value || "Servicio").trim();

      const msg =
        `Hola AGAM Ingeniería SAS, soy ${name || "un(a) interesado(a)"}.\n` +
        `Quiero cotizar: ${service}.\n` +
        `${phone ? `Mi teléfono es: ${phone}.\n` : ""}` +
        `¿Me pueden orientar con los siguientes pasos?`;

      window.open(waLink(msg), "_blank", "noopener,noreferrer");
    });
  }

  // Botón flotante WhatsApp
  const waFloat = document.getElementById("waFloat");
  if (waFloat) {
    waFloat.href = waLink("Hola AGAM Ingeniería SAS, quiero información y cotizar un proyecto.");
    waFloat.rel = "noopener noreferrer";
    waFloat.target = "_blank";
  }

  // Formulario: genera mensaje seguro (sin backend)
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const nombre = String(data.get("nombre") || "").trim();
      const email = String(data.get("email") || "").trim();
      const telefono = String(data.get("telefono") || "").trim();
      const mensaje = String(data.get("mensaje") || "").trim();

      const msg =
        `Hola AGAM Ingeniería SAS, soy ${nombre}.\n` +
        `Email: ${email}\n` +
        `Teléfono: ${telefono}\n\n` +
        `Necesidad:\n${mensaje}\n\n` +
        `¿Me confirman disponibilidad y próximos pasos?`;

      window.open(waLink(msg), "_blank", "noopener,noreferrer");
    });
  }

  // Email (mailto) como alternativa
  const emailBtn = document.getElementById("emailBtn");
  if (emailBtn) {
    const subject = encodeURIComponent("Solicitud de cotización - AGAM Ingeniería SAS");
    const body = encodeURIComponent("Hola AGAM Ingeniería SAS,\n\nQuiero solicitar una cotización. Por favor contáctenme.\n\nGracias.");
    emailBtn.href = `mailto:proyectos@agamingenieria.com?subject=${subject}&body=${body}`;
  }

  /* === Galería flotante === */
function openGallery(){
  const modal = document.getElementById("galleryModal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden","false");
}

function closeGallery(){
  const modal = document.getElementById("galleryModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden","true");
}

window.openGallery = openGallery;
window.closeGallery = closeGallery;
  
/* Cerrar al hacer click fuera */
document.addEventListener("click", (e)=>{
  const modal = document.getElementById("galleryModal");
  if(e.target.classList.contains("galleryOverlay")){
    closeGallery();
  }
});

/* Cerrar con ESC */
document.addEventListener("keydown",(e)=>{
  if(e.key === "Escape"){
    closeGallery();
  }
});

/* Botón cerrar */
document.querySelector(".galleryClose")?.addEventListener("click", closeGallery);

  
})();



