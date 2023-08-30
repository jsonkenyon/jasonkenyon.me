<?php

namespace App\Providers;

use Torchlight\Commonmark\V2\TorchlightExtension;
use Illuminate\Support\ServiceProvider;
use Statamic\Facades\Markdown;
use Statamic\Statamic;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
Markdown::addExtension(function () {
    return new TorchlightExtension;
});
    }
}
