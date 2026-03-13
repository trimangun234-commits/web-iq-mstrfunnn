const questions = [
    // --- Bagian 1: Logika Kriptik & Pola Simbol ---
    {
        question: "Jika 5 + 3 = 28, 9 + 1 = 810, 8 + 6 = 214, dan 5 + 4 = 19. Maka berapakah hasil dari 7 + 3 ?",
        options: ["104", "410", "10", "41"],
        answer: 1 // 7-3=4, 7+3=10
    },
    {
        question: "Jika kata 'KUCING' disandikan sebagai 'LVDJOH' menggunakan suatu pola statis, bagaimana sandi untuk kata 'TIKUS'?",
        options: ["UJLVUT", "UHLVRT", "UJMWVU", "SHJTR"],
        answer: 0 // +1 alfabet
    },
    {
        question: "Huruf apa yang selanjutnya muncul pada deret alfabetik ini: A, C, F, J, O, ... ?",
        options: ["S", "T", "U", "V"],
        answer: 2 // +2, +3, +4, +5, +6=U
    },
    {
        question: "Berapa banyak angka 9 yang ada di antara angka 1 hingga 100?",
        options: ["10", "11", "19", "20"],
        answer: 3
    },
    {
        question: "Jika 1 = 5, 2 = 25, 3 = 125, 4 = 625, maka 5 = ?",
        options: ["1", "3125", "1025", "625"],
        answer: 0 // Trick question: 1=5 so 5=1
    },

    // --- Bagian 2: Penalaran Ruang & Waktu (Spasial) ---
    {
        question: "Berapa besar sudut terkecil yang dibentuk oleh jarum jam dan jarum menit tepat pada pukul 03:15 ?",
        options: ["0 derajat", "7.5 derajat", "15 derajat", "22.5 derajat"],
        answer: 1
    },
    {
        question: "Sebuah kubus 3x3x3 dicat merah pada seluruh permukaan luarnya, kemudian dipotong menjadi kubus-kubus kecil berukuran 1x1x1. Berapa banyak kubus kecil yang HANYA memiliki tepat SATU sisi berwarna merah?",
        options: ["4", "6", "8", "12"],
        answer: 1 // Centers of each face, 6 faces
    },
    {
        question: "Jika tanggal 17 Agustus pada suatu tahun (bukan tahun kabisat) jatuh pada hari Rabu, jatuh pada hari apa tanggal 1 Januari pada tahun berikutnya?",
        options: ["Jumat", "Sabtu", "Minggu", "Senin"],
        answer: 2
    },
    {
        question: "Sebuah pesawat terbang dari khatulistiwa lurus ke Utara sejauh 1000 km, lalu belok Timur 1000 km, lalu Selatan 1000 km, lalu Barat 1000 km. Di mana posisi pesawat sekarang dibandingkan titik awal?",
        options: ["Tepat di titik awal", "Sedikit di Barat titik awal", "Sedikit di Timur titik awal", "Slightly North of starting point"],
        answer: 1 // Earth's curvature means traveling East at a northern latitude covers more longitude degrees than at the equator. Heading South restores latitude but moving West on equator covers more distance, leaving it West.
    },
    {
        question: "Berapa kali dalam sehari (24 jam) jarum jam dan jarum menit menunjuk lurus berlawanan arah (membentuk 180 derajat)?",
        options: ["22 kali", "24 kali", "12 kali", "48 kali"],
        answer: 0 
    },

    // --- Bagian 3: Teka-Teki Logika & Silogisme ---
    {
        question: "Ada 3 kotak tertutup. Kotak 1 berlabel 'Apel', Kotak 2 berlabel 'Jeruk', Kotak 3 'Campuran'. Semua label dipastikan SALAH. Anda hanya boleh mengambil 1 buah dari 1 kotak untuk segera mengetahui isi ketiganya secara pasti. Dari kotak mana Anda harus mengambil buah uji coba pertama?",
        options: ["Kotak 'Apel'", "Kotak 'Jeruk'", "Kotak 'Campuran'", "Mustahil dipastikan"],
        answer: 2
    },
    {
        question: "X berlari lebih cepat dari Y. Z berlari lebih lambat dari W. Y berlari lebih tangkas dan cepat dari W. Siapakah yang berlari paling lambat?",
        options: ["X", "Y", "Z", "W"],
        answer: 2
    },
    {
        question: "Seorang ayah berumur 4 kali umur anaknya. Dalam 20 tahun, dia akan berumur 2 kali umur anaknya. Berapa umur ayah dan anak sekarang?",
        options: ["40 dan 10", "60 dan 15", "80 dan 20", "36 dan 9"],
        answer: 0
    },
    {
        question: "Dalam suatu balapan lari, Anda menyalip pelari di posisi kedua. Sekarang Anda berada di posisi ke berapa?",
        options: ["Pertama", "Kedua", "Ketiga", "Terakhir"],
        answer: 1
    },
    {
        question: "Kata mana yang tidak cocok dengan kelompok ini?",
        options: ["Pena", "Pensil", "Buku", "Spidol"],
        answer: 2
    },

    // --- Bagian 4: Matematika Pola Lanjut ---
    {
        question: "Angka berapa yang harusnya melengkapi deret berikut: 3, 4, 7, 12, 19, 28, ... ?",
        options: ["36", "37", "39", "41"],
        answer: 2 // differences are odd numbers 1,3,5,7,9,11 (28+11=39)
    },
    {
        question: "Lengkapi deret berikut: 2, 6, 12, 20, 30, ...",
        options: ["40", "42", "44", "46"],
        answer: 1 // n(n+1) -> 6x7 = 42
    },
    {
        question: "Sebuah botol dan tutupnya dihargai total Rp 11.000. Jika harga botol Rp 10.000 lebih mahal dari penutupnya, berapa harga tutup botol tersebut?",
        options: ["Rp 1.000", "Rp 500", "Rp 1.500", "Rp 100"],
        answer: 1
    },
    {
        question: "Berapakah setengah dari 2 pangkat 100?",
        options: ["1 pangkat 100", "2 pangkat 50", "2 pangkat 99", "1 pangkat 50"],
        answer: 2 // 2^100 / 2^1 = 2^99
    },
    {
        question: "Jika 3 kucing dapat menangkap 3 tikus dalam 3 menit, berapa banyak kucing yang dibutuhkan untuk menangkap 100 tikus dalam 100 menit?",
        options: ["100", "300", "3", "10"],
        answer: 2
    },

    // --- Bagian 5: Deduksi Kalimat ---
    {
        question: "Ali lebih tinggi dari Budi. Cica lebih pendek dari Ali, tapi lebih tinggi dari Budi. Siapa yang paling pendek?",
        options: ["Ali", "Budi", "Cica", "Tidak bisa ditentukan"],
        answer: 1
    },
    {
        question: "Jika hari ini adalah dua hari setelah hari sebelum kemarin, hari apakah 'besok' jika kemarin adalah hari Minggu?",
        options: ["Senin", "Selasa", "Rabu", "Kamis"],
        answer: 1 // Kemarin Minggu -> Hari ini Senin. Besok -> Selasa.
    },
    {
        question: "Seseorang pria menunjuk sebuah foto dan berkata, 'Ayah dari pria dalam foto ini adalah anak tunggal dari ayahku.' Siapakah pria dalam foto itu?",
        options: ["Dirinya sendiri", "Ayahnya", "Anaknya", "Saudaranya"],
        answer: 2
    },
    {
        question: "Mary memiliki 4 anak perempuan, dan masing-masing anak perempuan memiliki 1 saudara laki-laki. Berapa jumlah total anak Mary?",
        options: ["4", "5", "8", "9"],
        answer: 1 // They all share the same 1 brother.
    },
    {
        question: "Sebuah truk melaju menuju sebuah desa. Dalam perjalanannya, ia melewati 4 mobil yang melaju ke arah berlawanan. Berapa banyak kendaraan yang pergi menuju desa?",
        options: ["1", "4", "5", "Tidak bisa dipastikan"],
        answer: 0 // Only the truck
    },

    // --- Bagian 6: Logika Aritmatika ---
    {
        question: "Berapa hasil dari 8 ÷ 2(2 + 2)?",
        options: ["1", "16", "8", "4"],
        answer: 1 // 8 / 2 * 4 = 16
    },
    {
        question: "Sebuah jam dinding kehilangan 2 menit setiap jamnya. Jika dicocokkan pada jam 12 siang, jam berapa yang ditunjukkan jam dinding tersebut ketika waktu sebenarnya adalah jam 6 sore pada hari yang sama?",
        options: ["05:48", "06:12", "05:50", "05:58"],
        answer: 0 // 6 hours * 2 mins = 12 mins lost. 6:00 - 0:12 = 5:48
    },
    {
        question: "Jika Anda memiliki sumbu yang terbakar habis tepat dalam 60 menit, dan satu lagi yang terbakar habis dalam 30 menit (kecepatan pembakaran bervariasi), bagaimana Anda mengukur 45 menit?",
        options: ["Bakar sumbu 60 dari satu ujung dan sumbu 30 dari dua ujung", "Bakar sumbu 60 dari dua ujung dan sumbu 30 dari satu ujung", "Bakar sumbu 60 dari dua ujung. Saat habis, bakar sumbu 30 dari dua ujung", "Bakar sumbu 60 setengahnya saja"],
        answer: 2 // Bakar yg panjang dr dua sisi (jadi 30 mnt). Saat habis, bakar yg 30 menit dr dua sisi (15 mnt).
    },
    {
        question: "Berapakah 20% dari 30% dari 500?",
        options: ["15", "30", "50", "150"],
        answer: 1 // 0.2 * 0.3 * 500 = 30
    },
    {
        question: "Sebuah kolam ditutupi bunga teratai. Setiap hari, luas area bunga teratai berlipat ganda. Jika butuh 48 hari untuk menutupi seluruh kolam, pada hari keberapa kolam tertutup setengahnya?",
        options: ["H-24", "H-47", "H-12", "H-2"],
        answer: 1
    },

    // --- Bagian 7: Analogi Lanjut ---
    {
        question: "Otot : Kontraksi == Saraf : ?",
        options: ["Impuls", "Gerakan", "Pikiran", "Rangsangan"],
        answer: 0
    },
    {
        question: "Hipotesis : Eksperimen == Ramalan : ?",
        options: ["Ramalan Bintang", "Fakta", "Verifikasi", "Hasil"],
        answer: 2
    },
    {
        question: "Symphony : Komposer == Fresco : ?",
        options: ["Pelukis", "Penyair", "Pemusik", "Pemahat"],
        answer: 0
    },
    {
        question: "Pilihan : Keputusan == Deliberasi : ?",
        options: ["Tindakan", "Hukuman", "Kesimpulan", "Diskusi"],
        answer: 2
    },
    {
        question: "Mana dari berikut ini yang memiliki korelasi logika paling mirip dengan 'Epilog : Novel'?",
        options: ["Prolog : Drama", "Kesimpulan : Esai", "Indeks : Buku", "Kredit : Film"],
        answer: 3
    },

    // --- Bagian 8: Logika Situasional Ekstrim ---
    {
        question: "Sebuah tali dibentangkan ekuator bumi. Jika Anda menambahkan 1 meter pada tali tersebut dan menariknya menjauhi permukaan bumi secara merata ke seluruh arah, hewan mana yang bisa lewat di bawahnya?",
        options: ["Hanya semut", "Kucing", "Anjing", "Tidak ada yang muat"],
        answer: 1 // r = c/2pi. dr = 1/2pi = 0.159m = 16cm. Kucing bisa lewat.
    },
    {
        question: "Tiga orang check-in hotel seharga $30 ($10/orang). Manajer bilang harganya diskon jadi $25. Dia memberi belboy $5 untuk dikembalikan. Belboy diam-diam mengantongi $2 dan mengembalikan $1 ke setiap orang. 3 orang bayar $9 ($27 total). Belboy pegang $2. 27+2 = 29. Kemana hilangnya $1?",
        options: ["Dibebankan sebagai pajak", "Masuk ke kasir", "Manajer salah hitung", "Logikanya yang salah disusun"],
        answer: 3 // $27 includes the $2 bellboy kept. 27 + 25 = 52. Math is 25 (hotel) + 2 (bellboy) = 27 paid.
    },
    {
        question: "Anda butuh membawa Serigala, Kambing, dan Kubis menyeberangi sungai. Perahu hanya muat Anda + 1 barang. Jika ditinggal, Serigala makan Kambing, Kambing makan Kubis. Berapa kali minimal Anda harus MENYEBERANG (bolak-balik dihitung tunggal)?",
        options: ["5 kali", "7 kali", "9 kali", "8 kali"],
        answer: 1 // Bawa kambing, balik kosong, Bawa serigala, bawa KEMBALI kambing, bawa kubis, balik kosong, bawa kambing. Total 7.
    },
    {
        question: "Lampu terang mati di dalam ruang tertutup. Terdapat 3 saklar di luar. Anda hanya boleh masuk ruangan SATU kali. Bagaimana cara tahu pasti saklar mana yang mengontrol lampu itu?",
        options: ["Teka-teki ini tidak memiliki solusi logis", "Nyalakan saklar 1 lalu 2 bersamaan", "Nyalakan saklar 1 lima menit, matikan, nyalakan saklar 2 dan masuk lalu pegang bola lampunya", "Bongkar saklarnya untuk cek kabel"],
        answer: 2
    },
    {
        question: "Sebuah kereta menuju Paris bergerak kecepatan 100 km/j. Kereta dari Paris menyongsong kereta tersebut pada kecepatan 80 km/j. Pada saat mereka saling berpapasan, kereta manakah yang lebih dekat jaraknya ke Paris?",
        options: ["Kereta menuju Paris", "Kereta dari Paris", "Jaraknya sama", "Terbang tertiup angin"],
        answer: 2 // Saat berpapasan mereka berada di titik yang SAMA
    },

    // --- Bagian 9: Visual, Pola Baris & Alfabet ---
    {
        question: "Perhatikan kata ini: 'ELEPHANT'. Berapa banyak huruf yang muncul di tempat yang persis SAMA jika dibandingkan dengan abjad bahasa Inggris standar (A-B-C-D...)?",
        options: ["0", "1", "2", "3"],
        answer: 0
    },
    {
        question: "Urutan angka aneh: 8, 5, 4, 9, 1, 7, 6, 3, 2, 0. Pola apakah ini?",
        options: ["Angka prima dimajukan", "Urutan Alfabetik dalam bahasa Inggris", "Pengurangan pangkat", "Acak total"],
        answer: 1 // E, F, F, N, O, S, S, T, T, Z
    },
    {
        question: "Masukan deret ini: 11, 21, 1211, 111221, 312211, ... Angka berapakah selanjutnya?",
        options: ["13112221", "12112311", "311312", "1113122113"],
        answer: 0 // "Look and say" sequence
    },
    {
        question: "Sebuah rumah memiliki 4 jendela yang semuanya menghadap ke arah selatan. Seekor beruang lewat di depan rumah. Apa warna beruang tersebut?",
        options: ["Coklat", "Hitam", "Putih", "Tidak masuk akal"],
        answer: 2 // Kutub utara
    },
    {
        question: "Mana yang lebih berat: 100 kg bulu angsa atau 100 kg besi?",
        options: ["Besi", "Bulu", "Sama berat", "Tergantung gravitasi"],
        answer: 2
    },

    // --- Bagian 10: The Ultimate Riddles ---
    {
        question: "Siapa pembuatnya yang tidak menginginkannya, pembelinya yang tidak menggunakannya, dan penggunanya yang tidak menyadarinya?",
        options: ["Baju zirah", "Racun mematikan", "Peti mati", "Batu nisan"],
        answer: 2
    },
    {
        question: "Semakin banyak yang diambil dari saya, semakin besar ukuran saya. Siapakah saya?",
        options: ["Utang", "Lubang", "Waktu", "Umur"],
        answer: 1
    },
    {
        question: "Saya punya kota tapi tanpa rumah, hutan tanpa pohon, air tanpa ikan. Siapakah saya?",
        options: ["Bumi", "Peta", "Lukisan", "Mimpi"],
        answer: 1
    },
    {
        question: "Saya bisa dipecahkan tanpa pernah disentuh sama sekali. Apakah saya?",
        options: ["Kaca tipis", "Balon", "Janji", "Gendang telinga"],
        answer: 2
    },
    {
        question: "Apa singkatan dari huruf-huruf ini: S, D, T, E, L, E, T, D. Huruf apa selanjutnya?",
        options: ["S", "T", "O", "P"],
        answer: 0 // Satu, Dua, Tiga, Empat, Lima, Enam, Tujuh, Delapan, (Sembilan)
    },

    // --- Bagian 11: Ultimate Advanced Logical Scenarios ---
    {
        question: "Jika Anda melempar dua buah dadu bersisi enam, berapa total jumlah kemungkinan hasil yang dapat muncul yang menjadikan angkanya habis dibagi 3?",
        options: ["12 kemungkinan", "10 kemungkinan", "8 kemungkinan", "6 kemungkinan"],
        answer: 0 
    },
    {
        question: "Sebuah perusahaan memiliki 100 karyawan. 85 orang minum kopi, 80 orang minum teh, 75 orang minum susu, dan 70 orang minum jus jeruk. Berapa MINIMAL jumlah karyawan yang meminum KEEMPAT minuman tersebut?",
        options: ["10 orang", "15 orang", "5 orang", "0 orang"],
        answer: 0 
    },
    {
        question: "Anda butuh mengambil 4 liter air. Anda punya keran air tak terbatas, timba 3 liter, dan timba 5 liter (tanpa tanda ukur). Berapa langkah penuangan tersingkat untuk mendapatkan tepat 4 liter di dalam timba 5 liter?",
        options: ["4 langkah", "6 langkah", "8 langkah", "7 langkah"],
        answer: 1 
    },
    {
        question: "Seorang sandera ditawari kebebasan jika berhasil melihat mana pintu yang aman dari dua pilihan. Dua penjaga berdiri di sana: satu selalu jujur, satu selalu bohong. Anda hanya bisa bertanya SATU pertanyaan ke salah satu penjaga. Pertanyaan logis apa yang menjamin keselamatan Anda?",
        options: ["Apakah Anda pembohong?", "Pintu mana yang aman?", "Pintu mana yang akan ditunjuk temanmu jika kutanya pintu mana yang aman?", "Berapa umurmu?"],
        answer: 2 
    },
    {
        question: "Ada 8 bola biliar yang identik. Tujuh ukurannya sama beratnya, satu sedikit lebih berat. Berapa kali Anda harus menggunakan alat timbang neraca keseimbangan (balance scale) untuk SECARA PASTI menemukan bola malapetaka tersebut?",
        options: ["4 kali", "3 kali", "2 kali", "1 kali"],
        answer: 2 
    },
    {
        question: "Dalam sekelompok angsa, 1 angsa ada di depan 2 angsa, 1 angsa ada di belakang 2 angsa, dan 1 angsa ada di antara 2 angsa. Berapa jumlah minimal angsa dalam formasi ini?",
        options: ["5", "4", "3", "7"],
        answer: 2
    },
    {
        question: "Berapa banyak bulan dalam setahun yang memiliki 28 hari?",
        options: ["1 bulan", "Semua bulan", "Tidak ada (jika tahun kabisat)", "Hanya bulan Februari"],
        answer: 1 
    },
    {
        question: "Beberapa bulan memiliki 31 hari. Bulan manakah yang memiliki jumlah huruf paling sedikit dalam bahasa Inggris namun memiliki hari paling banyak dalam satu tahun?",
        options: ["May", "July", "Jun", "Aug"],
        answer: 0 
    },
    {
        question: "Di laci gelap gulita, ada 12 kaus kaki hitam dan 12 kaus kaki biru. Berapa minimal yang harus Anda cabut untuk memastikan Anda mendapatkan SEPANG kaus kaki dengan warna yang SAMA persis?",
        options: ["2", "13", "3", "25"],
        answer: 2 
    },
    {
        question: "Bila A = 1, B = 3, C = 5, dan D = 7. Maka nilai untuk H adalah?",
        options: ["11", "13", "15", "17"],
        answer: 2 
    }
];

