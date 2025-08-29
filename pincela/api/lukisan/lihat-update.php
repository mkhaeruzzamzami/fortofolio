<?php
require_once __DIR__ . '/../koneksi.php';

// Ambil semua data lukisan dulu untuk ditampilkan
$result = $conn->query("SELECT l.id, l.judul, l.tema, l.nama_pembuat, l.tanggal_pembuatan, u.nama_lengkap 
                        FROM lukisan l LEFT JOIN users u ON l.user_id = u.id ORDER BY l.id DESC");

// Kalau belum submit form, tampilkan HTML
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Edit Data Lukisan</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 20px;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 30px;
        }
        th, td {
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
        }
        th {
            background: #eee;
        }
        form {
            max-width: 600px;
            margin: auto;
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 12px;
        }
        input, textarea {
            width: 100%;
            margin-bottom: 12px;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
        }
        button {
            padding: 10px 20px;
            border: none;
            background: #27ae60;
            color: white;
            border-radius: 8px;
            cursor: pointer;
        }
        button:hover {
            background: #1e8449;
        }
    </style>
</head>
<body>
    <h2 style="text-align:center;">🖼️ Daftar Semua Lukisan</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Judul</th>
                <th>Tema</th>
                <th>Pembuat</th>
                <th>Nama User</th>
                <th>Tanggal</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?= $row['id'] ?></td>
                <td><?= htmlspecialchars($row['judul']) ?></td>
                <td><?= htmlspecialchars($row['tema']) ?></td>
                <td><?= htmlspecialchars($row['nama_pembuat']) ?></td>
                <td><?= htmlspecialchars($row['nama_lengkap']) ?></td>
                <td><?= htmlspecialchars($row['tanggal_pembuatan']) ?></td>
            </tr>
            <?php endwhile; ?>
        </tbody>
    </table>

    <h2 style="text-align:center;">✏️ Form Update Lukisan</h2>
    <form action="" method="POST" enctype="multipart/form-data">
        <input type="number" name="id" placeholder="ID Lukisan" required />
        <input type="text" name="nama_lengkap" placeholder="Nama Lengkap" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="tema" placeholder="Tema Lukisan" required />
        <input type="text" name="judul" placeholder="Judul Lukisan" required />
        <input type="date" name="tanggal_pembuatan" required />
        <input type="text" name="nama_pembuat" placeholder="Nama Pembuat" required />
        <textarea name="deskripsi" placeholder="Deskripsi Lukisan" rows="5" required></textarea>
        <input type="file" name="gambar" accept="image/*" />
        <button type="submit">Update Lukisan</button>
    </form>
</body>
</html>
<?php
exit;
}
?>
