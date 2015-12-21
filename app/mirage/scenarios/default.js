export default function( server ) {


	var rob = server.create('user', { firstName: 'Rob', lastName: 'Pitts'});
	var doug = server.create('user', { firstName: 'Doug', lastName: 'Miller'});
	var miraj = server.create('user', { firstName: 'Miraj', lastName: 'Patel'});

	var team1 = server.create('team', {user: rob.id});
	var team2 = server.create('team', { user: doug.id });

	server.createList('golfer', 5, { teams: [team1.id] } );
	server.createList('golfer', 7, { teams: [team2.id] } );
	// server.createList('golfer', 30);
	
	// var team1 = server.create('team', { id: 1 });
	// var team2 = server.create('team', { id: 2 });

	// server.db.teams.update(team1.id, { user_id: rob.id, member_ids: [1, 2, 3]});
	// server.db.teams.update(team2.id, { user_id: doug.id, member_ids: [5, 12, 13]});

	// Seed your development database using your factories. This
	// data will not be loaded in your tests.

	// server.createList('contact', 10);
	// server.createList('user', 14);

	// server.loadFixtures();
}
