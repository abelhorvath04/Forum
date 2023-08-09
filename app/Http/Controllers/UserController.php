<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function register(RegisterRequest $request)
    {

        $validated = $request->validated();

        User::create($validated);

        return response()->json(['message' => 'Data submitted successfully']);;
    }
}
