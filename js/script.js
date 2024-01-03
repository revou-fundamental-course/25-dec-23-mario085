function showLuasSection() {
    document.getElementById("kelilingSection").style.display = "none";
    document.getElementById("luasSection").style.display = "block";
}

function showKelilingSection() {
    document.getElementById("kelilingSection").style.display = "block";
    document.getElementById("luasSection").style.display = "none";
}

function hitungLuas() {
    // Mendapatkan nilai sisi dari input
    var alas = parseFloat(document.getElementById("base").value);
    var tinggi = parseFloat(document.getElementById("height").value);

    // Menghitung keliling segitiga
    var luas = 0.5 * alas * tinggi;

    // Menampilkan hasil
    document.getElementById("alas").innerHTML = + alas;
    document.getElementById("tinggi").innerHTML = "* " + tinggi;
    document.getElementById("result-luas").innerHTML = + luas;
    document.getElementById("result-luas2").innerHTML = + luas;
}

function hitungKeliling() {
    // Mendapatkan nilai sisi dari input
    var sideA = parseFloat(document.getElementById("sisiA").value);
    var sideB = parseFloat(document.getElementById("sisiB").value);
    var sideC = parseFloat(document.getElementById("sisiC").value);

    // Menghitung keliling segitiga
    var keliling = sideA + sideB + sideC;

    // Menampilkan hasil
    document.getElementById("sisi1").innerHTML = + sideA;
    document.getElementById("sisi2").innerHTML = "+ " + sideB;
    document.getElementById("sisi3").innerHTML = "+ " + sideC;
    document.getElementById("result-keliling").innerHTML = + keliling;
    document.getElementById("result-keliling2").innerHTML = + keliling;
}

function validateHitungLuas() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;

    if (base === "" || height === "") {
        document.getElementById("luasErrorMessage").innerHTML = "Alas dan tinggi harus diisi.";
    } else {
        document.getElementById("luasErrorMessage").innerHTML = "";
        hitungLuas();
    }
}

function validateHitungKeliling() {
    var sideA = document.getElementById("sisiA").value;
    var sideB = document.getElementById("sisiB").value;
    var sideC = document.getElementById("sisiC").value;

    if (sideA === "" || sideB === "" || sideC === "") {
        document.getElementById("kelilingErrorMessage").innerHTML = "!! Sisi harus diisi. !!";
    } else {
        document.getElementById("kelilingErrorMessage").innerHTML = "";
        hitungKeliling();
    }
}

function resetCalculator() {

    // Clear form input values
    document.getElementById("base").value = "";
    document.getElementById("height").value = "";
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";


    document.getElementById("sisi1").innerHTML = "";
    document.getElementById("sisi2").innerHTML = "";
    document.getElementById("sisi3").innerHTML = "";
    document.getElementById("alas").innerHTML = "";
    document.getElementById("tinggi").innerHTML = "";


    // Clear result
    document.getElementById("result-keliling").innerHTML = "";
    document.getElementById("result-keliling2").innerHTML = "";
    document.getElementById("result-luas").innerHTML = "";
    document.getElementById("result-luas2").innerHTML = "";
}