// Anti-Cheat: Convert clear answers to obfuscated hashes upon initialization
// This ensures that `answer` property is deleted from the `questions` array in runtime memory
questions.forEach(q => {
    if (q.answer !== undefined) {
        q._h = btoa(q.answer.toString());
        delete q.answer;
    }
});

// Anti-Cheat: DevTools & Screenshot Protection
document.addEventListener('contextmenu', event => event.preventDefault());

let isScreenshotting = false;
function triggerAntiScreenshot() {
    if (isScreenshotting) return;
    isScreenshotting = true;
    document.body.classList.add('anti-screenshot-active');

    // Remove the blocking layer after a short delay (enough time to ruin the screenshot)
    setTimeout(() => {
        document.body.classList.remove('anti-screenshot-active');
        isScreenshotting = false;
    }, 1500);
}

document.addEventListener('keyup', (e) => {
    // Detect Print Screen key
    if (e.key === 'PrintScreen' || e.keyCode === 44) {
        triggerAntiScreenshot();
        navigator.clipboard.writeText('Screenshots are disabled for security reasons.');
    }
});

document.addEventListener('keydown', (e) => {
    // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.keyCode == 123 ||
        (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74)) ||
        (e.ctrlKey && e.keyCode == 85)) {
        e.preventDefault();
        return false;
    }

    // Detect Windows Snipping Tool (Win + Shift + S) -> Note: JS can't completely block OS-level tools,
    // but we can try to obscure it if they use the keyboard shortcut while the window focuses.
    if (e.shiftKey && (e.metaKey || e.key === 'Meta') && e.key === 'S' || e.key === 's') {
        triggerAntiScreenshot();
    }
    // Detect Mac screenshots (Cmd + Shift + 3 / Cmd + Shift + 4)
    if (e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4')) {
        triggerAntiScreenshot();
    }
});

