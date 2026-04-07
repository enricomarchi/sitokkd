<?php
/**
 * Thumbnail generator — ridimensiona e cachea le immagini della gallery.
 * Uso: thumb.php?src=gallery/nomefile.jpg&h=400
 */

$src = $_GET['src'] ?? '';
$maxH = min((int)($_GET['h'] ?? 400), 1200);

if (!$src || $maxH < 50) {
    http_response_code(400);
    exit('Bad request');
}

// Sanitize: solo immagini sotto images/
$src = str_replace(['..', "\0"], '', $src);
$srcPath = realpath(__DIR__ . '/../images/' . $src);
$imagesRoot = realpath(__DIR__ . '/../images');

if (!$srcPath || !$imagesRoot || strpos($srcPath, $imagesRoot) !== 0 || !is_file($srcPath)) {
    http_response_code(404);
    exit('Not found');
}

$ext = strtolower(pathinfo($srcPath, PATHINFO_EXTENSION));
$allowed = ['jpg', 'jpeg', 'png', 'webp'];
if (!in_array($ext, $allowed, true)) {
    http_response_code(403);
    exit('Forbidden');
}

// Cache directory
$cacheDir = __DIR__ . '/../images/.thumbs';
if (!is_dir($cacheDir)) {
    mkdir($cacheDir, 0755, true);
}

$cacheKey = md5($src . '_' . $maxH) . '.webp';
$cachePath = $cacheDir . '/' . $cacheKey;

// Serve cached version if fresh
if (is_file($cachePath) && filemtime($cachePath) >= filemtime($srcPath)) {
    header('Content-Type: image/webp');
    header('Cache-Control: public, max-age=2592000');
    readfile($cachePath);
    exit;
}

// Load source image
switch ($ext) {
    case 'jpg':
    case 'jpeg':
        $img = @imagecreatefromjpeg($srcPath);
        break;
    case 'png':
        $img = @imagecreatefrompng($srcPath);
        break;
    case 'webp':
        $img = @imagecreatefromwebp($srcPath);
        break;
    default:
        http_response_code(500);
        exit('Unsupported');
}

if (!$img) {
    http_response_code(500);
    exit('Cannot read image');
}

$origW = imagesx($img);
$origH = imagesy($img);

if ($origH > $maxH) {
    $newH = $maxH;
    $newW = (int)round($origW * ($maxH / $origH));

    $thumb = imagecreatetruecolor($newW, $newH);
    imagealphablending($thumb, false);
    imagesavealpha($thumb, true);
    imagecopyresampled($thumb, $img, 0, 0, 0, 0, $newW, $newH, $origW, $origH);
    imagedestroy($img);
    $img = $thumb;
}

// Save as webp (quality 80 — buon compromesso qualità/peso)
imagewebp($img, $cachePath, 80);
imagedestroy($img);

header('Content-Type: image/webp');
header('Cache-Control: public, max-age=2592000');
readfile($cachePath);
