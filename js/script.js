const num = Number(getParams()['num']);
if (num > 0) {
    window.addEventListener('DOMContentLoaded', () => {
        let html = '';
        for (let n = 1; n <= num; n++) {
            html += '<div class="field">';
            html += '    <div class="control">';
            html += '        <input class="input" input name="names" placeholder="' + n + ' 人目" type="text">';
            html += '    </div>';
            html += '</div>';
        }
        document.getElementById('names').innerHTML += html;
    });
} else {
    // Redirect
    window.location.href = window.location.protocol + '//' + window.location.pathname + '?num=12';
}

function shuffle() {
    const names = [];
    for (const name of document.getElementsByName('names')) {
        names.push(name.value);
    }
    const shuffled_names = [];
    while (names.length > 0) {
        const index = Math.floor(Math.random() * Math.floor(names.length));
        const name = names[index].trim();
        if (name != '') {
            shuffled_names.push(name);
        }
        names.splice(index, 1);
    }
    document.getElementById('shuffled_names').innerHTML = '';
    const element = document.getElementById('shuffled_names');
    element.innerHTML = '';
    for (const shuffled_name of shuffled_names) {
        element.innerHTML += '<li><strong>' + shuffled_name + '</strong></li>\n';
    }
}

/**
 * GET パラメータを取得
 * 
 * https://techacademy.jp/magazine/25659
 */
function getParams() {
    const queryObject = new Object();
    if (window.location.search) {
        window.location.search.substring(1).split('&').forEach(parameter => {
            const element = parameter.split('=');
            const paramName = decodeURIComponent(element[0]);
            const paramValue = decodeURIComponent(element[1]);
            queryObject[paramName] = paramValue;
        });
    }
    return queryObject;
}