// Optional: Blur the screen if the user clicks away to another window (like opening a snipping tool)
window.addEventListener('blur', () => {
    document.body.classList.add('anti-screenshot-active');
});
window.addEventListener('focus', () => {
    document.body.classList.remove('anti-screenshot-active');
});// Elements
const screens = {
    register: document.getElementById('register-screen'),
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    adminLogin: document.getElementById('admin-login-screen'),
    adminDashboard: document.getElementById('admin-dashboard-screen')
};

// Buttons
const registerForm = document.getElementById('register-form');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const optionsContainer = document.getElementById('options-container');

// Admin Buttons
const showAdminBtn = document.getElementById('show-admin-btn');
const adminSubmitBtn = document.getElementById('admin-submit-btn');
const backToHomeBtn = document.getElementById('back-to-home-btn');
const adminLogoutBtn = document.getElementById('admin-logout-btn');
const adminResetBtn = document.getElementById('admin-reset-btn');

// Theme Toggle Button
const themeToggleBtn = document.getElementById('theme-toggle');

// Display Elements
const questionText = document.getElementById('question-text');
const questionImage = document.getElementById('question-image');
const questionImageContainer = document.getElementById('question-image-container'); // Added this based on original quizUI
const questionCounter = document.getElementById('question-counter');
const progressFill = document.getElementById('progress-fill'); // Renamed from progressBar to match original
const finalScoreEl = document.getElementById('final-score');
const classificationEl = document.getElementById('iq-classification'); // Renamed from classification to match original
const resultDesc = document.getElementById('result-description'); // Added this based on original resultUI
const correctAnswersEl = document.getElementById('correct-answers');
const accuracyEl = document.getElementById('accuracy-rate'); // Renamed from accuracy to match original
const timeLeftEl = document.getElementById('time-left');
const timerBox = document.getElementById('timer-box');
const displayNameEl = document.getElementById('display-name');

