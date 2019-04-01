<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGuestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('guests', function (Blueprint $table) {
            $table->increments('id');
			$table->string('guestname01');
			$table->integer('guests');
			$table->string('guestname02');
			$table->string('guestname03');
			$table->string('guestname04');
			$table->string('guestname05');
			$table->string('guestname06');
			$table->string('guestname07');
			$table->string('guestname08');
			$table->string('guestname09');
			$table->string('guestname10');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('guests');
    }
}
