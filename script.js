// ===== Tools & Platforms data (rendered as colored initial badges) =====
const TOOLS_DATA = [
  { category: "Communication", icon: "💬", tools: [
    { name: "Slack", initials: "S", color: "#4A154B" },
    { name: "MS Teams", initials: "Te", color: "#6264A7" },
    { name: "Discord", initials: "Di", color: "#5865F2" },
    { name: "WhatsApp", initials: "Wa", color: "#25D366" },
    { name: "Google Meet", initials: "Gm", color: "#00897B" },
    { name: "Zoom", initials: "Z", color: "#2D8CFF" },
  ]},
  { category: "E-Commerce Platforms", icon: "🛒", tools: [
    { name: "eBay", initials: "Eb", color: "#E53238" },
    { name: "Etsy", initials: "Et", color: "#F1641E" },
    { name: "Amazon", initials: "Am", color: "#232F3E" },
    { name: "Shopee", initials: "Sp", color: "#EE4D2D" },
    { name: "Lazada", initials: "Lz", color: "#0F146D" },
    { name: "WordPress", initials: "Wp", color: "#21759B" },
  ]},
  { category: "Administrative & Productivity", icon: "📋", tools: [
    { name: "Microsoft 365", initials: "Ms", color: "#D83B01" },
    { name: "Google Workspace", initials: "Gw", color: "#4285F4" },
    { name: "Outlook", initials: "Ol", color: "#0072C6" },
    { name: "Google Sheets", initials: "Gs", color: "#0F9D58" },
    { name: "Microsoft Excel", initials: "Ex", color: "#217346" },
    { name: "Monday.com", initials: "Mo", color: "#FF3D57" },
    { name: "Jira", initials: "Ji", color: "#2684FF" },
    { name: "Time Doctor", initials: "Td", color: "#2F4B7C" },
  ]},
  { category: "CRM & Email Marketing", icon: "🤝", tools: [
    { name: "HubSpot", initials: "H", color: "#FF7A59" },
    { name: "Mailchimp", initials: "Mc", color: "#FFE01B", dark: true },
  ]},
  { category: "Social Media Platforms & Management", icon: "📱", tools: [
    { name: "Facebook", initials: "Fb", color: "#1877F2" },
    { name: "Instagram", initials: "Ig", color: "#E4405F" },
    { name: "TikTok", initials: "Tt", color: "#000000" },
    { name: "LinkedIn", initials: "Li", color: "#0A66C2" },
    { name: "Meta Business Suite", initials: "Mb", color: "#0467DF" },
  ]},
  { category: "Design & Creative", icon: "🎨", tools: [
    { name: "Canva", initials: "Cv", color: "#00C4CC" },
    { name: "Adobe Photoshop", initials: "Ps", color: "#31A8FF" },
    { name: "PhotoRoom", initials: "Pr", color: "#6C5CE7" },
    { name: "Adobe Premiere Pro", initials: "Pp", color: "#9999FF", dark: true },
    { name: "CapCut", initials: "Cc", color: "#000000" },
  ]},
  { category: "AI & Productivity", icon: "🤖", tools: [
    { name: "ChatGPT", initials: "Ai", color: "#10A37F" },
    { name: "Claude AI", initials: "Cl", color: "#D97757" },
    { name: "Google Gemini", initials: "Ge", color: "#8E75B2" },
    { name: "Microsoft Copilot", initials: "Cp", color: "#185ABD" },
  ]},
  { category: "E-Commerce Research & SEO", icon: "🔍", tools: [
    { name: "Alura", initials: "Al", color: "#6C63FF" },
    { name: "EtsyHunt", initials: "Eh", color: "#F1641E" },
    { name: "AdsPower", initials: "Ap", color: "#2F80ED" },
    { name: "Google Trends", initials: "Gt", color: "#4285F4" },
  ]},
  { category: "IT & Technical Tools", icon: "🌐", tools: [
    { name: "Visual Studio Code", initials: "Vs", color: "#007ACC" },
    { name: "Git", initials: "Gi", color: "#F05032" },
    { name: "GitHub", initials: "Gh", color: "#181717" },
    { name: "pfSense", initials: "Pf", color: "#212121" },
    { name: "OPNsense", initials: "Op", color: "#D94F00" },
    { name: "RingCentral", initials: "R", color: "#FF7A00" },
    { name: "Windows", initials: "Wn", color: "#00A4EF" },
    { name: "Linux", initials: "Lx", color: "#FCC624", dark: true },
    { name: "TeamViewer", initials: "Tv", color: "#0E8EE9" },
    { name: "AnyDesk", initials: "Ad", color: "#EF443B" },
  ]},
  { category: "Cloud Storage & File Management", icon: "☁️", tools: [
    { name: "Google Drive", initials: "GD", color: "#4285F4" },
    { name: "Dropbox", initials: "Db", color: "#0061FF" },
    { name: "OneDrive", initials: "Od", color: "#0078D4" },
  ]},
];

function renderTools() {
  const root = document.getElementById('toolsRoot');
  if (!root) return;
  root.innerHTML = TOOLS_DATA.map(group => `
    <div class="tool-category">
      <h3>${group.icon} ${group.category}</h3>
      <div class="tool-pill-row">
        ${group.tools.map(t => `
          <div class="tool-pill">
            <span class="badge" style="background:${t.color}; ${t.dark ? 'color:#1F2A24;' : ''}">${t.initials}</span>
            <span class="label">${t.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

renderTools();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Close mobile nav after clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Scroll-spy: highlight active nav link based on section in view
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(section => spy.observe(section));

// Store & contact logo fallback: if a brand icon fails to load, either swap for a
// text badge (if data-fallback is set) or just hide the broken image gracefully
document.querySelectorAll('.store-logo, .contact-icon-img').forEach(img => {
  if (img.tagName !== 'IMG') return;
  img.addEventListener('error', () => {
    const fallbackText = img.getAttribute('data-fallback');
    if (fallbackText) {
      const fallback = document.createElement('span');
      fallback.className = 'store-logo tool-fallback';
      fallback.textContent = fallbackText;
      img.replaceWith(fallback);
    } else {
      img.style.display = 'none';
    }
  });
});