// Audio Element
const bgMusic = new Audio('dramatic_music.mp3');
bgMusic.loop = true;

// State Variables
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval;
const TIME_LIMIT = 180; // 3 minutes per question
let timeRemaining = TIME_LIMIT;
let quizActive = false; // Add state to track if quiz is running for the exit alert
let isCheater = false; // Flag to instantly end tests
let highestScore = localStorage.getItem('webIq_highscore') || 0;
let typeWriterTimeout = null; // for text animation

// User Data State
let currentUser = {
    name: "",
    email: ""
};

let activeQuestions = []; // Stores the shuffled questions for the current session

// ---- Firebase init ----
let firebaseDB = null;
try {
    if (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey !== 'GANTI_API_KEY_KAMU') {
        firebase.initializeApp(window.FIREBASE_CONFIG);
        firebaseDB = firebase.database();
        console.log('Firebase connected ✅');
    } else {
        console.warn('Firebase config not set. Leaderboard disabled until firebase-config.js is filled.');
    }
} catch(e) {
    console.warn('Firebase init error:', e);
}

// Array Shuffle Helper (Fisher-Yates Algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Backend URL (Dynamic for local network access)
const API_URL = window.location.origin.includes('localhost') || window.location.origin.includes('192.168.') 
    ? `${window.location.origin}/api` 
    : 'http://localhost:3000/api'; // Fallback for file:// protocol testing

