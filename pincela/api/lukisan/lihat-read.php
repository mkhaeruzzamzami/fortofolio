<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: text/html; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo "<p style='color:red;'>Hanya menerima GET request</p>";
    exit;
}

require_once __DIR__ . '/../koneksi.php';

$query = "SELECT l.*, u.nama_lengkap FROM lukisan l 
          LEFT JOIN users u ON l.user_id = u.id";
$result = $conn->query($query);

$base_url = "http://localhost/pemweb-project-main/pincela/api/uploads/";
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Daftar Lukisan</title>
    <style>
        body {
            font-family: sans-serif;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 16px;
            margin-top: 20px;
        }
        .card {
            border: 1px solid #ddd;
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .card img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        .card h3 {
            margin: 8px 0 4px;
        }
        .card small {
            color: gray;
        }
    </style>
</head>
<body>
    <h1>🎨 Daftar Lukisan</h1>
    <div class="grid">
        <?php while ($row = $result->fetch_assoc()): 
            $gambar_url = !empty($row['gambar']) ? $base_url . rawurlencode($row['gambar']) : null;
        ?>
        <div class="card">
            <?php if ($gambar_url): ?>
                <img src="<?= htmlspecialchars($gambar_url) ?>" alt="Lukisan">
            <?php else: ?>
                <p><em>Tanpa gambar</em></p>
            <?php endif; ?>
            <h3><?= htmlspecialchars($row['judul']) ?></h3>
            <p><strong>Tema:</strong> <?= htmlspecialchars($row['tema']) ?></p>
            <p><strong>Pembuat:</strong> <?= htmlspecialchars($row['nama_pembuat']) ?> (<?= htmlspecialchars($row['nama_lengkap']) ?>)</p>
            <p><strong>Tanggal:</strong> <?= htmlspecialchars($row['tanggal_pembuatan']) ?></p>
            <p><?= nl2br(htmlspecialchars($row['deskripsi'])) ?></p>
            <small>👍 <?= $row['likes'] ?> Like</small>
        </div>
        <?php endwhile; ?>
    </div>
    <a href="index.php">Kembali</a>
</body>
</html>
