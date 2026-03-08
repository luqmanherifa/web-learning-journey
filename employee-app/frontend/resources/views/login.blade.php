<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sign In</title>
    <link rel="icon" type="image/png" href="/employee.png">
    @vite('resources/css/app.css')
</head>
<body class="bg-slate-50 min-h-screen flex flex-col" style="font-family: 'Plus Jakarta Sans', sans-serif;">

    <x-navbar />

    <main class="flex-1 flex items-center justify-center px-4 py-12">
        <div class="w-full max-w-sm">

            <div class="mb-7">
                <p class="text-[10px] font-semibold uppercase tracking-widest text-amber-600 mb-1">Employee App</p>
                <h1 class="text-xl font-bold text-blue-900 leading-tight">Welcome back</h1>
                <p class="text-xs text-slate-500 mt-1">Sign in to get started</p>
            </div>

            @if(session('error'))
                <div class="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    </svg>
                    <p class="text-xs text-red-600 font-medium">{{ session('error') }}</p>
                </div>
            @endif

            <div class="bg-white border border-slate-200 rounded-2xl p-6">
                <form method="POST" action="/login" class="flex flex-col gap-4">
                    @csrf

                    <div class="space-y-2.5">
                        <label for="username" class="block text-xs font-semibold text-slate-600">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            required
                            class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 transition-colors duration-150"
                        >
                    </div>

                    <div class="space-y-2.5">
                        <label for="password" class="block text-xs font-semibold text-slate-600">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                            class="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 transition-colors duration-150"
                        >
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors duration-150 mt-2"
                    >
                        Sign In
                    </button>

                </form>
            </div>

        </div>
    </main>

    <x-footer />

</body>
</html>