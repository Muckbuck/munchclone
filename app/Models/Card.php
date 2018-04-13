<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    protected $table = 'card';
    
    public function deck(){
        return $this->belongsTo('App\Models\Deck');
    }

}
