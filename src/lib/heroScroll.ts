/**
 * Fades out the sticky hero content on scroll and adds a solid
 * background to the features section so the hero doesn't show through.
 *
 * Requires: #hero-container and #features elements on the page.
 */
export function initHeroScroll(): void {
  const heroContainer = document.getElementById("hero-container") as HTMLElement;
  const featuresSection = document.getElementById("features") as HTMLElement;

  if (!heroContainer || !featuresSection) return;

  const onScroll = () => {
    const heroHeight = heroContainer.offsetHeight;
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / (heroHeight * 0.6), 1);

    heroContainer.style.opacity = `${1 - progress}`;

    if (progress >= 0.8) {
      featuresSection.classList.add("features-solid-bg");
    } else {
      featuresSection.classList.remove("features-solid-bg");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
