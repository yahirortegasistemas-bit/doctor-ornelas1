// ==========================================
// INTERACCIONES
// ==========================================

(function() {
  'use strict';

  // --- Feedback de clic en botones ---
  document.querySelectorAll('.btn, .btn-maps').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const action = this.textContent.trim();
      console.log(`📊 Acción: ${action}`);
      showToast(`✅ ${action}`);
    });
  });

  // --- Sistema de notificaciones ---
  function showToast(message) {
    const existing = document.querySelector('.toast-ux');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-ux';
    toast.textContent = message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 300);
    }, 3000);
  }

  // --- Detectar móvil ---
  if (window.matchMedia('(max-width: 768px)').matches) {
    console.log('📱 Versión móvil activa');
    document.querySelectorAll('.btn').forEach(btn => {
      btn.style.minHeight = '56px';
    });
  }

  // --- Tiempo en página ---
  let startTime = Date.now();
  window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    console.log(`⏱️ Tiempo en página: ${timeSpent}s`);
  });

  console.log('✅ Dr. Ornelas — Página cargada correctamente');
  console.log('📞 Teléfono consultorio: 664 684 0579');
  console.log('📧 Correo: drornelasoncologia@hotmail.com');
  console.log('📍 Dirección: Hospital Centro Médico Nova, Tijuana');

})();

// ==========================================
// CONTADOR DE AÑOS
// ==========================================

function animateCounter() {
  const counterElement = document.getElementById('counter-years');
  if (!counterElement) return;
  
  const target = 30;
  const duration = 2000;
  const startTime = Date.now();
  
  function updateCounter() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    
    counterElement.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counterElement.textContent = target;
      counterElement.classList.add('done');
    }
  }
  
  updateCounter();
}

window.addEventListener('load', function() {
  setTimeout(animateCounter, 500);
});

// ==========================================
// TARJETAS FLIP EN MÓVIL
// ==========================================

document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function(e) {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      this.classList.toggle('flipped');
    }
  });

  card.addEventListener('touchstart', function(e) {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      this.classList.toggle('flipped');
    }
  });
});


// ==========================================
// PARTÍCULAS INTERACTIVAS - SEGUIMIENTO DEL MOUSE
// ==========================================

document.addEventListener('mousemove', function(e) {
    const particles = document.querySelectorAll('.particle');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    particles.forEach((particle, index) => {
        const speed = 10 + (index * 2);
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        particle.style.transform = `translate(${x}px, ${y}px)`;
    });
});