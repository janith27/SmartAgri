<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\GetUserDetails\FarmerDetailsController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
|
*/


Route::get('/', function () {
    return view('welcome');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.index');
    })->name('dashboard');
});

// Admin Logout Routes
Route::get('/logout',[AdminController::class, 'AdminLogout'])->name('admin.logout');

Route::prefix('admin')->group(function(){
    Route::get('/user/profile',[AdminController::class, 'UserProfile'])->name('user.profile');
});

Route::post('/user/profile/store',[AdminController::class, 'UserProfileStore'])->name('user.profile.store');

Route::get('/change/password',[AdminController::class, 'ChangePassword'])->name('change.password');

Route::post('/change/password/update',[AdminController::class, 'ChangePasswordUpdate'])->name('change.password.update');


// blade view
Route::get('/admin/farmer',function(){ return view('backend.admin.farmer.farmer'); });
Route::get('/admin/instructor',function(){ return view('backend.admin.instructor.instructor'); });
Route::get('/admin/supplier',function(){ return view('backend.admin.supplier.supplier'); });

;

Route::prefix('farmers')->group(function(){
    Route::get('/admin/farmerdetails',[FarmerDetailsController::class,'adminFarmerDetail'])->name('adminFarmerDetail');
});