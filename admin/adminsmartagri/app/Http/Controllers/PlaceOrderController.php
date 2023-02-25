<?php

namespace App\Http\Controllers;

use App\Models\OrderDetails;
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
        $productid =$request->input('productid');
        $totalPrice= $qty * $price;

        $result = OrderDetails::insert([

            'first_name' => $product_name,
            'email' => $supplier_email,
            'last_name' => $description,
            'qty' => $qty,
            'price' => $totalPrice,
            'phoneno' => $image,
            'address' => $remark,
            'collect' => $collect,
            'productid' => $productid,

        ]);

        return $result;
    }
// End Method

    public function SupplierOrderView(Request $request){
        $keyemail = $request->keyemail;
        $result = OrderDetails::join('supplies','productid','=','supplies.id')->where('supplier_email',$keyemail)->get();
        return $result;

    }
}
