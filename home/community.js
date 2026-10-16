const communityGallery = document.querySelector('.community-gallery');

if (communityGallery) {
  const communityRows = communityGallery.querySelectorAll('.community-track');

  communityRows.forEach(function (row) {
    const group = row.querySelector('.community-group');

    for (let number = 0; number < 3; number++) {
      const copy = group.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.querySelectorAll('img').forEach(function (image) {
        image.alt = '';
      });
      row.appendChild(copy);
    }
  });

  communityGallery.classList.add('is-ready');
  communityGallery.classList.add('is-outside');

  const communityObserver = new IntersectionObserver(function (entries) {
    communityGallery.classList.toggle('is-outside', !entries[0].isIntersecting);
  });
  communityObserver.observe(communityGallery);
}
