    int binarysearch(int arr[], int n, int k){
        int i=0,j=n-1;
        int ans=-1;
        while(i<=j ){
            int temp = (i+j)/2;
            if(arr[temp]>k) j=temp-1;
            else if(arr[temp]<k) i=temp+1;
            else {
                ans=temp;
                break;
            }
        }
        return ans;
    }
