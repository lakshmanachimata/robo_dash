package com.abb.robodash;

import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    WebView webview;
    WebInterface webInterface;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        webInterface = new WebInterface(MainActivity.this);
        webview = (WebView) findViewById(R.id.webViewMain);
        webview.addJavascriptInterface(webInterface,"BJE");

        webview.getSettings().setJavaScriptEnabled(true);
        webview.getSettings().setDomStorageEnabled(true);
        webview.getSettings().setUseWideViewPort(true);


        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            webview.getSettings().setAllowUniversalAccessFromFileURLs(true);
            webview.getSettings().setAllowFileAccessFromFileURLs(true);
            webview.clearCache(true);
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            webview.setWebContentsDebuggingEnabled(true);
        }

        webview.setWebViewClient(new WebViewClient() {

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view,url,favicon);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                // do your stuff here
               super.onPageFinished(view, url);
            }

        });

        webview.loadUrl("file:///android_asset/index.html");
    }
}
