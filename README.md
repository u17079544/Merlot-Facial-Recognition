# Merlot Facial Recognition
A facial recognition system used in the authentication process.

Recognizes faces with an 85% match and above.

## Usage
To perform a facial recognition the service expects a JSON object of the following form in the body of a POST request:
```
{ 
	"type": "authenticate",
	"image": "Base64Image"
}
```
And responds with a JSON object of the form:
```
{ 
	"Success": true,
	"image": "Base64Image"
}
```
### Image constraints
Dimensions of the photos must be at minimum 200X200 for the facial recognition to work.

## Backend
### Logs
Logs are stored in a flat file that bla bla bla... Logs are pushed in regular intervals of x minutes to ther reporting service.

### Database
A mongoDB database is used to store the clientID, activation status, pictures needed to build the model, and the model used to match the face itself. When the server is started a connection to the database is opened and maintained.

The database is kept in synchronization with the database of a client information server through POST requests. When a client is added to the client information system the system will send a POST request with the body containing a JSON object of the form:
```
{
	"clientID": "integer",
	"Message": "New client created"
}
```
To signal that a new client must be added to the database. If a client must be removed (deactivated) then the expected JSON is instead of the form:
```
{
	"clientID": "integer",
	"Message": "Client deactivated"
}
```
And each responds with a JSON object of the form:
```
{
	  “status” : “success”
}
```
or
```
{
	  “status” : “failure”
}
```
Where status reflects the validity of the transaction. For example a request to add a new client with the same clientID as a client already in the database, will result in a status failure.
