<?php

use Symfony\Component\Yaml\Yaml;
use Cocur\Slugify\Slugify;

require './vendor/autoload.php';

$slugify = new Slugify();

$coops = json_decode(file_get_contents('./data/coops.json'), true);

foreach ($coops as $coop) {

    $yaml = Yaml::dump($coop, 2, 2);

    $filename = $slugify->slugify($coop['name'], '_');

    file_put_contents('./data/members/'.$filename.'.yml', $yaml);
}
