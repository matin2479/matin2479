// --- Complete Resume Data (Translated to English) ---
const resumeData = {
    personal: {
        name: "Matin Majed Hosseinabadi",
        title: "Aspiring Full-Stack Developer", 
        email: "matin.majed.lawyer0379@gmail.com", 
        location: "Isfahan, Iran", 
        github: "github.com/matin2479", 
        // 🚨 آدرس فایل عکس شما (profile.jpg)
        photoUrl: "profile-image.jpeg", 
    },
    summary: "Self-taught and results-oriented Web Developer with 4+ years of experience focused on HTML5, CSS3, and JavaScript. Holds an official technical and vocational certification in Responsive Web Design and specializes in independent troubleshooting and problem-solving. Eager to advance skills in React and TypeScript, and committed to learning German with the goal of working with leading teams in Germany.",
    aboutMe: "I am an aspiring Full-Stack Developer who started my professional journey on **Sep 5, 2021 (1400/06/14)**. After receiving a Digital Illustration diploma, which **provided strong skills in visual design, computer graphics, and UI/UX principles for front-end development**, I decided to switch my focus to programming due to a **cerebral palsy condition (CP)** that **affects physical and motor abilities** and limited the precision required for physical skills (like illustration). This allowed me to leverage my visual and analytical skills in front-end development. This career change has been entirely **self-taught**, and my foundational expertise in **HTML5 and CSS3 is established at a 76% proficiency level** (confirmed by an official Technical and Vocational certificate on **Jan 4, 2023 (1401/10/13)**), ensuring my ability to create robust user interfaces.\n\nCurrently, with the goal of international career development, I am learning German and planning to elevate my programming skills to the required level for immigration and work in Germany.\n\nBecause I have lacked access to a professional mentor to assign and guide challenging projects during this self-study period, I currently rely on my ability for **deep searching and rapid troubleshooting** to solve challenges while working with **JavaScript** and **WordPress/PHP**. This approach has strengthened my vital skill of **independent problem-solving** and demonstrates my flexibility in facing unknowns.\n\nI am eagerly seeking a professional environment where I can rapidly elevate these programming skills to an excellent level by taking on hard and challenging projects, ultimately becoming a key asset in Full-Stack development.",
    education: [
        {
            degree: "Official Technical & Vocational Certificate (HTML5 & CSS3)",
            institution: "Isfahan Province Technical and Vocational Organization", 
            dates: "Jan 4, 2023",
            details: "Successfully completed advanced courses and obtained certification in responsive and standard web design. Emphasis on accessibility standards and performance optimization."
        },
        {
            degree: "Computer Diploma (Digital Illustration)",
            institution: "Taha School, District 2 Isfahan", 
            dates: "Sep 5, 2021", 
            details: "Obtained a diploma specializing in Digital Illustration, which provided the foundation for strong skills in visual design, computer graphics, and UI/UX principles for front-end development."
        }
    ],
    quantifiableSkills: [
        { name: "HTML5 & CSS3", level: 76, description: "Professional in responsive and modern design (Certified by Technical & Vocational Organization)" },
        { name: "JavaScript", level: 50, description: "Intermediate proficiency and familiar with advanced concepts; requires research for complex projects." }, 
        { name: "WordPress & PHP", level: 34, description: "Familiar with simple theme and plugin development in WordPress; requires research for troubleshooting." }, 
    ],
    skills: { frontend: [], backend: [], devops: [] },
    languages: [
        { name: "Persian (Farsi)", proficiency: "Native", details: "Full proficiency in speaking, writing, and comprehension." },
        { 
            name: "English", 
            proficiency: "Basic / Intermediate", 
            details: "Listening: Full. Writing: Intermediate (3/5). Speaking: Basic (2.5/5). Capable of understanding technical texts and writing simple emails." 
        },
        {
            name: "German",
            proficiency: "Learning (A1 Level)",
            details: "Eager to learn German with the goal of working and living in Germany. Currently acquiring basic skills (Grammar and basic vocabulary)."
        }
    ]
};

// --- SVG Icons (No change needed) ---
const icons = {
    Mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    MapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 8-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    Github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c1.7-.1 3.4-.6 3.4-3.8 0-1.1-.3-2-1-2.7.1-.3.4-1.2 0-2.8 0 0-1.2-.3-4 1.1A11.37 11.37 0 0 0 12 7.5c-1.2 0-2.3.2-3.4.5C5.2 6.5 4 6.8 4 6.8c-.4 1.6-.1 2.5 0 2.8-.7.7-1 1.6-1 2.7 0 3.2 1.7 3.7 3.4 3.8-.2.2-.4.7-.4 1.3v4"/><circle cx="12" cy="12" r="10"/></svg>`,
    Briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    GraduationCap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M22 16v4M2 16v4M12 20v-4"/></svg>`,
    Code: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14 4-4 16"/></svg>`,
    User: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    Globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
};

