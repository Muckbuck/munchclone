<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use Illuminate\Http\Response;


class GameController extends Controller
{         
    private function getGame($req){
        return;
    }
    public function createGame(Request $req){
         $id = $req->all();
	 \Log::info(print_r($id, true));
	 $id = $id[0];
	 $gameModel = new Game();
	 $gameModel->user_id = $id;
	 $gameModel->save();
	 if($gameModel->$id){
	    return response()->json(['success'=>true], 200); 
	 }else{
 	    return response()->json(['success'=>false], 401); 
	 }
               
    }
    private function updateGame($req){
        return;
    }
    private function deleteGame($req){
        return;
    }
}
