<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$dir = realpath(__DIR__ . '/../images/gallery');

if (!$dir || !is_dir($dir)) {
    echo '[]';
    exit;
}

$exts = ['jpg', 'jpeg', 'png', 'webp'];
$files = [];

foreach (scandir($dir) as $file) {
    if ($file[0] === '.' || !is_file("$dir/$file")) continue;
    $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
    if (in_array($ext, $exts, true)) {
        $files[] = $file;
    }
}

sort($files);
echo json_encode($files, JSON_UNESCAPED_UNICODE);
