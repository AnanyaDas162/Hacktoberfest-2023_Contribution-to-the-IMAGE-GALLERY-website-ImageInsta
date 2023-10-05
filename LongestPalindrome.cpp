#include<bits/stdc++.h>

using namespace std;

int findPalindrome(int n){
    int rem,rev=0;
    int temp=n;
    while(n>0){
        rem=n % 10;
        rev=rev*10 + rem;
        n/=10;
    }

    if(rev==temp)
    return 1;
    else
    return 0;
}

int main(){
    int m,i,arr[50];
    int res=INT_MIN;
    cout<<"Enter the no of elements:";
    cin>>m;
    cout<<"Enter the array elements:";
    for(i=0;i<m;i++){
        cin>>arr[i];
    }
    for(i=0;i<m;i++){
        if(findPalindrome(arr[i])  && res<arr[i]){
                res=arr[i];
        }
    }

    if(res==INT_MIN){
    res=-1;
    }
    cout<<res;

}
