<nav class="bg-white border-b border-slate-200" style="font-family: 'Plus Jakarta Sans', sans-serif;">
    <div class="px-6 py-0 flex items-stretch justify-between">
        <a href="/" class="flex items-center gap-2.5 py-4 text-blue-900 no-underline">
            <span class="w-7 h-7 flex items-center justify-center rounded-lg bg-blue-900 text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-4 h-4 fill-current">
                    <path d="M320 312C253.7 312 200 258.3 200 192C200 125.7 253.7 72 320 72C386.3 72 440 125.7 440 192C440 258.3 386.3 312 320 312zM289.5 368L350.5 368C360.2 368 368 375.8 368 385.5C368 389.7 366.5 393.7 363.8 396.9L336.4 428.9L367.4 544L368 544L402.6 405.5C404.8 396.8 413.7 391.5 422.1 394.7C484 418.3 528 478.3 528 548.5C528 563.6 515.7 575.9 500.6 575.9L139.4 576C124.3 576 112 563.7 112 548.6C112 478.4 156 418.4 217.9 394.8C226.3 391.6 235.2 396.9 237.4 405.6L272 544.1L272.6 544.1L303.6 429L276.2 397C273.5 393.8 272 389.8 272 385.6C272 375.9 279.8 368.1 289.5 368.1z"/>
                </svg>
            </span>
            <span class="text-sm font-bold tracking-tight text-blue-900 leading-none">Employee</span>
        </a>

        <div class="flex items-center gap-3 text-sm">
            @if(session('token'))
                <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit"
                        class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-amber-600 text-amber-600 text-xs font-semibold hover:bg-amber-600 hover:text-white transition-colors duration-150 cursor-pointer"
                        style="font-family: 'Plus Jakarta Sans', sans-serif;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-3.5 h-3.5 fill-current">
                            <path d="M224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L160 96C107 96 64 139 64 192L64 448C64 501 107 544 160 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480C142.3 480 128 465.7 128 448L128 192C128 174.3 142.3 160 160 160L224 160zM566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L438.6 169.3C426.1 156.8 405.8 156.8 393.3 169.3C380.8 181.8 380.8 202.1 393.3 214.6L466.7 288L256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L466.7 352L393.3 425.4C380.8 437.9 380.8 458.2 393.3 470.7C405.8 483.2 426.1 483.2 438.6 470.7L566.6 342.7z"/>
                        </svg>
                        Sign Out
                    </button>
                </form>
            @else
                <a href="/"
                   class="inline-flex items-center px-3.5 py-1.5 rounded-lg text-slate-500 text-xs font-semibold hover:text-blue-900 hover:bg-slate-100 transition-colors duration-150"
                   style="font-family: 'Plus Jakarta Sans', sans-serif;">
                    Home
                </a>
            @endif
        </div>
    </div>
</nav>