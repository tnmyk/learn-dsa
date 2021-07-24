void kadane(int arr[], int n) {
    int sum = 0;
    int mx = INT_MIN;
    for (int i = 0; i < n; ++i) {
        sum += arr[i];

        if (sum < 0) {
            sum = 0;
        }
        mx = max(mx, sum);
    }
    cout << mx;
}