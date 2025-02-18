import { getMetadata, getExperienceFragment } from '../../scripts/aem.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {

  const footerContent = await getExperienceFragment('https://www-dev.blackduck.com/content/experience-fragments/black-duck/en-us/global/sig/sig-footer-js/master/jcr:content/root.html');

  const navWrapper = document.createElement('div');
  navWrapper.className = 'footer-wrapper';
  navWrapper.id = 'footerSIG';
  navWrapper.innerHTML = footerContent;
  block.append(navWrapper);
}
