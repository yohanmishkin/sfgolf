export default function( server ) {


	var rob = server.create('user', { firstName: 'Rob', lastName: 'Pitts', email: 'rp', password: 'asdf' });
	var doug = server.create('user', { firstName: 'Doug', lastName: 'Miller'});
	var miraj = server.create('user', { firstName: 'Miraj', lastName: 'Patel'});
	var javier = server.create('user', { firstName: 'Javier', lastName: 'Benitez' });
	var emily = server.create('user', { firstName: 'Emily', lastName: 'Fung' });
	var blake = server.create('user', { firstName: 'Blake', lastName: 'Myers' });
	var pete = server.create('user', { firstName: 'Pete', lastName: 'Treadway' });

	var team1 = server.create('team', {user: rob.id});
	var team2 = server.create('team', { user: doug.id });
	var team3 = server.create('team', { user: miraj.id });
	var team4 = server.create('team', { user: javier.id });
	var team5 = server.create('team', { user: emily.id });
	var team6 = server.create('team', { user: blake.id });
	var team7 = server.create('team', { user: pete.id });

	server.createList('golfer', 10, { teams: [team1.id, team6.id, team7.id] } );
	server.createList('golfer', 10, { teams: [team2.id, team5.id] } );
	server.createList('golfer', 10, { teams: [team3.id, team4.id] } );
	

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
