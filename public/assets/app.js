document.addEventListener("DOMContentLoaded", () => {
  const modals = Array.from({ length: 10 }, (_, i) => {
    const index = i + 1;
    return {
      openButton: `openModal${index}`,
      modal: `modal${index}`,
      closeButton: `closeModal${index}`,
    };
  });

  modals.forEach(({ openButton, modal, closeButton }) => {
    const openBtn = document.getElementById(openButton);
    const modalEl = document.getElementById(modal);
    const closeBtn = document.getElementById(closeButton);

    openBtn.addEventListener("click", () => {
      modalEl.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      modalEl.classList.add("hidden");
    });

    window.addEventListener("click", (event) => {
      if (event.target === modalEl) {
        modalEl.classList.add("hidden");
      }
    });
  });
});
