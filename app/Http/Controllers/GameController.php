<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use Illuminate\Http\Response;


class GameController extends Controller
{
    public function getPostPatchDelete(Request $req){
        
        switch($req->method()){
            case 'GET':
                $this->getGame($req);
            case 'POST':    
                return $this->createGame($req);
            case 'PATCH':
                $this->updateGame($req);
            case 'DELETE':
                $this->deleteGame($req);
        }
    }

    private function getGame($req){
        return;
    }
    private function createGame($req){
        //Response::json(['success' => 'hi, atiq']);
         \Log::info(print_r(response()->json(['lel'=>'lol'], 200), true));
         return response()->json(['lel'=>'lol'], 200);        
        //response()->json(['success'=>true])->send(); 
    }
    private function updateGame($req){
        return;
    }
    private function deleteGame($req){
        return;
    }
}
