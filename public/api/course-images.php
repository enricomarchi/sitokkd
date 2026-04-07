<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$baseDir = realpath(__DIR__ . '/../images/courses');

if (!$baseDir || !is_dir($baseDir)) {
    echo '{}';
    exit;
}

$result = [];

foreach (scandir($baseDir) as $sede) {
    if ($sede[0] === '.' || !is_dir("$baseDir/$sede")) continue;

    foreach (scandir("$baseDir/$sede") as $course) {
        if ($course[0] === '.' || !is_dir("$baseDir/$sede/$course")) continue;

        $slug = "$sede/$course";
        $files = [];

        foreach (scandir("$baseDir/$sede/$course") as $file) {
            if ($file[0] === '.' || !is_file("$baseDir/$sede/$course/$file")) continue;
            $files[] = $file;
        }

        sort($files);
        $result[$slug] = $files;
    }
}

echo json_encode($result, JSON_UNESCAPED_UNICODE);
