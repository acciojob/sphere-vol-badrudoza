function volume_sphere(event) {
	event.preventDefault();
    const radiusinp=document.getElementById("radius").value;
	const radius=parseInt(radiusinp);
	if(isNaN(radius)) {
		document.getElementById("volume").value="NaN";
		return;
	}
	let volume=(4/3)*Math.PI*Math.pow(radius,3);
	document.getElementById("volume").value= volume.toFixed(4);
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
