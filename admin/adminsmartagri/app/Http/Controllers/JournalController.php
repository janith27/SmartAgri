<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Journal;
use Intervention\Image\Facades\Image;

class JournalController extends Controller
{
    public function index(){
        $journals =Journal::all();
        return response()->json([
            'status'=> 200,
            'journals'=>$journals,
        ]);
    }
    public function addjournal(Request $request){

        $journal =new Journal();

         $journal->name=$request->name;
         $journal->description=$request->description;
        // if($request->photo!=""){
        //     $strpos=strpos($request->photo, ';');
        //       $sub=substr($request->photo,0,$strpos);
        //       $ex=explode('/',$sub)[1];
        //       $name= time().".".$ex;
        //       $img =Image::make($request->photo)->resize(117,100);
        //       $upload_path = public_path()."/upload/";
        //       $img->save($upload_path.$name);
        //       $journal->photo=$name;
        //   }else{
        //       $journal->photo="image.png";
        //   }
        //   $journal->photo =$name;
         $journal->save();
        

    }
}
