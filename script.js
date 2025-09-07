// --- kode kamu sebelumnya ---
const photos = [];
for (let i = 1; i <= 50; i++) {
  photos.push(`images/${i}.webp`);
}

const gallery = document.getElementById("gallery");

function renderGallery() {
  gallery.innerHTML = "";
  const shuffled = photos.sort(() => Math.random() - 0.5);
  shuffled.forEach((src) => {
    const link = document.createElement("a");
    link.href = src;
    link.dataset.src = src;
    link.innerHTML = `<img src="${src}" alt="Foto Kolase">`;
    gallery.appendChild(link);
  });

  if (window.lgInstance) {
    window.lgInstance.destroy();
  }
  window.lgInstance = lightGallery(gallery, {
    plugins: [lgZoom, lgFullscreen, lgThumbnail],
    speed: 400
  });
}

document.getElementById("refreshBtn").addEventListener("click", renderGallery);

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Tombol kembali ke atas
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Render awal
renderGallery();

