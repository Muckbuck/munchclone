<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
  public function getUsers(Request $request){
    $userModel = new User();
    $users = $userModel::all();
    return response()->json(['data' => $users]);
  }
}
