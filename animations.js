(() => {
  const video = document.querySelector('.home-hero video');
  if (!video) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let heroVisible = false;

  const syncPlayback = () => {
    if (document.hidden || reducedMotion.matches || !heroVisible) video.pause();
    else video.play().catch(() => {});
  };

  const observer = new IntersectionObserver((entries) => {
    heroVisible = entries[0].isIntersecting;
    syncPlayback();
  });

  observer.observe(video);
  document.addEventListener('visibilitychange', syncPlayback);
  reducedMotion.addEventListener('change', syncPlayback);
})();
