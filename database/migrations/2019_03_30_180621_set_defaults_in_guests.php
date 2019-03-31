<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SetDefaultsInGuests extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('guests', function (Blueprint $table) {
	        $table->string('guestname01')->change();
	        $table->integer('guests')->default(0)->change();
	        $table->string('guestname02')->nullable()->change();
	        $table->string('guestname03')->nullable()->change();
	        $table->string('guestname04')->nullable()->change();
	        $table->string('guestname05')->nullable()->change();
	        $table->string('guestname06')->nullable()->change();
	        $table->string('guestname07')->nullable()->change();
	        $table->string('guestname08')->nullable()->change();
	        $table->string('guestname09')->nullable()->change();
	        $table->string('guestname10')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('guests', function (Blueprint $table) {
            //
        });
    }
}
