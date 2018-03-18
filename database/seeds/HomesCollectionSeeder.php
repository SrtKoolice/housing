<?php

use Illuminate\Database\Seeder;
use App\Home;

class HomesCollectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = \Faker\Factory::create();
        
        for ($i = 0; $i < 50; $i++) {
            Home::create([
                 'address' => $faker->streetAddress,
                 'img' => $faker->imageUrl($width = 640, $height = 480, 'cats'),
                 'totalCost'=> $faker->randomNumber(2), 
                 'price'=> $faker->randomNumber(2), 
                 'sellPrice'=> $faker->randomNumber(2),
                 'sqft'=> array('main'=>$faker->randomNumber(2),
                                'second'=>$faker->randomNumber(2),
                                'basement'=>$faker->randomNumber(2)),
                 'bedrooms'=> $faker->randomNumber(3),
                 'bathrooms'=> $faker->randomNumber(2),
                 'labor'=> $faker->randomNumber(2),
                 'materials'=> $faker->randomNumber(2),
                 'flooring'=> array(array('type'=>'tile',
                                          'cost'=>$faker->randomNumber(2),
                                          'sqft'=>$faker->randomNumber(2)),
                                    array('type'=>'tile',
                                          'cost'=>$faker->randomNumber(2),
                                          'sqft'=>$faker->randomNumber(2)),
                                    array('type'=>'tile',
                                          'cost'=>$faker->randomNumber(2),
                                          'sqft'=>$faker->randomNumber(2))),
                 'loan'=> array('loanTotal'=>$faker->randomNumber(2),
                                'holdingCost'=>$faker->randomNumber(2)),
                 'tax'=> $faker->randomNumber(2),
                 'utilities'=> array('water'=>$faker->randomNumber(2),
                                     'gas'=>$faker->randomNumber(2),
                                     'electric'=>$faker->randomNumber(2))
            ]);
        }
    }
}