// --- Helper function for section headers (Using section-header class in CSS) ---
const createSectionHeader = (iconName, title) => {
    return `
        <h2 class="section-header">
            <span class="header-icon">${icons[iconName]}</span>
            ${title}
        </h2>
    `;
};

// --- Renderer Functions ---

function renderHeader() {
    const contactItems = [
        { icon: 'Mail', text: resumeData.personal.email, href: `mailto:${resumeData.personal.email}` },
        { icon: 'MapPin', text: resumeData.personal.location, href: "#" },
        { icon: 'Github', text: resumeData.personal.github, href: `https://${resumeData.personal.github}` },
    ].filter(item => item.text); 

    const contactHtml = contactItems.map(item => `
        <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="contact-item">
            <span>${icons[item.icon]}</span>
            <span class="text-left">${item.text}</span> 
        </a>
    `).join('');

    return `
        <header>
            <div class="header-content">
                
                <div class="profile-info">
                    <h1>${resumeData.personal.name}</h1>
                    <p>${resumeData.personal.title}</p>
                </div>

                <div class="profile-image-container">
                    <img 
                        src="${resumeData.personal.photoUrl}" 
                        alt="Profile Picture of ${resumeData.personal.name}" 
                        class="profile-image" 
                        onerror="this.onerror=null;this.src='https://placehold.co/120x120/cccccc/333333?text=N/A';"
                    >
                </div>
                
            </div>
            
            <div class="contact-grid">
                ${contactHtml}
            </div>
        </header>
    `;
}

function renderSummaryAndAboutMe() {
    const aboutMeSection = `
        <section class="section-about" style="text-align: left;">
            ${createSectionHeader('User', 'About Me')} 
            
            <p class="about-me-text">
                ${resumeData.aboutMe}
            </p>
            
        </section>
    `;

    return `
        <section class="section-summary" style="text-align: left;">
            ${createSectionHeader('Briefcase', 'Career Summary and Goals')}
            <p class="summary-box">
                ${resumeData.summary}
            </p>
        </section>
        ${aboutMeSection}
    `;
}

function renderSkills() {
    const skillsHtml = resumeData.quantifiableSkills.map(skill => `
        <div class="skill-item">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="progress-bar-container">
                <div 
                    class="progress-bar"
                    style="width: ${skill.level}%;"
                ></div>
            </div>
            <p class="skill-description">${skill.description}</p>
        </div>
    `).join('');

    return `
        <section class="section-skills" style="text-align: left;">
            ${createSectionHeader('Code', 'Technical Skills')}
            <div class="skills-grid">
                ${skillsHtml}
            </div>
        </section>
    `;
}

function renderLanguages() {
    const languagesHtml = resumeData.languages.map(lang => `
        <div class="language-item">
            <div class="language-header">
                <h3 class="language-degree">${lang.name}</h3>
                <p>${lang.proficiency}</p>
            </div>
            <p class="language-details">${lang.details}</p>
        </div>
    `).join('');

    return `
        <section class="section-languages" style="text-align: left;">
            ${createSectionHeader('Globe', 'Languages')}
            <div class="languages-grid">
                ${languagesHtml}
            </div>
        </section>
    `;
}

function renderEducation() {
    const educationHtml = resumeData.education.map(item => `
        <div class="education-item">
            <div class="education-header">
                <div>
                    <h3 class="education-degree">${item.degree}</h3>
                    <p class="education-institution">${item.institution}</p>
                </div>
                <p class="education-dates">${item.dates}</p>
            </div>
            <p class="education-details">${item.details}</p>
        </div>
    `).join('');

    return `
        <section class="section-education" style="text-align: left;">
            ${createSectionHeader('GraduationCap', 'Education')}
            <div class="education-list">
                ${educationHtml}
            </div>
        </section>
    `;
}

// --- Main Rendering Function ---
function renderResume() {
    const container = document.getElementById('resume-container');
    if (!container) return;
    
    container.innerHTML = 
        renderHeader() +
        renderSummaryAndAboutMe() +
        renderSkills() +
        renderLanguages() +
        renderEducation() +
        `
        <footer>
            <p>This document is designed for professional presentation.</p>
        </footer>
        `;
}

// Execute renderer after the page loads
window.onload = renderResume;