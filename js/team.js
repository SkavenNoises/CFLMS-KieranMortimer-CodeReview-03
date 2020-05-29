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
	}
}

let teamMembers = [
	new Member(
		"Fran",
		"fran@index.com",
		"Hey I'm fran, the one crunching your numbers and giving you the cheapest price",
		"img/person1.png"
	),
];
