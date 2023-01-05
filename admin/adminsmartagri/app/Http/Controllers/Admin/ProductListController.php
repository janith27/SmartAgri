<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductListController extends Controller
{

    public function Productlist(Request $request){
        
        $result = Product::all();

        return $result;
    }
    // END Method


    public function ProductListByRemark(Request $request){
        $remark = $request->remark;
        $productlist = Product::where('remark',$remark)->get();
        return $productlist;
    }
    // END Method


    public function ProductListByCategory(Request $request){
        $category = $request->category;
        $productlist = Product::where('category',$category)->get();
        return $productlist;
    }
    // END Method
}

