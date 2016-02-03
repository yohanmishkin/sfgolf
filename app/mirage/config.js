import Mirage from 'ember-cli-mirage';

export default function() {

  this.get('/api/users');
  this.get('/api/users/:id');
  this.post('/api/users');

  this.get('/api/golfers', ['golfers', 'teams']);
  this.get('/api/golfers/:id', ['golfer', 'teams']);
  this.put('/api/golfers/:id');
  
  this.get('/api/teams', ['teams', 'users', 'golfers']);
  this.get('/api/teams/:id', ['team', 'user', 'golfers']);
  this.put('/api/teams/:id');

  this.post('/token', function(db, request) {
    let params = formEncodedToJson(request.requestBody);    
    let users = db.users.where({email: params.username});
    let user;

    if (users.length > 0) {
      user = users[0];
    } else {
      return new Mirage.Response(401, {some: 'header'}, {error: 'Invalid credentails'});
    }

    if (params.password === user.password) {
      return {
        'access_token': 'passpasspass',
        'token_type': 'bearer',
        'user_id': user.id
      };
    } else {
      return new Mirage.Response(401, {some: 'header'}, {error: 'Invalid credentails'});
    }

  });

  function formEncodedToJson(encoded) {
    var result = {};
    encoded.split("&").forEach(function(part) {
      var item = part.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });
    return result;
  }
}
