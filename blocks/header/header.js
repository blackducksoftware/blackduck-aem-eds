import { getMetadata, getExperienceFragment } from '../../scripts/aem.js';

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {

  const headerContent = await getExperienceFragment('https://www-dev.blackduck.com/content/experience-fragments/black-duck/en-us/global/sig/sig-topnav/master/jcr:content/root.html');

  const navWrapper = document.createElement('div');
  navWrapper.className = 'header-wrapper';
  navWrapper.innerHTML = headerContent;
  block.append(navWrapper);
}