const SECRET_KEY = "WeBiQ_S3cr3t_2026"; // Must match backend

// Check for mid-test refreshing (Hardcore Anti-Cheat)
if (localStorage.getItem('webIq_activeTest') === 'true') {
    // If they reloaded the page while this was true, they cheated
    localStorage.removeItem('webIq_activeTest');

    // Recover user to submit to backend
    const savedUserStr = localStorage.getItem('webIq_user');
    if (savedUserStr) {
        try {
            const savedUser = JSON.parse(savedUserStr);
            if (savedUser.name && savedUser.email) {
                const cheatScore = 0;
                const cheatIq = 70;
                const signature = btoa(`${savedUser.name}:${cheatScore}:${cheatIq}:${SECRET_KEY}`);
                
                fetch(`${API_URL}/scores`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: savedUser.name,
                        email: savedUser.email,
                        score: cheatScore,
                        iq: cheatIq,
                        classification: 'Menyontek (Reload Browser)',
                        signature: signature
                    })
                }).catch(e => console.error(e));
            }
        } catch (e) { }
    }

    alert("PELANGGARAN FATAL: Cie di refersh (Skor 0).");
}

// Theme Logic
const savedTheme = localStorage.getItem('webIqTheme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeToggleBtn.textContent = '🌙';
} else {
    themeToggleBtn.textContent = '☀️';
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('webIqTheme', isLight ? 'light' : 'dark');
    themeToggleBtn.textContent = isLight ? '🌙' : '☀️';
});

