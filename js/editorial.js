(function () {
  var articleBody = document.querySelector('.article-body');
  if (!articleBody) return;

  var path = window.location.pathname;
  var skipPages = ['/about.html', '/contact.html', '/privacy.html', '/disclaimer.html'];
  if (skipPages.some(function(p) { return path === p; })) return;

  var bar = document.createElement('div');
  bar.className = 'editorial-bar';
  bar.innerHTML = [
    '<div class="editorial-bar-inner">',
      '<div class="editorial-icon">🚛</div>',
      '<div class="editorial-text">',
        '<strong>Verified by the CDL Pay Guide Research Team</strong>',
        '<span>Salary data compiled from BLS Occupational Employment Statistics, ZipRecruiter, Indeed, and carrier-reported pay rates. Updated for 2026. All figures reflect US national averages — actual pay varies by state, carrier, experience, and endorsements. Use our <a href="/#salary" style="color:inherit">salary calculator</a> for a personalized estimate.</span>',
      '</div>',
      '<div class="editorial-updated">',
        '<span class="editorial-updated-label">Last Updated</span>',
        '<span class="editorial-updated-date" id="cdl-review-date"></span>',
      '</div>',
    '</div>'
  ].join('');

  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var now = new Date();
  bar.querySelector('#cdl-review-date').textContent = months[now.getMonth()] + ' ' + now.getFullYear();

  var style = document.createElement('style');
  style.textContent = [
    '.editorial-bar {',
      'background: #1a2535;',
      'border-radius: 10px;',
      'padding: 14px 18px;',
      'margin: 0 0 2rem 0;',
      'border-left: 4px solid #f5c842;',
    '}',
    '.editorial-bar-inner {',
      'display: flex;',
      'align-items: flex-start;',
      'gap: 12px;',
    '}',
    '.editorial-icon {',
      'font-size: 1.2rem;',
      'flex-shrink: 0;',
      'margin-top: 2px;',
    '}',
    '.editorial-text {',
      'flex: 1;',
      'font-size: 0.83rem;',
      'color: rgba(255,255,255,0.75);',
      'line-height: 1.55;',
    '}',
    '.editorial-text strong {',
      'color: #f5c842;',
      'display: block;',
      'margin-bottom: 3px;',
      'font-size: 0.82rem;',
    '}',
    '.editorial-text a {',
      'color: rgba(255,255,255,0.6);',
      'text-decoration: underline;',
    '}',
    '.editorial-updated {',
      'flex-shrink: 0;',
      'text-align: right;',
      'font-size: 0.78rem;',
    '}',
    '.editorial-updated-label {',
      'display: block;',
      'color: rgba(255,255,255,0.4);',
      'text-transform: uppercase;',
      'letter-spacing: 0.07em;',
      'font-size: 0.7rem;',
      'margin-bottom: 2px;',
    '}',
    '.editorial-updated-date {',
      'color: rgba(255,255,255,0.7);',
      'font-weight: 600;',
      'white-space: nowrap;',
    '}',
    '@media (max-width: 600px) {',
      '.editorial-bar-inner { flex-wrap: wrap; }',
      '.editorial-updated { text-align: left; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  articleBody.insertBefore(bar, articleBody.firstChild);
})();
