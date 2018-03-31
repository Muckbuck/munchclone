<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $newUser = new User();
        
        $users = [
            ['name' => 'muckbuck', 'email' => 'mucketbucket@gmail.com','password' => Hash::make('12345678')] 
        ];

        foreach($users as $user){
            $newUser::create($user);
        }
        
    }
}
