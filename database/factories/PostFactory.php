<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'author' => $faker->name,
        'body' => '<p>' . $faker->text(180) . '</p>' . '<p>' . $faker->text(180) . '</p>' . '<p>' . $faker->text(180) . '</p>' . $faker->text(180) . '</p>' . $faker->text(180) . '</p>' . $faker->text(180) . '</p>' . '<p>' . $faker->text(180) . '</p>' . '<p>' . $faker->text(180) . '</p>' . '<p>' . $faker->text(180) . '</p>' . $faker->text(180) . '</p>' . $faker->text(180) . '</p>' . $faker->text(180) . '</p>' . '<p>' . $faker->text(180) . '</p>' . '<p>' . $faker->text(180) . '</p>' . '<p>' . $faker->text(180) . '</p>' . $faker->text(180) . '</p>' . $faker->text(180) . '</p>' . $faker->text(180) . '</p>',
    ];
});
