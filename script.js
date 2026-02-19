// Configure marked options
marked.setOptions({
	breaks: true,
	gfm: true,
	headerIds: true,
	mangle: false,
});

// State management
let currentFile = "README.md";

// Load markdown file and render
async function loadMarkdown(filePath) {
	const contentDiv = document.getElementById("markdown-content");

	try {
		contentDiv.innerHTML = '<div class="loading">Loading...</div>';

		const response = await fetch(filePath);
		if (!response.ok) {
			throw new Error(`Failed to load ${filePath}`);
		}

		const markdown = await response.text();
		const html = marked.parse(markdown);
		contentDiv.innerHTML = html;

		// Update active nav link
		updateActiveNavLink(filePath);

		// Scroll to top
		window.scrollTo(0, 0);

		// Update current file
		currentFile = filePath;
	} catch (error) {
		console.error("Error loading markdown:", error);
		contentDiv.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #999;">
                <h2>⚠️ Error Loading Document</h2>
                <p>Could not load: ${filePath}</p>
                <p style="font-size: 0.9em; color: #ccc;">${error.message}</p>
            </div>
        `;
	}
}

// Update active navigation link
function updateActiveNavLink(filePath) {
	const navLinks = document.querySelectorAll(".nav-link");
	navLinks.forEach((link) => {
		const linkFile = link.getAttribute("data-file");
		if (linkFile === filePath) {
			link.classList.add("active");
		} else {
			link.classList.remove("active");
		}
	});
}

// Initialize navigation
function initNavigation() {
	const navLinks = document.querySelectorAll(".nav-link");

	navLinks.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			const filePath = link.getAttribute("data-file");
			loadMarkdown(filePath);

			// Update URL hash without scrolling
			history.pushState(null, null, `#${filePath}`);
		});
	});
}

// Handle browser back/forward buttons
window.addEventListener("popstate", () => {
	const hash = window.location.hash.substring(1);
	if (hash) {
		loadMarkdown(hash);
	} else {
		loadMarkdown("README.md");
	}
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
	initNavigation();

	// Load initial page from URL hash or default to README
	const hash = window.location.hash.substring(1);
	const initialFile = hash || "README.md";
	loadMarkdown(initialFile);
});

// Add search functionality (optional enhancement)
function addSearchFunctionality() {
	// You can add a search feature here if needed
	console.log("Search functionality can be added here");
}