// Registration Logic
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name').value.trim();
    const email = document.getElementById('user-email').value.trim();

    if (name && email) {
        currentUser = { name, email };
        localStorage.setItem('webIq_user', JSON.stringify(currentUser)); // Cache to catch reloads
        showScreen('start');
    }
});

// Functions
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function initQuiz() {
    // Reset state
    clearInterval(timerInterval);
    currentQuestionIndex = 0;
    score = 0;
    isCheater = false;
    
    // Randomize the questions for this session
    shuffleArray(questions);
    // Use all questions, but shuffled
    activeQuestions = [...questions];
    
    userAnswers = new Array(activeQuestions.length).fill(null);
    displayNameEl.textContent = currentUser.name || "Peserta";
    // Mark test as active (for reload cheat detection)
    localStorage.setItem('webIq_activeTest', 'true');
    quizActive = true;
    localStorage.setItem('webIq_user', JSON.stringify(currentUser));

    // Play Dramatic Music
    bgMusic.currentTime = 0;
    bgMusic.play().catch(e => console.log("Audio autoplay blocked:", e));

    // Request Fullscreen
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch((err) => {
            console.log(`Bypass Fullscreen: ${err.message}`);
        });
    }

    // Show quiz screen
    showScreen('quiz');
    loadQuestion();
}

function typeWriterEffect(element, text, speed = 15) {
    element.textContent = '';
    element.classList.add('typewriter-cursor');
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            typeWriterTimeout = setTimeout(typeWriter, speed);
        } else {
            element.classList.remove('typewriter-cursor');
        }
    }
    typeWriter();
}

function loadQuestion() {
    clearInterval(timerInterval);
    clearTimeout(typeWriterTimeout); // Clear previous typing if any
    
    const q = activeQuestions[currentQuestionIndex];
    // Start typewriter effect instead of instant text
    typeWriterEffect(questionText, q.question, 15);

    if (q.image) {
        questionImage.src = q.image;
        questionImageContainer.style.display = 'block';
    } else {
        questionImage.src = '';
        questionImageContainer.style.display = 'none';
    }

    questionCounter.textContent = `Pertanyaan ${currentQuestionIndex + 1} / ${activeQuestions.length}`;

    const progressPercent = ((currentQuestionIndex) / activeQuestions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.classList.add('slide-up-option'); // Add animation class
        btn.style.animationDelay = `${index * 0.1}s`; // Stagger animation
        if (userAnswers[currentQuestionIndex] === index) {
            btn.classList.add('selected');
        }

        btn.innerHTML = `<span style="font-weight: 800; color: var(--accent-glow); margin-right: 15px;">${String.fromCharCode(65 + index)}. </span> ${opt}`;

        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });

    updateNextButton();
    startTimer();
}

function startTimer() {
    timeRemaining = TIME_LIMIT;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timeLeftEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Low time visual warnings
    if (timeRemaining <= 60) {
        timerBox.classList.add('warning');
    } else {
        timerBox.classList.remove('warning');
    }

    if (timeRemaining <= 30) {
        timerBox.style.backgroundColor = 'var(--danger)';
        timerBox.style.color = '#fff';
        timerBox.style.animation = 'pulse 1s infinite';
    } else {
        timerBox.style.backgroundColor = '';
        timerBox.style.color = '';
        timerBox.style.animation = '';
    }

    // Exact 1-minute alert pop-up (only triggers exactly at 60 seconds)
    if (timeRemaining === 60) {
        alert("⚠️ Perhatian! Waktu Anda tersisa 1 menit lagi untuk pertanyaan ini.");
    }
    
    // Exact 30-second danger alert
    if (timeRemaining === 30) {
        alert("🚨 BAHAYA! Waktu kurang dari 30 Detik! Segera pilih jawaban Anda!");
    }
}

function handleTimeOut() {
    userAnswers[currentQuestionIndex] = null; // Mark as unanswered/wrong
    if (currentQuestionIndex < activeQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        calculateResult();
    }
}

function selectOption(index, btnElement) {
    userAnswers[currentQuestionIndex] = index;

    // Update UI
    Array.from(optionsContainer.children).forEach(btn => btn.classList.remove('selected'));
    btnElement.classList.add('selected');

    updateNextButton();
}

function updateNextButton() {
    const nextBtn = document.getElementById('next-btn'); // Get next button here
    if (userAnswers[currentQuestionIndex] !== null) {
        nextBtn.disabled = false;
        if (currentQuestionIndex === activeQuestions.length - 1) {
            nextBtn.textContent = 'Selesai & Lihat Hasil';
        } else {
            nextBtn.textContent = 'Selanjutnya';
        }
    } else {
        nextBtn.disabled = true;
    }
}

