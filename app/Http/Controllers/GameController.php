<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    public function getPostPatchDelete(Request $req){
        switch($req){
            case 'GET':
                $this->getGame($req);
            case 'POST':
                $this->createGame($req);
            case 'PATCH':
                $this->updateGame($req);
            case 'DELETE':
                $this->deleteGame($req);
        }
    }

    private function getGame($req){

    }
    private function createGame($req){
        
    }
    private function updateGame($req){
        
    }
    private function deleteGame($req){
        
    }
}
