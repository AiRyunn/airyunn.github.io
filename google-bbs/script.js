function init_cse() {
    const cx = 'f2db1948f357f45d9';
    const gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    const s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
};

function init_title() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query !== null && query !== undefined && query !== '') {
        document.title = `${query} - Google BBS`;
      } else {
        document.title = 'Google BBS';
      }
}

function init_search_box() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    if (query !== null) {
        searchInput.value = decodeURIComponent(query);
    }

    function executeSearch() {
        const updatedQuery = searchInput.value;
        window.location.href = window.location.pathname + '?q=' + encodeURIComponent(updatedQuery);
    }

    searchButton.addEventListener('click', executeSearch);

    searchInput.addEventListener('keydown', function(event) {
        if (event.isComposing) {
            return;
        }
        if (event.key === 'Enter') {
            executeSearch();
        }
    });
}

function init() {
    init_cse();
    init_title();
    init_search_box();
}

if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', init);
}