function calculateResult() {
    clearInterval(timerInterval);
    bgMusic.pause(); // Stop dramatic music
    quizActive = false; // Mark test as finished
    localStorage.removeItem('webIq_activeTest'); // Clear mid-test flag
    let correctCount = 0;

    if (isCheater) {
        correctCount = 0; // Force score to zero
    } else {
        const totalQuestions = activeQuestions.length;
        activeQuestions.forEach((q, i) => {
            let correctIndex = -1;
            if (q.hasOwnProperty('_h')) {
                const decodedStr = atob(q._h); // decode Base64
                correctIndex = parseInt(decodedStr, 10);
            }
            if (userAnswers[i] === correctIndex) {
                correctCount++;
            }
        });
    }

    // Advanced IQ calculation map
    let iqScore = 70; // Default floor
    let classification = 'Menyontek / Diskualifikasi';

    if (isCheater) {
        resultDesc.textContent = 'PELANGGARAN: Sistem mendeteksi aktivitas mencurigakan (mencoba pindah tab/window atau me-refresh halaman). Nilai tes Anda langsung dibatalkan (Skor 0).';
    } else {
        // Reverted Logic: 60 Questions.
        // Base IQ 70, max IQ ~145. With 60 questions, each is 1.25 points.
        iqScore = Math.floor(70 + (correctCount * 1.25));
        if (iqScore > 145) iqScore = 145; // cap at 145

        if (iqScore >= 130) {
            classification = 'Sangat Superior / Cerdas Istimewa';
            resultDesc.textContent = 'Kemampuan logika dan pemecahan masalah Anda luar biasa istimewa berada di atas 98% populasi.';
        } else if (iqScore >= 115) {
            classification = 'Di Atas Rata-rata (Superior)';
            resultDesc.textContent = 'Kemampuan analisis Anda sangat baik dan di atas rata-rata.';
        } else if (iqScore >= 90) {
            classification = 'Rata-rata (Average)';
            resultDesc.textContent = "Kemampuan logika dan pemecahan masalah Anda berada di tingkat standard rata-rata populasi.";
        } else {
            classification = 'Di Bawah Rata-Rata';
            resultDesc.textContent = "Kemampuan logika dan penyerapan informasi Anda berada di bawah rata-rata. Jangan menyerah dan teruslah belajar!";
        }
        
        // Trigger Confetti Effect for non-cheaters
        if (window.confetti) {
            var duration = 3 * 1000;
            var end = Date.now() + duration;

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#c026d3', '#22d3ee', '#a855f7']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#c026d3', '#22d3ee', '#a855f7']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    }

    // Clear active test flag (test completed legitimately)
    localStorage.removeItem('webIq_activeTest');
    quizActive = false;

    // Exit Fullscreen if active
    if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.log(err));
    }

    // Update Result UI
    progressFill.style.width = `100%`;

    // Animate score number
    animateValue(finalScoreEl, 0, iqScore, 1500);

    // Display global high score
    const highestScore = localStorage.getItem('highestIqScore') || 0;
    const highScoreText = highestScore ? `<br><small style="font-size: 1rem; color: var(--text-secondary); display: block; margin-top: 10px;">High Score: ${highestScore}</small>` : '';

    classificationEl.innerHTML = classification + highScoreText;
    correctAnswersEl.textContent = `${correctCount}/${activeQuestions.length}`;

    // Calculate accuracy and round correctly
    const accuracyValue = (correctCount / activeQuestions.length) * 100;
    // Show no decimals if whole number, otherwise max 1 decimal place
    accuracyEl.textContent = `${accuracyValue % 1 === 0 ? accuracyValue : accuracyValue.toFixed(1)}%`;

    // Save High Score Locally
    if (iqScore > highestScore) {
        localStorage.setItem('highestIqScore', iqScore);
    }

    // Submit Score to Backend
    submitScoreToBackend(iqScore, classification);

    showScreen('result');
}

async function submitScoreToBackend(iqScore, classification) {
    if (!currentUser.name || !currentUser.email || !firebaseDB) return;

    // Use email as unique key (sanitized: remove non-alphanumeric)
    const emailKey = currentUser.email.replace(/[^a-zA-Z0-9]/g, '_');
    const ref = firebaseDB.ref('scores/' + emailKey);

    try {
        const snapshot = await ref.once('value');
        const existing = snapshot.val();

        // Only update if no previous score OR new score is higher
        if (!existing || iqScore > (existing.iq || 0)) {
            await ref.set({
                name: currentUser.name,
                email: currentUser.email,
                iq: iqScore,
                classification: classification,
                date: new Date().toISOString()
            });
        }
    } catch (error) {
        console.error('Failed to save score to Firebase:', error);
    }
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Event Listeners
startBtn.addEventListener('click', initQuiz);
restartBtn.addEventListener('click', () => showScreen('register'));

// Re-add Next Question logic
const nextBtn = document.getElementById('next-btn');
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            calculateResult();
        }
    });
}

// Admin Logic
showAdminBtn.addEventListener('click', () => showScreen('adminLogin'));
backToHomeBtn.addEventListener('click', () => showScreen('register'));
adminLogoutBtn.addEventListener('click', () => {
    localStorage.removeItem('webIq_isAdmin'); // Clear admin session
    document.getElementById('admin-password').value = '';
    showScreen('register');
});

