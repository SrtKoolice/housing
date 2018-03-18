<?php

namespace App\Http\Controllers;
use App\Home;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

use Illuminate\Routing\Controller as BaseController;

class HomesController extends BaseController
{
    public function index()
    {
        return Home::all();
    }

    public function create()
    { //
    }
    public function store(Request $request)
    { 
        $home = Home::create($request->all());
        return response()->json($home, 201);
    }
    public function show($address)
    {
        return Home::where('address', "$address")->get();
    }
    public function edit($id)
    {
        //
    }
    public function update(Request $request, Home $home)
    {
        $home->update($request->all());
        return response()->json($home, 200);
    }
    public function delete(Home $home)
    { 
        $home->delete();
        return response()->json(null, 204);
    }
}
