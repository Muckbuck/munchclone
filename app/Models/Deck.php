<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Deck extends Model
{
    protected $table = 'deck';
    
    public function card(){
        $this->hasMany('App\Models\Deck');
    }

    public function game(){
        $this->belongsTo('App\Models\Game');
    }
}
