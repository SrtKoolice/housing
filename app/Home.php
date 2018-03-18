<?php

namespace App;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Home extends Eloquent
{
    protected $colletion = 'homes';
    protected $fillable = [ 'address',
                            //'img',
                            'totalCost', 
                            'price', 
                            'sellPrice',
                            'sqft',
                            'bedrooms',
                            'bathrooms',
                            'labor',
                            'materials',
                            'flooring',
                            'loan',
                            'tax',
                            'utilities'];
}
