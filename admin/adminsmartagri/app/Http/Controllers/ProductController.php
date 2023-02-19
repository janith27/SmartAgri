<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function addproduct(Request $request){

        $product =new Product();

         $product->product_name=$request->product_name;
         $product->category=$request->category;
         $product->description=$request->description;
         $product->quantity=$request->quantity;
         $product->price=$request->price;
         $product->image=$request->image;
         $product->remark=$request->remark;
         $product->start=$request->star;
         
         $product->save();
        

    }
}
