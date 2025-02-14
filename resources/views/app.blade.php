<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="author" content="{{ env('AUTHOR') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="copyright" content="{{ env('APP_NAME') }}">
    <meta name="subject" content="{{ env('APP_NAME') }} {{ env('APP_VERSION') }}">
    <meta name="description" content="@yield('meta_description', config('app.name'))">
    <meta name="author" content="@yield('meta_author', config('app.name'))">
    <title>{{ getSetting('app_name') }}</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead

    <!-- External CSS -->
    <link rel="stylesheet" href="/frontend/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/frontend/assets/css/meanmenu.css">
    <link rel="stylesheet" href="/frontend/assets/css/all.min.css">
    <link rel="stylesheet" href="/frontend/assets/css/swiper-bundle.min.css">
    <link rel="stylesheet" href="/frontend/assets/css/magnific-popup.css">
    <link rel="stylesheet" href="/frontend/assets/css/animate.css">
    <link rel="stylesheet" href="/frontend/assets/css/nice-select.css">
    <link rel="stylesheet" href="/frontend/assets/css/style.css">
</head>

<body>
    <!-- Preloader area start -->
    <div class="loading">
        <span class="text-capitalize">L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
    </div>
    <div id="preloader">
    </div>
    <!-- Mouse cursor area start here -->
    <div class="mouse-cursor cursor-outer"></div>
    <div class="mouse-cursor cursor-inner"></div>
    <!-- Mouse cursor area end here -->

    <div>
        @inertia
    </div>
    <div class="scroll-up">
        <svg class="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    <!-- Jquery 3.7.0 Min Js -->
    <script src="/frontend/assets/js/jquery-3.7.1.min.js"></script>
    <!-- Bootstrap min Js -->
    <script src="/frontend/assets/js/bootstrap.min.js"></script>
    <!-- Mean menu Js -->
    <script src="/frontend/assets/js/meanmenu.js"></script>
    <!-- Swiper bundle min Js -->
    {{-- <script src="/frontend/assets/js/swiper-bundle.min.js"></script> --}}
    <!-- Counterup min Js -->
    <script src="/frontend/assets/js/jquery.counterup.min.js"></script>
    <!-- Wow min Js -->
    {{-- <script src="/frontend/assets/js/wow.min.js"></script> --}}
    <!-- Pace min Js -->
    <script src="/frontend/assets/js/pace.min.js"></script>
    <!-- Magnific popup min Js -->
    <script src="/frontend/assets/js/magnific-popup.min.js"></script>
    <!-- Nice select min Js -->
    <script src="/frontend/assets/js/nice-select.min.js"></script>
    <!-- Isotope pkgd min Js -->
    <script src="/frontend/assets/js/isotope.pkgd.min.js"></script>
    <!-- Waypoints Js -->
    <script src="/frontend/assets/js/jquery.waypoints.js"></script>
    <!-- Script Js -->
    <script src="/frontend/assets/js/script.js"></script>
    @vite(['resources/js/app.jsx'])
</body>

</html>
