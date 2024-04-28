import { useTemplate } from '../../main.js';

export function GalleryUpdater() {
  const gallForm = document.querySelector('.gallery__form');
  const gallInputArray = document.querySelectorAll('.gallery__input');
  const gallPictureArray = document.querySelectorAll('.gallery__picture');

  gallInputArray.forEach((gallInput) => {
    gallInput.addEventListener('change', (ev) => {

      gallForm.classList.add('disabled-child');
      for (let i = 0; i < gallPictureArray.length; i++) {
        gallPictureArray[i].classList.add('anim-slide-x-hide');

        setTimeout(() => {
          gallPictureArray[i].textContent = '';

          const gallTemplate = document.querySelector(`.gallery-template_series_${ev.target.value}_${i + 1}`);
          useTemplate(gallPictureArray[i], gallTemplate);

          gallPictureArray[i].classList.add('anim-slide-x-show');
        }, 1200);

        setTimeout(() => {
          gallPictureArray[i].classList.remove('anim-slide-x-hide');
          gallPictureArray[i].classList.remove('anim-slide-x-show');
          gallForm.classList.remove('disabled-child');
        }, 2200);
      }
    });
  });
}
