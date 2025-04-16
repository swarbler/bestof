if (!document.cookie) {
    document.cookie = "green";
}

var r = document.querySelector(':root');

if (document.cookie == "green") {
    r.style.setProperty('--base-background-color', '#f5ffe0');
    r.style.setProperty('--base-text-color', '#8d9b70');
    r.style.setProperty('--big-header-text-color', '#727f59');
    r.style.setProperty('--header-text-color', '#727e59');
    r.style.setProperty('--link-text-color', '#a0b27d');
    r.style.setProperty('--link-text-color-noclass', '#c1d49a');
    r.style.setProperty('--navlink-text-color', '#a7b689');
    r.style.setProperty('--navlink-expander-color', '#a1b181');
    r.style.setProperty('--italics-and-footer-text-color', '#7e8c62');
    r.style.setProperty('--border-color', '#ebfdc3');
    r.style.setProperty('--sidebar-background-color', '#f2ffd7');
    r.style.setProperty('--gradient', 'linear-gradient(-90deg, #f0ffd2 0%, #eafacbcc 100%)');
    r.style.setProperty('--gradient-with-transparency', 'linear-gradient(#f0ffd2 0%, #eafacbcc 80%, #e3fab600 100%)');
    r.style.setProperty('--searchbox-background-color', '#f5ffe0');
    r.style.setProperty('--search-result-background-color-hover', '#f0ffd2');
    r.style.setProperty('--search-icon-color', '#808b69');
    r.style.setProperty('--search-result-icon-color', '#76815e');
    r.style.setProperty('--search-result-icon-color-focus', '#9fa88a');
}
else if (document.cookie = "high-contrast") {
    r.style.setProperty('--base-background-color', '#fff');
    r.style.setProperty('--base-text-color', '#000');
    r.style.setProperty('--big-header-text-color', '#000');
    r.style.setProperty('--header-text-color', '#000');
    r.style.setProperty('--link-text-color', '#000');
    r.style.setProperty('--link-text-color-noclass', '#31f');
    r.style.setProperty('--link-text-color-noclass-hover', '#30d');
    r.style.setProperty('--navlink-text-color', '#000');
    r.style.setProperty('--navlink-expander-color', '#000');
    r.style.setProperty('--italics-and-footer-text-color', '#000');
    r.style.setProperty('--border-color', '#ccc');
    r.style.setProperty('--sidebar-background-color', '#ddd');
    r.style.setProperty('--gradient', 'linear-gradient(-90deg, #eee 0%, #fff 100%)');
    r.style.setProperty('--gradient-with-transparency', 'linear-gradient(#eee 0%, #fff 80%, #fff0 100%)');
    r.style.setProperty('--searchbox-background-color', '#fff');
    r.style.setProperty('--search-result-background-color-hover', '#ccc');
    r.style.setProperty('--search-icon-color', '#000');
    r.style.setProperty('--search-result-icon-color', '#000');
    r.style.setProperty('--search-result-icon-color-focus', '#555');
}

function changeTheme() {
    if (document.cookie == "high-contrast") {
        r.style.setProperty('--base-background-color', '#f5ffe0');
        r.style.setProperty('--base-text-color', '#8d9b70');
        r.style.setProperty('--big-header-text-color', '#727f59');
        r.style.setProperty('--header-text-color', '#727e59');
        r.style.setProperty('--link-text-color', '#a0b27d');
        r.style.setProperty('--link-text-color-noclass', '#c1d49a');
        r.style.setProperty('--navlink-text-color', '#a7b689');
        r.style.setProperty('--navlink-expander-color', '#a1b181');
        r.style.setProperty('--italics-and-footer-text-color', '#7e8c62');
        r.style.setProperty('--border-color', '#ebfdc3');
        r.style.setProperty('--sidebar-background-color', '#f2ffd7');
        r.style.setProperty('--gradient', 'linear-gradient(-90deg, #f0ffd2 0%, #eafacbcc 100%)');
        r.style.setProperty('--gradient-with-transparency', 'linear-gradient(#f0ffd2 0%, #eafacbcc 80%, #e3fab600 100%)');
        r.style.setProperty('--searchbox-background-color', '#f5ffe0');
        r.style.setProperty('--search-result-background-color-hover', '#f0ffd2');
        r.style.setProperty('--search-icon-color', '#808b69');
        r.style.setProperty('--search-result-icon-color', '#76815e');
        r.style.setProperty('--search-result-icon-color-focus', '#9fa88a');

        document.cookie = "green"
    }
    else if (document.cookie = "green") {
        r.style.setProperty('--base-background-color', '#fff');
        r.style.setProperty('--base-text-color', '#000');
        r.style.setProperty('--big-header-text-color', '#000');
        r.style.setProperty('--header-text-color', '#000');
        r.style.setProperty('--link-text-color', '#000');
        r.style.setProperty('--link-text-color-noclass', '#31f');
        r.style.setProperty('--link-text-color-noclass-hover', '#30d');
        r.style.setProperty('--navlink-text-color', '#000');
        r.style.setProperty('--navlink-expander-color', '#000');
        r.style.setProperty('--italics-and-footer-text-color', '#000');
        r.style.setProperty('--border-color', '#ccc');
        r.style.setProperty('--sidebar-background-color', '#ddd');
        r.style.setProperty('--gradient', 'linear-gradient(-90deg, #eee 0%, #fff 100%)');
        r.style.setProperty('--gradient-with-transparency', 'linear-gradient(#eee 0%, #fff 80%, #fff0 100%)');
        r.style.setProperty('--searchbox-background-color', '#fff');
        r.style.setProperty('--search-result-background-color-hover', '#ccc');
        r.style.setProperty('--search-icon-color', '#000');
        r.style.setProperty('--search-result-icon-color', '#000');
        r.style.setProperty('--search-result-icon-color-focus', '#555');

        document.cookie = "high-contrast"
    }

    location.reload;
}

