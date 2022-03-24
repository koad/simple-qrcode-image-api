Router.route('/', function () {
  this.render('welcome');
});

// Client side routes
Router.route('/:_id', function () { 
  this.render('app');
});

