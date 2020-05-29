function getInsurance() {
	// Mandatory field check
	if (
		document.getElementById("name").value == "" ||
		document.getElementById("age") == "" ||
		document.getElementById("horsepower").value == ""
	) {
		window.alert("Please fill in all fields before submitting");
	} else {
		// Numerical Value check
		if (isNaN(document.getElementById("horsepower"))) {
			window.alert("Please enter a numerical value into horsepower");
		} else {
			// Calculation
			let insurance = null;

			switch (document.getElementById("country").value) {
				case "Austria":
					// For Austria : insurance = horse_power x 100 / age   + 50;
					insurance = Math.ceil(
						(Number(document.getElementById("horsepower").value) * 100) /
							Number(document.getElementById("age").value) +
							50
					);

					console.log(
						`Name: ${document.getElementById("name").value}, Age: ${
							document.getElementById("age").value
						}, Country: ${document.getElementById("country").value}, Horsepower: ${
							document.getElementById("horsepower").value
						}, Insurance: ${insurance}`
					);

					document.getElementById("insuranceOutput").innerHTML = `${
						document.getElementById("name").value
					}, your insurance costs ${insurance} €`;

					document.getElementById("insuranceOutput").style.visibility = "visible";

					break;

				case "Hungary":
					// For Hungary: insurance = horse_power x 120 / age  + 100;
					insurance = Math.ceil(
						(Number(document.getElementById("horsepower").value) * 120) /
							Number(document.getElementById("age").value) +
							100
					);

					console.log(
						`Name: ${document.getElementById("name").value}, Age: ${
							document.getElementById("age").value
						}, Country: ${document.getElementById("country").value}, Horsepower: ${
							document.getElementById("horsepower").value
						}, Insurance: ${insurance}`
					);

					document.getElementById("insuranceOutput").innerHTML = `${
						document.getElementById("name").value
					}, your insurance costs ${insurance} €`;

					document.getElementById("insuranceOutput").style.visibility = "visible";

					break;

				case "Greece":
					// For Greece: insurance = horse_power x 150 / (age+3)  + 50;
					insurance = Math.ceil(
						(Number(document.getElementById("horsepower").value) * 150) /
							(Number(document.getElementById("age").value) + 3) +
							50
					);

					console.log(
						`Name: ${document.getElementById("name").value}, Age: ${
							document.getElementById("age").value
						}, Country: ${document.getElementById("country").value}, Horsepower: ${
							document.getElementById("horsepower").value
						}, Insurance: ${insurance}`
					);

					document.getElementById("insuranceOutput").innerHTML = `${
						document.getElementById("name").value
					}, your insurance costs ${insurance} €`;

					document.getElementById("insuranceOutput").style.visibility = "visible";

					break;
			}
		}
	}
}

document.getElementById("calculateInsurance").addEventListener("click", getInsurance, false);
