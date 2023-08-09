<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    function setPasswordAttribute($adat)
    {
        $validation["password"] = Hash::make($adat);
    }

    function getNameAttribute()
    {
        return ucfirst(strtolower($this->attributes["name"]));
    }

    function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:2|max:20',
            'email' => 'required|email:dns|unique:users,email',
            'password' => 'required|min:4|max:20|confirmed'
        ]);

        User::create($validated);
    }
}
