function inputNilai() {
    const jumlahMapel = document.getElementById('jumlahMapel').value; //const jumlahMapel: Mengambil nilai dari input jumlah mata pelajaran.
    const inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = '';  //inputFields.innerHTML = '';: Menghapus konten sebelumnya untuk memastikan tidak ada input yang tertinggal.

    // Validasi jumlah mata pelajaran
    if (isNaN(jumlahMapel) || jumlahMapel <= 0) {
        alert('Masukan jumlah mata pelajaran yang valid.');
        return;
        //Memeriksa apakah nilai jumlahMapel adalah angka yang valid dan positif. Jika tidak, tampilkan alert dan hentikan fungsi.
    }


    //Menambahkan Input untuk Setiap Mata Pelajaran:
    let count = 0;
    while (count < jumlahMapel) {
        inputFields.innerHTML += `<label for="nilai${count}">Nilai Mata Pelajaran ${count + 1}:</label>
                                  <input type="number" id="nilai${count}" min="0" max="100"><br>`;
        count++;
    }

    //Menampilkan Input Nilai:
    document.getElementById('nilaiInputs').style.display = 'block';
    
     //while (count < jumlahMapel): Loop untuk membuat input nilai untuk setiap mata pelajaran berdasarkan jumlah yang dimasukkan.
     //inputFields.innerHTML +=: Menambahkan elemen input untuk setiap mata pelajaran ke dalam inputFields.
    //style.display = 'block': Menampilkan bagian input nilai setelah jumlah mata pelajaran dimasukkan.
}

function hitungRataRata() {
    const jumlahMapel = document.getElementById('jumlahMapel').value; //pengambilan jumlah mapel
    let totalNilai = 0; //digunakan untuk menyimpan total dari semua nilai yang dimasukkan,
    let count = 0;

    while (count < jumlahMapel) {
        const nilai = parseFloat(document.getElementById(`nilai${count}`).value);
        // Validasi nilai
        if (isNaN(nilai) || nilai < 0 || nilai > 100) {
            alert(`Nilai untuk mata pelajaran ${count + 1} tidak valid. Harap masukkan nilai antara 0 dan 100.`);
            return;
        }
        totalNilai += nilai;
        count++;
    }

    //Menghitung Rata-Rata:
    const rataRata = totalNilai / jumlahMapel; //Setelah semua nilai dijumlahkan, hitung rata-rata dengan membagi totalNilai dengan jumlahMapel.
    let grade;

    // Tentukan grade
    if (rataRata >= 90) {
        grade = 'A';
    } else if (rataRata >= 70) {
        grade = 'B';
    } else {
        grade = 'C';
    }

    // Tampilkan hasil
    document.getElementById('rataRata').innerText = `Nilai Rata-Rata: ${rataRata.toFixed(2)}`; //toFixed(2) digunakan untuk membatasi angka desimal menjadi dua tempat.
    document.getElementById('grade').innerText = `Grade: ${grade}`;
    document.getElementById('hasil').style.display = 'block';
}

function resetInput() {
    document.getElementById('jumlahMapel').value = '';
    document.getElementById('inputFields').innerHTML = '';
    document.getElementById('nilaiInputs').style.display = 'none';
    document.getElementById('hasil').style.display = 'none';
}