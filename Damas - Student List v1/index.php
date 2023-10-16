<?php

session_start();

if (!isset($_SESSION["login"])) {
  header("Location: login.php");
  exit;
}

require 'functions.php';
$mahasiswa = query("SELECT * FROM mahasiswa ORDER BY id DESC");

if (isset($_POST["cari"])) {
  $mahasiswa = cari($_POST["keyword"]);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Halaman Admin</title>
  <style>
    .loader {
      width: 100px;
      position: absolute;
      z-index: -1;
      top: 120px;
      left: 300px;
      display: none;
    }
  </style>

  <script src="js/jquery-3.6.3.min.js"></script>
  <script src="js/script.js"></script>
</head>

<body>

  <a href="logout.php">Logout</a>

  <h1>Daftar Mahasiswa</h1>

  <a href="tambah.php">Tambah Data Mahasiswa</a>
  <br><br>

  <form action="" method="post">
    <input type="text" name="keyword" size="40" placeholder="Masukkan keyword pencarian..." autofocus autocomplete="off" id="keyword">
    <button type="submit" name="cari" id="tombol-cari">Cari</button>

    <img src="img/loader.gif" alt="" class="loader">

  </form>
  <br>

  <div id="container">
    <table border="1" cellpadding="10" cellspacing="0">

      <tr>
        <th>No.</th>
        <th>Aksi</th>
        <th>Gambar</th>
        <th>NRP</th>
        <th>Nama</th>
        <th>Email</th>
        <th>Jurusan</th>
      </tr>

      <?php $i = 1 ?>
      <?php foreach ($mahasiswa as $mhs) : ?>
        <tr>
          <td><?= $i; ?></td>
          <td>
            <a href="ubah.php?id=<?= $mhs["id"]; ?>">Ubah</a> |
            <a href="hapus.php?id=<?= $mhs["id"]; ?>" onclick="return confirm('Apakah Anda ingin mengahapus data ini?');">Hapus</a>
          </td>
          <td><img src="img/<?= $mhs["gambar"] ?>" alt="" width="50"></td>
          <td><?= $mhs["nrp"]; ?></td>
          <td><?= $mhs["nama"]; ?></td>
          <td><?= $mhs["email"]; ?></td>
          <td><?= $mhs["jurusan"]; ?></td>
        </tr>
        <?php $i++; ?>
      <?php endforeach; ?>

    </table>
  </div>
</body>

</html>