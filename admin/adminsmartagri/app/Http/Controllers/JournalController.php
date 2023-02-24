<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Journal;
use Intervention\Image\Facades\Image;

class JournalController extends Controller
{
    
    public function JournalInput(Request $request){
        
        $name = $request->input('name');
        $description = $request->input('description');
        $image = $request->input('image');
        date_default_timezone_set("Asia/Colombo");
        

        $result = Journal::insert([
            'name' => $name,
            'description'=> $description,
            'image' => $image,
        ]);

        return $result;
    }
    //End Method

    public function JournalView(Request $request){

        $result = Journal::all();
        return $result;

    }
    // End Method
    public function UpdateJournalView(Request $request){

        $journal =new Journal();
        $journal->name = $request->input('name');
        $journal->description = $request->input('description');
        $journal->image = $request->input('image');
        $journal->save();

        return redirect('/addjournal');

    }
}