// ============================================================
// STARTUP: Run checks immediately when page loads
// ============================================================
(function onStartup() {
    const wasTestActive = localStorage.getItem('webIq_activeTest');
    const savedUser    = localStorage.getItem('webIq_user');

    if (wasTestActive === 'true' && savedUser) {
        // Peserta refresh saat tes -> CURANG
        localStorage.removeItem('webIq_activeTest');
        currentUser = JSON.parse(savedUser);
        displayNameEl.textContent = currentUser.name || 'Peserta';

        // Tampilkan halaman hasil langsung dengan skor 0
        isCheater = true;
        activeQuestions = [...questions];
        userAnswers = new Array(activeQuestions.length).fill(null);

        // Kirim skor 0 ke Firebase
        submitScoreToBackend(0, 'Diskualifikasi (Refresh Saat Tes)');

        // Set result UI langsung (bypass calculateResult complexity)
        finalScoreEl.textContent = '0';
        classificationEl.textContent = '💀 CURANG TERDETEKSI';
        resultDesc.textContent = 'Kamu ketahuan refresh saat tes lagi jalan! Skor kamu 0 dan sudah masuk leaderboard sebagai disqualified. Malu dong!';
        correctAnswersEl.textContent = '0/' + activeQuestions.length;
        accuracyEl.textContent = '0%';
        progressFill.style.width = '100%';

        bgMusic.pause();
        showScreen('result');
        return;
    }

    // Check if admin was logged in
    if (localStorage.getItem('webIq_isAdmin') === 'true') {
        fetchAdminData();
        showScreen('adminDashboard');
    } else {
        showScreen('register');
    }
}());

adminSubmitBtn.addEventListener('click', () => {
    const pwd = document.getElementById('admin-password').value;
    if (pwd === "738406Ganang") { // Simple hardcoded password for concept
        document.getElementById('admin-password').value = "";
        localStorage.setItem('webIq_isAdmin', 'true'); // Persist admin session
        fetchAdminData();
        showScreen('adminDashboard');
    } else {
        alert("Kata sandi salah!");
    }
});

async function fetchAdminData() {
    const tbody = document.getElementById('score-table-body');
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Memuat data...</td></tr>';

    if (!firebaseDB) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--red);">Firebase belum dikonfigurasi. Isi firebase-config.js dulu.</td></tr>';
        return;
    }

    try {
        const snapshot = await firebaseDB.ref('scores').once('value');
        const raw = snapshot.val();

        const data = raw
            ? Object.values(raw).sort((a, b) => (b.iq || 0) - (a.iq || 0))
            : [];

        tbody.innerHTML = '';
        if (data.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Belum ada peserta.</td></tr>';
            return;
        }

        data.forEach((user, index) => {
            const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : '';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="${rankClass}">#${index + 1}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td style="font-weight: bold; color: var(--accent);">${user.iq}</td>
                <td>${user.classification}</td>
            `;
            tbody.appendChild(tr);
        });
    } catch (error) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--red);">Gagal memuat data dari Firebase.</td></tr>';
        console.error('Admin fetch error:', error);
    }
}

adminResetBtn.addEventListener('click', async () => {
    if (!firebaseDB) { alert('Firebase belum dikonfigurasi.'); return; }
    if (confirm('Yakin mau hapus SEMUA data peserta? Ga bisa dibalikin lagi!')) {
        try {
            await firebaseDB.ref('scores').remove();
            localStorage.removeItem('highestIqScore');
            alert('Semua data berhasil dihapus.');
            fetchAdminData();
        } catch (error) {
            console.error(error);
            alert('Gagal hapus data. Cek koneksi Firebase.');
        }
    }
});

    // Protect from accidental exits/reloads during the test
    window.addEventListener('beforeunload', (e) => {
        if (quizActive) {
            // Modern browsers require preventDefault and don't always show custom text, 
            // but this will trigger the built-in browser confirmation dialog.
            e.preventDefault();
            e.returnValue = '';
            // If they proceed with the refresh, the `localStorage.getItem('webIq_activeTest')` check at the top will catch them next time.
        }
    });

    // Strict Anti-Cheat: Fullscreen & Tab Switch Monitoring
    document.addEventListener('fullscreenchange', () => {
        // If they exit fullscreen while taking the test (only strict on Desktop)
        // Mobile browsers often exit fullscreen unexpectedly (e.g., when virtual keyboard appears)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (!document.fullscreenElement && quizActive && !isCheater) {
            if (!isMobile) {
                alert("PELANGGARAN FULLSCREEN: Anda tertangkap basah mencoba keluar dari mode ujian penuh. Hukuman: Tes langsung dihentikan dan dinilai 0!");
                isCheater = true;
                calculateResult();
            } else {
                // On mobile, just warn them and push back to fullscreen if possible
                console.log("Device mobile keluar Fullscreen. Diabaikan penalti nol.");
            }
        }
    });

    // Handle tab switching on Desktop and Mobile (visibilitychange, blur, pagehide)
    const handleTabSwitch = () => {
        if (quizActive && !isCheater) {
            alert("PELANGGARAN TAB/APLIKASI: Anda terdeteksi meminimalkan jendela Chrome atau pindah aplikasi. Hukuman: Tes langsung dihentikan dan dinilai 0!");
            isCheater = true;
            calculateResult();
        }
    };

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') handleTabSwitch();
    });

    // Extra mobile safety: If browser is pushed to background
    window.addEventListener('pagehide', handleTabSwitch);
    window.addEventListener('blur', () => {
        // Blur triggers when they tap outside the browser window.
        // Can be too aggressive if they just tap a notification, but it's very secure.
        handleTabSwitch();
    });
    
    // Disable text selection and copy on mobile
    document.addEventListener('touchstart', (e) => {
        // Allow touches on buttons and inputs only
        if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT' && !e.target.closest('.option-btn')) {
             // Optional: e.preventDefault() can block scrolling, so we don't do it blindly
        }
    }, {passive: false});

    // Disable long press context menu on mobile images/text
    window.oncontextmenu = function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    };
