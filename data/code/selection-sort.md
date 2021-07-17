    void selectionSort(int arr[], int n)
    {
        int min =arr[0];
        for(int i=0;i<n-1;++i){
            int index=i;
            min = arr[i];
            for(int j=i+1;j<n;++j){
                if(arr[j]<min) {
                    min=arr[j];
                    index=j;
                }
            }
            int temp = arr[i];
            arr[i] = min;
            arr[index]= temp;
        }
    }