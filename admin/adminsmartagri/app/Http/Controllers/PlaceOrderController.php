<?php

namespace App\Http\Controllers;

use App\Models\PlaceOrder;
use Illuminate\Http\Request;

class PlaceOrderController extends Controller
{
    public function AddOrder(Request $request){

        $product_name = $request->input('first_name');
        $supplier_email = $request->input('email');
        $description = $request->input('last_name');
        $qty = $request->input('qty');
        $price = $request->input('price');
        $image = $request->input('phoneno');
        $remark = $request->input('address');
        $collect =$request->input('collect');
        $totalPrice= $qty * $price;

        $result = PlaceOrder::insert([

            'first_name' => $product_name,
            'email' => $supplier_email,
            'last_name' => $description,
            'qty' => $qty,
            'price' => $totalPrice,
            'phoneno' => $image,
            'address' => $remark,
            'collect' => $collect,

        ]);

        return $result;
    }
}
