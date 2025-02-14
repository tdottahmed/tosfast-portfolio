<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\NoteController;
use App\Http\Controllers\Admin\RoleController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PermissionController;
use App\Http\Controllers\Admin\ApplicationSetupController;


Route::prefix('admin')->middleware(['role:super-admin|admin|staff|user'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::resource('roles', RoleController::class);
    Route::resource('permissions', PermissionController::class)->except('show');
    Route::resource('users', UserController::class);
    Route::resource('notes', NoteController::class);
    Route::get('settings/organization', [ApplicationSetupController::class, 'index'])
        ->name('applicationSetup.index');
    Route::post('settings/organization', [ApplicationSetupController::class, 'update'])
        ->name('applicationSetup.update');
});
