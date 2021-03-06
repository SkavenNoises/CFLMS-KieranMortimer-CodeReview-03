class Member {
	name = "";
	email = "";
	bio = "";
	img = "";

	constructor(name, email, bio, img) {
		this.name = name;
		this.email = email;
		this.bio = bio;
		this.img = img;
	}

	addCard() {
		// Use this method to create a new card in the html
		document.getElementById("teamContainer").innerHTML += `
        <div class="card" id="${this.name}Card">
            <img class="cardImg" src="${this.img}" alt="" />

            <h2 class="cardName">${this.name}</h2>

			<h3 class="cardEmail">${this.email}</h3>

            <p class="cardText" id="${this.name}Bio">${this.bio}</p>
        </div>
        `;

		document.getElementById(`${this.name}Bio`).style.display = "none";
	}
}

let teamMembers = [
	new Member(
		"Fran",
		"fran@index.com",
		"Hey I'm Fran, the team lead on getting you the best price",
		"img/person1.jpg"
	),

	new Member(
		"Bill",
		"bill@index.com",
		"I'm Bill, I'm the one making those calls so you don't have to",
		"img/person2.jpg"
	),

	new Member(
		"Fritz",
		"fritz@index.com",
		"Fritz here, keeping you able to compare prices on your mobile",
		"img/person3.jpg"
	),

	new Member(
		"Jane",
		"jane@index.com",
		"I'm Jane, the designer and artist. Full-time cat enthusiast",
		"img/person4.jpeg"
	),

	new Member(
		"Meg",
		"meg@index.com",
		"I keep our service ticking over with quality assurance",
		"img/person5.jpeg"
	),
];

// Logging correct initialisation of class objects
for (let member of teamMembers) {
	console.log(member);
}

// Constructing card for each team member into #teamContainer
for (let member of teamMembers) {
	member.addCard();

	console.log(`${member.name}'s card added to page`);
}

// Attaching event listeners for each team member
for (let member of teamMembers) {
	document.getElementById(`${member.name}Card`).addEventListener(
		"click",
		function () {
			console.log(`${member.name} has been clicked`);

			if (document.getElementById(`${member.name}Bio`).style.display === "none") {
				document.getElementById(`${member.name}Bio`).style.display = "unset";
			} else {
				document.getElementById(`${member.name}Bio`).style.display = "none";
			}
		},
		false
	);
}
