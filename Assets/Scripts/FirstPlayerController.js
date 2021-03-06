#pragma strict

var shipSpeed:float = 0.05;
var playerCamera:Camera;

function Start () {
}

function FixedUpdate () {

	//Get horizontal input
	var horizontalInput : float = Input.GetAxisRaw("Horizontal");
	if(horizontalInput > 0){
		//RIGHT
		transform.position.x += shipSpeed;
	} else if(horizontalInput < 0){
		//LEFT
		transform.position.x -= shipSpeed;
	}
	
	//Get vertical input
	var verticalInput : float = Input.GetAxisRaw("Vertical");
	if(verticalInput > 0){
		//UP
		transform.position.y += shipSpeed;
	} else if(verticalInput < 0){
		//DOWN
		transform.position.y -= shipSpeed;
	}
}