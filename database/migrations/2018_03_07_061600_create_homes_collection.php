<?php

use Illuminate\Support\Facades\Schema;
use Jenssegers\Mongodb\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomesCollection extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('homes', function (Blueprint $collection) {
            $collection->index('address');
            $collection->index('totalCost');
            $collection->index('price');
            $collection->index('sellPrice');
            $collection->index('sqft');
            $collection->index('bedrooms');
            $collection->index('bathrooms');
            $collection->index('labor');
            $collection->index('materials');
            $collection->index('flooring');
            $collection->index('loan');
            $collection->index('tax');
            $collection->index('utilities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('homes');
    }
}
