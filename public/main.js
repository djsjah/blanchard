import { GalleryUpdater } from './presentation/Gallery/GalleryUpdater.js';

function main() {
  GalleryUpdater();
}

main();

export function useTemplate(curElem, template) {
  curElem.append(template.content.cloneNode(true));
}
