package com.example.stopwatch;

import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.SeekBar;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private Handler handler = new Handler();
    private Runnable runnable;
    private int test;
    private MediaPlayer mediaPlayer;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

         mediaPlayer = MediaPlayer.create(MainActivity.this, R.raw.sound);

        SeekBar seekBarid = findViewById(R.id.seekBar);

        ImageView imageViewid = findViewById(R.id.imageView);

        TextView textViewid = findViewById(R.id.textView);

        Button startbuttonid = findViewById(R.id.button);

        Button stopbuttonid = findViewById(R.id.button2);

        stopbuttonid.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

//                Log.e("test", "onclick");

                if (mediaPlayer != null && mediaPlayer.isPlaying()) {
                    mediaPlayer.stop();
                    mediaPlayer.release();
                    mediaPlayer = null; // Set to null after release
                }

            }
        });

        startbuttonid.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
               // Log.e("button", "button on click");
                // Call the function immediately when the button is clicked

                // Initialize the runnable
                runnable = new Runnable() {
                    @Override
                    public void run() {
                        runFunction();

                        if (test > 0) {
                            // Schedule the function to run again after 1 second
                            test--;
                            seekBarid.setProgress(test); // Update the seek bar progress
                            textViewid.setText(String.valueOf(test));
                            handler.postDelayed(this, 1000);
                        }
                        else if (test == 0) {
                            Log.e("Time up", "done");

                            // Create a new MediaPlayer instance if it's null or released
                            if (mediaPlayer == null || !mediaPlayer.isPlaying()) {
                                mediaPlayer = MediaPlayer.create(MainActivity.this, R.raw.sound);
                            }

                            // Start the MediaPlayer
                            mediaPlayer.start();
                        }

                    }
                };
                // Schedule the runnable to run every 1 second

                runFunction();
                handler.postDelayed(runnable, 1000);
            }

            public void runFunction() {
                // Code inside this function will run every 1 second
                Log.e("running", "running every 1 second");
                // Do something with the progress here
            }
        });

        seekBarid.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {

            @Override
            public void onProgressChanged(SeekBar seekBar,  int progress, boolean fromUser) {
                textViewid.setText(String.valueOf(progress));
                test=progress;



            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {
                // Handle tracking touch if needed
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                // Handle stop tracking touch if needed
            }
        });

    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        // Remove any pending callbacks to prevent memory leaks
        handler.removeCallbacks(runnable);
    }

}