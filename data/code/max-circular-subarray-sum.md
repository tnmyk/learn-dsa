int kadane(int arr[], int n) {

    int mx = INT_MIN;
    int sum = 0;
    for (int i = 0; i < n; ++i) {
    	sum += arr[i];
    	if (sum < 0) {
    		sum = 0;
    	}
    	mx = max(mx, sum);
    }
    return mx;

}
void printCircularSubArrayWithLargestSum(int arr[], int n) {

    int no_wrap_max = kadane(arr, n);
    int total = 0;
    int mx = INT_MIN;
    for (int i = 0; i < n; ++i) {
    	mx = max(mx, arr[i]);
    	total += arr[i];
    	arr[i] = -arr[i];
    }
    if (mx <= 0) {
    	cout << mx;
    }
    else {
    	int wrap_max = kadane(arr, n);
    	cout << max(no_wrap_max, total + wrap_max);
    }

}
