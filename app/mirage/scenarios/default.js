export default function( server ) {

	server.createList('golfer', 30);
	var rob = server.create('user', { firstName: 'Rob', lastName: 'Pitts'});
	var doug = server.create('user', { firstName: 'Doug', lastName: 'Miller'});
	var miraj = server.create('user', { firstName: 'Miraj', lastName: 'Patel'});
	
	server.loadFixtures();

	// Seed your development database using your factories. This
	// data will not be loaded in your tests.

	// server.createList('contact', 10);
	// server.createList('user', 14);
}
