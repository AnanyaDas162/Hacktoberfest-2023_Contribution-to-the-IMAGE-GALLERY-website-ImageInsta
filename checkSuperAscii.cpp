#include<iostream>
using namespace std;
void checkSuperAscii(string s){
    int b[26]={0};// frequency array
    
    for(int i=0;i<s.size();i++){
        int index=s[i]-97+1;//Find ASCII value of the current factor
        b[index-1]++;
    }
     // Traverse the string
    for(int i=0;i<s.size();i++){
        int index=s[i]-97 +1;
           
           if(b[index-1]!=index){
              cout<<"No";
              return;
           }
    }
           cout<<"yes";
}

int main()
{
  
  string s;
  cout<<"Enter any string:";
  cin>>s;
 
  // Function Call
  checkSuperAscii(s);
 
  return 0;
}
