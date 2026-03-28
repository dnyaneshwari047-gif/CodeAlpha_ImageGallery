import java.util.Random;

class MyThread extends Thread {
    int[] arr;
    int start, end;
    int sum = 0;

    MyThread(int[] arr, int start, int end) {
        this.arr = arr;
        this.start = start;
        this.end = end;
    }

    public void run() {
        for (int i = start; i < end; i++) {
            sum += arr[i];
        }
    }
}

public class Main {
    public static void main(String[] args) throws Exception {

        int[] arr = new int[1000];
        Random r = new Random();

        // fill random numbers
        for (int i = 0; i < 1000; i++) {
            arr[i] = r.nextInt(100);
        }

        MyThread t[] = new MyThread[10];

        // create & start threads
        for (int i = 0; i < 10; i++) {
            t[i] = new MyThread(arr, i * 100, (i + 1) * 100);
            t[i].start();
        }

        int total = 0;

        // join threads
        for (int i = 0; i < 10; i++) {
            t[i].join();
            total += t[i].sum;
        }

        double avg = total / 1000.0;

        System.out.println("Sum = " + total);
        System.out.println("Average = " + avg);
    }
}