function init_cse() {
    var cx = 'f2db1948f357f45d9';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
};

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
        if (event.key === 'Enter') {
            executeSearch();
        }
    });
}


function init() {
    init_cse();
    init_search_box();
}

if (document.readyState !== 'loading') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        init();
    });
}
