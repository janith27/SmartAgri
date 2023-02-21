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
use App\Http\Controllers\Farmer\AppointmentController;
use App\Http\Controllers\Farmer\CropLogController;
use App\Http\Controllers\JournalController;
use App\Http\Controllers\GetUserDetails\InstructorDetailsController;
use App\Http\Controllers\GetUserDetails\FarmerDetailsController;



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


//add jouranl route
Route::post('/addjournal',[JournalController::class, 'JournalInput']);
Route::get('/viewjournal',[JournalController::class,'JournalView']);


// Instructor Details Route key with city
Route::get('/instructordetails/{keycity}',[InstructorDetailsController::class,'InstructorDetail']);

// Instructor Details Route key with email
Route::get('/appointmentform/{keyemail}',[InstructorDetailsController::class,'InstructorDetailEmail']);

//appointment Create
Route::post('/appointmentcreate',[AppointmentController::class,'CreateAppointment']);
Route::get('/appointmentview/{keyemail}',[AppointmentController::class,'AppointmentView']);
Route::delete('/deleteappointment/{keyid}',[AppointmentController::class,'DeleteAppointment']);

//Farmer Details Route
Route::get('/farmerdetails/{keyemail}',[FarmerDetailsController::class,'FarmerDetail']);

//crop log Routes
Route::post('/inputcroplog',[CropLogController::class,'CropLogInput']);
Route::get('/croplog/{keyemail}',[CropLogController::class,'FarmerCropLog']);
Route::delete('/deletecroplog/{keyid}',[CropLogController::class,'DeleteLog']);


//add product route

Route::post('/addproduct',[JournalController::class, 'addproduct']);


//Admin Routes

Route::get('/allfarmersdetails',[FarmerDetailsController::class,'FarmerAllDetails']);
Route::delete('/deleteFarmer/{keyemail}',[FarmerDetailsController::class,'FarmerDelete']);