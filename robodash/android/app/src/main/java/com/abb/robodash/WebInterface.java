package com.abb.robodash;

import android.webkit.JavascriptInterface;
import android.widget.Toast;

import org.json.JSONObject;

public class WebInterface {


    public MainActivity mainActivity;

    /** Instantiate the interface and set the context */
    WebInterface(MainActivity c) {
        mainActivity = c;
    }

    /** Show a toast from the web page */
    @JavascriptInterface
    public void showToast(String toast) {
        Toast.makeText(mainActivity, toast, Toast.LENGTH_SHORT).show();
    }

}
