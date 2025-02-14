<x-layouts.admin.guest>
    <!-- auth-page wrapper -->
    <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
        <!-- auth-page content -->
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card overflow-hidden card-bg-fill galaxy-border-none">
                            <x-data-display.card>
                                <x-slot name="header">
                                    <h3 class="mb-0 text-center">Welcome to Laravel Starter</h3>
                                </x-slot>
                                <p class="text-center">
                                    This Laravel Starter comes with all essential components, including role-based
                                    permissions, authentication, and a modular structure to accelerate your
                                    development.
                                </p>
                                <div class="text-center mt-3">
                                    <a href="{{ route('login') }}" class="btn btn-primary">
                                        Go to Admin Dashboard
                                    </a>
                                </div>
                            </x-data-display.card>

                            <!-- end row -->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col -->

                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end auth page content -->
        <!-- footer -->
        <footer class="footer galaxy-border-none">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <p class="mb-0">&copy;
                                <script>
                                    document.write(new Date().getFullYear())
                                </script> Crafted with <i class="mdi mdi-heart text-danger"></i>
                                by Tanbir
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- end Footer -->
    </div>
    <!-- end auth-page-wrapper -->
</x-layouts.admin.guest>
