package com.canvasjs.charts;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        WebView canvasJSChartView = findViewById(R.id.webView);
        canvasJSChartView.setWebViewClient(new WebViewClient());

        canvasJSChartView.getSettings().setJavaScriptEnabled(true); //Enable Javascript for WebView


        canvasJSChartView.loadUrl("file:///android_asset/column chart.html");
    }
}