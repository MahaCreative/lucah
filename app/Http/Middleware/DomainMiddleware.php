<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DomainMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $domain = $request->getHost(); // Ambil domain dari request

        if ($domain == 'asiahot.fun') {

            return redirect()->route('');
        } elseif ($domain == '127.0.0.1') {
            return redirect()->route('jobfair-home');
        }

        return $next($request);
    }
}
