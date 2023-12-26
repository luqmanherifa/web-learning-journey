//memasukkan angka
function insert(number) {
    document.form.textarea.value = document.form.textarea.value + number;
}

//menghitung
function equal() {
    var result = document.form.textarea.value;
    document.form.textarea.value = eval(result);
}

//menghapus angka
function back() {
    var result = document.form.textarea.value;
    document.form.textarea.value = result.substring(0, result.length - 1);
}

//menghapus semua
function clean() {
    document.form.textarea.value = "";
}