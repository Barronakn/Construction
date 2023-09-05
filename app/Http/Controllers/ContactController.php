<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function save(Request $request)
    {
        dd("ok");
        $request->validate([
            "name" => "required|string|max:225",
            "lastName" => "required|string|max:225",
            "email" => "required|email|unique:contacts|max:100",
            "phone" => "required|numeric|max:8",
            "service" => "required|string|max:225",
            "details" => "required|string|max:225",
        ]);



        $contact  = new Contact;
        $contact->name = $request->name;
        $contact->lastName = $request->lastName;
        $contact->email = $request->email;
        $contact->phone = $request->phone;
        $contact->service = $request->service;
        $contact->details = $request->details;

        $contact->save();
        return redirect("Welcome")->with("Succès");
    }
}
