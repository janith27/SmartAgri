<?php

use App\Actions\Fortify\CreateNewUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\Admin\AnyUserMsgController;
use App\Http\Controllers\Admin\GraphController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Farmer\AppointmentController;
use App\Http\Controllers\Farmer\CropLogController;
use App\Http\Controllers\GetUserDetails\AdminDetailsController;
use App\Http\Controllers\JournalController;
use App\Http\Controllers\GetUserDetails\InstructorDetailsController;
use App\Http\Controllers\GetUserDetails\FarmerDetailsController;
use App\Http\Controllers\GetUserDetails\SupplierDetailsController;
use App\Http\Controllers\PlaceOrderController;
use App\Http\Controllers\SupplyController;

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

Route::get('/journaldetailview/{keyid}',[JournalController::class,'JournalDetailView']);
Route::delete('/deletejournal/{keyid}',[JournalController::class,'DeleteJournal']);

// Instructor Details Route key with city
Route::get('/instructordetails/{keycity}',[InstructorDetailsController::class,'InstructorDetail']);

// Instructor Details Route key with email
Route::get('/appointmentform/{keyemail}',[InstructorDetailsController::class,'InstructorDetailEmail']);

//instructor get own appointments
Route::get('/instructorgetmyappointment/{keyemail}',[AppointmentController::class,'InstructorGetMyAppointment']);

// update appointment status
Route::put('/appointmentstatusupdate/{keyid}',[AppointmentController::class,'AppointmentStatusUpdate']);

//appointment Create
Route::post('/appointmentcreate',[AppointmentController::class,'CreateAppointment']);
Route::get('/appointmentview/{keyemail}',[AppointmentController::class,'AppointmentView']);
Route::delete('/deleteappointment/{keyid}',[AppointmentController::class,'DeleteAppointment']);

//Farmer Details Route
Route::get('/farmerdetails/{keyemail}',[FarmerDetailsController::class,'FarmerDetail']);
Route::put('/farmerupdate/{keyemail}',[FarmerDetailsController::class,'FarmerUpdate']);

//crop log Routes
Route::post('/inputcroplog',[CropLogController::class,'CropLogInput']);
Route::get('/croplog/{keyemail}',[CropLogController::class,'FarmerCropLog']);
Route::delete('/deletecroplog/{keyid}',[CropLogController::class,'DeleteLog']);

//Add supply
Route::post('/addsupply',[SupplyController::class, 'SupplyAdd']);
Route::get('/supplyview',[SupplyController::class, 'AllSupply']);
Route::get('/mysellingitems/{keyemail}',[SupplyController::class,'MySellingItems']);

//add product route

Route::post('/addproduct',[JournalController::class, 'addproduct']);

//Order place

Route::post('/placeorder',[PlaceOrderController::class, 'AddOrder']);
Route::get('/myorders/{keyemail}',[PlaceOrderController::class,'SupplierOrderView']);

//Admin Routes

//Admin Register
Route::post('/adminregister',[AuthController::class, 'AdminRegister']);
Route::get('/admindetails',[AdminDetailsController::class,'AdminAllDetails']);
Route::delete('/admindelete/{keyid}',[AdminDetailsController::class,'AdminDelete']);

//farmer Routes
Route::get('/allfarmersdetails',[FarmerDetailsController::class,'FarmerAllDetails']);
Route::delete('/deletefarmer/{keyemail}',[FarmerDetailsController::class,'FarmerDelete']);

//instructor Routes
Route::get('/allinstructordetails',[InstructorDetailsController::class,'InstructorAllDetails']);
Route::delete('/deleteinstructor/{keyemail}',[InstructorDetailsController::class,'InstructorDelete']);

//supplier Routes
Route::get('/allsupplierdetails',[SupplierDetailsController::class,'SupplierAllDetails']);
Route::delete('/deletesupplier/{keyemail}',[SupplierDetailsController::class,'SupplierDelete']);

//any user message details
Route::get('/anyusermessage',[AnyUserMsgController::class,'MessageDetails']);
Route::delete('/deleteanyusermessage/{keyid}',[AnyUserMsgController::class,'MessageDelete']);

//graph data
Route::get('/userpiechart',[GraphController::class,'UserPieChart']);
Route::get('/newuserchart',[GraphController::class,'NewUserChart']);

//get visitor detail
Route::get('/visitordetails',[VisitorController::class,'VisitorDetails']);