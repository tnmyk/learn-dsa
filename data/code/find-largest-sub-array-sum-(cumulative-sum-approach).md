    void printSubArrayWithLargestSum(int arr[], int n) {
        int cum_sum[n] = {0};
        cum_sum[0] = arr[0];
        for (int i = 1; i < n; ++i) {
            cum_sum[i] = cum_sum[i - 1] + arr[i];
        }

        int mx = INT_MIN;
        int l, r;
        for (int i = 0; i < n; ++i) {
            for (int j = i; j < n; ++j) {
                if (i == j) {
                    if (cum_sum[i] > mx) {
                        l = i;
                        r = i;
                        mx = cum_sum[i];
                    }
                    continue;
                }
                if (cum_sum[j] - cum_sum[i] > mx) {
                    l = i;
                    r = j;
                    mx = cum_sum[j] - cum_sum[i];
                }
            }

        }
        // printing largest sum
        cout << mx << endl; 
        
        //printing largest sum sub-array
        for (int i = l + 1; i <= r; ++i) {
            cout << arr[i] << " ";
        }
    }