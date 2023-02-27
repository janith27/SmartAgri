<?php

namespace App\Http\Controllers;

use App\Models\Supply;
use Illuminate\Http\Request;

class SupplyController extends Controller
{
    public function SupplyAdd(Request $request){



            $product_name = $request->input('product_name');
            $supplier_email = $request->input('supplier_email');
            $description = $request->input('description');
            $qty = $request->input('qty');
            $price = $request->input('price');
            $image = $request->input('image');
            $remark = $request->input('remark');
            $star = $request->input('star');


            $result = Supply::insert([

                'product_name' => $product_name,
                'supplier_email' => $supplier_email,
                'description' => $description,
                'qty' => $qty,
                'price' => $price,
                'image' => $image,
                'remark' => $remark,
                'star' => $star,

            ]);

            return $result;
    } // end mehtod

    public function AllSupply(Request $request){
        
        
        $result =Supply::all();
        return $result;

    }
    // END Method

    public function MySellingItems(Request $request){
        $keyemail = $request->keyemail;
        $result = Supply::where('supplier_email',$keyemail)->get();
        return $result;

    }


    public function DeleteItem(Request $request){
        $keyid = $request->keyid;
        $resultDelete=Supply::where('id',$keyid)->delete();
        return $resultDelete;
    }//End method
}
