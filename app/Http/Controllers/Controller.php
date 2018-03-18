<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\DB;
use App\Home;
use Illuminate\Database\Eloquent\Collection;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
        /**
     * Show a list of all of the application's users.
     *
     * @return Response
     */
       public function index()
    { //
           //$homes = DB::collection('homes')->get();
           return "testing";
           //return $homes;
    }

    public function create()
    { //
    }
    public function store(Request $request)
    { //
    }
    public function show($address)
    {
        $home = DB::collection('homes')->where('address', "$address")->get();
        return $home;
    }
    public function edit($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        //
    }
    public function destroy($id)
    { //
    }
}
