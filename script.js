const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = navLinks.style.display === 'flex';
  navLinks.style.display = open ? 'none' : 'flex';
  navLinks.style.cssText += open
    ? ''
    : 'position:absolute; top:64px; left:0; right:0; background:#F6F7F4; flex-direction:column; padding:20px 28px; border-bottom:1px solid #D8DBD4; gap:18px;';
});