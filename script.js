function volume_sphere(event) {
	event.preventDefault();
    const radiusinp=document.getElementById("radius").value;
	const radius=parseInt(radiusinp);
	if(isNaN(radius)) return "Calculated volume should be 'NaN' due to invalid input."
	let volume=(4/3)*Math.PI*Math.pow(radius,3);
	document.getElementById("volume").value="Calculated volume should be approximately "+volume.toFixed(4)+".";
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
