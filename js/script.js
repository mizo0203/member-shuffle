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
