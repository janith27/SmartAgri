<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instructors', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('title');
            $table->string('fname');
            $table->string('lname');
            $table->string('street1');
            $table->string('street2');
            $table->integer('mobileno');
            $table->string('city');
            $table->string('crop');
            $table->string('edu');
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
        Schema::dropIfExists('instructors');
    }
};
