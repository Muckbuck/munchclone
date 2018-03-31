<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $table = 'game';

    public function deck(){
        $this->hasMany('App\Models\Deck');
    }
}
