# A Telephone Package Task Using Design Patterns and OOP:

For this exercise, our goal is to create a telephone package. The telephone class should expose 3 different methods.

*    AddPhoneNumber - For adding a new phone number
*   RemovePhoneNumber - For removing a phone number
*    DialPhoneNumber - For dialling a phone number (only phone numbers that have been added can be dialled)

The telephone class should also maintain a list of observers and notify them whenever a phone number is dialled. 



## Requirements

1.  Create a telephone class. It should expose 3 public methods - AddPhoneNumber, RemovePhoneNumber, and DialPhoneNumber.
2.  Update the telephone class, so it uses the observer pattern (have methods to add, remove and notify observers)
3.  Create a class for the observer, it should have a method that can be called by the telephone class to notify it. 
4.  Have the telephone class notify the observers any time a phone number is dialed. 
5.  Add two observers to the telephone class

        The first one should print the phone number
        The second one should print `Now Dialling 2347023232`


