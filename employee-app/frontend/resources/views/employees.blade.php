<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dashboard</title>
    <link rel="icon" type="image/png" href="/employee.png">
    @vite('resources/css/app.css')
</head>
<body class="bg-slate-50 min-h-screen flex flex-col" style="font-family: 'Plus Jakarta Sans', sans-serif;">

    <x-navbar />

    <main class="flex-1 px-6 py-8">
        <div class="max-w-6xl mx-auto space-y-5">

            <div class="flex items-end justify-between">
                <div>
                    <p class="text-[10px] font-semibold uppercase tracking-widest text-amber-600 mb-1">Human Resources</p>
                    <h1 class="text-xl font-bold text-blue-900 leading-tight">Employee Directory</h1>
                    <p class="text-xs text-slate-500 mt-1">View and manage employee data</p>
                </div>
                <div class="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 bg-white">
                    <span class="w-2 h-2 rounded-full bg-blue-900 inline-block"></span>
                    <span class="text-xs text-slate-600 font-medium">Total Data</span>
                    <span class="text-xs font-bold text-blue-900">{{ count($employees) }}</span>
                </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <table class="min-w-full text-sm text-left">
                    <thead>
                        <tr class="border-b border-slate-200 bg-slate-50">
                            <th class="px-5 py-3.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">ID</th>
                            <th class="px-5 py-3.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Employee Name</th>
                            <th class="px-5 py-3.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Manager</th>
                            <th class="px-5 py-3.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Level</th>
                            <th class="px-5 py-3.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Format</th>
                            <th class="px-5 py-3.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Hierarchy</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @foreach($employees as $emp)
                        <tr class="hover:bg-slate-50 transition-colors duration-100">
                            <td class="px-5 py-3.5 text-xs text-slate-400 font-mono">{{ $emp['employee_id'] }}</td>
                            <td class="px-5 py-3.5">
                                <span class="text-sm font-semibold text-blue-900">{{ $emp['employee_name'] }}</span>
                            </td>
                            <td class="px-5 py-3.5 text-sm text-slate-600">{{ $emp['manager_name'] }}</td>
                            <td class="px-5 py-3.5">
                                <span class="inline-flex items-center px-2.5 py-1 rounded-lg border border-blue-900/20 bg-blue-900/5 text-[10px] font-semibold text-blue-900 tracking-wide">
                                    Level {{ $emp['path_level'] }}
                                </span>
                            </td>
                            <td class="px-5 py-3.5">
                                <pre class="text-xs text-slate-500 font-mono leading-relaxed">{{ $emp['employee_format'] }}</pre>
                            </td>
                            <td class="px-5 py-3.5 text-xs text-slate-500 max-w-xs truncate">{{ $emp['path_hierarchy'] }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>

                @if(count($employees) === 0)
                <div class="flex flex-col items-center justify-center py-16 text-center">
                    <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m0 0a4 4 0 108 0m-8 0a4 4 0 008 0"/>
                        </svg>
                    </div>
                    <p class="text-sm font-semibold text-slate-600">No employees found</p>
                    <p class="text-xs text-slate-400 mt-0.5">No data to display</p>
                </div>
                @endif

                <div class="px-5 py-3 border-t border-slate-100 flex items-center justify-end bg-slate-50/50">
                    <p class="text-xs text-slate-400">
                        Showing <span class="font-semibold text-slate-600">{{ count($employees) }}</span> data
                    </p>
                </div>
            </div>

        </div>
    </main>

    <x-footer />

</body>
</html>