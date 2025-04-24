// 1. Hitung Jumlah Bilangan Ganjil
function hitungBilanganGanjil(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      total++;
    }
  }
  return total;
}
console.log(`1. Hitung Jumlah Bilangan Ganjil`);
console.log(hitungBilanganGanjil(10));
console.log(hitungBilanganGanjil(20));

// 2. Cek Tahun Kabisat
function cekTahunKabisat(tahun) {
  return tahun % 4 === 0;
}
console.log(`2. Cek Tahun Kabisat`);
console.log(cekTahunKabisat(2000));
console.log(cekTahunKabisat(2023));

// 3. Hitung Faktorial
function hitungFaktorial(n) {
  let total = 1;
  for (let i = n; i > 1; i--) {
    total *= i;
  }
  return total;
}
console.log(`3. Hitung Faktorial`);
console.log(hitungFaktorial(5));
console.log(hitungFaktorial(0));

// 4. Cari Bilangan Prima
function cariBilanganPrima(n) {
  const hasil = [];

  for (let i = 2; i <= n; i++) {
    let prima = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        prima = false;
        break;
      }
    }

    if (prima) {
      hasil.push(i);
    }
  }

  return hasil;
}
console.log(`4. Cari Bilangan Prima`);
console.log(cariBilanganPrima(20));

// 5. Hitung Jumlah Digit
function hitungJumlahDigit(angka) {
  const strAngka = angka.toString();
  let total = 0;

  for (const element of strAngka) {
    total += parseInt(element);
  }

  return total;
}
console.log(`5. Hitung Jumlah Digit`);
console.log(hitungJumlahDigit(12345));
console.log(hitungJumlahDigit(9876));

// 6. Cek Palindrome
function cekPalindrome(kata) {
  return kata === kata.split("").reverse().join("");
}
console.log(`6. Cek Palindrome`);
console.log(cekPalindrome("katak"));
console.log(cekPalindrome("malam"));
console.log(cekPalindrome("hello"));

// 7. Hitung Pangkat
function hitungPangkat(angka, pangkat) {
  return Math.pow(angka, pangkat);
}
console.log(`7. Hitung Pangkat`);
console.log(hitungPangkat(2, 3));
console.log(hitungPangkat(5, 2));

// 8. Cari Bilangan Fibonacci
function cariBilanganFibonacci(n) {
  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}
console.log(`8. Cari Bilangan Fibonacci`);
console.log(cariBilanganFibonacci(8));

// 9. Hitung Jumlah Kata
function hitungJumlahKata(kalimat) {
  return kalimat.split(" ").length;
}
console.log(`9. Hitung Jumlah Kata`);
console.log(hitungJumlahKata("Saya suka belajar JavaScript"));

// 10. Cari Bilangan Terbesar
function cariBilanganTerbesar(arr) {
  return Math.max(...arr);
}
console.log(`10. Cari Bilangan Terbesar`);
console.log(cariBilanganTerbesar([3, 7, 2, 9, 1]));

// 11. Hitung Rata-rata
function hitungRataRata(arr) {
  return arr.reduce((total, num) => total + num, 0) / arr.length;
}
console.log(`11. Hitung Rata-rata`);
console.log(hitungRataRata([1, 2, 3, 4, 5]));

// 12. Hitung Jumlah Vokal
function hitungJumlahVokal(kalimat) {
  const vokal = "aiueoAIUEO";
  let total = 0;

  for (const char of kalimat) {
    if (vokal.includes(char)) {
      total++;
    }
  }

  return total;
}
console.log(`12. Hitung Jumlah Vokal`);
console.log(hitungJumlahVokal("JavaScript"));

// 13. Cari Faktor Bilangan
function cariFaktorBilangan(n) {
  const faktor = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      faktor.push(i);
    }
  }

  return faktor;
}
console.log(`13. Cari Faktor Bilangan`);
console.log(cariFaktorBilangan(12));

// 14. Konversi Suhu
function konversiSuhu(suhu, jenis) {
  if (jenis === "C") {
    return `${suhu * 1.8 + 32} (Fahrenheit)`;
  } else if (jenis === "F") {
    return `${(suhu - 32) / 1.8} (Celsius)`;
  } else {
    return suhu;
  }
}
console.log(`14. Konversi Suhu`);
console.log(konversiSuhu(30, "C"));
console.log(konversiSuhu(86, "F"));

