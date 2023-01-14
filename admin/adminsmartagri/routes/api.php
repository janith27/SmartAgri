<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\AnyUserMsgController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\GetUserDetails\InstructorDetailsController;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


/////////////// User Login API Start ////////////////////////

 // Login Routes
 Route::post('/login',[AuthController::class, 'Login']);

 // Register Routes
 //Route::post('/register',[AuthController::class, 'Register']);

 // farmer Register Routes
 Route::post('/fregister',[AuthController::class, 'FarmerRegister']);

 // instructor Register Routes
 Route::post('/insregister',[AuthController::class, 'InstructorRegister']);

 // farmer Register Routes
 Route::post('/sregister',[AuthController::class, 'SupplierRegister']);

 // Forget Password Routes
 Route::post('/forgetpassword',[ForgetController::class, 'ForgetPassword']);

 // Reset Password Routes
 Route::post('/resetpassword',[ResetController::class, 'ResetPassword']);

 // Current User Route
 Route::get('/user',[UserController::class, 'User'])->middleware('auth:api');



 /////////////// End User Login API Start ////////////////////////


//Get visitor
Route::get('/getvisitor',[VisitorController::class,'GetVisitorDetails']);

//Any user Message Route
Route::post('/postanyusermsg',[AnyUserMsgController::class,'PostAnyUserMsgDetails']);

//product list Route
Route::get('/productlist',[ProductListController::class,'Productlist']);

Route::get('/productlistbyremark/{remark}',[ProductListController::class,'ProductListByRemark']);

Route::get('/productlistbycategory/{category}',[ProductListController::class,'ProductListByCategory']);


// Instructor Details Route
Route::get('/instructordetails/{city}',[InstructorDetailsController::class,'InstructorDetail']);