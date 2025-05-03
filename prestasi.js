// Data prestasi semester genap
const prestasiGenapData = [
    {
        no: 1,
        nama: "Ahmad",
        kelas: "XI.5",
        namaLomba: "OSN Matematika",
        juara: "Juara 1",
        tingkat: "Nasional",
        penyelenggara: "Kemendikbud",
        tempat: "Jakarta, 15 Juni 2024"
    }
    // Tambahkan data prestasi lainnya di sini
];

function showSemester(semester) {
    // Toggle active class pada button
    document.querySelectorAll('.semester-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Toggle tampilan konten semester
    const ganjilContent = document.getElementById('semester-ganjil');
    const genapContent = document.getElementById('semester-genap');

    if (semester === 'ganjil') {
        ganjilContent.style.display = 'block';
        genapContent.style.display = 'none';
    } else {
        ganjilContent.style.display = 'none';
        genapContent.style.display = 'block';
    }
}

function loadGenapData() {
    const tbody = document.getElementById('genap-tbody');
    tbody.innerHTML = '';

    prestasiGenapData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.no}</td>
            <td>${data.nama}</td>
            <td>${data.kelas}</td>
            <td>${data.namaLomba}</td>
            <td>${data.juara}</td>
            <td><span class="badge ${data.tingkat.toLowerCase()}">${data.tingkat}</span></td>
            <td>${data.penyelenggara}</td>
            <td>${data.tempat}</td>
        `;
        tbody.appendChild(row);
    });
}