// 15. Hitung Jumlah Karakter Unik
function hitungJumlahKarakterUnik(kalimat) {
  return [...new Set(kalimat)].length;
}
console.log(`15. Hitung Jumlah Karakter Unik`);
console.log(hitungJumlahKarakterUnik("hello world"));

// 16. Hitung Jumlah Kemunculan Kata
function hitungJumlahKemunculanKata(kalimat, kata) {
  return kalimat.split(" ").filter((word) => word === kata).length;
}
console.log(`16. Hitung Jumlah Kemunculan Kata`);
console.log(
  hitungJumlahKemunculanKata(
    "Saya suka makan nasi, saya juga suka minum air",
    "suka"
  )
);

// 17. Cari Bilangan Ganjil Terbesar
function cariBilanganGanjilTerbesar(arr) {
  return Math.max(...arr.filter((num) => num % 2 === 1));
}
console.log(`17. Cari Bilangan Ganjil Terbesar`);
console.log(cariBilanganGanjilTerbesar([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 18. Hitung Jumlah Digit Genap
function hitungJumlahDigitGenap(angka) {
  const strAngka = angka.toString();
  return strAngka.split("").filter((char) => Number(char) % 2 === 0).length;
}
console.log(`18. Hitung Jumlah Digit Genap`);
console.log(hitungJumlahDigitGenap(1234567890));

// 19. Cek Anagram
function cekAnagram(kata1, kata2) {
  return kata1.split("").sort().join("") === kata2.split("").sort().join("");
}
console.log(`19. Cek Anagram`);
console.log(cekAnagram("listen", "silent"));
console.log(cekAnagram("hello", "world"));

// 20. Hitung Jumlah Huruf Kapital
function hitungJumlahHurufKapital(kalimat) {
  return kalimat
    .split("")
    .filter((char) => char === char.toUpperCase())
    .filter((char) => char !== " ").length;
}
console.log(`20. Hitung Jumlah Huruf Kapital`);
console.log(hitungJumlahHurufKapital("Saya Belajar JavaScript Di DICODING"));

// 21. Cari Bilangan yang Hilang
function cariBilanganHilang(arr) {
  const min = arr[0];
  const max = arr[arr.length - 1];

  for (let i = min; i <= max; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}
console.log(`21. Cari Bilangan yang Hilang`);
console.log(cariBilanganHilang([1, 2, 3, 5, 6, 7]));

// 22. Hitung Jumlah Hari
function hitungJumlahHari(tanggal1, tanggal2) {
  const tgl1 = new Date(tanggal1);
  const tgl2 = new Date(tanggal2);
  const selisih = Math.abs(tgl2 - tgl1);
  const jumlahHari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  return jumlahHari;
}
console.log(`22. Hitung Jumlah Hari`);
console.log(hitungJumlahHari("2023-01-01", "2023-12-31"));

// 23. Hitung Jumlah Kata Unik
function hitungKataUnik(kalimat) {
  return new Set(kalimat.split(" ")).size;
}
console.log(`23. Hitung Jumlah Kata Unik`);
console.log(hitungKataUnik("Saya suka makan nasi suka minum air"));

// 24. Cari Bilangan Yang Muncul Sekali
function cariBilanganMunculSekali(arr) {
  const frekuensi = {};

  arr.forEach((num) => {
    frekuensi[num] = (frekuensi[num] || 0) + 1;
  });

  return Object.keys(frekuensi)
    .filter((num) => frekuensi[num] === 1)
    .map(Number);
}
console.log(`24. Cari Bilangan Yang Muncul Sekali`);
console.log(cariBilanganMunculSekali([1, 2, 2, 3, 3, 4, 5, 5]));

// 25. Hitung Jumlah Kemunculan Karakter
function hitungKemunculanKarakter(str) {
  const hasil = {};

  for (const char of str) {
    hasil[char] = (hasil[char] || 0) + 1;
  }

  return hasil;
}
console.log(`25. Hitung Jumlah Kemunculan Karakter`);
console.log(hitungKemunculanKarakter("hello world"));

// 26. Hitung Jumlah Kombinasi
function faktorial(x) {
  if (x === 0 || x === 1) return 1;
  return x * faktorial(x - 1);
}

function hitungKombinasi(n, r) {
  if (r > n) return 0;
  return faktorial(n) / (faktorial(r) * faktorial(n - r));
}
console.log(`26. Hitung Jumlah Kombinasi`);
console.log(hitungKombinasi(5, 2));
console.log(hitungKombinasi(10, 3));
