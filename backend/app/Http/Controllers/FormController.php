<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormData;

class FormController extends Controller
{
    public function submit(Request $request)
    {
        try {
            $data = new FormData();
            $data->name = $request->input('name');
            $data->email = $request->input('email');
            $data->message = $request->input('message');
            $data->save();

            return response()->json(['message' => 'Form submitted successfully']);
        } catch (\Exception $e) {
            dd($e->getMessage(), $e->getTrace());
        }
    }

    public function getData()
    {
        $data = FormData::all();
        return response()->json($data);
    }
}

